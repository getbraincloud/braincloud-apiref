"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[54111],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,y=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?i.createElement(y,l(l({ref:t},d),{},{components:a})):i.createElement(y,l({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=a(87462),n=(a(67294),a(3905));const r={},l="Entity",o={unversionedId:"api/capi/entity/index",id:"api/capi/entity/index",title:"Entity",description:"Overview",source:"@site/docs/api/2_capi/entity/index.md",sourceDirName:"api/2_capi/entity",slug:"/api/capi/entity/",permalink:"/braincloud-apiref/api/capi/entity/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/entity/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SubmitCrashReport",permalink:"/braincloud-apiref/api/capi/datastream/submitcrashreport"},next:{title:"CreateEntity",permalink:"/braincloud-apiref/api/capi/entity/createentity"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"API Summary",id:"api-summary",level:3},{value:"Core Access:",id:"core-access",level:3},{value:"Singleton",id:"singleton",level:3},{value:"Shared Data",id:"shared-data",level:3}],d=(c="DocCardList",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const u={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"entity"},"Entity"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"brainCloud ",(0,n.kt)("strong",{parentName:"p"},"User Entities")," (also called ",(0,n.kt)("strong",{parentName:"p"},"Player Entities"),") are full json\nobjects (similar to Global Entities) except that are private to a brainCloud user. User entities can be as simple or complex as you would like. All User Entities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"have a unique ",(0,n.kt)("inlineCode",{parentName:"li"},"entityId"),", generated by brainCloud"),(0,n.kt)("li",{parentName:"ul"},"have a developer-defined ",(0,n.kt)("inlineCode",{parentName:"li"},"entityType")," (string)"),(0,n.kt)("li",{parentName:"ul"},"have a ",(0,n.kt)("inlineCode",{parentName:"li"},"version")," to help control updates"),(0,n.kt)("li",{parentName:"ul"},"have a json ",(0,n.kt)("inlineCode",{parentName:"li"},"data")," section for developer-defined content"),(0,n.kt)("li",{parentName:"ul"},"are by default private to a user, though can be set as shareable via ",(0,n.kt)("inlineCode",{parentName:"li"},"acl"))),(0,n.kt)("p",null,"User Entities are normally retrieved in bulk after a user logs in, and then\nupdated in real-time as the user interacts with them."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Prior to release 2.22, all user entities were returned in the Authenticate and GetProfileState\nmethods. This is no longer the default behavior, but it can be re-enabled via the Compatibility settings on the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-advanced-settings"},"Advanced Settings page"),"  the portal.")),(0,n.kt)("p",null,"Note that User Entities are by default private (only accessible by the owner), but you ",(0,n.kt)("em",{parentName:"p"},"can")," make the accessible to other users via the ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/entity/getsharedentityforprofileid"},"GetSharedEntityForProfileId")," and ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/entity/getsharedentitiesforprofileid"},"GetSharedEntitiesForProfileId")," APIs. To do so, you must make them shareable to others via the ",(0,n.kt)("a",{parentName:"p",href:"/api/appendix/acl"},"ACL")," settings."),(0,n.kt)("p",null,"User Entity methods are organized into the following categories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Core Access - the basic user entity methods"),(0,n.kt)("li",{parentName:"ul"},"Singleton - for accessing entities as a singleton - useful for when there will only ever be a single entity of that type. Note that you don't have to explicitly create singletons, just blindly update them, and the system will create them if they don't exist"),(0,n.kt)("li",{parentName:"ul"},"Shared Data - used for accessing the shared user entities of another user")),(0,n.kt)("h3",{id:"api-summary"},"API Summary"),(0,n.kt)("h3",{id:"core-access"},"Core Access:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/createentity"},"CreateEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/deleteentity"},"DeleteEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getlist"},"GetList")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getlistcount"},"GetListCount")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getentitiesbytype"},"GetEntitiesByType")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getentity"},"GetEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getpage"},"GetPage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getpageoffset"},"GetPageOffset")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/updateentity"},"UpdateEntity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/incrementuserentitydata"},"IncrementUserEntityData"))),(0,n.kt)("h3",{id:"singleton"},"Singleton"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/deletesingleton"},"DeleteSingleton")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getsingleton"},"GetSingleton")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/updatesingleton"},"UpdateSingleton"))),(0,n.kt)("h3",{id:"shared-data"},"Shared Data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getsharedentityforprofileid"},"GetSharedEntityForProfileId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getsharedentitiesforprofileid"},"GetSharedEntitiesForProfileId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getsharedentitieslistforprofileid"},"GetSharedEntitiesListForProfileId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/updatesharedentity"},"UpdateSharedEntity"))),(0,n.kt)("p",null,"For more information on how brainCloud organizes data, refer to the ",(0,n.kt)("a",{parentName:"p",href:"http://getbraincloud.com/apidocs/api-modules/data/"},"Cloud Data Overview"),"."),(0,n.kt)(d,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);