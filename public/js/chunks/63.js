(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{mraA:function(e,r,t){"use strict";t.r(r);var n={name:"input-fieldtype",mixins:[t("n7tU").a]},l=t("KHd+"),i=Object(l.a)(n,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("ui-input-group",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,placeholder:e.field.settings.placeholder,"has-error":e.hasError(e.field.handle),"error-message":e.errorMessage(e.field.handle)},model:{value:e.model,callback:function(r){e.model=r},expression:"model"}})}),[],!1,null,null,null);r.default=i.exports},n7tU:function(e,r,t){"use strict";r.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}}}]);