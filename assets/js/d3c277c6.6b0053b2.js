"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[32284],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>b});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),s=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=s(e.components);return r.createElement(o.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),y=n,b=d["".concat(o,".").concat(y)]||d[y]||u[y]||l;return t?r.createElement(b,c(c({ref:a},p),{},{components:t})):r.createElement(b,c({ref:a},p))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=y;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[d]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<l;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},92731:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const l={},c="RegisterRelayCallback",i={unversionedId:"api/capi/relay/registerrelaycallback",id:"api/capi/relay/registerrelaycallback",title:"RegisterRelayCallback",description:"Overview",source:"@site/docs/api/2_capi/relay/registerrelaycallback.md",sourceDirName:"api/2_capi/relay",slug:"/api/capi/relay/registerrelaycallback",permalink:"/braincloud-apiref/api/capi/relay/registerrelaycallback",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/relay/registerrelaycallback.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"IsConnected",permalink:"/braincloud-apiref/api/capi/relay/isconnected"},next:{title:"RegisterSystemCallback",permalink:"/braincloud-apiref/api/capi/relay/registersystemcallback"}},o={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2}],p=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},d=p("BrowserWindow"),u=p("Tabs"),y=p("TabItem"),b={toc:s};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"registerrelaycallback"},"RegisterRelayCallback"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Register callback for relay messages coming from peers."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(d,{mdxType:"BrowserWindow"},(0,n.kt)(u,{mdxType:"Tabs"},(0,n.kt)(y,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'//For the client library version 4.5.6, it now includes a netId parameter.\nstatic void relayCallback(short netId, byte[] data)\n{\n    string message = Encoding.ASCII.GetString(data, 0, data.Length);\n    Console.WriteLine("netId: " + netId);\n    Console.WriteLine("relayCallback: " + message);\n}\n\n//For the client library version 4.5.5 and older, it only has one data parameter.\nstatic void relayCallback(byte[] data)\n{\n    string message = Encoding.ASCII.GetString(data, 0, data.Length);\n    Console.WriteLine("relayCallback: " + message);\n}\n_bc.RelayService.RegisterRelayCallback(relayCallback);\n'))),(0,n.kt)(y,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getRelayService()->RegisterRelayCallback(this);\n"))),(0,n.kt)(y,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getRelayService()->RegisterRelayCallback(this);\n"))),(0,n.kt)(y,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getRelayService()->RegisterRelayCallback(this);\n"))),(0,n.kt)(y,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->getRelayService()->RegisterRelayCallback(this);\n"))),(0,n.kt)(y,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))),(0,n.kt)(y,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},"// N/A\n"))))))}m.isMDXComponent=!0}}]);