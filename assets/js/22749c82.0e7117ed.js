"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[37725],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},i="SmartSwitchAuthenticateApple",o={unversionedId:"api/wrapper/smartswitchauthenticateapple",id:"api/wrapper/smartswitchauthenticateapple",title:"SmartSwitchAuthenticateApple",description:"Overview",source:"@site/docs/api/1_wrapper/smartswitchauthenticateapple.md",sourceDirName:"api/1_wrapper",slug:"/api/wrapper/smartswitchauthenticateapple",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticateapple",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/1_wrapper/smartswitchauthenticateapple.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SmartSwitchAuthenticateAdvanced",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticateadvanced"},next:{title:"SmartSwitchAuthenticateEmailPassword",permalink:"/braincloud-apiref/api/wrapper/smartswitchauthenticateemailpassword"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("BrowserWindow"),d=c("Tabs"),m=c("TabItem"),h={toc:s};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smartswitchauthenticateapple"},"SmartSwitchAuthenticateApple"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type. "),(0,n.kt)("p",null,"In event the current session was previously a completely anonymous account, the smart switch will delete that profile (since completely anonymous accounts are irretrievable once you switch away from them). "),(0,n.kt)("p",null,"Use this function to keep a clean designflow from anonymous to signed profiles."),(0,n.kt)("p",null,"Authenticate the user with Sign in with Apple."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(m,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string appleUserId = "123456789";\nstring identityToken = "identityTokenFromApple";\nbool forceCreate = true;\n    \n_bc.SmartSwitchAuthenticateAple(\n    appleUserId, identityToken, forceCreate, SuccessCallback, FailureCallback);\n'))),(0,n.kt)(m,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char* appleUserId = "123456789";\nconst char* identityToken = "identityTokenFromApple";\nbool forceCreate = true;\n\n_bc->smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, this);\n'))),(0,n.kt)(m,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString * appleUserId = @"123456789";\nNSString * identityToken = @"identityTokenFromApple";\nBOOL forceCreate = true;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc smartSwitchAuthenticateApple]\n                appleUserId:appleUserId\n                identityToken:identityToken\n                forceCreate:forceCreate\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(m,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String appleUserId = "123456789";\nString identityToken = "identityTokenFromApple";\nboolean forceCreate = true;\nthis; // implements IServerCallback\n\n_bc.smartSwitchAuthenticateApple(\n    appleUserId,\n    identityToken,\n    forceCreate,\n    this);\n'))),(0,n.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var appleUserId = "123456789";\nvar identityToken = "identityTokenFromApple";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(m,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var appleUserId = "123456789";\nvar identityToken = "identityTokenFromApple";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(m,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var appleUserId = "123456789";\nvar identityToken = "identityTokenFromApple";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var appleUserId = "123456789";\nvar identityToken = "identityTokenFromApple";\nvar forceCreate = true;\n\n_bc.smartSwitchAuthenticateApple(appleUserId, identityToken, forceCreate, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"appleUserId"),(0,n.kt)("td",{parentName:"tr",align:null},"The user id of the authenticated user. It should match the ",(0,n.kt)("inlineCode",{parentName:"td"},"sub")," field of the identity token. This is the identifier that will be attached to the user's profile.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"identityToken"),(0,n.kt)("td",{parentName:"tr",align:null},"The JSON Web Token that represents the user's identity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"forceCreate"),(0,n.kt)("td",{parentName:"tr",align:null},"Should a new profile be created for this user if the account does not exist?")))))}k.isMDXComponent=!0}}]);