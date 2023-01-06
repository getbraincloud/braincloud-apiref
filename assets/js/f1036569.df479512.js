"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[67259],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),u=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return a?i.createElement(h,l(l({ref:t},p),{},{components:a})):i.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));const r={},l="Statistics Grammar",s={unversionedId:"api/appendix/statisticsGrammar",id:"api/appendix/statisticsGrammar",title:"Statistics Grammar",description:"Overview",source:"@site/docs/api/5_appendix/statisticsGrammar.md",sourceDirName:"api/5_appendix",slug:"/api/appendix/statisticsGrammar",permalink:"/braincloud-apiref/api/appendix/statisticsGrammar",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/5_appendix/statisticsGrammar.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Reason Codes",permalink:"/braincloud-apiref/api/appendix/reasonCodes"},next:{title:"Versioning",permalink:"/braincloud-apiref/api/appendix/version"}},o={},u=[{value:"Overview",id:"overview",level:2},{value:"Reset Value",id:"reset-value",level:3},{value:"Increment Value",id:"increment-value",level:3},{value:"Decrement Value",id:"decrement-value",level:3},{value:"Set Value",id:"set-value",level:3},{value:"Increment Value with a Limit",id:"increment-value-with-a-limit",level:3},{value:"Decrement Value with a Limit",id:"decrement-value-with-a-limit",level:3},{value:"Set to MAX of the two values",id:"set-to-max-of-the-two-values",level:3},{value:"Set to MIN of the two values",id:"set-to-min-of-the-two-values",level:3}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"statistics-grammar"},"Statistics Grammar"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This section provides background for the ",(0,n.kt)("strong",{parentName:"em"},"grammar")," used by the ",(0,n.kt)("inlineCode",{parentName:"em"},"ProcessStatistics")," operations of the ",(0,n.kt)("a",{parentName:"em",href:"/api/capi/globalstats/processstatistics"},"Global Statistics")," and ",(0,n.kt)("a",{parentName:"em",href:"/api/capi/playerstats/processstatistics"},"Player Statistics")," services.")),(0,n.kt)("p",null,"Statistics are passed around within brainCloud as a keyed collection of name / value pairs. Semantically, a statistic looks like:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "statName" : statValue }')),(0,n.kt)("p",null,"The supported data types for the values are long integer and double floating point. For every named statistic, the app also has a rule defined in reference data. This rule specifies a variety of attributes governing the treatment of that statistic. Among others, these attributes include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"name"),(0,n.kt)("li",{parentName:"ul"},"initial value"),(0,n.kt)("li",{parentName:"ul"},"minimum value"),(0,n.kt)("li",{parentName:"ul"},"maximum value")),(0,n.kt)("p",null,"An underlying grammar is used within brainCloud to perform operations on statistics. Within this grammar, the # (octothorpe) acts as as separator between semantic elements."),(0,n.kt)("p",null,"The following discusses the various operations supported in our statistics grammar and provides examples."),(0,n.kt)("h3",{id:"reset-value"},"Reset Value"),(0,n.kt)("p",null,"This operation resets the value of a statistic to the initial value defined by the associated rule."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "statName": "RESET" }')),(0,n.kt)("p",null,"This is arithmetically equivalent to: ",(0,n.kt)("inlineCode",{parentName:"p"},"statValue = rule.initialValue")),(0,n.kt)("h3",{id:"increment-value"},"Increment Value"),(0,n.kt)("p",null,"This operation performs a simple increment of the current value of the statistic and is equivalent to the legacy operation. The numeric attribute is added to the current value of the statistic."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "statName" : "INC#9" }')),(0,n.kt)("p",null,"This is arithmetically equivalent to: ",(0,n.kt)("inlineCode",{parentName:"p"},"statValue = statValue + 9")),(0,n.kt)("h3",{id:"decrement-value"},"Decrement Value"),(0,n.kt)("p",null,"This operation performs a simple decrement of the current value of the statistic. The numeric attribute is subtracted from the current value of the statistic."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "statName" : "DEC#9" }')),(0,n.kt)("p",null,"This is arithmetically equivalent to: ",(0,n.kt)("inlineCode",{parentName:"p"},"statValue = statValue - 9")),(0,n.kt)("h3",{id:"set-value"},"Set Value"),(0,n.kt)("p",null,"This operation sets a statistic to a value"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "statName" : "SET#9" }')),(0,n.kt)("p",null,"This is equivalent to: ",(0,n.kt)("inlineCode",{parentName:"p"},"statValue = 9")),(0,n.kt)("h3",{id:"increment-value-with-a-limit"},"Increment Value with a Limit"),(0,n.kt)("p",null,"This operation performs a simple increment of the current value of the statistic but sets a conditional limit. The first numeric attribute is added to the current value of the statistic but is limited to a value no higher than the second numeric attribute."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "statName" : "INC_TO_LIMIT#9#30" }')),(0,n.kt)("p",null,"This is arithmetically equivalent to: ",(0,n.kt)("inlineCode",{parentName:"p"},"statValue = MIN(statValue + 9, 30)")),(0,n.kt)("h3",{id:"decrement-value-with-a-limit"},"Decrement Value with a Limit"),(0,n.kt)("p",null,"This operation performs a simple decrement of the current value of the statistic but sets a conditional limit. The first numeric attribute is subtracted from the current value of the statistic but is limited to a value no lower than the second numeric attribute."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "statName" : "DEC_TO_LIMIT#9#-30" }')),(0,n.kt)("p",null,"This is arithmetically equivalent to: ",(0,n.kt)("inlineCode",{parentName:"p"},"statValue = MAX(statValue - 9, -30)")),(0,n.kt)("h3",{id:"set-to-max-of-the-two-values"},"Set to MAX of the two values"),(0,n.kt)("p",null,"This operation updates the ",(0,n.kt)("em",{parentName:"p"},"stored")," value of the stat to the ",(0,n.kt)("em",{parentName:"p"},"provided")," value only if it is larger -- essentially keeping the MAX of the two values."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'{ "statName" : "MAX#99" }')),(0,n.kt)("p",null,"For example, if the currently saved value of the stat is 100, then sending in the above instruction will have no effect."),(0,n.kt)("h3",{id:"set-to-min-of-the-two-values"},"Set to MIN of the two values"),(0,n.kt)("p",null,"As would be expected, ",(0,n.kt)("strong",{parentName:"p"},"MIN")," works in the opposite way - updating the ",(0,n.kt)("em",{parentName:"p"},"stored")," value of the stat only if the ",(0,n.kt)("em",{parentName:"p"},"provided")," value is lower."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("strong",null,"MIN")," and ",(0,n.kt)("strong",null,"MAX")," are really handy if your goal is to keep track of the highest-ever or lowest-ever value of a statistic."))}m.isMDXComponent=!0}}]);