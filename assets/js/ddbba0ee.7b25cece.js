"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[61909],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),b=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=b(a),u=r,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=a[b];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>l,metadata:()=>i,toc:()=>b});var n=a(87462),r=(a(67294),a(3905));const l={},o="GetVisibleLobbyInstances",i={unversionedId:"api/s2s/lobby/getvisiblelobbyinstances",id:"api/s2s/lobby/getvisiblelobbyinstances",title:"GetVisibleLobbyInstances",description:"Overview",source:"@site/docs/api/4_s2s/lobby/getvisiblelobbyinstances.md",sourceDirName:"api/4_s2s/lobby",slug:"/api/s2s/lobby/getvisiblelobbyinstances",permalink:"/braincloud-apiref/api/s2s/lobby/getvisiblelobbyinstances",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/lobby/getvisiblelobbyinstances.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"GetLobbyData",permalink:"/braincloud-apiref/api/s2s/lobby/getlobbydata"},next:{title:"SysDisbandLobby",permalink:"/braincloud-apiref/api/s2s/lobby/sysdisbandlobby"}},s={},b=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("PartialServop"),d=p("BrowserWindow"),u=p("Tabs"),m=p("TabItem"),y={toc:b};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getvisiblelobbyinstances"},"GetVisibleLobbyInstances"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Gets a map keyed by rating of the visible lobby instances matching the given type and rating range."),(0,r.kt)(c,{service_name:"lobby",operation_name:"GET_VISIBLE_LOBBY_INSTANCES",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var lobbyType = "Relay_lobbyT_v2";\nvar minRating = 10;\nvar maxRating = 100;\nvar lobbyProxy = bridge.getLobbyServiceProxy();\n\nvar postResult = lobbyProxy.getVisibleLobbyInstances(lobbyType, minRating, maxRating);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "lobby",\n    "operation": "GET_VISIBLE_LOBBY_INSTANCES",\n    "data": {\n        "lobbyType": "Relay_lobbyT_v2",\n        "minRating": 10,\n        "maxRating": 100\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "lobbiesByRating": {\n      "20.0": [\n        {\n          "id": "23782:Relay_lobbyT_v2:2",\n          "lobbyType": "Relay_lobbyT_v2",\n          "state": "setup",\n          "rating": 20,\n          "desc": "starts as soon as 1 player is ready",\n          "owner": {\n            "profileId": "10b6d6fa-0aa6-43b0-a7b3-48aff2d13312",\n            "name": "",\n            "rating": 0,\n            "pic": null,\n            "cxId": "23782:10b6d6fa-0aa6-43b0-a7b3-48aff2d13312:52kc0h19k0pnnjhnrp8pug7udd"\n          },\n          "numMembers": 1,\n          "maxMembers": 8\n        }\n      ]\n    }\n  },\n  "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lobbyType"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of lobby to look for. Lobby types are defined in the portal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minRating"),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum skill rating to use for finding the lobbies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxRating"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum skill rating to use for finding the lobbies.")))))}v.isMDXComponent=!0}}]);