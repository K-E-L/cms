(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[848],{848:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var a=s(7744);const i={auth:function(){return{permission:"fieldsets.viewAny"}},head:{title:function(){return{inner:"Fieldset"}}},data:function(){return{endpoint:"/datatable/fieldsets"}},methods:{destroy:function(e){axios.delete("/api/fieldsets/"+e).then((function(e){a.Z.dispatch("navigation/fetchAdminNavigation"),toast("Fieldset successfully deleted.","success"),bus().$emit("refresh-datatable-fieldsets")}))}}};const n=(0,s(1900).Z)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fieldset-page"},[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"layer-group"}},[e._v("Fieldset")])],1),e._v(" "),s("portal",{attrs:{to:"actions"}},[e.$can("fieldsets.create")?s("ui-button",{key:"create-fieldset-btn",attrs:{to:{name:"fieldsets.create"},variant:"primary"}},[e._v("\n            Create Fieldset\n        ")]):e._e()],1),e._v(" "),s("ui-card",[s("ui-card-body",[s("ui-table",{key:"fieldsets",staticClass:"fieldset-table",attrs:{id:"fieldsets",endpoint:e.endpoint,"sort-by":"name","primary-key":"handle","show-page-status":"","show-page-numbers":"","show-page-nav":"","show-page-ends":""},scopedSlots:e._u([{key:"name",fn:function(t){return[s("div",{staticClass:"flex items-center"},[s("ui-status",{staticClass:"mr-2",attrs:{value:t.record.status}}),e._v(" "),e.$can("fieldsets.update")?s("router-link",{attrs:{to:{name:"fieldsets.edit",params:{fieldset:t.record.id}}}},[e._v(e._s(t.record.name))]):s("span",[e._v(e._s(t.record.name))])],1)]}},{key:"handle",fn:function(t){return[e._v("\n                    "+e._s(t.record.handle)+"\n                ")]}},{key:"actions",fn:function(t){return[s("ui-actions",{key:"fieldset_"+t.record.id+"_actions",attrs:{id:"fieldset_"+t.record.id+"_actions"}},[e.$can("fieldsets.update")?s("ui-dropdown-link",{attrs:{to:{name:"fieldsets.edit",params:{fieldset:t.record.id}}}},[e._v("Edit")]):e._e(),e._v(" "),s("ui-dropdown-divider"),e._v(" "),e.$can("fieldsets.delete")?s("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-fieldset",value:t.record,expression:"table.record",arg:"delete-fieldset"}],staticClass:"danger",on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Delete\n                        ")]):e._e()],1)]}}])})],1)],1),e._v(" "),s("portal",{attrs:{to:"modals"}},[s("ui-modal",{key:"delete_fieldset",attrs:{name:"delete-fieldset",title:"Delete Fieldset"},scopedSlots:e._u([{key:"footer",fn:function(t){return[s("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-fieldset",arg:"delete-fieldset"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(s){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),s("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-fieldset",arg:"delete-fieldset"}],attrs:{variant:"secondary"}},[e._v("Cancel")])]}}])},[s("p",[e._v("Are you sure you want to permenantly delete this fieldset?")])])],1)],1)}),[],!1,null,null,null).exports}}]);