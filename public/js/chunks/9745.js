(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[9745],{9745:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(6072);const i={auth:function(){return{permission:"navigation.create"}},head:{title:function(){return{inner:"Create Navigation"}}},data:function(){return{form:new n.Z({name:"",handle:"",description:"",sections:[]},!0),loading:!1}},components:{"shared-form":a(8567).Z},methods:{submit:function(){var e=this;this.loading=!0,this.form.post("/api/navigation").then((function(t){axios.post("/api/blueprints/".concat(t.data.blueprint.id,"/sections"),{sections:e.form.sections}).then((function(t){toast("Navigation successfully saved","success"),e.$router.push("/navigation"),e.loading=!1})).catch((function(t){toast(t.message,"failed"),e.loading=!1}))})).catch((function(t){toast(t.message,"failed"),e.loading=!1}))}}};const o=(0,a(1900).Z)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navigation-page"},[a("portal",{attrs:{to:"title"}},[a("page-title",{attrs:{icon:"anchor"}},[e._v("Create Navigation")])],1),e._v(" "),a("shared-form",{attrs:{loading:e.loading,form:e.form}})],1)}),[],!1,null,null,null).exports},8567:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});const n={data:function(){return{placements:[{label:"Body",value:"body"},{label:"Sidebar",value:"sidebar"}]}},props:{resource:{type:Object,required:!1,default:function(){}},form:{type:Object,required:!0},loading:{type:Boolean,required:!1}},methods:{handleSave:function(){this.$parent.submit()}},created:function(){this.$store.commit("fieldtypes/setStructure","navigation")}};const i=(0,a(1900).Z)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"actions"}},[a("div",{staticClass:"buttons"},[a("ui-button",{attrs:{to:{name:"navigation"},variant:"secondary"}},[e._v("Go Back")]),e._v(" "),a("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges||e.loading},on:{click:function(t){return t.preventDefault(),e.handleSave(t)}}},[e._v("Save")])],1)]),e._v(" "),a("section-card",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{title:"Loading..."}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"! loading"}]},[a("section-card",{attrs:{id:"navigation_panel_general",title:"General Information",description:"General information about your navigation menu and what it manages.",tabindex:"-1"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full lg:w-1/2"},[a("ui-input-group",{attrs:{id:"navigation-name",name:"name",label:"Name",help:"What should this navigation menu be called?",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"col w-full lg:w-1/2"},[a("ui-slug-group",{attrs:{id:"navigation-handle",name:"handle",label:"Handle",help:"A developer-friendly identifier.",monospaced:"",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}})],1)]),e._v(" "),a("ui-textarea-group",{attrs:{id:"navigation-description",name:"description",label:"Description",help:"Give a short description of what this navigation menu will manage and store.",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),a("section-card",{attrs:{title:"Blueprint",description:"Configure this navigation's blueprint."}},[a("blueprint",[a("blueprint-area",{attrs:{placements:e.placements,area:"body",title:"Body"},model:{value:e.form.sections,callback:function(t){e.$set(e.form,"sections",t)},expression:"form.sections"}}),e._v(" "),a("blueprint-area",{staticClass:"blueprint__col--sidebar",attrs:{placements:e.placements,area:"sidebar",title:"Sidebar"},model:{value:e.form.sections,callback:function(t){e.$set(e.form,"sections",t)},expression:"form.sections"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);