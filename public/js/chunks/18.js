(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"02bg":function(t,a,i){"use strict";(function(t){a.a={auth:function(){return{permission:"access.controlPanel"}},head:{title:function(){return{inner:"Dashboard"}}},data:function(){return{matrices:[],activities:[],feed:[],icon:""}},computed:{quicklinks:function(){if(this.matrices)return _.filter(this.matrices,(function(t){return 1==t.quicklink}))}},beforeRouteEnter:function(a,i,e){axios.all([axios.get("/api/matrices"),axios.get("/api/activity"),axios.get(t.env.MIX_NEWS_FEED||"https://beta.getfusioncms.com/blog.json",{withCredentials:!1}).catch((function(){return{data:{items:[]}}}))]).then(axios.spread((function(t,a,i){e((function(e){e.matrices=t.data.data,e.activities=a.data.data,e.feed=i.data.items}))})))}}}).call(this,i("8oxB"))},dM8m:function(t,a,i){"use strict";i.r(a);var e=i("02bg").a,s=i("KHd+"),n=Object(s.a)(e,(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"dashboard-page"},[i("portal",{attrs:{to:"title"}},[i("page-title",{attrs:{icon:"grip-horizontal"}},[t._v("Dashboard")])],1),t._v(" "),i("div",{staticClass:"row"},[t.quicklinks.length?i("div",{staticClass:"dashboard-page__column"},[i("quick-links",{attrs:{links:t.quicklinks}})],1):t._e(),t._v(" "),i("div",{staticClass:"dashboard-page__column"},[i("analytics-overview")],1),t._v(" "),i("div",{staticClass:"dashboard-page__column dashboard-page__column--two-thirds"},[i("recent-activity",{attrs:{activities:t.activities}})],1),t._v(" "),i("div",{staticClass:"dashboard-page__column dashboard-page__column--third"},[i("recent-news",{attrs:{feed:t.feed}})],1)])],1)}),[],!1,null,null,null);a.default=n.exports}}]);