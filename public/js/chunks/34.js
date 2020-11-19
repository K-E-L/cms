(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{EACl:function(e,s,t){"use strict";s.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},R1Po:function(e,s,t){"use strict";t.r(s);var i={name:"number-fieldtype-settings",mixins:[t("EACl").a]},n=t("KHd+"),a=Object(n.a)(i,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row"},[t("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.step",label:"Step Size",help:"Stepping interval",autocomplete:"off",min:0,decimals:e.settings.decimals,"hide-buttons":!1,"has-error":e.errors.has("settings.step"),"error-message":e.errors.get("settings.step")},model:{value:e.settings.step,callback:function(s){e.$set(e.settings,"step",s)},expression:"settings.step"}}),e._v(" "),t("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.decimals",label:"Decimal Places",help:"The number of decimal places this number will accept.",autocomplete:"off",min:0,max:6,"hide-buttons":!1,"has-error":e.errors.has("settings.decimals"),"error-message":e.errors.get("settings.decimals")},model:{value:e.settings.decimals,callback:function(s){e.$set(e.settings,"decimals",s)},expression:"settings.decimals"}}),e._v(" "),t("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.min",label:"Min Value",help:"Minimum allowed value",autocomplete:"off",step:e.settings.step,decimals:e.settings.decimals,max:e.settings.max,"hide-buttons":!1,"has-error":e.errors.has("settings.min"),"error-message":e.errors.get("settings.min")},model:{value:e.settings.min,callback:function(s){e.$set(e.settings,"min",s)},expression:"settings.min"}}),e._v(" "),t("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.max",label:"Max Value",help:"Maximum allowed value",autocomplete:"off",step:e.settings.step,decimals:e.settings.decimals,min:e.settings.min,"hide-buttons":!1,"has-error":e.errors.has("settings.max"),"error-message":e.errors.get("settings.max")},model:{value:e.settings.max,callback:function(s){e.$set(e.settings,"max",s)},expression:"settings.max"}})],1)}),[],!1,null,null,null);s.default=a.exports}}]);