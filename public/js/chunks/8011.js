(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[8011],{2569:(s,t,e)=>{"use strict";e.d(t,{Z:()=>i});const i={props:{value:{type:Object,required:!0}},computed:{settings:{get:function(){return this.value.settings||{}},set:function(s){this.$set(this.value.settings,s)}},errors:function(){return this.value.errors||{}}}}},8011:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>n});const i={name:"table-fieldtype-settings",mixins:[e(2569).Z]};const n=(0,e(1900).Z)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"row"},[e("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.initRows",label:"Rows",help:"Starting rows in a new table.",autocomplete:"off",min:1,"has-error":s.errors.has("settings.initRows"),"error-message":s.errors.get("settings.initRows")},model:{value:s.settings.initRows||1,callback:function(t){s.$set(s.settings,"initRows || 1",t)},expression:"settings.initRows || 1"}}),s._v(" "),e("ui-number-group",{staticClass:"col w-full sm:w-1/2",attrs:{name:"settings.initcols",label:"Columns",help:"Starting columns in a new table.",autocomplete:"off",min:1,"has-error":s.errors.has("settings.initCols"),"error-message":s.errors.get("settings.initCols")},model:{value:s.settings.initCols||1,callback:function(t){s.$set(s.settings,"initCols || 1",t)},expression:"settings.initCols || 1"}})],1)}),[],!1,null,null,null).exports}}]);