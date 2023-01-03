"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[28145],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||n;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=a(87462),i=(a(67294),a(3905));const n={title:"Acey Deucey Example Game",date:"2015-02-19"},l=void 0,o={unversionedId:"learn/sdk-tutorials/javascript-tutorials/javascript-example-game/index",id:"learn/sdk-tutorials/javascript-tutorials/javascript-example-game/index",title:"Acey Deucey Example Game",description:"Acey Deucey, the brainCloud JavaScript example game, helps you get acquainted with using the brainCloud JavaScript client library. The card game is fairly simple - players bet on whether the next card flipped will be between two faceup cards. The game result is calculated as follows:",source:"@site/docs/learn/6_sdk-tutorials/javascript-tutorials/javascript-example-game/index.md",sourceDirName:"learn/6_sdk-tutorials/javascript-tutorials/javascript-example-game",slug:"/learn/sdk-tutorials/javascript-tutorials/javascript-example-game/",permalink:"/braincloud-apiref/learn/sdk-tutorials/javascript-tutorials/javascript-example-game/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/6_sdk-tutorials/javascript-tutorials/javascript-example-game/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672634083,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"Acey Deucey Example Game",date:"2015-02-19"},sidebar:"learnSidebar",previous:{title:"JavaScript Tutorials",permalink:"/braincloud-apiref/learn/sdk-tutorials/javascript-tutorials/"},next:{title:"JS File Upload",permalink:"/braincloud-apiref/learn/sdk-tutorials/javascript-tutorials/js-file-upload/"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Acey Deucey"),", the brainCloud JavaScript example game, helps you get acquainted with using the brainCloud JavaScript client library. The card game is fairly simple - players bet on whether the next card flipped will be between two faceup cards. The game result is calculated as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Win - if your card is between the two faceup cards"),(0,i.kt)("li",{parentName:"ul"},"Lose - if your card is outside the range of the two faceup cards"),(0,i.kt)("li",{parentName:"ul"},"Lose twice your bet - if your card is the same as either of the two faceup cards (hitting the post)")),(0,i.kt)("p",null,"Further information about\xa0the card game can be found on ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Acey_Deucey_%28card_game%29"},"wikipedia"),"."),(0,i.kt)("p",null,"The example game shows off the following brainCloud features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Email authentication - the user must authenticate using the ",(0,i.kt)("a",{parentName:"li",href:"/api/capi/authentication",title:"BrainCloudAuthentication"},"BrainCloudAuthentication"),"\xa0AuthenticateEmailPassword API."),(0,i.kt)("li",{parentName:"ul"},"Email verification - the user is sent an email to verify that they own the account (although this does not prevent you from playing the game)"),(0,i.kt)("li",{parentName:"ul"},"Player Name - the user's name is stored using the ",(0,i.kt)("a",{parentName:"li",href:"/api/capi/playerstate",title:"BrainCloudPlayerState"},"BrainCloudPlayerState")," UpdatePlayerName API."),(0,i.kt)("li",{parentName:"ul"},"Player Statistics - the user's wins/losses are tracked using the ",(0,i.kt)("a",{parentName:"li",href:"/api/capi/playerstats",title:"BrainCloudPlayerStatistics"},"BrainCloudPlayerStatistics")," APIs."),(0,i.kt)("li",{parentName:"ul"},"Player Currency - the user's balance is tracked using the ",(0,i.kt)("a",{parentName:"li",href:"/api/capi/product",title:"BrainCloudProduct"},"BrainCloudProduct")," currency APIs."),(0,i.kt)("li",{parentName:"ul"},"Global Leaderboards - a list of the top Acey Deucey players using the ",(0,i.kt)("a",{parentName:"li",href:"/api/capi/leaderboard",title:"BrainCloudSocialLeaderboard"},"BrainCloudLeaderboard")," APIs.")),(0,i.kt)("p",null,"All of the code that interacts with the brainCloud js library is located in cardGame.js."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://sharedprod.braincloudservers.com/s3/aceydeucey/cardGame.html"},"Play the example Acey Deucey game")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://d28b58vufdqdih.cloudfront.net/brainCloudExamples/javascript/AceyDeucey-2.15.0_165261_fix.zip"},"Download the source code")),(0,i.kt)("p",null,"Check out Acey Deucey in action! \xa0",(0,i.kt)("a",{parentName:"p",href:"https://sharedprod.braincloudservers.com/s3/aceydeucey/cardGame.html",title:"Acey Deucey - JavaScript Example"},"Click to Play"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://sharedprod.braincloudservers.com/s3/aceydeucey/cardGame.html"},(0,i.kt)("img",{alt:"Acey Deucey",src:a(17925).Z,width:"711",height:"832"}))))}p.isMDXComponent=!0},17925:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2015-03-02__11_21_AM-1a462e138fffd5cda586fa97bea5653c.png"}}]);