(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[7638],{7638:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});const s={auth:function(){return{permission:"users.viewAny"}},head:{title:function(){return{inner:"Users"}}},data:function(){return{roles:[],role:this.$route.params.role||null}},computed:{filteredRoles:function(){return _.filter(this.roles,(function(e){return"Guest"!==e.name&&1!==e.id}))},endpoint:function(){return this.role?"/datatable/users/"+this.role:"/datatable/users"},current:function(){var e=this,r=_.findIndex(this.roles,(function(r){return r.name==e.role}));return-1!=r?this.roles[r]:{name:"all",label:"All"}}},watch:{$route:function(e,r){this.role=e.params.role||null}},beforeRouteEnter:function(e,r,t){axios.get("/api/roles").then((function(e){t((function(r){return r.roles=e.data.data}))})).catch((function(e){t((function(e){return console.log(error)}))}))},methods:{destroy:function(e){axios.delete("/api/users/".concat(e)).then((function(e){toast("User successfully deleted.","success"),bus().$emit("refresh-datatable-users")})).catch((function(e){toast(e.response.data.message,"failed")}))},emailVerification:function(e){axios.post("/api/users/".concat(e,"/verify")).then((function(e){toast("Email verification notification has been sent to user.","success")})).catch((function(e){toast(e.response.data.message,"failed")}))},passwordReset:function(e){axios.post("/api/users/".concat(e,"/reset-password")).then((function(e){toast("Password reset notification has been sent to user.","success")})).catch((function(e){toast(e.response.data.message,"failed")}))},passwordExpire:function(e){axios.post("/api/users/".concat(e,"/expire-password")).then((function(e){toast("User password has been set as expired.","success")})).catch((function(e){toast(e.response.data.message,"failed")}))}}};const a=(0,t(1900).Z)(s,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"user-page"},[t("portal",{attrs:{to:"title"}},[t("page-title",{attrs:{icon:"users"}},[e._v("Users - "+e._s(e.current?e.current.name:""))])],1),e._v(" "),t("portal",{attrs:{to:"actions"}},[e.$can("users.create")?t("ui-button",{key:"create-user-btn",attrs:{to:{name:"users.create"},variant:"primary"}},[e._v("Create User")]):e._e()],1),e._v(" "),t("ui-card",[t("ui-card-body",[t("ui-table",{key:"users",staticClass:"user-table",attrs:{id:"users","sort-by":"order","show-page-status":"","show-page-numbers":"",bulk:"","show-page-nav":"","show-page-ends":"",link_name:"users.edit",link_param:"user",reorder_route:"/api/users/reorder",show_status:!0,endpoint:e.endpoint},scopedSlots:e._u([{key:"toolbarPrepend",fn:function(){return[t("ui-toolbar-group",[t("ui-dropdown",{attrs:{id:"user-roles"},scopedSlots:e._u([{key:"menu",fn:function(){return[t("ui-dropdown-link",{attrs:{to:{name:"users"},exact:""}},[e._v("All")]),e._v(" "),t("ui-dropdown-divider"),e._v(" "),e._l(e.filteredRoles,(function(r){return t("ui-dropdown-link",{key:r.name,attrs:{to:{name:"users.role",params:{role:r.name}},exact:""}},[e._v("\n                                    "+e._s(r.name)+"\n                                ")])}))]},proxy:!0}])},[t("span",[e._v("Roles")])])],1)]},proxy:!0},{key:"name",fn:function(r){return[t("div",{staticClass:"flex items-center"},[t("ui-status",{staticClass:"mr-2",attrs:{value:r.record.status}}),e._v(" "),e.$can("users.view")?t("router-link",{attrs:{to:{name:"users.show",params:{user:r.record.id}}}},[e._v(e._s(r.record.name))]):t("span",[e._v(e._s(r.record.name))])],1)]}},{key:"email",fn:function(r){return[e._v("\n                    "+e._s(r.record.email)+"\n                ")]}},{key:"role",fn:function(r){return[e.$can("roles.view")?t("router-link",{attrs:{to:{name:"roles.show",params:{role:r.record.role.id}}}},[e._v(e._s(r.record.role.name))]):t("span",[e._v(e._s(r.record.role.name))])]}},{key:"created_at",fn:function(e){return[t("ui-date",{attrs:{timestamp:e.record.created_at}})]}},{key:"email_verified_at",fn:function(r){return[r.record.email_verified_at?t("ui-badge",{attrs:{variant:"success"}},[e._v("Yes")]):t("ui-badge",{attrs:{variant:"danger"}},[e._v("No")])]}},{key:"actions",fn:function(r){return[t("ui-actions",{key:"user_"+r.record.id+"_actions",attrs:{id:"user_"+r.record.id+"_actions"}},[e.$can("users.view")?t("ui-dropdown-link",{attrs:{to:{name:"users.show",params:{user:r.record.id}}}},[e._v("View")]):e._e(),e._v(" "),e.$can("users.update",r.record.role.level)?t("ui-dropdown-link",{attrs:{to:{name:"users.edit",params:{user:r.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]):e._e(),e._v(" "),e.$can("users.update",r.record.role.level)?t("ui-dropdown-divider"):e._e(),e._v(" "),e.$can("users.update",r.record.role.level)?t("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:verify-user",value:r.record,expression:"table.record",arg:"verify-user"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Resend Verification\n                        ")]):e._e(),e._v(" "),e.$can("users.update",r.record.role.level)?t("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:password-user",value:r.record,expression:"table.record",arg:"password-user"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Reset Password\n                        ")]):e._e(),e._v(" "),t("ui-dropdown-divider"),e._v(" "),r.record.id!=e.$user.id&&e.$can("users.delete",r.record.role.level)?t("ui-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-user",value:r.record,expression:"table.record",arg:"delete-user"}],staticClass:"danger",on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Delete\n                        ")]):e._e()],1)]}}])})],1)],1),e._v(" "),t("portal",{attrs:{to:"modals"}},[t("ui-modal",{attrs:{name:"verify-user",title:"Verification Email"},scopedSlots:e._u([{key:"footer",fn:function(r){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:verify-user",arg:"verify-user"}],staticClass:"ml-3",attrs:{variant:"primary"},on:{click:function(t){return e.emailVerification(r.data.id)}}},[e._v("Confirm")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:verify-user",arg:"verify-user"}],attrs:{variant:"secondary"}},[e._v("Cancel")])]}}])},[t("p",[e._v("Are you sure you want to re-send the verification email to this user?")])]),e._v(" "),t("ui-modal",{attrs:{name:"password-user",title:"Password Reset"},scopedSlots:e._u([{key:"footer",fn:function(r){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:password-user",arg:"password-user"}],staticClass:"ml-3",attrs:{variant:"primary"},on:{click:function(t){return e.passwordReset(r.data.id)}}},[e._v("Confirm")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:password-user",arg:"password-user"}],attrs:{variant:"secondary"}},[e._v("Cancel")])]}}])},[t("p",[e._v("Are you sure you want to send this user a password reset notification?")])]),e._v(" "),t("ui-modal",{attrs:{name:"expire-password",title:"Expire Password"},scopedSlots:e._u([{key:"footer",fn:function(r){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:expire-password",arg:"expire-password"}],staticClass:"ml-3",attrs:{variant:"primary"},on:{click:function(t){return e.passwordExpire(r.data.id)}}},[e._v("Confirm")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:expire-password",arg:"expire-password"}],attrs:{variant:"secondary"}},[e._v("Cancel")])]}}])},[t("p",[e._v("Are you sure you want to force user to reset their password upon next login?")])]),e._v(" "),t("ui-modal",{attrs:{name:"delete-user",title:"Delete User"},scopedSlots:e._u([{key:"footer",fn:function(r){return[t("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-user",arg:"delete-user"}],staticClass:"ml-3",attrs:{variant:"danger"},on:{click:function(t){return e.destroy(r.data.id)}}},[e._v("Delete")]),e._v(" "),t("ui-button",{directives:[{name:"modal",rawName:"v-modal:delete-user",arg:"delete-user"}],attrs:{variant:"secondary"}},[e._v("Cancel")])]}}])},[t("p",[e._v("Are you sure you want to permenantly delete this user?")])])],1)],1)}),[],!1,null,null,null).exports}}]);