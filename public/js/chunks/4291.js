(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[4291],{79:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},6104:(e,t,n)=>{var i=n(4155),r=void 0!==i&&i.pid?i.pid.toString(36):"";function s(){var e=Date.now(),t=s.last||e;return s.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+r+s().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+r+s().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+s().toString(36)+(t||"")}},4291:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var i=n(6104),r=n.n(i);const s={name:"dictionary-fieldtype",mixins:[n(79).Z],data:function(){return{newKey:"",newValue:""}},watch:{model:{deep:!0,handler:function(e){this.$emit("input",e)}}},methods:{new:function(e,t){return{_id:r()(),key:e,value:t}},add:function(){this.newKey&&this.newValue&&(this.model.push(this.new(this.newKey,this.newValue)),this.newKey="",this.newValue="")},remove:function(e){this.model=_.filter(this.model,(function(t){return t._id!==e}))}},created:function(){_.isEmpty(this.value)&&(this.model=[])}};const l=(0,n(1900).Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ui-field-group",{attrs:{name:e.field.handle,fieldId:e.field.handle+"-field",label:e.field.name,help:e.field.help,hasError:e.hasError(e.field.handle),errorMessage:e.errorMessage(e.field.handle)}},[e.model&&e.model.length>0?n("table",{staticClass:"table"},[n("ui-sortable-list",{class:e.field.handle+"-sortable-list",model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[n("tbody",e._l(e.model,(function(t){return n("ui-sortable-item",{key:t._id},[n("tr",[n("td",{staticClass:"w-8"},[n("ui-sortable-handle",{staticClass:"cursor-move inline-block"},[n("fa-icon",{staticClass:"handle fa-fw text-gray-400 mr-3",attrs:{icon:"grip-vertical"}})],1)],1),e._v(" "),n("td",[n("ui-input-group",{attrs:{name:"key"},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"item.key"}})],1),e._v(" "),n("td",[n("ui-input-group",{attrs:{name:"value"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}})],1),e._v(" "),n("td",{staticClass:"w-16"},[n("ui-button",{attrs:{icon:""},on:{click:function(n){return n.preventDefault(),e.remove(t._id)}}},[n("fa-icon",{attrs:{icon:"times"}}),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Destroy")])],1)],1)])])})),1)])],1):n("div",{staticClass:"help"},[e._v("Your list is empty.")]),e._v(" "),n("table",{staticClass:"table mt-3"},[n("tbody",[n("tr",[n("td",{staticClass:"w-8"}),e._v(" "),n("td",[n("ui-input-group",{attrs:{name:"key",placeholder:"New key"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add(t)}},model:{value:e.newKey,callback:function(t){e.newKey=t},expression:"newKey"}})],1),e._v(" "),n("td",[n("ui-input-group",{attrs:{name:"value",placeholder:"New value"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add(t)}},model:{value:e.newValue,callback:function(t){e.newValue=t},expression:"newValue"}})],1),e._v(" "),n("td",{staticClass:"w-16"},[n("ui-button",{attrs:{icon:""},on:{click:function(t){return t.preventDefault(),e.add(t)}}},[n("fa-icon",{attrs:{icon:"plus"}}),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Add")])],1)],1)])])])])}),[],!1,null,null,null).exports}}]);