"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[89987],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26767:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"Release 2.10.0",date:"2015-06-08",tags:["release-history"]},o=void 0,l={permalink:"/braincloud-apiref/release/2015/06/08/release-2-10-0",source:"@site/release/2015-06-08-release-2-10-0/index.md",title:"Release 2.10.0",description:"This week we're addressing a bunch of customer requests. If you're lucky, maybe you'll see your favorite new feature in here! Remember, keep the feedback coming - with your help we plan\xa0to make brainCloud the most flexible and friendly BaaS on the planet!",date:"2015-06-08T00:00:00.000Z",formattedDate:"June 8, 2015",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:2.98,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.10.0",date:"2015-06-08",tags:["release-history"]},prevItem:{title:"Release 2.11.0",permalink:"/braincloud-apiref/release/2015/06/30/release-2-11-0"},nextItem:{title:"Release 2.9.0",permalink:"/braincloud-apiref/release/2015/05/29/release-2-9-0"}},s={authorsImageUrls:[]},u=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Portal Changes",id:"portal-changes",level:2},{value:"API Changes / Additions",id:"api-changes--additions",level:2},{value:"Misc. Changes / Fixes",id:"misc-changes--fixes",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This week we're addressing a bunch of customer requests. If you're lucky, maybe you'll see your favorite new feature in here! Remember, keep the feedback coming - with your help we plan\xa0to make brainCloud the most flexible and friendly BaaS on the planet!"),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("p",null,"Highlights of this week's release include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboard Monitoring")," - you can now view your game's leaderboards in the ",(0,n.kt)("strong",{parentName:"li"},"Global Monitoring")," section of the portal. Super useful during development, support/operations (catching cheaters!) and even for manually administering tournaments. Features include:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Paging through the leaderboards"),(0,n.kt)("li",{parentName:"ul"},"View previous leaderboard versions"),(0,n.kt)("li",{parentName:"ul"},"Reset leaderboard - deletes ",(0,n.kt)("em",{parentName:"li"},"all")," entries (only works for the active leaderboard, not for previous versions)"),(0,n.kt)("li",{parentName:"ul"},"Delete leaderboard entry"),(0,n.kt)("li",{parentName:"ul"},"View user - jumps to a view of the user associated with the score"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Updated Javascript Client")," - we've revamped the Javascript Client to use native HTTP calls (instead of JQuery). Useful for embedded\xa0client environments where JQuery is not a viable option."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Code Enhancements")," - we've enhanced and improved the ability to call cloud code scripts from other scripts. (Yay!). \xa0We've also normalized the returns from the cloud code API methods vs. the native client API methods. Basically, both now have separate <result",">"," and <data",">"," sections. Because this will break existing scripts, we've implemented a settings in ",(0,n.kt)("strong",{parentName:"li"},"Advanced Settings")," called ",(0,n.kt)("strong",{parentName:"li"},"[x]"," Use Legacy Script Result Format"),". \xa0This setting defaults to ","[x]"," True for all existing apps with cloud code, but ","[ ]"," False for everyone else. ",(0,n.kt)("em",{parentName:"li"},"We recommend migrating your scripts to work with the ","[ ]"," False setting when you have a chance."))),(0,n.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Global Property\xa0Categories")," - You probably already know that ",(0,n.kt)("em",{parentName:"li"},"Global Properties")," are super useful. They allow you to define all sorts of configuration and tuning parameters for your app, that can be adjusted and tweaked to adjust how the app behaves, without requiring new builds and client installs. Now - because some folks were building up large-ish libraries of these properties, we thought we'd give you a way to better organize them. \xa0Voila: Categories! \xa0Note - categories do not affect the namespace of properties - all property names are global to your app."),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("strong",{parentName:"li"},"Leaderboard Monitoring")," - go to ",(0,n.kt)("strong",{parentName:"li"},"Monitoring | Global Monitoring | Leaderboards")," to view your players' accomplishments in all their glory! ",(0,n.kt)("em",{parentName:"li"},"(see highlights section for details!)")),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("em",{parentName:"li"},"Compatibility")," section in the ",(0,n.kt)("strong",{parentName:"li"},"Design | Advanced Settings")," page")),(0,n.kt)("h2",{id:"api-changes--additions"},"API Changes / Additions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboard API\xa0optimization"),"\xa0- the json data returned by GetGlobalLeaderboardPage() and GetGlobalLeaderboardView() now includes\xa0the current ",(0,n.kt)("em",{parentName:"li"},"Friend Summary Data")," for the players referenced by the leaderboard entries. Useful for when you want to display\xa0additional information about the ranked player in the leaderboard (i.e. xp\xa0level, faction, etc.) without requiring an additional brainCloud\xa0call for each entry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Matchmaking optimization")," - ",(0,n.kt)("em",{parentName:"li"},"Friend Summary Data")," has also been added to matchmaking results (for the same reason we did it for leaderboards!)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTP Client Service improvement")," - we've enhanced the HTTP client Service accessible from Cloud Code to allow passage of query parameters as a map"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GetGlobalProperties() return data")," fixed - it no longer returns description data. \xa0It was a defect (and a bandwidth hog)\xa0- so\xa0we've fixed it.")),(0,n.kt)("h2",{id:"misc-changes--fixes"},"Misc. Changes / Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Server optimizations")," - we've fixed our cloud code hook caching, so that it well, actually caches stuff now (whoopsie!). The unsurprising\xa0result is even faster processing of all API calls"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Client packet retry improved")," ","-"," our clients now point to a new server end-point which better supports packet retries."),(0,n.kt)("li",{parentName:"ul"},"The API Explorer's ",(0,n.kt)("em",{parentName:"li"},"GetShieldExpiry()")," method has been fixed"),(0,n.kt)("li",{parentName:"ul"},"Misc fixes and optimizations")))}d.isMDXComponent=!0}}]);