(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[1583],{2569:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});const n={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},1583:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>i});const n={name:"range-fieldtype-settings",mixins:[t(2569).Z]};const i=(0,t(1900).Z)(n,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row"},[t("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.step",label:"Step Size",help:"Stepping interval",autocomplete:"off",min:0,"hide-buttons":!1,"has-error":e.errors.has("settings.step"),"error-message":e.errors.get("settings.step")},model:{value:e.settings.step,callback:function(s){e.$set(e.settings,"step",s)},expression:"settings.step"}}),e._v(" "),t("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.min",label:"Min Value",help:"Minimum allowed value",autocomplete:"off",max:e.settings.max,"hide-buttons":!1,"has-error":e.errors.has("settings.min"),"error-message":e.errors.get("settings.min")},model:{value:e.settings.min,callback:function(s){e.$set(e.settings,"min",s)},expression:"settings.min"}}),e._v(" "),t("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.max",label:"Max Value",help:"Maximum allowed value",autocomplete:"off",min:e.settings.min,"hide-buttons":!1,"has-error":e.errors.has("settings.max"),"error-message":e.errors.get("settings.max")},model:{value:e.settings.max,callback:function(s){e.$set(e.settings,"max",s)},expression:"settings.max"}})],1)}),[],!1,null,null,null).exports}}]);