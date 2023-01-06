"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[9938],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return t?n.createElement(y,o(o({ref:r},s),{},{components:t})):n.createElement(y,o({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73844:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const c={},o="GetCurrency",l={unversionedId:"api/capi/product/getcurrency",id:"api/capi/product/getcurrency",title:"GetCurrency",description:"Overview",source:"@site/docs/api/2_capi/product/getcurrency.md",sourceDirName:"api/2_capi/product",slug:"/api/capi/product/getcurrency",permalink:"/braincloud-apiref/api/capi/product/getcurrency",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/product/getcurrency.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"FinalizeSteamTransaction",permalink:"/braincloud-apiref/api/capi/product/finalizesteamtransaction"},next:{title:"GetEligiblePromotions",permalink:"/braincloud-apiref/api/capi/product/geteligiblepromotions"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},u=s("PartialServop"),d=s("BrowserWindow"),m=s("Tabs"),y=s("TabItem"),b={toc:p};function v(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getcurrency"},"GetCurrency"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Gets the player's currency for the given currency type ",(0,a.kt)("strong",{parentName:"p"},"or")," all currency types if null passed in."),(0,a.kt)(u,{service_name:"product",operation_name:"GET_PLAYER_VC",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(d,{mdxType:"BrowserWindow"},(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string currencyType = "coins";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.ProductService.GetCurrency(currencyType, successCallback, failureCallback);\n'))),(0,a.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *currencyType = "coins";\n_bc->getProductService()->getCurrency(currencyType, this);\n'))),(0,a.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *currencyType = @"coins";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc productService] getCurrency:currencyType\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,a.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String currencyType = "coins";\nthis; // implements IServerCallback\n\n_bc.getProductService().getCurrency(currencyType, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var currencyType = "coins";\n\n_bc.product.getCurrency(currencyType, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var currencyType = "coins";\nvar productProxy = bridge.getProductServiceProxy();\n\nvar postResult = productProxy.getCurrency(currencyType);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,a.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "product",\n    "operation": "GET_PLAYER_VC",\n    "data": {\n        "vc_id": "coins"\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "updatedAt": 1479752110785,\n        "currencyMap": {\n            "gems": {\n                "purchased": 0,\n                "balance": 12212,\n                "consumed": 133,\n                "awarded": 12345\n            }\n        },\n        "parentCurrency": {\n            "Master": {\n                "credits": {\n                    "purchased": 0,\n                    "balance": 12212,\n                    "consumed": 133,\n                    "awarded": 12345\n                }\n            }\n        },\n        "peerCurrency": {\n            "gameLootPeer": {\n                "tickets": {\n                    "purchased": 0,\n                    "balance": 12212,\n                    "consumed": 133,\n                    "awarded": 12345\n                }\n            }\n        },\n        "playerId": "362ce861-b749-4ce4-a57a-175232e21b5d",\n        "createdAt": 1459439058040\n    }\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currencyType"),(0,a.kt)("td",{parentName:"tr",align:null},"The currency type to retrieve or null if all currency types are being requested.")))))}v.isMDXComponent=!0}}]);