"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[1559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="SmartSwitchAuthenticateNintendo",c={unversionedId:"api/wrapper/smartswitchauthenticatenintendo",id:"api/wrapper/smartswitchauthenticatenintendo",title:"SmartSwitchAuthenticateNintendo",description:"Overview",source:"@site/docs/api/1_wrapper/smartswitchauthenticatenintendo.md",sourceDirName:"api/1_wrapper",slug:"/api/wrapper/smartswitchauthenticatenintendo",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticatenintendo",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/1_wrapper/smartswitchauthenticatenintendo.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SmartSwitchAuthenticateGoogleOpenId",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticategoogleopenid"},next:{title:"SmartSwitchAuthenticateOculus",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticateoculus"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=p("PartialServop"),d=p("BrowserWindow"),m=p("Tabs"),h=p("TabItem"),b={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smartswitchauthenticatenintendo"},"SmartSwitchAuthenticateNintendo"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type. "),(0,r.kt)("p",null,"In event the current session was previously a completely anonymous account, the smart switch will delete that profile (since completely anonymous accounts are irretrievable once you switch away from them). "),(0,r.kt)("p",null,"Use this function to keep a clean designflow from anonymous to signed profiles."),(0,r.kt)("p",null,"Authenticate the user on Nintendo Switch."),(0,r.kt)(u,{service_name:"authenticationV2",operation_name:"AUTHENTICATE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(h,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string nintendoAccountId = "nsaid";  // Network Services Account ID\nstring nintendoAuthToken = "nsaToken";\nbool forceCreate = true;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.SmartSwitchAuthenticateNintendo(\n    nintendoAccountId, nintendoAuthToken, forceCreate, successCallback, failureCallback);\n'))),(0,r.kt)(h,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char* nintendoAccountId = "nsaid";  // Network Services Account ID\nconst char* nintendoAuthToken = "nsaToken";\nbool forceCreate = true;\n\n_bc->smartSwitchAuthenticateNintendo(\n    nintendoAccountId,\n    nintendoAuthToken,\n    forceCreate,\n    this);\n'))),(0,r.kt)(h,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// N/A\n"))),(0,r.kt)(h,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// N/A\n"))),(0,r.kt)(h,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// N/A\n"))),(0,r.kt)(h,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,r.kt)(h,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "vcPurchased": 0,\n        "experiencePoints": 100,\n        "refundCount": 0,\n        "playerSessionExpiry": 60,\n        "server_time": 1464621990155,\n        "experienceLevel": 0,\n        "currency": {\n            "credits": {\n                "purchased": 0,\n                "balance": 12211,\n                "consumed": 133,\n                "awarded": 12344\n            }\n        },\n        "abTestingId": 8,\n        "statistics": {\n            "gamesWon": 0\n        },\n        "id": "323e861-b749-4ce4-a57a-175232e21b5d",\n        "createdAt": 1459439058035,\n        "profileId": "323e861-b749-4ce4-a57a-175232e21b5d",\n        "newUser": "false",\n        "xpCapped": false,\n        "sent_events": [],\n        "timeZoneOffset": -5,\n        "playerName": "",\n        "vcClaimed": 0,\n        "parentProfileId": null,\n        "rewards": {\n            "rewardDetails": {},\n            "rewards": {},\n            "currency": {}\n        },\n        "countryCode": "ca",\n        "loginCount": 16,\n        "emailAddress": "",\n        "previousLogin": 1464621979514,\n        "incoming_events": [],\n        "lastLogin": 1464621990118,\n        "languageCode": "en",\n        "pictureUrl": null,\n        "sessionId": "v3grtg3ve0a089pekk8lneuk8k",\n        "amountSpent": 0\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nintendoAccountId"),(0,r.kt)("td",{parentName:"tr",align:null},"The Nintendo Network Services Account (NSA) ID for the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nintendoAuthToken"),(0,r.kt)("td",{parentName:"tr",align:null},"An NSA ID token retrieved via the NintendoSDK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forceCreate"),(0,r.kt)("td",{parentName:"tr",align:null},"Should a new profile be created for this user if the account does not exist?")))))}k.isMDXComponent=!0}}]);