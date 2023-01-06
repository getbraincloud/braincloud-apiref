"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[77975],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var r=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),i=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=i(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(t),m=l,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,n(n({ref:a},c),{},{components:t})):r.createElement(g,n({ref:a},c))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,n=new Array(o);n[0]=m;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p[d]="string"==typeof e?e:l,n[1]=p;for(var i=2;i<o;i++)n[i]=t[i];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94138:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>v,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=t(87462),l=(t(67294),t(3905));const o={},n="SysRemoveFromLegacyFlaggedUsers",p={unversionedId:"api/capi/globalapp/sysremovefromlegacyflaggedusers",id:"api/capi/globalapp/sysremovefromlegacyflaggedusers",title:"SysRemoveFromLegacyFlaggedUsers",description:"Overview",source:"@site/docs/api/2_capi/globalapp/sysremovefromlegacyflaggedusers.md",sourceDirName:"api/2_capi/globalapp",slug:"/api/capi/globalapp/sysremovefromlegacyflaggedusers",permalink:"/braincloud-apiref/api/capi/globalapp/sysremovefromlegacyflaggedusers",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalapp/sysremovefromlegacyflaggedusers.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysGetMonthlyCounts",permalink:"/braincloud-apiref/api/capi/globalapp/sysgetmonthlycounts"},next:{title:"SysUpdateLegacyFlaggedUser",permalink:"/braincloud-apiref/api/capi/globalapp/sysupdatelegacyflaggeduser"}},s={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)},d=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),g=c("TabItem"),y={toc:i};function v(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sysremovefromlegacyflaggedusers"},"SysRemoveFromLegacyFlaggedUsers"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Removes a user from the legacy list of flagged users."),(0,l.kt)(d,{service_name:"globalApp",operation_name:"SYS_REMOVE_FROM_LEGACY_FLAGGED_USERS",mdxType:"PartialServop"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u,{mdxType:"BrowserWindow"},(0,l.kt)(m,{mdxType:"Tabs"},(0,l.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,l.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cfscript"},'var profileId = "the-profile-id";\nvar globalAppProxy = bridge.getGlobalAppServiceProxy();\n\nvar postResult = globalAppProxy.sysRemoveFromLegacyFlaggedUsers(profileId);\nif (postResult.status == 200) {\n  // Success!\n}\n'))),(0,l.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-r"},'{\n  "service": "globalApp",\n  "operation": "SYS_REMOVE_FROM_LEGACY_FLAGGED_USERS",\n  "data":\n  {\n    "profileId": "the-profile-id"\n  }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "removed": 1\n  },\n  "status": 200\n}\n'))),(0,l.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"profileId"),(0,l.kt)("td",{parentName:"tr",align:null},"Target user's profile id.")))))}v.isMDXComponent=!0}}]);