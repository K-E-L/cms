(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{E3J6:function(t,e,i){"use strict";i.r(e);var r=i("L2JU"),n=i("n7tU"),s=i("OuK8"),o=i("GfKu"),a=i("KSN3"),c={computed:{selection:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},addLimit:function(){return this.limit-this.selection.length}},props:{value:{type:Array,required:!0},limit:{type:Number,default:1/0},hasHeader:{type:Boolean,default:!0}},methods:{remove:function(t){this.selection=_.reject(this.selection,(function(e){return e.id==t}))}}},l=i("KHd+"),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card h-full"},[t.hasHeader?i("div",{staticClass:"flex items-center justify-between border-b border-gray-200 p-3"},[i("ui-button",{attrs:{variant:"warning"},on:{click:function(e){return t.$emit("reject")}}},[i("fa-icon",{staticClass:"mr-2",attrs:{icon:["fas","times"]}}),t._v(" Reject")],1),t._v(" "),i("ui-button",{attrs:{variant:"info"},on:{click:function(e){return t.$emit("accept")}}},[t._v("Accept "),i("fa-icon",{staticClass:"ml-2",attrs:{icon:["fas","check"]}})],1)],1):t._e(),t._v(" "),t.selection.length>0?i("div",[i("ui-sortable-list",{staticClass:"sortable-list",model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[i("div",{staticClass:"w-full p-3"},t._l(t.selection,(function(e){return i("ui-sortable-item",{key:e.id},[i("div",{staticClass:"flex items-center py-2"},[i("div",{staticClass:"w-1/12"},[i("ui-sortable-handle",{staticClass:"cursor-move"},[i("fa-icon",{staticClass:"handle fa-fw text-gray-400",attrs:{icon:"ellipsis-v"}})],1)],1),t._v(" "),i("div",{staticClass:"w-3/12"},["image"==e.type?i("ui-img",{attrs:{src:e.url+"?w=50&h=50&fit=crop","background-color":"white",width:50,height:50}}):i("ui-img",{attrs:{src:"/vendor/fusion/img/"+e.type+"-large.svg","background-color":"white",width:50,height:50}})],1),t._v(" "),i("div",{staticClass:"w-6/12"},[i("div",[t._v(t._s(e.name))])]),t._v(" "),i("div",{staticClass:"w-2/12 text-right"},[i("ui-button",{attrs:{theme:"danger"},on:{click:function(i){return t.remove(e.id)}}},[i("fa-icon",{attrs:{icon:["fas","trash"]}})],1)],1)])])})),1)]),t._v(" "),t.addLimit<=0?i("div",{staticClass:"text-sm italic text-danger-600 text-center"},[t._v("\n\t\t\tFile limit reached\n\t\t")]):t._e()],1):i("div",{staticClass:"h-full flex flex-col justify-center items-center text-5xl text-gray-300"},[i("fa-icon",{staticClass:"fa-fw fa-3x",attrs:{icon:["far","copy"]}}),t._v(" "),i("span",{staticClass:"text-lg py-2 text-gray-500"},[t._v("Select some files...")])],1)])}),[],!1,null,null,null).exports,d=i("pTuO"),f=i("tFvq"),p=i("ZsPb"),h=i("NsII"),v=i("gvwn"),m=i("VLMi");function b(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){C(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function C(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O={name:"asset-fieldtype",mixins:[n.a,s.default,o.default],components:{"file-uploader":a.a,"file-selection":u,"display-action":d.a,"search-action":f.a,"sort-action":p.a,"view-action":h.a,directory:v.a,file:m.a},data:function(){return{requestOpen:!1,modalOpen:!1,selection:[]}},watch:{loading:function(t){var e=this;this.$nextTick((function(){t?e.destroySelector():(e.loadSelector(e.$el.querySelector(".selectables")),e.requestOpen&&(e.modalOpen=!0,e.requestOpen=!1))}))}},computed:{selectionLimit:function(){return Number(this.field.settings.limit)||1/0},addLimit:function(){return this.selectionLimit-this.selection.length},typeRestriction:function(){return this.field.settings.filetype_restrictions}},methods:w(w({},Object(r.b)({setDropzoneVisible:"filemanager/setDropzoneVisible"})),{},{isValidSelection:function(t){return 0==this.typeRestriction.length||_.includes(this.typeRestriction,t.type)},push:function(){var t=this;_.forEach(this.selectedFiles,(function(e){return t.add(e)}))},add:function(t){if(this.addLimit>0){var e=_.find(this.selection,["id",t]),i=_.find(this.files,["id",t]);!e&&this.isValidSelection(i)&&this.selection.push(i)}},open:function(){this.reset(),this.setCurrentDirectory(this.field.settings.root_directory||0),this.setRootDirectory(this.field.settings.root_directory||0),this.fetchFilesAndDirectories(),this.selection=b(this.model),this.requestOpen=!0},close:function(){this.reset(),this.selection=[],this.modalOpen=!1},reject:function(){this.close()},accept:function(){this.model=b(this.selection),this.close()},navigate:function(t){this.reset(),this.setCurrentDirectory(t.id),this.setRootDirectory(this.field.settings.root_directory||0),this.fetchFilesAndDirectories()}}),created:function(){_.isEmpty(this.value)&&(this.model=[])},beforeDestroy:function(){this.reset()}},j=Object(l.a)(O,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ui-field-group",{attrs:{name:t.field.handle,fieldId:t.field.handle+"-field",label:t.field.name,help:t.field.help,hasError:t.hasError(t.field.handle),errorMessage:t.errorMessage(t.field.handle)}},[i("ui-button",{attrs:{disabled:t.requestOpen},on:{click:t.open}},[i("fa-icon",{staticClass:"mr-1",attrs:{icon:["fas","tasks"]}}),t._v(" "),i("span",[t._v("Manage Asset Selection")])],1),t._v(" "),i("file-selection",{attrs:{limit:t.selectionLimit,hasHeader:!1},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),t._v(" "),i("ui-modal",{attrs:{name:"file-manager","no-header":"","no-footer":"","extra-large":""},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[i("file-uploader",{ref:"uploader"}),t._v(" "),i("div",{staticClass:"row",on:{dragenter:function(e){return t.setDropzoneVisible(!0)}}},[i("div",{staticClass:"side-container"},[i("file-selection",{attrs:{limit:t.selectionLimit},on:{reject:t.reject,accept:t.accept},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})],1),t._v(" "),i("div",{staticClass:"content-container"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card__body"},[i("div",{staticClass:"toolbar"},[i("div",{staticClass:"toolbar__group"},[i("ui-button",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.push(e)}}},[i("fa-icon",{staticClass:"icon",attrs:{icon:"arrow-alt-circle-left"}})],1)],1),t._v(" "),i("div",{staticClass:"toolbar__group"},[i("div",{staticClass:"buttons"},[i("div",{staticClass:"buttons__group"},[i("ui-button",{attrs:{icon:""},on:{click:function(e){return e.preventDefault(),t.$refs.uploader.openDZ()}}},[i("fa-icon",{staticClass:"icon",attrs:{icon:["fas","upload"]}})],1),t._v(" "),i("ui-button",{directives:[{name:"modal",rawName:"v-modal:new-folder",arg:"new-folder"}],attrs:{icon:""}},[i("fa-icon",{staticClass:"icon",attrs:{icon:["fas","folder-plus"]}})],1)],1)])]),t._v(" "),i("div",{staticClass:"toolbar__group toolbar__group--grow"},[i("search-action")],1),t._v(" "),i("div",{staticClass:"toolbar__group"},[i("display-action"),t._v(" "),i("sort-action"),t._v(" "),i("view-action")],1)])]),t._v(" "),i("div",{staticClass:"flex items-center border-b border-gray-200 px-3 py-2"},[i("ui-breadcrumbs",t._l(t.breadcrumbs,(function(e,r){return i("ui-breadcrumb",{key:e.name,attrs:{divider:r>0},on:{click:function(i){return t.navigate(e)}}},[t._v("\n                                    "+t._s(e.name)+"\n                                ")])})),1)],1),t._v(" "),i("div",{staticClass:"gallery-container selectables"},[i("div",{staticClass:"gallery border-b border-gray-200 pb-2"},t._l(t.directories,(function(e){return i("directory",{key:e.id,attrs:{directory:e,isDropzone:!0},on:{dblclick:function(i){return t.navigate(e)}}})})),1),t._v(" "),i("div",{staticClass:"gallery"},t._l(t.files,(function(e){return i("file",{key:e.id,attrs:{file:e},on:{dblclick:function(i){return t.add(e.id)}}})})),1)])])])])],1),t._v(" "),i("portal",{attrs:{to:"modals"}},[i("new-folder-modal")],1)],1)}),[],!1,null,null,null);e.default=j.exports},n7tU:function(t,e,i){"use strict";e.a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{hasError:function(t){return this.errors&&this.errors.has(t)},errorMessage:function(t){return this.hasError(t)?this.errors.get(t):""}}}}}]);