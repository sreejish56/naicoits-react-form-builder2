(window.webpackJsonpReactFormBuilder=window.webpackJsonpReactFormBuilder||[]).push([[1],{389:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var l=a(7),n=a.n(l),o=a(8),r=a.n(o),s=a(9),i=a.n(s),c=a(10),m=a.n(c),p=a(17),d=a.n(p),u=a(12),h=a.n(u),E=a(0),v=a.n(E),f=a(185),b=a(92),y=a(126),N=a.n(y),g=a(127),w=a(24),k=a.n(w),O=a(128);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=h()(e);if(t){var n=h()(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return d()(this,a)}}var P=function(e){m()(a,e);var t=x(a);function a(e){var l;return r()(this,a),(l=t.call(this,e)).state={element:l.props.element,data:l.props.data,dirty:!1},l}return i()(a,[{key:"_setValue",value:function(e){return e.replace(/[^A-Z0-9]+/gi,"_").toLowerCase()}},{key:"editOption",value:function(e,t){var a=this.state.element,l=a.options[e].value!==this._setValue(a.options[e].text)?a.options[e].value:this._setValue(t.target.value);a.options[e].text=t.target.value,a.options[e].value=l,this.setState({element:a,dirty:!0})}},{key:"editValue",value:function(e,t){var a=this.state.element,l=""===t.target.value?this._setValue(a.options[e].text):t.target.value;a.options[e].value=l,this.setState({element:a,dirty:!0})}},{key:"editOptionCorrect",value:function(e,t){var a=this.state.element;a.options[e].hasOwnProperty("correct")?delete a.options[e].correct:a.options[e].correct=!0,this.setState({element:a}),this.props.updateElement.call(this.props.preview,a)}},{key:"updateOption",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"addOption",value:function(e){var t=this.state.element;t.options.splice(e+1,0,{value:"",text:"",key:k.a.uuid()}),this.props.updateElement.call(this.props.preview,t)}},{key:"removeOption",value:function(e){var t=this.state.element;t.options.splice(e,1),this.props.updateElement.call(this.props.preview,t)}},{key:"render",value:function(){var e=this;return this.state.dirty&&(this.state.element.dirty=!0),v.a.createElement("div",{className:"dynamic-option-list"},v.a.createElement("ul",null,v.a.createElement("li",null,v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"sm:w-6/12 px-3"},v.a.createElement("b",null,v.a.createElement(O.a,{id:"options"}))),this.props.canHaveOptionValue&&v.a.createElement("div",{className:"sm:w-2/12 px-3"},v.a.createElement("b",null,v.a.createElement(O.a,{id:"value"}))),this.props.canHaveOptionValue&&this.props.canHaveOptionCorrect&&v.a.createElement("div",{className:"sm:w-4/12 px-3"},v.a.createElement("b",null,v.a.createElement(O.a,{id:"correct"}))))),this.props.element.options.map((function(t,a){var l="edit_".concat(t.key),n=t.value!==e._setValue(t.text)?t.value:"";return v.a.createElement("li",{className:"clearfix",key:l},v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"sm:w-6/12 px-3"},v.a.createElement("input",{tabIndex:a+1,className:"form-control",style:{width:"100%"},type:"text",name:"text_".concat(a),placeholder:"Option text",value:t.text,onBlur:e.updateOption.bind(e),onChange:e.editOption.bind(e,a)})),e.props.canHaveOptionValue&&v.a.createElement("div",{className:"sm:w-2/12 px-3"},v.a.createElement("input",{className:"form-control",type:"text",name:"value_".concat(a),value:n,onChange:e.editValue.bind(e,a)})),e.props.canHaveOptionValue&&e.props.canHaveOptionCorrect&&v.a.createElement("div",{className:"sm:w-1/12 px-3"},v.a.createElement("input",{className:"form-control",type:"checkbox",value:"1",onChange:e.editOptionCorrect.bind(e,a),checked:t.hasOwnProperty("correct")})),v.a.createElement("div",{className:"sm:w-3/12 px-3"},v.a.createElement("div",{className:"dynamic-options-actions-buttons"},v.a.createElement("button",{onClick:e.addOption.bind(e,a),className:"button button-primary"},v.a.createElement("i",{className:"fas fa-plus-circle"})),a>0&&v.a.createElement("button",{onClick:e.removeOption.bind(e,a),className:"button button-secondary"},v.a.createElement("i",{className:"fas fa-minus-circle"}))))))}))))}}]),a}(v.a.Component),C=a(110);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=h()(e);if(t){var n=h()(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return d()(this,a)}}var T={options:["inline","list","textAlign","fontSize","colorPicker","link","history"],inline:{inDropdown:!1,className:void 0,options:["bold","italic","underline","superscript","subscript"]}},V=function(e){m()(a,e);var t=B(a);function a(e){var l;return r()(this,a),(l=t.call(this,e)).state={element:l.props.element,data:l.props.data,dirty:!1,isMounted:!1},l}return i()(a,[{key:"componentDidMount",value:function(){this.setState({isMounted:!0})}},{key:"toggleRequired",value:function(){}},{key:"editElementProp",value:function(e,t,a){var l,n,o=this,r=this.state.element;"sourceFile"===e?null!==(l=a.target.files)&&void 0!==l&&null!==(n=l[0])&&void 0!==n&&n.name?r[e]=a.target.files[0]:r[e]=null:r[e]=a.target[t];this.setState({element:r,dirty:!0},(function(){"checked"===t&&o.updateElement()}))}},{key:"onEditorStateChange",value:function(e,t,a){var l=N()(Object(b.convertToRaw)(a.getCurrentContent())).replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/&nbsp;/g," ").replace(/(?:\r\n|\r|\n)/g," "),n=this.state.element;n[t]=l,this.setState({element:n,dirty:!0})}},{key:"updateElement",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"convertFromHTML",value:function(e){var t=Object(b.convertFromHTML)(e);if(!t.contentBlocks||!t.contentBlocks.length)return b.EditorState.createEmpty();var a=b.ContentState.createFromBlockArray(t);return b.EditorState.createWithContent(a)}},{key:"addOptions",value:function(){var e=this,t=document.getElementById("optionsApiUrl").value;t&&Object(C.a)(t).then((function(t){e.props.element.options=[];var a=e.props.element.options;t.forEach((function(e){e.key=k.a.uuid(),a.push(e)}));var l=e.state.element;e.setState({element:l,dirty:!0})}))}},{key:"uploadFile",value:function(){var e,t=this;this.props.element.handleImageUpload(null===(e=this.state.element)||void 0===e?void 0:e.sourceFile,(function(e){var a=t.state.element;a.src=e,t.setState({element:a,dirty:!0}),t.updateElement()}))}},{key:"render",value:function(){var e,t,a,l,n,o;this.state.dirty&&(this.props.element.dirty=!0);var r,s=!!this.props.element.hasOwnProperty("required")&&this.props.element.required,i=!!this.props.element.hasOwnProperty("readOnly")&&this.props.element.readOnly,c=!!this.props.element.hasOwnProperty("defaultToday")&&this.props.element.defaultToday,m=!!this.props.element.hasOwnProperty("showTimeSelect")&&this.props.element.showTimeSelect,p=!!this.props.element.hasOwnProperty("showTimeSelectOnly")&&this.props.element.showTimeSelectOnly,d=!!this.props.element.hasOwnProperty("showTimeInput")&&this.props.element.showTimeInput,u=!!this.props.element.hasOwnProperty("inline")&&this.props.element.inline,h=!!this.props.element.hasOwnProperty("bold")&&this.props.element.bold,E=!!this.props.element.hasOwnProperty("italic")&&this.props.element.italic,b=!!this.props.element.hasOwnProperty("center")&&this.props.element.center,y=!!this.props.element.hasOwnProperty("pageBreakBefore")&&this.props.element.pageBreakBefore,N=!!this.props.element.hasOwnProperty("alternateForm")&&this.props.element.alternateForm,w=this.props.element,k=w.canHavePageBreakBefore,x=w.canHaveAlternateForm,C=w.canHaveDisplayHorizontal,F=w.canHaveOptionCorrect,B=w.canHaveOptionValue,V="Image"===this.state.element.element||"Camera"===this.state.element.element,H="Image"===this.state.element.element&&void 0!==(null===(e=this.props.element)||void 0===e?void 0:e.handleImageUpload),_=null!==(t=null===(a=this.state.element)||void 0===a?void 0:a.sourceType)&&void 0!==t?t:"Link",j=null!==(l=null===(n=this.state.element)||void 0===n||null===(o=n.sourceFile)||void 0===o?void 0:o.name)&&void 0!==l?l:"No file chosen",R="Header"===this.state.element.element,I=S(S({},T),{},{options:R?T.options.filter((function(e){return"fontSize"!==e})):T.options}),M=this.props.files.length?this.props.files:[];return(M.length<1||M.length>0&&""!==M[0].id)&&M.unshift({id:"",file_name:""}),this.props.element.hasOwnProperty("content")&&(r=this.convertFromHTML(this.props.element.content)),this.props.element.hasOwnProperty("label")&&(r=this.convertFromHTML(this.props.element.label)),v.a.createElement("div",null,v.a.createElement("div",{className:"flex justify-between items-center"},v.a.createElement("h4",{className:"font-medium"},this.props.element.text),v.a.createElement("i",{className:"fas fa-times dismiss-edit",onClick:this.props.manualEditModeOff})),this.props.element.hasOwnProperty("content")&&R&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label"},v.a.createElement(O.a,{id:"header-type"}),":"),v.a.createElement("select",{id:"headerType",className:"form-control",defaultValue:"H3",onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"headerType","value")},["Normal","H1","H2","H3","H4","H5","H6"].map((function(e){return v.a.createElement("option",{value:e,key:e},e)})))),this.props.element.hasOwnProperty("content")&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label"},v.a.createElement(O.a,{id:"text-to-display"}),":"),this.state.isMounted&&v.a.createElement(g.Editor,{toolbar:I,defaultEditorState:r,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"content"),stripPastedStyles:!0})),this.props.element.hasOwnProperty("file_path")&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label",htmlFor:"fileSelect"},v.a.createElement(O.a,{id:"choose-file"}),":"),v.a.createElement("select",{id:"fileSelect",className:"form-control",defaultValue:this.props.element.file_path,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"file_path","value")},M.map((function(e){var t="file_".concat(e.id);return v.a.createElement("option",{value:e.id,key:t},e.file_name)})))),this.props.element.hasOwnProperty("href")&&v.a.createElement("div",{className:"form-group mt-3"},v.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.href,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"href","value")})),this.props.element.hasOwnProperty("label")&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",null,v.a.createElement(O.a,{id:"display-label"})),this.state.isMounted&&v.a.createElement(g.Editor,{toolbar:T,defaultEditorState:r,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"label"),stripPastedStyles:!0}),v.a.createElement("br",null),v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"is-required",className:"custom-control-input",type:"checkbox",checked:s,value:!0,onChange:this.editElementProp.bind(this,"required","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"is-required"},v.a.createElement(O.a,{id:"required"}))),this.props.element.hasOwnProperty("readOnly")&&v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"is-read-only",className:"custom-control-input",type:"checkbox",checked:i,value:!0,onChange:this.editElementProp.bind(this,"readOnly","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"is-read-only"},v.a.createElement(O.a,{id:"read-only"}))),this.props.element.hasOwnProperty("defaultToday")&&v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"is-default-to-today",className:"custom-control-input",type:"checkbox",checked:c,value:!0,onChange:this.editElementProp.bind(this,"defaultToday","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"is-default-to-today"},v.a.createElement(O.a,{id:"default-to-today"}),"?")),this.props.element.hasOwnProperty("showTimeSelect")&&v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"show-time-select",className:"custom-control-input",type:"checkbox",checked:m,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelect","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-select"},v.a.createElement(O.a,{id:"show-time-select"}),"?")),m&&this.props.element.hasOwnProperty("showTimeSelectOnly")&&v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"show-time-select-only",className:"custom-control-input",type:"checkbox",checked:p,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelectOnly","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-select-only"},v.a.createElement(O.a,{id:"show-time-select-only"}),"?")),this.props.element.hasOwnProperty("showTimeInput")&&v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"show-time-input",className:"custom-control-input",type:"checkbox",checked:d,value:!0,onChange:this.editElementProp.bind(this,"showTimeInput","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-input"},v.a.createElement(O.a,{id:"show-time-input"}),"?")),("RadioButtons"===this.state.element.element||"Checkboxes"===this.state.element.element)&&C&&v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"display-horizontal",className:"custom-control-input",type:"checkbox",checked:u,value:!0,onChange:this.editElementProp.bind(this,"inline","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"display-horizontal"},v.a.createElement(O.a,{id:"display-horizontal"})))),H&&v.a.createElement("div",null,v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label",htmlFor:"srcInput"},v.a.createElement(O.a,{id:"source"}),":"),v.a.createElement("select",{id:"sourceType",className:"form-control",defaultValue:"Link",onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"sourceType","value")},["Link","Upload"].map((function(e){return v.a.createElement("option",{value:e,key:e},e)}))))),this.props.element.hasOwnProperty("src")&&"Link"===_&&v.a.createElement("div",null,v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label",htmlFor:"srcInput"},v.a.createElement(O.a,{id:"link-to"}),":"),v.a.createElement("input",{id:"srcInput",type:"text",className:"form-control",defaultValue:this.props.element.src,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"src","value")}))),this.props.element.hasOwnProperty("src")&&"Upload"===_&&v.a.createElement("div",null,v.a.createElement("div",{className:"form-group"},v.a.createElement("div",{className:"mt-5"},v.a.createElement("div",{className:"mt-4 flex gap-2 text-sm leading-6 text-gray-600"},v.a.createElement("label",{htmlFor:"sourceFile",className:"relative cursor-pointer flex w-full"},v.a.createElement("div",{className:"relative cursor-pointer button button-secondary whitespace-nowrap"},"Choose File",v.a.createElement("input",{id:"sourceFile",name:"sourceFile",type:"file",className:"sr-only",accept:"image/*",onChange:this.editElementProp.bind(this,"sourceFile","value")})),v.a.createElement("p",{className:"pl-1 flex items-center border border-l-0 rounded-r-md w-full"},j)),"No file chosen"!==j&&v.a.createElement("div",null,v.a.createElement("button",{className:"button button-secondary w-20",onClick:this.uploadFile.bind(this)},"Upload")))))),V&&v.a.createElement("div",null,v.a.createElement("div",{className:"form-group"},v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"do-center",className:"custom-control-input",type:"checkbox",checked:b,value:!0,onChange:this.editElementProp.bind(this,"center","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"do-center"},v.a.createElement(O.a,{id:"center"}),"?"))),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"sm:w-3/12 px-3"},v.a.createElement("label",{className:"control-label",htmlFor:"elementWidth"},v.a.createElement(O.a,{id:"width"}),":"),v.a.createElement("input",{id:"elementWidth",type:"text",className:"form-control",defaultValue:this.props.element.width,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"width","value")})),v.a.createElement("div",{className:"sm:w-3/12 px-3"},v.a.createElement("label",{className:"control-label",htmlFor:"elementHeight"},v.a.createElement(O.a,{id:"height"}),":"),v.a.createElement("input",{id:"elementHeight",type:"text",className:"form-control",defaultValue:this.props.element.height,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"height","value")})))),"FileUpload"===this.state.element.element&&v.a.createElement("div",null,v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label",htmlFor:"fileType"},v.a.createElement(O.a,{id:"choose-file-type"}),":"),v.a.createElement("select",{id:"fileType",className:"form-control",onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"fileType","value")},[{type:"image, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, video/mp4,video/x-m4v,video/*",typeName:"All File Type"},{type:"image",typeName:"Image"},{type:"application/pdf",typeName:"PDF"},{type:"application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",typeName:"Word"},{type:"application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",typeName:"Excel"},{type:"application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation",typeName:"Powerpoint"},{type:"video/mp4,video/x-m4v,video/*",typeName:"Videos"}].map((function(e,t){return v.a.createElement("option",{value:e.type,key:t},e.typeName)}))))),"Signature"===this.state.element.element&&this.props.element.readOnly?v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label",htmlFor:"variableKey"},v.a.createElement(O.a,{id:"variable-key"}),":"),v.a.createElement("input",{id:"variableKey",type:"text",className:"form-control",defaultValue:this.props.element.variableKey,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"variableKey","value")}),v.a.createElement("p",{className:"help-block"},v.a.createElement(O.a,{id:"variable-key-desc"}),".")):v.a.createElement("div",null),k&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label"},v.a.createElement(O.a,{id:"print-options"})),v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"page-break-before-element",className:"custom-control-input",type:"checkbox",checked:y,value:!0,onChange:this.editElementProp.bind(this,"pageBreakBefore","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"page-break-before-element"},v.a.createElement(O.a,{id:"page-break-before-elements"}),"?"))),x&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label"},v.a.createElement(O.a,{id:"alternate-signature-page"})),v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"display-on-alternate",className:"custom-control-input",type:"checkbox",checked:N,value:!0,onChange:this.editElementProp.bind(this,"alternateForm","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"display-on-alternate"},v.a.createElement(O.a,{id:"display-on-alternate-signature-page"}),"?"))),this.props.element.hasOwnProperty("step")&&v.a.createElement("div",{className:"form-group"},v.a.createElement("div",{className:"form-group-range"},v.a.createElement("label",{className:"control-label",htmlFor:"rangeStep"},v.a.createElement(O.a,{id:"step"})),v.a.createElement("input",{id:"rangeStep",type:"number",className:"form-control",defaultValue:this.props.element.step,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"step","value")}))),this.props.element.hasOwnProperty("min_value")&&v.a.createElement("div",{className:"form-group"},v.a.createElement("div",{className:"form-group-range"},v.a.createElement("label",{className:"control-label",htmlFor:"rangeMin"},v.a.createElement(O.a,{id:"min"})),v.a.createElement("input",{id:"rangeMin",type:"number",className:"form-control",defaultValue:this.props.element.min_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_value","value")}),v.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.min_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_label","value")}))),this.props.element.hasOwnProperty("max_value")&&v.a.createElement("div",{className:"form-group"},v.a.createElement("div",{className:"form-group-range"},v.a.createElement("label",{className:"control-label",htmlFor:"rangeMax"},v.a.createElement(O.a,{id:"max"})),v.a.createElement("input",{id:"rangeMax",type:"number",className:"form-control",defaultValue:this.props.element.max_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_value","value")}),v.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.max_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_label","value")}))),this.props.element.hasOwnProperty("default_value")&&v.a.createElement("div",{className:"form-group"},v.a.createElement("div",{className:"form-group-range"},v.a.createElement("label",{className:"control-label",htmlFor:"defaultSelected"},v.a.createElement(O.a,{id:"default-selected"})),v.a.createElement("input",{id:"defaultSelected",type:"number",className:"form-control",defaultValue:this.props.element.default_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"default_value","value")}))),this.props.element.hasOwnProperty("static")&&this.props.element.static&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label"},v.a.createElement(O.a,{id:"text-style"})),v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"do-bold",className:"custom-control-input",type:"checkbox",checked:h,value:!0,onChange:this.editElementProp.bind(this,"bold","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"do-bold"},v.a.createElement(O.a,{id:"bold"}))),v.a.createElement("div",{className:"custom-control custom-checkbox"},v.a.createElement("input",{id:"do-italic",className:"custom-control-input",type:"checkbox",checked:E,value:!0,onChange:this.editElementProp.bind(this,"italic","checked")}),v.a.createElement("label",{className:"custom-control-label",htmlFor:"do-italic"},v.a.createElement(O.a,{id:"italic"})))),this.props.element.showDescription&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label",htmlFor:"questionDescription"},v.a.createElement(O.a,{id:"description"})),v.a.createElement(f.default,{type:"text",className:"form-control",id:"questionDescription",defaultValue:this.props.element.description,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"description","value")})),this.props.showCorrectColumn&&this.props.element.canHaveAnswer&&!this.props.element.hasOwnProperty("options")&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label",htmlFor:"correctAnswer"},v.a.createElement(O.a,{id:"correct-answer"})),v.a.createElement("input",{id:"correctAnswer",type:"text",className:"form-control",defaultValue:this.props.element.correct,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"correct","value")})),this.props.element.canPopulateFromApi&&this.props.element.hasOwnProperty("options")&&v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{className:"control-label",htmlFor:"optionsApiUrl"},v.a.createElement(O.a,{id:"populate-options-from-api"})),v.a.createElement("div",{className:"row"},v.a.createElement("div",{className:"sm:w-6/12 px-3"},v.a.createElement("input",{className:"form-control",style:{width:"100%"},type:"text",id:"optionsApiUrl",placeholder:"http://localhost:8080/api/optionsdata"})),v.a.createElement("div",{className:"sm:w-6/12 px-3"},v.a.createElement("button",{onClick:this.addOptions.bind(this),className:"button button-primary"},v.a.createElement(O.a,{id:"populate"}))))),this.props.element.hasOwnProperty("options")&&v.a.createElement(P,{showCorrectColumn:this.props.showCorrectColumn,canHaveOptionCorrect:F,canHaveOptionValue:B,data:this.props.preview.state.data,updateElement:this.props.updateElement,preview:this.props.preview,element:this.props.element,key:this.props.element.options.length}))}}]),a}(v.a.Component);V.defaultProps={className:"edit-element-fields"}}}]);