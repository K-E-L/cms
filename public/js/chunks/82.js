(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[82],{82:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r,getEntry:()=>o});var l=s(6072);function o(e,t,s){axios.get("/api/collections/"+e+"/"+t).then((function(e){var t=e.data.data.matrix,l=e.data.data.entry,o={name:l.name,slug:l.slug,status:l.status,publish_at:l.publish_at,expire_at:l.expire_at};_.forEach(t.blueprint.sections,(function(e){_.forEach(e.fields,(function(e){o[e.handle]=l[e.handle]}))})),s(null,l,t,o)})).catch((function(e){s(new Error("The requested entry could not be found"))}))}const n={head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{collection:{},entry:{},form:null}},components:{"shared-form":s(8681).Z},methods:{submit:function(){var e=this;this.form.patch("/api/collections/"+this.collection.slug+"/"+this.entry.id).then((function(t){toast("Entry saved successfully","success"),e.$router.push("/collection/"+e.collection.slug)})).catch((function(e){toast(e.message,"failed")}))}},beforeRouteEnter:function(e,t,s){o(e.params.collection,e.params.id,(function(e,t,o,n){s(e?function(t){t.$router.push("/collection/"+t.$router.currentRoute.params.collection),toast(e.toString(),"danger")}:function(e){e.collection=o,e.entry=t,e.form=new l.Z(n,!0),e.$emit("updateHead")})}))},beforeRouteUpdate:function(e,t,s){var n=this;o(e.params.collection,e.params.id,(function(e,t,s,o){e?(n.$router.push("/collection/"+n.$router.currentRoute.params.collection),toast(e.toString(),"danger")):(n.collection=s,n.entry=t,n.form=new l.Z(o,!0),n.$emit("updateHead"))})),s()}};const r=(0,s(1900).Z)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"collection-page"},[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:e.collection.icon||"pencil-alt",subtitle:e.collection.description}},[e._v("Edit "+e._s(e.collection.reference_singular))])],1),e._v(" "),e.form?s("shared-form",{attrs:{form:e.form,entry:e.entry,collection:e.collection}}):e._e()],1)}),[],!1,null,null,null).exports},8681:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});s(4640);const l={props:{entry:{required:!1},collection:{required:!0},form:{type:Object,required:!0}},data:function(){return{editSlug:!1,slugValue:""}},computed:{sections:function(){return{body:_.filter(this.collection.blueprint.sections,(function(e){return"body"==e.placement})),sidebar:_.filter(this.collection.blueprint.sections,(function(e){return"sidebar"==e.placement}))}}},methods:{openEdit:function(){this.slugValue=this.form.slug,this.editSlug=!0,this.slugFocus()},closeEdit:function(){this.slugValue="",this.editSlug=!1,this.editBtnFocus()},saveSlug:function(){""===this.slugValue?this.slugValue=this.form.slug:this.form.slug=this.slugValue,this.closeEdit()},slugFocus:function(){var e=this;this.$nextTick((function(){e.$refs.slug.$el.focus()}))},editBtnFocus:function(){var e=this;this.$nextTick((function(){e.$refs.edit.$el.focus()}))}}};const o=(0,s(1900).Z)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},[e.collection.slug&&"sm"!=e.$mq?s("ui-button",{attrs:{to:{name:"collection.index",params:{collection:e.collection.slug}},variant:"secondary"}},[e._v("Go Back")]):e._e(),e._v(" "),s("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),s("portal",{attrs:{to:"sidebar-right"}},[e.collection?s("sidebar",{attrs:{id:"collection-sidebar"}},[s("sidebar-section",{attrs:{id:"collection_panel_status",tabindex:"-1"}},[s("ui-toggle",{attrs:{name:"status",label:"Status",help:e.form.status?"Toggle to disable this entry.":"Toggle to enable this entry.","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}}),e._v(" "),s("ui-flatpickr-group",{attrs:{name:"publish_at",id:"publish_at",label:"Publish Date","with-time":!0,"has-error":e.form.errors.has("publish_at"),"error-message":e.form.errors.get("publish_at")},model:{value:e.form.publish_at,callback:function(t){e.$set(e.form,"publish_at",t)},expression:"form.publish_at"}}),e._v(" "),s("ui-flatpickr-group",{attrs:{name:"expire_at",id:"expire_at",label:"Expiry Date","with-time":!0,"has-error":e.form.errors.has("expire_at"),"error-message":e.form.errors.get("expire_at")},model:{value:e.form.expire_at,callback:function(t){e.$set(e.form,"expire_at",t)},expression:"form.expire_at"}})],1),e._v(" "),e._l(e.sections.sidebar,(function(t){return s("sidebar-section",{key:t.handle,attrs:{id:"collection_panel_"+t.handle,title:t.name,description:t.description,tabindex:"-1"}},e._l(t.fields,(function(t){return s(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t,"has-error":e.form.errors.has(t.handle),"error-message":e.form.errors.get(t.handle)},model:{value:e.form[t.handle],callback:function(s){e.$set(e.form,t.handle,s)},expression:"form[field.handle]"}})})),1)})),e._v(" "),e.entry?s("status-card",{attrs:{id:"collection_panel_status_card",entry:e.entry,tabindex:"-1"}}):e._e()],2):e._e()],1),e._v(" "),e.collection.show_name_field?s("ui-card",{attrs:{id:"collection_panel_"+e.collection.handle,tabindex:"-1"}},[s("ui-card-body",[e.collection.show_name_field?s("ui-title-group",{staticClass:"mb-0",attrs:{name:"name",label:e.collection.name_label||"Name",autocomplete:"off",autofocus:"",required:"",readonly:e.editSlug,placeholder:e.collection.name_label||"Name","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}):e._e(),e._v(" "),e.form.slug?s("div",{staticClass:"entry-slug"},[e.editSlug?e._e():s("div",{staticClass:"entry-slug__current"},[s("span",{staticClass:"entry-slug__label"},[e._v("Slug:")]),e._v(" "),s("span",{staticClass:"entry-slug__value"},[e._v(e._s(e.form.slug))]),e._v(" "),s("ui-button",{ref:"edit",staticClass:"entry-slug__action",attrs:{size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.openEdit()}}},[e._v("Edit")])],1),e._v(" "),e.editSlug?s("div",{staticClass:"entry-slug__edit"},[e.editSlug?s("label",{staticClass:"entry-slug__label",attrs:{for:"edit-slug"}},[e._v("Slug:")]):e._e(),e._v(" "),s("ui-slug",{ref:"slug",staticClass:"field--xs",attrs:{id:"edit-slug",name:"edit_slug",monospaced:"",autocomplete:"off"},model:{value:e.slugValue,callback:function(t){e.slugValue=t},expression:"slugValue"}}),e._v(" "),s("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"primary",size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.saveSlug()}}},[e._v("Apply")]),e._v(" "),s("ui-button",{staticClass:"entry-slug__action",attrs:{variant:"secondary",size:"xsmall"},on:{click:function(t){return t.preventDefault(),e.closeEdit()}}},[e._v("Cancel")])],1):e._e()]):e._e(),e._v(" "),e.collection.show_name_field||e.entry.id?s("ui-slug",{attrs:{type:"hidden",name:"slug",label:"Slug",monospaced:"",autocomplete:"off",required:"",help:e.collection.show_name_field?"":"This field is auto-generated based on pattern specified.",watch:e.form.name,readonly:!e.collection.show_name_field,"has-error":e.form.errors.has("slug"),"error-message":e.form.errors.get("slug")},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}}):e._e()],1)],1):e._e(),e._v(" "),e._l(e.sections.body,(function(t){return s("section-card",{key:t.handle,attrs:{id:"collection_panel_"+t.handle,title:t.name,description:t.description,tabindex:"-1"}},e._l(t.fields,(function(t){return s(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t,errors:e.form.errors},model:{value:e.form[t.handle],callback:function(s){e.$set(e.form,t.handle,s)},expression:"form[field.handle]"}})})),1)}))],2)}),[],!1,null,null,null).exports}}]);