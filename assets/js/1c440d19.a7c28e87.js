"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[74687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={},o="SysDeleteDivisionSetConfig",l={unversionedId:"api/capi/tournament/sysdeletedivisionsetconfig",id:"api/capi/tournament/sysdeletedivisionsetconfig",title:"SysDeleteDivisionSetConfig",description:"Overview",source:"@site/docs/api/2_capi/tournament/sysdeletedivisionsetconfig.md",sourceDirName:"api/2_capi/tournament",slug:"/api/capi/tournament/sysdeletedivisionsetconfig",permalink:"/braincloud-apiref/api/capi/tournament/sysdeletedivisionsetconfig",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/tournament/sysdeletedivisionsetconfig.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysCreateTournamentTemplate",permalink:"/braincloud-apiref/api/capi/tournament/syscreatetournamenttemplate"},next:{title:"SysDeleteTournamentTemplate",permalink:"/braincloud-apiref/api/capi/tournament/sysdeletetournamenttemplate"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=p("PartialServop"),u=p("BrowserWindow"),m=p("Tabs"),v=p("TabItem"),f={toc:d};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sysdeletedivisionsetconfig"},"SysDeleteDivisionSetConfig"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Deletes the division set configuration uniquely identified by the division set id, with optional, additional enforcement. NOTE: Does NOT delete any division set instance leaderboards that have currently been created, those will expire at the normal time. Does NOT prevent players from posting scores to a division set instance they are already a member of. WILL prevent new players for joining the deleted division set (JoinDivisionSet Tournament service API). WILL prevent users from querying the division info (GetDivisionInfo Tournament service API). WILL prevent Design Portal users from being able to view the rankings of the division set instance leaderboards for the deleted Division Set config."),(0,r.kt)(c,{service_name:"tournament",operation_name:"SYS_DELETE_DIVISION_SET_CONFIG",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(v,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(v,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(v,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(v,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(v,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,r.kt)(v,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},'var divSetId = "divisionSetId";\nvar version = 10;\nvar force = false;\nvar tournamentProxy = bridge.getTournamentServiceProxy();\n\nvar postResult = tournamentProxy.sysDeleteDivisionSetConfig(divSetId, version, force);\nif (postResult.status == 200) {\n  // Success!\n}\n'))),(0,r.kt)(v,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n  "service": "tournament",\n  "operation": "SYS_DELETE_DIVISION_SET_CONFIG",\n  "data":\n  {\n    "divSetId": "divisionSetId",\n    "version": 10,\n    "force": false\n  }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status" : 200,\n  "data" : null\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"divSetId"),(0,r.kt)("td",{parentName:"tr",align:null},"The division set id uniquely identifying the division set configuration to be deleted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"Current version number of division set config being deleted. Use -1 to disable version checking.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"force"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional flag, defaults to false. If false, ensures the division set config has no associated, unexpired division set instance leaderboards that still exist (disallows the deletion if so). If true, this checking is not enforced and may result in some limitations.")))))}y.isMDXComponent=!0}}]);