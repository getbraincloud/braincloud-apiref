"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[13622],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={},i="SysGetNotificationTemplates",l={unversionedId:"api/capi/pushnotification/sysgetnotificationtemplates",id:"api/capi/pushnotification/sysgetnotificationtemplates",title:"SysGetNotificationTemplates",description:"Overview",source:"@site/docs/api/2_capi/pushnotification/sysgetnotificationtemplates.md",sourceDirName:"api/2_capi/pushnotification",slug:"/api/capi/pushnotification/sysgetnotificationtemplates",permalink:"/braincloud-apiref/api/capi/pushnotification/sysgetnotificationtemplates",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/pushnotification/sysgetnotificationtemplates.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SendTemplatedPushNotificationToGroup",permalink:"/braincloud-apiref/api/capi/pushnotification/sendtemplatedpushnotificationtogroup"},next:{title:"Redemption Code",permalink:"/braincloud-apiref/api/capi/redemptioncode/"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=c("PartialServop"),d=c("BrowserWindow"),m=c("Tabs"),f=c("TabItem"),g={toc:s};function v(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sysgetnotificationtemplates"},"SysGetNotificationTemplates"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Returns an array of the notification templates defined - with the text for the specified language."),(0,o.kt)(u,{service_name:"pushNotification",operation_name:"SYS_GET_NOTIFICATION_TEMPLATES",mdxType:"PartialServop"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(d,{mdxType:"BrowserWindow"},(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(f,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,o.kt)(f,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,o.kt)(f,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,o.kt)(f,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,o.kt)(f,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,o.kt)(f,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cfscript"},'var defaultLanguageCode = "en";\nvar pushNotificationProxy = bridge.getPushNotificationServiceProxy();\n\nvar postResult = pushNotificationProxy.sysGetNotificationTemplates(defaultLanguageCode);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,o.kt)(f,{value:"r",label:"Raw",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "pushNotification",\n    "operation": "SYS_GET_NOTIFICATION_TEMPLATES",\n    "data": {\n        "defaultLanguageCode": "en",\n        }\n    }\n}\n'))))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"JSON Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "pushTemplates": \n        [\n            {\n                "notificationTemplateId" : 1,\n                "name" : "awesomeSaleNotification",\n                "defaultMessage" : "This is english text!",\n                "updatedAt" : 1591730181151\n            },\n            {\n\n                "notificationTemplateId" : 2,\n                "name" : "anotherNotification",\n                "message" : "This is another notification",\n                "updatedAt" : 1591734121222\n            }\n        ]\n    },\n    "status": 200\n}\n'))),(0,o.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultLanguageCode"),(0,o.kt)("td",{parentName:"tr",align:null},"The language code (lowercase) to be used for returning the default message text.")))))}v.isMDXComponent=!0}}]);