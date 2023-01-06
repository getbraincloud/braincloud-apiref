"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[66989],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>w});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),l=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},u=function(t){var e=l(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(r),d=n,w=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(w,c(c({ref:e},u),{},{components:r})):a.createElement(w,c({ref:e},u))}));function w(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,c=new Array(i);c[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[p]="string"==typeof t?t:n,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81292:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={},c="SmartSwitchAuthenticateTwitter",s={unversionedId:"api/wrapper/smartswitchauthenticatetwitter",id:"api/wrapper/smartswitchauthenticatetwitter",title:"SmartSwitchAuthenticateTwitter",description:"Overview",source:"@site/docs/api/1_wrapper/smartswitchauthenticatetwitter.md",sourceDirName:"api/1_wrapper",slug:"/api/wrapper/smartswitchauthenticatetwitter",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticatetwitter",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/1_wrapper/smartswitchauthenticatetwitter.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SmartSwitchAuthenticateSteam",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticatesteam"},next:{title:"SmartSwitchAuthenticateUltra",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticateultra"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},p=u("BrowserWindow"),m=u("Tabs"),d=u("TabItem"),w={toc:l};function h(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},w,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smartswitchauthenticatetwitter"},"SmartSwitchAuthenticateTwitter"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.\nIn event the current session was previously an anonymous account, the smart switch will delete that profile.\nUse this function to keep a clean designflow from anonymous to signed profiles"),(0,n.kt)("p",null,"Authenticate the user using a Twitter user ID, authentication token, and secret from Twitter"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(p,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(d,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string twitterId = "userTwitterId";\nstring token = "userAuthToken";\nstring secret = "secretFromTwitterApi";\nbool forceCreate = true;\n    \nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("[Authenticate Success] {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));\n};\n_bc.SmartSwitchAuthenticateTwitter(\n    twitterId, token, secret, forceCreate,\n    successCallback, failureCallback);\n'))),(0,n.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char* twitterId = "userTwitterId";\nconst char* token = "userAuthToken";\nconst char* secret = "secretFromTwitterApi";\n\n_bc->smartSwitchAuthenticateTwitter(\n    twitterId, token, secret, true, this);\n'))),(0,n.kt)(d,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString* twitterId = @"userTwitterId";\nNSString* token = @"userAuthToken";\nNSString* secret = @"secretFromTwitterApi";\nBOOL forceCreate = true;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n    [_bc smartSwitchAuthenticateTwitter:userID\n                      token:token\n                     secret:secret\n                forceCreate:forceCreate\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String twitterId = "userTwitterId";\nString token = "userAuthToken";\nString secret = "secretFromTwitterApi";\n\n_bc.smartSwitchAuthenticateTwitter(\n    twitterId, token, secret, true, this);\n'))),(0,n.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var twitterId = "userTwitterId";\nvar token = "userAuthToken";\nvar secret = "secretFromTwitterApi";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateTwitter(twitterId, token, secret, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(d,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var twitterId = "userTwitterId";\nvar token = "userAuthToken";\nvar secret = "secretFromTwitterApi";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateTwitter(twitterId, token, secret, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(d,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var twitterId = "userTwitterId";\nvar token = "userAuthToken";\nvar secret = "secretFromTwitterApi";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateTwitter(twitterId, token, secret, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var twitterId = "userTwitterId";\nvar token = "userAuthToken";\nvar secret = "secretFromTwitterApi";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateTwitter(twitterId, token, secret, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userId"),(0,n.kt)("td",{parentName:"tr",align:null},"String representation of Twitter user ID")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"token"),(0,n.kt)("td",{parentName:"tr",align:null},"The authentication token derived via the Twitter APIs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"secret"),(0,n.kt)("td",{parentName:"tr",align:null},"The secret given when attempting to link with Twitter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"forceCreate"),(0,n.kt)("td",{parentName:"tr",align:null},"Should a new profile be created for this user if the account does not exist?")))))}h.isMDXComponent=!0}}]);