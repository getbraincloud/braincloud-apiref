"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[7443],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>m});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),d=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=d(e.components);return t.createElement(i.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?t.createElement(m,l(l({ref:r},c),{},{components:a})):t.createElement(m,l({ref:r},c))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<o;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}b.displayName="MDXCreateElement"},171:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=a(87462),n=(a(67294),a(3905));const o={},l="ListAllLeaderboards",s={unversionedId:"api/capi/leaderboard/listallleaderboards",id:"api/capi/leaderboard/listallleaderboards",title:"ListAllLeaderboards",description:"Overview",source:"@site/docs/api/2_capi/leaderboard/listallleaderboards.md",sourceDirName:"api/2_capi/leaderboard",slug:"/api/capi/leaderboard/listallleaderboards",permalink:"/braincloud-apiref/api/capi/leaderboard/listallleaderboards",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/leaderboard/listallleaderboards.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetSocialLeaderboardByVersion",permalink:"/braincloud-apiref/api/capi/leaderboard/getsocialleaderboardbyversion"},next:{title:"PostScoreToDynamicGroupLeaderboardDaysUTC",permalink:"/braincloud-apiref/api/capi/leaderboard/postscoretodynamicgroupleaderboarddaysutc"}},i={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],c=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},p=c("PartialServop"),u=c("BrowserWindow"),b=c("Tabs"),m=c("TabItem"),v={toc:d};function f(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},v,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"listallleaderboards"},"ListAllLeaderboards"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Method returns list of all the leaderboards from the server based on gameId of the user."),(0,n.kt)(p,{service_name:"leaderboard",operation_name:"LIST_ALL_LEADERBOARDS",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(b,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'SuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.LeaderboardService.ListAllLeaderboards(successCallback, failureCallback);\n'))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getLeaderboardService()->listAllLeaderboards(this);\n"))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"BCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc leaderboardService] listAllLeaderboards:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n"))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'this; // implements IServerCallback\n\n_bc.getLeaderboardService().listAllLeaderboards(this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'\n_bc.leaderboard.listAllLeaderboards(result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"var leaderboardProxy = bridge.getLeaderboardServiceProxy();\n\nvar postResult = leaderboardProxy.listAllLeaderboards();\nif (postResult.status == 200) {\n    // Success!\n}\n"))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "leaderboard",\n    "operation": "LIST_ALL_LEADERBOARDS",\n    "data": {}\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "leaderboardListCount": 3,\n        "leaderboardList": [\n            {\n                "leaderboardId": "default",\n                "leaderboardType": "HIGH_VALUE",\n                "resetAt": 1473793200000,\n                "rotationType": "WEEKLY",\n                "currentVersionId": 1,\n                "maxRetainedCount": 5,\n                "retainedVersionsCount": 1,\n                "data": {}\n            },\n            {\n                "leaderboardId": "default1",\n                "leaderboardType": "HIGH_VALUE",\n                "resetAt": 1517428800000,\n                "rotationType": "WEEKLY",\n                "currentVersionId": 1,\n                "maxRetainedCount": 2,\n                "retainedVersionsCount": 1,\n                "data": {\n                    "retainedCount": 7\n                }\n            }\n        ]\n    }\n}\n'))))}f.isMDXComponent=!0}}]);