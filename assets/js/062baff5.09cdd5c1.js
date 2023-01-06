"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[61621],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return t?n.createElement(b,o(o({ref:r},p),{},{components:t})):n.createElement(b,o({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94113:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const c={},o="ResetCurrency",l={unversionedId:"api/capi/product/resetcurrency",id:"api/capi/product/resetcurrency",title:"ResetCurrency",description:"Overview",source:"@site/docs/api/2_capi/product/resetcurrency.md",sourceDirName:"api/2_capi/product",slug:"/api/capi/product/resetcurrency",permalink:"/braincloud-apiref/api/capi/product/resetcurrency",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/product/resetcurrency.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetSalesInventoryByCategory",permalink:"/braincloud-apiref/api/capi/product/getsalesinventorybycategory"},next:{title:"ResetParentCurrency",permalink:"/braincloud-apiref/api/capi/product/resetparentcurrency"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],p=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},u=p("PartialServop"),d=p("BrowserWindow"),m=p("Tabs"),b=p("TabItem"),y={toc:s};function v(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resetcurrency"},"ResetCurrency"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"WARNING:\nThis call, ",(0,a.kt)("code",null,"ResetCurrency()"),", is included in the client libraries for convenience and backwards compatibility, but for app security reasons we recommend it only be called server-side via Cloud Code. By default the brainCloud servers will block any client-side invocations of currency altering methods. To enable client-side support (not recommended), you need to enable the ","[x]"," Allow Currency Calls from Client compatibility setting on the Design | Core App Info | Advanced Settings page of the portal.")),(0,a.kt)("p",null,"Resets the player's currency back to zero."),(0,a.kt)(u,{service_name:"product",operation_name:"RESET_PLAYER_VC",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(d,{mdxType:"BrowserWindow"},(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'SuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.ProductService.ResetCurrency(successCallback, failureCallback);\n'))),(0,a.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getProductService()->resetCurrency(this);\n"))),(0,a.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},"BCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc productService] resetCurrency:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n"))),(0,a.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'this; // implements IServerCallback\n\n_bc.getProductService().resetCurrency(this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'\n_bc.product.resetCurrency(result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},"var productProxy = bridge.getProductServiceProxy();\n\nvar postResult = productProxy.resetCurrency();\nif (postResult.status == 200) {\n    // Success!\n}\n"))),(0,a.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "product",\n    "operation": "RESET_PLAYER_VC"\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : 200,\n    "data" : null\n}\n'))))}v.isMDXComponent=!0}}]);