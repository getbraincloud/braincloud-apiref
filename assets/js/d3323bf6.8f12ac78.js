"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[4162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Release 2.18.0",date:"2015-12-03",tags:["release-history"]},i=void 0,s={permalink:"/braincloud-apiref/release/2015/12/03/release-2-18-0",source:"@site/release/2015-12-03-release-2-18-0/index.md",title:"Release 2.18.0",description:"Release Highlights",date:"2015-12-03T00:00:00.000Z",formattedDate:"December 3, 2015",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:6.445,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.18.0",date:"2015-12-03",tags:["release-history"]},prevItem:{title:"Release 2.19.0",permalink:"/braincloud-apiref/release/2015/12/17/release-2-19-0"},nextItem:{title:"Release 2.17.0",permalink:"/braincloud-apiref/release/2015/11/05/release-2-17-0"}},l={authorsImageUrls:[]},p=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Additional Highlights",id:"additional-highlights",level:2},{value:"Portal Changes",id:"portal-changes",level:2},{value:"API Changes / Additions",id:"api-changes--additions",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],u={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,r.kt)("p",null,"This release\xa0marks the debut\xa0appearance of a key roadmap item for brainCloud - our ",(0,r.kt)("strong",{parentName:"p"},"DataStream Architecture"),". Currently in ",(0,r.kt)("em",{parentName:"p"},"beta"),", the concept behind DataStream is to enable a meaningful flow of data and events\xa0from your apps to\xa0value-added tools. And to do this as painlessly as possible - i.e. little to no client code - leveraging the data and server-side interactions that\xa0brainCloud already knows about."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(95479).Z},(0,r.kt)("img",{alt:"brainCloud DataStream Architecture",src:a(68868).Z,width:"1024",height:"654"}))),(0,r.kt)("p",null,"DataStream is being implemented with the concept of ",(0,r.kt)("em",{parentName:"p"},"extensible channels")," - which will be used to enable a great variety of integrations."),(0,r.kt)("p",null,"Our first channel is a doozy - ",(0,r.kt)("a",{parentName:"p",href:"https://segment.com/overview"},"Segment.com"),". \xa0Connecting to\xa0Segment instantly gives us ",(0,r.kt)("a",{parentName:"p",href:"https://segment.com/integrations"},"over 100 service\xa0integrations"),"\xa0- including ",(0,r.kt)("a",{parentName:"p",href:"https://segment.com/docs/integrations/mixpanel/"},"MixPanel"),", ",(0,r.kt)("a",{parentName:"p",href:"https://segment.com/docs/integrations/google-analytics/"},"Google Analytics"),", ",(0,r.kt)("a",{parentName:"p",href:"https://heapanalytics.com"},"Heap"),",\xa0",(0,r.kt)("a",{parentName:"p",href:"https://segment.com/docs/integrations/treasure-data/"},"Treasure Data")," and more. \xa0There's even support for ",(0,r.kt)("a",{parentName:"p",href:"https://segment.com/docs/integrations/webhooks/"},"generic webhooks"),"."),(0,r.kt)("p",null,"Trying out DataStream is very simple. To do so:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register for a free ",(0,r.kt)("a",{parentName:"li",href:"http://www.segment.com"},"Segment"),"\xa0Developer account, and create a project to use"),(0,r.kt)("li",{parentName:"ul"},"Go to the brainCloud portal, and enter the Segment project information in the new\xa0",(0,r.kt)("strong",{parentName:"li"},"Design | Integration")," section"),(0,r.kt)("li",{parentName:"ul"},"Optionally connect another service to Segment - like ",(0,r.kt)("em",{parentName:"li"},"MixPanel"),", ",(0,r.kt)("em",{parentName:"li"},"Google Analytics"),", etc.")),(0,r.kt)("p",null,"That's it - once you do this brainCloud will immediately begin sending the following events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Identify")," - contains base information (like profile id, name, e-mail etc) about a user interacting with Segment. Sent before we send any other events associated with that user."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Login")," - triggered when a user logs in (via the Authenticate API)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Register")," - triggered when a new user account is created (via the Authenticate API)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"RecordedScore")," - triggered when a user posts a score to a leaderboard"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"LevelledUp")," - triggered when a user gains an experience level"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"AwardedAchievement")," - triggered when a user is awarded an achievement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"AwardedMilestone")," - triggered when a user is awarded a milestone"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"AwardedQuest")," - triggered when a user is awarded a quest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"WasSentNotification")," - triggered when a remote push notification was sent to the user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CompletedOrder")," - triggered when a user completes an IAP purchase")),(0,r.kt)("p",null,"In addition, your app can send custom events of it's own (from the client or via Cloud Code). \xa0There is a new DataStream service with three methods to support this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CustomTrackEvent"),' - used to track custom user behaviours throughout your app - for example, a puzzle game might record "RoundStarted" with information on what round\xa0the user is playing, and what boosts they\'ve selected for the round, together with a "RoundCompleted" event that summarizes the results. ',(0,r.kt)("em",{parentName:"li"},"CustomTrackEvent()"),"\xa0takes as parameters the name of the event, and set of custom key+value pairs for attributes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CustomScreenEvent")," - used\xa0to record that the user i"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CustomPageEvent")," - same as the above, but oriented toward web pages")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Billing note -\xa0in addition to the regular tracking of API calls, each event sent out on a\xa0DataStream Channel counts as an\xa0additional API count.")),(0,r.kt)("p",null,"We are very excited about the new possibilities that DataStream opens up for brainCloud apps - give it a try and send us feedback!"),(0,r.kt)("h2",{id:"additional-highlights"},"Additional Highlights"),(0,r.kt)("p",null,"Additional features of this release include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Push Notification refactoring")," - we've refactored our push notification support to make it more efficient and reliable. Although none of the existing Client APIs have changed, you'll notice:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Device tokens now expire"))," after a settable period of time. This helps to keep all tokens recent and reliable, and also to ensure you're not wasting\xa0API counts sending notifications to long-gone users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Invalid Device\xa0Tokens"))," (flagged by iOS and Android servers)\xa0are now ",(0,r.kt)("em",{parentName:"li"},"automatically removed")," from profiles"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Devices will\xa0no longer\xa0receive notifications from multiple users"))," - if your app allows users to log in and out, it was possible to end up with multiple users with the same hardware device token. This is no longer possible - a token can now be associated with one and only one user. \xa0That said, if you allow users to log out, you will call the new ",(0,r.kt)("em",{parentName:"li"},"RemoveDeviceToken()")," call just before the logout, to ensure that the user's profile\xa0no longer refers to the device."),(0,r.kt)("li",{parentName:"ul"},"There is a new ",(0,r.kt)("strong",{parentName:"li"},"Delete All Tokens")," menu option in the ",(0,r.kt)("strong",{parentName:"li"},"Design | Notifications | Settings")," screen, which allows you to clear all tokens of specific type (iOS, Android, etc.). \xa0This is useful for when you switch between Sandbox and Production certificates on iOS, and you want to delete all the old tokens."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Redemption Code Improvements")," - we've made some changes under the covers to make our implementation more efficient at high volumes of codes. The biggest change is that scan codes are no longer local to a code type, but are now global across all code types for an app id. This saves us a bunch of index space, and in practice better matches the datasets of our customers anyway."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"API Pre- and Post- Hook\xa0Improvements")," - we've improved the capabilities of ",(0,r.kt)("strong",{parentName:"li"},"API Pre- and Post- Hooks"),". As you may or may not know, Pre- and Post- hooks allow you to change the behaviours of brainCloud's API calls themselves - inserting code to be run before and/or after the API call completes. Pre-hooks can now have the ability to change the parameters being sent into the API call. \xa0And Post-hooks can now access the original parameters sent to the API (providing useful context)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Updated Unreal plug-in")," - Finally, we've made improvements to our ",(0,r.kt)("em",{parentName:"li"},"Online Subsystem")," portion of our Unreal 4 libraries.")),(0,r.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,r.kt)("p",null,"Changes to the portal:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Moved Email Authentication\xa0section")," - we've moved the ",(0,r.kt)("em",{parentName:"li"},"Email Authentication")," settings from the ",(0,r.kt)("em",{parentName:"li"},"Advanced\xa0Settings")," page to their own page under ",(0,r.kt)("strong",{parentName:"li"},"Design | Authentication"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New\xa0Integrations section")," - we've added a new ",(0,r.kt)("strong",{parentName:"li"},"Design | Integrations")," section, which currently contains only the\xa0Segment integration from our new DataStream feature"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Revamped Notification\xa0Settings")," - the settings dialogs have been revamped to be clearer, and we've added an expiry drop-down. \xa0You can also choose to delete existing\xa0iOS or Android device tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Get Test Redemption Codes")," - you can now search your datafill for a\xa0redemption code to use during testing. \xa0You the Type and State of the code, and brainCloud will display the first one that matches. Available from the ",(0,r.kt)("strong",{parentName:"li"},"Global Monitoring | Redemption Codes")," screen."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reset Universal Authentication passwords"),"\xa0- you\xa0may now reset the password of Universal Authentication users via the design portal. Simply choose the ",(0,r.kt)("em",{parentName:"li"},"Set Password")," option in the new action menu displayed in the ",(0,r.kt)("em",{parentName:"li"},"Credentials")," section of the ",(0,r.kt)("strong",{parentName:"li"},"User Monitoring | User Summary")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Managing Device Tokens")," -\xa0device tokens are used to push notifications to iOS and Android devices. The device tokens section of\xa0the ",(0,r.kt)("strong",{parentName:"li"},"User Summary")," page has been updated to display when the token was last registered (note - brainCloud only applies\xa0the first registration within\xa0a 24-hour period), and has a new ",(0,r.kt)("strong",{parentName:"li"},"[Reset Device Tokens]")," button to delete all the existing tokens for this user.")),(0,r.kt)("h2",{id:"api-changes--additions"},"API Changes / Additions"),(0,r.kt)("p",null,"Changes and additions to the API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Push Notification Tokens")," -\xa0two methods have been added to allow client apps\xa0greater control over the device tokens associated with user accounts. \xa0DeregisterPushNotificationDeviceToken() will delete the associated device token from the user profile (), and DeregisterAllPushNotificationDeviceTokens() will delete all tokens associated with the user... (useful if you app contains a global toggle to disable all notifications to the user - as it will delete all notification tokens for this user, not just the token associated with the current device)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DataStream Events")," - as mentioned in the highlights section above, new API calls have been added for custom DataStream events")),(0,r.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,r.kt)("p",null,"Additional improvements to this release:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adjusted\xa0S2S Explorer so that it returns results in alignment with the API Explorer"),(0,r.kt)("li",{parentName:"ul"},"Added GlobalApp proxy to Cloud Code bridge"),(0,r.kt)("li",{parentName:"ul"},"Refactored C++ Comms to push common code into a single class"),(0,r.kt)("li",{parentName:"ul"},"Fixes to API Hook\xa0error handling - more descriptive error messages"),(0,r.kt)("li",{parentName:"ul"},"Miscellaneous fixes and performance improvements")))}m.isMDXComponent=!0},95479:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/brainCloud_datastream_architecture-f2854c434360d1587f4d4cbc56425ead.png"},68868:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/brainCloud_datastream_architecture-1024x654-f0243c34036f166518b2f9aa557941c7.png"}}]);