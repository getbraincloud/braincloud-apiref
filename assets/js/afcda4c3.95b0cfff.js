"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[92975],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(a),m=i,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={},l="Initialize",o={unversionedId:"api/capi/authentication/initialize",id:"api/capi/authentication/initialize",title:"Initialize",description:"Overview",source:"@site/docs/api/2_capi/authentication/initialize.md",sourceDirName:"api/2_capi/authentication",slug:"/api/capi/authentication/initialize",permalink:"/braincloud-apiref/api/capi/authentication/initialize",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/authentication/initialize.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GenerateAnonymousId",permalink:"/braincloud-apiref/api/capi/authentication/generateanonymousid"},next:{title:"ResetEmailPasswordAdvancedWithExpiry",permalink:"/braincloud-apiref/api/capi/authentication/resetemailpasswordadvancedwithexpiry"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},s=u("BrowserWindow"),d=u("Tabs"),m=u("TabItem"),f={toc:c};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"initialize"},"Initialize"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Initializes the authentication service with an anonymous installation ID and most recently used profile ID.\nYou will need to call this method before authenticating anonymously."),(0,i.kt)("p",null,"Note that calling this is the same as calling ",(0,i.kt)("a",{parentName:"p",href:"/api/capi/client/initializeidentity"},(0,i.kt)("code",null,"InitializeIdentity"))," in the BrainCloudClient."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(s,{mdxType:"BrowserWindow"},(0,i.kt)(d,{mdxType:"Tabs"},(0,i.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'_bc.AuthenticationService.Initialize("profileId", "anonId");\n'))),(0,i.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'_bc->getAuthenticationService()->initialize("profileId", "anonId");\n'))),(0,i.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString * profileID = @"profileId";\nNSString * anonymousID = @"anonId";\n\n[[_bc authenticationService]\n                initialize:profileID\n               anonymousID:anonymousID];\n'))),(0,i.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String profileID = "profileId";\nString anonymousID = "anonId";\n\n_bc.getAuthenticationService().initialize(profileId, anonymousId);\n'))),(0,i.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.authentication.initialize(profileId, anonymousId);\n"))),(0,i.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,i.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,i.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"profileId"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the profile ID that was most recently used by the app (on this device)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"anonymousId"),(0,i.kt)("td",{parentName:"tr",align:null},"The anonymous installation ID that was generated for this device")))))}b.isMDXComponent=!0}}]);