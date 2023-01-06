"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[85603],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),v=a,m=p["".concat(i,".").concat(v)]||p[v]||d[v]||c;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=v;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<c;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},13448:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const c={},l="GetPeerCurrency",o={unversionedId:"api/capi/virtualcurrency/getpeercurrency",id:"api/capi/virtualcurrency/getpeercurrency",title:"GetPeerCurrency",description:"Overview",source:"@site/docs/api/2_capi/virtualcurrency/getpeercurrency.md",sourceDirName:"api/2_capi/virtualcurrency",slug:"/api/capi/virtualcurrency/getpeercurrency",permalink:"/braincloud-apiref/api/capi/virtualcurrency/getpeercurrency",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/virtualcurrency/getpeercurrency.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetParentCurrency",permalink:"/braincloud-apiref/api/capi/virtualcurrency/getparentcurrency"},next:{title:"ResetCurrency",permalink:"/braincloud-apiref/api/capi/virtualcurrency/resetcurrency"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},p=s("PartialServop"),d=s("BrowserWindow"),v=s("Tabs"),m=s("TabItem"),y={toc:u};function b(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getpeercurrency"},"GetPeerCurrency"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Gets the peer currency for the given currency type ",(0,a.kt)("strong",{parentName:"p"},"or")," all currency types if null passed in."),(0,a.kt)(p,{service_name:"virtualCurrency",operation_name:"GET_PARENT_VC",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(d,{mdxType:"BrowserWindow"},(0,a.kt)(v,{mdxType:"Tabs"},(0,a.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string vcId = "coins";\nstring peerCode = "master";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.VirtualCurrencyService.GetPeerCurrency(vcId, peerCode, successCallback, failureCallback);\n'))),(0,a.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *vcId = "coins";\nconst char *peerCode = "master";\n_bc->getVirtualCurrencyService()->getPeerCurrency(vcId, peerCode, this);\n'))),(0,a.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *vcId = @"coins";\nNSString *peerCode = @"master";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc virtualCurrencyService] getPeerCurrency:vcId\n                   peerCode:peerCode\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,a.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String vcId = "coins";\nString peerCode = "master";\nthis; // implements IServerCallback\n\n_bc.getVirtualCurrencyService().getPeerCurrency(vcId, peerCode, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var vcId = "coins";\nvar peerCode = "master";\n\n_bc.virtualCurrency.getPeerCurrency(vcId, peerCode, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var vcId = "coins";\nvar peerCode = "master";\nvar virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();\n\nvar postResult = virtualCurrencyProxy.getPeerCurrency(vcId, peerCode);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,a.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var vcId = "coins";\nvar peerCode = "master";\nvar virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();\n\nvar postResult = virtualCurrencyProxy.getPeerCurrency(vcId, peerCode);\nif (postResult.status == 200) {\n    // Success!\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "status":200,\n   "data":{\n      "currencyMap":{\n         "credits":{\n            "consumed":20,\n            "balance":180,\n            "purchased":0,\n            "awarded":200\n         }\n      }\n   }\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vcId"),(0,a.kt)("td",{parentName:"tr",align:null},"The currency type to retrieve or null if all currency types are being requested.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"peer"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the peer")))))}b.isMDXComponent=!0}}]);