"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[43998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o="GetSharedEntitiesForProfileId",l={unversionedId:"api/capi/entity/getsharedentitiesforprofileid",id:"api/capi/entity/getsharedentitiesforprofileid",title:"GetSharedEntitiesForProfileId",description:"Overview",source:"@site/docs/api/2_capi/entity/getsharedentitiesforprofileid.md",sourceDirName:"api/2_capi/entity",slug:"/api/capi/entity/getsharedentitiesforprofileid",permalink:"/braincloud-apiref/api/capi/entity/getsharedentitiesforprofileid",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/entity/getsharedentitiesforprofileid.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetPageOffset",permalink:"/braincloud-apiref/api/capi/entity/getpageoffset"},next:{title:"GetSharedEntitiesListForProfileId",permalink:"/braincloud-apiref/api/capi/entity/getsharedentitieslistforprofileid"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=p("PartialServop"),u=p("BrowserWindow"),f=p("Tabs"),m=p("TabItem"),g={toc:c};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getsharedentitiesforprofileid"},"GetSharedEntitiesForProfileId"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Method returns all shared entities for the given profile id."),(0,n.kt)("p",null,"An entity is shared if its ACL allows for the currently logged in user to read the data."),(0,n.kt)(d,{service_name:"entity",operation_name:"READ_SHARED",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(f,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string targetProfileId = "profile1";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.EntityService.GetSharedEntitiesForProfileId(targetProfileId, successCallback, failureCallback);\n'))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *targetProfileId = "profile1";\n_bc->getEntityService()->getSharedEntitiesForProfileId(targetProfileId, this);\n'))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *targetProfileId = @"profile1";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc entityService] getSharedEntitiesForProfileId:targetProfileId\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String targetProfileId = "profile1";\nthis; // implements IServerCallback\n\n_bc.getEntityService().getSharedEntitiesForProfileId(targetProfileId, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var targetProfileId = "profile1";\n\n_bc.entity.getSharedEntitiesForProfileId(targetProfileId, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var targetProfileId = "profile1";\nvar entityProxy = bridge.getEntityServiceProxy();\n\nvar postResult = entityProxy.getSharedEntitiesForProfileId(targetProfileId);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "entity",\n    "operation": "READ_SHARED",\n    "data": {\n        "targetProfileId": "profile1"\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "entities": [\n            {\n                "entityId": "544db68a-48ad-4fc9-9f44-5fd36fc6445f",\n                "entityType": "publicInfo",\n                "version": 1,\n                "data": {\n                    "name": "john",\n                    "age": 30\n                },\n                "acl": {\n                    "other": 1\n                },\n                "createdAt": 1395943044322,\n                "updatedAt": 1395943044322\n            }\n        ],\n        "_serverTime": 1637946319239,\n        "entityListCount": 1\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"targetProfileId"),(0,n.kt)("td",{parentName:"tr",align:null},"The profile id to retrieve shared entities for")))))}b.isMDXComponent=!0}}]);