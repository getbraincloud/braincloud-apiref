"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[80567],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),b=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=b(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=b(a),u=r,m=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var n=a(87462),r=(a(67294),a(3905));const o={},l="JoinLobbyWithPingData",i={unversionedId:"api/capi/lobby/joinlobbywithpingdata",id:"api/capi/lobby/joinlobbywithpingdata",title:"JoinLobbyWithPingData",description:"Overview",source:"@site/docs/api/2_capi/lobby/joinlobbywithpingdata.md",sourceDirName:"api/2_capi/lobby",slug:"/api/capi/lobby/joinlobbywithpingdata",permalink:"/braincloud-apiref/api/capi/lobby/joinlobbywithpingdata",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/lobby/joinlobbywithpingdata.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"JoinLobby",permalink:"/braincloud-apiref/api/capi/lobby/joinlobby"},next:{title:"LeaveLobby",permalink:"/braincloud-apiref/api/capi/lobby/leavelobby"}},s={},b=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=d("PartialServop"),p=d("BrowserWindow"),u=d("Tabs"),m=d("TabItem"),y={toc:b};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"joinlobbywithpingdata"},"JoinLobbyWithPingData"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Adds the caller to the given lobby instance."),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/lobby/pingregions"},"PingRegions")," to generate the ping data."),(0,r.kt)(c,{service_name:"lobby",operation_name:"JOIN_LOBBY_WITH_PING_DATA",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(p,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string lobbyId = "123456:4v4:3";\nstring[] otherUserCxIds = { "123456:aaa-bbb-ccc-ddd:asdfjkl" };\nbool isReady = false;\nstring extraJson = "{}";\nstring teamCode = "blue";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.LobbyService.JoinLobbyWithPingData(lobbyId, otherUserCxIds, isReady, extraJson, teamCode, successCallback, failureCallback);\n'))),(0,r.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *lobbyId = "123456:4v4:3";\nstd::vector<std::string> otherUserCxIds;\notherUserCxIds.push_back("123456:aaa-bbb-ccc-ddd:asdfjkl");\nbool isReady = false;\nconst char *extraJson = "{}";\nconst char *teamCode = "blue";\n_bc->getLobbyService()->joinLobbyWithPingData(lobbyId, otherUserCxIds, isReady, extraJson, teamCode, this);\n'))),(0,r.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *lobbyId = @"123456:4v4:3";\nNSArray *otherUserCxIds = @[ @"123456:aaa-bbb-ccc-ddd:asdfjkl" ];\nbool isReady = false;\nNSString *extraJson = @"{}";\nNSString *teamCode = @"blue";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc lobbyService] joinLobbyWithPingData:lobbyId\n             otherUserCxIds:otherUserCxIds\n                    isReady:isReady\n                  extraJson:extraJson\n                   teamCode:teamCode\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String lobbyId = "123456:4v4:3";\nString[] otherUserCxIds = { "123456:aaa-bbb-ccc-ddd:asdfjkl" };\nboolean isReady = false;\nString extraJson = "{}";\nString teamCode = "blue";\nthis; // implements IServerCallback\n\n_bc.getLobbyService().joinLobbyWithPingData(lobbyId, otherUserCxIds, isReady, extraJson, teamCode, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var lobbyId = "123456:4v4:3";\nvar otherUserCxIds = [ "123456:aaa-bbb-ccc-ddd:asdfjkl" ];\nvar isReady = false;\nvar extraJson = {};\nvar teamCode = "blue";\n\n_bc.lobby.joinLobbyWithPingData(lobbyId, otherUserCxIds, isReady, extraJson, teamCode, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var lobbyId = "123456:4v4:3";\nvar otherUserCxIds = [ "123456:aaa-bbb-ccc-ddd:asdfjkl" ];\nvar isReady = false;\nvar extraJson = {};\nvar teamCode = "blue";\nvar pingData = {\n    "ca-central-1": 98,\n    "us-west-1": 123\n};\nvar lobbyProxy = bridge.getLobbyServiceProxy();\n\nvar postResult = lobbyProxy.joinLobbyWithPingData(lobbyId, otherUserCxIds, isReady, extraJson, teamCode, pingData);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "lobby",\n    "operation": "JOIN_LOBBY_WITH_PING_DATA",\n    "data": {\n        "lobbyId": "55555:4v4:3",\n        "otherUserCxIds": [\n            "55555:aaa-bbb-ccc-ddd:asdfjkl"\n        ],\n        "isReady": false,\n        "extraJson": {},\n        "teamCode": "blue",\n        "pingData": {\n            "ca-central-1": 98,\n            "us-west-1": 123\n        }\n    }\n}\n'))))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lobbyId"),(0,r.kt)("td",{parentName:"tr",align:null},"The lobby instance to join.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"otherUserCxIds"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of other users (i.e. party members) to add to the lobby as well. The call will fail if all users can't be added.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isReady"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial ready-status of this user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extraJson"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial extra-data about this user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"teamCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Preferred team for this user, if applicable. Send ",(0,r.kt)("inlineCode",{parentName:"td"},'""')," or ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," for automatic assignment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pingData"),(0,r.kt)("td",{parentName:"tr",align:null},"Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retreive the list of regions for a given lobby type. Ping data is automatically passed in on the clients.")))))}g.isMDXComponent=!0}}]);