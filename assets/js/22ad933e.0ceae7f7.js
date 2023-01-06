"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[19168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(v,l(l({ref:t},c),{},{components:r})):a.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},l="PostJsonOffboard",p={unversionedId:"api/cc/httpclient/postjsonoffboard",id:"api/cc/httpclient/postjsonoffboard",title:"PostJsonOffboard",description:"Overview",source:"@site/docs/api/3_cc/httpclient/postjsonoffboard.md",sourceDirName:"api/3_cc/httpclient",slug:"/api/cc/httpclient/postjsonoffboard",permalink:"/braincloud-apiref/api/cc/httpclient/postjsonoffboard",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/3_cc/httpclient/postjsonoffboard.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"PostFormResponseText",permalink:"/braincloud-apiref/api/cc/httpclient/postformresponsetext"},next:{title:"PostJsonResponseJson",permalink:"/braincloud-apiref/api/cc/httpclient/postjsonresponsejson"}},s={},i=[{value:"Overview",id:"overview",level:2},{value:"Error reason codes",id:"error-reason-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=c("PartialServop"),u=c("BrowserWindow"),m=c("Tabs"),v=c("TabItem"),b={toc:i};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postjsonoffboard"},"PostJsonOffboard"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Queues a JSON formatted document to be posted via HTTP, but does not wait for it to complete. This is useful for calls that you assume will succeed, but you don't want to take the time to wait for them to complete."),(0,n.kt)("p",null,"Note - if the far-end service returns anything other than a 200 response, an error will be written to the ",(0,n.kt)("strong",{parentName:"p"},"Monitoring | Global Monitoring | Recent Errors")," log."),(0,n.kt)("h3",{id:"error-reason-codes"},"Error reason codes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"40443"),(0,n.kt)("td",{parentName:"tr",align:null},"Processing exception (message): Invalid service code. Ensure the Web Service has been configured")))),(0,n.kt)(d,{service_name:"httpClient",operation_name:"POST_JSON_OFFBOARD",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"//Switch to CC tab\n"))),(0,n.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var serviceCode = "webService";\nvar path = "resource/dir";\nvar query = {\n    "parmName": "value"\n};\nvar headers = {\n    "headerName": "value"\n};\nvar json = {\n    "key": "value"\n};\nvar httpClientProxy = bridge.getHttpClientServiceProxy();\n\nvar postResult = httpClientProxy.postJsonOffboard(serviceCode, path, query, headers, json);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var serviceCode = "webService";\nvar path = "resource/dir";\nvar query = {\n    "parmName": "value"\n};\nvar headers = {\n    "headerName": "value"\n};\nvar json = {\n    "key": "value"\n};\nvar httpClientProxy = bridge.getHttpClientServiceProxy();\n\nvar postResult = httpClientProxy.postJsonOffboard(serviceCode, path, query, headers, json);\nif (postResult.status == 200) {\n    // Success!\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": null,\n  "status": 200\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"serviceCode"),(0,n.kt)("td",{parentName:"tr",align:null},"Service code of the external service configured in the Cloud Code - Web Services section of the portal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"Path to append to the Base URL of the service")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"Map of query parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"headers"),(0,n.kt)("td",{parentName:"tr",align:null},"Map of extra headers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"json"),(0,n.kt)("td",{parentName:"tr",align:null},"JSON formatted data to post")))))}f.isMDXComponent=!0}}]);