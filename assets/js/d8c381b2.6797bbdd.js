"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[59277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},s="GetList",o={unversionedId:"api/capi/entity/getlist",id:"api/capi/entity/getlist",title:"GetList",description:"Overview",source:"@site/docs/api/2_capi/entity/getlist.md",sourceDirName:"api/2_capi/entity",slug:"/api/capi/entity/getlist",permalink:"/braincloud-apiref/api/capi/entity/getlist",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/entity/getlist.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetEntity",permalink:"/braincloud-apiref/api/capi/entity/getentity"},next:{title:"GetListCount",permalink:"/braincloud-apiref/api/capi/entity/getlistcount"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=p("PartialServop"),u=p("BrowserWindow"),m=p("Tabs"),y=p("TabItem"),g={toc:c};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getlist"},"GetList"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Method gets list of entities from the server base on type and/or where clause."),(0,a.kt)("p",null,"Fields available for use in the 'where' clause are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"entityType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"createdAt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"updatedAt"),(0,a.kt)("p",{parentName:"li"},"Along with all custom data (using ",(0,a.kt)("inlineCode",{parentName:"p"},"data."),").  For more information on the query syntax see ",(0,a.kt)("a",{parentName:"p",href:"/api/appendix/mongodbwherequeries"},"here"),"."))),(0,a.kt)(d,{service_name:"entity",operation_name:"GET_LIST",mdxType:"PartialServop"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(u,{mdxType:"BrowserWindow"},(0,a.kt)(m,{mdxType:"Tabs"},(0,a.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'string whereJson = "{\\"entityType\\":\\"address\\",\\"data.street\\":\\"1309 Carling\\"}";\nstring orderByJson = "{\\"data.street\\":1}";\nint maxReturn = 50;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.EntityService.GetList(whereJson, orderByJson, maxReturn, successCallback, failureCallback);\n'))),(0,a.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *whereJson = "{\\"entityType\\":\\"address\\",\\"data.street\\":\\"1309 Carling\\"}";\nconst char *orderByJson = "{\\"data.street\\":1}";\nint maxReturn = 50;\n_bc->getEntityService()->getList(whereJson, orderByJson, maxReturn, this);\n'))),(0,a.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *whereJson = @"{\\"entityType\\":\\"address\\",\\"data.street\\":\\"1309 Carling\\"}";\nNSString *orderByJson = @"{\\"data.street\\":1}";\nint maxReturn = 50;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc entityService] getList:whereJson\n                orderByJson:orderByJson\n                  maxReturn:maxReturn\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,a.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'String whereJson = "{\\"entityType\\":\\"address\\",\\"data.street\\":\\"1309 Carling\\"}";\nString orderByJson = "{\\"data.street\\":1}";\nint maxReturn = 50;\nthis; // implements IServerCallback\n\n_bc.getEntityService().getList(whereJson, orderByJson, maxReturn, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,a.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var whereJson = {\n    "entityType": "address",\n    "data.street": "1309 Carling"\n};\nvar orderByJson = {\n    "data.street": 1\n};\nvar maxReturn = 50;\n\n_bc.entity.getList(whereJson, orderByJson, maxReturn, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,a.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cfscript"},'var whereJson = {\n    "entityType": "address",\n    "data.street": "1309 Carling"\n};\nvar orderByJson = {\n    "data.street": 1\n};\nvar maxReturn = 50;\nvar entityProxy = bridge.getEntityServiceProxy();\n\nvar postResult = entityProxy.getList(whereJson, orderByJson, maxReturn);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,a.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "entity",\n    "operation": "GET_LIST",\n    "data": {\n        "where": {\n            "entityType": "address",\n            "data.street": "1309 Carling"\n        },\n        "orderBy": {\n            "data.street": 1\n        },\n        "maxReturn": 50\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"JSON Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "_serverTime": 1637946319239,\n        "entityListCount": 1,\n        "entityList": [{\n            "gameId": "123455",\n            "entityId": "a3def0eb-3993-4a95-8fef-27f50a6d0f69",\n            "ownerId": "11c9dd4d-9ed1-416d-bd04-5228c1efafac",\n            "entityType": "address",\n            "version": 1,\n            "data": {\n                "street": "123 Ave"\n            },\n            "acl": {\n                "other": 1\n            },\n            "createdAt": 1449870753354,\n            "updatedAt": 1449870753354\n        }]\n    }\n}\n'))),(0,a.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"whereJson"),(0,a.kt)("td",{parentName:"tr",align:null},"Mongo style query string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"orderByJson"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. ",(0,a.kt)("inlineCode",{parentName:"td"},'{ "name" : 1}')," sorts by name in ascending order")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maxReturn"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum number of entities to return")))))}b.isMDXComponent=!0}}]);