"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[2051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={title:"Release 2.9.0",date:"2015-05-29",tags:["release-history"]},o=void 0,l={permalink:"/braincloud-apiref/release/2015/05/29/release-2-9-0",source:"@site/release/2015-05-29-release-2-9-0/index.md",title:"Release 2.9.0",description:"In celebration of this week's\xa0Ottawa International Games Conference (OIGC), it's brainCloud Release 2.9!",date:"2015-05-29T00:00:00.000Z",formattedDate:"May 29, 2015",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:1.955,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.9.0",date:"2015-05-29",tags:["release-history"]},prevItem:{title:"Release 2.10.0",permalink:"/braincloud-apiref/release/2015/06/08/release-2-10-0"},nextItem:{title:"Release 2.8.0",permalink:"/braincloud-apiref/release/2015/05/07/release-2-8-0"}},s={authorsImageUrls:[]},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In celebration of this week's\xa0",(0,n.kt)("a",{parentName:"p",href:"http://oigconf.com",title:"OIGC"},"Ottawa International Games Conference (OIGC)"),", it's brainCloud Release 2.9!"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Nothing too earth-shattering in this release - some minor fixes and changes while we ramp\xa0up the development of some larger customer-requested features - coming soon!")),(0,n.kt)("h1",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IAP Product Enhancements"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Categories"),' - Products can now be assigned to categories (i.e. "Gold bundles", "Elixer bundles", etc.), which is handy for retrieving lists of similar items for display in store screens.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Product Types")," - brainCloud now allows you to specify whether an IAP product is ",(0,n.kt)("em",{parentName:"li"},"consumable"),", ",(0,n.kt)("em",{parentName:"li"},"non-consumable")," or ",(0,n.kt)("em",{parentName:"li"},"subscription")," (with sub-types for\xa0Apple's ",(0,n.kt)("em",{parentName:"li"},"free"),", ",(0,n.kt)("em",{parentName:"li"},"non-renewing"),"\xa0and ",(0,n.kt)("em",{parentName:"li"},"auto-renewable")," subscriptions). This additional information allows us to handle the various product types appropriately, in particular fixing our handling of auto-renewable subscriptions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Extra Data")," - developers are now able to append extra information\xa0(key + value pairs) to products"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unity Client"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We have significantly overhauled our Unity Client - improving its communications infrastructure, and adopting a new Json processing library (JsonFx).",(0,n.kt)("em",{parentName:"li"},"Warning: as part of the Unity Client Refactoring, we have changed the Error\xa0callback/delegate signature so that you no longer have to parse the response Json.\xa0This change greatly simplifies your error processing, but is\xa0",(0,n.kt)("strong",{parentName:"em"},"not backwards compatible"),". The older 2.8 libraries still function just fine though."))))),(0,n.kt)("h1",{id:"portal-changes"},"Portal Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Design | Marketplace\xa0| Products")," - added support for categories, product type / sub-type, and extra data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Officially Supported Browsers")," - the brainCloud portal is designed to work with\xa0Chrome, Safari and Firefox. \xa0Users of other browsers (",(0,n.kt)("cough",null,"IE"),") will be warned that they may experience issues. \xa0",(0,n.kt)("em",{parentName:"li"},"[There are known refresh issues with IE.]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"API Explorer")," - the services and operations are now displayed in alphabetical order (FINALLY!) :)")),(0,n.kt)("h1",{id:"api-changes--additions"},"API Changes / Additions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GetSalesInventoryByCategory()")," method added to Products service - used to retrieve all IAP products of a certain type.")),(0,n.kt)("h1",{id:"misc-changes--fixes"},"Misc. Changes / Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Admin | Company Info")," page -\xa0\xa0we now display the ",(0,n.kt)("em",{parentName:"li"},"user id for the billing account")," for easy reference"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JavaScript client")," - Async match parameters updated to match other clients, and fixed handling of optional parameters"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Java client")," - missing product methods have been added to the Java client"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboard configuration")," - the portal now warns you that changing the tournament refresh settings (start date, frequency, etc) requires that all leaderboard entries be deleted."),(0,n.kt)("li",{parentName:"ul"},"Miscellaneous documentation updates")))}c.isMDXComponent=!0}}]);