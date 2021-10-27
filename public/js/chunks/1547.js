(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[1547],{1547:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>r});var a=e(1513),i=e(6072);const s={auth:function(){return{permission:"links.viewAny"}},components:{VueNestable:a.VueNestable,VueNestableHandle:a.VueNestableHandle},head:{title:function(){return{inner:this.navigation.name||"Loading..."}}},data:function(){return{loaded:!1,navigation:{},links:[],saving:!1,changed:!1,form:new i.Z({name:"",url:"",new_window:0})}},computed:{options:function(){return this.links.map((function(t){return{label:t.name,value:t.id}}))},endpoint:function(){return this.navigation.id?"/datatable/navigations/"+this.navigation.id:null}},methods:{save:function(){var t=this;this.saving=!0,axios.post("/api/navigation/"+this.navigation.id+"/links/reorder",{links:this.links}).then((function(n){t.saving=!1,t.changed=!1,toast("Links successfully saved.","success")}))},changing:function(){this.loaded?this.changed=!0:this.loaded=!0},fetchLinks:function(){var t=this;return axios.get("/api/navigation/"+this.navigation.id).then((function(n){t.links=n.data.data.links}))},destroy:function(t){var n=this;axios.delete("/api/navigation/"+this.navigation.id+"/links/"+t).then((function(t){n.fetchLinks().then((function(){toast("Link successfully deleted.","success"),bus().$emit("refresh-datatable-entries")}))}))}},beforeRouteEnter:function(t,n,e){axios.get("/api/navigation/"+t.params.navigation).then((function(t){e((function(n){n.navigation=t.data.data,n.links=t.data.data.links,n.$emit("updateHead")}))}))},beforeRouteUpdate:function(t,n,e){var a=this;axios.get("/api/navigation/"+t.params.navigation).then((function(t){a.navigation=t.data.data,a.links=t.data.data.links,a.$emit("updateHead")})),e()}};const r=(0,e(1900).Z)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"link-page"},[e("portal",{attrs:{to:"title"}},[e("page-title",{attrs:{icon:"anchor"}},[t._v(t._s(t.navigation.name))])],1),t._v(" "),e("portal",{attrs:{to:"actions"}},[e("div",{staticClass:"buttons"},["sm"!=t.$mq?e("ui-button",{key:"go-back-btn",attrs:{to:{name:"navigation"},variant:"secondary"}},[t._v("Go Back")]):t._e(),t._v(" "),e("ui-button",{key:"create-btn",attrs:{to:{name:"links.create"},variant:"primary"}},[t._v("Create")]),t._v(" "),t.changed?e("ui-button",{key:"save-btn",attrs:{variant:"primary",disabled:t.saving},on:{click:function(n){return n.preventDefault(),t.save(n)}}},[t._v("Save")]):t._e()],1)]),t._v(" "),0==t.links.length?e("div",{staticClass:"card"},[t._m(0)]):e("ui-card",{directives:[{name:"show",rawName:"v-show",value:t.endpoint,expression:"endpoint"}]},[e("ui-card-body",[e("ui-table",{key:"entries-"+t.navigation.id,staticClass:"entries-table",attrs:{id:"entries","sort-by":"order",link_name:"links.edit",link_param:"link",show_status:!0,reorder_route:"/api/navigation/"+t.navigation.id+"/links/reorder",endpoint:t.endpoint,"per-page":50},scopedSlots:t._u([{key:"name",fn:function(n){return[e("div",{staticClass:"flex items-center"},[e("ui-status",{staticClass:"mr-2",attrs:{value:n.record.status}}),t._v(" "),e("router-link",{attrs:{to:{name:"links.edit",params:{navigation:t.navigation.id,link:n.record.id}}}},[t._v(t._s(n.record.name))])],1)]}},{key:"url",fn:function(n){return[e("code",[t._v(t._s(n.record.url))])]}},{key:"created_at",fn:function(t){return[e("ui-date",{attrs:{timestamp:t.record.created_at}})]}},{key:"updated_at",fn:function(t){return[e("ui-date",{attrs:{timestamp:t.record.updated_at}})]}},{key:"actions",fn:function(n){return[e("ui-actions",{key:"entry_"+n.record.id+"_actions",attrs:{id:"entry_"+n.record.id+"_actions"}},[e("ui-dropdown-link",{attrs:{to:{name:"links.edit",params:{navigation:t.navigation.id,link:n.record.id}}}},[t._v("Edit")]),t._v(" "),e("ui-dropdown-divider"),t._v(" "),e("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-link",value:n.record,expression:"table.record",arg:"delete-link"}],staticClass:"danger",on:{click:function(t){t.preventDefault()}}},[t._v("\n                            Delete\n                        ")])],1)]}}])})],1)],1),t._v(" "),e("portal",{attrs:{to:"modals"}},[e("ui-modal",{key:"delete_link",attrs:{name:"delete-link",title:"Delete Link"},scopedSlots:t._u([{key:"footer",fn:function(n){return[e("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-link",arg:"delete-link"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(e){return t.destroy(n.data.id)}}},[t._v("Delete")]),t._v(" "),e("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-link",arg:"delete-link"}]},[t._v("Cancel")])]}}])},[e("p",[t._v("Are you sure you want to permenantly delete this link?")])])],1)],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"card__body text-center"},[e("p",[t._v("Add your first link to get started.")])])}],!1,null,null,null).exports}}]);