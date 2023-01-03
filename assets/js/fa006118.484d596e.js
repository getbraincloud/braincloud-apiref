"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[85208],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},65947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={title:"Release 4.2",date:"2019-09-18",tags:["release-history"]},l=void 0,o={permalink:"/braincloud-apiref/release/2019/09/18/release-4-2",source:"@site/release/2019-09-18-release-4-2/index.md",title:"Release 4.2",description:"Release 4.2 contains the first versions of some new heavy-hitter features. Read on for details!",date:"2019-09-18T00:00:00.000Z",formattedDate:"September 18, 2019",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:6.84,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 4.2",date:"2019-09-18",tags:["release-history"]},prevItem:{title:"Release 4.3",permalink:"/braincloud-apiref/release/2019/11/13/release-4-3"},nextItem:{title:"Release 4.1",permalink:"/braincloud-apiref/release/2019/06/25/release-4-1"}},s={authorsImageUrls:[]},u=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Item Management",id:"item-management",level:3},{value:"Custom Entities (beta!)",id:"custom-entities-beta",level:3},{value:"Timed Status Effects",id:"timed-status-effects",level:3},{value:"Blockchain Integration",id:"blockchain-integration",level:3},{value:"Kafka Integration",id:"kafka-integration",level:3},{value:"Other Features",id:"other-features",level:3},{value:"Portal Changes",id:"portal-changes",level:2},{value:"Design",id:"design",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"API Changes",id:"api-changes",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Release 4.2 contains the first versions of some new heavy-hitter features. Read on for details!"),(0,i.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,i.kt)("h3",{id:"item-management"},"Item Management"),(0,i.kt)("p",null,"We are very pleased to introduce the first iteration of brainCloud's new\xa0",(0,i.kt)("strong",{parentName:"p"},"Item Management"),"\xa0system - which incorporates both an ",(0,i.kt)("inlineCode",{parentName:"p"},"ItemCatalog")," service to manage the master catalog of items, and a\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"UserItems"),"\xa0service to manage the list of items that users own."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(20865).Z,width:"1024",height:"645"})),(0,i.kt)("p",null,"Together with a new\xa0",(0,i.kt)("strong",{parentName:"p"},"Catalog Editor"),", these services make it easy to create experiences where users can be awarded, purchase, sell, trade and consume a rich variety of items (with custom behaviours)."),(0,i.kt)("p",null,"Key features of this system include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Localizable names and descriptions"),(0,i.kt)("li",{parentName:"ul"},"Item categories and tags for organization"),(0,i.kt)("li",{parentName:"ul"},"Item pricing (in multiple virtual currencies)"),(0,i.kt)("li",{parentName:"ul"},"Custom item meta-data"),(0,i.kt)("li",{parentName:"ul"},'Item "use" management'),(0,i.kt)("li",{parentName:"ul"},"Activate-able status effects"),(0,i.kt)("li",{parentName:"ul"},"Cool-down and recovery times"),(0,i.kt)("li",{parentName:"ul"},"Stackable items"),(0,i.kt)("li",{parentName:"ul"},"Upload images and assign resource/asset tags"),(0,i.kt)("li",{parentName:"ul"},"Publishing states - draft, published, retired and revoked"),(0,i.kt)("li",{parentName:"ul"},"Deployment integration"),(0,i.kt)("li",{parentName:"ul"},"And with brainCloud's new Blockchain Framework, you can even trade items on the Blockchain! (",(0,i.kt)("em",{parentName:"li"},"see below!"),")")),(0,i.kt)("h3",{id:"custom-entities-beta"},"Custom Entities (beta!)"),(0,i.kt)("p",null,"brainCloud already has some great APIs for managing data in your apps - but due to the challenges of keeping things light and scalable, none of them offer the true flexibility needed for heavy data-oriented applications."),(0,i.kt)("p",null,"Our existing Global Entity system, for example, only indexes entities by the fixed\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"entityIndexedId"),". Although fine for simple applications - in most scenarios this means that Global Entities don't scale efficiently past 1000 objects."),(0,i.kt)("p",null,"Our Custom Entities system is different, in that it allows the developer to define multiple, custom indexes per entity type. This totally opens the door to much richer applications, with more intense data needs."),(0,i.kt)("p",null,"Note - because it's brainCloud, Custom Entities still include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ACL ownership"),(0,i.kt)("li",{parentName:"ul"},"TTL"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createdAt"),",\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"updatedAt"),"\xa0timestamps"),(0,i.kt)("li",{parentName:"ul"},"concurrency versioning")),(0,i.kt)("p",null,"Note - this is a beta release, so there are some limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We don't have a web UI yet - so you cannot view /")," ",(0,i.kt)("strong",{parentName:"li"},"edit / delete")," ",(0,i.kt)("strong",{parentName:"li"},"custom entities in our Design Portal.")," ",(0,i.kt)("em",{parentName:"li"},"You can access them via the API Explorer, of course.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"We don't yet support importing / exporting / pushing of custom entities.")," So basically custom entities are currently trapped within the apps that created them (for now).")),(0,i.kt)("p",null,"We plan to address these limitations very soon.\xa0",(0,i.kt)("em",{parentName:"p"},"And also note, when Custom Entities is released it will be a premium feature with additional data storage charges. Details coming soon.")),(0,i.kt)("p",null,"And that's not all. We have big plans for Custom Entities going forward - so stay tuned!"),(0,i.kt)("h3",{id:"timed-status-effects"},"Timed Status Effects"),(0,i.kt)("p",null,"When building our Item Management system we thought it would be nice to include status effects - as in, when you\xa0",(0,i.kt)("em",{parentName:"p"},"use"),'\xa0an item, you might trigger a status effect like "double-xp" or "invulnerability" for a period of time.'),(0,i.kt)("p",null,"Once we got to implementing things though, we realized that this status system would be useful on its own as well - so we've made it accessible via new APIs in the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerState"),"\xa0service."),(0,i.kt)("p",null,'It\'s super-simple to use. Just apply a "named" status effect to the user via the\xa0',(0,i.kt)("inlineCode",{parentName:"p"},"SetUserStatus()"),"\xa0call - specifying a duration that it should be applied for, and optionally some custom JSON. We'll save that state - and return it if you call\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"GetUserStatus()"),"\xa0- as well as automatically when the user logs in."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note - brainCloud won't pro-actively notify you that a status has expired. The app should set it's own timers based on the data returned by the APIs.")),(0,i.kt)("h3",{id:"blockchain-integration"},"Blockchain Integration"),(0,i.kt)("p",null,"We've been busy adding blockchain support deep into the heart of brainCloud."),(0,i.kt)("p",null,"This is part of our continuing efforts to ensure that brainCloud is the best foundation for your apps - both today and for the future!\xa0"),(0,i.kt)("p",null,"Elements of the blockChain integration in 4.2 include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Blockchain Integration Framework (BIF)"),"\xa0- brainCloud has been enhanced with a new framework to allow connections to multiple blockChain technologies. Currently EOS integration is in place (more will come soon!)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Blockchain configuration"),"\xa0- attach a blockchain configuration to an app. Currently limited to a single blockchain per app, but we may enhance that in the future."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Blockchain Identities"),"\xa0- attach a users public key to a user's profile - used to identify and modify items that the user owns on the blockchain\xa0\u2190\xa0",(0,i.kt)("em",{parentName:"li"},"note, it's up to the client app to ensure that the user is who they say they are!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Item Management Blockchain Sync"),"\xa0- items can be published to and traded on the blockchain - with updates automatically synced in brainCloud"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Blockchain Entity Support"),"\xa0- brainCloud's new Custom Entities are built to support integration with the BIF for blockchain-based ownership management"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Blockchain Purchase Support"),"\xa0- with the key Blockchain Integration and Blockchain Identity components now in place, brainCloud is now ready to support custom blockchain-based purchases (either via Item Trades or custom AppStores)")),(0,i.kt)("p",null,"Obviously, this is just the beginning. Stay tuned as we evolve our blockchain support in future releases!"),(0,i.kt)("h3",{id:"kafka-integration"},"Kafka Integration"),(0,i.kt)("p",null,"brainCloud now offers Kafka integration in addition to our pre-existing Segment integration for DataStream events."),(0,i.kt)("p",null,"With Kafka and Segment both supported out-of-the-box, there are literally hundreds (if not thousands) of systems that you can hook up to your brainCloud apps for deeper data analytics, data mining, etc.\xa0"),(0,i.kt)("h3",{id:"other-features"},"Other Features"),(0,i.kt)("p",null,"But wait - there is more! brainCloud 4.2 also includes these goodies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Crash Reporting"),"\xa0-\xa0new API calls for sending crash reports to DataStream services like Segment and Kafka."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"New platforms!"),"\xa0-\xa0brainCloud private instances now support both\xa0",(0,i.kt)("em",{parentName:"li"},"Google Cloud Platform"),"\xa0and\xa0",(0,i.kt)("em",{parentName:"li"},"Microsoft Azure"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"External lookups!"),"\xa0- ability to lookup users via the External ID in User Monitoring")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,i.kt)("p",null,"We've made the following portal changes:"),(0,i.kt)("h3",{id:"design"},"Design"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integrations | Blockchain"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A new screen where you can configure the blockchain integration settings for your app"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Integration | Manage Integrations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kafka has been added as a new DataStream destination"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Item Management | Catalog"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"New screen for creating your app's item catalog")))),(0,i.kt)("h3",{id:"monitoring"},"Monitoring"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Group Monitoring | Group Entities"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The group entity editor has been greatly improved!"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User Monitoring | Select User"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can now look-up users via their External Auth id (if they have one)\xa0")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"api-changes"},"API Changes"),(0,i.kt)("p",null,"The following changes/additions have affected the\xa0brainCloud\xa0API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authentication"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AuthenticateExternal - We've added the ability for External Auth scripts to override the externalId that will be stored, and to even provide the specific profileId to load. More details in the\xa0",(0,i.kt)("em",{parentName:"li"},"Advanced"),"\xa0section of the\xa0",(0,i.kt)("a",{parentName:"li",href:"/learn/key-concepts/authentication/external-authentication/"},"External Authentication"),"\xa0overview page in API Docs."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DataStream"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"New CrashReporting API has been added. Send crash reports to your back-end system for further analysis."),(0,i.kt)("li",{parentName:"ul"},"For more information, see the DataStream service documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[New!]"," Item Catalog"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"These APIs allow devs to read and modify the central item catalog"),(0,i.kt)("li",{parentName:"ul"},"Purchases and other operations are handled via the User Items Service (below)"),(0,i.kt)("li",{parentName:"ul"},"For more information, see the ItemCatalog service documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Player State"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"New Timed Status Effect API methods have been added to the Player State service"),(0,i.kt)("li",{parentName:"ul"},"For more information, see the PlayerState service documentation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[New!]","\xa0User Items"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This service provides the functionality for purchasing, selling, trading, and using items"),(0,i.kt)("li",{parentName:"ul"},"For more information, see the UserItem service documentation")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated libraries",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The 4.2 libraries have the latest APIs - and will be release very soon - stay tuned!"),(0,i.kt)("li",{parentName:"ul"},"C#/Unity",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Updated HTTP libraries (note, wrapped in the Braincloud namespace, so they shouldn't conflict with anything)"),(0,i.kt)("li",{parentName:"ul"},"Added BC","_","DEBUG","_","LOG","_","ENABLED macro for better log control, and improved profiler performance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Important: Unity folder structure has been changed.")," ",(0,i.kt)("em",{parentName:"li"},"Clients will need to delete their brainCloud plug-in and re-import it to properly update the folder structure on older projects.")," The brainCloud Folder needs to be directly in the Assets folder. Changes were made because the plugin's Resources folder was conflicting with the Unity Resources folder, and messing with some build systems. Thus we have restructured our assets and renamed our resources folder to BCResources to compensate."))),(0,i.kt)("li",{parentName:"ul"},"Javascript",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ping data APIs now supported (for geo matchmaking)"))),(0,i.kt)("li",{parentName:"ul"},"AS3",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"4.2 version coming soon."))))),(0,i.kt)("li",{parentName:"ul"},"Documentation updates",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check out the APIDocs for information on the latest APIs -\xa0",(0,i.kt)("a",{parentName:"li",href:"/api/introduction"},"https://getbraincloud.com/api/introduction"),"\xa0"),(0,i.kt)("li",{parentName:"ul"},"Don't forget to check out our expanded knowledge base -\xa0",(0,i.kt)("a",{parentName:"li",href:"http://help.getbraincloud.com/"},"http://help.getbraincloud.com"),"\xa0"))),(0,i.kt)("li",{parentName:"ul"},"Plus miscellaneous fixes and performance enhancements...")))}m.isMDXComponent=!0},20865:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2019-09-13_16-25-56-1-1024x645-39167faec220d2c68a4ce063ed6f0826.png"}}]);