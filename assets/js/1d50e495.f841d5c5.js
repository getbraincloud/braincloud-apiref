"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[23066],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(v,o(o({ref:r},p),{},{components:t})):a.createElement(v,o({ref:r},p))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54620:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),n=(t(67294),t(3905));const i={},o="ReadServerTime",l={unversionedId:"api/capi/time/readservertime",id:"api/capi/time/readservertime",title:"ReadServerTime",description:"Overview",source:"@site/docs/api/2_capi/time/readservertime.md",sourceDirName:"api/2_capi/time",slug:"/api/capi/time/readservertime",permalink:"/braincloud-apiref/api/capi/time/readservertime",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/time/readservertime.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Time",permalink:"/braincloud-apiref/api/capi/time/"},next:{title:"Tournament",permalink:"/braincloud-apiref/api/capi/tournament/"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],p=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},u=p("PartialServop"),m=p("BrowserWindow"),d=p("Tabs"),v=p("TabItem"),b={toc:s};function f(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"readservertime"},"ReadServerTime"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Method returns the server time in UTC. This is in UNIX millis time format."),(0,n.kt)("p",null,"For instance 1472138108000 represents 8/25/2016, 11:15:08 AM in GMT-4."),(0,n.kt)(u,{service_name:"time",operation_name:"READ",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(m,{mdxType:"BrowserWindow"},(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'SuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.TimeService.ReadServerTime(successCallback, failureCallback);\n'))),(0,n.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getTimeService()->readServerTime(this);\n"))),(0,n.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"BCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc timeService] readServerTime:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n"))),(0,n.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'this; // implements IServerCallback\n\n_bc.getTimeService().readServerTime(this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'\n_bc.time.readServerTime(result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"var timeProxy = bridge.getTimeServiceProxy();\n\nvar postResult = timeProxy.readServerTime();\nif (postResult.status == 200) {\n    // Success!\n}\n"))),(0,n.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "time",\n    "operation": "READ",\n    "data": {}\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status" : 200,\n    "data" :\n    {\n        "server_time":1472138108000\n    }\n}\n'))))}f.isMDXComponent=!0}}]);