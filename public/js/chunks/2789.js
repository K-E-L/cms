(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[2789],{79:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const n={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{hasError:function(t){return this.errors&&this.errors.has(t)},errorMessage:function(t){return this.hasError(t)?this.errors.get(t):""}}}},6104:(t,e,s)=>{var n=s(4155),i=void 0!==n&&n.pid?n.pid.toString(36):"";function o(){var t=Date.now(),e=o.last||t;return o.last=t>e?t:e+1}t.exports=t.exports.default=function(t,e){return(t||"")+""+i+o().toString(36)+(e||"")},t.exports.process=function(t,e){return(t||"")+i+o().toString(36)+(e||"")},t.exports.time=function(t,e){return(t||"")+o().toString(36)+(e||"")}},2789:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var n=s(6104),i=s.n(n);const o={name:"table-fieldtype",mixins:[s(79).Z],data:function(){return{initRows:this.field.settings.initRows||1,initCols:this.field.settings.initCols||2}},computed:{model:{get:function(){var t=this.value||[];return 0==t.length?this.newTable():t},set:function(t){this.$emit("input",t)}},numRows:function(){return this.model.rows.length},numCols:function(){return _.defaultTo(this.getRow(0).cols,[]).length}},watch:{model:{deep:!0,handler:function(t){this.$emit("input",t)}}},methods:{newTable:function(){var t=this;this.model={rows:new Array(this.initRows).fill({}).map((function(e){return t.newRow(t.initCols)}))}},addRow:function(t){this.model.rows.splice((t||0)+1,0,this.newRow())},removeRow:function(t){this.model.rows.splice(t||this.numRows,1)},newRow:function(t){var e=this;return{_id:i()(),cols:new Array(t||this.numCols).fill({}).map((function(t){return e.newCell()}))}},getRow:function(t){return this.model.rows[t]||[]},addCol:function(t){var e=this;this.model.rows.forEach((function(s){return s.cols.splice((t||0)+1,0,e.newCell())}))},removeCol:function(t){var e=this;this.model.rows.forEach((function(s){return s.cols.splice(t||e.numCols,1)}))},newCell:function(t){return{_id:i()(),value:t}}}};const r=(0,s(1900).Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ui-field-group",{attrs:{name:t.field.handle,fieldId:t.field.handle+"-field",label:t.field.name,help:t.field.help,"has-error":t.hasError,"error-message":t.errorMessage}},[t.model?s("div",{staticClass:"table-wrapper"},[s("table",{staticClass:"table table-auto",attrs:{id:t.field.handle+"-table","aria-live":"polite"}},[s("thead",[s("tr",[s("th",{staticClass:"w-8"}),t._v(" "),t._l(t.numCols,(function(e){return s("th",{key:"head-"+e},[s("span",{staticClass:"buttons__group"},[s("ui-button",{attrs:{icon:"",size:"small"},on:{click:function(s){return t.addCol(e-1)}}},[s("fa-icon",{staticClass:"icon",attrs:{icon:"plus"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Add column")])],1),t._v(" "),s("ui-button",{attrs:{icon:"",size:"small",disabled:1==e},on:{click:function(s){return t.removeCol(e-1)}}},[s("fa-icon",{staticClass:"icon",attrs:{icon:"times"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Remove column")])],1)],1)])})),t._v(" "),s("th",{staticClass:"w-32"})],2)]),t._v(" "),s("ui-sortable-list",{class:t.field.handle+"-sortable-list",model:{value:t.model.rows,callback:function(e){t.$set(t.model,"rows",e)},expression:"model.rows"}},[s("tbody",t._l(t.model.rows,(function(e,n){return s("ui-sortable-item",{key:e._id},[s("tr",[s("td",[s("ui-sortable-handle",{staticClass:"cursor-move inline-block"},[s("fa-icon",{staticClass:"handle fa-fw text-gray-400",attrs:{icon:"grip-vertical"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Move row")])],1)],1),t._v(" "),t._l(e.cols,(function(e,n){return s("td",{key:e._id+"-"+n},[s("ui-input",{attrs:{name:"cell-"+e._id},model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"col.value"}})],1)})),t._v(" "),s("td",[s("div",{staticClass:"buttons__group"},[s("ui-button",{attrs:{size:"small",icon:""},on:{click:function(e){return t.addRow(n)}}},[s("fa-icon",{staticClass:"icon",attrs:{icon:"plus"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Add row")])],1),t._v(" "),s("ui-button",{attrs:{size:"small",icon:"",disabled:0==n},on:{click:function(e){return t.removeRow(n)}}},[s("fa-icon",{staticClass:"icon",attrs:{icon:"times"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Remove row")])],1)],1)])],2)])})),1)])],1)]):t._e()])}),[],!1,null,null,null).exports}}]);