(window.webpackJsonpReactFormBuilder=window.webpackJsonpReactFormBuilder||[]).push([[1],{389:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var l=a(8),n=a.n(l),o=a(9),r=a.n(o),s=a(10),i=a.n(s),c=a(17),m=a.n(c),p=a(12),d=a.n(p),h=a(0),u=a.n(h),E=a(185),v=a(92),f=a(126),b=a.n(f),y=a(127),N=a(24),g=a.n(N),w=a(128);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=d()(e);if(t){var n=d()(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return m()(this,a)}}var x=function(e){i()(a,e);var t=k(a);function a(e){var l;return n()(this,a),(l=t.call(this,e)).state={element:l.props.element,data:l.props.data,dirty:!1},l}return r()(a,[{key:"_setValue",value:function(e){return e.replace(/[^A-Z0-9]+/gi,"_").toLowerCase()}},{key:"editOption",value:function(e,t){var a=this.state.element,l=a.options[e].value!==this._setValue(a.options[e].text)?a.options[e].value:this._setValue(t.target.value);a.options[e].text=t.target.value,a.options[e].value=l,this.setState({element:a,dirty:!0})}},{key:"editValue",value:function(e,t){var a=this.state.element,l=""===t.target.value?this._setValue(a.options[e].text):t.target.value;a.options[e].value=l,this.setState({element:a,dirty:!0})}},{key:"editOptionCorrect",value:function(e,t){var a=this.state.element;a.options[e].hasOwnProperty("correct")?delete a.options[e].correct:a.options[e].correct=!0,this.setState({element:a}),this.props.updateElement.call(this.props.preview,a)}},{key:"updateOption",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"addOption",value:function(e){var t=this.state.element;t.options.splice(e+1,0,{value:"",text:"",key:g.a.uuid()}),this.props.updateElement.call(this.props.preview,t)}},{key:"removeOption",value:function(e){var t=this.state.element;t.options.splice(e,1),this.props.updateElement.call(this.props.preview,t)}},{key:"render",value:function(){var e=this;return this.state.dirty&&(this.state.element.dirty=!0),u.a.createElement("div",{className:"dynamic-option-list"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"sm:w-6/12 px-3"},u.a.createElement("b",null,u.a.createElement(w.a,{id:"options"}))),this.props.canHaveOptionValue&&u.a.createElement("div",{className:"sm:w-2/12 px-3"},u.a.createElement("b",null,u.a.createElement(w.a,{id:"value"}))),this.props.canHaveOptionValue&&this.props.canHaveOptionCorrect&&u.a.createElement("div",{className:"sm:w-4/12 px-3"},u.a.createElement("b",null,u.a.createElement(w.a,{id:"correct"}))))),this.props.element.options.map((function(t,a){var l="edit_".concat(t.key),n=t.value!==e._setValue(t.text)?t.value:"";return u.a.createElement("li",{className:"clearfix",key:l},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"sm:w-6/12 px-3"},u.a.createElement("input",{tabIndex:a+1,className:"form-control",style:{width:"100%"},type:"text",name:"text_".concat(a),placeholder:"Option text",value:t.text,onBlur:e.updateOption.bind(e),onChange:e.editOption.bind(e,a)})),e.props.canHaveOptionValue&&u.a.createElement("div",{className:"sm:w-2/12 px-3"},u.a.createElement("input",{className:"form-control",type:"text",name:"value_".concat(a),value:n,onChange:e.editValue.bind(e,a)})),e.props.canHaveOptionValue&&e.props.canHaveOptionCorrect&&u.a.createElement("div",{className:"sm:w-1/12 px-3"},u.a.createElement("input",{className:"form-control",type:"checkbox",value:"1",onChange:e.editOptionCorrect.bind(e,a),checked:t.hasOwnProperty("correct")})),u.a.createElement("div",{className:"sm:w-3/12 px-3"},u.a.createElement("div",{className:"dynamic-options-actions-buttons"},u.a.createElement("button",{onClick:e.addOption.bind(e,a),className:"button button-primary"},u.a.createElement("i",{className:"fas fa-plus-circle"})),a>0&&u.a.createElement("button",{onClick:e.removeOption.bind(e,a),className:"button button-secondary"},u.a.createElement("i",{className:"fas fa-minus-circle"}))))))}))))}}]),a}(u.a.Component),O=a(110);function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=d()(e);if(t){var n=d()(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return m()(this,a)}}var C={options:["inline","list","textAlign","fontSize","link","history"],inline:{inDropdown:!1,className:void 0,options:["bold","italic","underline","superscript","subscript"]}},F=function(e){i()(a,e);var t=P(a);function a(e){var l;return n()(this,a),(l=t.call(this,e)).state={element:l.props.element,data:l.props.data,dirty:!1},l}return r()(a,[{key:"toggleRequired",value:function(){}},{key:"editElementProp",value:function(e,t,a){var l=this,n=this.state.element;n[e]=a.target[t],this.setState({element:n,dirty:!0},(function(){"checked"===t&&l.updateElement()}))}},{key:"onEditorStateChange",value:function(e,t,a){var l=b()(Object(v.convertToRaw)(a.getCurrentContent())).replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/&nbsp;/g," ").replace(/(?:\r\n|\r|\n)/g," "),n=this.state.element;n[t]=l,this.setState({element:n,dirty:!0})}},{key:"updateElement",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"convertFromHTML",value:function(e){var t=Object(v.convertFromHTML)(e);if(!t.contentBlocks||!t.contentBlocks.length)return v.EditorState.createEmpty();var a=v.ContentState.createFromBlockArray(t);return v.EditorState.createWithContent(a)}},{key:"addOptions",value:function(){var e=this,t=document.getElementById("optionsApiUrl").value;t&&Object(O.a)(t).then((function(t){e.props.element.options=[];var a=e.props.element.options;t.forEach((function(e){e.key=g.a.uuid(),a.push(e)}));var l=e.state.element;e.setState({element:l,dirty:!0})}))}},{key:"render",value:function(){this.state.dirty&&(this.props.element.dirty=!0);var e,t=!!this.props.element.hasOwnProperty("required")&&this.props.element.required,a=!!this.props.element.hasOwnProperty("readOnly")&&this.props.element.readOnly,l=!!this.props.element.hasOwnProperty("defaultToday")&&this.props.element.defaultToday,n=!!this.props.element.hasOwnProperty("showTimeSelect")&&this.props.element.showTimeSelect,o=!!this.props.element.hasOwnProperty("showTimeSelectOnly")&&this.props.element.showTimeSelectOnly,r=!!this.props.element.hasOwnProperty("showTimeInput")&&this.props.element.showTimeInput,s=!!this.props.element.hasOwnProperty("inline")&&this.props.element.inline,i=!!this.props.element.hasOwnProperty("bold")&&this.props.element.bold,c=!!this.props.element.hasOwnProperty("italic")&&this.props.element.italic,m=!!this.props.element.hasOwnProperty("center")&&this.props.element.center,p=!!this.props.element.hasOwnProperty("pageBreakBefore")&&this.props.element.pageBreakBefore,d=!!this.props.element.hasOwnProperty("alternateForm")&&this.props.element.alternateForm,h=this.props.element,v=h.canHavePageBreakBefore,f=h.canHaveAlternateForm,b=h.canHaveDisplayHorizontal,N=h.canHaveOptionCorrect,g=h.canHaveOptionValue,k="Image"===this.state.element.element||"Camera"===this.state.element.element,O=this.props.files.length?this.props.files:[];return(O.length<1||O.length>0&&""!==O[0].id)&&O.unshift({id:"",file_name:""}),this.props.element.hasOwnProperty("content")&&(e=this.convertFromHTML(this.props.element.content)),this.props.element.hasOwnProperty("label")&&(e=this.convertFromHTML(this.props.element.label)),u.a.createElement("div",null,u.a.createElement("div",{className:"flex justify-between items-center"},u.a.createElement("h4",{className:"font-medium"},this.props.element.text),u.a.createElement("i",{className:"fas fa-times dismiss-edit",onClick:this.props.manualEditModeOff})),this.props.element.hasOwnProperty("content")&&u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label"},u.a.createElement(w.a,{id:"text-to-display"}),":"),u.a.createElement(y.Editor,{toolbar:C,defaultEditorState:e,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"content"),stripPastedStyles:!0})),this.props.element.hasOwnProperty("file_path")&&u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label",htmlFor:"fileSelect"},u.a.createElement(w.a,{id:"choose-file"}),":"),u.a.createElement("select",{id:"fileSelect",className:"form-control",defaultValue:this.props.element.file_path,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"file_path","value")},O.map((function(e){var t="file_".concat(e.id);return u.a.createElement("option",{value:e.id,key:t},e.file_name)})))),this.props.element.hasOwnProperty("href")&&u.a.createElement("div",{className:"form-group mt-3"},u.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.href,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"href","value")})),this.props.element.hasOwnProperty("label")&&u.a.createElement("div",{className:"form-group"},u.a.createElement("label",null,u.a.createElement(w.a,{id:"display-label"})),u.a.createElement(y.Editor,{toolbar:C,defaultEditorState:e,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"label"),stripPastedStyles:!0}),u.a.createElement("br",null),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"is-required",className:"custom-control-input",type:"checkbox",checked:t,value:!0,onChange:this.editElementProp.bind(this,"required","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"is-required"},u.a.createElement(w.a,{id:"required"}))),this.props.element.hasOwnProperty("readOnly")&&u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"is-read-only",className:"custom-control-input",type:"checkbox",checked:a,value:!0,onChange:this.editElementProp.bind(this,"readOnly","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"is-read-only"},u.a.createElement(w.a,{id:"read-only"}))),this.props.element.hasOwnProperty("defaultToday")&&u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"is-default-to-today",className:"custom-control-input",type:"checkbox",checked:l,value:!0,onChange:this.editElementProp.bind(this,"defaultToday","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"is-default-to-today"},u.a.createElement(w.a,{id:"default-to-today"}),"?")),this.props.element.hasOwnProperty("showTimeSelect")&&u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"show-time-select",className:"custom-control-input",type:"checkbox",checked:n,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelect","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-select"},u.a.createElement(w.a,{id:"show-time-select"}),"?")),n&&this.props.element.hasOwnProperty("showTimeSelectOnly")&&u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"show-time-select-only",className:"custom-control-input",type:"checkbox",checked:o,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelectOnly","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-select-only"},u.a.createElement(w.a,{id:"show-time-select-only"}),"?")),this.props.element.hasOwnProperty("showTimeInput")&&u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"show-time-input",className:"custom-control-input",type:"checkbox",checked:r,value:!0,onChange:this.editElementProp.bind(this,"showTimeInput","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-input"},u.a.createElement(w.a,{id:"show-time-input"}),"?")),("RadioButtons"===this.state.element.element||"Checkboxes"===this.state.element.element)&&b&&u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"display-horizontal",className:"custom-control-input",type:"checkbox",checked:s,value:!0,onChange:this.editElementProp.bind(this,"inline","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"display-horizontal"},u.a.createElement(w.a,{id:"display-horizontal"})))),this.props.element.hasOwnProperty("src")&&u.a.createElement("div",null,u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label",htmlFor:"srcInput"},u.a.createElement(w.a,{id:"link-to"}),":"),u.a.createElement("input",{id:"srcInput",type:"text",className:"form-control",defaultValue:this.props.element.src,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"src","value")}))),k&&u.a.createElement("div",null,u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"do-center",className:"custom-control-input",type:"checkbox",checked:m,value:!0,onChange:this.editElementProp.bind(this,"center","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"do-center"},u.a.createElement(w.a,{id:"center"}),"?"))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"sm:w-3/12 px-3"},u.a.createElement("label",{className:"control-label",htmlFor:"elementWidth"},u.a.createElement(w.a,{id:"width"}),":"),u.a.createElement("input",{id:"elementWidth",type:"text",className:"form-control",defaultValue:this.props.element.width,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"width","value")})),u.a.createElement("div",{className:"sm:w-3/12 px-3"},u.a.createElement("label",{className:"control-label",htmlFor:"elementHeight"},u.a.createElement(w.a,{id:"height"}),":"),u.a.createElement("input",{id:"elementHeight",type:"text",className:"form-control",defaultValue:this.props.element.height,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"height","value")})))),"FileUpload"===this.state.element.element&&u.a.createElement("div",null,u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label",htmlFor:"fileType"},u.a.createElement(w.a,{id:"choose-file-type"}),":"),u.a.createElement("select",{id:"fileType",className:"form-control",onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"fileType","value")},[{type:"image, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, video/mp4,video/x-m4v,video/*",typeName:"All File Type"},{type:"image",typeName:"Image"},{type:"application/pdf",typeName:"PDF"},{type:"application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",typeName:"Word"},{type:"application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",typeName:"Excel"},{type:"application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation",typeName:"Powerpoint"},{type:"video/mp4,video/x-m4v,video/*",typeName:"Videos"}].map((function(e,t){return u.a.createElement("option",{value:e.type,key:t},e.typeName)}))))),"Signature"===this.state.element.element&&this.props.element.readOnly?u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label",htmlFor:"variableKey"},u.a.createElement(w.a,{id:"variable-key"}),":"),u.a.createElement("input",{id:"variableKey",type:"text",className:"form-control",defaultValue:this.props.element.variableKey,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"variableKey","value")}),u.a.createElement("p",{className:"help-block"},u.a.createElement(w.a,{id:"variable-key-desc"}),".")):u.a.createElement("div",null),v&&u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label"},u.a.createElement(w.a,{id:"print-options"})),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"page-break-before-element",className:"custom-control-input",type:"checkbox",checked:p,value:!0,onChange:this.editElementProp.bind(this,"pageBreakBefore","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"page-break-before-element"},u.a.createElement(w.a,{id:"page-break-before-elements"}),"?"))),f&&u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label"},u.a.createElement(w.a,{id:"alternate-signature-page"})),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"display-on-alternate",className:"custom-control-input",type:"checkbox",checked:d,value:!0,onChange:this.editElementProp.bind(this,"alternateForm","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"display-on-alternate"},u.a.createElement(w.a,{id:"display-on-alternate-signature-page"}),"?"))),this.props.element.hasOwnProperty("step")&&u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-group-range"},u.a.createElement("label",{className:"control-label",htmlFor:"rangeStep"},u.a.createElement(w.a,{id:"step"})),u.a.createElement("input",{id:"rangeStep",type:"number",className:"form-control",defaultValue:this.props.element.step,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"step","value")}))),this.props.element.hasOwnProperty("min_value")&&u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-group-range"},u.a.createElement("label",{className:"control-label",htmlFor:"rangeMin"},u.a.createElement(w.a,{id:"min"})),u.a.createElement("input",{id:"rangeMin",type:"number",className:"form-control",defaultValue:this.props.element.min_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_value","value")}),u.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.min_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_label","value")}))),this.props.element.hasOwnProperty("max_value")&&u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-group-range"},u.a.createElement("label",{className:"control-label",htmlFor:"rangeMax"},u.a.createElement(w.a,{id:"max"})),u.a.createElement("input",{id:"rangeMax",type:"number",className:"form-control",defaultValue:this.props.element.max_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_value","value")}),u.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.max_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_label","value")}))),this.props.element.hasOwnProperty("default_value")&&u.a.createElement("div",{className:"form-group"},u.a.createElement("div",{className:"form-group-range"},u.a.createElement("label",{className:"control-label",htmlFor:"defaultSelected"},u.a.createElement(w.a,{id:"default-selected"})),u.a.createElement("input",{id:"defaultSelected",type:"number",className:"form-control",defaultValue:this.props.element.default_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"default_value","value")}))),this.props.element.hasOwnProperty("static")&&this.props.element.static&&u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label"},u.a.createElement(w.a,{id:"text-style"})),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"do-bold",className:"custom-control-input",type:"checkbox",checked:i,value:!0,onChange:this.editElementProp.bind(this,"bold","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"do-bold"},u.a.createElement(w.a,{id:"bold"}))),u.a.createElement("div",{className:"custom-control custom-checkbox"},u.a.createElement("input",{id:"do-italic",className:"custom-control-input",type:"checkbox",checked:c,value:!0,onChange:this.editElementProp.bind(this,"italic","checked")}),u.a.createElement("label",{className:"custom-control-label",htmlFor:"do-italic"},u.a.createElement(w.a,{id:"italic"})))),this.props.element.showDescription&&u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label",htmlFor:"questionDescription"},u.a.createElement(w.a,{id:"description"})),u.a.createElement(E.default,{type:"text",className:"form-control",id:"questionDescription",defaultValue:this.props.element.description,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"description","value")})),this.props.showCorrectColumn&&this.props.element.canHaveAnswer&&!this.props.element.hasOwnProperty("options")&&u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label",htmlFor:"correctAnswer"},u.a.createElement(w.a,{id:"correct-answer"})),u.a.createElement("input",{id:"correctAnswer",type:"text",className:"form-control",defaultValue:this.props.element.correct,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"correct","value")})),this.props.element.canPopulateFromApi&&this.props.element.hasOwnProperty("options")&&u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{className:"control-label",htmlFor:"optionsApiUrl"},u.a.createElement(w.a,{id:"populate-options-from-api"})),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"sm:w-6/12 px-3"},u.a.createElement("input",{className:"form-control",style:{width:"100%"},type:"text",id:"optionsApiUrl",placeholder:"http://localhost:8080/api/optionsdata"})),u.a.createElement("div",{className:"sm:w-6/12 px-3"},u.a.createElement("button",{onClick:this.addOptions.bind(this),className:"button button-primary"},u.a.createElement(w.a,{id:"populate"}))))),this.props.element.hasOwnProperty("options")&&u.a.createElement(x,{showCorrectColumn:this.props.showCorrectColumn,canHaveOptionCorrect:N,canHaveOptionValue:g,data:this.props.preview.state.data,updateElement:this.props.updateElement,preview:this.props.preview,element:this.props.element,key:this.props.element.options.length}))}}]),a}(u.a.Component);F.defaultProps={className:"edit-element-fields"}}}]);