(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"5EpT":function(e,t,s){"use strict";s.r(t);var i={name:"user-fieldtype-settings",mixins:[s("EACl").a]},n=s("KHd+"),r=Object(n.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col w-1/2"},[s("ui-number",{attrs:{name:"settings.limit",label:"Limit",help:"Limit the number of assets selected; leave blank if no limit is desired.",placeholder:"","has-error":e.errors.has("settings.limit"),"error-message":e.errors.get("settings.limit")},model:{value:e.settings.limit,callback:function(t){e.$set(e.settings,"limit",t)},expression:"settings.limit"}})],1)])}),[],!1,null,null,null);t.default=r.exports},EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}}}]);