"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[32526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"BlockIfBanned script",date:"2018-08-17"},c=void 0,l={unversionedId:"learn/cloud-code-central/handy-cloud-code-scripts/example-blockifbanned-script/index",id:"learn/cloud-code-central/handy-cloud-code-scripts/example-blockifbanned-script/index",title:"BlockIfBanned script",description:"Purpose",source:"@site/docs/learn/4_cloud-code-central/handy-cloud-code-scripts/example-blockifbanned-script/index.md",sourceDirName:"learn/4_cloud-code-central/handy-cloud-code-scripts/example-blockifbanned-script",slug:"/learn/cloud-code-central/handy-cloud-code-scripts/example-blockifbanned-script/",permalink:"/braincloud-apiref/learn/cloud-code-central/handy-cloud-code-scripts/example-blockifbanned-script/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/4_cloud-code-central/handy-cloud-code-scripts/example-blockifbanned-script/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672679892,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"BlockIfBanned script",date:"2018-08-17"},sidebar:"learnSidebar",previous:{title:"DeleteListOfUsers script",permalink:"/braincloud-apiref/learn/cloud-code-central/handy-cloud-code-scripts/deletelistofusers-script/"},next:{title:"PostToLeaderboards script",permalink:"/braincloud-apiref/learn/cloud-code-central/handy-cloud-code-scripts/example-posttoleaderboards-script/"}},i={},s=[{value:"Purpose",id:"purpose",level:3},{value:"Script",id:"script",level:3},{value:"Usage / Setup",id:"usage--setup",level:3}],p={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"This script blocks a banned user from attempting to log into the app."),(0,a.kt)("p",null,'Banned users will be flagged by attaching a "banned" attribute to them, and setting it to "true." The script will optionally look for a "ban_reason" attribute to return in the response.'),(0,a.kt)("p",null,"Attributes can be assigned to users via the ",(0,a.kt)("a",{parentName:"p",href:"/api/capi/playerstate/updateattributes"},"UpdateAttributes()"),"\xa0 API call, or directly via the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.braincloudservers.com/admin/dashboard#/monitoring/player-attributes"},"Monitoring | User Monitoring | Attributes")," page of the portal."),(0,a.kt)("h3",{id:"script"},"Script"),(0,a.kt)("p",null,"Click ",(0,a.kt)("a",{target:"_blank",href:r(78454).Z},"BlockIfBanned.ccjs.zip")," to download the file."),(0,a.kt)("h3",{id:"usage--setup"},"Usage / Setup"),(0,a.kt)("p",null,"To configure this script, simply import it into your app."),(0,a.kt)("p",null,'The script assumes any authenticate call made with a profile containing a "banned":\xa0"true" user attribute should be blocked.'),(0,a.kt)("p",null,"Set the script to run on every authenticate call by setting it as a ",(0,a.kt)("a",{parentName:"p",href:"/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial4-pre-and-post-hooks/"},"Post API Hook")," on Authenticate."))}d.isMDXComponent=!0},78454:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/BlockIfBanned.ccjs-afceb92e4edab04a1be964ef93ed930d.zip"}}]);