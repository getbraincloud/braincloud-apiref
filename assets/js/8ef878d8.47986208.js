"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[45135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,y=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(y,l(l({ref:t},s),{},{components:a})):n.createElement(y,l({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={},l="DetachAdvancedIdentity",o={unversionedId:"api/capi/identity/detachadvancedidentity",id:"api/capi/identity/detachadvancedidentity",title:"DetachAdvancedIdentity",description:"Overview",source:"@site/docs/api/2_capi/identity/detachadvancedidentity.md",sourceDirName:"api/2_capi/identity",slug:"/api/capi/identity/detachadvancedidentity",permalink:"/braincloud-apiref/api/capi/identity/detachadvancedidentity",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/identity/detachadvancedidentity.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Detach",permalink:"/braincloud-apiref/api/capi/identity/detach"},next:{title:"DetachAppleIdentity",permalink:"/braincloud-apiref/api/capi/identity/detachappleidentity"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=s("PartialServop"),u=s("BrowserWindow"),m=s("Tabs"),y=s("TabItem"),v={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"detachadvancedidentity"},"DetachAdvancedIdentity"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Detach the identity from this profile."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40210"),(0,r.kt)("td",{parentName:"tr",align:null},"DOWNGRADING_TO_ANONYMOUS_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when detaching the last non-anonymous identity from an account with continueAnon set to false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40206"),(0,r.kt)("td",{parentName:"tr",align:null},"MISSING_IDENTITY_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},'A "profileId" was supplied in the authentication request submitted with new credentials. In other words the credentials record was not found in the brainCloud database. The solution would be to provide known credentials or not supply a "profileId" if the user is actually new.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40209"),(0,r.kt)("td",{parentName:"tr",align:null},"SECURITY_ERROR"),(0,r.kt)("td",{parentName:"tr",align:null},"Returned if a security exception was encountered.")))),(0,r.kt)(p,{service_name:"identity",operation_name:"DETACH",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'AuthenticationType authenticationType = AuthenticationType.Universal;\nAuthenticationIds ids;\nids.externalId = "authAdvancedUser";\nids.authenticationToken = "authAdvancedPass";\nids.authenticationSubType = "";\nstring extraJson = "{\\"key\\":\\"value\\"}";\n\n_bc.IdentityService.DetachAdvancedIdentity(\n    authenticationType,\n    ids,\n    extraJson,\n    SuccessCallback, FailureCallback);\n'))),(0,r.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'AuthenticationType authenticationType = AuthenticationType::Universal;\nAuthenticationIds ids = { "authAdvancedUser", "authAdvancedPass", "" };\nconst char* extraJson = "{\\"key\\":\\"value\\"}";\n\n_bc->getIdentityService()->detachAdvancedIdentity(\n    authenticationType, ids, extraJson, this);\n'))),(0,r.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'AuthenticationType authenticationType = [AuthenticationTypeObjc Universal];\nAuthenticationIds *ids = [[AuthenticationIdsObjc alloc]init];\nids.externalId = @"authAdvancedUser";\nids.authenticationToken = @"authAdvancedPass";\nids.authenticationSubType = @"";\nNSString * extraJson = "{\\"key\\":\\"value\\"}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc identityService]\n       detachAdvancedIdentity:authenticationType\n                        ids:ids\n                  extraJson:extraJson\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AuthenticationType authenticationType = AuthenticationType.Universal;\nAuthenticationIds ids = new AuthenticationIds ("authAdvancedUser", "authAdvancedPass", "");\nstring extraJson = "{\\"key\\":\\"value\\"}";\nthis; // implements IServerCallback\n\n_bc.getIdentityService().detachAdvancedIdentity(authenticationType, ids, extraJson, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var authenticationType = _bc.brainCloudClient.authentication.AUTHENTICATION_TYPE_UNIVERSAL;\nvar ids = {externalId: "authAdvancedUser", authenticationToken: "authAdvancedPass", authenticationSubType: ""};\nvar forceCreate = true;\nvar extraJson = {"key":"value"};\n\n_bc.identity.detachAdvancedIdentity(authenticationType, ids, forceCreate, extraJson, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,r.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : 200,\n    "data" : null\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authenticationType"),(0,r.kt)("td",{parentName:"tr",align:null},"Universal, Universal, Facebook, etc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ids"),(0,r.kt)("td",{parentName:"tr",align:null},"Auth IDs structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extraJson"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional to piggyback along with the call, to be picked up by pre- or post- hooks. Leave empty string for no extraJson")))))}h.isMDXComponent=!0}}]);