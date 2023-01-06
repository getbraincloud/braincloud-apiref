"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[50074],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=n,m=p["".concat(s,".").concat(c)]||p[c]||h[c]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={title:"Release 2.19.0",date:"2015-12-17",tags:["release-history"]},o=void 0,l={permalink:"/braincloud-apiref/release/2015/12/17/release-2-19-0",source:"@site/release/2015-12-17-release-2-19-0/index.md",title:"Release 2.19.0",description:"Firstly, a\xa0reminder that we are on reduced support availability over the holidays while our team spends some well-earned time with their families (Dec 24th, 2015 - Jan 4th, 2016). \xa0The servers of course will still be fully monitored, and we're definitely still available to respond to emergencies.",date:"2015-12-17T00:00:00.000Z",formattedDate:"December 17, 2015",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:4.195,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.19.0",date:"2015-12-17",tags:["release-history"]},prevItem:{title:"Release 2.20.0",permalink:"/braincloud-apiref/release/2016/01/27/release-2-20-0"},nextItem:{title:"Release 2.18.0",permalink:"/braincloud-apiref/release/2015/12/03/release-2-18-0"}},s={authorsImageUrls:[]},u=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Portal Changes",id:"portal-changes",level:2},{value:"API Changes / Additions",id:"api-changes--additions",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Firstly, a\xa0reminder that we are on ",(0,n.kt)("em",{parentName:"p"},"reduced support availability over the holidays")," while our team spends some well-earned time with their families (Dec 24th, 2015 - Jan 4th, 2016). \xa0The servers of course will still be fully monitored, and we're definitely still available to respond to emergencies."),(0,n.kt)("p",null,"This being our\xa0holiday release, we thought we'd try to finish off the year by focusing on a few more customer requests. There's something in here for everyone!"),(0,n.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("p",null,"Key features of this release include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Profanity Filter API + WebPurify Integration")," - we've had several requests from developers\xa0to support profanity filtering in the platform. Although simple enough in concept, profanity filtering gets pretty complicated when you start taking into account multiple languages, custom whitelists and blacklists, identifying vs. replacing profane strings, etc. We've addressed this in two parts - we've added a new abstract Profanity Filter API to brainCloud, and partnered with the good folks at\xa0",(0,n.kt)("a",{parentName:"li",href:"http://www.webpurify.com"},"WebPurify")," to allow you to easily add profanity filtering to your apps."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"User Export ","[Beta]"),"\xa0-\xa0we've always said that brainCloud's data is ",(0,n.kt)("em",{parentName:"li"},"your")," data - and we\xa0happily provide custom exports when requested. That said,\xa0it's a lot more efficient to provide a way for you to export your user data yourself - which is of course what our new ",(0,n.kt)("strong",{parentName:"li"},"User Export")," feature is for. So, whether you are looking to do some additional analytics analysis, or maybe import your user e-mails\xa0into a mailing list platform - brainCloud now supports exporting the data you need in both .CSV and .JSON formats."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Idle timeouts")," - we've refactored how the Design\xa0Portal handles user timeouts. To start, we've extended the timeout to 1 hour (from 20 minutes) - but we've also added a dialog to ",(0,n.kt)("em",{parentName:"li"},"warn")," you that the session is about to timeout, and to definitely tell you once you ",(0,n.kt)("em",{parentName:"li"},"have")," timed out. We're much happier with the new system. Let us know what you think.")),(0,n.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,n.kt)("p",null,"Changes to the portal:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WebPurify Integration settings")," - can be found in ",(0,n.kt)("strong",{parentName:"li"},"Design | Integrations | Manage Integrations"),". You simply enter the WebPurify API key, and choose what languages to filter on. Note that you can choose to automatically filter the user's name field. If selected, brainCloud will automatically filter all calls to UpdatePlayerName() - and raise an exception if the name contains profanity. ",(0,n.kt)("strong",{parentName:"li"},"You can get a WebPurify account for as little as $15 / month at ",(0,n.kt)("a",{parentName:"strong",href:"http://www.webpurify.com"},"www.webpurify.com")),". ",(0,n.kt)("em",{parentName:"li"},"Note that for brainCloud billing purposes, calls to WebPurify are counted as an external web service API call.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Refresh button in Custom Files")," - we now cache the list of custom files, so we no longer have to access the file system to retrieve the directory. \xa0This cache is updated each time a new file is added or deleted - but should you have reason to think that it's out-of-date, just hit the ",(0,n.kt)("strong",{parentName:"li"},"[Refresh File List]")," button on the ",(0,n.kt)("strong",{parentName:"li"},"Design | Custom Config | \xa0Files")," page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Export User Data")," -\xa0available under ",(0,n.kt)("strong",{parentName:"li"},"Reporting"),". \xa0You can specify some\xa0filter criteria for which users to export, as well as select what types of data to include. We support both .CSV and .JSON file formats. Note - there are more data options associated with the JSON format (since it's more flexible)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Web Idle Timer")," - we've refactored how the web portal handles user timeouts. We've extended them timeouts, added better activity tracking, and improved the communication of when the session has expired.\xa0Let us know what you think.")),(0,n.kt)("h2",{id:"api-changes--additions"},"API Changes / Additions"),(0,n.kt)("p",null,"Changes and additions to the API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Profanity Filter API")," - There are 3 key methods for the Profanity Filter API - ProfanityCheck() returns true if foul language is found; ProfanityReplaceText() will actually replace bad words with a substitution character that you provide; and ProfanityIdentifyBadWords() returns a list of the bad words found (mostly useful for debugging). Remember, you need to set up a ",(0,n.kt)("a",{parentName:"li",href:"http://www.webpurify.com"},"WebPurify()")," account to enable these APIs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Player State\xa0JSON enhancements")," - we've enhanced our Authentication and ReadPlayerState() calls to return additional user data - basically all the info that is displayed in the ",(0,n.kt)("strong",{parentName:"li"},"User Summary")," page of ",(0,n.kt)("strong",{parentName:"li"},"User Monitoring"),". So in addition to the slew of data that was already being returned, you now get ",(0,n.kt)("inlineCode",{parentName:"li"},"emailAddress"),",\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"createdAt"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"lastLogin"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"previousLogin"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"language"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"timezoneOffset"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"amountSpent")," (in cents) and ",(0,n.kt)("inlineCode",{parentName:"li"},"refundCount"),". \xa0",(0,n.kt)("em",{parentName:"li"},"Note that ",(0,n.kt)("inlineCode",{parentName:"em"},"amountSpent")," refers to the reference price that you specify in the IAP entries, and is not a precise estimate of what a user paid, since it doesn't take into account currency exchanges, the platform's take, etc."))),(0,n.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,n.kt)("p",null,"Additional improvements to this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Big performance boost to\xa0GetFileList() and GetUpdatedFiles(). \xa0We now cache the data instead of reading from the file system each time - so performance is now\xa0approximately 3 times faster!"),(0,n.kt)("li",{parentName:"ul"},"brainCloud is now available directly from the ",(0,n.kt)("a",{parentName:"li",href:"https://www.assetstore.unity3d.com/en/#!/content/50220"},"Unity Asset Store"),"! \xa0(The\xa0",(0,n.kt)("a",{parentName:"li",href:"https://www.assetstore.unity3d.com/en/#!/content/50656"},"brainCloud Bombers")," and ",(0,n.kt)("a",{parentName:"li",href:"https://www.assetstore.unity3d.com/en/#!/content/50279"},"brainCloud Space Shooter")," example games are there too!) \xa0Feel free to drop by and give us a review! :)"),(0,n.kt)("li",{parentName:"ul"},"All client libraries have been updated with the latest APIs"),(0,n.kt)("li",{parentName:"ul"},"Misc defect and performance fixes")))}p.isMDXComponent=!0}}]);