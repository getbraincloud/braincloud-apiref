"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[46288],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(b,o(o({ref:t},p),{},{components:a})):r.createElement(b,o({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o="EnableNetworkErrorMessageCaching",i={unversionedId:"api/capi/client/enablenetworkerrormessagecaching",id:"api/capi/client/enablenetworkerrormessagecaching",title:"EnableNetworkErrorMessageCaching",description:"Overview",source:"@site/docs/api/2_capi/client/enablenetworkerrormessagecaching.md",sourceDirName:"api/2_capi/client",slug:"/api/capi/client/enablenetworkerrormessagecaching",permalink:"/braincloud-apiref/api/capi/client/enablenetworkerrormessagecaching",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/client/enablenetworkerrormessagecaching.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"EnableLogging",permalink:"/braincloud-apiref/api/capi/client/enablelogging"},next:{title:"FlushCachedMessages",permalink:"/braincloud-apiref/api/capi/client/flushcachedmessages"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("BrowserWindow"),m=p("Tabs"),d=p("TabItem"),b={toc:s};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"enablenetworkerrormessagecaching"},"EnableNetworkErrorMessageCaching"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Enables the timeout message caching which is disabled by default. Once enabled, if a client side timeout is encountered (i.e. brainCloud server is unreachable presumably due to the client network being down) the SDK will do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"cache the currently queued messages to brainCloud"),(0,n.kt)("li",{parentName:"ol"},"call the network error callback"),(0,n.kt)("li",{parentName:"ol"},"then expect the app to call either:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"RetryCachedMessages() to retry sending to brainCloud"),(0,n.kt)("li",{parentName:"ul"},"FlushCachedMessages() to dump all messages in the queue.")))),(0,n.kt)("p",null,"Between steps 2 & 3, the app can prompt the user to retry connecting to brainCloud to determine whether to follow path 3a or 3b."),(0,n.kt)("p",null,"Note that if path 3a is followed, and another timeout is encountered, the process will begin all over again from step 1."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The brainCloud SDK will cache ",(0,n.kt)("em",{parentName:"p"},"all")," API calls sent when a timeout is encountered if this mechanism is enabled.\nThis effectively freezes all communication with brainCloud. Apps must call either RetryCachedMessages() or FlushCachedMessages() for the brainCloud SDK to resume sending messages.\nResetCommunication() will also clear the message cache.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(d,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"_bc.EnableNetworkErrorMessageCaching(true);\n"))),(0,n.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"_bc->enableNetworkErrorMessageCaching(true);\n"))),(0,n.kt)(d,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"[_bc enableNetworkErrorMessageCaching:true];\n"))),(0,n.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"_bc.enableNetworkErrorMessageCaching(true);\n"))),(0,n.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// N/A\n"))),(0,n.kt)(d,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// N/A\n"))),(0,n.kt)(d,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// N/A\n"))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"True if message should be cached on timeout")))))}g.isMDXComponent=!0}}]);