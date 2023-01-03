"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34187:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Release 3.4.0",date:"2017-04-06",tags:["release-history"]},i=void 0,o={permalink:"/braincloud-apiref/release/2017/04/06/release-3-4-0-coming-soon",source:"@site/release/2017-04-06-release-3-4-0-coming-soon/index.md",title:"Release 3.4.0",description:"This is a small release that focuses on some common customer requests. There is hopefully something for everyone!",date:"2017-04-06T00:00:00.000Z",formattedDate:"April 6, 2017",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:3.43,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 3.4.0",date:"2017-04-06",tags:["release-history"]},prevItem:{title:"Release 3.5.0",permalink:"/braincloud-apiref/release/2017/06/15/release-3-5"},nextItem:{title:"Release 3.3.0",permalink:"/braincloud-apiref/release/2017/03/10/release-3-3-0"}},s={authorsImageUrls:[]},p=[{value:"Release Highlights",id:"release-highlights",level:2},{value:"Enhanced Global Entity Editor",id:"enhanced-global-entity-editor",level:3},{value:"Tournament fixes and enhancements",id:"tournament-fixes-and-enhancements",level:3},{value:"Cloud Code Security Fix",id:"cloud-code-security-fix",level:3},{value:"Portal Changes",id:"portal-changes",level:2},{value:"API Changes / Fixes",id:"api-changes--fixes",level:2},{value:"Miscellaneous Changes / Fixes",id:"miscellaneous-changes--fixes",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a small release that focuses on some common customer requests. There is hopefully something for everyone!"),(0,r.kt)("h2",{id:"release-highlights"},"Release Highlights"),(0,r.kt)("h3",{id:"enhanced-global-entity-editor"},"[Enhanced]"," Global Entity Editor"),(0,r.kt)("p",null,"We have ",(0,r.kt)("em",{parentName:"p"},"finally")," upgraded our ",(0,r.kt)("strong",{parentName:"p"},"Global Entity Editor")," to allow you to ",(0,r.kt)("em",{parentName:"p"},"directly")," create entities (i.e. without reverting to code or the API Explorer)."),(0,r.kt)("p",null,"It works as you would expect - just click on the ",(0,r.kt)("strong",{parentName:"p"},"[+]")," button on the ",(0,r.kt)("strong",{parentName:"p"},"Global Monitoring | Global Entities")," page, and\xa0fill out the form to create your object."),(0,r.kt)("p",null,"For quick object created - try clicking the ",(0,r.kt)("strong",{parentName:"p"},"[ { Retrieve Example } ]")," button. This will prefill the custom data section of the object with JSON retrieved from a similarly typed entity."),(0,r.kt)("h3",{id:"tournament-fixes-and-enhancements"},"Tournament fixes and enhancements"),(0,r.kt)("p",null,"First of all, we have fixed some issues that could occur when importing or applying ",(0,r.kt)("em",{parentName:"p"},"rotation changes to tournaments that are already in progress"),". As part of this, we have made some adjustments to the"),(0,r.kt)("p",null,"As part of this, we have made some adjustments to the ",(0,r.kt)("strong",{parentName:"p"},"Phases")," page of the ",(0,r.kt)("strong",{parentName:"p"},"Leaderboard Config")," dialog - making it a lot clearer as to whether your changes will affect the currently active tournament cycle, or will only take effect for the next tournament cycle."),(0,r.kt)("p",null,"Finally, now that that is all straightened away - we have re-enabled support for ",(0,r.kt)("em",{parentName:"p"},"Monthly")," and ",(0,r.kt)("em",{parentName:"p"},"Yearly")," tournament cycles."),(0,r.kt)("h3",{id:"cloud-code-security-fix"},"Cloud Code Security Fix"),(0,r.kt)("p",null,"In 3.2 we\xa0refactored script permissions to allow\xa0more precision in controlling whether a script is callable via the Client API, the Server-to-Server API, or from a Peer Service."),(0,r.kt)("p",null,"It turns out that a defect was introduced during that change that in some cases would allow a script\xa0to be called from the Client API, even if it didn't have the appropriate permission."),(0,r.kt)("p",null,"This defect has been addressed."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"portal-changes"},"Portal Changes"),(0,r.kt)("p",null,"We have made the following improvements to the Portal:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Design")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integrations | Manage Integrations"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed ",(0,r.kt)("em",{parentName:"li"},"Parse Integration")," since Parse no longer exists.\xa0You can still import Parse data exports via the ",(0,r.kt)("strong",{parentName:"li"},"Global Monitoring | Global Entities")," screen though."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Leaderboard | Leaderboard Configs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Monthly and Yearly rotation types available for tournaments again"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Phases")," tab\xa0now defaults to show how the phase changes affect the ",(0,r.kt)("em",{parentName:"li"},"next")," tournament cycle"),(0,r.kt)("li",{parentName:"ul"},"To change the currently active tournament, choose ",(0,r.kt)("em",{parentName:"li"},'"Active Cycle"')," from the combo-box, and then click the red ",(0,r.kt)("strong",{parentName:"li"},"[Apply to Live Tournament! (Danger)!]")," button.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Monitoring")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Global Monitoring | Global Entities"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Revised the Global Entities list screen to be more useful",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create entities by clicking on the ","[+]"," button"),(0,r.kt)("li",{parentName:"ul"},"Quickly duplicate entities by choosing ",(0,r.kt)("em",{parentName:"li"},"Clone")," from the new ",(0,r.kt)("em",{parentName:"li"},"Action")," menu"),(0,r.kt)("li",{parentName:"ul"},"Click on an entity ",(0,r.kt)("em",{parentName:"li"},"owner")," to jump to that user in User Monitoring"))),(0,r.kt)("li",{parentName:"ul"},"Enhanced Global Entity Editor dialog",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Quickly choose an entity type from a list of used types"),(0,r.kt)("li",{parentName:"ul"},"Retrieve example JSON by clicking on the ",(0,r.kt)("strong",{parentName:"li"},"[ { Retrieve Example } ]")," button")))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"api-changes--fixes"},"API Changes / Fixes"),(0,r.kt)("p",null,"The following changes/additions have affected the brainCloud API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Async Match"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[Fixed][FindMatches()]","(/api/capi/asyncmatch/findmatches) and ",(0,r.kt)("a",{parentName:"li",href:"/api/capi/asyncmatch/readmatch"},"ReadMatch()")," APIs now return the user's latest profile pic URLs instead of the pic that was captured at the time the match was created."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[Fixed][ResetEmailPassword()]","(/api/capi/authentication/resetemailpasswordwithexpiry) in the JavaScript and AS3 libraries\xa0no longer require an authenticated session to work. D'uh!"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"General"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"APIs that can return rewards-related results (i.e. Authentication, GetPlayerState, IncrementXP, etc.) are no longer returning a redundant XP ",(0,r.kt)("inlineCode",{parentName:"li"},"reward")," section. ",(0,r.kt)("em",{parentName:"li"},"Note - a new compatibility flag has been introduced to preserve the old functionality. The flag, ",(0,r.kt)("strong",{parentName:"em"},"[x]"," Send obsolete reward field content in XP level up rewards results"),", defaults to enabled for existing apps."))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Important Fixes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("em",{parentName:"li"},"Cloud Code Security Fix")," description in ",(0,r.kt)("em",{parentName:"li"},"Release Highlights")),(0,r.kt)("li",{parentName:"ul"},"Now deleting ",(0,r.kt)("em",{parentName:"li"},"canceled")," cloud code jobs properly (and automatically!)"),(0,r.kt)("li",{parentName:"ul"},"Improved reliability for the ",(0,r.kt)("strong",{parentName:"li"},"[Login as User]")," button on the ",(0,r.kt)("strong",{parentName:"li"},"User Monitoring | User Summary")," page"))),(0,r.kt)("li",{parentName:"ul"},"Updated libraries",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The AS3 and Flash libraries have been updated to incorporate the ResetEmailPassword() fix."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, the client libraries have not been affected by this release."))),(0,r.kt)("li",{parentName:"ul"},"Plus miscellaneous fixes and performance enhancements")))}c.isMDXComponent=!0}}]);