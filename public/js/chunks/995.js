(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[995],{79:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});const s={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},995:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});const s={name:"textarea-fieldtype",mixins:[t(79).Z]};const l=(0,t(1900).Z)(s,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("ui-textarea-group",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,placeholder:e.field.settings.placeholder,"has-error":e.hasError(e.field.handle),"error-message":e.errorMessage(e.field.handle)},model:{value:e.model,callback:function(r){e.model=r},expression:"model"}})}),[],!1,null,null,null).exports}}]);