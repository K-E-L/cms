(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[3556],{3556:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n,getEntry:()=>l});var o=s(6072);function l(e,t,s){axios.get("/api/collections/"+e+"/"+t).then((function(e){var t=e.data.data.matrix,o=e.data.data.entry,l={name:o.name,slug:o.slug,status:o.status,publish_at:o.publish_at,expire_at:o.expire_at};_.forEach(t.blueprint.sections,(function(e){_.forEach(e.fields,(function(e){l[e.handle]=o[e.handle]}))})),s(null,o,t,l)})).catch((function(e){s(new Error("The requested entry could not be found"))}))}const a={head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{collection:{},entry:{},form:null,loading:!1}},components:{"shared-form":s(1613).Z},methods:{submit:function(){var e=this;this.loading=!0,this.form.patch("/api/collections/"+this.collection.slug+"/"+this.entry.id).then((function(t){toast("Entry saved successfully","success"),e.$router.push("/collection/"+e.collection.slug)})).catch((function(t){toast(t.message,"failed"),e.loading=!1}))}},beforeRouteEnter:function(e,t,s){l(e.params.collection,e.params.id,(function(e,t,l,a){s(e?function(t){t.$router.push("/collection/"+t.$router.currentRoute.params.collection),toast(e.toString(),"danger")}:function(e){e.collection=l,e.entry=t,e.form=new o.Z(a,!0),e.$emit("updateHead")})}))},beforeRouteUpdate:function(e,t,s){var a=this;l(e.params.collection,e.params.id,(function(e,t,s,l){e?(a.$router.push("/collection/"+a.$router.currentRoute.params.collection),toast(e.toString(),"danger")):(a.collection=s,a.entry=t,a.form=new o.Z(l,!0),a.$emit("updateHead"))})),s()}};const n=(0,s(1900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"collection-page"},[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:e.collection.icon||"pencil-alt",subtitle:e.collection.description}},[e._v("Edit "+e._s(e.collection.name))])],1),e._v(" "),e.form?s("shared-form",{attrs:{loading:e.loading,form:e.form,entry:e.entry,collection:e.collection}}):e._e()],1)}),[],!1,null,null,null).exports},1613:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});s(3163);const o={props:{entry:{required:!1},collection:{required:!0},form:{type:Object,required:!0},loading:{type:Boolean,required:!1}},data:function(){return{editSlug:!1,slugValue:""}},computed:{sections:function(){return{body:_.filter(this.collection.blueprint.sections,(function(e){return"body"==e.placement})),sidebar:_.filter(this.collection.blueprint.sections,(function(e){return"sidebar"==e.placement}))}}},methods:{openEdit:function(){this.slugValue=this.form.slug,this.editSlug=!0,this.slugFocus()},closeEdit:function(){this.slugValue="",this.editSlug=!1,this.editBtnFocus()},saveSlug:function(){""===this.slugValue?this.slugValue=this.form.slug:this.form.slug=this.slugValue,this.closeEdit()},slugFocus:function(){var e=this;this.$nextTick((function(){e.$refs.slug.$el.focus()}))},editBtnFocus:function(){var e=this;this.$nextTick((function(){e.$refs.edit.$el.focus()}))}}};const l=(0,s(1900).Z)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},[e.collection.slug&&"sm"!=e.$mq?s("ui-button",{attrs:{to:{name:"collection.index",params:{collection:e.collection.slug}},variant:"secondary"}},[e._v("Go Back")]):e._e(),e._v(" "),s("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges||e.loading},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),s("section-card",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{title:"Loading..."}}),e._v(" "),s("portal",{attrs:{to:"sidebar-right"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"! loading"}]},[e.collection?s("sidebar",{attrs:{id:"collection-sidebar"}},[s("sidebar-section",{attrs:{id:"collection_panel_status",tabindex:"-1"}},[s("ui-toggle",{attrs:{name:"status",label:"Status",help:e.form.status?"Toggle to disable this entry.":"Toggle to enable this entry.","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}}),e._v(" "),s("ui-flatpickr-group",{attrs:{name:"publish_at",id:"publish_at",label:"Publish Date","with-time":!0,"has-error":e.form.errors.has("publish_at"),"error-message":e.form.errors.get("publish_at")},model:{value:e.form.publish_at,callback:function(t){e.$set(e.form,"publish_at",t)},expression:"form.publish_at"}}),e._v(" "),s("ui-flatpickr-group",{attrs:{name:"expire_at",id:"expire_at",label:"Expiry Date","with-time":!0,"has-error":e.form.errors.has("expire_at"),"error-message":e.form.errors.get("expire_at")},model:{value:e.form.expire_at,callback:function(t){e.$set(e.form,"expire_at",t)},expression:"form.expire_at"}})],1),e._v(" "),e._l(e.sections.sidebar,(function(t){return t.fields.length>0?s("sidebar-section",{key:t.handle,attrs:{id:"collection_panel_"+t.handle,title:t.name,description:t.description,tabindex:"-1"}},e._l(t.fields,(function(t){return s(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t,"has-error":e.form.errors.has(t.handle),"error-message":e.form.errors.get(t.handle)},model:{value:e.form[t.handle],callback:function(s){e.$set(e.form,t.handle,s)},expression:"form[field.handle]"}})})),1):e._e()})),e._v(" "),e.entry?s("status-card",{attrs:{id:"collection_panel_status_card",entry:e.entry,tabindex:"-1"}}):e._e()],2):e._e()],1)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"! loading"}]},[e.collection.show_name_field?s("ui-card",{attrs:{id:"collection_panel_"+e.collection.handle,tabindex:"-1"}},[s("ui-card-body",[e.collection.show_name_field?s("ui-title-group",{staticClass:"mb-0",attrs:{name:"name",label:e.collection.name_label||"Name",autocomplete:"off",autofocus:"",required:"",readonly:e.editSlug,placeholder:e.collection.name_label||"Name","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}):e._e(),e._v(" "),e.form.slug?s("div",{staticClass:"entry-slug"},[e.editSlug?e._e():s("div",{staticClass:"entry-slug__current"},[s("span",{staticClass:"entry-slug__label"},[e._v("Slug:")]),e._v(" "),s("span",{staticClass:"entry-slug__value"},[e._v(e._s(e.form.slug))]),e._v(" "),s("ui-button",{ref:"edit",staticClass:"entry-slug__action",attrs:{size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.openEdit()}}},[e._v("Edit")])],1),e._v(" "),e.editSlug?s("div",{staticClass:"entry-slug__edit"},[e.editSlug?s("label",{staticClass:"entry-slug__label",attrs:{for:"edit-slug"}},[e._v("Slug:")]):e._e(),e._v(" "),s("ui-slug",{ref:"slug",staticClass:"field--xs",attrs:{id:"edit-slug",name:"edit_slug",monospaced:"",autocomplete:"off"},model:{value:e.slugValue,callback:function(t){e.slugValue=t},expression:"slugValue"}}),e._v(" "),s("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"primary",size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.saveSlug()}}},[e._v("Apply")]),e._v(" "),s("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"secondary",size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.closeEdit()}}},[e._v("Cancel")])],1):e._e()]):e._e(),e._v(" "),e.collection.show_name_field||e.entry.id?s("ui-slug",{attrs:{type:"hidden",name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",help:e.collection.show_name_field?"":"This field is auto-generated based on pattern specified.",watch:e.form.name,readonly:!e.collection.show_name_field,"has-error":e.form.errors.has("slug"),"error-message":e.form.errors.get("slug")},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}}):e._e()],1)],1):e._e(),e._v(" "),e._l(e.sections.body,(function(t){return t.fields.length>0?s("section-card",{key:t.handle,attrs:{id:"collection_panel_"+t.handle,title:t.name,description:t.description,tabindex:"-1"}},e._l(t.fields,(function(t){return s(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t,errors:e.form.errors},model:{value:e.form[t.handle],callback:function(s){e.$set(e.form,t.handle,s)},expression:"form[field.handle]"}})})),1):e._e()}))],2)],1)}),[],!1,null,null,null).exports}}]);