"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[2e4],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59201:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Release 4.7.5",date:"2021-05-04",tags:["release-history"]},i=void 0,l={permalink:"/braincloud-apiref/release/2021/05/04/release-4-7-5",source:"@site/release/2021-05-04-release-4-7-5/index.md",title:"Release 4.7.5",description:"Release 4.7.5 is a surgical release to improve brainCloud support in a few key feature areas (mostly Purchases + Promotions). We hope you dig it!",date:"2021-05-04T00:00:00.000Z",formattedDate:"May 4, 2021",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:4.48,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 4.7.5",date:"2021-05-04",tags:["release-history"]},prevItem:{title:"Release 4.8",permalink:"/braincloud-apiref/release/2021/06/28/release-4-8"},nextItem:{title:"Release 4.7 is live!",permalink:"/braincloud-apiref/release/2021/03/24/release-4-7"}},s={authorsImageUrls:[]},p=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Promotions",id:"promotions",level:3},{value:"Purchases",id:"purchases",level:3},{value:"Miscellaneous",id:"miscellaneous",level:3},{value:"Portal Changes",id:"portal-changes",level:2},{value:"Design",id:"design",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"API Changes",id:"api-changes",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Release 4.7.5 is a surgical release to improve brainCloud support in a few key feature areas (mostly Purchases + Promotions). We hope you dig it!\xa0"),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("h3",{id:"promotions"},"Promotions"),(0,n.kt)("p",null,"This release addresses some limitations of the existing promotions system and introduces a few cool new tricks."),(0,n.kt)("p",null,"The improvements, in no particular order, are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added new\xa0",(0,n.kt)("strong",{parentName:"li"},"Purchase Rewards Hook"),"\xa0- a new API Hook that allows apps to override the configured reward amounts for product purchases. This is useful for companies that like double the rewards of a promotional item, instead of offering the same items for less $.\xa0",(0,n.kt)("em",{parentName:"li"},"You can find a script example ",(0,n.kt)("a",{parentName:"em",href:"http://help.getbraincloud.com/en/articles/5196453-using-a-post-hooked-cloud-script-to-override-product-purchase-rewards"},"here"),".")),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("strong",{parentName:"li"},"max # of purchases"),"\xa0for\xa0",(0,n.kt)("em",{parentName:"li"},"Automated Promotions"),"\xa0- you can now configure Automated Promotions to expire early if a user makes a purchase - limiting that special deal to the first <x",">"," purchases they make."),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("strong",{parentName:"li"},"max # of re-triggers"),"\xa0for\xa0",(0,n.kt)("em",{parentName:"li"},"Automated Promotions"),"\xa0- you can now configure Automated Promotions to re-trigger a finite number of times"),(0,n.kt)("li",{parentName:"ul"},"New AppStore\xa0",(0,n.kt)("strong",{parentName:"li"},"RefreshPromotions()"),"\xa0call refreshes the Segments and Promotions of the current user. Useful for apps that want to check if a promotion became active during the play session. ",(0,n.kt)("em",{parentName:"li"},"Note - cloud-code only for now."))),(0,n.kt)("p",null,"In addition, we have addressed a limitation where Automated Promotions targeting\xa0",(0,n.kt)("em",{parentName:"p"},"existing"),"\xa0Segments would not trigger for users\xa0",(0,n.kt)("em",{parentName:"p"},"already"),"\xa0in that Segment. Those users (in existing segments) will now have the promotion applied by a new job that kicks off when the Automated Promotion is enabled."),(0,n.kt)("h3",{id:"purchases"},"Purchases"),(0,n.kt)("p",null,"We have also made improvements to the saved purchase transaction data - as viewed via the ",(0,n.kt)("strong",{parentName:"p"},"User Monitoring | Transactions")," page. For new purchases, you can now see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Any\xa0",(0,n.kt)("strong",{parentName:"li"},"rewards"),"\xa0associated with the purchase"),(0,n.kt)("li",{parentName:"ul"},"Where the purchase was made during a\xa0",(0,n.kt)("strong",{parentName:"li"},"promotion")),(0,n.kt)("li",{parentName:"ul"},"And whether the purchase has been\xa0",(0,n.kt)("strong",{parentName:"li"},"refunded"),". Note - for purposes of brainCloud, chargebacks also appear as refunds.\xa0",(0,n.kt)("em",{parentName:"li"},"Also, note that these states only apply to Facebook purchases."))),(0,n.kt)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Builder API")," ","-"," Our \u201cofficial official\u201d beta release of Builder API begins now. Our planned 4.7.0 roll-out was delayed while we put in some finishing touches.\xa0",(0,n.kt)("em",{parentName:"li"},"Note - still for private licensees and approved BaaS customers only.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud-code Script Hook"),"\xa0- we have added a cloud code script pre-hook. This can be helpful when re-organizing scripts into folders (using our new Cloud Code Folders feature). This hook can allow you to rework your script organization, while still supporting existing clients attempting to run scripts from their old locations. ",(0,n.kt)("em",{parentName:"li"},"See this ",(0,n.kt)("a",{parentName:"em",href:"http://help.getbraincloud.com/en/articles/5196058-using-a-pre-hooked-cloud-script-to-locate-the-moved-scripts-for-runscript-call"},"article")," for an example of how to use it.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Events"),"\xa0- we have added more flexible ways of deleting incoming events for a user. See the\xa0",(0,n.kt)("strong",{parentName:"li"},"API Changes"),"\xa0section for more details\u2026"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Room & Relay Servers"),"\xa0- we have reworked our room/relay server mechanisms to be more efficient. You may notice more responsive cleaning-up of server resources."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RTT"),"\xa0- Improved clean-up (server-side) of stale client connections.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,n.kt)("p",null,"We've made the following portal changes:"),(0,n.kt)("h3",{id:"design"},"Design"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Code | API Hooks"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added new AppStore PurchaseRewardHook - configure it as a \u201cPost\u201d hook to dynamically override the default awards of an item."),(0,n.kt)("li",{parentName:"ul"},"Added the ScriptService to the list of services that support API Hooks. So for example you can now add a Pre-hook to \u201cRunScript\u201d that adjusts the name/path of a script before running it. Useful when migrating to Cloud Code folders while still maintaining compatibility with existing clients."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Code | Scripts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We have updated the Scripts screen to default to showing up to 100 scripts per page. You are welcome!\xa0\ud83d\ude42"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Promotions | Automated"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can now set the\xa0",(0,n.kt)("strong",{parentName:"li"},"max # purchases"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"li"},"max # re-triggers"),"\xa0for automated promotions. Leave the value blank for\xa0",(0,n.kt)("em",{parentName:"li"},"unlimited"),"\xa0- which is the\xa0",(0,n.kt)("em",{parentName:"li"},"default"),".")))),(0,n.kt)("h3",{id:"monitoring"},"Monitoring"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Global Monitoring | Recent Errors"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Updated the source of legacy\xa0servicemix\xa0errors to the more up-to-date\xa0cron\xa0and\xa0datastream\xa0sources"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Monitoring | Transactions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"We have beefed up the Transactions page to show\xa0",(0,n.kt)("strong",{parentName:"li"},"rewards"),",\xa0",(0,n.kt)("strong",{parentName:"li"},"promotions"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"li"},"refund"),"\xa0status of transactions. There is also more transactional info shown via the Transaction Action menu for Facebook purchases.\xa0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Steam"),"\xa0pending transactions are no longer shown (by default). There is a new toggle button to toggle viewing pending transactions.\xa0")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"api-changes"},"API Changes"),(0,n.kt)("p",null,"The following changes/additions have affected the\xa0brainCloud\xa0API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AppStore"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"GetEligiblePromotions()"),"\xa0method (and other promotions methods) now include the new num purchases and retriggers counts in the responses when appropriate."),(0,n.kt)("li",{parentName:"ul"},"Added a cloud code method,\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"RefreshPromotions()"),", that refreshes the segments and promotions associated with a user. Note that a user\u2019s segments and promotions are\xa0",(0,n.kt)("em",{parentName:"li"},"automatically refreshed"),"\xa0when they authenticate. Calling this method allows apps to periodically refresh the segment + promotion data for the user during the play session. Note that this is an expensive call - calling it is equates to 2 API counts (technically 1 API + 10 bulk API) - so use it sparingly!"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New event deletion methods -\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"DeleteIncomingEvents()"),",\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"DeleteIncomingEventsOlderThan()"),"\xa0and\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"DeleteIncomingEventsByTypeOlderThan()"),".\xa0")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note that all of the new methods are cloud-code only for now - but will be added to the client libraries for brainCloud 4.8.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated libraries",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"No changes to the Client Libraries for 4.7.5."))),(0,n.kt)("li",{parentName:"ul"},"Documentation updates",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Updated API Reference docs and examples"))),(0,n.kt)("li",{parentName:"ul"},"Important Fixes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BCLD-7072 - Automated Promotion job to run when promotion created or new target segment added"),(0,n.kt)("li",{parentName:"ul"},"BCLD-7095 - Failure to extend the TTL of an RTT cx should result in the termination of the socket connection"),(0,n.kt)("li",{parentName:"ul"},"BCLD-7201 - Product pricing lookups should be specific to store type"))),(0,n.kt)("li",{parentName:"ul"},"Plus miscellaneous fixes and performance enhancements...")))}m.isMDXComponent=!0}}]);