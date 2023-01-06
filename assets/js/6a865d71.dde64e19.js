"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[13320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={title:"CC Tutorial - Background",date:"2016-02-16"},i=void 0,l={unversionedId:"learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial-background/index",id:"learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial-background/index",title:"CC Tutorial - Background",description:"Background",source:"@site/docs/learn/4_cloud-code-central/cloud-code-tutorials/cloud-code-tutorial-background/index.md",sourceDirName:"learn/4_cloud-code-central/cloud-code-tutorials/cloud-code-tutorial-background",slug:"/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial-background/",permalink:"/braincloud-apiref/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial-background/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/4_cloud-code-central/cloud-code-tutorials/cloud-code-tutorial-background/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672679892,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"CC Tutorial - Background",date:"2016-02-16"},sidebar:"learnSidebar",previous:{title:"Cloud Code Tutorials",permalink:"/braincloud-apiref/learn/cloud-code-central/cloud-code-tutorials/"},next:{title:"CC Tutorial1 - Your First Script",permalink:"/braincloud-apiref/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial1-your-first-script/"}},c={},s=[{value:"Background",id:"background",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Current\xa0Limitations",id:"currentlimitations",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"brainCloud uses the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino"},"Mozilla Rhino"),"\xa0engine to allow\xa0user-developed ",(0,a.kt)("em",{parentName:"p"},"JavaScript"),"-based scripts to be run on brainCloud's servers. Cloud Code\xa0scripts run within a secure sandbox that provides access to brainCloud's API methods, while\xa0at the same time ensuring that the scripts are limited to accessing the app's own private data, and cannot affect the processing of other brainCloud-based applications."),(0,a.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},'Script parameters are sent via a global "data" JSON object.'))," You retrieve the value of the parameter by simply retrieving it from the data object - i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},'myParm = data["myParm"]'),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},'You don\'t technically "return" from a Cloud Code script.'))," The last line of the script will instead simply declare the final object to be evaluated as the script's return -- ",(0,a.kt)("em",{parentName:"li"},"this will be clearer after you view an example or two.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"The portal includes a built-in cloud editor."))," We're\xa0working to make it more convenient to write and manage your Cloud Code scripts from your desktop, but for now, the simplest is to write it in our editor. The good news is that the editor is syntax-aware and really does help you to write good JavaScript. (Note - the editor does allow import/export from the desktop)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"Scripts can be quickly tested via the API Explorer."))," The API and S2S Explorers make it very easy to test your Cloud Code. Simply go to ",(0,a.kt)("strong",{parentName:"li"},"Design | Cloud Code | API Explorer"),", then authenticate a session, and then call your script using the ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"Script"))," service and the appropriate ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"Run Script"))," operation. The explorer will even pull your example parameters from the script definitions, so it's pretty quick and simple to execute."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"Scripts are versioned."))," Every time you save a new copy of a script we backup the older version. You can revert to an older script at any time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},'Scripts have a "watchdog timer" that ensures that they don\'t run too long.'))," This is essential to protect the performance of the overall system from run-away scripts. The\xa0timeouts for scripts are\xa0set individually. The default timeout for a script is 10 seconds but can be set to up to 60 seconds in the timeout dropdown. ",(0,a.kt)("em",{parentName:"li"},"Note, brainCloud does allow for running longer-term background scripts - just reach-out to us to enable the setting of longer timeouts."))),(0,a.kt)("h2",{id:"currentlimitations"},"Current\xa0Limitations"),(0,a.kt)("p",null,"When writing Cloud Code scripts, there are some key limitations to keep in mind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"Each script is limited to a single entry point")),'. \xa0This means that essentially the "mainline" of a script is run whenever the script is called.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"Access to external libraries is limited.")),"\xa0We're looking to add access to popular libraries like Moment.js in the future.")))}d.isMDXComponent=!0}}]);