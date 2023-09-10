"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactTextareaAutosize = _interopRequireDefault(require("react-textarea-autosize"));

var _draftJs = require("draft-js");

var _draftjsToHtml = _interopRequireDefault(require("draftjs-to-html"));

var _reactDraftWysiwyg = require("react-draft-wysiwyg");

var _dynamicOptionList = _interopRequireDefault(require("./dynamic-option-list"));

var _requests = require("./stores/requests");

var _UUID = _interopRequireDefault(require("./UUID"));

var _IntlMessages = _interopRequireDefault(require("./language-provider/IntlMessages"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var toolbar = {
  options: ["inline", "list", "textAlign", "fontSize", "colorPicker", "link", "history"],
  inline: {
    inDropdown: false,
    className: undefined,
    options: ["bold", "italic", "underline", "superscript", "subscript"]
  }
};

var FormElementsEdit = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(FormElementsEdit, _React$Component);

  var _super = _createSuper(FormElementsEdit);

  function FormElementsEdit(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, FormElementsEdit);
    _this = _super.call(this, props);
    _this.state = {
      element: _this.props.element,
      data: _this.props.data,
      dirty: false,
      isMounted: false
    };
    return _this;
  }

  (0, _createClass2["default"])(FormElementsEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMounted: true
      });
    }
  }, {
    key: "toggleRequired",
    value: function toggleRequired() {// const this_element = this.state.element;
    }
  }, {
    key: "editElementProp",
    value: function editElementProp(elemProperty, targProperty, e) {
      var _this2 = this;

      // elemProperty could be content or label
      // targProperty could be value or checked
      var this_element = _objectSpread({}, this.state.element);

      if (elemProperty === "sourceFile") {
        var _e$target$files, _e$target$files$;

        if ((_e$target$files = e.target.files) !== null && _e$target$files !== void 0 && (_e$target$files$ = _e$target$files[0]) !== null && _e$target$files$ !== void 0 && _e$target$files$.name) {
          this_element[elemProperty] = e.target.files[0];
        } else {
          this_element[elemProperty] = null;
        }
      } else {
        this_element[elemProperty] = e.target[targProperty];
      }

      this.setState({
        element: this_element,
        dirty: true
      }, function () {
        if (targProperty === "checked") {
          _this2.updateElement();
        }
      });
    }
  }, {
    key: "onEditorStateChange",
    value: function onEditorStateChange(index, property, editorContent) {
      // const html = draftToHtml(convertToRaw(editorContent.getCurrentContent())).replace(/<p>/g, '<div>').replace(/<\/p>/g, '</div>');
      var html = (0, _draftjsToHtml["default"])((0, _draftJs.convertToRaw)(editorContent.getCurrentContent())).replace(/<p /g, "<div ").replace(/<p>/g, "<div>").replace(/<\/p>/g, "</div>").replace(/&nbsp;/g, " ").replace(/(?:\r\n|\r|\n)/g, " ");

      var this_element = _objectSpread({}, this.state.element);

      this_element[property] = html;
      this.setState({
        element: this_element,
        dirty: true
      });
    }
  }, {
    key: "updateElement",
    value: function updateElement() {
      var this_element = this.state.element; // to prevent ajax calls with no change

      if (this.state.dirty) {
        this.props.updateElement.call(this.props.preview, this_element);
        this.setState({
          dirty: false
        });
      }
    }
  }, {
    key: "convertFromHTML",
    value: function convertFromHTML(content) {
      var newContent = (0, _draftJs.convertFromHTML)(content);

      if (!newContent.contentBlocks || !newContent.contentBlocks.length) {
        // to prevent crash when no contents in editor
        return _draftJs.EditorState.createEmpty();
      }

      var contentState = _draftJs.ContentState.createFromBlockArray(newContent);

      return _draftJs.EditorState.createWithContent(contentState);
    }
  }, {
    key: "addOptions",
    value: function addOptions() {
      var _this3 = this;

      var optionsApiUrl = document.getElementById("optionsApiUrl").value;

      if (optionsApiUrl) {
        (0, _requests.get)(optionsApiUrl).then(function (data) {
          _this3.props.element.options = [];
          var options = _this3.props.element.options;
          data.forEach(function (x) {
            // eslint-disable-next-line no-param-reassign
            x.key = _UUID["default"].uuid();
            options.push(x);
          });
          var this_element = _this3.state.element;

          _this3.setState({
            element: this_element,
            dirty: true
          });
        });
      }
    }
  }, {
    key: "uploadFile",
    value: function uploadFile() {
      var _this$state$element,
          _this4 = this;

      this.props.element.handleUpload((_this$state$element = this.state.element) === null || _this$state$element === void 0 ? void 0 : _this$state$element.sourceFile, function (url) {
        var this_element = _objectSpread({}, _this4.state.element);

        this_element.src = url;

        _this4.setState({
          element: this_element,
          dirty: true
        }, function () {
          _this4.updateElement();
        });
      });
    }
  }, {
    key: "MediaBrowserTile",
    value: function MediaBrowserTile(file) {
      var contentType = file.contentType.split("/").shift();

      switch (contentType) {
        case "image":
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "media-tile media-tile-image",
            style: {
              backgroundImage: "url('".concat(file === null || file === void 0 ? void 0 : file.url, "')")
            }
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "media-file-name"
          }, /*#__PURE__*/_react["default"].createElement("span", null, file === null || file === void 0 ? void 0 : file.fileName)));

        case "video":
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "media-tile flex-col"
          }, /*#__PURE__*/_react["default"].createElement("svg", {
            className: "w-full",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, /*#__PURE__*/_react["default"].createElement("g", {
            "clip-path": "url(#clip0_5145_6055)"
          }, /*#__PURE__*/_react["default"].createElement("path", {
            d: "M11.8047 0H4.33984C3.62109 0 3.03516 0.585938 3.03516 1.30859V18.6953C3.03516 19.418 3.62109 20 4.34375 20.0039H17.4492C18.1719 20.0039 18.7539 19.418 18.7578 18.6953L18.7188 5.78125L11.8047 0Z",
            fill: "#4EB3F2"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M11.8047 0L11.7852 5.64453C11.7852 5.64453 11.8047 5.78125 11.9219 5.78125H18.7188L11.8047 0Z",
            fill: "#0077CC"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M1.77734 9.63672H14.9648C15.2578 9.63672 15.4961 9.875 15.4961 10.168V16.0586C15.4961 16.3516 15.2578 16.5898 14.9648 16.5898H1.77734C1.48438 16.5898 1.24609 16.3516 1.24609 16.0586V10.168C1.24609 9.875 1.48438 9.63672 1.77734 9.63672Z",
            fill: "#0077CC"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M1.55469 11.7305H2.46875L3.10547 13.7656L3.73438 11.7305H4.62109L3.57031 14.5586H2.62109L1.55469 11.7305Z",
            fill: "white"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M4.9375 11.7305H5.8125V14.5586H4.9375V11.7305Z",
            fill: "white"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M6.45312 11.7305H7.75C8.00781 11.7305 8.21094 11.7656 8.37109 11.8359C8.52344 11.9023 8.66016 12.0039 8.76172 12.1328C8.86719 12.2656 8.94141 12.4219 8.98438 12.5859C9.03125 12.7656 9.05469 12.9492 9.05469 13.1328C9.05469 13.4336 9.01953 13.668 8.95312 13.8359C8.89062 13.9961 8.79297 14.1367 8.66797 14.2539C8.55859 14.3594 8.42188 14.4375 8.27344 14.4805C8.10547 14.5273 7.92969 14.5547 7.75391 14.5586H6.45703V11.7305H6.45312ZM7.32813 12.3711V13.9141H7.54297C7.72656 13.9141 7.85547 13.8945 7.93359 13.8555C8.01563 13.8086 8.08203 13.7344 8.11328 13.6445C8.15625 13.543 8.17969 13.3789 8.17969 13.1523C8.17969 12.8516 8.13281 12.6484 8.03125 12.5352C7.93359 12.4258 7.77344 12.3711 7.54688 12.3711H7.32813Z",
            fill: "white"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M9.51172 11.7305H11.8555V12.3359H10.3867V12.7852H11.7461V13.3633H10.3867V13.9219H11.8945V14.5625H9.51172V11.7305Z",
            fill: "white"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M12.2578 13.1445C12.2578 12.6836 12.3867 12.3242 12.6445 12.0664C12.9023 11.8086 13.2617 11.6797 13.7188 11.6797C14.1914 11.6797 14.5508 11.8047 14.8086 12.0586C15.0625 12.3125 15.1914 12.6641 15.1914 13.1211C15.1914 13.4531 15.1367 13.7227 15.0234 13.9336C14.9141 14.1406 14.7461 14.3125 14.5391 14.4258C14.3281 14.543 14.0664 14.6016 13.7539 14.6016C13.4336 14.6016 13.1719 14.5508 12.9609 14.4492C12.7461 14.3437 12.5703 14.1758 12.4531 13.9688C12.3242 13.75 12.2578 13.4766 12.2578 13.1445ZM13.1328 13.1523C13.1328 13.4375 13.1875 13.6445 13.293 13.7695C13.3984 13.8945 13.543 13.957 13.7266 13.957C13.9141 13.957 14.0586 13.8945 14.1641 13.7734C14.2656 13.6523 14.3203 13.4336 14.3203 13.1172C14.3203 12.8516 14.2656 12.6562 14.1602 12.5352C14.0547 12.4141 13.9063 12.3516 13.7227 12.3516C13.5586 12.3437 13.4023 12.4141 13.2969 12.5391C13.1875 12.6562 13.1328 12.8633 13.1328 13.1523Z",
            fill: "white"
          })), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
            id: "clip0_5145_6055"
          }, /*#__PURE__*/_react["default"].createElement("rect", {
            width: "20",
            height: "20",
            fill: "white"
          })))), /*#__PURE__*/_react["default"].createElement("div", {
            className: "media-file-name"
          }, /*#__PURE__*/_react["default"].createElement("span", null, file === null || file === void 0 ? void 0 : file.fileName)));

        case "audio":
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "media-tile flex-col"
          }, /*#__PURE__*/_react["default"].createElement("svg", {
            className: "w-full",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, /*#__PURE__*/_react["default"].createElement("g", {
            "clip-path": "url(#clip0_5145_6085)"
          }, /*#__PURE__*/_react["default"].createElement("path", {
            d: "M11.8047 0H4.33984C3.62109 0 3.03516 0.585938 3.03516 1.30859V18.6953C3.03516 19.418 3.62109 20 4.34375 20.0039H17.4492C18.1719 20.0039 18.7539 19.418 18.7578 18.6953L18.7188 5.78125L11.8047 0Z",
            fill: "#D9DEFB"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M11.8047 0L11.7852 5.64453C11.7852 5.64453 11.8047 5.78125 11.9219 5.78125H18.7188L11.8047 0Z",
            fill: "#3B478F"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M1.77734 9.63672H14.9648C15.2578 9.63672 15.4961 9.875 15.4961 10.168V16.0586C15.4961 16.3516 15.2578 16.5898 14.9648 16.5898H1.77734C1.48438 16.5898 1.24609 16.3516 1.24609 16.0586V10.168C1.24609 9.875 1.48438 9.63672 1.77734 9.63672Z",
            fill: "#3B478F"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M3.53125 14.0742H2.55859L2.42578 14.5312H1.55469L2.59375 11.7656H3.52734L4.56641 14.5312H3.66797L3.53125 14.0742ZM3.35156 13.4766L3.04688 12.4805L2.74609 13.4766H3.35156Z",
            fill: "white"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M6.50391 11.7656H7.35547V13.4141C7.35547 13.5703 7.32812 13.7266 7.27734 13.8789C7.22656 14.0234 7.14453 14.1523 7.03906 14.2617C6.94141 14.3633 6.82422 14.4414 6.69531 14.4922C6.50391 14.5586 6.30078 14.5898 6.09766 14.5859C5.94922 14.5859 5.80469 14.5742 5.65625 14.5586C5.51563 14.5469 5.38281 14.5078 5.25781 14.4453C5.14453 14.3867 5.04687 14.3047 4.96484 14.207C4.88281 14.1133 4.82031 14.0078 4.78125 13.8867C4.73437 13.7344 4.70703 13.5781 4.70312 13.418V11.7734H5.55469V13.4609C5.55469 13.6133 5.59766 13.7305 5.67969 13.8125C5.76172 13.8945 5.87891 13.9375 6.02734 13.9414C6.17578 13.9414 6.28906 13.8984 6.375 13.8164C6.45703 13.7344 6.5 13.6133 6.5 13.4609L6.50391 11.7656Z",
            fill: "white"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M7.93359 11.7656H9.20313C9.45313 11.7656 9.65625 11.8008 9.80859 11.8672C9.95703 11.9297 10.0898 12.0312 10.1914 12.1602C10.293 12.293 10.3672 12.4414 10.4102 12.6055C10.457 12.7812 10.4805 12.9609 10.4766 13.1406C10.4766 13.4375 10.4414 13.6641 10.375 13.8281C10.3125 13.9844 10.2187 14.125 10.0937 14.2383C9.98437 14.3437 9.85156 14.418 9.70703 14.457C9.54297 14.5039 9.37109 14.5312 9.19922 14.5312H7.92969L7.93359 11.7656ZM8.78906 12.3906V13.9023H9C9.17969 13.9023 9.30469 13.8828 9.38281 13.8437C9.46484 13.7969 9.52734 13.7227 9.55859 13.6367C9.60156 13.5391 9.62109 13.3789 9.62109 13.1562C9.62109 12.8633 9.57422 12.6641 9.47656 12.5547C9.38281 12.4453 9.22266 12.3945 9 12.3945H8.78906V12.3906Z",
            fill: "white"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M10.9609 11.7656H11.8164V14.5312H10.9609V11.7656Z",
            fill: "white"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            d: "M12.3242 13.1484C12.3242 12.6953 12.4492 12.3438 12.7031 12.0938C12.957 11.8438 13.3047 11.7148 13.7539 11.7148C14.2148 11.7148 14.5703 11.8398 14.8164 12.0859C15.0625 12.332 15.1914 12.6797 15.1914 13.125C15.1914 13.4492 15.1367 13.7109 15.0273 13.9219C14.9219 14.125 14.7578 14.293 14.5547 14.4062C14.3477 14.5195 14.0937 14.5781 13.7852 14.5781C13.4727 14.5781 13.2148 14.5273 13.0117 14.4297C12.8008 14.3242 12.6289 14.1602 12.5156 13.957C12.3867 13.7422 12.3242 13.4727 12.3242 13.1484ZM13.1758 13.1562C13.1758 13.4336 13.2266 13.6367 13.332 13.7578C13.4375 13.8789 13.5938 13.9492 13.7578 13.9414C13.9414 13.9414 14.082 13.8828 14.1836 13.7617C14.2852 13.6406 14.3359 13.4297 14.332 13.1172C14.332 12.8555 14.2812 12.668 14.1758 12.5469C14.0703 12.4258 13.9297 12.3672 13.75 12.3672C13.5898 12.3594 13.4375 12.4297 13.3359 12.5508C13.2305 12.6719 13.1758 12.8711 13.1758 13.1562Z",
            fill: "white"
          })), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
            id: "clip0_5145_6085"
          }, /*#__PURE__*/_react["default"].createElement("rect", {
            width: "20",
            height: "20",
            fill: "white"
          })))), /*#__PURE__*/_react["default"].createElement("div", {
            className: "media-file-name"
          }, /*#__PURE__*/_react["default"].createElement("span", null, file === null || file === void 0 ? void 0 : file.fileName)));

        default:
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "media-tile-image",
            style: {
              backgroundImage: "url(".concat(file.url, ")")
            }
          });
      }
    }
  }, {
    key: "selectFromMediaFile",
    value: function selectFromMediaFile(file) {
      var _this5 = this;

      this.props.element.handleMediaChoose(file, function (url) {
        var assetId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var cover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        console.log("url", url, assetId, cover);

        var this_element = _objectSpread({}, _this5.state.element);

        this_element.src = url;
        this_element.assetId = assetId;
        this_element.srcCover = cover;

        _this5.setState({
          element: this_element,
          dirty: true
        }, function () {
          _this5.updateElement();
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$element2,
          _this$props$element3,
          _this$state$element$s,
          _this$state$element2,
          _this$state$element$s2,
          _this$state$element3,
          _this$state$element3$,
          _this$props,
          _this$props2,
          _this$state$element$h,
          _this$state$element4,
          _this$state$element$s3,
          _this$state$element5,
          _this6 = this;

      // if (this.state.dirty) {
      //   this.props.element.dirty = true;
      // }
      var this_checked = this.props.element.hasOwnProperty("required") ? this.props.element.required : false;
      var this_read_only = this.props.element.hasOwnProperty("readOnly") ? this.props.element.readOnly : false;
      var this_default_today = this.props.element.hasOwnProperty("defaultToday") ? this.props.element.defaultToday : false;
      var this_show_time_select = this.props.element.hasOwnProperty("showTimeSelect") ? this.props.element.showTimeSelect : false;
      var this_show_time_select_only = this.props.element.hasOwnProperty("showTimeSelectOnly") ? this.props.element.showTimeSelectOnly : false;
      var this_show_time_input = this.props.element.hasOwnProperty("showTimeInput") ? this.props.element.showTimeInput : false;
      var this_checked_inline = this.props.element.hasOwnProperty("inline") ? this.props.element.inline : false;
      var this_checked_bold = this.props.element.hasOwnProperty("bold") ? this.props.element.bold : false;
      var this_checked_italic = this.props.element.hasOwnProperty("italic") ? this.props.element.italic : false;
      var this_checked_center = this.props.element.hasOwnProperty("center") ? this.props.element.center : false;
      var this_checked_page_break = this.props.element.hasOwnProperty("pageBreakBefore") ? this.props.element.pageBreakBefore : false;
      var this_checked_alternate_form = this.props.element.hasOwnProperty("alternateForm") ? this.props.element.alternateForm : false;
      var _this$props$element = this.props.element,
          canHavePageBreakBefore = _this$props$element.canHavePageBreakBefore,
          canHaveAlternateForm = _this$props$element.canHaveAlternateForm,
          canHaveDisplayHorizontal = _this$props$element.canHaveDisplayHorizontal,
          canHaveOptionCorrect = _this$props$element.canHaveOptionCorrect,
          canHaveOptionValue = _this$props$element.canHaveOptionValue;
      var canHaveImageSize = this.state.element.element === "Image" || this.state.element.element === "Video" || this.state.element.element === "Camera";
      var isMedia = this.state.element.element === "Image" || this.state.element.element === "Video";
      var mediaAccept = this.state.element.element === "Video" ? ".mp4, .mp3, .wav" : "image/*";
      var showUploadOption = isMedia && typeof ((_this$props$element2 = this.props.element) === null || _this$props$element2 === void 0 ? void 0 : _this$props$element2.handleUpload) !== "undefined";
      var showMediaChooseOption = isMedia && typeof ((_this$props$element3 = this.props.element) === null || _this$props$element3 === void 0 ? void 0 : _this$props$element3.handleMediaChoose) !== "undefined";
      var sourceType = (_this$state$element$s = (_this$state$element2 = this.state.element) === null || _this$state$element2 === void 0 ? void 0 : _this$state$element2.sourceType) !== null && _this$state$element$s !== void 0 ? _this$state$element$s : "Link";
      var sourceFile = (_this$state$element$s2 = (_this$state$element3 = this.state.element) === null || _this$state$element3 === void 0 ? void 0 : (_this$state$element3$ = _this$state$element3.sourceFile) === null || _this$state$element3$ === void 0 ? void 0 : _this$state$element3$.name) !== null && _this$state$element$s2 !== void 0 ? _this$state$element$s2 : "No file chosen";
      var mediaSource = this.state.element.element === "Video" ? (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.videoMediaSource : (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.imageMediaSource;
      var sourceTypeOptions = ["Link"];

      if (showUploadOption) {
        sourceTypeOptions.push("Upload");
      }

      if (showMediaChooseOption) {
        sourceTypeOptions.push("Choose From Media");
      }

      var isHeader = this.state.element.element === "Header";

      var finalToolbar = _objectSpread(_objectSpread({}, toolbar), {}, {
        options: !isHeader ? toolbar.options : toolbar.options.filter(function (row) {
          return row !== "fontSize";
        })
      });

      var this_files = this.props.files.length ? this.props.files : [];

      if (this_files.length < 1 || this_files.length > 0 && this_files[0].id !== "") {
        this_files.unshift({
          id: "",
          file_name: ""
        });
      }

      var editorState;

      if (this.props.element.hasOwnProperty("content")) {
        editorState = this.convertFromHTML(this.props.element.content);
      }

      if (this.props.element.hasOwnProperty("label")) {
        editorState = this.convertFromHTML(this.props.element.label);
      }

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex justify-between items-center"
      }, /*#__PURE__*/_react["default"].createElement("h4", {
        className: "font-medium"
      }, this.props.element.text), /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-times dismiss-edit",
        onClick: this.props.manualEditModeOff
      })), this.props.element.hasOwnProperty("content") && isHeader && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "header-type"
      }), ":"), /*#__PURE__*/_react["default"].createElement("select", {
        id: "headerType",
        className: "form-control",
        defaultValue: (_this$state$element$h = (_this$state$element4 = this.state.element) === null || _this$state$element4 === void 0 ? void 0 : _this$state$element4.headerType) !== null && _this$state$element$h !== void 0 ? _this$state$element$h : "H3",
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "headerType", "value")
      }, ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"].map(function (row) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: row,
          key: row
        }, row);
      }))), this.props.element.hasOwnProperty("content") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "text-to-display"
      }), ":"), this.state.isMounted && /*#__PURE__*/_react["default"].createElement(_reactDraftWysiwyg.Editor, {
        toolbar: finalToolbar,
        defaultEditorState: editorState,
        onBlur: this.updateElement.bind(this),
        onEditorStateChange: this.onEditorStateChange.bind(this, 0, "content"),
        stripPastedStyles: true
      })), this.props.element.hasOwnProperty("file_path") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "fileSelect"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "choose-file"
      }), ":"), /*#__PURE__*/_react["default"].createElement("select", {
        id: "fileSelect",
        className: "form-control",
        defaultValue: this.props.element.file_path,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "file_path", "value")
      }, this_files.map(function (file) {
        var this_key = "file_".concat(file.id);
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: file.id,
          key: this_key
        }, file.file_name);
      }))), this.props.element.hasOwnProperty("href") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group mt-3"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.href,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "href", "value")
      })), this.props.element.hasOwnProperty("label") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "display-label"
      })), this.state.isMounted && /*#__PURE__*/_react["default"].createElement(_reactDraftWysiwyg.Editor, {
        toolbar: toolbar,
        defaultEditorState: editorState,
        onBlur: this.updateElement.bind(this),
        onEditorStateChange: this.onEditorStateChange.bind(this, 0, "label"),
        stripPastedStyles: true
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "is-required",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked,
        value: true,
        onChange: this.editElementProp.bind(this, "required", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "is-required"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "required"
      }))), this.props.element.hasOwnProperty("readOnly") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "is-read-only",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_read_only,
        value: true,
        onChange: this.editElementProp.bind(this, "readOnly", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "is-read-only"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "read-only"
      }))), this.props.element.hasOwnProperty("defaultToday") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "is-default-to-today",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_default_today,
        value: true,
        onChange: this.editElementProp.bind(this, "defaultToday", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "is-default-to-today"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "default-to-today"
      }), "?")), this.props.element.hasOwnProperty("showTimeSelect") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "show-time-select",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_show_time_select,
        value: true,
        onChange: this.editElementProp.bind(this, "showTimeSelect", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "show-time-select"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "show-time-select"
      }), "?")), this_show_time_select && this.props.element.hasOwnProperty("showTimeSelectOnly") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "show-time-select-only",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_show_time_select_only,
        value: true,
        onChange: this.editElementProp.bind(this, "showTimeSelectOnly", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "show-time-select-only"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "show-time-select-only"
      }), "?")), this.props.element.hasOwnProperty("showTimeInput") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "show-time-input",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_show_time_input,
        value: true,
        onChange: this.editElementProp.bind(this, "showTimeInput", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "show-time-input"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "show-time-input"
      }), "?")), (this.state.element.element === "RadioButtons" || this.state.element.element === "Checkboxes") && canHaveDisplayHorizontal && /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "display-horizontal",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_inline,
        value: true,
        onChange: this.editElementProp.bind(this, "inline", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "display-horizontal"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "display-horizontal"
      })))), (showUploadOption || showMediaChooseOption) && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "sourceType"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "source"
      }), ":"), /*#__PURE__*/_react["default"].createElement("select", {
        id: "sourceType",
        className: "form-control",
        defaultValue: (_this$state$element$s3 = (_this$state$element5 = this.state.element) === null || _this$state$element5 === void 0 ? void 0 : _this$state$element5.sourceType) !== null && _this$state$element$s3 !== void 0 ? _this$state$element$s3 : "Link",
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "sourceType", "value")
      }, sourceTypeOptions.map(function (row) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: row,
          key: row
        }, row);
      })))), this.props.element.hasOwnProperty("src") && sourceType === "Link" && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "srcInput"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "link-to"
      }), ":"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "srcInput",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.src,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "src", "value")
      }))), this.props.element.hasOwnProperty("src") && sourceType === "Upload" && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-5"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-4 flex gap-2 text-sm leading-6 text-gray-600"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "sourceFile",
        className: "relative cursor-pointer flex w-full"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "relative cursor-pointer button button-secondary whitespace-nowrap"
      }, "Choose File", /*#__PURE__*/_react["default"].createElement("input", {
        id: "sourceFile",
        name: "sourceFile",
        type: "file",
        className: "sr-only",
        accept: mediaAccept // onBlur={this.updateElement.bind(this)}
        ,
        onChange: this.editElementProp.bind(this, "sourceFile", "value")
      })), /*#__PURE__*/_react["default"].createElement("p", {
        className: "pl-1 flex items-center border border-l-0 rounded-r-md w-full"
      }, sourceFile)), sourceFile !== "No file chosen" && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "button button-secondary w-20",
        onClick: this.uploadFile.bind(this)
      }, "Upload")))))), this.props.element.hasOwnProperty("src") && sourceType === "Choose From Media" && mediaSource.length > 0 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-5"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-4 text-sm leading-6 text-gray-600"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "media-tile-wrapper"
      }, mediaSource.map(function (file) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: file === null || file === void 0 ? void 0 : file.id,
          className: (file === null || file === void 0 ? void 0 : file.url) === _this6.state.element.src ? "active-tile" : "",
          onClick: _this6.selectFromMediaFile.bind(_this6, file)
        }, _this6.MediaBrowserTile(file));
      })))))), canHaveImageSize && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "do-center",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_center,
        value: true,
        onChange: this.editElementProp.bind(this, "center", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "do-center"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "center"
      }), "?"))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "sm:w-3/12 px-3"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "elementWidth"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "width"
      }), ":"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "elementWidth",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.width,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "width", "value")
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "sm:w-3/12 px-3"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "elementHeight"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "height"
      }), ":"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "elementHeight",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.height,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "height", "value")
      })))), this.state.element.element === "FileUpload" && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "fileType"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "choose-file-type"
      }), ":"), /*#__PURE__*/_react["default"].createElement("select", {
        id: "fileType",
        className: "form-control",
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "fileType", "value")
      }, [{
        type: "image, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, video/mp4,video/x-m4v,video/*",
        typeName: "All File Type"
      }, {
        type: "image",
        typeName: "Image"
      }, {
        type: "application/pdf",
        typeName: "PDF"
      }, {
        type: "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        typeName: "Word"
      }, {
        type: "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        typeName: "Excel"
      }, {
        type: "application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation",
        typeName: "Powerpoint"
      }, {
        type: "video/mp4,video/x-m4v,video/*",
        typeName: "Videos"
      }].map(function (file, index) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: file.type,
          key: index
        }, file.typeName);
      })))), this.state.element.element === "Signature" && this.props.element.readOnly ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "variableKey"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "variable-key"
      }), ":"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "variableKey",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.variableKey,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "variableKey", "value")
      }), /*#__PURE__*/_react["default"].createElement("p", {
        className: "help-block"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "variable-key-desc"
      }), ".")) : /*#__PURE__*/_react["default"].createElement("div", null), canHavePageBreakBefore && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "print-options"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "page-break-before-element",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_page_break,
        value: true,
        onChange: this.editElementProp.bind(this, "pageBreakBefore", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "page-break-before-element"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "page-break-before-elements"
      }), "?"))), canHaveAlternateForm && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "alternate-signature-page"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-control custom-checkbox"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "display-on-alternate",
        className: "custom-control-input",
        type: "checkbox",
        checked: this_checked_alternate_form,
        value: true,
        onChange: this.editElementProp.bind(this, "alternateForm", "checked")
      }), /*#__PURE__*/_react["default"].createElement("label", {
        className: "custom-control-label",
        htmlFor: "display-on-alternate"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "display-on-alternate-signature-page"
      }), "?"))), this.props.element.hasOwnProperty("step") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-range"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "rangeStep"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "step"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "rangeStep",
        type: "number",
        className: "form-control",
        defaultValue: this.props.element.step,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "step", "value")
      }))), this.props.element.hasOwnProperty("min_value") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-range"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "rangeMin"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "min"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "rangeMin",
        type: "number",
        className: "form-control",
        defaultValue: this.props.element.min_value,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "min_value", "value")
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.min_label,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "min_label", "value")
      }))), this.props.element.hasOwnProperty("max_value") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-range"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "rangeMax"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "max"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "rangeMax",
        type: "number",
        className: "form-control",
        defaultValue: this.props.element.max_value,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "max_value", "value")
      }), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.max_label,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "max_label", "value")
      }))), this.props.element.hasOwnProperty("default_value") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-range"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "defaultSelected"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "default-selected"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "defaultSelected",
        type: "number",
        className: "form-control",
        defaultValue: this.props.element.default_value,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "default_value", "value")
      }))), this.props.element.showDescription && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "questionDescription"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "description"
      })), /*#__PURE__*/_react["default"].createElement(_reactTextareaAutosize["default"], {
        type: "text",
        className: "form-control",
        id: "questionDescription",
        defaultValue: this.props.element.description,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "description", "value")
      })), this.props.showCorrectColumn && this.props.element.canHaveAnswer && !this.props.element.hasOwnProperty("options") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "correctAnswer"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "correct-answer"
      })), /*#__PURE__*/_react["default"].createElement("input", {
        id: "correctAnswer",
        type: "text",
        className: "form-control",
        defaultValue: this.props.element.correct,
        onBlur: this.updateElement.bind(this),
        onChange: this.editElementProp.bind(this, "correct", "value")
      })), this.props.element.canPopulateFromApi && this.props.element.hasOwnProperty("options") && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "control-label",
        htmlFor: "optionsApiUrl"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "populate-options-from-api"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "sm:w-6/12 px-3"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: "form-control",
        style: {
          width: "100%"
        },
        type: "text",
        id: "optionsApiUrl",
        placeholder: "http://localhost:8080/api/optionsdata"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "sm:w-6/12 px-3"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        onClick: this.addOptions.bind(this),
        className: "button button-primary"
      }, /*#__PURE__*/_react["default"].createElement(_IntlMessages["default"], {
        id: "populate"
      }))))), this.props.element.hasOwnProperty("options") && /*#__PURE__*/_react["default"].createElement(_dynamicOptionList["default"], {
        showCorrectColumn: this.props.showCorrectColumn,
        canHaveOptionCorrect: canHaveOptionCorrect,
        canHaveOptionValue: canHaveOptionValue,
        data: this.props.preview.state.data,
        updateElement: this.props.updateElement,
        preview: this.props.preview,
        element: this.props.element,
        key: this.props.element.options.length
      }));
    }
  }]);
  return FormElementsEdit;
}(_react["default"].Component);

exports["default"] = FormElementsEdit;
FormElementsEdit.defaultProps = {
  className: "edit-element-fields"
};