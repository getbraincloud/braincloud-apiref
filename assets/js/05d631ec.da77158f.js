"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[27292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Release 2.3.0",date:"2015-01-30",tags:["release-history"]},o=void 0,i={permalink:"/braincloud-apiref/release/2015/01/30/release-2-3-0",source:"@site/release/2015-01-30-release-2-3-0/index.md",title:"Release 2.3.0",description:"We're pleased to announce the full public availability of brainCloud 2.3.0!",date:"2015-01-30T00:00:00.000Z",formattedDate:"January 30, 2015",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:1.235,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.3.0",date:"2015-01-30",tags:["release-history"]},prevItem:{title:"Release 2.4.0",permalink:"/braincloud-apiref/release/2015/02/13/release-2-4-0"},nextItem:{title:"Release 2.2.0",permalink:"/braincloud-apiref/release/2015/01/14/release-2-2-0"}},s={authorsImageUrls:[]},p=[],u={toc:p};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're pleased to announce the full public availability of ",(0,a.kt)("strong",{parentName:"p"},"brainCloud 2.3.0!")),(0,a.kt)("p",null,"New features in this release include:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Highlights")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"E-mail\xa0Identity improvements")," -\xa0you asked, we\xa0delivered\xa0-\xa0brainCloud\xa0now supports ",(0,a.kt)("strong",{parentName:"li"},"E-mail Validation")," for those of you using our E-mail + Password Identity Authentication. \xa0We've added ",(0,a.kt)("strong",{parentName:"li"},"Forgotten Password")," flows as well - all customizable with your own text and branding."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Segment Definitions"),"\xa0- we've completely re-done our Segment\xa0design screens, made them simpler and more flexible,\xa0while vastly improving the underlying data structures that represent segment criteria. \xa0This was necessary work to support new segment features to come.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note -\xa0the new segment data structures aren't compatible with how things were being defined in 2.2.X and previous. \xa0As a result, we've disabled any previously defined Segments - apologies about that. \xa0You'll need to select each of your segments, quickly recreate the criteria, and save\xa0them. \xa0Once again, apologies, but this was a one-time situation that couldn't be helped (and it's honestly very quick to fix).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Portal\xa0Changes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Design | Core Game Info | E-mail Authentication")," - options for customizing the e-mails sent for validation and forgotten passwords. \xa0Includes a ",(0,a.kt)("strong",{parentName:"li"},"[Test]")," button to send a test e-mail to validate (note that the test e-mails don't actually contain the URL links)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Design | Segments")," - screens have been completely redone")),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(57323).Z},(0,a.kt)("img",{alt:"VIPs Leaving Segment",src:n(30426).Z,width:"1024",height:"410"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API Changes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New Forgotten Password API for EmailPassword Authentication")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Misc Fixes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixes to ",(0,a.kt)("strong",{parentName:"li"},"Import Configuration")," to properly re-evaluate level caps if new XP levels\xa0have been added"),(0,a.kt)("li",{parentName:"ul"},"Misc fixes and performance improvements")))}c.isMDXComponent=!0},57323:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/vip_leaving_segment-8df4c8cb5540c250404644d9cfd2d4a8.png"},30426:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/vip_leaving_segment-1024x410-598dff256e9056ae57419fe0706aeab4.png"}}]);