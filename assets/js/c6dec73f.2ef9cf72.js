"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[25791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,h=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return a?r.createElement(h,c(c({ref:t},u),{},{components:a})):r.createElement(h,c({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"RankGame_AutoJoinMatch",date:"2018-09-05"},c=void 0,i={unversionedId:"learn/cloud-code-central/handy-cloud-code-scripts/rankgame_autojoinmatch/index",id:"learn/cloud-code-central/handy-cloud-code-scripts/rankgame_autojoinmatch/index",title:"RankGame_AutoJoinMatch",description:"Purpose",source:"@site/docs/learn/4_cloud-code-central/handy-cloud-code-scripts/rankgame_autojoinmatch/index.md",sourceDirName:"learn/4_cloud-code-central/handy-cloud-code-scripts/rankgame_autojoinmatch",slug:"/learn/cloud-code-central/handy-cloud-code-scripts/rankgame_autojoinmatch/",permalink:"/braincloud-apiref/learn/cloud-code-central/handy-cloud-code-scripts/rankgame_autojoinmatch/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/4_cloud-code-central/handy-cloud-code-scripts/rankgame_autojoinmatch/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672679892,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"RankGame_AutoJoinMatch",date:"2018-09-05"},sidebar:"learnSidebar",previous:{title:"OnRegisterNewUser script",permalink:"/braincloud-apiref/learn/cloud-code-central/handy-cloud-code-scripts/onregisternewuser-script/"},next:{title:"RankGame_FinishMatch",permalink:"/braincloud-apiref/learn/cloud-code-central/handy-cloud-code-scripts/rankgame_finishmatch/"}},l={},p=[{value:"Purpose",id:"purpose",level:3},{value:"Script",id:"script",level:3},{value:"Usage / Setup",id:"usage--setup",level:3}],u={toc:p};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"Starts a ranked match with a player looking for a match. Otherwise, will indicate that the current player is looking for a ranked match."),(0,n.kt)("p",null,"Based on the brainCloud ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/getbraincloud/examples-unity"},"TicTacToe")," example."),(0,n.kt)("h3",{id:"script"},"Script"),(0,n.kt)("p",null,"Click ",(0,n.kt)("a",{target:"_blank",href:a(76850).Z},"RankGame_AutoJoinMatch.ccjs.zip")," to download the file."),(0,n.kt)("h3",{id:"usage--setup"},"Usage / Setup"),(0,n.kt)("p",null,"To configure this script, simply import it into your app."),(0,n.kt)("p",null,"The script is expected to be called when a player is trying to auto join an async match."),(0,n.kt)("p",null,"You call the script in the app via the ",(0,n.kt)("a",{parentName:"p",href:"/api/capi/script/runscript"},"RunScript()")," API call."),(0,n.kt)("p",null,"The script takes the following parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"rankRangeDelta - Elo range delta we will accept. A player will 1200 Elo and a delta of 200, will accept matches of players between 1000-1400"),(0,n.kt)("li",{parentName:"ul"},"pushNotificationMessage - Notification opposing player will see. Note: you must first set your app up with push notifications")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example script parameters")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{ \n   "rankRangeDelta":200,\n   "pushNotificationMessage":"You are now in a ranked match!"\n}\n')))}s.isMDXComponent=!0},76850:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/files/RankGame_AutoJoinMatch.ccjs-7ad7b0e2e108c9aa01d79c41f23c1c45.zip"}}]);