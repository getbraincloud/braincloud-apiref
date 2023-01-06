"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[33641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),s=r,y=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},59706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},i="Attach",o={unversionedId:"api/capi/identity/attach",id:"api/capi/identity/attach",title:"Attach",description:"Overview",source:"@site/docs/api/2_capi/identity/attach.md",sourceDirName:"api/2_capi/identity",slug:"/api/capi/identity/attach",permalink:"/braincloud-apiref/api/capi/identity/attach",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/identity/attach.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Identity",permalink:"/braincloud-apiref/api/capi/identity/"},next:{title:"AttachAdvancedIdentity",permalink:"/braincloud-apiref/api/capi/identity/attachadvancedidentity"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=d("PartialServop"),m=d("BrowserWindow"),s=d("Tabs"),y=d("TabItem"),h={toc:c};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"attach"},"Attach"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Attach an identity to the current profile."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40211"),(0,r.kt)("td",{parentName:"tr",align:null},"DUPLICATE_IDENTITY_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Facebook identity for a profile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40212"),(0,r.kt)("td",{parentName:"tr",align:null},"MERGE_PROFILES"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a Facebook account).")))),(0,r.kt)(u,{service_name:"identity",operation_name:"ATTACH",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{mdxType:"BrowserWindow"},(0,r.kt)(s,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var externalId = "email@email.com";\nvar authenticationToken = "email@email.com";\nvar authenticationType = "Email";\nvar externalAuthName = "";\nvar identityProxy = bridge.getIdentityServiceProxy();\n\nvar postResult = identityProxy.attach(externalId, authenticationToken, authenticationType, externalAuthName);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "identity",\n    "operation": "ATTACH",\n    "data": {\n        "externalId": "email@email.com",\n        "authenticationToken": "email@email.com",\n        "authenticationType": "Email",\n        "externalAuthName": ""\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : 200,\n    "data" : null\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalId"),(0,r.kt)("td",{parentName:"tr",align:null},"User ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authenticationToken"),(0,r.kt)("td",{parentName:"tr",align:null},"Password or client side token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authenticationType"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of authentication. Full list of types can be found ",(0,r.kt)("a",{parentName:"td",href:"/api/appendix/authtypes"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"externalAuthName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the external authentication mechanism (optional, used for custom authentication types)")))))}k.isMDXComponent=!0}}]);