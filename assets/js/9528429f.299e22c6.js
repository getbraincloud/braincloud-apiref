"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[95233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={},i="SendNormalizedPushNotification",l={unversionedId:"api/capi/pushnotification/sendnormalizedpushnotification",id:"api/capi/pushnotification/sendnormalizedpushnotification",title:"SendNormalizedPushNotification",description:"Overview",source:"@site/docs/api/2_capi/pushnotification/sendnormalizedpushnotification.md",sourceDirName:"api/2_capi/pushnotification",slug:"/api/capi/pushnotification/sendnormalizedpushnotification",permalink:"/braincloud-apiref/api/capi/pushnotification/sendnormalizedpushnotification",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/pushnotification/sendnormalizedpushnotification.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ScheduleRichPushNotificationUTC",permalink:"/braincloud-apiref/api/capi/pushnotification/schedulerichpushnotificationutc"},next:{title:"SendNormalizedPushNotificationBatch",permalink:"/braincloud-apiref/api/capi/pushnotification/sendnormalizedpushnotificationbatch"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=u("PartialServop"),d=u("BrowserWindow"),m=u("Tabs"),f=u("TabItem"),v={toc:c};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sendnormalizedpushnotification"},"SendNormalizedPushNotification"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Sends a notification to a user consisting of alert content and custom data."),(0,o.kt)(p,{service_name:"pushNotification",operation_name:"SEND_NORMALIZED",mdxType:"PartialServop"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(d,{mdxType:"BrowserWindow"},(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'string toProfileId = "profile1";\nstring alertContentJson = "{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nstring customDataJson = "{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.PushNotificationService.SendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson, successCallback, failureCallback);\n'))),(0,o.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *toProfileId = "profile1";\nconst char *alertContentJson = "{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nconst char *customDataJson = "{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\n_bc->getPushNotificationService()->sendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson, this);\n'))),(0,o.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *toProfileId = @"profile1";\nNSString *alertContentJson = @"{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nNSString *customDataJson = @"{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc pushNotificationService] sendNormalizedPushNotification:toProfileId\n           alertContentJson:alertContentJson\n             customDataJson:customDataJson\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,o.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'String toProfileId = "profile1";\nString alertContentJson = "{\\"body\\":\\"content of message\\",\\"title\\":\\"message title\\"}";\nString customDataJson = "{\\"field1\\":\\"value1\\",\\"field2\\":\\"value2\\"}";\nthis; // implements IServerCallback\n\n_bc.getPushNotificationService().sendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,o.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var toProfileId = "profile1";\nvar alertContentJson = {\n    "body": "content of message",\n    "title": "message title"\n};\nvar customDataJson = {\n    "field1": "value1",\n    "field2": "value2"\n};\n\n_bc.pushNotification.sendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,o.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cfscript"},'var toProfileId = "profile1";\nvar alertContentJson = {\n    "body": "content of message",\n    "title": "message title"\n};\nvar customDataJson = {\n    "field1": "value1",\n    "field2": "value2"\n};\nvar pushNotificationProxy = bridge.getPushNotificationServiceProxy();\n\nvar postResult = pushNotificationProxy.sendNormalizedPushNotification(toProfileId, alertContentJson, customDataJson);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,o.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "pushNotification",\n    "operation": "SEND_NORMALIZED",\n    "data": {\n        "toProfileId": "profile1",\n        "alertContent": {\n            "body": "content of message",\n            "title": "message title"\n        },\n        "customData": {\n            "field1": "value1",\n            "field2": "value2"\n        }\n    }\n}\n'))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"JSON Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": null\n}\n'))),(0,o.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"toProfileId"),(0,o.kt)("td",{parentName:"tr",align:null},"The profileId of the user to receive the notification")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"alertContentJson"),(0,o.kt)("td",{parentName:"tr",align:null},"Body and title of alert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"customDataJson"),(0,o.kt)("td",{parentName:"tr",align:null},"Optional custom data")))))}b.isMDXComponent=!0}}]);