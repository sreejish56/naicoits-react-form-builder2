(window.webpackJsonpReactFormBuilder=window.webpackJsonpReactFormBuilder||[]).push([[1],{389:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return M}));var l=a(7),n=a.n(l),i=a(8),r=a.n(i),o=a(9),s=a.n(o),c=a(10),m=a.n(c),p=a(17),d=a.n(p),u=a(12),h=a.n(u),v=a(0),E=a.n(v),f=a(185),y=a(93),b=a(126),C=a.n(b),N=a(127),g=a(24),w=a.n(g),k=a(128);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=h()(e);if(t){var n=h()(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return d()(this,a)}}var O=function(e){m()(a,e);var t=x(a);function a(e){var l;return r()(this,a),(l=t.call(this,e)).state={element:l.props.element,data:l.props.data,dirty:!1},l}return s()(a,[{key:"_setValue",value:function(e){return e.replace(/[^A-Z0-9]+/gi,"_").toLowerCase()}},{key:"editOption",value:function(e,t){var a=this.state.element,l=a.options[e].value!==this._setValue(a.options[e].text)?a.options[e].value:this._setValue(t.target.value);a.options[e].text=t.target.value,a.options[e].value=l,this.setState({element:a,dirty:!0})}},{key:"editValue",value:function(e,t){var a=this.state.element,l=""===t.target.value?this._setValue(a.options[e].text):t.target.value;a.options[e].value=l,this.setState({element:a,dirty:!0})}},{key:"editOptionCorrect",value:function(e,t){var a=this.state.element;a.options[e].hasOwnProperty("correct")?delete a.options[e].correct:a.options[e].correct=!0,this.setState({element:a}),this.props.updateElement.call(this.props.preview,a)}},{key:"updateOption",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"addOption",value:function(e){var t=this.state.element;t.options.splice(e+1,0,{value:"",text:"",key:w.a.uuid()}),this.props.updateElement.call(this.props.preview,t)}},{key:"removeOption",value:function(e){var t=this.state.element;t.options.splice(e,1),this.props.updateElement.call(this.props.preview,t)}},{key:"render",value:function(){var e=this;return this.state.dirty&&(this.state.element.dirty=!0),E.a.createElement("div",{className:"dynamic-option-list"},E.a.createElement("ul",null,E.a.createElement("li",null,E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"sm:w-6/12 px-3"},E.a.createElement("b",null,E.a.createElement(k.a,{id:"options"}))),this.props.canHaveOptionValue&&E.a.createElement("div",{className:"sm:w-2/12 px-3"},E.a.createElement("b",null,E.a.createElement(k.a,{id:"value"}))),this.props.canHaveOptionValue&&this.props.canHaveOptionCorrect&&E.a.createElement("div",{className:"sm:w-4/12 px-3"},E.a.createElement("b",null,E.a.createElement(k.a,{id:"correct"}))))),this.props.element.options.map((function(t,a){var l="edit_".concat(t.key),n=t.value!==e._setValue(t.text)?t.value:"";return E.a.createElement("li",{className:"clearfix",key:l},E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"sm:w-6/12 px-3"},E.a.createElement("input",{tabIndex:a+1,className:"form-control",style:{width:"100%"},type:"text",name:"text_".concat(a),placeholder:"Option text",value:t.text,onBlur:e.updateOption.bind(e),onChange:e.editOption.bind(e,a)})),e.props.canHaveOptionValue&&E.a.createElement("div",{className:"sm:w-2/12 px-3"},E.a.createElement("input",{className:"form-control",type:"text",name:"value_".concat(a),value:n,onChange:e.editValue.bind(e,a)})),e.props.canHaveOptionValue&&e.props.canHaveOptionCorrect&&E.a.createElement("div",{className:"sm:w-1/12 px-3"},E.a.createElement("input",{className:"form-control",type:"checkbox",value:"1",onChange:e.editOptionCorrect.bind(e,a),checked:t.hasOwnProperty("correct")})),E.a.createElement("div",{className:"sm:w-3/12 px-3"},E.a.createElement("div",{className:"dynamic-options-actions-buttons"},E.a.createElement("button",{onClick:e.addOption.bind(e,a),className:"button button-primary"},E.a.createElement("i",{className:"fas fa-plus-circle"})),a>0&&E.a.createElement("button",{onClick:e.removeOption.bind(e,a),className:"button button-secondary"},E.a.createElement("i",{className:"fas fa-minus-circle"}))))))}))))}}]),a}(E.a.Component),P=a(110);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(Object(a),!0).forEach((function(t){n()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=h()(e);if(t){var n=h()(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return d()(this,a)}}var B={options:["inline","list","textAlign","fontSize","colorPicker","link","history"],inline:{inDropdown:!1,className:void 0,options:["bold","italic","underline","superscript","subscript"]}},M=function(e){m()(a,e);var t=V(a);function a(e){var l;return r()(this,a),(l=t.call(this,e)).state={element:l.props.element,data:l.props.data,dirty:!1,isMounted:!1},l}return s()(a,[{key:"componentDidMount",value:function(){this.setState({isMounted:!0})}},{key:"toggleRequired",value:function(){}},{key:"editElementProp",value:function(e,t,a){var l,n,i=this,r=F({},this.state.element);"sourceFile"===e?null!==(l=a.target.files)&&void 0!==l&&null!==(n=l[0])&&void 0!==n&&n.name?r[e]=a.target.files[0]:r[e]=null:r[e]=a.target[t];this.setState({element:r,dirty:!0},(function(){"checked"===t&&i.updateElement()}))}},{key:"onEditorStateChange",value:function(e,t,a){var l=C()(Object(y.convertToRaw)(a.getCurrentContent())).replace(/<p /g,"<div ").replace(/<p>/g,"<div>").replace(/<\/p>/g,"</div>").replace(/&nbsp;/g," ").replace(/(?:\r\n|\r|\n)/g," "),n=F({},this.state.element);n[t]=l,this.setState({element:n,dirty:!0})}},{key:"updateElement",value:function(){var e=this.state.element;this.state.dirty&&(this.props.updateElement.call(this.props.preview,e),this.setState({dirty:!1}))}},{key:"convertFromHTML",value:function(e){var t=Object(y.convertFromHTML)(e);if(!t.contentBlocks||!t.contentBlocks.length)return y.EditorState.createEmpty();var a=y.ContentState.createFromBlockArray(t);return y.EditorState.createWithContent(a)}},{key:"addOptions",value:function(){var e=this,t=document.getElementById("optionsApiUrl").value;t&&Object(P.a)(t).then((function(t){e.props.element.options=[];var a=e.props.element.options;t.forEach((function(e){e.key=w.a.uuid(),a.push(e)}));var l=e.state.element;e.setState({element:l,dirty:!0})}))}},{key:"uploadFile",value:function(){var e,t=this;this.props.element.handleUpload(null===(e=this.state.element)||void 0===e?void 0:e.sourceFile,(function(e){var a=F({},t.state.element);a.src=e,t.setState({element:a,dirty:!0},(function(){t.updateElement()}))}))}},{key:"MediaBrowserTile",value:function(e){var t;switch(null==e||null===(t=e.contentType)||void 0===t?void 0:t.split("/").shift()){case"image":return E.a.createElement("div",{className:"media-tile media-tile-image",style:{backgroundImage:"url('".concat(null==e?void 0:e.url,"')")}},E.a.createElement("div",{className:"media-file-name"},E.a.createElement("span",null,null==e?void 0:e.fileName)));case"video":return E.a.createElement("div",{className:"media-tile flex-col"},E.a.createElement("svg",{className:"w-full",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E.a.createElement("g",{"clip-path":"url(#clip0_5145_6055)"},E.a.createElement("path",{d:"M11.8047 0H4.33984C3.62109 0 3.03516 0.585938 3.03516 1.30859V18.6953C3.03516 19.418 3.62109 20 4.34375 20.0039H17.4492C18.1719 20.0039 18.7539 19.418 18.7578 18.6953L18.7188 5.78125L11.8047 0Z",fill:"#4EB3F2"}),E.a.createElement("path",{d:"M11.8047 0L11.7852 5.64453C11.7852 5.64453 11.8047 5.78125 11.9219 5.78125H18.7188L11.8047 0Z",fill:"#0077CC"}),E.a.createElement("path",{d:"M1.77734 9.63672H14.9648C15.2578 9.63672 15.4961 9.875 15.4961 10.168V16.0586C15.4961 16.3516 15.2578 16.5898 14.9648 16.5898H1.77734C1.48438 16.5898 1.24609 16.3516 1.24609 16.0586V10.168C1.24609 9.875 1.48438 9.63672 1.77734 9.63672Z",fill:"#0077CC"}),E.a.createElement("path",{d:"M1.55469 11.7305H2.46875L3.10547 13.7656L3.73438 11.7305H4.62109L3.57031 14.5586H2.62109L1.55469 11.7305Z",fill:"white"}),E.a.createElement("path",{d:"M4.9375 11.7305H5.8125V14.5586H4.9375V11.7305Z",fill:"white"}),E.a.createElement("path",{d:"M6.45312 11.7305H7.75C8.00781 11.7305 8.21094 11.7656 8.37109 11.8359C8.52344 11.9023 8.66016 12.0039 8.76172 12.1328C8.86719 12.2656 8.94141 12.4219 8.98438 12.5859C9.03125 12.7656 9.05469 12.9492 9.05469 13.1328C9.05469 13.4336 9.01953 13.668 8.95312 13.8359C8.89062 13.9961 8.79297 14.1367 8.66797 14.2539C8.55859 14.3594 8.42188 14.4375 8.27344 14.4805C8.10547 14.5273 7.92969 14.5547 7.75391 14.5586H6.45703V11.7305H6.45312ZM7.32813 12.3711V13.9141H7.54297C7.72656 13.9141 7.85547 13.8945 7.93359 13.8555C8.01563 13.8086 8.08203 13.7344 8.11328 13.6445C8.15625 13.543 8.17969 13.3789 8.17969 13.1523C8.17969 12.8516 8.13281 12.6484 8.03125 12.5352C7.93359 12.4258 7.77344 12.3711 7.54688 12.3711H7.32813Z",fill:"white"}),E.a.createElement("path",{d:"M9.51172 11.7305H11.8555V12.3359H10.3867V12.7852H11.7461V13.3633H10.3867V13.9219H11.8945V14.5625H9.51172V11.7305Z",fill:"white"}),E.a.createElement("path",{d:"M12.2578 13.1445C12.2578 12.6836 12.3867 12.3242 12.6445 12.0664C12.9023 11.8086 13.2617 11.6797 13.7188 11.6797C14.1914 11.6797 14.5508 11.8047 14.8086 12.0586C15.0625 12.3125 15.1914 12.6641 15.1914 13.1211C15.1914 13.4531 15.1367 13.7227 15.0234 13.9336C14.9141 14.1406 14.7461 14.3125 14.5391 14.4258C14.3281 14.543 14.0664 14.6016 13.7539 14.6016C13.4336 14.6016 13.1719 14.5508 12.9609 14.4492C12.7461 14.3437 12.5703 14.1758 12.4531 13.9688C12.3242 13.75 12.2578 13.4766 12.2578 13.1445ZM13.1328 13.1523C13.1328 13.4375 13.1875 13.6445 13.293 13.7695C13.3984 13.8945 13.543 13.957 13.7266 13.957C13.9141 13.957 14.0586 13.8945 14.1641 13.7734C14.2656 13.6523 14.3203 13.4336 14.3203 13.1172C14.3203 12.8516 14.2656 12.6562 14.1602 12.5352C14.0547 12.4141 13.9063 12.3516 13.7227 12.3516C13.5586 12.3437 13.4023 12.4141 13.2969 12.5391C13.1875 12.6562 13.1328 12.8633 13.1328 13.1523Z",fill:"white"})),E.a.createElement("defs",null,E.a.createElement("clipPath",{id:"clip0_5145_6055"},E.a.createElement("rect",{width:"20",height:"20",fill:"white"})))),E.a.createElement("div",{className:"media-file-name"},E.a.createElement("span",null,null==e?void 0:e.fileName)));case"audio":return E.a.createElement("div",{className:"media-tile flex-col"},E.a.createElement("svg",{className:"w-full",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E.a.createElement("g",{"clip-path":"url(#clip0_5145_6085)"},E.a.createElement("path",{d:"M11.8047 0H4.33984C3.62109 0 3.03516 0.585938 3.03516 1.30859V18.6953C3.03516 19.418 3.62109 20 4.34375 20.0039H17.4492C18.1719 20.0039 18.7539 19.418 18.7578 18.6953L18.7188 5.78125L11.8047 0Z",fill:"#D9DEFB"}),E.a.createElement("path",{d:"M11.8047 0L11.7852 5.64453C11.7852 5.64453 11.8047 5.78125 11.9219 5.78125H18.7188L11.8047 0Z",fill:"#3B478F"}),E.a.createElement("path",{d:"M1.77734 9.63672H14.9648C15.2578 9.63672 15.4961 9.875 15.4961 10.168V16.0586C15.4961 16.3516 15.2578 16.5898 14.9648 16.5898H1.77734C1.48438 16.5898 1.24609 16.3516 1.24609 16.0586V10.168C1.24609 9.875 1.48438 9.63672 1.77734 9.63672Z",fill:"#3B478F"}),E.a.createElement("path",{d:"M3.53125 14.0742H2.55859L2.42578 14.5312H1.55469L2.59375 11.7656H3.52734L4.56641 14.5312H3.66797L3.53125 14.0742ZM3.35156 13.4766L3.04688 12.4805L2.74609 13.4766H3.35156Z",fill:"white"}),E.a.createElement("path",{d:"M6.50391 11.7656H7.35547V13.4141C7.35547 13.5703 7.32812 13.7266 7.27734 13.8789C7.22656 14.0234 7.14453 14.1523 7.03906 14.2617C6.94141 14.3633 6.82422 14.4414 6.69531 14.4922C6.50391 14.5586 6.30078 14.5898 6.09766 14.5859C5.94922 14.5859 5.80469 14.5742 5.65625 14.5586C5.51563 14.5469 5.38281 14.5078 5.25781 14.4453C5.14453 14.3867 5.04687 14.3047 4.96484 14.207C4.88281 14.1133 4.82031 14.0078 4.78125 13.8867C4.73437 13.7344 4.70703 13.5781 4.70312 13.418V11.7734H5.55469V13.4609C5.55469 13.6133 5.59766 13.7305 5.67969 13.8125C5.76172 13.8945 5.87891 13.9375 6.02734 13.9414C6.17578 13.9414 6.28906 13.8984 6.375 13.8164C6.45703 13.7344 6.5 13.6133 6.5 13.4609L6.50391 11.7656Z",fill:"white"}),E.a.createElement("path",{d:"M7.93359 11.7656H9.20313C9.45313 11.7656 9.65625 11.8008 9.80859 11.8672C9.95703 11.9297 10.0898 12.0312 10.1914 12.1602C10.293 12.293 10.3672 12.4414 10.4102 12.6055C10.457 12.7812 10.4805 12.9609 10.4766 13.1406C10.4766 13.4375 10.4414 13.6641 10.375 13.8281C10.3125 13.9844 10.2187 14.125 10.0937 14.2383C9.98437 14.3437 9.85156 14.418 9.70703 14.457C9.54297 14.5039 9.37109 14.5312 9.19922 14.5312H7.92969L7.93359 11.7656ZM8.78906 12.3906V13.9023H9C9.17969 13.9023 9.30469 13.8828 9.38281 13.8437C9.46484 13.7969 9.52734 13.7227 9.55859 13.6367C9.60156 13.5391 9.62109 13.3789 9.62109 13.1562C9.62109 12.8633 9.57422 12.6641 9.47656 12.5547C9.38281 12.4453 9.22266 12.3945 9 12.3945H8.78906V12.3906Z",fill:"white"}),E.a.createElement("path",{d:"M10.9609 11.7656H11.8164V14.5312H10.9609V11.7656Z",fill:"white"}),E.a.createElement("path",{d:"M12.3242 13.1484C12.3242 12.6953 12.4492 12.3438 12.7031 12.0938C12.957 11.8438 13.3047 11.7148 13.7539 11.7148C14.2148 11.7148 14.5703 11.8398 14.8164 12.0859C15.0625 12.332 15.1914 12.6797 15.1914 13.125C15.1914 13.4492 15.1367 13.7109 15.0273 13.9219C14.9219 14.125 14.7578 14.293 14.5547 14.4062C14.3477 14.5195 14.0937 14.5781 13.7852 14.5781C13.4727 14.5781 13.2148 14.5273 13.0117 14.4297C12.8008 14.3242 12.6289 14.1602 12.5156 13.957C12.3867 13.7422 12.3242 13.4727 12.3242 13.1484ZM13.1758 13.1562C13.1758 13.4336 13.2266 13.6367 13.332 13.7578C13.4375 13.8789 13.5938 13.9492 13.7578 13.9414C13.9414 13.9414 14.082 13.8828 14.1836 13.7617C14.2852 13.6406 14.3359 13.4297 14.332 13.1172C14.332 12.8555 14.2812 12.668 14.1758 12.5469C14.0703 12.4258 13.9297 12.3672 13.75 12.3672C13.5898 12.3594 13.4375 12.4297 13.3359 12.5508C13.2305 12.6719 13.1758 12.8711 13.1758 13.1562Z",fill:"white"})),E.a.createElement("defs",null,E.a.createElement("clipPath",{id:"clip0_5145_6085"},E.a.createElement("rect",{width:"20",height:"20",fill:"white"})))),E.a.createElement("div",{className:"media-file-name"},E.a.createElement("span",null,null==e?void 0:e.fileName)));default:return E.a.createElement("div",{className:"media-tile-image",style:{backgroundImage:"url(".concat(e.url,")")}})}}},{key:"selectFromMediaFile",value:function(e){var t=this;this.props.element.handleMediaChoose(e,(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;console.log("url",e,a,l);var n=F({},t.state.element);n.src=e,n.assetId=a,n.srcCover=l,t.setState({element:n,dirty:!0},(function(){t.updateElement()}))}))}},{key:"render",value:function(){var e,t,a,l,n,i,r,o,s,c,m,p,d,u=this,h=!!this.state.element.hasOwnProperty("required")&&this.state.element.required,v=!!this.state.element.hasOwnProperty("readOnly")&&this.state.element.readOnly,y=!!this.state.element.hasOwnProperty("defaultToday")&&this.state.element.defaultToday,b=!!this.state.element.hasOwnProperty("showTimeSelect")&&this.state.element.showTimeSelect,C=!!this.state.element.hasOwnProperty("showTimeSelectOnly")&&this.state.element.showTimeSelectOnly,g=!!this.state.element.hasOwnProperty("showTimeInput")&&this.state.element.showTimeInput,w=!!this.state.element.hasOwnProperty("inline")&&this.state.element.inline,x=(!!this.state.element.hasOwnProperty("bold")&&this.state.element.bold,!!this.state.element.hasOwnProperty("italic")&&this.state.element.italic,!!this.state.element.hasOwnProperty("center")&&this.state.element.center),P=!!this.state.element.hasOwnProperty("pageBreakBefore")&&this.state.element.pageBreakBefore,H=!!this.state.element.hasOwnProperty("alternateForm")&&this.state.element.alternateForm,V=this.props.element,M=V.canHavePageBreakBefore,S=V.canHaveAlternateForm,T=V.canHaveDisplayHorizontal,_=V.canHaveOptionCorrect,L=V.canHaveOptionValue,Z="Image"===this.state.element.element||"Video"===this.state.element.element||"Camera"===this.state.element.element,j="Image"===this.state.element.element||"Video"===this.state.element.element,R="Video"===this.state.element.element?".mp4, .mp3, .wav":"image/*",I=j&&void 0!==(null===(e=this.props.element)||void 0===e?void 0:e.handleUpload),D=j&&void 0!==(null===(t=this.props.element)||void 0===t?void 0:t.handleMediaChoose),A=null!==(a=null===(l=this.state.element)||void 0===l?void 0:l.sourceType)&&void 0!==a?a:"Link",q=null!==(n=null===(i=this.state.element)||void 0===i||null===(r=i.sourceFile)||void 0===r?void 0:r.name)&&void 0!==n?n:"No file chosen",U="Video"===this.state.element.element?null===(o=this.props)||void 0===o?void 0:o.videoMediaSource:null===(s=this.props)||void 0===s?void 0:s.imageMediaSource,z=["Link"];I&&z.push("Upload"),D&&z.push("Choose From Media");var K,W="Header"===this.state.element.element,J=F(F({},B),{},{options:W?B.options.filter((function(e){return"fontSize"!==e})):B.options}),G=this.props.files.length?this.props.files:[];return(G.length<1||G.length>0&&""!==G[0].id)&&G.unshift({id:"",file_name:""}),this.props.element.hasOwnProperty("content")&&(K=this.convertFromHTML(this.props.element.content)),this.props.element.hasOwnProperty("label")&&(K=this.convertFromHTML(this.props.element.label)),E.a.createElement("div",null,E.a.createElement("div",{className:"flex justify-between items-center"},E.a.createElement("h4",{className:"font-medium"},this.props.element.text),E.a.createElement("i",{className:"fas fa-times dismiss-edit",onClick:this.props.manualEditModeOff})),this.props.element.hasOwnProperty("content")&&W&&E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label"},E.a.createElement(k.a,{id:"header-type"}),":"),E.a.createElement("select",{id:"headerType",className:"form-control",defaultValue:null!==(c=null===(m=this.state.element)||void 0===m?void 0:m.headerType)&&void 0!==c?c:"H3",onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"headerType","value")},["Normal","H1","H2","H3","H4","H5","H6"].map((function(e){return E.a.createElement("option",{value:e,key:e},e)})))),this.props.element.hasOwnProperty("content")&&E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label"},E.a.createElement(k.a,{id:"text-to-display"}),":"),this.state.isMounted&&E.a.createElement(N.Editor,{toolbar:J,defaultEditorState:K,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"content"),stripPastedStyles:!0})),this.props.element.hasOwnProperty("file_path")&&E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label",htmlFor:"fileSelect"},E.a.createElement(k.a,{id:"choose-file"}),":"),E.a.createElement("select",{id:"fileSelect",className:"form-control",defaultValue:this.props.element.file_path,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"file_path","value")},G.map((function(e){var t="file_".concat(e.id);return E.a.createElement("option",{value:e.id,key:t},e.file_name)})))),this.props.element.hasOwnProperty("href")&&E.a.createElement("div",{className:"form-group mt-3"},E.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.href,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"href","value")})),this.props.element.hasOwnProperty("label")&&E.a.createElement("div",{className:"form-group"},E.a.createElement("label",null,E.a.createElement(k.a,{id:"display-label"})),this.state.isMounted&&E.a.createElement(N.Editor,{toolbar:B,defaultEditorState:K,onBlur:this.updateElement.bind(this),onEditorStateChange:this.onEditorStateChange.bind(this,0,"label"),stripPastedStyles:!0}),E.a.createElement("br",null),E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"is-required",className:"custom-control-input",type:"checkbox",checked:h,value:!0,onChange:this.editElementProp.bind(this,"required","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"is-required"},E.a.createElement(k.a,{id:"required"}))),this.props.element.hasOwnProperty("readOnly")&&E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"is-read-only",className:"custom-control-input",type:"checkbox",checked:v,value:!0,onChange:this.editElementProp.bind(this,"readOnly","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"is-read-only"},E.a.createElement(k.a,{id:"read-only"}))),this.props.element.hasOwnProperty("defaultToday")&&E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"is-default-to-today",className:"custom-control-input",type:"checkbox",checked:y,value:!0,onChange:this.editElementProp.bind(this,"defaultToday","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"is-default-to-today"},E.a.createElement(k.a,{id:"default-to-today"}),"?")),this.props.element.hasOwnProperty("showTimeSelect")&&E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"show-time-select",className:"custom-control-input",type:"checkbox",checked:b,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelect","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-select"},E.a.createElement(k.a,{id:"show-time-select"}),"?")),b&&this.props.element.hasOwnProperty("showTimeSelectOnly")&&E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"show-time-select-only",className:"custom-control-input",type:"checkbox",checked:C,value:!0,onChange:this.editElementProp.bind(this,"showTimeSelectOnly","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-select-only"},E.a.createElement(k.a,{id:"show-time-select-only"}),"?")),this.props.element.hasOwnProperty("showTimeInput")&&E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"show-time-input",className:"custom-control-input",type:"checkbox",checked:g,value:!0,onChange:this.editElementProp.bind(this,"showTimeInput","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"show-time-input"},E.a.createElement(k.a,{id:"show-time-input"}),"?")),("RadioButtons"===this.state.element.element||"Checkboxes"===this.state.element.element)&&T&&E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"display-horizontal",className:"custom-control-input",type:"checkbox",checked:w,value:!0,onChange:this.editElementProp.bind(this,"inline","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"display-horizontal"},E.a.createElement(k.a,{id:"display-horizontal"})))),(I||D)&&E.a.createElement("div",null,E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label",htmlFor:"sourceType"},E.a.createElement(k.a,{id:"source"}),":"),E.a.createElement("select",{id:"sourceType",className:"form-control",defaultValue:null!==(p=null===(d=this.state.element)||void 0===d?void 0:d.sourceType)&&void 0!==p?p:"Link",onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"sourceType","value")},z.map((function(e){return E.a.createElement("option",{value:e,key:e},e)}))))),this.props.element.hasOwnProperty("src")&&"Link"===A&&E.a.createElement("div",null,E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label",htmlFor:"srcInput"},E.a.createElement(k.a,{id:"link-to"}),":"),E.a.createElement("input",{id:"srcInput",type:"text",className:"form-control",defaultValue:this.props.element.src,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"src","value")}))),this.props.element.hasOwnProperty("src")&&"Upload"===A&&E.a.createElement("div",null,E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"mt-5"},E.a.createElement("div",{className:"mt-4 flex gap-2 text-sm leading-6 text-gray-600"},E.a.createElement("label",{htmlFor:"sourceFile",className:"relative cursor-pointer flex w-full"},E.a.createElement("div",{className:"relative cursor-pointer button button-secondary whitespace-nowrap"},"Choose File",E.a.createElement("input",{id:"sourceFile",name:"sourceFile",type:"file",className:"sr-only",accept:R,onChange:this.editElementProp.bind(this,"sourceFile","value")})),E.a.createElement("p",{className:"pl-1 flex items-center border border-l-0 rounded-r-md w-full"},q)),"No file chosen"!==q&&E.a.createElement("div",null,E.a.createElement("button",{type:"button",className:"button button-secondary w-20",onClick:this.uploadFile.bind(this)},"Upload")))))),this.props.element.hasOwnProperty("src")&&"Choose From Media"===A&&U.length>0&&E.a.createElement("div",null,E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"mt-5"},E.a.createElement("div",{className:"mt-4 text-sm leading-6 text-gray-600"},E.a.createElement("div",{className:"media-tile-wrapper"},U.map((function(e){return E.a.createElement("div",{key:null==e?void 0:e.id,className:(null==e?void 0:e.url)===u.state.element.src?"active-tile":"",onClick:u.selectFromMediaFile.bind(u,e)},u.MediaBrowserTile(e))}))))))),Z&&E.a.createElement("div",null,E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"do-center",className:"custom-control-input",type:"checkbox",checked:x,value:!0,onChange:this.editElementProp.bind(this,"center","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"do-center"},E.a.createElement(k.a,{id:"center"}),"?"))),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"sm:w-3/12 px-3"},E.a.createElement("label",{className:"control-label",htmlFor:"elementWidth"},E.a.createElement(k.a,{id:"width"}),":"),E.a.createElement("input",{id:"elementWidth",type:"text",className:"form-control",defaultValue:this.props.element.width,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"width","value")})),E.a.createElement("div",{className:"sm:w-3/12 px-3"},E.a.createElement("label",{className:"control-label",htmlFor:"elementHeight"},E.a.createElement(k.a,{id:"height"}),":"),E.a.createElement("input",{id:"elementHeight",type:"text",className:"form-control",defaultValue:this.props.element.height,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"height","value")})))),"FileUpload"===this.state.element.element&&E.a.createElement("div",null,E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label",htmlFor:"fileType"},E.a.createElement(k.a,{id:"choose-file-type"}),":"),E.a.createElement("select",{id:"fileType",className:"form-control",onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"fileType","value")},[{type:"image, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, video/mp4,video/x-m4v,video/*",typeName:"All File Type"},{type:"image",typeName:"Image"},{type:"application/pdf",typeName:"PDF"},{type:"application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",typeName:"Word"},{type:"application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",typeName:"Excel"},{type:"application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation",typeName:"Powerpoint"},{type:"video/mp4,video/x-m4v,video/*",typeName:"Videos"}].map((function(e,t){return E.a.createElement("option",{value:e.type,key:t},e.typeName)}))))),"Signature"===this.state.element.element&&this.props.element.readOnly?E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label",htmlFor:"variableKey"},E.a.createElement(k.a,{id:"variable-key"}),":"),E.a.createElement("input",{id:"variableKey",type:"text",className:"form-control",defaultValue:this.props.element.variableKey,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"variableKey","value")}),E.a.createElement("p",{className:"help-block"},E.a.createElement(k.a,{id:"variable-key-desc"}),".")):E.a.createElement("div",null),M&&E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label"},E.a.createElement(k.a,{id:"print-options"})),E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"page-break-before-element",className:"custom-control-input",type:"checkbox",checked:P,value:!0,onChange:this.editElementProp.bind(this,"pageBreakBefore","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"page-break-before-element"},E.a.createElement(k.a,{id:"page-break-before-elements"}),"?"))),S&&E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label"},E.a.createElement(k.a,{id:"alternate-signature-page"})),E.a.createElement("div",{className:"custom-control custom-checkbox"},E.a.createElement("input",{id:"display-on-alternate",className:"custom-control-input",type:"checkbox",checked:H,value:!0,onChange:this.editElementProp.bind(this,"alternateForm","checked")}),E.a.createElement("label",{className:"custom-control-label",htmlFor:"display-on-alternate"},E.a.createElement(k.a,{id:"display-on-alternate-signature-page"}),"?"))),this.props.element.hasOwnProperty("step")&&E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"form-group-range"},E.a.createElement("label",{className:"control-label",htmlFor:"rangeStep"},E.a.createElement(k.a,{id:"step"})),E.a.createElement("input",{id:"rangeStep",type:"number",className:"form-control",defaultValue:this.props.element.step,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"step","value")}))),this.props.element.hasOwnProperty("min_value")&&E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"form-group-range"},E.a.createElement("label",{className:"control-label",htmlFor:"rangeMin"},E.a.createElement(k.a,{id:"min"})),E.a.createElement("input",{id:"rangeMin",type:"number",className:"form-control",defaultValue:this.props.element.min_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_value","value")}),E.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.min_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"min_label","value")}))),this.props.element.hasOwnProperty("max_value")&&E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"form-group-range"},E.a.createElement("label",{className:"control-label",htmlFor:"rangeMax"},E.a.createElement(k.a,{id:"max"})),E.a.createElement("input",{id:"rangeMax",type:"number",className:"form-control",defaultValue:this.props.element.max_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_value","value")}),E.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.element.max_label,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"max_label","value")}))),this.props.element.hasOwnProperty("default_value")&&E.a.createElement("div",{className:"form-group"},E.a.createElement("div",{className:"form-group-range"},E.a.createElement("label",{className:"control-label",htmlFor:"defaultSelected"},E.a.createElement(k.a,{id:"default-selected"})),E.a.createElement("input",{id:"defaultSelected",type:"number",className:"form-control",defaultValue:this.props.element.default_value,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"default_value","value")}))),this.props.element.showDescription&&E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label",htmlFor:"questionDescription"},E.a.createElement(k.a,{id:"description"})),E.a.createElement(f.default,{type:"text",className:"form-control",id:"questionDescription",defaultValue:this.props.element.description,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"description","value")})),this.props.showCorrectColumn&&this.props.element.canHaveAnswer&&!this.props.element.hasOwnProperty("options")&&E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label",htmlFor:"correctAnswer"},E.a.createElement(k.a,{id:"correct-answer"})),E.a.createElement("input",{id:"correctAnswer",type:"text",className:"form-control",defaultValue:this.props.element.correct,onBlur:this.updateElement.bind(this),onChange:this.editElementProp.bind(this,"correct","value")})),this.props.element.canPopulateFromApi&&this.props.element.hasOwnProperty("options")&&E.a.createElement("div",{className:"form-group"},E.a.createElement("label",{className:"control-label",htmlFor:"optionsApiUrl"},E.a.createElement(k.a,{id:"populate-options-from-api"})),E.a.createElement("div",{className:"row"},E.a.createElement("div",{className:"sm:w-6/12 px-3"},E.a.createElement("input",{className:"form-control",style:{width:"100%"},type:"text",id:"optionsApiUrl",placeholder:"http://localhost:8080/api/optionsdata"})),E.a.createElement("div",{className:"sm:w-6/12 px-3"},E.a.createElement("button",{type:"button",onClick:this.addOptions.bind(this),className:"button button-primary"},E.a.createElement(k.a,{id:"populate"}))))),this.props.element.hasOwnProperty("options")&&E.a.createElement(O,{showCorrectColumn:this.props.showCorrectColumn,canHaveOptionCorrect:_,canHaveOptionValue:L,data:this.props.preview.state.data,updateElement:this.props.updateElement,preview:this.props.preview,element:this.props.element,key:this.props.element.options.length}))}}]),a}(E.a.Component);M.defaultProps={className:"edit-element-fields"}}}]);