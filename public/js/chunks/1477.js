(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[1477],{79:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});const i={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{hasError:function(t){return this.errors&&this.errors.has(t)},errorMessage:function(t){return this.hasError(t)?this.errors.get(t):""}}}},6104:(t,e,n)=>{var i=n(4155),s=void 0!==i&&i.pid?i.pid.toString(36):"";function r(){var t=Date.now(),e=r.last||t;return r.last=t>e?t:e+1}t.exports=t.exports.default=function(t,e){return(t||"")+""+s+r().toString(36)+(e||"")},t.exports.process=function(t,e){return(t||"")+s+r().toString(36)+(e||"")},t.exports.time=function(t,e){return(t||"")+r().toString(36)+(e||"")}},1477:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>l});var i=n(6104),s=n.n(i);const r={name:"list-fieldtype",mixins:[n(79).Z],data:function(){return{newItem:""}},watch:{model:{deep:!0,handler:function(t){this.$emit("input",t)}}},methods:{new:function(t){return{_id:s()(),value:t}},add:function(){this.newItem&&(this.model.push(this.new(this.newItem)),this.newItem="")},remove:function(t){this.model=_.filter(this.model,(function(e){return e._id!==t}))}},created:function(){_.isEmpty(this.value)&&(this.model=[])}};const l=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ui-field-group",{attrs:{name:t.field.handle,fieldId:t.field.handle+"-field",label:t.field.name,help:t.field.help,hasError:t.hasError(t.field.handle),errorMessage:t.errorMessage(t.field.handle)}},[t.model&&t.model.length>0?n("table",{staticClass:"table"},[n("ui-sortable-list",{class:t.field.handle+"-sortable-list",model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[n("tbody",t._l(t.model,(function(e){return n("ui-sortable-item",{key:e._id},[n("tr",[n("td",{staticClass:"w-8"},[n("ui-sortable-handle",{staticClass:"cursor-move inline-block"},[n("fa-icon",{staticClass:"handle fa-fw text-gray-400 mr-3",attrs:{icon:"grip-vertical"}})],1)],1),t._v(" "),n("td",[n("ui-input-group",{attrs:{name:"value"},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}})],1),t._v(" "),n("td",{staticClass:"w-16"},[n("ui-button",{attrs:{icon:""},on:{click:function(n){return n.preventDefault(),t.remove(e._id)}}},[n("fa-icon",{attrs:{icon:"times"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Destroy")])],1)],1)])])})),1)])],1):n("div",{staticClass:"help"},[t._v("Your list is empty.")]),t._v(" "),n("table",{staticClass:"table mt-3"},[n("tbody",[n("tr",[n("td",{staticClass:"w-8"}),t._v(" "),n("td",[n("ui-input-group",{attrs:{name:"value",placeholder:"Add new item..."},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add(e)}},model:{value:t.newItem,callback:function(e){t.newItem=e},expression:"newItem"}})],1),t._v(" "),n("td",{staticClass:"w-16"},[n("ui-button",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.add(e)}}},[n("fa-icon",{attrs:{icon:"plus"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("Add")])],1)],1)])])])])}),[],!1,null,null,null).exports}}]);