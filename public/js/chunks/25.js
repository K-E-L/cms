(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{EACl:function(e,t,s){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(e){this.$set(this.value.settings,e)}},errors:function(){return this.value.errors||{}}}}},s89b:function(e,t,s){"use strict";s.r(t);var a={name:"code-fieldtype-settings",data:function(){return{syntax:this.value.type||"text"}},mixins:[s("EACl").a]},n=s("KHd+"),l=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ui-select-group",{attrs:{name:"settings.syntax",label:"Syntax",help:"What language should the syntax highlighter use?",autocomplete:"off",options:[{value:"css",label:"CSS"},{value:"html",label:"HTML"},{value:"javascript",label:"JavaScript"},{value:"json",label:"JSON"},{value:"markdown",label:"Markdown"},{value:"python",label:"Python"},{value:"text",label:"Text"},{value:"xml",label:"XML"}],"has-error":e.errors.has("settings.syntax"),"error-message":e.errors.get("settings.syntax")},model:{value:e.settings.syntax,callback:function(t){e.$set(e.settings,"syntax",t)},expression:"settings.syntax"}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);