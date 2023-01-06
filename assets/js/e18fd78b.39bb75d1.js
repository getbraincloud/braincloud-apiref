"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[9559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,v=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={},o="DeregisterAllPushNotificationDeviceTokens",c={unversionedId:"api/capi/pushnotification/deregisterallpushnotificationdevicetokens",id:"api/capi/pushnotification/deregisterallpushnotificationdevicetokens",title:"DeregisterAllPushNotificationDeviceTokens",description:"Overview",source:"@site/docs/api/2_capi/pushnotification/deregisterallpushnotificationdevicetokens.md",sourceDirName:"api/2_capi/pushnotification",slug:"/api/capi/pushnotification/deregisterallpushnotificationdevicetokens",permalink:"/braincloud-apiref/api/capi/pushnotification/deregisterallpushnotificationdevicetokens",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/pushnotification/deregisterallpushnotificationdevicetokens.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Push Notification",permalink:"/braincloud-apiref/api/capi/pushnotification/"},next:{title:"DeregisterPushNotificationDeviceToken",permalink:"/braincloud-apiref/api/capi/pushnotification/deregisterpushnotificationdevicetoken"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=p("PartialServop"),d=p("BrowserWindow"),f=p("Tabs"),v=p("TabItem"),m={toc:l};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deregisterallpushnotificationdevicetokens"},"DeregisterAllPushNotificationDeviceTokens"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Clears the device tokens currently registered to the user."),(0,i.kt)(u,{service_name:"pushNotification",operation_name:"DEREGISTER_ALL",mdxType:"PartialServop"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(d,{mdxType:"BrowserWindow"},(0,i.kt)(f,{mdxType:"Tabs"},(0,i.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'SuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.PushNotificationService.DeregisterAllPushNotificationDeviceTokens(successCallback, failureCallback);\n'))),(0,i.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getPushNotificationService()->deregisterAllPushNotificationDeviceTokens(this);\n"))),(0,i.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},"BCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc pushNotificationService] deregisterAllPushNotificationDeviceTokens:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n"))),(0,i.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'this; // implements IServerCallback\n\n_bc.getPushNotificationService().deregisterAllPushNotificationDeviceTokens(this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,i.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'\n_bc.pushNotification.deregisterAllPushNotificationDeviceTokens(result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,i.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cfscript"},"var pushNotificationProxy = bridge.getPushNotificationServiceProxy();\n\nvar postResult = pushNotificationProxy.deregisterAllPushNotificationDeviceTokens();\nif (postResult.status == 200) {\n    // Success!\n}\n"))),(0,i.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "pushNotification",\n    "operation": "DEREGISTER_ALL",\n    "data": {}\n}\n'))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": null\n}\n'))))}b.isMDXComponent=!0}}]);