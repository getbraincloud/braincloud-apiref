"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[70376],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(r),v=n,m=u["".concat(p,".").concat(v)]||u[v]||d[v]||i;return r?a.createElement(m,s(s({ref:t},l),{},{components:r})):a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},83687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},s="Player Statistics Event",o={unversionedId:"api/capi/playerstatsevent/index",id:"api/capi/playerstatsevent/index",title:"Player Statistics Event",description:"Overview",source:"@site/docs/api/2_capi/playerstatsevent/index.md",sourceDirName:"api/2_capi/playerstatsevent",slug:"/api/capi/playerstatsevent/",permalink:"/braincloud-apiref/api/capi/playerstatsevent/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/playerstatsevent/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SetExperiencePoints",permalink:"/braincloud-apiref/api/capi/playerstats/setexperiencepoints"},next:{title:"TriggerStatsEvent",permalink:"/braincloud-apiref/api/capi/playerstatsevent/triggerstatsevent"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"API Summary",id:"api-summary",level:3},{value:"PlayerStatisticsEvent",id:"playerstatisticsevent",level:3}],l=(u="DocCardList",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const d={toc:c};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"player-statistics-event"},"Player Statistics Event"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Stats Events are essentially Stats Macros.  The macro is defined on the server from the\n",(0,n.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/gamification-statsevents"},"Statistics Events page")," of the brainCloud portal, and triggered by ID from the client."),(0,n.kt)("h3",{id:"api-summary"},"API Summary"),(0,n.kt)("h3",{id:"playerstatisticsevent"},"PlayerStatisticsEvent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/playerstatsevent/triggerstatsevent"},"TriggerStatsEvent")," - Trigger an event server side that will increase the user statistics."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/playerstatsevent/triggerstatsevents"},"TriggerStatsEvents")," - See documentation for TriggerUserStatsEvents for more documentation.")),(0,n.kt)(l,{mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);