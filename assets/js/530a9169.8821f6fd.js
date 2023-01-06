"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[48045],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(v,o(o({ref:t},c),{},{components:n})):a.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30875:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={},o="UpdateEntityTimeToLive",l={unversionedId:"api/capi/globalentity/updateentitytimetolive",id:"api/capi/globalentity/updateentitytimetolive",title:"UpdateEntityTimeToLive",description:"Overview",source:"@site/docs/api/2_capi/globalentity/updateentitytimetolive.md",sourceDirName:"api/2_capi/globalentity",slug:"/api/capi/globalentity/updateentitytimetolive",permalink:"/braincloud-apiref/api/capi/globalentity/updateentitytimetolive",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/globalentity/updateentitytimetolive.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"UpdateEntityOwnerAndAcl",permalink:"/braincloud-apiref/api/capi/globalentity/updateentityownerandacl"},next:{title:"UpdateSystemEntity",permalink:"/braincloud-apiref/api/capi/globalentity/updatesystementity"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2},{value:"Status Codes",id:"status-codes",level:4}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),v=c("TabItem"),y={toc:p};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updateentitytimetolive"},"UpdateEntityTimeToLive"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Method updates an existing entity's time to live on the server."),(0,i.kt)("p",null,"This method is affected by versioning. See the ",(0,i.kt)("a",{parentName:"p",href:"/api/appendix/version"},"versioning documentation")," for more information."),(0,i.kt)(d,{service_name:"globalEntity",operation_name:"UPDATE_TIME_TO_LIVE",mdxType:"PartialServop"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(u,{mdxType:"BrowserWindow"},(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'string entityId = "a-entity-id";\nint version = 2;\nint timeToLive = 120000;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.GlobalEntityService.UpdateEntityTimeToLive(entityId, version, timeToLive, successCallback, failureCallback);\n'))),(0,i.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *entityId = "a-entity-id";\nint version = 2;\nint timeToLive = 120000;\n\n_bc->getGlobalEntityService()->updateEntityTimeToLive(entityId, version, timeToLive, this);\n'))),(0,i.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *entityId = @"a-entity-id";\nint version = 2;\nint timeToLive = 120000;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc globalEntityService] updateEntityTimeToLive:entityId\n                    version:version\n                 timeToLive:timeToLive\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,i.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String entityId = "a-entity-id";\nint version = 2;\nint timeToLive = 120000;\nthis; // implements IServerCallback\n\n_bc.getGlobalEntityService().updateEntityTimeToLive(entityId, version, timeToLive, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,i.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'var entityId = "a-entity-id";\nvar version = 2;\nvar timeToLive = 120000;\n\n_bc.globalEntity.updateEntityTimeToLive(entityId, version, timeToLive, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,i.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cfscript"},'var entityId = "a-entity-id";\nvar version = 2;\nvar timeToLive = 120000;\nvar globalEntityProxy = bridge.getGlobalEntityServiceProxy();\n\nvar postResult = globalEntityProxy.updateEntityTimeToLive(entityId, version, timeToLive);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,i.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalEntity",\n    "operation": "UPDATE_TIME_TO_LIVE",\n    "data": {\n        "entityId": "the-entity-id",\n        "version": 2,\n        "timeToLive": 120000\n    }\n}\n'))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "123456",\n        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",\n        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",\n        "entityType": "test",\n        "entityIndexedId" : "indexTest",\n        "version": 1,\n        "data": {\n            "testData": 1234\n        },\n        "acl": {\n            "other": 1\n        },\n        "expiresAt": 1449861422588,\n        "timeToLive": 2342342,\n        "createdAt": 1449861388021,\n        "updatedAt": 1449861388021\n    }\n}\n'))),(0,i.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"entityId"),(0,i.kt)("td",{parentName:"tr",align:null},"The id of the entity to update")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"version"),(0,i.kt)("td",{parentName:"tr",align:null},"The version of the entity to update. Use -1 to indicate the newest version")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeToLive"),(0,i.kt)("td",{parentName:"tr",align:null},"Sets expiry time for entity in milliseconds if > 0")))),(0,i.kt)("h4",{id:"status-codes"},"Status Codes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Code"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"40344"),(0,i.kt)("td",{parentName:"tr",align:null},"ENTITY_VERSION_MISMATCH"),(0,i.kt)("td",{parentName:"tr",align:null},"The version passed in does not match the version of the entity on the server")))))}b.isMDXComponent=!0}}]);