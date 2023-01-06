"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[29967],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return a?l.createElement(b,o(o({ref:t},c),{},{components:a})):l.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<n;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>v,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var l=a(87462),r=(a(67294),a(3905));const n={},o="SysDeleteGlobalFile",i={unversionedId:"api/s2s/globalfile/sysdeleteglobalfile",id:"api/s2s/globalfile/sysdeleteglobalfile",title:"SysDeleteGlobalFile",description:"Overview",source:"@site/docs/api/4_s2s/globalfile/sysdeleteglobalfile.md",sourceDirName:"api/4_s2s/globalfile",slug:"/api/s2s/globalfile/sysdeleteglobalfile",permalink:"/braincloud-apiref/api/s2s/globalfile/sysdeleteglobalfile",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/4_s2s/globalfile/sysdeleteglobalfile.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysDeleteFolder",permalink:"/braincloud-apiref/api/s2s/globalfile/sysdeletefolder"},next:{title:"SysDeleteGlobalFiles",permalink:"/braincloud-apiref/api/s2s/globalfile/sysdeleteglobalfiles"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),b=c("TabItem"),f={toc:p};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysdeleteglobalfile"},"SysDeleteGlobalFile"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Deletes the specified global file."),(0,r.kt)(d,{service_name:"globalFileV3",operation_name:"SYS_DELETE_GLOBAL_FILE",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// S2S call: to view example, switch to the Cloud Code or Raw tab.\n"))),(0,r.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var fileId = "hjvfsghguhuhrtghgh";\nvar version = 1;\nvar filename = "testFile2.txt";\n\nvar globalFileProxy = bridge.getGlobalFileV3ServiceProxy();\n\nvar postResult = globalFileProxy.sysDeleteGlobalFile(fileId, version, filename );\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,r.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "globalFileV3",\n    "operation": "SYS_DELETE_GLOBAL_FILE",\n    "data": {\n        "fileId": "8d2e30b0-6308-4aeb-ac6a-68e4a458365b",\n        "version": 1,\n        "filename": "testFile2.txt"\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "fileDetails": {\n            "treeId": "",\n            "fileName": "testFile3.txt",\n            "version": 1,\n            "fileId": "8d2e30b0-6308-4aeb-ac6a-68e4a458365b"\n        }\n    }\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileId"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"The version of the file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filename"),(0,r.kt)("td",{parentName:"tr",align:null},"The filename of the file (provided as a check)")))))}v.isMDXComponent=!0}}]);