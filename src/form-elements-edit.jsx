import React from "react";
import TextAreaAutosize from "react-textarea-autosize";
import {
  ContentState,
  EditorState,
  // convertFromHTML,
  convertToRaw,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";

import DynamicOptionList from "./dynamic-option-list";
import { get } from "./stores/requests";
import ID from "./UUID";
import IntlMessages from "./language-provider/IntlMessages";

const toolbar = {
  options: [
    "inline",
    "list",
    "textAlign",
    "fontSize",
    "colorPicker",
    "link",
    "history",
  ],
  inline: {
    inDropdown: false,
    className: undefined,
    options: ["bold", "italic", "underline", "superscript", "subscript"],
  },
  colorPicker: {
    colors: [
      "rgb(37, 77, 87)",
      "rgb(85, 157, 179)",
      "rgb(200, 154, 85)",
      "rgb(202, 123, 84)",
      "rgb(164, 103, 80)",
      "rgb(141, 148, 104)",
      "rgb(128, 98, 136)",
      "rgb(230, 229, 227)",
      /* DEFAULT COLORS */
      // "rgb(97, 189, 109)",
      // "rgb(26, 188, 156)",
      // "rgb(84, 172, 210)",
      "rgb(44, 130, 201)",
      "rgb(147, 101, 184)",
      "rgb(71, 85, 119)",
      "rgb(204, 204, 204)",
      "rgb(65, 168, 95)",
      "rgb(0, 168, 133)",
      "rgb(61, 142, 185)",
      "rgb(41, 105, 176)",
      "rgb(85, 57, 130)",
      "rgb(40, 50, 78)",
      "rgb(0, 0, 0)",
      "rgb(247, 218, 100)",
      "rgb(251, 160, 38)",
      "rgb(235, 107, 86)",
      "rgb(226, 80, 65)",
      "rgb(163, 143, 132)",
      // "rgb(239, 239, 239)",
      "rgb(255, 255, 255)",
      "rgb(250, 197, 28)",
      "rgb(243, 121, 52)",
      "rgb(209, 72, 65)",
      "rgb(184, 49, 47)",
      "rgb(124, 112, 107)",
      // "rgb(209, 213, 216)",
    ],
  },
};

const columnSizeOptions = [
  { value: "md:w-1/12 px-3", label: "1/12" },
  { value: "md:w-2/12 px-3", label: "2/12" },
  { value: "md:w-3/12 px-3", label: "3/12" },
  { value: "md:w-4/12 px-3", label: "4/12" },
  { value: "md:w-5/12 px-3", label: "5/12" },
  { value: "md:w-6/12 px-3", label: "6/12" },
  { value: "md:w-7/12 px-3", label: "7/12" },
  { value: "md:w-8/12 px-3", label: "8/12" },
  { value: "md:w-9/12 px-3", label: "9/12" },
  { value: "md:w-10/12 px-3", label: "10/12" },
  { value: "md:w-11/12 px-3", label: "11/12" },
  { value: "md:w-full px-3", label: "12/12" },
];

export default class FormElementsEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: this.props.element,
      data: this.props.data,
      dirty: false,
      isMounted: false,
      searchMedia: "",
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true, searchMedia: "" });
  }

  toggleRequired() {
    // const this_element = this.state.element;
  }

  editElementProp(elemProperty, targProperty, e) {
    // elemProperty could be content or label
    // targProperty could be value or checked
    const this_element = { ...this.state.element };
    if (elemProperty === "sourceFile") {
      if (e.target.files?.[0]?.name) {
        this_element[elemProperty] = e.target.files[0];
      } else {
        this_element[elemProperty] = null;
      }
    } else {
      this_element[elemProperty] = e.target[targProperty];
    }

    this.setState(
      {
        element: this_element,
        dirty: true,
      },
      () => {
        if (
          targProperty === "checked" ||
          (targProperty === "value" && this_element.element === "ColorPicker")
        ) {
          this.updateElement();
        }
      }
    );
  }

  onEditorStateChange(index, property, editorContent) {
    // const html = draftToHtml(convertToRaw(editorContent.getCurrentContent())).replace(/<p>/g, '<div>').replace(/<\/p>/g, '</div>');
    const html = draftToHtml(convertToRaw(editorContent.getCurrentContent()))
      .replace(/<p /g, "<div ")
      .replace(/<p>/g, "<div>")
      .replace(/<\/p>/g, "</div>")
      .replace(/&nbsp;/g, " ")
      .replace(/(?:\r\n|\r|\n)/g, " ");
    const this_element = { ...this.state.element };
    this_element[property] = html;

    this.setState({
      element: this_element,
      dirty: true,
    });
  }

  updateElement() {
    const this_element = this.state.element;
    // to prevent ajax calls with no change
    if (this.state.dirty) {
      this.props.updateElement.call(this.props.preview, this_element);
      this.setState({ dirty: false });
    }
  }

  editChildItemsClass(index, e) {
    const this_element = this.state.element;
    this_element.childItemsClass[index] = e.target.value;
    this.setState(
      {
        element: this_element,
        dirty: true,
      },
      () => {
        this.updateElement();
      }
    );
    // to prevent ajax calls with no change
    this.props.updateElement.call(this.props.preview, this_element);
    this.setState({ dirty: false });
    this.updateElement();
  }

  convertFromHTML(content) {
    const newContent = htmlToDraft(content);
    if (!newContent.contentBlocks || !newContent.contentBlocks.length) {
      // to prevent crash when no contents in editor
      return EditorState.createEmpty();
    }
    const contentState = ContentState.createFromBlockArray(newContent);
    return EditorState.createWithContent(contentState);
  }

  addOptions() {
    const optionsApiUrl = document.getElementById("optionsApiUrl").value;
    if (optionsApiUrl) {
      get(optionsApiUrl).then((data) => {
        this.props.element.options = [];
        const { options } = this.props.element;
        data.forEach((x) => {
          // eslint-disable-next-line no-param-reassign
          x.key = ID.uuid();
          options.push(x);
        });
        const this_element = this.state.element;
        this.setState({
          element: this_element,
          dirty: true,
        });
      });
    }
  }

  uploadFile() {
    this.props.element.handleUpload(this.state.element?.sourceFile, (url) => {
      const this_element = { ...this.state.element };
      this_element.src = url;
      this.setState(
        {
          element: this_element,
          dirty: true,
        },
        () => {
          this.updateElement();
        }
      );
    });
  }

  MediaBrowserTile(file) {
    const contentType = file?.contentType?.split("/").shift();
    switch (contentType) {
      case "image":
        return (
          <div
            className="media-tile media-tile-image"
            style={{ backgroundImage: `url('${file?.url}')` }}
          >
            <div className="media-file-name" title={file?.fileName}>
              <span>{file?.fileName}</span>
            </div>
          </div>
        );
      case "video":
        return (
          <div className="media-tile flex-col">
            <svg
              className="w-full"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5145_6055)">
                <path
                  d="M11.8047 0H4.33984C3.62109 0 3.03516 0.585938 3.03516 1.30859V18.6953C3.03516 19.418 3.62109 20 4.34375 20.0039H17.4492C18.1719 20.0039 18.7539 19.418 18.7578 18.6953L18.7188 5.78125L11.8047 0Z"
                  fill="#4EB3F2"
                />
                <path
                  d="M11.8047 0L11.7852 5.64453C11.7852 5.64453 11.8047 5.78125 11.9219 5.78125H18.7188L11.8047 0Z"
                  fill="#0077CC"
                />
                <path
                  d="M1.77734 9.63672H14.9648C15.2578 9.63672 15.4961 9.875 15.4961 10.168V16.0586C15.4961 16.3516 15.2578 16.5898 14.9648 16.5898H1.77734C1.48438 16.5898 1.24609 16.3516 1.24609 16.0586V10.168C1.24609 9.875 1.48438 9.63672 1.77734 9.63672Z"
                  fill="#0077CC"
                />
                <path
                  d="M1.55469 11.7305H2.46875L3.10547 13.7656L3.73438 11.7305H4.62109L3.57031 14.5586H2.62109L1.55469 11.7305Z"
                  fill="white"
                />
                <path
                  d="M4.9375 11.7305H5.8125V14.5586H4.9375V11.7305Z"
                  fill="white"
                />
                <path
                  d="M6.45312 11.7305H7.75C8.00781 11.7305 8.21094 11.7656 8.37109 11.8359C8.52344 11.9023 8.66016 12.0039 8.76172 12.1328C8.86719 12.2656 8.94141 12.4219 8.98438 12.5859C9.03125 12.7656 9.05469 12.9492 9.05469 13.1328C9.05469 13.4336 9.01953 13.668 8.95312 13.8359C8.89062 13.9961 8.79297 14.1367 8.66797 14.2539C8.55859 14.3594 8.42188 14.4375 8.27344 14.4805C8.10547 14.5273 7.92969 14.5547 7.75391 14.5586H6.45703V11.7305H6.45312ZM7.32813 12.3711V13.9141H7.54297C7.72656 13.9141 7.85547 13.8945 7.93359 13.8555C8.01563 13.8086 8.08203 13.7344 8.11328 13.6445C8.15625 13.543 8.17969 13.3789 8.17969 13.1523C8.17969 12.8516 8.13281 12.6484 8.03125 12.5352C7.93359 12.4258 7.77344 12.3711 7.54688 12.3711H7.32813Z"
                  fill="white"
                />
                <path
                  d="M9.51172 11.7305H11.8555V12.3359H10.3867V12.7852H11.7461V13.3633H10.3867V13.9219H11.8945V14.5625H9.51172V11.7305Z"
                  fill="white"
                />
                <path
                  d="M12.2578 13.1445C12.2578 12.6836 12.3867 12.3242 12.6445 12.0664C12.9023 11.8086 13.2617 11.6797 13.7188 11.6797C14.1914 11.6797 14.5508 11.8047 14.8086 12.0586C15.0625 12.3125 15.1914 12.6641 15.1914 13.1211C15.1914 13.4531 15.1367 13.7227 15.0234 13.9336C14.9141 14.1406 14.7461 14.3125 14.5391 14.4258C14.3281 14.543 14.0664 14.6016 13.7539 14.6016C13.4336 14.6016 13.1719 14.5508 12.9609 14.4492C12.7461 14.3437 12.5703 14.1758 12.4531 13.9688C12.3242 13.75 12.2578 13.4766 12.2578 13.1445ZM13.1328 13.1523C13.1328 13.4375 13.1875 13.6445 13.293 13.7695C13.3984 13.8945 13.543 13.957 13.7266 13.957C13.9141 13.957 14.0586 13.8945 14.1641 13.7734C14.2656 13.6523 14.3203 13.4336 14.3203 13.1172C14.3203 12.8516 14.2656 12.6562 14.1602 12.5352C14.0547 12.4141 13.9063 12.3516 13.7227 12.3516C13.5586 12.3437 13.4023 12.4141 13.2969 12.5391C13.1875 12.6562 13.1328 12.8633 13.1328 13.1523Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5145_6055">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="media-file-name" title={file?.fileName}>
              <span>{file?.fileName}</span>
            </div>
          </div>
        );
      case "audio":
        return (
          <div className="media-tile flex-col">
            <svg
              className="w-full"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5145_6085)">
                <path
                  d="M11.8047 0H4.33984C3.62109 0 3.03516 0.585938 3.03516 1.30859V18.6953C3.03516 19.418 3.62109 20 4.34375 20.0039H17.4492C18.1719 20.0039 18.7539 19.418 18.7578 18.6953L18.7188 5.78125L11.8047 0Z"
                  fill="#D9DEFB"
                />
                <path
                  d="M11.8047 0L11.7852 5.64453C11.7852 5.64453 11.8047 5.78125 11.9219 5.78125H18.7188L11.8047 0Z"
                  fill="#3B478F"
                />
                <path
                  d="M1.77734 9.63672H14.9648C15.2578 9.63672 15.4961 9.875 15.4961 10.168V16.0586C15.4961 16.3516 15.2578 16.5898 14.9648 16.5898H1.77734C1.48438 16.5898 1.24609 16.3516 1.24609 16.0586V10.168C1.24609 9.875 1.48438 9.63672 1.77734 9.63672Z"
                  fill="#3B478F"
                />
                <path
                  d="M3.53125 14.0742H2.55859L2.42578 14.5312H1.55469L2.59375 11.7656H3.52734L4.56641 14.5312H3.66797L3.53125 14.0742ZM3.35156 13.4766L3.04688 12.4805L2.74609 13.4766H3.35156Z"
                  fill="white"
                />
                <path
                  d="M6.50391 11.7656H7.35547V13.4141C7.35547 13.5703 7.32812 13.7266 7.27734 13.8789C7.22656 14.0234 7.14453 14.1523 7.03906 14.2617C6.94141 14.3633 6.82422 14.4414 6.69531 14.4922C6.50391 14.5586 6.30078 14.5898 6.09766 14.5859C5.94922 14.5859 5.80469 14.5742 5.65625 14.5586C5.51563 14.5469 5.38281 14.5078 5.25781 14.4453C5.14453 14.3867 5.04687 14.3047 4.96484 14.207C4.88281 14.1133 4.82031 14.0078 4.78125 13.8867C4.73437 13.7344 4.70703 13.5781 4.70312 13.418V11.7734H5.55469V13.4609C5.55469 13.6133 5.59766 13.7305 5.67969 13.8125C5.76172 13.8945 5.87891 13.9375 6.02734 13.9414C6.17578 13.9414 6.28906 13.8984 6.375 13.8164C6.45703 13.7344 6.5 13.6133 6.5 13.4609L6.50391 11.7656Z"
                  fill="white"
                />
                <path
                  d="M7.93359 11.7656H9.20313C9.45313 11.7656 9.65625 11.8008 9.80859 11.8672C9.95703 11.9297 10.0898 12.0312 10.1914 12.1602C10.293 12.293 10.3672 12.4414 10.4102 12.6055C10.457 12.7812 10.4805 12.9609 10.4766 13.1406C10.4766 13.4375 10.4414 13.6641 10.375 13.8281C10.3125 13.9844 10.2187 14.125 10.0937 14.2383C9.98437 14.3437 9.85156 14.418 9.70703 14.457C9.54297 14.5039 9.37109 14.5312 9.19922 14.5312H7.92969L7.93359 11.7656ZM8.78906 12.3906V13.9023H9C9.17969 13.9023 9.30469 13.8828 9.38281 13.8437C9.46484 13.7969 9.52734 13.7227 9.55859 13.6367C9.60156 13.5391 9.62109 13.3789 9.62109 13.1562C9.62109 12.8633 9.57422 12.6641 9.47656 12.5547C9.38281 12.4453 9.22266 12.3945 9 12.3945H8.78906V12.3906Z"
                  fill="white"
                />
                <path
                  d="M10.9609 11.7656H11.8164V14.5312H10.9609V11.7656Z"
                  fill="white"
                />
                <path
                  d="M12.3242 13.1484C12.3242 12.6953 12.4492 12.3438 12.7031 12.0938C12.957 11.8438 13.3047 11.7148 13.7539 11.7148C14.2148 11.7148 14.5703 11.8398 14.8164 12.0859C15.0625 12.332 15.1914 12.6797 15.1914 13.125C15.1914 13.4492 15.1367 13.7109 15.0273 13.9219C14.9219 14.125 14.7578 14.293 14.5547 14.4062C14.3477 14.5195 14.0937 14.5781 13.7852 14.5781C13.4727 14.5781 13.2148 14.5273 13.0117 14.4297C12.8008 14.3242 12.6289 14.1602 12.5156 13.957C12.3867 13.7422 12.3242 13.4727 12.3242 13.1484ZM13.1758 13.1562C13.1758 13.4336 13.2266 13.6367 13.332 13.7578C13.4375 13.8789 13.5938 13.9492 13.7578 13.9414C13.9414 13.9414 14.082 13.8828 14.1836 13.7617C14.2852 13.6406 14.3359 13.4297 14.332 13.1172C14.332 12.8555 14.2812 12.668 14.1758 12.5469C14.0703 12.4258 13.9297 12.3672 13.75 12.3672C13.5898 12.3594 13.4375 12.4297 13.3359 12.5508C13.2305 12.6719 13.1758 12.8711 13.1758 13.1562Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5145_6085">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="media-file-name" title={file?.fileName}>
              <span>{file?.fileName}</span>
            </div>
          </div>
        );
      default:
        return (
          <div
            className="media-tile-image"
            style={{ backgroundImage: `url(${file.url})` }}
          ></div>
        );
    }
  }

  selectFromMediaFile(file) {
    this.props.element.handleMediaChoose(
      file,
      (url, assetId = null, cover = null) => {
        console.log("url", url, assetId, cover);
        const this_element = { ...this.state.element };
        this_element.src = url;
        this_element.assetId = assetId;
        this_element.srcCover = cover;
        this.setState(
          {
            element: this_element,
            dirty: true,
          },
          () => {
            this.updateElement();
          }
        );
      }
    );
  }

  render() {
    // if (this.state.dirty) {
    //   this.props.element.dirty = true;
    // }

    const this_checked = this.state.element.hasOwnProperty("required")
      ? this.state.element.required
      : false;
    const this_read_only = this.state.element.hasOwnProperty("readOnly")
      ? this.state.element.readOnly
      : false;
    const this_canDisplayInline = this.state.element.hasOwnProperty(
      "canDisplayInline"
    )
      ? this.state.element.canDisplayInline
      : false;
    const this_isLabelDisplaySecond = this.state.element.hasOwnProperty(
      "isLabelDisplaySecond"
    )
      ? this.state.element.isLabelDisplaySecond
      : false;

    const this_colorPickerDefaultValue =
      this.state.element.hasOwnProperty("defaultValue") &&
      this.state.element.element === "ColorPicker"
        ? this.state.element.defaultValue
        : "#2f94aa";
    const this_default_today = this.state.element.hasOwnProperty("defaultToday")
      ? this.state.element.defaultToday
      : false;
    const this_show_time_select = this.state.element.hasOwnProperty(
      "showTimeSelect"
    )
      ? this.state.element.showTimeSelect
      : false;
    const this_show_time_select_only = this.state.element.hasOwnProperty(
      "showTimeSelectOnly"
    )
      ? this.state.element.showTimeSelectOnly
      : false;
    const this_show_time_input = this.state.element.hasOwnProperty(
      "showTimeInput"
    )
      ? this.state.element.showTimeInput
      : false;
    const this_checked_inline = this.state.element.hasOwnProperty("inline")
      ? this.state.element.inline
      : false;
    const this_checked_bold = this.state.element.hasOwnProperty("bold")
      ? this.state.element.bold
      : false;
    const this_checked_italic = this.state.element.hasOwnProperty("italic")
      ? this.state.element.italic
      : false;
    const this_checked_center = this.state.element.hasOwnProperty("center")
      ? this.state.element.center
      : false;
    const this_checked_page_break = this.state.element.hasOwnProperty(
      "pageBreakBefore"
    )
      ? this.state.element.pageBreakBefore
      : false;
    const this_checked_alternate_form = this.state.element.hasOwnProperty(
      "alternateForm"
    )
      ? this.state.element.alternateForm
      : false;

    const {
      canHavePageBreakBefore,
      canHaveAlternateForm,
      canHaveDisplayHorizontal,
      canHaveOptionCorrect,
      canHaveOptionValue,
      canEditOptionValues,
    } = this.props.element;
    const canHaveImageSize =
      this.state.element.element === "Image" ||
      this.state.element.element === "Video" ||
      this.state.element.element === "Camera";

    const isMedia =
      this.state.element.element === "Image" ||
      this.state.element.element === "Video";

    const mediaAccept =
      this.state.element.element === "Video" ? ".mp4, .mp3, .wav" : "image/*";

    const showUploadOption =
      isMedia && typeof this.props.element?.handleUpload !== "undefined";
    const showMediaChooseOption =
      isMedia && typeof this.props.element?.handleMediaChoose !== "undefined";
    const sourceType = this.state.element?.sourceType ?? "Link";
    const sourceFile = this.state.element?.sourceFile?.name ?? "No file chosen";

    const mediaSource =
      this.state.element.element === "Video"
        ? this.props?.videoMediaSource
        : this.props?.imageMediaSource;

    const sourceTypeOptions = ["Link"];
    if (showUploadOption) {
      sourceTypeOptions.push("Upload");
    }
    if (showMediaChooseOption) {
      sourceTypeOptions.push("Choose From Media");
    }

    const isHeader = this.state.element.element === "Header";
    const finalToolbar = {
      ...toolbar,
      options: !isHeader
        ? toolbar.options
        : toolbar.options.filter((row) => row !== "fontSize"),
    };

    const this_files = this.props.files.length ? this.props.files : [];
    if (
      this_files.length < 1 ||
      (this_files.length > 0 && this_files[0].id !== "")
    ) {
      this_files.unshift({ id: "", file_name: "" });
    }

    let editorState;
    if (this.props.element.hasOwnProperty("content")) {
      editorState = this.convertFromHTML(this.props.element.content);
    }
    if (this.props.element.hasOwnProperty("label")) {
      editorState = this.convertFromHTML(this.props.element.label);
    }

    return (
      <div>
        <div className="flex justify-between items-center">
          <h4 className="font-medium">{this.props.element.text}</h4>
          <i
            className="fas fa-times dismiss-edit"
            onClick={this.props.manualEditModeOff}
          ></i>
        </div>
        {this.props.element.hasOwnProperty("content") && isHeader && (
          <div className="form-group">
            <label className="control-label">
              <IntlMessages id="header-type" />:
            </label>

            <select
              id="headerType"
              className="form-control"
              defaultValue={this.state.element?.headerType ?? "H3"}
              onBlur={this.updateElement.bind(this)}
              onChange={this.editElementProp.bind(this, "headerType", "value")}
            >
              {["Normal", "H1", "H2", "H3", "H4", "H5", "H6"].map((row) => {
                return (
                  <option value={row} key={row}>
                    {row}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        {this.props.element.hasOwnProperty("content") && (
          <div className="form-group">
            <label className="control-label">
              <IntlMessages id="text-to-display" />:
            </label>

            {this.state.isMounted && (
              <Editor
                toolbar={finalToolbar}
                defaultEditorState={editorState}
                onBlur={this.updateElement.bind(this)}
                onEditorStateChange={this.onEditorStateChange.bind(
                  this,
                  0,
                  "content"
                )}
                stripPastedStyles={true}
              />
            )}
          </div>
        )}
        {this.props.element.hasOwnProperty("file_path") && (
          <div className="form-group">
            <label className="control-label" htmlFor="fileSelect">
              <IntlMessages id="choose-file" />:
            </label>
            <select
              id="fileSelect"
              className="form-control"
              defaultValue={this.props.element.file_path}
              onBlur={this.updateElement.bind(this)}
              onChange={this.editElementProp.bind(this, "file_path", "value")}
            >
              {this_files.map((file) => {
                const this_key = `file_${file.id}`;
                return (
                  <option value={file.id} key={this_key}>
                    {file.file_name}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        {this.props.element.hasOwnProperty("href") && (
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              defaultValue={this.props.element.href}
              onBlur={this.updateElement.bind(this)}
              onChange={this.editElementProp.bind(this, "href", "value")}
            />
          </div>
        )}
        {this.props.element.hasOwnProperty("label") && (
          <div className="form-group">
            <label>
              <IntlMessages id="display-label" />
            </label>
            {this.state.isMounted && (
              <Editor
                toolbar={toolbar}
                defaultEditorState={editorState}
                onBlur={this.updateElement.bind(this)}
                onEditorStateChange={this.onEditorStateChange.bind(
                  this,
                  0,
                  "label"
                )}
                stripPastedStyles={true}
              />
            )}
            <br />
            {this.props.element.hasOwnProperty("defaultValue") &&
              this.props.element.element === "ColorPicker" && (
                <div>
                  <label
                    className="control-label"
                    htmlFor="is-this_colorPickerDefaultValue"
                  >
                    <IntlMessages id="colorPickerDefaultValue" />
                  </label>
                  <div className="default-color-picker-wrapper">
                    <input
                      id="is-this_colorPickerDefaultValue"
                      type="color"
                      className="default-color-picker-value"
                      value={this_colorPickerDefaultValue}
                      onChange={this.editElementProp.bind(
                        this,
                        "defaultValue",
                        "value"
                      )}
                    />
                  </div>
                </div>
              )}
            <br />
            <div className="custom-control custom-checkbox">
              <input
                id="is-required"
                className="custom-control-input"
                type="checkbox"
                checked={this_checked}
                value={true}
                onChange={this.editElementProp.bind(
                  this,
                  "required",
                  "checked"
                )}
              />
              <label className="custom-control-label" htmlFor="is-required">
                <IntlMessages id="required" />
              </label>
            </div>
            {this.props.element.hasOwnProperty("readOnly") && (
              <div className="custom-control custom-checkbox">
                <input
                  id="is-read-only"
                  className="custom-control-input"
                  type="checkbox"
                  checked={this_read_only}
                  value={true}
                  onChange={this.editElementProp.bind(
                    this,
                    "readOnly",
                    "checked"
                  )}
                />
                <label className="custom-control-label" htmlFor="is-read-only">
                  <IntlMessages id="read-only" />
                </label>
              </div>
            )}
            {this.props.element.hasOwnProperty("canDisplayInline") && (
              <div className="custom-control custom-checkbox">
                <input
                  id="is-canDisplayInline"
                  className="custom-control-input"
                  type="checkbox"
                  checked={this_canDisplayInline}
                  value={true}
                  onChange={this.editElementProp.bind(
                    this,
                    "canDisplayInline",
                    "checked"
                  )}
                />
                <label
                  className="custom-control-label"
                  htmlFor="is-canDisplayInline"
                >
                  <IntlMessages id="canDisplayInline" />
                </label>
              </div>
            )}
            {this.props.element.hasOwnProperty("isLabelDisplaySecond") && (
              <div className="custom-control custom-checkbox">
                <input
                  id="is-isLabelDisplaySecond"
                  className="custom-control-input"
                  type="checkbox"
                  checked={this_isLabelDisplaySecond}
                  value={true}
                  onChange={this.editElementProp.bind(
                    this,
                    "isLabelDisplaySecond",
                    "checked"
                  )}
                />
                <label
                  className="custom-control-label"
                  htmlFor="is-isLabelDisplaySecond"
                >
                  <IntlMessages id="isLabelDisplaySecond" />
                </label>
              </div>
            )}
            {this.props.element.hasOwnProperty("defaultToday") && (
              <div className="custom-control custom-checkbox">
                <input
                  id="is-default-to-today"
                  className="custom-control-input"
                  type="checkbox"
                  checked={this_default_today}
                  value={true}
                  onChange={this.editElementProp.bind(
                    this,
                    "defaultToday",
                    "checked"
                  )}
                />
                <label
                  className="custom-control-label"
                  htmlFor="is-default-to-today"
                >
                  <IntlMessages id="default-to-today" />?
                </label>
              </div>
            )}
            {this.props.element.hasOwnProperty("showTimeSelect") && (
              <div className="custom-control custom-checkbox">
                <input
                  id="show-time-select"
                  className="custom-control-input"
                  type="checkbox"
                  checked={this_show_time_select}
                  value={true}
                  onChange={this.editElementProp.bind(
                    this,
                    "showTimeSelect",
                    "checked"
                  )}
                />
                <label
                  className="custom-control-label"
                  htmlFor="show-time-select"
                >
                  <IntlMessages id="show-time-select" />?
                </label>
              </div>
            )}
            {this_show_time_select &&
              this.props.element.hasOwnProperty("showTimeSelectOnly") && (
                <div className="custom-control custom-checkbox">
                  <input
                    id="show-time-select-only"
                    className="custom-control-input"
                    type="checkbox"
                    checked={this_show_time_select_only}
                    value={true}
                    onChange={this.editElementProp.bind(
                      this,
                      "showTimeSelectOnly",
                      "checked"
                    )}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="show-time-select-only"
                  >
                    <IntlMessages id="show-time-select-only" />?
                  </label>
                </div>
              )}
            {this.props.element.hasOwnProperty("showTimeInput") && (
              <div className="custom-control custom-checkbox">
                <input
                  id="show-time-input"
                  className="custom-control-input"
                  type="checkbox"
                  checked={this_show_time_input}
                  value={true}
                  onChange={this.editElementProp.bind(
                    this,
                    "showTimeInput",
                    "checked"
                  )}
                />
                <label
                  className="custom-control-label"
                  htmlFor="show-time-input"
                >
                  <IntlMessages id="show-time-input" />?
                </label>
              </div>
            )}
            {(this.state.element.element === "RadioButtons" ||
              this.state.element.element === "LikertScale" ||
              this.state.element.element === "Checkboxes") &&
              canHaveDisplayHorizontal && (
                <div className="custom-control custom-checkbox">
                  <input
                    id="display-horizontal"
                    className="custom-control-input"
                    type="checkbox"
                    checked={this_checked_inline}
                    value={true}
                    onChange={this.editElementProp.bind(
                      this,
                      "inline",
                      "checked"
                    )}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="display-horizontal"
                  >
                    <IntlMessages id="display-horizontal" />
                  </label>
                </div>
              )}
          </div>
        )}

        {(showUploadOption || showMediaChooseOption) && (
          <div>
            <div className="form-group">
              <label className="control-label" htmlFor="sourceType">
                <IntlMessages id="source" />:
              </label>
              <select
                id="sourceType"
                className="form-control"
                defaultValue={this.state.element?.sourceType ?? "Link"}
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(
                  this,
                  "sourceType",
                  "value"
                )}
              >
                {sourceTypeOptions.map((row) => {
                  return (
                    <option value={row} key={row}>
                      {row}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        )}

        {this.props.element.hasOwnProperty("src") && sourceType === "Link" && (
          <div>
            <div className="form-group">
              <label className="control-label" htmlFor="srcInput">
                <IntlMessages id="link-to" />:
              </label>
              <input
                id="srcInput"
                type="text"
                className="form-control"
                defaultValue={this.props.element.src}
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(this, "src", "value")}
              />
            </div>
          </div>
        )}

        {this.props.element.hasOwnProperty("src") &&
          sourceType === "Upload" && (
            <div>
              <div className="form-group">
                <div className="mt-5">
                  <div className="mt-4 flex gap-2 text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="sourceFile"
                      className="relative cursor-pointer flex w-full"
                    >
                      <div className="relative cursor-pointer button button-secondary whitespace-nowrap">
                        Choose File
                        <input
                          id="sourceFile"
                          name="sourceFile"
                          type="file"
                          className="sr-only"
                          accept={mediaAccept}
                          // onBlur={this.updateElement.bind(this)}
                          onChange={this.editElementProp.bind(
                            this,
                            "sourceFile",
                            "value"
                          )}
                        />
                      </div>
                      <p className="pl-1 flex items-center border border-l-0 rounded-r-md w-full">
                        {sourceFile}
                      </p>
                    </label>
                    {sourceFile !== "No file chosen" && (
                      <div>
                        <button
                          type="button"
                          className="button button-secondary w-20"
                          onClick={this.uploadFile.bind(this)}
                        >
                          Upload
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        {this.props.element.hasOwnProperty("src") &&
          sourceType === "Choose From Media" &&
          mediaSource.length > 0 && (
            <div>
              <div className="form-group">
                <div className="mt-5">
                  <div className="mt-4 text-sm leading-6 text-gray-600">
                    <div className="media-tile-wrapper">
                      <input
                        name="searchMedia"
                        className="form-control mb-2"
                        placeholder="Search media"
                        onChange={(e) => {
                          this.setState({ searchMedia: e.target.value });
                        }}
                        value={this.state.searchMedia}
                      />
                      {mediaSource
                        .filter((file) => {
                          return !!(
                            this.state.searchMedia === "" ||
                            file?.fileName
                              ?.toLowerCase()
                              ?.includes(this.state?.searchMedia?.toLowerCase())
                          );
                        })
                        .map((file) => (
                          <div
                            key={file?.id}
                            className={
                              file?.url === this.state.element.src
                                ? "active-tile"
                                : ""
                            }
                            onClick={this.selectFromMediaFile.bind(this, file)}
                          >
                            {this.MediaBrowserTile(file)}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        {canHaveImageSize && (
          <div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  id="do-center"
                  className="custom-control-input"
                  type="checkbox"
                  checked={this_checked_center}
                  value={true}
                  onChange={this.editElementProp.bind(
                    this,
                    "center",
                    "checked"
                  )}
                />
                <label className="custom-control-label" htmlFor="do-center">
                  <IntlMessages id="center" />?
                </label>
              </div>
            </div>
            <div className="row">
              <div className="sm:w-3/12 px-3">
                <label className="control-label" htmlFor="elementWidth">
                  <IntlMessages id="width" />:
                </label>
                <input
                  id="elementWidth"
                  type="text"
                  className="form-control"
                  defaultValue={this.props.element.width}
                  onBlur={this.updateElement.bind(this)}
                  onChange={this.editElementProp.bind(this, "width", "value")}
                />
              </div>
              <div className="sm:w-3/12 px-3">
                <label className="control-label" htmlFor="elementHeight">
                  <IntlMessages id="height" />:
                </label>
                <input
                  id="elementHeight"
                  type="text"
                  className="form-control"
                  defaultValue={this.props.element.height}
                  onBlur={this.updateElement.bind(this)}
                  onChange={this.editElementProp.bind(this, "height", "value")}
                />
              </div>
            </div>
          </div>
        )}
        {this.state.element.element === "FileUpload" && (
          <div>
            <div className="form-group">
              <label className="control-label" htmlFor="fileType">
                <IntlMessages id="choose-file-type" />:
              </label>
              <select
                id="fileType"
                className="form-control"
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(this, "fileType", "value")}
              >
                {[
                  {
                    type: "image, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, video/mp4,video/x-m4v,video/*",
                    typeName: "All File Type",
                  },
                  { type: "image", typeName: "Image" },
                  { type: "application/pdf", typeName: "PDF" },
                  {
                    type: "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    typeName: "Word",
                  },
                  {
                    type: "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                    typeName: "Excel",
                  },
                  {
                    type: "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    typeName: "Powerpoint",
                  },
                  {
                    type: "video/mp4,video/x-m4v,video/*",
                    typeName: "Videos",
                  },
                ].map((file, index) => (
                  <option value={file.type} key={index}>
                    {file.typeName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        {this.state.element.element === "Signature" &&
        this.props.element.readOnly ? (
          <div className="form-group">
            <label className="control-label" htmlFor="variableKey">
              <IntlMessages id="variable-key" />:
            </label>
            <input
              id="variableKey"
              type="text"
              className="form-control"
              defaultValue={this.props.element.variableKey}
              onBlur={this.updateElement.bind(this)}
              onChange={this.editElementProp.bind(this, "variableKey", "value")}
            />
            <p className="help-block">
              <IntlMessages id="variable-key-desc" />.
            </p>
          </div>
        ) : (
          <div />
        )}

        {this.props.element.hasOwnProperty("childItemsClass") && (
          <div>
            {this.state.element.childItemsClass.map((childItem, index) => {
              return (
                <div key={index} className="form-group">
                  <label className="control-label" htmlFor="childItemsClass">
                    <IntlMessages id="child" /> {index + 1}{" "}
                    <IntlMessages id="width" />:
                  </label>
                  <select
                    id="childItemsClass"
                    className="form-control"
                    defaultValue={childItem}
                    onChange={this.editChildItemsClass.bind(this, index)}
                  >
                    {columnSizeOptions?.map((row) => {
                      return (
                        <option value={row.value} key={row.value}>
                          {row.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            })}
          </div>
        )}

        {canHavePageBreakBefore && (
          <div className="form-group">
            <label className="control-label">
              <IntlMessages id="print-options" />
            </label>
            <div className="custom-control custom-checkbox">
              <input
                id="page-break-before-element"
                className="custom-control-input"
                type="checkbox"
                checked={this_checked_page_break}
                value={true}
                onChange={this.editElementProp.bind(
                  this,
                  "pageBreakBefore",
                  "checked"
                )}
              />
              <label
                className="custom-control-label"
                htmlFor="page-break-before-element"
              >
                <IntlMessages id="page-break-before-elements" />?
              </label>
            </div>
          </div>
        )}

        {canHaveAlternateForm && (
          <div className="form-group">
            <label className="control-label">
              <IntlMessages id="alternate-signature-page" />
            </label>
            <div className="custom-control custom-checkbox">
              <input
                id="display-on-alternate"
                className="custom-control-input"
                type="checkbox"
                checked={this_checked_alternate_form}
                value={true}
                onChange={this.editElementProp.bind(
                  this,
                  "alternateForm",
                  "checked"
                )}
              />
              <label
                className="custom-control-label"
                htmlFor="display-on-alternate"
              >
                <IntlMessages id="display-on-alternate-signature-page" />?
              </label>
            </div>
          </div>
        )}
        {this.props.element.hasOwnProperty("step") && (
          <div className="form-group">
            <div className="form-group-range">
              <label className="control-label" htmlFor="rangeStep">
                <IntlMessages id="step" />
              </label>
              <input
                id="rangeStep"
                type="number"
                className="form-control"
                defaultValue={this.props.element.step}
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(this, "step", "value")}
              />
            </div>
          </div>
        )}
        {this.props.element.hasOwnProperty("min_value") && (
          <div className="form-group">
            <div className="form-group-range">
              <label className="control-label" htmlFor="rangeMin">
                <IntlMessages id="min" />
              </label>
              <input
                id="rangeMin"
                type="number"
                className="form-control"
                defaultValue={this.props.element.min_value}
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(this, "min_value", "value")}
              />
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.element.min_label}
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(this, "min_label", "value")}
              />
            </div>
          </div>
        )}
        {this.props.element.hasOwnProperty("max_value") && (
          <div className="form-group">
            <div className="form-group-range">
              <label className="control-label" htmlFor="rangeMax">
                <IntlMessages id="max" />
              </label>
              <input
                id="rangeMax"
                type="number"
                className="form-control"
                defaultValue={this.props.element.max_value}
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(this, "max_value", "value")}
              />
              <input
                type="text"
                className="form-control"
                defaultValue={this.props.element.max_label}
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(this, "max_label", "value")}
              />
            </div>
          </div>
        )}
        {this.props.element.hasOwnProperty("default_value") && (
          <div className="form-group">
            <div className="form-group-range">
              <label className="control-label" htmlFor="defaultSelected">
                <IntlMessages id="default-selected" />
              </label>
              <input
                id="defaultSelected"
                type="number"
                className="form-control"
                defaultValue={this.props.element.default_value}
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(
                  this,
                  "default_value",
                  "value"
                )}
              />
            </div>
          </div>
        )}
        {/* {this.props.element.hasOwnProperty("static") &&
          this.props.element.static && (
            <div className="form-group">
              <label className="control-label">
                <IntlMessages id="text-style" />
              </label>
              <div className="custom-control custom-checkbox">
                <input
                  id="do-bold"
                  className="custom-control-input"
                  type="checkbox"
                  checked={this_checked_bold}
                  value={true}
                  onChange={this.editElementProp.bind(this, "bold", "checked")}
                />
                <label className="custom-control-label" htmlFor="do-bold">
                  <IntlMessages id="bold" />
                </label>
              </div>
              <div className="custom-control custom-checkbox">
                <input
                  id="do-italic"
                  className="custom-control-input"
                  type="checkbox"
                  checked={this_checked_italic}
                  value={true}
                  onChange={this.editElementProp.bind(
                    this,
                    "italic",
                    "checked"
                  )}
                />
                <label className="custom-control-label" htmlFor="do-italic">
                  <IntlMessages id="italic" />
                </label>
              </div>
            </div>
          )} */}
        {this.props.element.showDescription && (
          <div className="form-group">
            <label className="control-label" htmlFor="questionDescription">
              <IntlMessages id="description" />
            </label>
            <TextAreaAutosize
              type="text"
              className="form-control"
              id="questionDescription"
              defaultValue={this.props.element.description}
              onBlur={this.updateElement.bind(this)}
              onChange={this.editElementProp.bind(this, "description", "value")}
            />
          </div>
        )}
        {this.props.showCorrectColumn &&
          this.props.element.canHaveAnswer &&
          !this.props.element.hasOwnProperty("options") && (
            <div className="form-group">
              <label className="control-label" htmlFor="correctAnswer">
                <IntlMessages id="correct-answer" />
              </label>
              <input
                id="correctAnswer"
                type="text"
                className="form-control"
                defaultValue={this.props.element.correct}
                onBlur={this.updateElement.bind(this)}
                onChange={this.editElementProp.bind(this, "correct", "value")}
              />
            </div>
          )}
        {this.props.element.canPopulateFromApi &&
          this.props.element.hasOwnProperty("options") && (
            <div className="form-group">
              <label className="control-label" htmlFor="optionsApiUrl">
                <IntlMessages id="populate-options-from-api" />
              </label>
              <div className="row">
                <div className="sm:w-6/12 px-3">
                  <input
                    className="form-control"
                    style={{ width: "100%" }}
                    type="text"
                    id="optionsApiUrl"
                    placeholder="http://localhost:8080/api/optionsdata"
                  />
                </div>
                <div className="sm:w-6/12 px-3">
                  <button
                    type="button"
                    onClick={this.addOptions.bind(this)}
                    className="button button-primary"
                  >
                    <IntlMessages id="populate" />
                  </button>
                </div>
              </div>
            </div>
          )}
        {this.props.element.hasOwnProperty("options") && (
          <DynamicOptionList
            showCorrectColumn={this.props.showCorrectColumn}
            canHaveOptionCorrect={canHaveOptionCorrect}
            canHaveOptionValue={canHaveOptionValue}
            data={this.props.preview.state.data}
            updateElement={this.props.updateElement}
            preview={this.props.preview}
            element={this.props.element}
            key={this.props.element.options.length}
            canEditOptionValues={canEditOptionValues}
          />
        )}
      </div>
    );
  }
}
FormElementsEdit.defaultProps = { className: "edit-element-fields" };
