"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[31483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={},o="SetPacketTimeouts",c={unversionedId:"api/capi/client/setpackettimeouts",id:"api/capi/client/setpackettimeouts",title:"SetPacketTimeouts",description:"Overview",source:"@site/docs/api/2_capi/client/setpackettimeouts.md",sourceDirName:"api/2_capi/client",slug:"/api/capi/client/setpackettimeouts",permalink:"/braincloud-apiref/api/capi/client/setpackettimeouts",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/client/setpackettimeouts.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SetOldStyleStatusMessageErrorCallback",permalink:"/braincloud-apiref/api/capi/client/setoldstylestatusmessageerrorcallback"},next:{title:"SetPacketTimeoutsToDefault",permalink:"/braincloud-apiref/api/capi/client/setpackettimeoutstodefault"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("BrowserWindow"),m=p("Tabs"),d=p("TabItem"),k={toc:l};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setpackettimeouts"},"SetPacketTimeouts"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Sets the packet timeouts using a list of integers that represent timeout values in seconds for each packet retry. The first item in the list represents the timeout for the first packet attempt, the second for the second packet attempt, and so on."),(0,n.kt)("p",null,"The number of entries in this array determines how many packet retries will occur. By default, the packet timeout array is {15, 20, 35, 50}"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(u,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(d,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"var packetTimeouts = new List<int> { 15, 20, 35, 50 };\n_bc.SetPacketTimeouts(packetTimeouts);\n"))),(0,n.kt)(d,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<int> packetTimeouts;\npacketTimeouts.push_back(15);\npacketTimeouts.push_back(20);\npacketTimeouts.push_back(35);\npacketTimeouts.push_back(50);\n\n_bc->setPacketTimeouts(packetTimeouts);\n"))),(0,n.kt)(d,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSArray* packetTimeouts = @[@15, @20, @35, @50];\n[_bc setPacketTimeouts:packetTimeouts];\n"))),(0,n.kt)(d,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ArrayList<Integer> packetTimeouts = new ArrayList<Integer>(\n    Arrays.asList(15, 20, 35, 50));\n_bc.setPacketTimeouts(packetTimeouts);\n"))),(0,n.kt)(d,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.brainCloudManager._packetTimeouts = [15,20,35,50];\n"))),(0,n.kt)(d,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.brainCloudManager._packetTimeouts = [15,20,35,50];\n"))),(0,n.kt)(d,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"_bc.brainCloudManager._packetTimeouts = [15,20,35,50];\n"))))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"intervalInSeconds"),(0,n.kt)("td",{parentName:"tr",align:null},"The time between heartbeats in milliseconds")))))}b.isMDXComponent=!0}}]);