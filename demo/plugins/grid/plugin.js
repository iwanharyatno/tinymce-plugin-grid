/*! For license information please see plugin.js.LICENSE.txt */
(()=>{var e={745:()=>{tinymce.addI18n("en",{"grid.insert":"Insert grid","grid.remove":"Delete grid","grid.row":"Row","grid.row.insert_after":"Insert row after","grid.row.insert_before":"Insert row before","grid.row.remove":"Delete row","grid.column":"Column","grid.column.insert_after":"Insert column before","grid.column.insert_before":"Insert column after","grid.column.remove":"Delete column","grid.column.properties":"Column properties"})},886:()=>{tinymce.addI18n("pl",{"grid.insert":"Wstaw grid","grid.remove":"Usuń grid","grid.row":"Wiersz","grid.row.insert_after":"Wstaw wiersz przed","grid.row.insert_before":"Wstaw wiersz po","grid.row.remove":"Usuń wiersz","grid.column":"Kolumna","grid.column.insert_after":"Wstaw kolumnę przed","grid.column.insert_before":"Wstaw kolumnę po","grid.column.remove":"Usuń kolumnę","grid.column.properties":"Ustawienia kolumny"})}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{"use strict";var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};function t(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}Object.create,Object.create,n(886),n(745);const r=function(){function e(e,t,n){this.settings=e,this.editor=t,this.i18n=n,this.classNames=["bs-grid-container","bs-grid-row","bs-grid-col"],this.onKeyDown=this.onKeyDown.bind(this),this.onBeforeExecCommand=this.onBeforeExecCommand.bind(this),t.on("keydown",this.onKeyDown),t.on("BeforeExecCommand",this.onBeforeExecCommand)}return e.prototype.onKeyDown=function(e){var t=this,n=this.editor.selection.getNode(),r=n.parentNode,i=this.editor.selection.getRng();if("Backspace"===e.key){if(i.startOffset>0)return;if(i.startOffset<=0&&this.classNames.some((function(e){return n.classList.contains(e)})))return e.preventDefault(),!1;if(r&&1===r.childElementCount&&this.classNames.some((function(e){return r.classList.contains(e)}))){if(!this.classNames.some((function(e){return n.classList.contains(e)}))){if(i.startOffset<=0)return e.preventDefault(),!1;this.editor.undoManager.transact((function(){t.editor.dom.remove(n),t.editor.execCommand("mceInsertContent",!1,t.editor.dom.createHTML("p"))}))}return e.preventDefault(),!1}}if("Delete"===e.key){if(r&&1===r.childElementCount&&this.classNames.some((function(e){return r.classList.contains(e)})))return e.preventDefault(),!1;if(i.startOffset>0)return;if(this.classNames.some((function(e){return n.classList.contains(e)})))return e.preventDefault(),!1}},e.prototype.onBeforeExecCommand=function(e){if("InsertOrderedList"===e.command||"InsertUnorderedList"===e.command||"InsertDefinitionList"===e.command){var t=this.editor.selection.getNode();this.classNames.forEach((function(n){if(t.classList.contains(""+n))return e.preventDefault(),!1}))}},e}(),i=function(){function e(e,t,n){this.settings=e,this.editor=t,this.i18n=n,this.getElement=this.getElement.bind(this),this.isElement=this.isElement.bind(this),this.getElementColumn=this.getElementColumn.bind(this),this.isElementColumn=this.isElementColumn.bind(this),this.getElementRow=this.getElementRow.bind(this),this.isElementRow=this.isElementRow.bind(this),this.selectElement=this.selectElement.bind(this)}return e.prototype.cmd=function(e,t){var n=this;return void 0===t&&(t=null),function(){return n.editor.execCommand(e,!1,t)}},e.prototype.getElement=function(){return this.editor.dom.getParent(this.editor.selection.getStart(),".bs-grid-container")},e.prototype.isElement=function(e){return this.editor.dom.is(e,".bs-grid-container")&&this.editor.getBody().contains(e)},e.prototype.getElementColumn=function(){return this.editor.dom.getParent(this.editor.selection.getStart(),".bs-grid-col")},e.prototype.isElementColumn=function(e){if(!1===this.editor.getBody().contains(e))return!1;for(var t=0,n=this.editor.dom.getParents(e,".bs-grid-col");t<n.length;t++)if(n[t].classList.contains("bs-grid-col"))return!0;return!1},e.prototype.getElementRow=function(){return this.editor.dom.getParent(this.editor.selection.getStart(),".bs-grid-row")},e.prototype.isElementRow=function(e){return this.editor.dom.is(e,".bs-grid-row")&&this.editor.getBody().contains(e)},e.prototype.selectElement=function(e){this.getElementColumn()&&(this.editor.selection.collapse(),this.editor.focus(!1))},e}(),o=function(){function e(e){this.preset=e}return e.prototype.render=function(e,t){var n=this;void 0===t&&(t={});var r="selected"in t?t.selected:{};return{title:"Insert column",body:this.panel(),initialData:this.initialData(r),buttons:this.buttons(),onSubmit:function(t){return n.onSubmit(t,e)},onChange:this.onChange}},e.prototype.getSelected=function(e){var t=this,n={};return this.preset.breakpoints.forEach((function(r){var i=t.preset.columnClassRegex(r.preffix).exec(e),o="";i&&i.length>1&&(o=i[1]),n[r.value]=o})),this.preset.arrangements.forEach((function(r){var i=t.preset.arrangementClassRegex(r.preffix).exec(e),o="";i&&i.length>1&&(o=i[1]),n[r.value]=o})),n},e.prototype.panel=function(){var e=this;return{type:"panel",items:this.preset.breakpoints.map((function(t){return e.breadpoint(t)})).concat(this.preset.arrangements.map((function(t){return e.alignment(t)})))}},e.prototype.initialData=function(e){var t=this;if(e&&Object.keys(e).length)return e;var n={};return this.preset.breakpoints.forEach((function(e){n[e.value]=t.preset.default()})),n},e.prototype.buttons=function(){return[{type:"submit",name:e.BTN_SUBMIT,text:"Submit",primary:!0},{type:"cancel",name:e.BTN_CANCEL,text:"Cancel"}]},e.prototype.breadpoint=function(e){var t=this,n=this.preset.columns.map((function(e){return t.columnOption(e)}));return n.unshift({text:"Select column",value:""}),{type:"listbox",name:e.value,label:e.text,items:n}},e.prototype.alignment=function(e){var t=this,n=this.preset.alignments.map((function(e){return t.alignmentOption(e)}));return n.unshift({text:"Select alignment",value:""}),{type:"listbox",name:e.value,label:e.text,items:n}},e.prototype.columnOption=function(e){return{text:e.text,value:e.value}},e.prototype.alignmentOption=function(e){return{text:e.text,value:e.value}},e.prototype.onSubmit=function(e,t){t(e.getData()),e.close()},e.prototype.onChange=function(t,n){var r=t.getData(),i=0;for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&""!==r[o]&&i++;i>0?t.enable(e.BTN_SUBMIT):t.disable(e.BTN_SUBMIT)},e.BTN_SUBMIT="btnSubmit",e.BTN_CANCEL="btnCancel",e}(),s=function(e){function n(t,r,i,s){var l=e.call(this,t,i,s)||this;return l.settings=t,l.preset=r,l.editor=i,l.i18n=s,l.insertColumnDialog=new o(l.preset),l.insert=l.insert.bind(l),l.insertAfter=l.insertAfter.bind(l),l.insertBefore=l.insertBefore.bind(l),l.delete=l.delete.bind(l),l.properties=l.properties.bind(l),l.onInsertSubmit=l.onInsertSubmit.bind(l),i.ui.registry.addButton(n.BTN_COLUMN_PROPERTIES,{icon:"table-cell-properties",tooltip:s.translate("grid.column.properties"),onAction:l.properties}),i.ui.registry.addButton(n.BTN_COLUMN_INSERT_AFTER,{icon:"table-insert-column-after",tooltip:s.translate("grid.column.insert_after"),onAction:l.insertAfter}),i.ui.registry.addButton(n.BTN_COLUMN_INSERT_BEFORE,{icon:"table-insert-column-before",tooltip:s.translate("grid.column.insert_before"),onAction:l.insertBefore}),i.ui.registry.addButton(n.BTN_COLUMN_DELETE,{icon:"table-delete-column",tooltip:s.translate("grid.column.remove"),onAction:l.delete}),l}return t(n,e),n.prototype.insertAfter=function(e){this.insert(e,"after")},n.prototype.insertBefore=function(e){this.insert(e,"before")},n.prototype.insert=function(e,t){var n=this;return!!this.getElementRow()&&(this.editor.windowManager.open(this.insertColumnDialog.render((function(e){return n.onInsertSubmit(e,t)}))),!0)},n.prototype.delete=function(e){var t=this.getElementColumn();if(t){var n=t.parentNode;this.editor.dom.remove(t),0===n.querySelectorAll(".bs-grid-col").length&&this.editor.dom.remove(n)}},n.prototype.onInsertSubmit=function(e,t){var n=this.getElementColumn();n?"after"===t?n.parentNode.insertBefore(this.preset.renderColumn(e),n.nextSibling):n.parentNode.insertBefore(this.preset.renderColumn(e),n):this.getElementRow().appendChild(this.preset.renderColumn(e))},n.prototype.properties=function(e){var t=this,n=this.getElementColumn();if(n){var r=this.insertColumnDialog.getSelected(n.classList.value);this.editor.windowManager.open(this.insertColumnDialog.render((function(e){var r=[];n.classList.forEach((function(e){t.preset.isColumn(e)&&r.push(e),t.preset.isArrangement(e)&&r.push(e)})),r.forEach((function(e){n.classList.remove(e)}));var i=function(r){if(e.hasOwnProperty(r)){var i=e[r],o=t.preset.breakpoints.find((function(e){return e.value===r})),s=t.preset.arrangements.find((function(e){return e.value===r}));if(!i)return"continue";o&&n.classList.add(t.preset.columnClass(o.preffix,i)),s&&n.classList.add(t.preset.arrangementClass(s.preffix,i))}};for(var o in e)i(o)}),{class:n.classList.value,selected:r}),{})}},n.CMD_INSERT_AFTER_COLUMN="columnInsertAfter",n.CMD_INSERT_BEFORE_COLUMN="columnInsertBefore",n.CMD_DELETE_COLUMN="columnDelete",n.CMD_PROPERTIES_COLUMN="columnProperties",n.BTN_COLUMN_INSERT_AFTER="column_insert_after",n.BTN_COLUMN_INSERT_BEFORE="column_insert_before",n.BTN_COLUMN_DELETE="column_delete",n.BTN_COLUMN_PROPERTIES="column_properties",n}(i),l=function(e){function n(t,r,i,o){var s=e.call(this,t,i,o)||this;return s.settings=t,s.preset=r,s.editor=i,s.i18n=o,s.insert=s.insert.bind(s),s.insertAfter=s.insertAfter.bind(s),s.insertBefore=s.insertBefore.bind(s),s.delete=s.delete.bind(s),i.ui.registry.addButton(n.BTN_ROW_INSERT_AFTER,{icon:"table-insert-row-after",tooltip:o.translate("grid.row.insert_after"),onAction:s.insertAfter}),i.ui.registry.addButton(n.BTN_ROW_INSERT_BEFORE,{icon:"table-insert-row-above",tooltip:o.translate("grid.row.insert_before"),onAction:s.insertBefore}),i.ui.registry.addButton(n.BTN_ROW_DELETE,{icon:"table-delete-row",tooltip:o.translate("grid.row.remove"),onAction:s.delete}),s}return t(n,e),n.prototype.insertAfter=function(e){this.insert(e,"after")},n.prototype.insertBefore=function(e){this.insert(e,"before")},n.prototype.insert=function(e,t){var n=this.getElementRow();if(n){var r=this.preset.renderRow();return"after"===t?n.parentNode.insertBefore(r,n.nextSibling):n.parentNode.insertBefore(r,n),!0}return!1},n.prototype.delete=function(e){var t=this.getElementRow();t&&this.editor.dom.remove(t)},n.CMD_INSERT_AFTER_ROW="rowInsertAfter",n.CMD_INSERT_BEFORE_ROW="rowInsertBefore",n.CMD_DELETE_ROW="rowDelete",n.BTN_ROW_INSERT_AFTER="row_insert_after",n.BTN_ROW_INSERT_BEFORE="row_insert_before",n.BTN_ROW_DELETE="row_delete",n}(i),a=function(e){function n(t,r,i,o){var a=e.call(this,t,i,o)||this;return a.settings=t,a.preset=r,a.editor=i,a.i18n=o,a.insert=a.insert.bind(a),a.delete=a.delete.bind(a),i.ui.registry.addButton(n.BTN_INSERT_GRID,{icon:"table",text:o.translate("grid.insert"),onAction:a.insert}),i.ui.registry.addButton(n.BTN_DELETE_GRID,{icon:"table-delete-table",text:o.translate("grid.remove"),onAction:a.delete}),i.ui.registry.addContextToolbar(n.CONTEXT_TOOLBAR,{predicate:a.isElementColumn,scope:"editor",position:"node",items:n.BTN_DELETE_GRID+" | "+s.BTN_COLUMN_PROPERTIES+" "+s.BTN_COLUMN_INSERT_AFTER+" "+s.BTN_COLUMN_INSERT_BEFORE+" "+s.BTN_COLUMN_DELETE+" | "+l.BTN_ROW_INSERT_AFTER+" "+l.BTN_ROW_INSERT_BEFORE+" "+l.BTN_ROW_DELETE}),a}return t(n,e),n.prototype.insert=function(e){this.getElement()||this.editor.execCommand("mceInsertContent",!1,this.preset.renderContainer().outerHTML)},n.prototype.delete=function(e){var t=this.getElement();t&&this.editor.dom.remove(t)},n.CONTEXT_TOOLBAR="toolbar",n.BTN_INSERT_GRID="grid_insert",n.BTN_DELETE_GRID="grid_delete",n}(i),u=function(){function e(e){this.editor=e}return Object.defineProperty(e.prototype,"preset",{get:function(){var t=this.editor.getParam("grid_preset",e.presets[0]);if(!(t in e.presets))return t;throw new Error('Unknown grid preset "'+t+'"')},enumerable:!1,configurable:!0}),e.presets=["Bootstrap3","Bootstrap4","Foundation5"],e}();var c={Bootstrap3:function(){function e(e,t){var n=this;this.settings=e,this.editor=t,this.columns=[{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"},{text:"7",value:"7"},{text:"8",value:"8"},{text:"9",value:"9"},{text:"10",value:"10"},{text:"11",value:"11"},{text:"12",value:"12"}],this.breakpoints=[{text:"Extra small",value:"extra_small",preffix:"xs"},{text:"Small",value:"small",preffix:"sm"},{text:"Medium",value:"medium",preffix:"md"},{text:"Large",value:"large",preffix:"lg"}],this.arrangements=[{text:"Justify Content",value:"justify_content",preffix:"justify-content"},{text:"Align Items",value:"align_items",preffix:"align-items"}],this.arrangementClass=function(e,t){return e+"-"+t},this.alignments=[{text:"Start",value:"start"},{text:"End",value:"end"},{text:"Center",value:"center"},{text:"Between",value:"between"},{text:"Arround",value:"arround"},{text:"Baseline (Align Items Only)",value:"baseline"},{text:"Stretch  (Align Items Only)",value:"stretch"}],this.style=function(){return"bootstrap3.css"},this.default=function(){return"12"},this.columnClassRegex=function(e){return new RegExp("col-"+e+"-([\\d]+)","gi")},this.arrangementClassRegex=function(e){return new RegExp("bs-"+e+"-(.+)","gi")},this.columnClass=function(e,t){return"col-"+e+"-"+t},this.isColumn=function(e){return!!n.breakpoints.find((function(t){return!!n.columns.find((function(r){return n.columnClass(t.preffix,r.value)===e}))}))},this.isArrangement=function(e){return!!n.arrangements.find((function(t){return!!n.alignments.find((function(r){return n.arrangementClass(t.preffix,r.value)===e}))}))}}return e.prototype.renderContainer=function(){var e=document.createElement("div");return e.innerHTML='\n        <div class="grid-container container">\n            <div class="grid-row row">\n                <div class="grid-col col-lg-12"><p>Lorem ipsum</p></div>\n            </div>\n        </div>'.trim(),e},e.prototype.renderRow=function(){var e=document.createElement("div");return e.innerHTML='\n        <div class="grid-row row">\n            <div class="grid-col col-lg-12"><p>Lorem ipsum</p></div>\n        </div>'.trim(),e.firstChild},e.prototype.renderColumn=function(e){var t='<div class="grid-col '+((e.extra_small.length>0?"col-sm-"+e.extra_small:"")+" "+(e.small.length>0?"col-sm-"+e.small:"")+" "+(e.medium.length>0?"col-md-"+e.medium:"")+" "+(e.large.length>0?"col-lg-"+e.large:"")).trim()+'"><p>Lorem ipsum</p></div>',n=document.createElement("div");return n.innerHTML=t.trim(),n.firstChild},e}(),Bootstrap4:function(){function e(e,t){var n=this;this.settings=e,this.editor=t,this.columns=[{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"},{text:"7",value:"7"},{text:"8",value:"8"},{text:"9",value:"9"},{text:"10",value:"10"},{text:"11",value:"11"},{text:"12",value:"12"}],this.breakpoints=[{text:"Extra small",value:"extra_small",preffix:"xs"},{text:"Small",value:"small",preffix:"sm"},{text:"Medium",value:"medium",preffix:"md"},{text:"Large",value:"large",preffix:"lg"}],this.arrangements=[{text:"Justify Content",value:"justify_content",preffix:"justify-content"},{text:"Align Items",value:"align_items",preffix:"align-items"}],this.arrangementClass=function(e,t){return e+"-"+t},this.alignments=[{text:"Start",value:"start"},{text:"End",value:"end"},{text:"Center",value:"center"},{text:"Between",value:"between"},{text:"Arround",value:"arround"},{text:"Baseline (Align Items Only)",value:"baseline"},{text:"Stretch  (Align Items Only)",value:"stretch"}],this.style=function(){return"bootstrap4.css"},this.default=function(){return"12"},this.columnClassRegex=function(e){return new RegExp("col-"+e+"-([\\d]+)","gi")},this.arrangementClassRegex=function(e){return new RegExp("bs-"+e+"-(.+)","gi")},this.columnClass=function(e,t){return"col-"+e+"-"+t},this.isColumn=function(e){return!!n.breakpoints.find((function(t){return!!n.columns.find((function(r){return n.columnClass(t.preffix,r.value)===e}))}))},this.isArrangement=function(e){return!!n.arrangements.find((function(t){return!!n.alignments.find((function(r){return n.arrangementClass(t.preffix,r.value)===e}))}))}}return e.prototype.renderContainer=function(){var e=document.createElement("div");return e.innerHTML='\n        <div class="grid-container container">\n            <div class="grid-row row">\n                <div class="grid-col col-lg-12"><p>Lorem ipsum</p></div>\n            </div>\n        </div>'.trim(),e},e.prototype.renderRow=function(){var e=document.createElement("div");return e.innerHTML='\n        <div class="grid-row row">\n            <div class="grid-col col-lg-12"><p>Lorem ipsum</p></div>\n        </div>'.trim(),e.firstChild},e.prototype.renderColumn=function(e){var t='<div class="grid-col '+((e.extra_small.length>0?"col-sm-"+e.extra_small:"")+" "+(e.small.length>0?"col-sm-"+e.small:"")+" "+(e.medium.length>0?"col-md-"+e.medium:"")+" "+(e.large.length>0?"col-lg-"+e.large:"")).trim()+'"><p>Lorem ipsum</p></div>',n=document.createElement("div");return n.innerHTML=t.trim(),n.firstChild},e}(),Bootstrap5:function(){function e(e,t){var n=this;this.settings=e,this.editor=t,this.columns=[{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"},{text:"7",value:"7"},{text:"8",value:"8"},{text:"9",value:"9"},{text:"10",value:"10"},{text:"11",value:"11"},{text:"12",value:"12"}],this.breakpoints=[{text:"Small",value:"small",preffix:"sm"},{text:"Medium",value:"medium",preffix:"md"},{text:"Large",value:"large",preffix:"lg"},{text:"Extra large",value:"extra_large",preffix:"xl"}],this.arrangements=[{text:"Justify Content",value:"justify_content",preffix:"justify-content"},{text:"Align Items",value:"align_items",preffix:"align-items"}],this.alignments=[{text:"Start",value:"start"},{text:"End",value:"end"},{text:"Center",value:"center"},{text:"Between",value:"between"},{text:"Arround",value:"arround"},{text:"Baseline (Align Items Only)",value:"baseline"},{text:"Stretch  (Align Items Only)",value:"stretch"}],this.arrangementClass=function(e,t){return"bs-"+e+"-"+t},this.style=function(){return"bootstrap5.css"},this.default=function(){return"12"},this.columnClassRegex=function(e){return new RegExp("bs-col-"+e+"-([\\d]+)","gi")},this.arrangementClassRegex=function(e){return new RegExp("bs-"+e+"-(.+)","gi")},this.columnClass=function(e,t){return"bs-col-"+e+"-"+t},this.isColumn=function(e){return!!n.breakpoints.find((function(t){return!!n.columns.find((function(r){return n.columnClass(t.preffix,r.value)===e}))}))},this.isArrangement=function(e){return!!n.arrangements.find((function(t){return!!n.alignments.find((function(r){return n.arrangementClass(t.preffix,r.value)===e}))}))}}return e.prototype.renderContainer=function(){var e=document.createElement("div");return e.innerHTML='\n        <div class="bs-grid-container container-fluid">\n            <div class="bs-grid-row bs-row">\n                <div class="bs-grid-col col-lg-12"><div><p><span style="display: none">ga liat</span>Isi disini</p></div></div>\n            </div>\n        </div>'.trim(),e},e.prototype.renderRow=function(){var e=document.createElement("div");return e.innerHTML='\n        <div class="bs-grid-row bs-row">\n            <div class="bs-grid-col bs-col-lg-12"><div><p><span style="display: none">ga liat</span>Isi disini</p></div></div>\n        </div>'.trim(),e.firstChild},e.prototype.renderColumn=function(e){var t='<div class="bs-grid-col '+((e.extra_large.length>0?"bs-col-xl-"+e.extra_large:"")+" "+(e.small.length>0?"bs-col-sm-"+e.small:"")+" "+(e.medium.length>0?"bs-col-md-"+e.medium:"")+" "+(e.large.length>0?"bs-col-lg-"+e.large:"")+" "+(e.align_items.length>0?"bs-align-items-"+e.align_items:"")+" "+(e.justify_content.length>0?"bs-justify-content-"+e.align_items:"")).trim()+'"><div><p><span style="display: none">ga liat</span>Isi disini</p></div></div>',n=document.createElement("div");return n.innerHTML=t.trim(),n.firstChild},e}(),Foundation5:function(){function e(e,t){var n=this;this.settings=e,this.editor=t,this.columns=[{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"},{text:"7",value:"7"},{text:"8",value:"8"},{text:"9",value:"9"},{text:"10",value:"10"},{text:"11",value:"11"},{text:"12",value:"12"}],this.breakpoints=[{text:"Small",value:"small",preffix:"small"},{text:"Medium",value:"medium",preffix:"medium"},{text:"Large",value:"large",preffix:"large"}],this.arrangements=[{text:"Justify Content",value:"justify_content",preffix:"justify-content"},{text:"Align Items",value:"align_items",preffix:"align-items"}],this.arrangementClass=function(e,t){return e+"-"+t},this.alignments=[{text:"Start",value:"start"},{text:"End",value:"end"},{text:"Center",value:"center"},{text:"Between",value:"between"},{text:"Arround",value:"arround"},{text:"Baseline (Align Items Only)",value:"baseline"},{text:"Stretch  (Align Items Only)",value:"stretch"}],this.style=function(){return"foundation5.css"},this.default=function(){return"12"},this.columnClassRegex=function(e){return new RegExp(e+"-([\\d]+)","gi")},this.arrangementClassRegex=function(e){return new RegExp("bs-"+e+"-(.+)","gi")},this.columnClass=function(e,t){return e+"-"+t},this.isColumn=function(e){return!!n.breakpoints.find((function(t){return!!n.columns.find((function(r){return n.columnClass(t.preffix,r.value)===e}))}))},this.isArrangement=function(e){return!!n.arrangements.find((function(t){return!!n.alignments.find((function(r){return n.arrangementClass(t.preffix,r.value)===e}))}))}}return e.prototype.renderContainer=function(){var e=document.createElement("div");return e.innerHTML='\n        <div class="grid-container container">\n            <div class="grid-row row">\n                <div class="grid-col columns large-12"><p>Lorem ipsum</p></div>\n            </div>\n        </div>'.trim(),e},e.prototype.renderRow=function(){var e=document.createElement("div");return e.innerHTML='\n        <div class="grid-row row">\n            <div class="grid-col columns large-12"><p>Lorem ipsum</p></div>\n        </div>'.trim(),e.firstChild},e.prototype.renderColumn=function(e){var t='<div class="grid-col columns '+((e.small.length>0?"small-"+e.small:"")+" "+(e.medium.length>0?"medium-"+e.medium:"")+" "+(e.large.length>0?"large-"+e.large:"")).trim()+'"><p>Lorem ipsum</p></div>',n=document.createElement("div");return n.innerHTML=t.trim(),n.firstChild},e}()};tinymce.PluginManager.requireLangPack("grid"),tinymce.PluginManager.add("grid",(function(e,t){return n=void 0,i=void 0,d=function(){var n,i;return function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(o){return n=new u(e),i=function(e,t){return new c[e.preset]}(n),e.contentCSS.push(t+"/"+i.style()),new r(n,e,tinymce.util.I18n),new l(n,i,e,tinymce.util.I18n),new s(n,i,e,tinymce.util.I18n),new a(n,i,e,tinymce.util.I18n),[2]}))},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{l(d.next(e))}catch(e){t(e)}}function s(e){try{l(d.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,s)}l((d=d.apply(n,i||[])).next())}));var n,i,o,d}))})()})();