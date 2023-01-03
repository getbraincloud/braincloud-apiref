"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[98461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={title:"Release 4.5.5 is live!",date:"2020-07-15",tags:["release-history"]},i=void 0,o={permalink:"/braincloud-apiref/release/2020/07/15/release-4-5-5",source:"@site/release/2020-07-15-release-4-5-5/index.md",title:"Release 4.5.5 is live!",description:"We have bad news and good news.",date:"2020-07-15T00:00:00.000Z",formattedDate:"July 15, 2020",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:12.29,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 4.5.5 is live!",date:"2020-07-15",tags:["release-history"]},prevItem:{title:"Important - All Android apps should turn on Amazon Platform Support!",permalink:"/braincloud-apiref/release/2020/08/16/important-all-android-apps-should-turn-on-amazon-platform-support"},nextItem:{title:"Release 4.5",permalink:"/braincloud-apiref/release/2020/04/25/release-4-5"}},s={authorsImageUrls:[]},p=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Amazon In-App Purchase Support",id:"amazon-in-app-purchase-support",level:3},{value:"Global Files V3 Portal Support",id:"global-files-v3-portal-support",level:3},{value:"Slack Alerts (beta)",id:"slack-alerts-beta",level:3},{value:"Custom Entity Singleton API",id:"custom-entity-singleton-api",level:3},{value:"Auto-Delete Dormant Users",id:"auto-delete-dormant-users",level:3},{value:"Auto-deletion settings",id:"auto-deletion-settings",level:4},{value:"Additional Feature and Improvements!",id:"additional-feature-and-improvements",level:3},{value:"Portal Changes",id:"portal-changes",level:2},{value:"Design",id:"design",level:3},{value:"API Changes",id:"api-changes",level:2},{value:"<strong>Client APIs</strong>",id:"client-apis",level:3},{value:"S2S APIs",id:"s2s-apis",level:3},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We have bad news and good news."),(0,l.kt)("p",null,"The bad news is that delivering the full 4.6 Release (with Cloud Code Folders support) is taking longer than expected. Our adjusted schedule puts that release in September. (boo!)"),(0,l.kt)("p",null,"The good news is that there are a bunch of smaller features that we are finishing up now - and so instead of making you wait until 4.6 for everything, we are going to do an early 4.5.5 release instead! (yay!)"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"PS - Don\u2019t let the .5 release number fool you - there is a lot here!")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Important"))," ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Compatibility alert!"),' - Our C# 4.5.5 Unity Libs now recognize when they are being run on Amazon Fire devices, and set the "platform type" appropriately (for better analytics). As a side effect of this, you need to ',(0,l.kt)("strong",{parentName:"em"},"enable the new Amazon platform")," on the ",(0,l.kt)("strong",{parentName:"em"},"Design | Core App Info | Platforms")," page for it to run on Amazon devices! You will need to do this even if you aren't using Amazon IAP.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Pricing alert!")," - This release includes a new feature for Auto-Deleting Dormant Users. This is in preparation for charging devs for storing Dormant Users - which will become effective in ",(0,l.kt)("strong",{parentName:"em"},"January 2021"),". Read on for more details!")),(0,l.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,l.kt)("h3",{id:"amazon-in-app-purchase-support"},"Amazon In-App Purchase Support"),(0,l.kt)("p",null,"At long last, brainCloud brings support for Amazon AppStore In-app Purchase items. This includes support for both Consumable and Non-consumable items (i.e. Entitlements). Basic subscription support is in place as well."),(0,l.kt)("p",null,"Perform the following steps to add Amazon IAP support to your app:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("a",{parentName:"li",href:"https://developer.amazon.com/apps-and-games/console"},"Amazon Developer Services")," portal",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Register your app (and it\u2019s IAP products). Create a Product for each price entry you wish to manage in brainCloud."))),(0,l.kt)("li",{parentName:"ul"},"In the brainCloud Design Portal",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Configure the ",(0,l.kt)("em",{parentName:"li"},"Shared Secret")," key on the ",(0,l.kt)("strong",{parentName:"li"},"Design | Core App Info | Application IDs")," page - ",(0,l.kt)("strong",{parentName:"li"},"Amazon tab")," of the brainCloud Design Portal. You can find your shared secret key ",(0,l.kt)("a",{parentName:"li",href:"https://developer.amazon.com/settings/console/sdk/shared-key"},"here"),"."),(0,l.kt)("li",{parentName:"ul"},"On the ",(0,l.kt)("strong",{parentName:"li"},"Design | Marketplace | Products")," page - configure the ",(0,l.kt)("em",{parentName:"li"},"Amazon Product SKUs")," for the appropriate price entries."))),(0,l.kt)("li",{parentName:"ul"},"In your app",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Integrate the latest brainCloud and Amazon libs into your app"),(0,l.kt)("li",{parentName:"ul"},"Call AppStore.GetSalesInventory(), passing in the new \u201camazon\u201d platform, to get a list of the products and their current prices (i.e. Amazon IAP SKUs)"),(0,l.kt)("li",{parentName:"ul"},"Use the appropriate ",(0,l.kt)("em",{parentName:"li"},"Amazon APIs")," to perform the purchase."),(0,l.kt)("li",{parentName:"ul"},"Verify the receipt that is returned via the AppStore.VerifyPurchase() call",(0,l.kt)("br",{parentName:"li"}),"")))),(0,l.kt)("h3",{id:"global-files-v3-portal-support"},"Global Files V3 Portal Support"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(22007).Z,width:"1024",height:"800"})),(0,l.kt)("p",null,"In ",(0,l.kt)("strong",{parentName:"p"},"4.5"),", we introduced our new ",(0,l.kt)("strong",{parentName:"p"},"Global File")," service - which enables developers to organize files into folders - and to allow migrating of uploaded ",(0,l.kt)("strong",{parentName:"p"},"User Files \u2192")," ",(0,l.kt)("strong",{parentName:"p"},"Global Files"),"."),(0,l.kt)("p",null,"In ",(0,l.kt)("strong",{parentName:"p"},"4.5.5"),", we have made the Global File service more accessible, by giving it its own page in the Design Portal. Simply navigate to ",(0,l.kt)("strong",{parentName:"p"},"Design | Custom Config | Global Files")," and start uploading your files!"),(0,l.kt)("p",null,"From the Design Portal, you can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"upload, move, copy and delete ",(0,l.kt)("em",{parentName:"li"},"files")),(0,l.kt)("li",{parentName:"ul"},"create, move, and delete ",(0,l.kt)("em",{parentName:"li"},"folders")),(0,l.kt)("li",{parentName:"ul"},"download an archive of all of an app\u2019s global files"),(0,l.kt)("li",{parentName:"ul"},"restore an archive of an app\u2019s global files")),(0,l.kt)("p",null,"In addition, brainCloud 4.5.5 now migrates Global Files during deployment."),(0,l.kt)("h3",{id:"slack-alerts-beta"},"Slack Alerts (beta)"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(91426).Z,width:"1024",height:"620"})),(0,l.kt)("p",null,"We have added our first cut of Slack integration to brainCloud!"),(0,l.kt)("p",null,"With this integration, you can configure a custom channel (or channels) to receive alerts from selected categories, including:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"chat - profanity filter violations"),(0,l.kt)("li",{parentName:"ul"},"deploys - app deployments"),(0,l.kt)("li",{parentName:"ul"},"hosting - room servers spinning up / down"),(0,l.kt)("li",{parentName:"ul"},"integration - push notification expiry warnings"),(0,l.kt)("li",{parentName:"ul"},"jobs - background reporting jobs started / completed"),(0,l.kt)("li",{parentName:"ul"},"purchases - customer purchase notifications \u2190 fun!")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"http://help.getbraincloud.com/en/articles/4236297-configuring-slack-alerts"},"this")," knowledge base article for instructions on configuring the slack webhooks for integration."),(0,l.kt)("h3",{id:"custom-entity-singleton-api"},"Custom Entity Singleton API"),(0,l.kt)("p",null,"Here is an interesting statistic:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The ",(0,l.kt)("inlineCode",{parentName:"em"},"UpdateSingleton()")," call for User Entities is by far the most heavily called client method. It is called >5X more often than it\u2019s closest rival.")),(0,l.kt)("p",null,"The reason is that it allows devs to bypass micromanaging ids. For example - You don\u2019t need to know the entityId of the \u201cCampaignSave\u201d object to read and update. Your app just knows that there is only one of them per user - and updates them via the type (i.e. \u201cCampaignSave\u201d) instead of the id."),(0,l.kt)("p",null,"Given the popularity of the singleton pattern - we thought it fitting to bring a ",(0,l.kt)("em",{parentName:"p"},"singleton API")," to ",(0,l.kt)("em",{parentName:"p"},"Owned Custom Entities")," as well!"),(0,l.kt)("p",null,"The following new methods have been added:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UpdateSingleton()")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"UpdateSingletonFields()")," \u2190 partial updates for singletons!"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReadSingleton()")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"DeleteSingleton()"),".")),(0,l.kt)("p",null,"Note that the singleton API only works for ",(0,l.kt)("em",{parentName:"p"},"owned")," Custom Entities."),(0,l.kt)("h3",{id:"auto-delete-dormant-users"},"Auto-Delete Dormant Users"),(0,l.kt)("p",null,"At long last, brainCloud will now support the automatic deletion of Dormant Users."),(0,l.kt)("p",null,"brainCloud defines a dormant user as ",(0,l.kt)("em",{parentName:"p"},"a user that has an account in an app, but hasn\u2019t logged into it in the past 180 days")," (i.e. 6 months)."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The evils of Dormant users:")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"The storage (and backups) of dormant users greatly adds to the costs of running brainCloud - and weighs down the performance of apps - with little or no benefit to developers (and their marketing teams) - as most users are anonymous and have probably already uninstallled your app!")),(0,l.kt)("p",null,"brainCloud is making 3 key changes to combat the evils of dormant users:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Adding a new ",(0,l.kt)("strong",{parentName:"li"},"Auto-delete")," feature that devs can ",(0,l.kt)("em",{parentName:"li"},"enable")," to automatically delete dormant users. This feature is safe and highly configurable - see details below."),(0,l.kt)("li",{parentName:"ol"},"Adding a new ",(0,l.kt)("strong",{parentName:"li"},"Dormant Users Fee")," to brainCloud\u2019s monthly invoices. Devs will be charged $75 per Million dormant users (pro-rated). (Note - this line item is actually already on invoices - but the cost is currently set to $0 / million)."),(0,l.kt)("li",{parentName:"ol"},"Finally, we will not start charging the fees until ",(0,l.kt)("strong",{parentName:"li"},"January 2021")," - so that devs have the opportunity to delete their users first. Auto-deletion isn\u2019t instantaneous - it works slowly in the background so as not to impact brainCloud system performance. Some brainCloud apps have over 100 million dormant users - it will take time to delete them!")),(0,l.kt)("h4",{id:"auto-deletion-settings"},"Auto-deletion settings"),(0,l.kt)("p",null,"The new Auto-deletion process is highly configurable. It allows you to set:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"#"," of days of inactivity")," - brainCloud considers an account dormant after 180 days - but you can decide to only delete accounts after 1 year, for example."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"exceptions")," - easily exclude users who have made purchases, have e-mail addresses, have XP levels greater than some threshold, have currency balances greater than a threshold, or are members of selected segments."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(optional) email notifications")," - want to warn users (that you have email addresses for) that their accounts will be deleted soon? You can send two notices. Of course, any users that login after the notice and before the deletion date are automatically removed from the deletion queue."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(optional) archive service")," - want to archive the users (temporarily) before deletion? We have that covered as well! Just configure an Owned Custom Entity type and we\u2019ll temporarily store an archive of the user there - you decide for how long. Note that standard Custom Entity charges apply. Also - there is no automated way to restore an archived user - though it is certainly possible to manually do so - all the data is there in the archive JSON.")),(0,l.kt)("p",null,"Note that the Auto-Deletion process does consume some API counts - in accordance to how it has been configured - namely:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"+1 Bulk API Count for each user deleted"),(0,l.kt)("li",{parentName:"ul"},"+1 Email Sent API Count for each email notification sent")),(0,l.kt)("p",null,"We understand that this is a big change - and that deleting users can be scary - but we have worked hard to build a safe solution that keeps developers in control of their user data and infrastructure costs. We hope you agree!"),(0,l.kt)("p",null,"This feature will not be enabled immediately upon 4.5.5 release. We have got a bit of final testing on the production hardware before we turn it on.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Plus - as a reminder - billing for Dormant User retention will not begin until January 2021."))),(0,l.kt)("h3",{id:"additional-feature-and-improvements"},"Additional Feature and Improvements!"),(0,l.kt)("p",null,"The following new features aren\u2019t headliners - but they are worth a mention!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Leaderboard Deployment Options")," - new options to allow deployment to production apps without touching or destroying dynamically created leaderboards."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Custom Entity Deletion")," ",(0,l.kt)("strong",{parentName:"li"},"Queries")," - we have added some new deletion calls that support query filters. Much more efficient than individually calling delete for each entity!"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Product & Promotion Management APIs")," - we have added new S2S and cloud-code APIs for managing ",(0,l.kt)("em",{parentName:"li"},"Products & Prices"),", and both ",(0,l.kt)("em",{parentName:"li"},"Scheduled")," and ",(0,l.kt)("em",{parentName:"li"},"Automated Promotions"),". These new APIs contain feature enhancements as well, including the ability to attach ",(0,l.kt)("em",{parentName:"li"},"custom JSON objects")," to both Prices and Promotions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Segment, Currency, and Notification Queries")," - in support of the above APIs, we have added several utility methods that retrieve the current segments for a user, the overall segment list, the list of push notification templates, and the list of virtual currency types. We have also added a new method to dynamically refresh the user\u2019s segment list (to recalculate the segments since they logged in)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Unreal 4.25 Support!")," Technically, 4.25 support was added as a library patch for brainCloud 4.5 - but it\u2019s totally worth mentioning. \xa0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RTT")," ","-"," we have added additional edge-case handling to prevent unnecessary disconnects - especially in regards to the Java client"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Room & Relay Server launches")," - are now handled more efficiently in the background"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RTT & Relay Comms")," - there are improvements in every client release. In particular, there are improvements in the Java Libraries this release")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,l.kt)("p",null,"We have made the following changed to the Design Portal:"),(0,l.kt)("h3",{id:"design"},"Design"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Core App Info | Application IDs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Added a new Amazon tab where you can fill in the ",(0,l.kt)("em",{parentName:"li"},"Shared Secret")," necessary for validating ",(0,l.kt)("em",{parentName:"li"},"Amazon AppStore")," receipts"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(New!) Core App Info | Auto Delete Users"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"New screen for configuring the auto-deletion of dormant users"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Note - this screen will not show up for a few weeks as we complete final testing.")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Cloud Code | My Servers"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"You can now pick a ",(0,l.kt)("em",{parentName:"li"},"relay protocol")," to use for your Relay Servers. The only choice currently is ",(0,l.kt)("strong",{parentName:"li"},"V1")," - but ",(0,l.kt)("strong",{parentName:"li"},"V2")," is coming very soon with ",(0,l.kt)("em",{parentName:"li"},"improved performance and reliability"),"!"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"(New!) Custom Config | Global Files"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Manage the files and folders for the Global Files V3 service"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Integrations | Manage Integrations"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Integrate brainCloud with your ",(0,l.kt)("strong",{parentName:"li"},"Slack")," instance"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Marketplace | Products"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Configure Amazon IAP pricing for products"),(0,l.kt)("li",{parentName:"ul"},"Expanded support for ",(0,l.kt)("em",{parentName:"li"},"custom JSON")," on products"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Promotions | Automated"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The UI for targeting segments align better with the ",(0,l.kt)("em",{parentName:"li"},"Scheduled Promotions")," screen"),(0,l.kt)("li",{parentName:"ul"},"Added the ability to attach custom JSON to promotions"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Promotions | Scheduled"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Added the ability to attach custom JSON to promotions"),(0,l.kt)("li",{parentName:"ul"},"Fixed an odd behavior where you had to set the start time to the future when editing scheduled promotions.")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Also of note - user counts throughout the portal should now be more accurate - taking into account deleted and merged accounts (as well as accounts created directly via the User Service).")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"api-changes"},"API Changes"),(0,l.kt)("p",null,"The following changes/additions have affected the brainCloud API:"),(0,l.kt)("h3",{id:"client-apis"},(0,l.kt)("strong",{parentName:"h3"},"Client APIs")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Custom Entity"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New!"),"\xa0",(0,l.kt)("em",{parentName:"li"},"Singleton"),"\xa0APIs -\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"DeleteSingleton()"),",\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"ReadSingleton()"),",\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"UpdateSingleton()"),", and\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"UpdateSingletonFields()"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New!"),"\xa0",(0,l.kt)("em",{parentName:"li"},"Delete multiple entities"),"\xa0in a single call using\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"DeleteEntities()"),"\xa0&\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"SysDeleteEntities()"),".\xa0\xa0",(0,l.kt)("br",{parentName:"li"}),"",(0,l.kt)("em",{parentName:"li"},"Note that apps are charged +1 Bulk API Count per entity deleted, in addition to the API Count for the call itself.")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New!"),"\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"IncrementData()")," call added to client libs"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Product Management"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New!")," APIs for managing products and their associated prices",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysAddProductPrice()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysCreateProduct()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysDeleteProduct()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysDeleteProductPrice()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysGetProductList()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysReadProduct()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysSetDefaultProductPrice()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysUpdateProduct()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysUpdateProductPrice()")))),(0,l.kt)("li",{parentName:"ul"},"Note that all of the above methods are available via cloud-code and S2S only."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Promotions"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New!")," APIs for managing both scheduled and automated promotions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysCreatePromotion()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysDeletePromotion()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysEnablePromotion()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysGetPromotionList()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysReadPromotion()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysUpdatePromotion()")))),(0,l.kt)("li",{parentName:"ul"},"Note that all of the above methods are available via cloud-code and S2S only."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Push Notification"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"New!\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"SysGetNotificationTemplates()"),"\xa0API to return the list of notification templates configured in the portal."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Segment"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New!"),"\xa0Two methods have been added for retrieving the user\u2019s segment, and the full list of segments respectively:\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"GetMySegmentsLegacy()"),"\xa0and\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"SysGetSegmentList()"),". We have made these methods cloud-code only because we plan to introduce schema changes in this area in the future, and don\u2019t want client apps to be caught flat-footed."),(0,l.kt)("li",{parentName:"ul"},"New! We have also added the\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"RefreshMySegments()"),"\xa0cloud-code call to allow dynamically refreshing of segments during a session.\xa0",(0,l.kt)("em",{parentName:"li"},"Note that segments are already automatically refreshed upon authentication"),"\xa0\u2013 this method can be used to cause segments to refresh mid-session - for example, after completing a level.\xa0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Virtual Currency"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"New!")," The following methods have been added for retrieving the list of currency types that have been defined in the portal:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysGetCurrencyTypes()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysGetParentCurrencyTypes()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SysGetPeerCurrencyTypes()")))),(0,l.kt)("li",{parentName:"ul"},"Note that all of the above methods are available via cloud-code and S2S only.")))),(0,l.kt)("h3",{id:"s2s-apis"},"S2S APIs"),(0,l.kt)("p",null,"All of the SYS calls described above are available via the\xa0",(0,l.kt)("em",{parentName:"p"},"Server-to-Server API"),"\xa0as well."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated libraries",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"All client libraries have been updated with the latest API enhancements - go get 'em!"),(0,l.kt)("li",{parentName:"ul"},"The following client libraries have additional improvements:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Unreal Lib - now supports\xa0",(0,l.kt)("strong",{parentName:"li"},"Unreal 4.25"),"!"),(0,l.kt)("li",{parentName:"ul"},"Java Libs - there are some good RelayComms fixes in there."),(0,l.kt)("li",{parentName:"ul"},"In general, it is always best to update to our latest client libs!"))),(0,l.kt)("li",{parentName:"ul"},"There have been no changes to the S2S libraries themselves. The generic mechanism employed by our S2S libs is API agnostic - and thus the 4.5 libs already support all 4.5.5 APIs."))),(0,l.kt)("li",{parentName:"ul"},"Documentation updates",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"All new methods are documented in our APIREF - ",(0,l.kt)("a",{parentName:"li",href:"https://getbraincloud.com/apidocs/apiref"},"https://getbraincloud.com/apidocs/apiref")),(0,l.kt)("li",{parentName:"ul"},"You\u2019ll find our new Amazon IAP tutorial here -\xa0",(0,l.kt)("a",{parentName:"li",href:"/learn/portal-tutorials/store-integration-amazon/"},"https://getbraincloud.com/apidocs/portal-usage/store-integration-amazon/")))),(0,l.kt)("li",{parentName:"ul"},"Important Fixes",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BCLD-5722 - Unreal blueprint tutorial on website is out of date for UE 4.24. will crash on initialize app."),(0,l.kt)("li",{parentName:"ul"},"BCLD-5724 - Unreal C++ tutorial on website is out of date, method getInstance() doesn't exist in BrainCloudClient class."),(0,l.kt)("li",{parentName:"ul"},"BCLD-6072 - Price entries can be created for products without an appstore defined with it"),(0,l.kt)("li",{parentName:"ul"},"BCLD-5960 - Users should not be able to use '.' (dot) in external auth type"),(0,l.kt)("li",{parentName:"ul"},"BCLD-6105 - Should be able to edit Scheduled Promotion without setting it's start time to the future"),(0,l.kt)("li",{parentName:"ul"},"BCLD-6090 - brainCloud java client sends empty RTT ping packets that cause immediate disconnect from event server"),(0,l.kt)("li",{parentName:"ul"},"BCLD-5922 - Matchmaking process is blocked by room/relay server spin-up"),(0,l.kt)("li",{parentName:"ul"},"BCLD-5909 - User counts on Manage | Apps and Reporting | Analytics don't exclude deleted users OR include users created via UserService"),(0,l.kt)("li",{parentName:"ul"},"BCLD-5738 - Java RelayComms double queue UDP ordered relay packets"))),(0,l.kt)("li",{parentName:"ul"},"Plus miscellaneous fixes and performance enhancements...")))}m.isMDXComponent=!0},22007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/globalFiles-1024x800-d0c74e27b5627866009a77ae828892c1.png"},91426:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/slackalerts-1024x620-fc190c590f9ad31cadb1d60a9d5ab507.png"}}]);