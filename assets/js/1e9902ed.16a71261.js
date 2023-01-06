"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[42748],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=o(r),d=n,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(v,s(s({ref:t},l),{},{components:r})):a.createElement(v,s({ref:t},l))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var o=2;o<i;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const i={},s="ScheduleRunScriptMinutes",c={unversionedId:"api/capi/script/schedulerunscriptminutes",id:"api/capi/script/schedulerunscriptminutes",title:"ScheduleRunScriptMinutes",description:"Overview",source:"@site/docs/api/2_capi/script/schedulerunscriptminutes.md",sourceDirName:"api/2_capi/script",slug:"/api/capi/script/schedulerunscriptminutes",permalink:"/braincloud-apiref/api/capi/script/schedulerunscriptminutes",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/script/schedulerunscriptminutes.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ScheduleRunScriptMillisUTC",permalink:"/braincloud-apiref/api/capi/script/schedulerunscriptmillisutc"},next:{title:"ScheduleRunScriptUTC",permalink:"/braincloud-apiref/api/capi/script/schedulerunscriptutc"}},p={},o=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=l("PartialServop"),m=l("BrowserWindow"),d=l("Tabs"),v=l("TabItem"),b={toc:o};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"schedulerunscriptminutes"},"ScheduleRunScriptMinutes"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Schedules a script to run X minutes from now."),(0,n.kt)(u,{service_name:"script",operation_name:"SCHEDULE_CLOUD_SCRIPT",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(m,{mdxType:"BrowserWindow"},(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string scriptName = "path/to/script1";\nstring scriptData = "{\\"parm\\":\\"value\\"}";\nint minutesFromNow = 1;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.ScriptService.ScheduleRunScriptMinutes(scriptName, scriptData, minutesFromNow, successCallback, failureCallback);\n'))),(0,n.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *scriptName = "path/to/script1";\nconst char *scriptData = "{\\"parm\\":\\"value\\"}";\nint minutesFromNow = 1;\n\n_bc->getScriptService()->scheduleRunScriptMinutes(scriptName, scriptData, minutesFromNow, this);\n'))),(0,n.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *scriptName = @"path/to/script1";\nNSString *scriptData = @"{\\"parm\\":\\"value\\"}";\nint minutesFromNow = 1;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc scriptService] scheduleRunScriptMinutes:scriptName\n             scriptData:scriptData\n             minutesFromNow:minutesFromNow\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String scriptName = "path/to/script1";\nString scriptData = "{\\"parm\\":\\"value\\"}";\nint minutesFromNow = 1;\nthis; // implements IServerCallback\n\n_bc.getScriptService().scheduleRunScriptMinutes(scriptName, scriptData, minutesFromNow, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var scriptName = "path/to/script1";\nvar scriptData = {\n    "parm": "value"\n};\nvar minutesFromNow = 1;\n\n_bc.script.scheduleRunScriptMinutes(scriptName, scriptData, minutesFromNow, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var scriptName = "path/to/script1";\nvar scriptData = {\n    "parm": "value"\n};\nvar minutesFromNow = 1;\nvar scriptProxy = bridge.getScriptServiceProxy();\n\nvar postResult = scriptProxy.scheduleRunScriptMinutes(scriptName, scriptData, minutesFromNow);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var scriptName = "path/to/script1";\nvar scriptData = {\n    "parm": "value"\n};\nvar minutesFromNow = 1;\nvar scriptProxy = bridge.getScriptServiceProxy();\n\nvar postResult = scriptProxy.scheduleRunScriptMinutes(scriptName, scriptData, minutesFromNow);\nif (postResult.status == 200) {\n    // Success!\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "result": {},\n        "scriptName": "testScript",\n        "jobId": "48266b95-d197-464d-bb6b-da70aa1e22a9",\n        "runState": "Scheduled",\n        "description": null,\n        "gameId": "10170",\n        "runEndTime": 0,\n        "parameters": {\n            "testParm1": 1\n        },\n        "runStartTime": 0,\n        "scheduledStartTime": 1437576422378\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"scriptName"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the script with its path to be run")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"scriptData"),(0,n.kt)("td",{parentName:"tr",align:null},"Data to be sent to the script in JSON format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"minutesFromNow"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of minutes from now to run script (date in millis)")))))}g.isMDXComponent=!0}}]);