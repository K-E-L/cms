(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[4389],{79:(e,r,s)=>{"use strict";s.d(r,{Z:()=>t});const t={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},4389:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l});const t={name:"wysiwyg-fieldtype",mixins:[s(79).Z]};const l=(0,s(1900).Z)(t,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("ui-ckeditor-group",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,placeholder:e.field.settings.placeholder,"has-error":e.hasError(e.field.handle),"error-message":e.errorMessage(e.field.handle)},model:{value:e.model,callback:function(r){e.model=r},expression:"model"}})}),[],!1,null,null,null).exports}}]);