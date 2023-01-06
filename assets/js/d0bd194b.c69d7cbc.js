"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[18352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||g[m]||o;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},l="SmartSwitchAuthenticateGoogle",c={unversionedId:"api/wrapper/smartswitchauthenticategoogle",id:"api/wrapper/smartswitchauthenticategoogle",title:"SmartSwitchAuthenticateGoogle",description:"Overview",source:"@site/docs/api/1_wrapper/smartswitchauthenticategoogle.md",sourceDirName:"api/1_wrapper",slug:"/api/wrapper/smartswitchauthenticategoogle",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticategoogle",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/1_wrapper/smartswitchauthenticategoogle.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SmartSwitchAuthenticateGameCenter",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticategamecenter"},next:{title:"SmartSwitchAuthenticateGoogleOpenId",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticategoogleopenid"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=u("BrowserWindow"),g=u("Tabs"),m=u("TabItem"),d={toc:s};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smartswitchauthenticategoogle"},"SmartSwitchAuthenticateGoogle"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.\nIn event the current session was previously an anonymous account, the smart switch will delete that profile.\nUse this function to keep a clean designflow from anonymous to signed profiles"),(0,n.kt)("p",null,"Authenticate the user using a google user id (gXXX) and google authentication token."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(p,{mdxType:"BrowserWindow"},(0,n.kt)(g,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string googleId = "g123456789";\nstring token = "authTokenFromGoogle";\nbool forceCreate = true;\n    \nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("[Authenticate Success] {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("[Authenticate Failed] {0}  {1}  {2}", status, code, error));\n};\n_bc.SmartSwitchAuthenticateGoogle(\n    googleId, token, forceCreate,\n    successCallback, failureCallback);\n'))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char* googleId = "g123456789";\nconst char* token = "authTokenFromGoogle";\n\n_bc->smartSwitchAuthenticateGoogle(\n    googleId, token, true, this);\n'))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString* userID = @"g123456789";\nNSString* token = @"authTokenFromGoogle";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[_bc smartSwitchAuthenticateGoogle:userID\n                      token:token\n                forceCreate:true\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String googleId = "g123456789";\nString token = "authTokenFromGoogle";\n\n_bc.smartSwitchAuthenticateGoogle(\n    googleId, token, true, this);\n'))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var googleId = "g123456789";\nvar token = "authTokenFromGoogle";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateGoogle(googleId, token, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var googleId = "g123456789";\nvar token = "authTokenFromGoogle";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateGoogle(googleId, token, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var googleId = "g123456789";\nvar token = "authTokenFromGoogle";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateGoogle(googleId, token, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var googleId = "g123456789";\nvar token = "authTokenFromGoogle";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateGoogle(googleId, token, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"googleId"),(0,n.kt)("td",{parentName:"tr",align:null},"String representation of google userid (gXXX)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"googleToken"),(0,n.kt)("td",{parentName:"tr",align:null},"The authentication token derived via the google apis.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"forceCreate"),(0,n.kt)("td",{parentName:"tr",align:null},"Should a new profile be created for this user if the account does not exist?")))))}h.isMDXComponent=!0}}]);