"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[39702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15642:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"CC Tutorial2 - Making API calls",date:"2016-02-16"},l=void 0,i={unversionedId:"learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial2-making-api-calls/index",id:"learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial2-making-api-calls/index",title:"CC Tutorial2 - Making API calls",description:"In this tutorial, we'll explain how to make brainCloud API calls from within Cloud Code scripts.",source:"@site/docs/learn/4_cloud-code-central/cloud-code-tutorials/cloud-code-tutorial2-making-api-calls/index.md",sourceDirName:"learn/4_cloud-code-central/cloud-code-tutorials/cloud-code-tutorial2-making-api-calls",slug:"/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial2-making-api-calls/",permalink:"/braincloud-apiref/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial2-making-api-calls/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/4_cloud-code-central/cloud-code-tutorials/cloud-code-tutorial2-making-api-calls/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672679892,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"CC Tutorial2 - Making API calls",date:"2016-02-16"},sidebar:"learnSidebar",previous:{title:"CC Tutorial1 - Your First Script",permalink:"/braincloud-apiref/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial1-your-first-script/"},next:{title:"CC Tutorial3 - Working with Entities",permalink:"/braincloud-apiref/learn/cloud-code-central/cloud-code-tutorials/cloud-code-tutorial3-working-with-entities/"}},s={},c=[{value:"Example Background",id:"example-background",level:2},{value:"Step 1 -\xa0Write the Script",id:"step-1--write-the-script",level:2},{value:"Step 2 - Run/Test the Script",id:"step-2---runtest-the-script",level:2},{value:"Step 3 - Call the Script from your App",id:"step-3---call-the-script-from-your-app",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we'll explain how to make brainCloud API calls from within Cloud Code scripts."),(0,n.kt)("h2",{id:"example-background"},"Example Background"),(0,n.kt)("p",null,"For this example, we'll imagine that the developer wants to\xa0write to two leaderboards upon completion of a game round."),(0,n.kt)("p",null,"She has decided to combine these two operations\xa0into a single cloud code script to reap the following benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"More responsive app"),"\xa0- fewer client/server calls means a more responsive app"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Cost savings"),"\xa0- it costs 1 API count to call a script, but the first 2 API calls called from within a script are free (and the rest cost only 1/2 count each). The result is she can write to two leaderboards for a single API count combined,\xa0half the cost otherwise.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note that for this example we'll use the dynamic leaderboard calls so that we don't have to set up the leaderboard metadata ahead-of-time.")),(0,n.kt)("h2",{id:"step-1--write-the-script"},"Step 1 -\xa0Write the Script"),(0,n.kt)("p",null,"We'll enter the script following the same steps as the last tutorial."),(0,n.kt)("p",null,"First of all, create the script by going to ",(0,n.kt)("strong",{parentName:"p"},"Design | Cloud Code | Script"),", hitting the ",(0,n.kt)("strong",{parentName:"p"},"[+]"),",\xa0setting\xa0",(0,n.kt)("em",{parentName:"p"},"Script\xa0Name")," to\xa0",(0,n.kt)("strong",{parentName:"p"},'"Tut2_WriteToLeaderboards"'),", ensuring ",(0,n.kt)("em",{parentName:"p"},"Client Callable")," is ",(0,n.kt)("strong",{parentName:"p"},"TRUE"),", and entering the following for the ",(0,n.kt)("em",{parentName:"p"},"Test Parameters"),":"),(0,n.kt)("p",null,"Test Parameters"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "score": 100,\n  "kills": 10\n}\n')),(0,n.kt)("p",null,"Then switch to the ",(0,n.kt)("em",{parentName:"p"},"Editor")," tab and copy-and-paste the following for the script:"),(0,n.kt)("p",null,"Script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'// Retrieve the parameters\nvar score = data.score;\nvar kills = data.kills;\nvar leaderboardsWritten = 0;\nvar results = {};\n\n// Grab the leaderboard service proxy from the bridge\nvar leaderboardService = bridge.getLeaderboardServiceProxy();\n\n// Prepare the leaderboard paramaters. These are only used when creating the \n// leaderboard (which happens the first time a score is posted to it)\nvar leaderboardType = "HIGH_VALUE";\nvar rotationType = "NEVER";\nvar rotationReset = new Date("2016-01-01");  // Unused because rotationType is NEVER\nvar retainedCount = 1; // Just keep the current leaderboard\n\n// Post to the score leaderboard\nvar scoreResult = leaderboardService.postScoreToDynamicLeaderboard(\n    "scoreLeaderboard", \n    score, \n    null, // Not appending any extra data \n    leaderboardType, \n    rotationType, \n    rotationReset, \n    retainedCount);\n    \nif (scoreResult.status == "200") {\n    \n    leaderboardsWritten++;\n    \n    // Post to the kill leaderboard\n    var killsResult = leaderboardService.postScoreToDynamicLeaderboard(\n        "killsLeaderboard", \n        kills, \n        null, // Not appending any extra data \n        leaderboardType, \n        rotationType, \n        rotationReset, \n        retainedCount);\n        \n    if (killsResult.status == "200") {\n        leaderboardsWritten++;\n    }\n    \n}\n\nresults["leaderboardsWritten"] = leaderboardsWritten;\nresults;\n')),(0,n.kt)("p",null,"The important things to note from this example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Before you can make an API call, you must request the appropriate ",(0,n.kt)("em",{parentName:"strong"},"service proxy")," from the bridge.")," \xa0Note that there are separate bridges for ",(0,n.kt)("a",{parentName:"li",href:"/api/cc/bridge"},"Client API")," and ",(0,n.kt)("a",{parentName:"li",href:"/api/s2s/"},"S2S API")," calls - consult the appropriate one for the available proxies."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"You then invoke\xa0the API call upon\xa0the ",(0,n.kt)("em",{parentName:"strong"},"service proxy")," itself."))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"step-2---runtest-the-script"},"Step 2 - Run/Test the Script"),(0,n.kt)("p",null,"Switch to the API Explorer and run the script. Remember to authenticate first!"),(0,n.kt)("p",null,"You should see results that look similar to:"),(0,n.kt)("p",null,"Results"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'{\n "status": 200,\n "data": {\n  "response": {\n   "leaderboardsWritten": 2\n  },\n  "success": true\n }\n}\n')),(0,n.kt)("p",null,"For fun, check out the leaderboards\xa0from our Monitoring section. Go to ",(0,n.kt)("strong",{parentName:"p"},"Monitoring | Global Monitoring | Leaderboards"),'\xa0By default you\'ll see the "killsLeaderboard" - but\xa0you can switch to the "scoreLeaderboard" via the combo box.'),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"step-3---call-the-script-from-your-app"},"Step 3 - Call the Script from your App"),(0,n.kt)("p",null,"The following code would call the script from Unity:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'string scriptName = "Tut2_WriteToLeaderboards";\nstring jsonScriptData = "{ \\"score\\": 100, \\"kills\\": 10 }";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n// Call the script \n_bc.ScriptService.RunScript(scriptName, jsonScriptData, successCallback, failureCallback);\n')))}u.isMDXComponent=!0}}]);