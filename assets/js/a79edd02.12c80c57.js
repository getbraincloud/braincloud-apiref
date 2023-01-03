"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[84940],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},48825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"Release 2.12.0",date:"2015-07-24",tags:["release-history"]},l=void 0,o={permalink:"/braincloud-apiref/release/2015/07/24/release-2-12-0",source:"@site/release/2015-07-24-release-2-12-0/index.md",title:"Release 2.12.0",description:"Release 2.12.0",date:"2015-07-24T00:00:00.000Z",formattedDate:"July 24, 2015",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:2.3,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.12.0",date:"2015-07-24",tags:["release-history"]},prevItem:{title:"Release 2.13.0",permalink:"/braincloud-apiref/release/2015/08/18/release-2-13-0"},nextItem:{title:"Release 2.11.0",permalink:"/braincloud-apiref/release/2015/06/30/release-2-11-0"}},s={authorsImageUrls:[]},u=[{value:"Release 2.12.0",id:"release-2120",level:2},{value:"Release Highlights",id:"release-highlights",level:2},{value:"Portal Changes",id:"portal-changes",level:2},{value:"API Changes / Additions",id:"api-changes--additions",level:2},{value:"New APIs",id:"new-apis",level:3},{value:"Modified APIs",id:"modified-apis",level:3},{value:"Misc. Changes / Fixes",id:"misc-changes--fixes",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"release-2120"},"Release 2.12.0"),(0,n.kt)("p",null,"Release 2.12.0 has gone public!\xa0There are some tasty goodies in this one - please read below for the highlights!"),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("p",null,"Highlights of this release include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Scheduled Cloud Code")," ","-"," you can now schedule cloud code scripts to run at a specific time.\xa0This tool is very powerful and gives you the ability to defer task execution as benefits your game/app. \xa0See ",(0,n.kt)("a",{parentName:"li",href:"/learn/cloud-code-central/handy-cloud-code-scripts/scriptscheduler-script/"},"this page"),"\xa0for more information on how to use this\xa0great new feature."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Paged Global Entity Fetches")," ","-"," it is now possible to retrieve more than 100 Global Entities. We've created a new paging system that allows you to navigate a larger set of Global Entities. The paging APIs use a sophisticated query syntax which gives you search and ordering flexibility. The query syntax is described ",(0,n.kt)("a",{parentName:"li",href:"/api/appendix/genericpagedqueries"},"here"),"\xa0and the API itself can be found ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/getpage"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'Support for "Lower Is Better" Leaderboards')," ","-"," You can now create Leaderboards where the best score kept will be the lowest score the user has posted."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"S3 File Listing")," - we've created a new API that makes it even easier to fetch the list of files uploaded to S3.")),(0,n.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Global Monitoring |\xa0Job Queue")," ","-"," this is where you'll find details about scheduled cloud script jobs. We also keep a history of jobs that have run in the past which is useful when diagnosing issues with your scripts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Design | Quests"),"\xa0-\xa0now include Unlock Criteria, and Rewards which can use any combination of user level/XP, player statistics or global statistics. Rewards can also pay out currency and/or achievements."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Misc Fixes"))),(0,n.kt)("h2",{id:"api-changes--additions"},"API Changes / Additions"),(0,n.kt)("h3",{id:"new-apis"},"New APIs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Schedule Cloud Code")," ","-"," To schedule cloud code you can use one of these ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/script/schedulerunscriptminutes"},"APIs"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BrainCloudScript.ScheduleRunScriptUTC()")," for an absolute date."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BrainCloudScript.ScheduleRunScriptMinutes()")," for scheduling x minutes from now."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Global Entity Paged Fetches")," ","-"," To fetch global entities by Page",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BrainCloudGlobalEntity.GetPage()")," ","-"," Call this for the first fetch, specifying the fetch query"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BrainCloudGlobalEntity.GetPageOffset()")," ","-"," Call this for subsequent fetches passing in the returned context variable"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BrainCloudFriend.FindPlayerByName()")," ","-",' This API allows you to search for a player by their player name (settable using "BrainCloudPlayerState.UpdatePlayerName)'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Attach/Detach Google Identity")," ","-"," To allow you to attach and detach Google identities.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BrainCloudIdentity.AttachGoogleIdentity()")),(0,n.kt)("li",{parentName:"ul"},"*",(0,n.kt)("strong",{parentName:"li"},"*BrainCloudIdentity.MergeGoogleIdentity()**")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BrainCloudIdentity.DetachGoogleIdentity()")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BrainCloudS3Handling.GetFileList()")," ","-"," To retrieve the full list of S3 files stored on brainCloud")),(0,n.kt)("h3",{id:"modified-apis"},"Modified APIs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BrainCloudSocialLeaderboard")," ","-"," Calls to\xa0TriggerSocialLeaderboardTournamentReward now require the use of a leaderboardId to identify the leaderboard.")),(0,n.kt)("h2",{id:"misc-changes--fixes"},"Misc. Changes / Fixes"),(0,n.kt)("p",null,"Addressed in this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Unity library IsAuthenticated")," ","-"," Session time outs will now cause this flag to be set to false."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Post score to dynamic leaderboard")," ","-"," APIs now take in the hour/minute to allow setting the rotation time.")))}p.isMDXComponent=!0}}]);