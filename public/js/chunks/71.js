(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"avJ/":function(t,e,a){"use strict";a.r(e);var l={name:"link-fieldtype",data:function(){var t={},e=this.value;return t=this.value?{text:e.text||"",link:e.link||"",target:e.target||"_self"}:{text:"",link:"",target:"_self"},{data:t}},props:{field:{type:Object,required:!0},value:{required:!1,default:null}},methods:{updateValue:function(t,e){this.data[e]=t,this.$emit("input",this.data)}}},n=a("KHd+"),i=Object(n.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-2 mb-4"},[a("div",{staticClass:"form__label"},[t._v(t._s(t.field.name))]),t._v(" "),a("div",{staticClass:"row px-2"},[a("div",{staticClass:"w-full md:w-1/2"},[a("p-input",{staticClass:"mb-2",attrs:{name:t.field.handle+"_text",placeholder:"Text"},on:{input:function(e){return t.updateValue(e,"text")}},model:{value:t.data.text,callback:function(e){t.$set(t.data,"text",e)},expression:"data.text"}}),t._v(" "),a("p-input",{staticClass:"mb-2",attrs:{name:t.field.handle+"_link",placeholder:"Link"},on:{input:function(e){return t.updateValue(e,"link")}},model:{value:t.data.link,callback:function(e){t.$set(t.data,"link",e)},expression:"data.link"}}),t._v(" "),a("p-select",{attrs:{name:t.field.handle+"_target",autocomplete:"off",options:[{label:"Open in Same Window",value:"_self"},{label:"Open in New Window",value:"_blank"}]},on:{input:function(e){return t.updateValue(e,"target")}},model:{value:t.data.target,callback:function(e){t.$set(t.data,"target",e)},expression:"data.target"}})],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);