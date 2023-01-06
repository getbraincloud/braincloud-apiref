"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[67960],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>m});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function d(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),s=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return a?t.createElement(m,l(l({ref:r},c),{},{components:a})):t.createElement(m,l({ref:r},c))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d[u]="string"==typeof e?e:n,l[1]=d;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},36704:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var t=a(87462),n=(a(67294),a(3905));const o={},l="GetGlobalLeaderboardView",d={unversionedId:"api/capi/leaderboard/getgloballeaderboardview",id:"api/capi/leaderboard/getgloballeaderboardview",title:"GetGlobalLeaderboardView",description:"Overview",source:"@site/docs/api/2_capi/leaderboard/getgloballeaderboardview.md",sourceDirName:"api/2_capi/leaderboard",slug:"/api/capi/leaderboard/getgloballeaderboardview",permalink:"/braincloud-apiref/api/capi/leaderboard/getgloballeaderboardview",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/leaderboard/getgloballeaderboardview.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetGlobalLeaderboardVersions",permalink:"/braincloud-apiref/api/capi/leaderboard/getgloballeaderboardversions"},next:{title:"GetGlobalLeaderboardViewByVersion",permalink:"/braincloud-apiref/api/capi/leaderboard/getgloballeaderboardviewbyversion"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},u=c("PartialServop"),b=c("BrowserWindow"),p=c("Tabs"),m=c("TabItem"),f={toc:s};function v(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},f,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getgloballeaderboardview"},"GetGlobalLeaderboardView"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Method returns a view of global leaderboard results that centers on the current player."),(0,n.kt)("p",null,"Leaderboards entries contain the player's score and optionally, some user-defined data associated with the score."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Pro Tip: The best way to get just the current player's score is to use GetGlobalLeaderboardView and pass in 0 to 'beforeCount' and 'afterCount'")),(0,n.kt)(u,{service_name:"leaderboard",operation_name:"GET_GLOBAL_LEADERBOARD_VIEW",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(b,{mdxType:"BrowserWindow"},(0,n.kt)(p,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string leaderboardId = "default";\nSortOrder sortOrder = BrainCloudSocialLeaderboard.SortOrder.HIGH_TO_LOW;\nint beforeCount = 3;\nint afterCount = 4;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.LeaderboardService.GetGlobalLeaderboardView(leaderboardId, sortOrder, beforeCount, afterCount, successCallback, failureCallback);\n'))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *leaderboardId = "default";\nSortOrder sortOrder = HIGH_TO_LOW;\nint beforeCount = 3;\nint afterCount = 4;\n_bc->getLeaderboardService()->getGlobalLeaderboardView(leaderboardId, sortOrder, beforeCount, afterCount, this);\n'))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *leaderboardId = @"default";\nSortOrder sortOrder = HIGH_TO_LOW;\nint beforeCount = 3;\nint afterCount = 4;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc leaderboardService] getGlobalLeaderboardView:leaderboardId\n                  sortOrder:sortOrder\n                beforeCount:beforeCount\n                 afterCount:afterCount\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String leaderboardId = "default";\nSortOrder sortOrder = BrainCloudSocialLeaderboardService.SortOrder.HIGH_TO_LOW;\nint beforeCount = 3;\nint afterCount = 4;\nthis; // implements IServerCallback\n\n_bc.getLeaderboardService().getGlobalLeaderboardView(leaderboardId, sortOrder, beforeCount, afterCount, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var leaderboardId = "default";\nvar sortOrder = "HIGH_TO_LOW";\nvar beforeCount = 3;\nvar afterCount = 4;\n\n_bc.leaderboard.getGlobalLeaderboardView(leaderboardId, sortOrder, beforeCount, afterCount, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var leaderboardId = "default";\nvar sortOrder = "HIGH_TO_LOW";\nvar beforeCount = 3;\nvar afterCount = 4;\nvar leaderboardProxy = bridge.getLeaderboardServiceProxy();\n\nvar postResult = leaderboardProxy.getGlobalLeaderboardView(leaderboardId, sortOrder, beforeCount, afterCount);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "leaderboard",\n    "operation": "GET_GLOBAL_LEADERBOARD_VIEW",\n    "data": {\n        "leaderboardId": "default",\n        "sort": "HIGH_TO_LOW",\n        "beforeCount": 3,\n        "afterCount": 4,\n        "versionId": -1\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "leaderboardId": "abc",\n        "moreBefore": false,\n        "timeBeforeReset": 48085996,\n        "leaderboard": [\n            {\n                "playerId": "8c86f306-73ea-4536-9c92-aba086064d2c",\n                "score": 10,\n                "data": {\n                    "nickname": "batman"\n                },\n                "createdAt": 1433863814394,\n                "updatedAt": 1433863814394,\n                "index": 0,\n                "rank": 1,\n                "name": "",\n                "summaryFriendData": {\n                    "xp": 12,\n                    "favColour": "red"\n                },\n                "pictureUrl": null\n            },\n            {\n                "playerId": "ab21c0af-9d3e-4a81-b3c8-ddc1fb77d9a1",\n                "score": 8,\n                "data": {\n                    "nickname": "robin"\n                },\n                "createdAt": 1433864253221,\n                "updatedAt": 1433864253221,\n                "index": 1,\n                "rank": 2,\n                "name": "",\n                "summaryFriendData": null,\n                "pictureUrl": null\n            }\n        ],\n        "server_time": 1433864314004,\n        "moreAfter": false\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leaderboardId"),(0,n.kt)("td",{parentName:"tr",align:null},"The id of the leaderboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortOrder"),(0,n.kt)("td",{parentName:"tr",align:null},'Sort order of page. ("HIGH_TO_LOW" or "LOW_TO_HIGH")')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"beforeCount"),(0,n.kt)("td",{parentName:"tr",align:null},"The count of number of players before the current player to include.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"afterCount"),(0,n.kt)("td",{parentName:"tr",align:null},"The count of number of players after the current player to include.")))))}v.isMDXComponent=!0}}]);