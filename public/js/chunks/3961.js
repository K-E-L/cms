(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[3961],{79:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});const a={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},3961:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});const a={name:"address-fieldtype",mixins:[t(79).Z],data:function(){return{map:null,marker:null,mapError:"",help:'<p>A <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> is required in order to view the map component and retrieve latitude and longitude coordinates for your address.</p><p>Once you have obtained one, please visit the <router-link to="/settings/google_maps">Google Maps settings page</router-link> to enter your API key.</p>'}},computed:{apiKey:function(){return this.setting("maps_api_key")},hasAPIKey:function(){return this.apiKey&&""!=this.apiKey},hasGMaps:function(){return!_.isUndefined(window.google)},mapID:function(){return this.field.handle+"_map"}},watch:{model:{deep:!0,handler:function(e){this.locateAddress()}},apiKey:function(e){var r=this;this.$nextTick((function(){r.initializeMap()}))}},methods:{initializeMap:function(){var e=this;if(_.isUndefined(window.google)){var r=document.createElement("script");window.mapInit=function(){return e.createMap()},r.setAttribute("src","https://maps.googleapis.com/maps/api/js?key=".concat(this.apiKey,"&callback=mapInit")),document.head.appendChild(r)}else this.createMap()},createMap:function(){this.map=new google.maps.Map(document.getElementById(this.mapID)),this.locateAddress()},locateAddress:_.debounce((function(){var e=this;if(!_.isUndefined(window.google)){google.maps.event.trigger(this.map,"resize");var r=new google.maps.Geocoder,t=_.trim(Object.values(this.model).join(" "));if(!t)return null!==this.marker&&this.marker.setMap(null),this.map.setCenter(new google.maps.LatLng(0,0)),this.map.setZoom(1),this.model.formatted_address="",this.model.lat="",void(this.model.lng="");r.geocode({address:t},(function(r,a){a===google.maps.GeocoderStatus.OK&&(e.map.setCenter(r[0].geometry.location),e.map.setZoom(16),e.model.formatted_address=r[0].formatted_address,e.model.lat=r[0].geometry.location.lat(),e.model.lng=r[0].geometry.location.lng(),t&&(null!==e.marker&&e.marker.setMap(null),e.marker=new google.maps.Marker({map:e.map,position:r[0].geometry.location})))}))}}),1500)},created:function(){_.isEmpty(this.value)&&(this.model={address1:"",address2:"",city:"",state:"",zip:"",country:"",lat:"",lng:"",formatted_address:""})}};const s=(0,t(1900).Z)(a,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ui-field-group",{attrs:{name:e.field.handle,fieldId:e.field.handle+"-field",label:e.field.name,help:e.field.help}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col md:w-1/2"},[t("ui-input-group",{attrs:{name:e.field.handle+"_address1",required:e.field.required,label:"Address 1",placeholder:"Address 1","hide-label":"",hasError:e.hasError(e.field.handle+".address1"),errorMessage:e.errorMessage(e.field.handle+".address1")},model:{value:e.model.address1,callback:function(r){e.$set(e.model,"address1",r)},expression:"model.address1"}})],1),e._v(" "),t("div",{staticClass:"col md:w-1/2"},[t("ui-input-group",{attrs:{label:"Address 2","hide-label":"",name:e.field.handle+"_address2",placeholder:"Address 2",hasError:e.hasError(e.field.handle+".address2"),errorMessage:e.errorMessage(e.field.handle+".address2")},model:{value:e.model.address2,callback:function(r){e.$set(e.model,"address2",r)},expression:"model.address2"}})],1),e._v(" "),t("div",{staticClass:"col md:w-1/3"},[t("ui-input-group",{attrs:{name:e.field.handle+"_city",required:e.field.required,label:"City",placeholder:"City","hide-label":"",hasError:e.hasError(e.field.handle+".city"),errorMessage:e.errorMessage(e.field.handle+".city")},model:{value:e.model.city,callback:function(r){e.$set(e.model,"city",r)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col md:w-1/3"},[t("ui-input-group",{attrs:{name:e.field.handle+"_state",required:e.field.required,label:"State",placeholder:"State","hide-label":"",hasError:e.hasError(e.field.handle+".state"),errorMessage:e.errorMessage(e.field.handle+".state")},model:{value:e.model.state,callback:function(r){e.$set(e.model,"state",r)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col md:w-1/3"},[t("ui-input-group",{attrs:{name:e.field.handle+"_zip",required:e.field.required,label:"Zip Code",placeholder:"Zip Code","hide-label":"",hasError:e.hasError(e.field.handle+".zip"),errorMessage:e.errorMessage(e.field.handle+".zip")},model:{value:e.model.zip,callback:function(r){e.$set(e.model,"zip",r)},expression:"model.zip"}})],1),e._v(" "),t("div",{staticClass:"col w-full"},[t("ui-input-group",{attrs:{label:"Country","hide-label":"",name:e.field.handle+"_country",placeholder:"Country",hasError:e.hasError(e.field.handle+".country"),errorMessage:e.errorMessage(e.field.handle+".country")},model:{value:e.model.country,callback:function(r){e.$set(e.model,"country",r)},expression:"model.country"}})],1)]),e._v(" "),t("div",{staticClass:"h-full rounded",attrs:{id:e.mapID}},[e.mapError?t("div",{staticClass:"bg-gray-100 rounded shadow p-3",domProps:{innerHTML:e._s(e.mapError)}}):e._e()]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:0==e.hasAPIKey,expression:"hasAPIKey == false"}],staticClass:"help"},[t("p",[e._v("A "),t("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/get-api-key",target:"_blank"}},[e._v("Google Maps API key")]),e._v(" is required in order to view the map component and retrieve latitude and longitude coordinates for your address. \n            Once you've obtained one, please visit the "),t("router-link",{attrs:{to:"/settings/google_maps"}},[e._v("Google Maps settings page")]),e._v(" to enter your API key.")],1)])])}),[],!1,null,null,null).exports}}]);