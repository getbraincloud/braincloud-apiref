"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[98602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||g[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"Google Authentication",date:"2016-10-25"},i=void 0,l={unversionedId:"learn/key-concepts/authentication/authentication-google/index",id:"learn/key-concepts/authentication/authentication-google/index",title:"Google Authentication",description:"This tutorial outlines how to set up Google authentication with the new Google Play API (v4) using the new server auth token.",source:"@site/docs/learn/1_key-concepts/authentication/authentication-google/index.md",sourceDirName:"learn/1_key-concepts/authentication/authentication-google",slug:"/learn/key-concepts/authentication/authentication-google/",permalink:"/braincloud-apiref/learn/key-concepts/authentication/authentication-google/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/1_key-concepts/authentication/authentication-google/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672679892,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"Google Authentication",date:"2016-10-25"},sidebar:"learnSidebar",previous:{title:"Authentication",permalink:"/braincloud-apiref/learn/key-concepts/authentication/"},next:{title:"Email Authentication",permalink:"/braincloud-apiref/learn/key-concepts/authentication/email-authentication/"}},c={},s=[{value:"Configure Google IDs",id:"configure-google-ids",level:3},{value:"Unity - Using GooglePlayServices",id:"unity---using-googleplayservices",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial outlines how to set up Google authentication with the new Google Play API (v4) using the new server auth token."),(0,a.kt)("h3",{id:"configure-google-ids"},"Configure Google IDs"),(0,a.kt)("p",null,"Navigate to the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://sharedprod.braincloudservers.com/admin/dashboard#/development/core-settings-information"},"Application IDs page")," for your app in the brainCloud portal. Under Configure Platforms select Google. \xa0There are four new application IDs required to handle Google\u2019s updated authentication paradigm. \xa0"),(0,a.kt)("p",null,"To retrieve them\xa0go to Google Play Developer Portal. \xa0Navigate to Games Services. \xa0Select Linked Apps. \xa0At the bottom under Authorization are two values for the new application IDs.  "),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(69723).Z},(0,a.kt)("img",{src:n(33606).Z,width:"1101",height:"361"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Google App ID"),(0,a.kt)("br",{parentName:"p"}),"\n","Google Play Developer Portal -> \u201cApplication ID\u201c"),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(17887).Z},(0,a.kt)("img",{src:n(58724).Z,width:"1535",height:"663"}))),(0,a.kt)("p",null,"Next go to Google APIs portal, ",(0,a.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials?project="},"https://console.developers.google.com/apis/credentials?project="),"<your project",">",". \xa0Navigate to Credentials, ",(0,a.kt)("strong",{parentName:"p"},"ENSURE A WEB APPLICATION")," is setup for the project you wish to authenticate with brainCloud with. Select the Web Application under OAuth 2.0 client IDs. \xa0The remaining information to fill this out is located on this screen."),(0,a.kt)("p",null,(0,a.kt)("a",{target:"_blank",href:n(51966).Z},(0,a.kt)("img",{src:n(71763).Z,width:"994",height:"734"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Google Client\xa0ID"),(0,a.kt)("br",{parentName:"p"}),"\n",'Google API Portal| OAuth 2.0 Client IDs | Web Application | "Client ID"'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Google Client Secret"),(0,a.kt)("br",{parentName:"p"}),"\n",'Google API Portal| OAuth 2.0 Client IDs | Web Application | "Client secret"'),(0,a.kt)("h3",{id:"unity---using-googleplayservices"},"Unity - Using GooglePlayServices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A step by step tutorial on brainCloud with GooglePlayServices and Unity can be found ",(0,a.kt)("a",{parentName:"li",href:"/learn/portal-tutorials/authentication-google-openid/"},"here"),".")))}u.isMDXComponent=!0},69723:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/googleAuth_01_1-cae6dce0a587777eb4ca3f482ea48524.jpg"},17887:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/googleAuth_02-1566a447919c35e1629f08fe04a16f42.jpg"},51966:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/googleAuth_03-8a994f22bd9de21c3de7f674d4e0c879.jpg"},33606:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/googleAuth_01_1-cae6dce0a587777eb4ca3f482ea48524.jpg"},58724:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/googleAuth_02-1566a447919c35e1629f08fe04a16f42.jpg"},71763:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/googleAuth_03-8a994f22bd9de21c3de7f674d4e0c879.jpg"}}]);