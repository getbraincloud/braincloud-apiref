"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[67325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return a?r.createElement(d,n(n({ref:t},u),{},{components:a})):r.createElement(d,n({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,n[1]=l;for(var p=2;p<o;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const o={title:"Release 2.21.0",date:"2016-03-03",tags:["release-history"]},n=void 0,l={permalink:"/braincloud-apiref/release/2016/03/03/release-2-21-0",source:"@site/release/2016-03-03-release-2-21-0/index.md",title:"Release 2.21.0",description:"Okay, this one got away from us a little bit. The release is absolutely chock-full of new features - hopefully there is something for everyone!",date:"2016-03-03T00:00:00.000Z",formattedDate:"March 3, 2016",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:5.79,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 2.21.0",date:"2016-03-03",tags:["release-history"]},prevItem:{title:"Release 2.22.0",permalink:"/braincloud-apiref/release/2016/04/14/release-2-22-0"},nextItem:{title:"Release 2.20.0",permalink:"/braincloud-apiref/release/2016/01/27/release-2-20-0"}},s={authorsImageUrls:[]},p=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Team Member Roles",id:"team-member-roles",level:3},{value:"Live Lock",id:"live-lock",level:3},{value:"Parse Import",id:"parse-import",level:3},{value:"New &lt;Beta&gt; API Reference",id:"new-beta-api-reference",level:3},{value:"Swift and Objective-C CocoaPods",id:"swift-and-objective-c-cocoapods",level:3},{value:"Portal Changes",id:"portal-changes",level:2},{value:"API Changes",id:"api-changes",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Okay, this one got away from us a little bit. The release is absolutely chock-full of new features - hopefully there is something for everyone!"),(0,i.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,i.kt)("h3",{id:"team-member-roles"},"Team Member Roles"),(0,i.kt)("p",null,"brainCloud now supports assigning permissions to Team Members on an app-by-app basis. The roles available are pre-defined (we don't offer custom roles ",(0,i.kt)("em",{parentName:"p"},"yet"),"), but we've taken considerable care in defining a flexible set of roles based on customer feedback. And of course, you can combine roles to meet your needs."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(99193).Z},(0,i.kt)("img",{alt:"brainCloud Team Member Roles",src:a(35084).Z,width:"508",height:"321"}))),(0,i.kt)("p",null,"Roles are assigned via the new ",(0,i.kt)("strong",{parentName:"p"},"Administration | Permissions")," page, which is accessible by Team Administrators. You can view the individual privileges that make up each role via the ",(0,i.kt)("em",{parentName:"p"},"Roles")," tab of\xa0the page."),(0,i.kt)("h3",{id:"live-lock"},"Live Lock"),(0,i.kt)("p",null,"While we were implementing our permissions system, we decided to go one step further, and implement an extra level of protection for Live apps. The result is our new Live Lock feature, which ensures that you don't inadvertently edit the configuration of your live app, even if you have the privileges to do so."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"App Is Live",src:a(40307).Z,width:"783",height:"72"})),(0,i.kt)("p",null,'Our new "App is Live" banner will display on the portal pages for live apps, and will prevent the app from being modified without the user first unlocking it. Once unlocked, the banner turns yellow as a warning to be careful. Apps\xa0remain\xa0unlocked for the duration of your session - so it won\'t unnecessarily affect your workflow.'),(0,i.kt)("h3",{id:"parse-import"},"Parse Import"),(0,i.kt)("p",null,"As you might expect, brainCloud has seen an uptick in new sign-ups due to the Parse shutdown. We've received great feedback from our\xa0new arrivals, who find that brainCloud not only matches Parse's featureset, but truly offers a whole lot more."),(0,i.kt)("p",null,"In an effort to be extra welcoming, we are pleased to roll-out Phase 1 of brainCloud's Parse Migration support - which allows for easy importing of Parse data into our Cloud Data\xa0system (as Global Entities). This facility is especially useful for teams that had Parse apps in development, and want to quickly import their data and keep moving forward with a\xa0brainCloud-based implementation."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(89833).Z},(0,i.kt)("img",{alt:"Parse to brainCloud",src:a(46121).Z,width:"1024",height:"341"}))),(0,i.kt)("p",null,"This is just the first step of our plan to assist\xa0customers migrate their apps from Parse. Stay tuned as we add additional features in the coming weeks, and be sure to fill in our ",(0,i.kt)("a",{parentName:"p",href:"https://www.surveymonkey.com/r/W93BKYC"},"Parse Migration\xa0Survey")," to ensure that\xa0your requirements are heard."),(0,i.kt)("h3",{id:"new-beta-api-reference"},"New <Beta",">"," API Reference"),(0,i.kt)("p",null,"New, faster, more searchable API documentation? Don't mind if we do!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/introduction"},(0,i.kt)("img",{alt:"New API Docs",src:a(11439).Z,width:"748",height:"100"}))),(0,i.kt)("p",null,"The new system is in\xa0beta, and the examples focus primarily on C# for now - but we think it's already better than the old reference documentation\xa0- so we're releasing it early.\xa0Going forward, our overview and tutorials will remain under the Docs header, with service and method references in the new system under API."),(0,i.kt)("p",null,"Let us know what you think! Check out the new docs ",(0,i.kt)("a",{parentName:"p",href:"/learn/introduction"},"here"),"!"),(0,i.kt)("h3",{id:"swift-and-objective-c-cocoapods"},"Swift and Objective-C CocoaPods"),(0,i.kt)("p",null,"We've totally refactored our Apple libraries to work better with Swift and Objective-C, and\xa0repackaged them\xa0using ",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org"},"CocoaPods")," to make them easier to integrate into your projects."),(0,i.kt)("p",null,"There are two CocoaPod libraries available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cocoapods.org/pods/BrainCloud"},"BrainCloud")," - for Objective-C and Swift projects"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cocoapods.org/pods/BrainCloudCpp"},"BrainCloudCpp")," - for C++ projects")),(0,i.kt)("p",null,"These libraries support iOS, OS X and tvOS."),(0,i.kt)("p",null,"You can find more information on using CocoaPods in your Xcode project in their ",(0,i.kt)("a",{parentName:"p",href:"https://guides.cocoapods.org/"},"Guides section"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,i.kt)("p",null,"The following changes have been made to the Design Portal:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(New) Administration | Permissions screen")," - used to set per-app permissions for your Team Members. Only accessible\xa0by Team Administrators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(New) Live Lock banner")," - tells you whether you app is live, and allows you to unlock it for editing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(New) Parse Import")," - available from the ",(0,i.kt)("strong",{parentName:"li"},"Global Monitoring | Global Entity")," screen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(Improved) User Monitor")," - we now display the User's Profile picture if they have attached their Facebook identity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(Improved) Select Team screen")," - we've updated the look of the Select Team screen that appears immediately upon login. And as a bonus, it automatically remembers the last team that you logged into - allowing you to quickly skip past by clicking the ","[Continue]"," button"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(Improved) Edit Profile dialog")," - you can view your app access permissions by choosing Edit Profile from the sign out\xa0menu drop-down."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(Improved) Log Viewer")," - you can now click through from the Global Logs to the User Logs by clicking on the profile id in any log entry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(Improved) Analytics Charts"),"\xa0- improved and standardized the colors used in the charts on our Analytics page.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"api-changes"},"API Changes"),(0,i.kt)("p",null,"There have been significant changes to the error handling and communication subsystems in several of the libraries. We recommend that you test well before updating clients in the field."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network Error Message Caching",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This feature allows you to cache in-transit messages to the brainCloud server when a network error occurs."),(0,i.kt)("li",{parentName:"ul"},"More details can be ",(0,i.kt)("a",{parentName:"li",href:"/learn/sdk-tutorials/general-api-tutorials/network-error-message-caching/"},"found here")))),(0,i.kt)("li",{parentName:"ul"},"Global Error callback",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"brainCloud now allows you to register a Global Error callback method which is called anytime an error is encountered."))),(0,i.kt)("li",{parentName:"ul"},"Authentication methods returning 202 error now go to error callback.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This only applies to C++ and Unreal libraries. If you'd prefer the old behaviour, you call BrainCloudClient.setErrorCallbackOn202Status(false)"))),(0,i.kt)("li",{parentName:"ul"},"New Matchmaking API call",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"FindPlayerWithFilterAndAttributes() method added - allows the system to narrow the list of candidates before sending each candidate to the players custom filter. Useful for when the population of users you are looking for is a very small portion of the overall population."))),(0,i.kt)("li",{parentName:"ul"},"Improved Web Service APIs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We've added support for POST operations with external web services"),(0,i.kt)("li",{parentName:"ul"},"We've also simplified the API so that you don't have to repeat the URL being used (since you're already declaring the URL as part of the external service configuration)"))),(0,i.kt)("li",{parentName:"ul"},"Push Notifications",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"New server-to-server method, ",(0,i.kt)("a",{parentName:"li",href:"/api/s2s/pushnotification/sendnormalizedtosegments"},"SendNormalizedToSegments()"),", for sending push notifications with custom parameters"),(0,i.kt)("li",{parentName:"ul"},"New server-to-server method for returning a list of segments"))),(0,i.kt)("li",{parentName:"ul"},"Leaderboards",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Social Leaderboard calls now properly support LOWER","_","IS","_","BETTER leaderboards by returning the results in ascending order"))),(0,i.kt)("li",{parentName:"ul"},"Miscellaneous",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"New method for looking up a user's credentials given their profileId - ",(0,i.kt)("a",{parentName:"li",href:"/api/capi/friend/getexternalidforprofileid"},"GetExternalIdForProfileId()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/capi/playerstate/updatecontactemail"},"UpdateContactEmail()")," method added which allows you to update the user's email address (used for informational purposes, not authentication, which is controlled via the EmailIdentity)"),(0,i.kt)("li",{parentName:"ul"},"Added API for generating anonymous id (GUID) to the Android / Java libs")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New Apple SDKs! \xa0Our new iOS / Mac OS X / Apple TV SDKs have been revamped with better Objective-C and Swift support - and are now packaged using ",(0,i.kt)("strong",{parentName:"li"},"CocoaPods")," for easy addition to your projects!"),(0,i.kt)("li",{parentName:"ul"},"Revamped the Android Getting Started documentation"),(0,i.kt)("li",{parentName:"ul"},"Roku has been added as a supported platform"),(0,i.kt)("li",{parentName:"ul"},"New Marmalade C++ Client SDK"),(0,i.kt)("li",{parentName:"ul"},"Improved searching for users in User Monitoring - search now looks for a sub-string of the text entered"),(0,i.kt)("li",{parentName:"ul"},"Improved user\xa0logs performance"),(0,i.kt)("li",{parentName:"ul"},"Miscellaneous fixes and performance improvements")))}c.isMDXComponent=!0},89833:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/BC_TwitterBanner_1500x500_Parsetobc_02-29f96b1657c4ce7699f3c7c7ccc37ffd.png"},99193:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/Roles_png-9f71dc44e065e6188e1b028555c611c8.png"},40307:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAw8AAABICAIAAAA/C17IAAARHUlEQVR42uzb/U8bdRzA8fsPNOPhSjsoLX2gqNXBRoHZMIYogTFgOFgmj92wk+wHZVPjA5tD1MEyHwJmZmZx0fiDc0RNxGzG7CEu2eZTsihRRMGt7P/w09RU0l57l5Yl3e2dvJK1vbs337a33ocmKM/crgAAAEAqSv20LXBE1dV0unh4qWLfbX2D8x6aNGnSpEmTJk3TNBUjuY45x74VQ7me7521b6k0adKkSZMmTZqmaSrpW3VTRbuvuwyOcm1nS2NH0aRJkyZNmjRpmqappMk1nLCGFsoNjV1XnLVvWuIH0qRJkyZNmjRpmqappMq1fmYP3/LptsIRX9ts4ihHkyZNmjRp0qRpmqYSOFyYoGbCsvNiWVj21rNn0bv1pC25QJMmTZo0adKkaZpm4rQUfNc6cMNrJPfUT+7Nx6yaa6JJkyZNmjRp0jRNU1l9R/6Ubu+Sz0iu81z0G6pUy6JJkyZNmjRp0jRNU4n9I5vb5+zhFZ+u4eXyxz8uSb8ymjRp0qRJkyZN0zSVwCG1bjL6p3RGcv2/eYLvWeWQ9GjSpEmTJk2aNE3TVGQ/AAAApMK0BAAAwLQEAADAtAQAAHAnKE+v+AAAAKCNaQkAAIBpCQAAIHPK8IoPAAAA2piWAAAAmJYAAACymZYiPgAAAKSi7In4AAAAoI1pCQAAQHda8gIAAJjA0JJ/22yoYfqlwNgxITfkrjyYZVYJRbwAAAB3u55rzTVHjlYemEkgD8qmzMtMS0AG+uZdnd85Wj+3d11yDix6cmRV96Chm+U7LjrlvZAbxg/pue5q+8recb50cDknnkXCqSVr6/3VnSPrAe4iMg9VHpyW2UiTbJIdmJZgNg+G89u+tGtu2jBakKxytLDyQFT73P9HdV8tc3ffn2rn2jcs6WcdObzpdPHqRxpPFvtH8gJjqtxoOWNvOGGrfkWVR7Z9Ydd9RjWvWwzuU3e0SHdPIa9P00fFsSeYxpYZm5Fa9osf+NMTPP7fyh/eny8vjpFsUl/f0D8e2b/qBVVs/cAm78XGF6O3A6+pg8vplidvun+kIDhlfeKTksdOrZf3rupgoaTiw5bxxbSetW+e1Hibtn/jSH4LHC33JTyy8WV19VEd3zpkbVXPF9SOq82fFtdOWOR29GT+ujShn+pENXgaaGx6ruCRZ6P/I+RU13yDjD+jHPnowL1pcMkf/1YpcHiq68KOvoVNQm7I3fg3TLJbZn1lKOIFck3PD666yaINo4WaW+WjOeWxt8rlIi0Xztjdrstl9TO2lD/lR5dcO9vPlyZv0jw8MK42frhe84cG37E2nkrapL1s/X0ePV606xe37s5yNe26FF9htrJffN8f7uoxNb6/f39+97Uy3WxiX8/uG+6KUJ58pZS86ckrTt/Qul0/a/xQeT29ves0X9Xt5xwPjeTtvFpm/MnKOVYzYVmrV2/L+7bqV9XBm+XJ55WccsG3rTr9+Ima3Uqaz9jlV5TOC86k/bU7OfJZAcS0zobio1L/YuXqTXI3PjDJbpn0mZaQm+Ti0fe7Z9MhS++8K4NP6pbZkvppm8GryAN78/r/9uhehOQqIgNcmo78bi3DwZpMS/LcA+MWndFkwSOvUtfl3J2W+hY9MqDIELCG05KM0XJFl+eeaof+vzz+kX/bO/PvKKo8iufnOXM80itNd7o71dUJsmQXAgQIYQ8BsjfZmXEcQfYoGmaMzqYMuMCwuIA6iuDMCDKAMoIgMIgIRzJhGWEAs/GXzI3laWOqu97ropN0h3vOx5zq199361uvnvVuf18dtVd9qfRvhLUKhkZhVKP1au7KGNtowV+ZZOBgZr3pjtfooR624G9eo8l82J+/yTEEbgks70GAA9OYbokkHXibW/NDFWcq9N+iUfsWYXRLZISgPbK12s+Ul1xmbYdDchXBT+qSQz7hIoRtO+N6T22HCjsVF7cE8lsdKC0YRKKaVX0xkMhuSSvbwPLG0S1lrrLrTY/eMMFR9W9BLUozxAagIpX3G4dxMpiZWWtt8OLxGj0Uwya/IK5RYWe27FTaELgl0NydMWGFjW6JJB2T2l7W/BB23/TfolH7FmEm3dLye2MJSShmv+0p/dSvHWM3Rx+QvcEuFIFbwt+KcwEUmYwj4XIKXnTp28Pdfzxpr9RJNQRpi2JKjvjm/8MriBRcoDnMJ19/Kz2/zTkgHm5g8fE0gaycfvlZBe5ZJtvp28eETworXLTbI9MLLsEgmYbb6djmQ4kxjqM38cm+Cpywe1NXBvyfQYDMNJAf50VHffBexvFoT5DHBSEacEIapgLEwC2lE5JQZK6xhY+L97hLj/kGBOBJLRTJaemLqTinzNzpMo5EUWHKZqe+fUD3ojfGwMMZS9VeU3WNBmkLYnI3Ro2vPJ82Y4dLcIEmMZ98/S0VbmlAfHNPRkajpeF20EBWUh8To6lL0xGAk+JVJO14bPOo5m6pXphpyDNiMss6AthVDF1R4zh6VV8pBS+OllSYvg3lJT8OBBPVRCam7gvaE+RxQYhG2AyZChBDt0QSCywh2M8Kf8TqiDXSlO2QdUtz3nUvPu4TLkJ111Wsu7pVX4h5t4SlFCeNGJb/W0fDnWBSuCVQczmQucoaB7e02qZrFATDJ+U8Zb/Pi8Ug49bj6uI7esV73aWf+CQVys/6UTAbMreEQcPQ0S2RJGLQ3VLzvXRCEofcZ+x1t9T+LdktupYNdmORGbvccz7w4KD8nDJjp8sgsv5OcOxyS1N3UP+VvnvVJSW97uGiN90Nd/XxYpB2TDGhq2rBS6P1MU14r+tphy5DE8Q5+brv3VLE+Jmvu4vf8RjIivV707PW2eQTztlob+xMr7ygwGTcz8UuPOzFTW/sCsZ99PCalDaxZUACcDA4EExUuUyEYOKFOgIG8WhPkCcGIaVHm/I3bYMNkgTB6BLbWeiWSEKBJUG/IpadSZuyxSX5pMYCOflPo/Gsl1lFlpz0wyrVXFFjWoRKjvqy1tsz19qw2pUc8SLnQXJL2pKvj4ERRA7hDP0LH0IvA+AFh90tgfFPWEPtAdNuqfpSYOrWGHzhzN1uzJx5+1Nxj0xfbNFbbkwnvM8Eoxz30cMsklUQxMtOA3mXA3dbdtZPt0SSAp1VEoMudEskiel7N+i4T98+7jFL/4+wOPrFAG/55D3bR+VFRbCKtNjzWh2IhxNCnQZh5n6y136rzt3nyd3kwF7h3A9Tm3vj75bmHUgNG6MwyB9/k6u2pH2L/SyMkjm3hCpR4bYYrnTWXjfc8Kw97qWn/OYuFj4JE1Kz4Jhyy26o8R09NJoQGZraEoYa/x7RLZGkAO7HBDG7paZ76YQkCONX2CK2T31ldOkJX/hj1ga7pGDZOWX6Tpe+Pe7d533kVUOj6r9TDWJ0aYtjGrHptvEnLaHr6qQ/OMUZmsd88rW31Lw2p0H8gn96YUF0slL6jd1BLUaS3FZH3e3g0i/SYJtivth1Npxr/sHUHy/tJqyepf5uMI6jh01neUHMBIjc/0SVHMO+WddrFI/2BHloEGLOLcV2Frolkjjgie8veWjaqy49k/7oxFqVyG4JVF0OTFhpja9bAvnPO+FCwh8LNjtr/hMYereU3SJOPnRNnQQzZHixMDFLTqeZcEtg4hqdmRYFN3QF855zSnapaQ9geHGQ3miBzRrwbfU3yrjHrXAt8XJL2O1afNIvqVBxQZn6smtI3dI9uiWSHAyZW1IJSQSwHped81dejMwjj1nq7gS0yKwNNklNCGIVEYWJu4duKAV/dgrjxz0+KmK7Pm35mKrLaSit9R+liBkONiiENHQJYhYd985+z218sRBJr3+4/rtAOEx+cCY8aW3qDUomPGGlRTvIXCs7W6a95qr82m+QzNIzvqx1AjX5W7/ktB8bXpIKqJCVHPUKJqp0JkJyNgruC9oT5LlBiFm3pMZESmNvkJBhp+5uAMUAg4CST71TX3Npx3hSS8ou/X4VEYTJdc9cJz5pXps9dEPVtwvSFsSg0a4dYDuyaK87YoaDTeF2V/mFNOOYmW+MWfKFT3ix5ef9mett4TD5wVlwOHXGbqmLhWmbvd+jHT/6ewd8iUwvfVZ65h9Kzf+dQyAlfetRrGrollLArwUT89zcJIQURs84Hu0J8uggxJxbivUsdEskISj8i6v0M59xzNhfWobRLaGwIYgXOCrzbqloj7v0pA8HOXjTpVMdFre0+HP/lK2CE2GIUP+TuVgY3zkHPLG6JfDIryzaCBgA/xGeKgDxMvdu3kEvrJhMMrgdhTtccXFL+A2AwqGw+4zX3fM+8gyNWwpdDaAahwO6JZIs0C2RB4hxvxavZ3inBKWL4XJLsz/wTN9lJLXsZmDiautguCWs99gZwSvkOc/a7/MC8Z616dEYv9ISNkN6yv7tRxVH/mJhaLAwx+qWFp/yo9JmXI/J3eQoOebr31K8z43JI7h3q6zyyU/e7NSqLyLEgiipYoPPoG/5l2njV1hwMARuqeaaMnb5KIyGObeE2ZUgzxPyQDFEbqmhN0jI8IIlcMoro4VhoZsB7JXgIHODTVIZq0jhTpcgTLp79kbb3IPeaLllLB9VfU2JJiVIWxST3WqfhvLb537jDCX1zVF+SYHFqbke4RrLzvvxZnRdpyp/IoxVxi8sCIs1sSVnfNiWquoI6L+quaHCdi864dN/Vbzfg8qfluEAFhzxjnvCiuuST16bDCX/8sZh2HuCuc85pu+OfBOL3nbDItd3qdIT1XwmKJhNXGvDwOriZXXQmCCPFPJAYc4txXYWuiWSCGAZW/Y/VSZywmpr7d3AcLklUPRXN7Z1pm13zf84teJrBQGzD3iyn7Zjj0xbZgyAnULmBsBz4G+0TMbM+HnEdt/Ch4xlUQiJ13oGSwEFrO4YB2QLmzvzrTG4fLzKEzYi8iea82GqPfdn8oPT35tmtdhzW+0FW13Yo4SJnPLqaHxEGAxTtNNVfKOgkIMY1AihBpOEkcHcwy02s+r3BOGxyr9Ki4tJLX7fnfWUHQOLA2jC2+W12WHIZu5xC8Xlp4F+nFGow+3DX/wOWfSZT1OjWyLJhbn/OiXdEiGDDqos8w6lotgDr7DwE1/tbTVBEhMCV3f/IrC2qN+gHFL0zpglZ/2aTxoWqjqU4vfcs971VLYrsr16+rwFkp/z99Tqq4EEuS8aGEkMLMxcyXFvXWfSTCpChpeSI42x/p9P0CVmt1TfGySEPAjUdqqoXiRIMoQQkkTALQUIIQ8CC46lVnYoCZIMIYQkEXRLhBBCCCF0S4QQQggh5t1Sj0oIIYQQQqJBt0QIIYQQQrdECCGEEGKWlLoelRBCCCGERIZuiRBCCCFE6JYUQgghhBASjZTaHoUQQgghhESGbokQQgghhG6JEEIIISTebqm8XZn8giNzjVVIwVZn1beBAd2pSU1qUpOa1KQmNUeMZkqoRxlA6SlvdguixRS/717WregVqElNalKTmtSkJjVHjOZP3VJnAEGZq61Cclqsi055o+VETWpSk5rUpCY1qTliNFNgoDRQdCrY4pSRe/R5Z1k7ukSFmtSkJjWpSU1qUnPEaP7glpZe8OU9Y5eRK9zlqr4jSI6a1KQmNalJTWpSc8RopuCfuQc92KgTy621zv3YLZMfNalJTWpSk5rUpOaI0Uwp3OGauMoqJK/Vvviir6ZbEVJ9W6EmNalJTWpSk5rUHDGaKTJyBVtclf9FtJiyK2n5bXZqUpOa1KQmNalJzRGjKXZLs/a5aroCQi1s+C044c1ab0MXalKTmtSkJjWpSc0Ro2nklrI32Bad9iJayNJ2pb+VoyY1qUlNalKTmtQcMZop+EwIIYQQQqKRUt2tEEIIIYSQaKS0btpECCGEEEKi8X9ZamGVG9YcLgAAAABJRU5ErkJggg=="},11439:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},46121:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/BC_TwitterBanner_1500x500_Parsetobc_02-1024x341-7ca0a482c2f7c0678f822176536217fb.png"},35084:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Roles_png-9f71dc44e065e6188e1b028555c611c8.png"}}]);