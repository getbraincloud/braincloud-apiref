"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[76192],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},77234:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Release 3.6.5",date:"2017-12-12",tags:["release-history"]},l=void 0,o={permalink:"/braincloud-apiref/release/2017/12/12/release-3-6-5",source:"@site/release/2017-12-12-release-3-6-5/index.md",title:"Release 3.6.5",description:"We are pleased to present release 3.6.5 - just in time for the holidays!",date:"2017-12-12T00:00:00.000Z",formattedDate:"December 12, 2017",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:7.5,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 3.6.5",date:"2017-12-12",tags:["release-history"]},prevItem:{title:"Release 3.6.6",permalink:"/braincloud-apiref/release/2018/01/29/release-3-6-6"},nextItem:{title:"Release 3.6.0",permalink:"/braincloud-apiref/release/2017/10/07/release-3-6"}},s={authorsImageUrls:[]},p=[{value:"Feature Highlights",id:"feature-highlights",level:2},{value:"Fresher Matchmaking",id:"fresher-matchmaking",level:3},{value:"Batch Scripts",id:"batch-scripts",level:3},{value:"Refactored Client Libraries",id:"refactored-client-libraries",level:3},{value:"Key API changes",id:"key-api-changes",level:4},{value:"Portal Changes",id:"portal-changes",level:2},{value:"Team",id:"team",level:3},{value:"Design",id:"design",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"<strong>General</strong>",id:"general",level:3},{value:"API Changes",id:"api-changes",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are pleased to present release 3.6.5 - just in time for the holidays!"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note that there are some breaking changes in the client libraries - but they are pretty simple to accomodate, and of course will not affect your app until you update. For more details, see the ",(0,r.kt)("strong",{parentName:"em"},"Refactored Client Libraries")," section below.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"feature-highlights"},"Feature Highlights"),(0,r.kt)("h3",{id:"fresher-matchmaking"},"Fresher Matchmaking"),(0,r.kt)("p",null,"We have added a new expiry feature to keep your matchmaking fresh. It is implemented via a nightly process that will disable the matchmaking flag for users that haven't logged into the app within the specified number of days."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(94848).Z},(0,r.kt)("img",{src:a(44853).Z,width:"476",height:"159"}))),(0,r.kt)("p",null,"Enabling this feature will ensure that players don't get matched with opponents who haven't recently logged into your game."),(0,r.kt)("p",null,"Important notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The nightly process only runs for ",(0,r.kt)("strong",{parentName:"li"},"Live")," apps. This feature does not affect apps still in development. (This saves server cycles, plus while in development it is tough to get enough players to match against already!)"),(0,r.kt)("li",{parentName:"ul"},"Auto-Expiry is turned ",(0,r.kt)("strong",{parentName:"li"},"OFF")," by default for ",(0,r.kt)("em",{parentName:"li"},"existing")," apps."),(0,r.kt)("li",{parentName:"ul"},"Auto-Expiry is turned ",(0,r.kt)("strong",{parentName:"li"},"ON")," by default for ",(0,r.kt)("em",{parentName:"li"},"new")," apps (with expiry set to 30 days)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Important: brainCloud will not automatically re-enable matchmaking for a disabled user once they login"),". Apps using this feature should directly call\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"EnableMatchmaking()")," whenever a user launches the app.")),(0,r.kt)("h3",{id:"batch-scripts"},"Batch Scripts"),(0,r.kt)("p",null,"A common customer request has been a way to iterate through the population of an app's users, performing some operations on each user's account. It has taken some time to find a proper way to do this that is scalable and safe - but we are pleased to announce that the first evolution of this is now in place."),(0,r.kt)("p",null,"We have introduced a new S2S Script Service method called ",(0,r.kt)("inlineCode",{parentName:"p"},"RunBatchUserScript()"),". This script can be called via the S2S Explorer or from an external server - and queues the specified script to be run against each of the users in a app (or optionally, against particular segments). Although the ",(0,r.kt)("inlineCode",{parentName:"p"},"RunBatchUserScript()"),"\xa0is triggered from the S2S context, each individual script is run in the context of the current player - so it is as if the script was called by that user's logged-in session - greatly simplifying the script code."),(0,r.kt)("p",null,"Here's an example script that writes a global entity (singleton) for each player it is run upon:"),(0,r.kt)("p",null,"var result;"),(0,r.kt)("p",null,"_","globalEntityService = bridge.getGlobalEntityServiceProxy();"),(0,r.kt)("p",null,'var acl = { "other": 1 };\nvar customData = { "test": "info" };'),(0,r.kt)("p",null,"result = ","_","globalEntityService.createEntity(data.entityType, null, acl, customData );"),(0,r.kt)("p",null,"result;"),(0,r.kt)("p",null,"You can call it via the S2S Explorer like this:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(43313).Z},(0,r.kt)("img",{src:a(591).Z,width:"824",height:"474"}))),(0,r.kt)("p",null,"Note that the scripts get queued to run on the users in the background - and depending upon the app's population may take several minutes or potentially several hours to complete."),(0,r.kt)("h3",{id:"refactored-client-libraries"},"Refactored Client Libraries"),(0,r.kt)("p",null,"The brainCloud client libraries have been refactored for greater simplicity and flexibility. Key improvements with these changes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for multiple connections per device \u2190 useful for devices that require multiple concurrent user logins - couch co-op, anyone?"),(0,r.kt)("li",{parentName:"ul"},"Saved wrapper data is now differentiated with a wrapperName value\xa0\u2190 necessary to support multiple connections"),(0,r.kt)("li",{parentName:"ul"},"Access to all client services from the wrapper\xa0\u2190 means the wrapper becomes largely invisible"),(0,r.kt)("li",{parentName:"ul"},"Simpler client code\xa0\u2190 yay!")),(0,r.kt)("h4",{id:"key-api-changes"},"Key API changes"),(0,r.kt)("p",null,"The key change that allows this is the ",(0,r.kt)("em",{parentName:"p"},"deprecation of the singleton behaviour of the brainCloud client libraries"),". As you may or may not know, for convenience the brainCloud client libraries declared singletons for both the BrainCloudWrapper and BrainCloudClient library classes. This provided a bit of convenience for developers - but at considerable costs to flexibility (and frankly, some code readability issues). We are hereby deprecating this behaviour."),(0,r.kt)("p",null,"In addition, we are making the ",(0,r.kt)("em",{parentName:"p"},"client services callable directly from the wrapper")," - which greatly simplifies calling them (and abstracts whether you are calling via the wrapper or directly from the client)."),(0,r.kt)("p",null,"For comparison - here are what two calls to the leaderboard API look like - before and after this API change:"),(0,r.kt)("p",null,"// Old: Call leaderboard API via the wrapper singleton, to the leaderboard service via the BrainCloudClient object\nBrainCloudWrapper.GetBC().getLeaderboardService.ListAllLeaderboards( ApiSuccess, ApiError);"),(0,r.kt)("p",null,"// New: Same call. Note that whether ","_","bc is an instance of BrainCloudWrapper or BrainCloudClient, this code looks the same. Simpler, eh?\n","_","bc.LeaderboardService.ListAllLeaderboards( ApiSuccess, ApiError );"),(0,r.kt)("p",null,"These improvements mean that some client code has to change - but the changes are pretty simple, and we believe well worth-it (see below)."),(0,r.kt)("p",null,"Existing apps have the following options available to them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"No changes")," - stay with brainCloud libraries earlier than 3.6.5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Minimal changes")," - move to brainCloud library 3.6.5, but turn the legacy singleton mode on"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Full changes")," - move to brainCloud library 3.6.5, initialize the brainCloud wrapper to your own global(s), and adjust your calling code accordingly")),(0,r.kt)("p",null,"We highly recommend that new apps use the new paradigm - your code will be simpler for it."),(0,r.kt)("p",null,"For more information, see our ",(0,r.kt)("a",{parentName:"p",href:"/blog/2017/12/12/wrappers-clients-and-inconvenient-singletons/"},"blog post")," with the full details and rationale."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,r.kt)("p",null,"We've made the following portal changes for this release:"),(0,r.kt)("h3",{id:"team"},"Team"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We have restructured the ",(0,r.kt)("strong",{parentName:"li"},"Team")," navigation menu to better group the features. In particular, all of the Admin-management features are now located under the ",(0,r.kt)("strong",{parentName:"li"},"Manage")," menu.")))),(0,r.kt)("h3",{id:"design"},"Design"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core App Info | Advanced Settings",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Disable")),"\xa0",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Live Lock")),"\xa0- Live Lock helps to protect your live apps by forcing you to unlock them before editing. You can now disable this behaviour if you would like (",(0,r.kt)("em",{parentName:"li"},"Note - not recommended for production apps!"),")"))),(0,r.kt)("li",{parentName:"ul"},"Integrations |\xa0Sendgrid",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where test emails were no longer being sent when the\xa0",(0,r.kt)("strong",{parentName:"li"},"[Test]")," button was pressed."))),(0,r.kt)("li",{parentName:"ul"},"Multiplayer | Matchmaking",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Expire matchmaking"))," - Automatically expire (disable) a user's eligibility for matchmaking after <x",">"," days without logging in. Helps to ensure that your players are matched with fresh opponents, instead of players who may no longer be active in your app!")))),(0,r.kt)("h3",{id:"monitoring"},"Monitoring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User Monitoring | Logs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New ",(0,r.kt)("strong",{parentName:"li"},"Export")," feature exports requests and responses in their entirety... (before was limited to request and response summaries)")))),(0,r.kt)("h3",{id:"general"},(0,r.kt)("strong",{parentName:"h3"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User Settings",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Language")," and ",(0,r.kt)("em",{parentName:"li"},"Timezone")," settings are now stored to the developers account profile (instead of local web storage). Also addressed an issue with daylight savings time."))),(0,r.kt)("li",{parentName:"ul"},"Entity Editors",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Global Entity Editor"),", ",(0,r.kt)("em",{parentName:"li"},"Group Entity Editor")," and ",(0,r.kt)("em",{parentName:"li"},"User Entity Editor")," have all been updated to handle ",(0,r.kt)("inlineCode",{parentName:"li"},"Long"),"\xa0values better.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"api-changes"},"API Changes"),(0,r.kt)("p",null,"The following changes/additions have affected the\xa0brainCloud\xa0API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EnableSingletonMode"),"\xa0setting - if you wish to use the brainCloud singleton mode, it is still available, but it must be explicitely enabled. You can do so by setting\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"BrainCloudClient.EnableSingletonMode = true")," in your app."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multiplayer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"<",(0,r.kt)("strong",{parentName:"li"},"New!"),">","\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"IncrementShield()")," - allows you to increment the shield setting without reading it first. Especially useful when extending a shield that is already in place."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Script Service"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"<",(0,r.kt)("strong",{parentName:"li"},"New!"),">"," ",(0,r.kt)("inlineCode",{parentName:"li"},"RunBatchUserScript()"),"\xa0- allows you to queue a script to be run against all of your apps's users! (or select segments)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wrapper"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Singleton behaviour is now deprecated, but can be re-enabled using the\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"EnableSingletonMode")," setting of the Client."),(0,r.kt)("li",{parentName:"ul"},"All of the brainCloudClient service accessors (except AuthenticationService) have been added to the wrapper."),(0,r.kt)("li",{parentName:"ul"},"Unity: Removed static class method ",(0,r.kt)("inlineCode",{parentName:"li"},"Client()")," (which returned the client singleton) and replaced it an instance-level ",(0,r.kt)("inlineCode",{parentName:"li"},"Client()"),"\xa0get / set accessor (which returns the client object associated with this wrapper instance).")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated libraries",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All libraries have been updated with the refactoring and latest API enhancements. We recommend that all apps upgrade!"))),(0,r.kt)("li",{parentName:"ul"},"Documentation updates",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We have updated the docs to reflect the new client calling conventions"))),(0,r.kt)("li",{parentName:"ul"},"Miscellaneous updates",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We have updated brainCloud to use ",(0,r.kt)("strong",{parentName:"li"},"version 2.7 of the Facebook Graph API")))),(0,r.kt)("li",{parentName:"ul"},"Important Fixes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BCLD-2756 - Losing verification code on merging Email account into another account"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2746 - PostTournamentScore/WithResults should auto-join player if Auto Join enabled for leaderboard config"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2742 - Rank added to postTournamentScoreWithResults"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2739 - Fix to before and after handling of postTournamentScoreWithResults"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2721 - When attaching an Email identity and app email feature Send Verification Email is checked , we aren't updating player emailAddress when should be"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2710 - PostTournamentScore(WithResults) - Null pointer exception when posting score to a leaderboard with tournament configured but not active until Next Cycle"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2699 - GlobalEntity Raw Export fails to import when <timeToLive",">"," is 0 (Integer vs. Long)"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2696 - Portal - If you switch apps while editing a web service the page does not update"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2662 - Non Admin Users see the Remove option in the actions menu of the Members page"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2607 - Disable the\xa0","[Go Live]"," button once the user clicks it"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2597 - Portal - If data field for an Entity contains an integer that is too high show a proper error dialog"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2594 - Segment country-code not standardized as UPPERCASE"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2593 - BigInteger web defect - GlobalEntity, ChildEntity, Group and GroupEntity editors"),(0,r.kt)("li",{parentName:"ul"},"BCLD-2646 - Fix the banner in Safari"))),(0,r.kt)("li",{parentName:"ul"},"Plus miscellaneous fixes and performance enhancements...")))}c.isMDXComponent=!0},94848:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/2017-12-11_13-07-46-70751e535f9d33fd38737f1617e935b0.png"},43313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/2017-12-11_13-39-51-52e275df994d389702a1debc0abb4743.png"},44853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2017-12-11_13-07-46-70751e535f9d33fd38737f1617e935b0.png"},591:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2017-12-11_13-39-51-52e275df994d389702a1debc0abb4743.png"}}]);