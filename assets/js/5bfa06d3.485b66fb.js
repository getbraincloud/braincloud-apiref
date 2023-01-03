"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[16870],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,c=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?r.createElement(c,i(i({ref:t},m),{},{components:a})):r.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},52439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Release 4.5.6 is live!",date:"2020-09-16",tags:["release-history"]},i=void 0,l={permalink:"/braincloud-apiref/release/2020/09/16/release-4-5-6",source:"@site/release/2020-09-16-release-4-5-6/index.md",title:"Release 4.5.6 is live!",description:"brainCloud 4.5.6 is a very focused release - but much more significant than the version number would imply.",date:"2020-09-16T00:00:00.000Z",formattedDate:"September 16, 2020",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:7.355,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 4.5.6 is live!",date:"2020-09-16",tags:["release-history"]},prevItem:{title:"Release 4.6 is live!",permalink:"/braincloud-apiref/release/2020/11/17/release-4-6"},nextItem:{title:"Important - All Android apps should turn on Amazon Platform Support!",permalink:"/braincloud-apiref/release/2020/08/16/important-all-android-apps-should-turn-on-amazon-platform-support"}},s={authorsImageUrls:[]},p=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Improved Relay Servers",id:"improved-relay-servers",level:3},{value:"Matchmaking Optimizations",id:"matchmaking-optimizations",level:3},{value:"Miscellaneous Changes",id:"miscellaneous-changes",level:3},{value:"Procedure: Relay Server Migration",id:"procedure-relay-server-migration",level:2},{value:"Approach",id:"approach",level:3},{value:"Step-by-step",id:"step-by-step",level:3},{value:"Design Portal",id:"design-portal",level:4},{value:"App Code",id:"app-code",level:4},{value:"App Submission &amp; Migration",id:"app-submission--migration",level:4},{value:"Portal Changes",id:"portal-changes",level:2},{value:"<strong>Design</strong>",id:"design",level:3},{value:"API Changes",id:"api-changes",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],m={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"brainCloud 4.5.6 is a very focused release - but much more significant than the version number would imply."),(0,n.kt)("p",null,"This update brings the release of our new\xa0",(0,n.kt)("strong",{parentName:"p"},"Version 2"),"\xa0",(0,n.kt)("strong",{parentName:"p"},"Relay Servers"),"\xa0- which are more reliable, more feature-rich, and faster to launch than our original Relay Servers."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Important: The\xa0",(0,n.kt)("strong",{parentName:"em"},"RelayComms V2 Protocol"),"\xa0(used by\xa0brainCloud 4.5.6 and newer libs)\xa0",(0,n.kt)("strong",{parentName:"em"},"is not compatible"),"\xa0with the\xa0",(0,n.kt)("strong",{parentName:"em"},"RelayComms V1 Protocol")," (used by\xa0brainCloud 4.5.5\xa0and older libs). The\xa0recommended migration process\xa0is described later in this document.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("h3",{id:"improved-relay-servers"},"Improved Relay Servers"),(0,n.kt)("p",null,"As more and more apps use brainCloud's Relay Servers, we have realized some limitations with our initial implementation:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Defect - reliable acknowledgments don't consider all combinations of channel ","*"," reliable bit ","*"," ordered bit ","*"," net id (from user). Combinations of reliable/ordered would FAIL if used within the same channel Id. This issue would normally only happen with higher player counts - but it is definitely an issue."),(0,n.kt)("li",{parentName:"ol"},"Limitation - no way to send a message to a subset of players (e.g. your team in a competitive game). V1 only allowed for sending to\xa0",(0,n.kt)("em",{parentName:"li"},"all"),", or to a\xa0",(0,n.kt)("em",{parentName:"li"},"single"),"\xa0specified user"),(0,n.kt)("li",{parentName:"ol"},"Limitation -\xa0no protocol version embedded in the protocol - which makes it near impossible to modify/extend/correct the protocol and maintain compatibility with older clients."),(0,n.kt)("li",{parentName:"ol"},"Unoptimized - the Docker container used to launch the relay servers wasn\u2019t properly optimized to improve launch times.\xa0")),(0,n.kt)("p",null,"The\xa0",(0,n.kt)("em",{parentName:"p"},"good"),"\xa0news is that we have addressed these limitations with\xa0",(0,n.kt)("strong",{parentName:"p"},"Version 2"),"\xa0of our\xa0",(0,n.kt)("strong",{parentName:"p"},"RelayComms Protocol"),"\xa0- and incorporated it into our new\xa0",(0,n.kt)("strong",{parentName:"p"},"Relay Servers"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"p"},"4.5.6 Client Libraries"),".\xa0"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"better")," news is that the Client APIs for the new RelayComms is ",(0,n.kt)("em",{parentName:"p"},"almost completely")," compatible - that is, you don\u2019t need to change your client code to use the new servers - other than:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In C#-only, you need to adjust for the new\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"netId"),"\xa0parameter in the\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"RelayCallback()"),"\xa0method \u2190 ",(0,n.kt)("em",{parentName:"li"},"note, this was a defect. The other languages already had that parameter in their callback method.")),(0,n.kt)("li",{parentName:"ul"},"If migrating a ",(0,n.kt)("em",{parentName:"li"},"Live")," application, you will need to substitute in the new lobby ids (see the ",(0,n.kt)("em",{parentName:"li"},"migration")," ",(0,n.kt)("em",{parentName:"li"},"procedure")," section below)")),(0,n.kt)("p",null,"The\xa0",(0,n.kt)("em",{parentName:"p"},"bad"),"\xa0news is that our new\xa0",(0,n.kt)("strong",{parentName:"p"},"V2 Relay Servers are not compatible with our 4.5.5 and older client libraries"),"\xa0- so they only work with brainCloud 4.5.6 libs and greater. Conversely - the new 4.5.6 libs do not work with the legacy Relay Servers - so migrating your apps to the new Relay Servers (which we highly recommend) must be done carefully. We provide the details on how to do this without interruption in a section below."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(29386).Z,width:"554",height:"116"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note - The V1 RelayServers will continue to function for the foreseeable future (at least 1 year) - so you do not need to force a short-term upgrade to your app. It is highly recommended that apps upgrade when they get a chance however.")),(0,n.kt)("h3",{id:"matchmaking-optimizations"},"Matchmaking Optimizations"),(0,n.kt)("p",null,"This release also includes some serious optimizations to brainCloud's Online Matchmaking and Lobby System algorithms - resulting in:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"greater lobby queue scalability"),(0,n.kt)("li",{parentName:"ul"},"much faster best-case room/relay server launches")),(0,n.kt)("p",null,"Note that these changes are completely under-the-hood - no API changes required."),(0,n.kt)("h3",{id:"miscellaneous-changes"},"Miscellaneous Changes"),(0,n.kt)("p",null,"The following changes are also included in this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Amazon Platform detection")," - has been added to all of the libs (except C++). Important - be sure to turn on the \u201cAmazon\u201d platform on the\xa0",(0,n.kt)("strong",{parentName:"li"},"Design | Core App Info | Platforms"),"\xa0page for your app. This is important even if you aren\u2019t using Amazon IAP - otherwise, your Android app won\u2019t launch on Amazon devices!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Ability to ",(0,n.kt)("strong",{parentName:"em"},"clone")," Lobby and Server types")," - has been added to facilitate easier migration to the new Relay Servers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Improved ",(0,n.kt)("strong",{parentName:"em"},"WebPurify")," integration")," - are servers are now properly encoding problematic text characters before sending them to WebPurify")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"procedure-relay-server-migration"},"Procedure: Relay Server Migration"),(0,n.kt)("p",null,"The following approach is recommended for migrating your app from\xa0",(0,n.kt)("strong",{parentName:"p"},"V1 Relay Servers \u2192 V2 Relay Servers"),".\xa0"),(0,n.kt)("p",null,"This approach has been designed to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ensure the app is available to all players throughout the migration"),(0,n.kt)("li",{parentName:"ul"},"support the various app store review processes\xa0"),(0,n.kt)("li",{parentName:"ul"},"keep the developer in control of the timelines of the migration.")),(0,n.kt)("h3",{id:"approach"},"Approach"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Benefits: This approach allows users of your old client to continue to play using the V1 Relay Servers - even as your updated client goes through app store reviews, soft launch, etc. using the new V2 Relay Servers. And then, after your release has been deployed globally and across all platforms, you can \u201cforce\u201d users to upgrade to unite all players together again.")),(0,n.kt)("p",null,"The executive summary of the recommended approach is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clone the\xa0",(0,n.kt)("strong",{parentName:"li"},"Lobby"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"li"},"Server"),"\xa0definitions of your app - producing a new set of\xa0",(0,n.kt)("strong",{parentName:"li"},"V2 Lobbies"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"li"},"V2 Servers"),"\xa0that will be used by the\xa0",(0,n.kt)("strong",{parentName:"li"},"updated version"),"\xa0of your app",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Configure the\xa0",(0,n.kt)("strong",{parentName:"li"},"V2 Server"),"\xa0definitions to use\xa0",(0,n.kt)("strong",{parentName:"li"},"Relay Protocol v2")),(0,n.kt)("li",{parentName:"ul"},"Configure the ",(0,n.kt)("strong",{parentName:"li"},"V2 Lobby"),"\xa0definitions to use the new\xa0",(0,n.kt)("strong",{parentName:"li"},"V2 Server"),"\xa0definitions"))),(0,n.kt)("li",{parentName:"ul"},"Modify your Client App to use the new\xa0",(0,n.kt)("strong",{parentName:"li"},"V2 Lobby"),"\xa0definitions, as well as the appropriate\xa0",(0,n.kt)("strong",{parentName:"li"},"4.5.6 Client Library")),(0,n.kt)("li",{parentName:"ul"},"Optionally (but recommended), ensure that your Client App reacts to the\xa0",(0,n.kt)("em",{parentName:"li"},"Minimum Version"),"\xa0setting from the\xa0",(0,n.kt)("strong",{parentName:"li"},"Design | Core App Info | Platform"),"\xa0page. This will allow you to \u201cforce\u201d your users to upgrade to the new client when you are ready (see\xa0",(0,n.kt)("a",{parentName:"li",href:"/blog/2015/11/10/launch-tip-1-version-enforcement/"},"Version Enforcement"),")")),(0,n.kt)("h3",{id:"step-by-step"},"Step-by-step"),(0,n.kt)("p",null,"This section describes step-by-step how to modify your app to implement the recommended migration approach."),(0,n.kt)("h4",{id:"design-portal"},"Design Portal"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to\xa0",(0,n.kt)("strong",{parentName:"li"},"Design | Cloud Code | My Servers"),"\xa0- and clone the Relay Server entries to create new \u201cV2\u201d versions. A new\xa0",(0,n.kt)("strong",{parentName:"li"},"[Clone Server]"),"\xa0button has been added to assist with this. After cloning each entry, be sure to\xa0",(0,n.kt)("em",{parentName:"li"},"Edit"),"\xa0it, and change the\xa0",(0,n.kt)("em",{parentName:"li"},"Relay Protocol"),"\xa0to\xa0",(0,n.kt)("strong",{parentName:"li"},"v2"),"!"),(0,n.kt)("li",{parentName:"ol"},"Go to\xa0",(0,n.kt)("strong",{parentName:"li"},"Design | Multiplayer | Lobbies"),"\xa0- and clone the Lobby entries to create new \u201cV2\u201d versions. A new\xa0",(0,n.kt)("strong",{parentName:"li"},"Clone")," option has been added to the\xa0",(0,n.kt)("strong",{parentName:"li"},"Action"),"\xa0menu to assist with this. After cloning each entry, be sure to\xa0",(0,n.kt)("strong",{parentName:"li"},"Edit"),"\xa0it, and change it to refer to one of the ",(0,n.kt)("em",{parentName:"li"},"V2 Servers")," that you created in Step 1.")),(0,n.kt)("h4",{id:"app-code"},"App Code"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Replace your brainCloud library with a new\xa0",(0,n.kt)("strong",{parentName:"li"},"4.5.6+"),"\xa0version of the client library."),(0,n.kt)("li",{parentName:"ol"},"Go into your source code, and change the names of the\xa0",(0,n.kt)("strong",{parentName:"li"},"Lobbies"),"\xa0that your client app references to the new V2 version of the lobby type name."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Rebuild"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"li"},"test"),"\xa0your client app to ensure everything works."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"(Optional - but highly recommended)"),"\xa0If you haven\u2019t already, enhance your app to pass the app version during the\xa0BrainCloudWrapper.Initialize()\xa0method, and display a \u201cClient update required\u201d dialog if it receives a\xa040322\xa0-\xa0APP","_","VERSION","_","NOT","_","SUPPORTED\xa0error from the server during authentication. This will allow you to force users to upgrade to the new client when you are ready. Note - the required app versions are controlled via the\xa0",(0,n.kt)("strong",{parentName:"li"},"Design | Core App Info | Platforms"),"\xa0page.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"For more information on implementing")," ",(0,n.kt)("a",{parentName:"p",href:"/blog/2015/11/10/launch-tip-1-version-enforcement/"},(0,n.kt)("em",{parentName:"a"},"Version Enforcement"))," ",(0,n.kt)("em",{parentName:"p"},"in brainCloud, see the article at the link.")),(0,n.kt)("h4",{id:"app-submission--migration"},"App Submission & Migration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Submit"),"\xa0the updated app (which uses the V2 Relay Servers) to the various app stores for approval. Existing users will continue to play using the V1 Relay Servers."),(0,n.kt)("li",{parentName:"ol"},"Officially\xa0",(0,n.kt)("strong",{parentName:"li"},"Release"),"\xa0your app. During this stage of launch, your player liquidity is\xa0",(0,n.kt)("em",{parentName:"li"},"split"),"\xa0- between the older and newer servers."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("em",{parentName:"li"},"(Optional - but highly recommended)"),"\xa0Once you are ready (and are confident that the app updated has been distributed globally to all appstores), you can update the\xa0",(0,n.kt)("em",{parentName:"li"},"minimum required versions"),"\xa0on the\xa0",(0,n.kt)("strong",{parentName:"li"},"Design | Core App Info | Platforms"),"\xa0page to force users to upgrade, and re-unite your player base!")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"And voila - you have successfully migrated your app to the V2 Relay Servers without interruption!")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,n.kt)("p",null,"We have made the following portal changes:"),(0,n.kt)("h3",{id:"design"},(0,n.kt)("strong",{parentName:"h3"},"Design")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Code | My Servers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added new\xa0",(0,n.kt)("strong",{parentName:"li"},"[Clone Server]"),"\xa0button to make it easier to duplicate server configurations"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Messaging | Chat"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The\xa0",(0,n.kt)("em",{parentName:"li"},"Replace Profanity with"),"\xa0setting now properly defaults to \u201c","*","\u201d"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Multiplayer | Lobbies"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added a\xa0",(0,n.kt)("strong",{parentName:"li"},"Clone"),"\xa0option to the\xa0",(0,n.kt)("strong",{parentName:"li"},"Action"),"\xa0menu to make it easier to duplicate lobby configurations")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"api-changes"},"API Changes"),(0,n.kt)("p",null,"Reminder - The 4.5.6 client libs only work with the V2 Relay Servers.\xa0  "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"If your app is\xa0",(0,n.kt)("strong",{parentName:"em"},"live"),"\xa0and\xa0",(0,n.kt)("strong",{parentName:"em"},"using Relay Servers"),", do not upgrade to the 4.5.6 Client Libraries until you are ready to\xa0",(0,n.kt)("strong",{parentName:"em"},"migrate")," your app according to the procedure described in these release notes.")),(0,n.kt)("p",null,"Although the Client libraries have changed significantly to support RelayComms V2, the APIs themselves have not."),(0,n.kt)("p",null,"There is just one fix to the C# libraries that affect a method signature:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"RelayCallback()"),"\xa0method signature has changed. It now includes a\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"netId"),"\xa0parameter.",(0,n.kt)("inlineCode",{parentName:"li"},"public delegate void RelayCallback(short netId, byte[] data);"))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated libraries",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All libs have been updated to use RelayComms V2!"),(0,n.kt)("li",{parentName:"ul"},"All libs (except C#) now include Amazon Platform detection.\xa0",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("strong",{parentName:"em"},"Important: If your app supports Android, and you want your Android apps to run on Amazon devices, remember to enable the Amazon platform on the Design | Core App Info | Platforms page!"))))),(0,n.kt)("li",{parentName:"ul"},"Documentation updates",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The API Reference has been updated to include the updated C# RelayCallback"))),(0,n.kt)("li",{parentName:"ul"},"Important Fixes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BCLD-6304 - Error sending certain chat messages with WebPurify support enabled"),(0,n.kt)("li",{parentName:"ul"},"BCLD-6240 - Presence updates sometimes failing due to improper TTL setting"),(0,n.kt)("li",{parentName:"ul"},"BCLD-6239 - Lobby matchmaking NPE"))),(0,n.kt)("li",{parentName:"ul"},"Plus miscellaneous fixes and performance enhancements...")))}u.isMDXComponent=!0},29386:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2020-09-01_09-53-52-1ade651a169b54752ef146acf342118b.png"}}]);