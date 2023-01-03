"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[4261],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},68187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Release 2.15.0",date:"2015-09-17",tags:["release-history"]},i=void 0,l={permalink:"/braincloud-apiref/release/2015/09/17/release-2-15-0",source:"@site/release/2015-09-17-release-2-15-0/index.md",title:"Release 2.15.0",description:"Release Highlights",date:"2015-09-17T00:00:00.000Z",formattedDate:"September 17, 2015",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:3.105,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.15.0",date:"2015-09-17",tags:["release-history"]},prevItem:{title:"Release 2.16.0",permalink:"/braincloud-apiref/release/2015/10/09/release-2-16-0"},nextItem:{title:"Release 2.14.0",permalink:"/braincloud-apiref/release/2015/08/27/release-2-14-0"}},s={authorsImageUrls:[]},c=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Portal Changes",id:"portal-changes",level:2},{value:"API Changes / Additions",id:"api-changes--additions",level:2},{value:"Misc. Changes / Fixes",id:"misc-changes--fixes",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("p",null,"Highlights of this release include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Shared Accounts")," -\xa0highly requested feature - brainCloud now\xa0allows you to share user accounts\xa0across applications. \xa0This is achieved by creating a master profile (associated with a separate App ID), which is associated with individual child profiles for each app. This is\xa0extremely powerful for companies\xa0looking to link the players across a collection of\xa0games together, or to model sub-accounts under a single Home account for a household. \xa0","[i.e. think set-top box]",". For more information, see our ",(0,n.kt)("a",{parentName:"li",href:"/learn/key-concepts/authentication/shared-accounts/"},"Shared Accounts")," page in the API Docs.")),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:r(64595).Z},(0,n.kt)("img",{alt:"Shared Account Overview",src:r(87916).Z,width:"1024",height:"353"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Facebook Notifications")," - we've always had them, but\xa0you couldn't properly enable/disable them. Now you can turn them on/off in the ",(0,n.kt)("strong",{parentName:"li"},"Design | Notifications | Settings")," page on the portal. And note of course, that your app will need to ask for the appropriate Facebook permissions for them to work."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Billing changes (Boo!)")," - we've now added support for monitoring and billing for excess file transfer usage. All Standard Plan apps get 10GB per month of free downloads. After that, it's $0.10 USD per GB. And note, we're only charging for the S3 file downloads - not for any of the data otherwise associated with API -- that's all covered by the API counts.")),(0,n.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,n.kt)("p",null,"Changes to the portal:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Shared Accounts")," - configure parent-child app relationships under ",(0,n.kt)("strong",{parentName:"li"},"Design | Authentication | Shared Accounts"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parent Currencies")," - a child app can include parent currencies in rewards for XP level-ups, Milestones, Quests and Statistics Events. All configurable under ",(0,n.kt)("strong",{parentName:"li"},"Design | Gamification"),". \xa0Parent Currencies are also visible on the Design | Marketplace | Virtual Currencies page.  ",(0,n.kt)("em",{parentName:"li"},"Note that you cannot yet award parent currencies for IAP Product Purchases ","[that will come next release]",".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboards"),' - we\'ve added a few additional "Are you sure?" checks to the process of resetting / deleting leaderboards, especially for live apps.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Improved Error Reporting")," - we've improved our logging system to show errors from more sources, including Server-to-Server calls and Scheduled Cloud Code. \xa0We've also added a new error category, \"Sys Warnings\". \xa0Check it out in ",(0,n.kt)("strong",{parentName:"li"},"Global Monitoring | Recent Logs"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Profile Relations"),"\xa0-\xa0profiles with parent or child profiles will see them listed at the bottom of the\xa0",(0,n.kt)("strong",{parentName:"li"},"User Monitoring | User Summary")," page, in a section called Relations. \xa0We've also moved the ",(0,n.kt)("strong",{parentName:"li"},"[Login as User]")," button to the top of the page for convenience.")),(0,n.kt)("h2",{id:"api-changes--additions"},"API Changes / Additions"),(0,n.kt)("p",null,"Changes and additions to the APIs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Shared Accounts")," - related API enhancements:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Authenticate()")," and ",(0,n.kt)("strong",{parentName:"li"},"GetPlayerState()")," methods now return the id of the parent profile (if there is one), as well as any parent currency balances"),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("strong",{parentName:"li"},"Identity")," methods for switching to/from parent and child accounts - SwitchToChildProfile(), SwitchToSingletonChildProfile(), SwitchToParentProfile() and GetChildProfiles()."),(0,n.kt)("li",{parentName:"ul"},"Enhancements to currency methods to support ",(0,n.kt)("strong",{parentName:"li"},"Parent Currencies")," - AwardParentCurrency(), ConsumeParentCurrency(), GetParentCurrency() and ResetParentCurrency()"),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("strong",{parentName:"li"},"RunParentScript()")," call to run a parent's Cloud Code script (in the context of the parent profile)"))),(0,n.kt)("li",{parentName:"ul"},"EnableLogging now implemented for ",(0,n.kt)("strong",{parentName:"li"},"Windows Comms library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Objective-C library")," - better handling of optional parameters"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Java library")," - callback mechanism has been refined to better match the other libraries. Also, you can now receive\xa0separate error callbacks for individual API calls.")),(0,n.kt)("h2",{id:"misc-changes--fixes"},"Misc. Changes / Fixes"),(0,n.kt)("p",null,"Additional improvements in this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Upgrade Push Notifications service - we've upgraded our underlying Push Notification libraries for greater reliability"),(0,n.kt)("li",{parentName:"ul"},"Updated game examples - we've taken a pass through our examples to ensure that they're using our latest and greatest libraries"),(0,n.kt)("li",{parentName:"ul"},"Match expiry - plugged some holes in our completion of matches on Expiry timeouts"),(0,n.kt)("li",{parentName:"ul"},"Improved handling of database connections under load"),(0,n.kt)("li",{parentName:"ul"},"Miscellaneous performance improvements - mostly improvements under-the-hood to our logging subsystems"),(0,n.kt)("li",{parentName:"ul"},"Miscellaneous documentation improvements")))}u.isMDXComponent=!0},64595:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/Shared-Account-Overview-612f3b2ce2592b330bd7f4559040aac5.png"},87916:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Shared-Account-Overview-1024x353-1e2cb6cb8f3cabb571d37df9bcd6125b.png"}}]);