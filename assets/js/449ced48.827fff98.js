"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[93804],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>y});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),i=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=i(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||c;return n?t.createElement(y,o(o({ref:r},s),{},{components:n})):t.createElement(y,o({ref:r},s))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var i=2;i<c;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12627:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var t=n(87462),a=(n(67294),n(3905));const c={},o="ConsumeCurrency",u={unversionedId:"api/capi/product/consumecurrency",id:"api/capi/product/consumecurrency",title:"ConsumeCurrency",description:"Overview",source:"@site/docs/api/2_capi/product/consumecurrency.md",sourceDirName:"api/2_capi/product",slug:"/api/capi/product/consumecurrency",permalink:"/braincloud-apiref/api/capi/product/consumecurrency",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/product/consumecurrency.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ConfirmGooglePlayPurchase",permalink:"/braincloud-apiref/api/capi/product/confirmgoogleplaypurchase"},next:{title:"ConsumeParentCurrency",permalink:"/braincloud-apiref/api/capi/product/consumeparentcurrency"}},l={},i=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],s=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},p=s("PartialServop"),d=s("BrowserWindow"),m=s("Tabs"),y=s("TabItem"),b={toc:i};function v(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},b,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consumecurrency"},"ConsumeCurrency"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"WARNING:\nThis call, ",(0,a.kt)("code",null,"ConsumeCurrency()"),", is included in the client libraries for convenience and backwards compatibility, but for app security reasons we recommend it only be called server-side via Cloud Code. By default the brainCloud servers will block any client-side invocations of currency altering methods. To enable client-side support (not recommended), you need to enable the ","[x]"," Allow Currency Calls from Client compatibility setting on the Design | Core App Info | Advanced Settings page of the portal.")),(0,a.kt)("p",null,"Consume the passed-in amount of currency from the player."),(0,a.kt)("p",null,"Note: Consuming 0 or negative currency will return an error. Use AwardCurrency to add currency values."),(0,a.kt)(p,{service_name:"product",operation_name:"CONSUME_VC",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(d,{mdxType:"BrowserWindow"},(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string currencyType = "coins";\nint amount = 1;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.ProductService.ConsumeCurrency(currencyType, amount, successCallback, failureCallback);\n'))),(0,a.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *currencyType = "coins";\nint amount = 1;\n_bc->getProductService()->consumeCurrency(currencyType, amount, this);\n'))),(0,a.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *currencyType = @"coins";\nint amount = 1;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc productService] consumeCurrency:currencyType\n                     amount:amount\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,a.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String currencyType = "coins";\nint amount = 1;\nthis; // implements IServerCallback\n\n_bc.getProductService().consumeCurrency(currencyType, amount, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var currencyType = "coins";\nvar amount = 1;\n\n_bc.product.consumeCurrency(currencyType, amount, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var currencyType = "coins";\nvar amount = 1;\nvar productProxy = bridge.getProductServiceProxy();\n\nvar postResult = productProxy.consumeCurrency(currencyType, amount);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,a.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "product",\n    "operation": "CONSUME_VC",\n    "data": {\n        "vc_id": "coins",\n        "vc_amount": 1\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "updatedAt": 1395693913234,\n        "currencyMap": {\n            "gems": {\n                "purchased": 0,\n                "balance": 0,\n                "consumed": 0,\n                "awarded": 0\n            },\n            "gold": {\n                "purchased": 0,\n                "balance": 123,\n                "consumed": 0,\n                "awarded": 123\n            }\n        },\n        "playerId": "acf11847-055f-470d-abb7-b93052201491",\n        "createdAt": 1395693907421\n    }\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currencyType"),(0,a.kt)("td",{parentName:"tr",align:null},"The currency type to consume.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"amount"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of currency to consume.")))))}v.isMDXComponent=!0}}]);