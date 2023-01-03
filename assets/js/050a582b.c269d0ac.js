"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[48702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Release 2.1.0",date:"2014-12-12",tags:["release-history"]},i=void 0,l={permalink:"/braincloud-apiref/release/2014/12/12/release-2-1-0",source:"@site/release/2014-12-12-release-2-1-0/index.md",title:"Release 2.1.0",description:"We're pleased to announce the full public availability\xa0of brainCloud 2.1.0!",date:"2014-12-12T00:00:00.000Z",formattedDate:"December 12, 2014",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:.95,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.1.0",date:"2014-12-12",tags:["release-history"]},prevItem:{title:"Release 2.2.0",permalink:"/braincloud-apiref/release/2015/01/14/release-2-2-0"},nextItem:{title:"Release 2.0.0",permalink:"/braincloud-apiref/release/2014/11/11/release-2-0-0"}},s={authorsImageUrls:[]},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We're pleased to announce the full public availability\xa0of ",(0,a.kt)("strong",{parentName:"p"},"brainCloud 2.1.0"),"!"),(0,a.kt)("p",null,"New features in this release include:"),(0,a.kt)("p",null,"API Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Client library version and game version verification is now working properly"),(0,a.kt)("li",{parentName:"ul"},"Platform constants changed for Windows Phone and Mac - removed versioning"),(0,a.kt)("li",{parentName:"ul"},"C++ library now easier to integrate into your project (fixed 64 bit iOS targets and upgraded jsoncpp to 1.0.0)"),(0,a.kt)("li",{parentName:"ul"},"C++ and C# client libraries improved to use additional enums/structures for certain method calls"),(0,a.kt)("li",{parentName:"ul"},"Cocos 2d-x example posted to tutorials section"),(0,a.kt)("li",{parentName:"ul"},"Misc fixes and improvements")),(0,a.kt)("p",null,"Portal/Server Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Player monitoring - can now reset player's segments, promotions, and associated criteria data to facilitate easier testing"),(0,a.kt)("li",{parentName:"ul"},"Request / Response log now includes inner status codes"),(0,a.kt)("li",{parentName:"ul"},"Cloud code logger object added to allow easier debugging of scripts"),(0,a.kt)("li",{parentName:"ul"},"Authentication exceptions now log the profile id"),(0,a.kt)("li",{parentName:"ul"},"Anonymous identity segment criteria now applies to users who ","*","only","*"," have an anonymous identity"),(0,a.kt)("li",{parentName:"ul"},"Automated promotions improved"),(0,a.kt)("li",{parentName:"ul"},"Javascript/image/page caching issues fixed"),(0,a.kt)("li",{parentName:"ul"},"Misc fixes and improvements")),(0,a.kt)("p",null,"Plus we've refreshed the look of our Apidocs portal, and continue to add new content."),(0,a.kt)("p",null,"Check it out at ",(0,a.kt)("a",{parentName:"p",href:"/learn/introduction/"},"brainCloud Docs")))}c.isMDXComponent=!0}}]);