"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[7078],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>y});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),o=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=o(e.components);return r.createElement(c.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=o(t),d=n,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(y,p(p({ref:a},s),{},{components:t})):r.createElement(y,p({ref:a},s))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[m]="string"==typeof e?e:n,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97456:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(87462),n=(t(67294),t(3905));const i={},p="Playback Stream",l={unversionedId:"api/capi/playbackstream/index",id:"api/capi/playbackstream/index",title:"Playback Stream",description:"Overview",source:"@site/docs/api/2_capi/playbackstream/index.md",sourceDirName:"api/2_capi/playbackstream",slug:"/api/capi/playbackstream/",permalink:"/braincloud-apiref/api/capi/playbackstream/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/playbackstream/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"StartMatch",permalink:"/braincloud-apiref/api/capi/onewaymatch/startmatch"},next:{title:"AddEvent",permalink:"/braincloud-apiref/api/capi/playbackstream/addevent"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"API Summary",id:"api-summary",level:3},{value:"PlaybackStream",id:"playbackstream",level:3}],s=(m="DocCardList",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var m;const u={toc:o};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"playback-stream"},"Playback Stream"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"PlaybackStreamService")," allows for the creation and replay of a series of events. A Stream can be created using the StartStream call. "),(0,n.kt)("p",null,"One-Way Matches use Playback Streams to track the events of the One-Way Match."),(0,n.kt)("h3",{id:"api-summary"},"API Summary"),(0,n.kt)("h3",{id:"playbackstream"},"PlaybackStream"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/playbackstream/startstream"},"StartStream")," - Start a playback stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/playbackstream/readstream"},"ReadStream")," - Read a playback stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/playbackstream/endstream"},"EndStream")," - End a playback stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/playbackstream/deletestream"},"DeleteStream")," - Delete a playback stream."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/playbackstream/getrecentstreamsforinitiatingplayer"},"GetRecentStreamsForInitiatingPlayer")," - Get recent streams for initiating player, optional parameter: initiatingPlayerId."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/playbackstream/getrecentstreamsfortargetplayer"},"GetRecentStreamsForTargetPlayer")," - Get recent streams for target player, optional parameter: targetPlayerId."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/capi/playbackstream/addevent"},"AddEvent")," - Add event to stream.")),(0,n.kt)(s,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);