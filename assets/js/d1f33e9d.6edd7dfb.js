"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[50731],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},52022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Release 2.23.0",date:"2016-05-13",tags:["release-history"]},o=void 0,l={permalink:"/braincloud-apiref/release/2016/05/13/release-2-23-0",source:"@site/release/2016-05-13-release-2-23-0/index.md",title:"Release 2.23.0",description:"Release Highlights",date:"2016-05-13T00:00:00.000Z",formattedDate:"May 13, 2016",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:7.505,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.23.0",date:"2016-05-13",tags:["release-history"]},prevItem:{title:"Release 2.24.0",permalink:"/braincloud-apiref/release/2016/05/27/release-2-24-0"},nextItem:{title:"Release 2.22.0",permalink:"/braincloud-apiref/release/2016/04/14/release-2-22-0"}},s={authorsImageUrls:[]},p=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Release Highlights",id:"release-highlights-1",level:2},{value:"Groups (i.e. Clans)",id:"groups-ie-clans",level:3},{value:"Two-factor Authentication (for Team Members)",id:"two-factor-authentication-for-team-members",level:3},{value:"Scheduled Push Notifications",id:"scheduled-push-notifications",level:3},{value:"Universal Windows Platform Support",id:"universal-windows-platform-support",level:3},{value:"Xamarin Support",id:"xamarin-support",level:3},{value:"watchOS Support",id:"watchos-support",level:3},{value:"Portal\xa0Changes",id:"portalchanges",level:2},{value:"API Changes",id:"api-changes",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(59676).Z},(0,n.kt)("img",{alt:"BC_TwitterT_Clans",src:a(90778).Z,width:"1024",height:"512"}))),(0,n.kt)("p",null,"This release delivers six\xa0new features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Groups! (i.e. Clans!)")," - allow your users to clan-up for greater socialization and competition!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"2FA for Teams!")," An extra level of security for your development accounts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Scheduled Push Notifications!")," Deliver that message at exactly the right time\xa0no matter what timezone your users are in."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Universal Windows Support")," - we have a new C++ library for ",(0,n.kt)("a",{parentName:"li",href:"https://msdn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide"},"Universal Windows Platform (UWP)")," apps."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Xamarin Support")," - we have new iOS and Android libraries for Xamarin!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"watchOS Support")," - built native apps on watchOS using brainCloud!")),(0,n.kt)("p",null,"Plus the usual assortment of API and library improvements. Note that all client libraries have been updated to the latest, except Javascript, which will be updated and released mid-next-week (week of Friday May 18th)."),(0,n.kt)("p",null,"Read on for all the details."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-highlights-1"},"Release Highlights"),(0,n.kt)("h3",{id:"groups-ie-clans"},"Groups (i.e. Clans)"),(0,n.kt)("p",null,"Although you've always been able to write your own clan system in brainCloud using Global Entities and Cloud Code, we thought it was about time that we lent a hand - reducing the coding\xa0burden, and adding great tools support at the same time."),(0,n.kt)("p",null,"This feature provides an API that allows users to dynamically\xa0create, join and manage\xa0Groups."),(0,n.kt)("p",null,"Groups have the following characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Groups are a combination of a ",(0,n.kt)("em",{parentName:"li"},"collection\xa0of users"),", plus some ",(0,n.kt)("em",{parentName:"li"},"shared data")," about those users"),(0,n.kt)("li",{parentName:"ul"},"Groups in brainCloud are organized by Group Type. The developer defines a Group Type, setting certain rules such as maximum # of members, and the action to take if a Group's owner is deleted."),(0,n.kt)("li",{parentName:"ul"},"There are three built-in roles - ",(0,n.kt)("em",{parentName:"li"},"owner"),", ",(0,n.kt)("em",{parentName:"li"},"admin")," and ",(0,n.kt)("em",{parentName:"li"},"member"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Groups are ",(0,n.kt)("em",{parentName:"li"},"owned")," by a single user - but can have additional ",(0,n.kt)("em",{parentName:"li"},"admins")),(0,n.kt)("li",{parentName:"ul"},"Only the owner of a group may delete it.\xa0Owners may leave a group only if they re-assign ownership to another user."),(0,n.kt)("li",{parentName:"ul"},"Group membership can be ",(0,n.kt)("em",{parentName:"li"},"open")," or ",(0,n.kt)("em",{parentName:"li"},"closed"),". Open groups can be freely joined by anyone. Closed groups require an owner or admin to ",(0,n.kt)("em",{parentName:"li"},"invite")," or ",(0,n.kt)("em",{parentName:"li"},"approve")," join requests."),(0,n.kt)("li",{parentName:"ul"},"Groups can associate additional attribute data with members - which can allow for additional developer-defined role types (i.e. think ranks in Clash of Clans - Leader, Co-Leader, Elder, Member, etc)"),(0,n.kt)("li",{parentName:"ul"},"A user can be a member of more than one Group. (Limits can be imposed by the developer, of course)."))),(0,n.kt)("li",{parentName:"ul"},"Group data is a JSON object associated with the group. Access to the data is controlled by the group ACL."),(0,n.kt)("li",{parentName:"ul"},"Groups can also own a set of entities (i.e. Group Entities) for more complex data needs. Group Entities can be owned by the group as a whole, or by individual members within a group."),(0,n.kt)("li",{parentName:"ul"},"Group membership can be used for leaderboard retrieval")),(0,n.kt)("p",null,"For more information re: brainCloud group support, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/group"},"Group API Reference Page"),"\xa0."),(0,n.kt)("h3",{id:"two-factor-authentication-for-team-members"},"Two-factor Authentication (for Team Members)"),(0,n.kt)("p",null,"brainCloud's Two-Factor Authentication (2FA) support allows you to tie your phone to your developer account for extra security and peace-of-mind."),(0,n.kt)("p",null,"We've chosen to\xa0use Twilio's ",(0,n.kt)("a",{parentName:"p",href:"https://www.authy.com/app/mobile/"},"Authy")," technology for our 2FA implementation - it works similarly to Google Authenticator, but gives more options in terms of authentication (text, voice, or app) and offers better management of verification devices."),(0,n.kt)("p",null,"Hooking up 2FA to your account\xa0couldn't be simpler:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Choose ",(0,n.kt)("strong",{parentName:"li"},"Edit Profile")," from the top-right ",(0,n.kt)("strong",{parentName:"li"},"Power")," menu of the brainCloud Portal"),(0,n.kt)("li",{parentName:"ul"},"Go to the new ",(0,n.kt)("strong",{parentName:"li"},"Two-factor")," tab"),(0,n.kt)("li",{parentName:"ul"},"Click on the green\xa0",(0,n.kt)("strong",{parentName:"li"},"[Click to Enable 2FA]")," button and follow the prompts!")),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(35253).Z},(0,n.kt)("img",{alt:"Enable_2FA",src:a(30926).Z,width:"589",height:"437"}))),(0,n.kt)("p",null,"For more information, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/learn/portal-tutorials/two-factor-authentication-for-team-members/"},"Enabling 2FA")," page in our documentation."),(0,n.kt)("h3",{id:"scheduled-push-notifications"},"Scheduled Push Notifications"),(0,n.kt)("p",null,"Through the magic of scheduled cloud code and our push notification API, it's always been possible to schedule push notifications to happen at a precise time. But - what if you want to send notifications to a segment of users, and ensure that those notifications get sent at a standardized local time - say 9am, for each of the users, regardless of their timezone? That was much, much harder."),(0,n.kt)("p",null,"Until now. Our new Schedule Push Notification interface allows you to specify a local time to send all notifications at. brainCloud will then automatically create the appropriate set of scheduled push notification jobs - one for each timezone involved - and then automatically send the notifications at the appropriate time for each group of users."),(0,n.kt)("p",null,"It's extremely powerful, and very simple to use. Check out the new S2S API calls\xa0",(0,n.kt)("a",{parentName:"p",href:"/api/s2s/pushnotification"},"here"),"."),(0,n.kt)("h3",{id:"universal-windows-platform-support"},"Universal Windows Platform Support"),(0,n.kt)("p",null,"We've created a new C++ library with support for ",(0,n.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide"},"Universal Windows Platform")," apps. And we're making the library available via nuget as well. Stay tuned for more details."),(0,n.kt)("h3",{id:"xamarin-support"},"Xamarin Support"),(0,n.kt)("p",null,"With it's recent ",(0,n.kt)("a",{parentName:"p",href:"http://blogs.microsoft.com/blog/2016/02/24/microsoft-to-acquire-xamarin-and-empower-more-developers-to-build-apps-on-any-device/#sm.0000emdu1ai1yfgwrwg1uyf2dwt9j"},"acquisition by Microsoft"),", and integration into Visual Studio, we're finding tons of interest in ",(0,n.kt)("a",{parentName:"p",href:"https://www.xamarin.com/platform"},"Xamarin")," support for brainCloud. We're pleased to announce the availability of the\xa0brainCloud Xamarin.ios and Xamarin.android libraries!"),(0,n.kt)("h3",{id:"watchos-support"},"watchOS Support"),(0,n.kt)("p",null,"Apple\xa0has announced that moving forward, ",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/news/?id=04222016a"},"all new and updated watchOS apps must be native"),". We are here to help, so we've built a new version of the brainCloud library that runs natively on watchOS 2. You're welcome!"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"portalchanges"},"Portal\xa0Changes"),(0,n.kt)("p",null,"The first thing you will notice is that we have re-ordered the tabs of the Design section of the portal to be mostly alphabetical (we still kept the Core App Info section at the top). We've added (and continued to add) so many features to brainCloud, going alphabetical seems like the only way to keep things easily findable."),(0,n.kt)("p",null,"In addition, we've made the following portal changes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Power | Edit User"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Moved the ",(0,n.kt)("strong",{parentName:"li"},"Password")," section\xa0to a separate tab\xa0for clarity."),(0,n.kt)("li",{parentName:"ul"},"Added a new ",(0,n.kt)("strong",{parentName:"li"},"Two-Factor")," tab for enabling Two-Factor Authentication (2FA)."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Admin | Team Members"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added a ",(0,n.kt)("em",{parentName:"li"},"2FA")," column so that you can confirm which team members have enabled Two-Factor Authentication for additional security."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Design | Cloud Code | Scripts"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The scripts screen is now sortable according to the date+time that the scripts were last updated."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Design | Groups"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The\xa0new ",(0,n.kt)("strong",{parentName:"li"},"Group Types")," screen to allow you to define that types of groups that your application will support. Configuration information includes the maximum # of users allowed per group (default is 50 - contact us if you need higher), and what the system should do if the owner of a group is deleted."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Monitoring | Global Monitoring | Jobs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added support for viewing ",(0,n.kt)("em",{parentName:"li"},"Scheduled Push Notification")," jobs."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Monitoring | Group Monitoring"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added new ",(0,n.kt)("strong",{parentName:"li"},"Group Monitoring")," section to allow you to view and manage an application's\xa0global user groups"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Groups")," screen presents a list of all groups, filterable by type of group. You can view the details of a Group by clicking on it - you can even edit the Group's json-data."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"Group Entities")," screen displays\xa0a list of entities associated with groups. The list is filterable by entity type and/or group id. ",(0,n.kt)("em",{parentName:"li"},'Pro-tip - to clickly see a group\'s entities, look up the group in Group Monitoring first, and then choose "View Group Entities" from the action menu.')))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Monitoring | User Monitoring | Groups"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Shows the groups that a user is a member of,\xa0together with details about the group and the user's membership.")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"api-changes"},"API Changes"),(0,n.kt)("p",null,"The following additions / changes have been made to the brainCloud API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Global Entities"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/globalentity/incrementglobalentitydata"},"IncrementGlobalEntityData()"),"\xa0method allows you to increment discrete numeric values in a global entity. Great for incrementing atomic stats-like values without pushing a full update to the entire JSON object."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"New Group API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"There are too many new API methods to list here. For the full description of the new Group and Group Entity APIs, see the ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/group"},"Groups")," section of the API Reference documentation."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboard API"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/leaderboard/getgroupsocialleaderboard"},"GetGroupSocialLeaderboard()"),"\xa0method retrieves a\xa0leaderboard filtered to the members of the specified group"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Push Notifications"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/pushnotification/sendnormalizedpushnotificationtogroup"},"SendNormalizedPushNotificationToGroup()"),"\xa0and ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/pushnotification/sendtemplatedpushnotificationtogroup"},"SendTemplatedPushNotificationToGroup()")," methods sends push notifications to the members of a group"),(0,n.kt)("li",{parentName:"ul"},"New S2S Scheduled Push Notifiation\xa0methods ( ",(0,n.kt)("a",{parentName:"li",href:"/api/s2s/pushnotification/schedulenormalizedpushnotifications"},"ScheduleNormalizedPushNotifications()")," and\xa0",(0,n.kt)("a",{parentName:"li",href:"/api/s2s/pushnotification/schedulerichpushnotifications"},"ScheduleRichPushNotifications()"),"\xa0) allow you to send push notifications to users according to their timezone"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Entities"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/incrementuserentitydata"},"IncrementUserEntityData()")," method allows you to increment discrete numeric values in a user entity.\xa0Just as useful as the GlobalEntity, Group and GroupEntity versions of the same method!"),(0,n.kt)("li",{parentName:"ul"},"New ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/entity/getsharedentitieslistforprofileid"},"GetSharedEntitiesListForPlayerId()")," method\xa0retrieves a list of shared entities for the specified player based on the specified where clause")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"New/updated libraries",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New Universal Windows Platform (UWP) C++ libs"),(0,n.kt)("li",{parentName:"ul"},"New iOS and Android Xamarin\xa0libs"),(0,n.kt)("li",{parentName:"ul"},"New watchOS\xa0libs"),(0,n.kt)("li",{parentName:"ul"},"Upgraded version of OpenSSL in C++ libs"))),(0,n.kt)("li",{parentName:"ul"},"Fixes and changes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Pre-hook cloud-code methods can no longer directly call the API that invoked them (prevents recursion loops!)"))),(0,n.kt)("li",{parentName:"ul"},"Documentation Updates",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Migrated reason codes over to new API Ref docs"),(0,n.kt)("li",{parentName:"ul"},"Improved performance of new API Ref docs -- Table-of-Contents now cached"),(0,n.kt)("li",{parentName:"ul"},"API doc links in API explorer moved to new API Ref"),(0,n.kt)("li",{parentName:"ul"},"Tutorials upgraded to link to new API Reference"),(0,n.kt)("li",{parentName:"ul"},"New error handling tutorial"))),(0,n.kt)("li",{parentName:"ul"},"Miscellaneous defect fixes"),(0,n.kt)("li",{parentName:"ul"},"Miscellaneous performance improvements")))}m.isMDXComponent=!0},59676:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/BC_TwitterT_Clans-29b07c26ac87ee1340cae974ebb07c3a.png"},35253:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/Enable_2FA-987a7fa0e47d1ea91c66603355dc6c94.png"},90778:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BC_TwitterT_Clans-1024x512-b42cc4da0805fc1ab9b403b094950ffe.png"},30926:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Enable_2FA-987a7fa0e47d1ea91c66603355dc6c94.png"}}]);