"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[47224],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,f=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15486:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Tournament",l={unversionedId:"api/capi/tournament/index",id:"api/capi/tournament/index",title:"Tournament",description:"Overview",source:"@site/docs/api/2_capi/tournament/index.md",sourceDirName:"api/2_capi/tournament",slug:"/api/capi/tournament/",permalink:"/braincloud-apiref/api/capi/tournament/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/tournament/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193365,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ReadServerTime",permalink:"/braincloud-apiref/api/capi/time/readservertime"},next:{title:"ClaimTournamentReward",permalink:"/braincloud-apiref/api/capi/tournament/claimtournamentreward"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Tournament Divisions",id:"tournament-divisions",level:3},{value:"API Summary",id:"api-summary",level:3},{value:"Tournaments",id:"tournaments",level:3},{value:"Divisions",id:"divisions",level:3},{value:"System calls",id:"system-calls",level:3}],m=(u="DocCardList",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tournament"},"Tournament"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"SYSTEM_TOURNAMENT_COMPLETE")," event")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json-doc"},'{\n  "eventData": {\n    "leaderboardId": "bronzeTourney",\n    "versionId": 40\n  },\n  "createdAt": 1485634987425,\n  "fromPlayerId": "",\n  "toPlayerId": "06d7b728-b797-41cc-a872-00a3188e151e",\n  "eventType": "SYSTEM_TOURNAMENT_COMPLETE",\n  "evId": "588cfdab9911cc728ee21eae"\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"TournamentService")," API allows apps to interact with brainCloud's ",(0,r.kt)("em",{parentName:"p"},"Global Tournaments")," feature."),(0,r.kt)("p",null,"Tournaments allow developers to automatically reward players based on their performance in leaderboards. Rewards can be virtual currencies, XP, stats and more."),(0,r.kt)("p",null,"To create an instance of a Tournament, you first create a ",(0,r.kt)("em",{parentName:"p"},"Tournament Template")," - and attach it to a Leaderboard via the Design Portal."),(0,r.kt)("p",null,"Once a Leaderboard has a Tournament attached its behavior changes (i.e., you need to ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/tournament/jointournament"},"join")," the tournament before you can post scores, etc.)"),(0,r.kt)("p",null,"At the end of a Tournament cycle (i.e. period), players are sent a ",(0,r.kt)("inlineCode",{parentName:"p"},"SYSTEM_TOURNAMENT_COMPLETE")," event indicating that the tournament has completed. If there is a reward, the app should ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/tournament/claimtournamentreward"},"claim it"),"."),(0,r.kt)("p",null,"For more information on how ",(0,r.kt)("em",{parentName:"p"},"Global Tournaments")," work, see ",(0,r.kt)("a",{parentName:"p",href:"http://getbraincloud.com/apidocs/introducing-global-tournaments/"},"Introducing Global Tournaments"),"."),(0,r.kt)("p",null,"For more information on ",(0,r.kt)("em",{parentName:"p"},"Events"),", see the ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/event"},"Events API"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Pro-tip: There are two fields, ",(0,r.kt)("strong",null,"tRank")," and ",(0,r.kt)("strong",null,"rank"),", in our tournament system. The former repesents the tournament ranking for the score (with tied tournament scores will be having the same tRank), the latter\nrepesents the leaderboard ranking, it will be unique, so even tied scores will be given a different leaderboard ",(0,r.kt)("em",null,"rank")," (with the most recently posted \"tied' score having a better rank).")),(0,r.kt)("h3",{id:"tournament-divisions"},"Tournament Divisions"),(0,r.kt)("p",null,"Tournaments with too many players can be less enticing to players because they have a smaller chance to win. ",(0,r.kt)("em",{parentName:"p"},"Divisions")," solve this problem by arbitrarily breaking smaller groups - eg. 100 players each. We call each mini-competition a ",(0,r.kt)("em",{parentName:"p"},"Division Instance"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Divisions Instances")," only exist for a single tournament period. Once the challenge period is complete, players are disbursed and will join new division instances as the next tournament cycle begins."),(0,r.kt)("p",null,"FYI - Division instances are essentially managed leaderboards, and are given special leaderboard ids to distinguish them. The ids, for example  ",(0,r.kt)("inlineCode",{parentName:"p"},"^D^weekly^55"),", include an incrementing sequence number that identity the instance."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note - Divisions are not to be confused with Tiers. Tiers normally imply a ranking difference between players - eg. bronze, silver and gold. You can implement this notion in brainCloud using a separate division set (or simply leaderboards+tournaments) for each tier - the management of ranking players up/down is up to the developer. Ask us for implementation suggestions if you are interested.")),(0,r.kt)("h3",{id:"api-summary"},"API Summary"),(0,r.kt)("h3",{id:"tournaments"},"Tournaments"),(0,r.kt)("p",null,"The following API calls are used for leaderboards with ",(0,r.kt)("em",{parentName:"p"},"Tournaments")," attached:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/gettournamentstatus"},"GetTournamentStatus")," - view the state of a tournament"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/jointournament"},"JoinTournament")," - join the specified tournament"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/leavetournament"},"LeaveTournament")," - abandon the tournament"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/posttournamentscoreutc"},"PostTournamentScoreUTC")," - post a score to the tournament"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/posttournamentscorewithresultsutc"},"PostTournamentScoreWithResultsUTC")," - post a score to the tournament, and return the updated standings "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/posttournamentscoreonbehalfof"},"PostTournamentScoreOnBehalfOf")," - post another player's score to the tournament"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/viewcurrentreward"},"ViewCurrentReward")," - preview the expected reward for the player based on their current rank in the tournament."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/viewreward"},"ViewReward")," - view the player's reward for a completed tournament. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/claimtournamentreward"},"ClaimTournamentReward")," - claim the player's reward for a completed tournament.")),(0,r.kt)("p",null,"Use the standard ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/leaderboard"},"Leaderboard Service")," apis for retrieving player standings (i.e. ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/leaderboard/getgloballeaderboardpage"},(0,r.kt)("code",null,"GetGlobalLeaderboardPage")),", ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/leaderboard/getgloballeaderboardview"},(0,r.kt)("code",null,"GetGlobalLeaderboardView")),", etc.)"),(0,r.kt)("h3",{id:"divisions"},"Divisions"),(0,r.kt)("p",null,"The following API calls are specific to ",(0,r.kt)("em",{parentName:"p"},"Divisions"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/getdivisioninfo"},"GetDivisionInfo")," - get info about the specified division set. Call instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"GetTournamentStatus()")," to retrieve the prize rules and scheduling status of a division."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/joindivision"},"JoinDivision")," - join a division set (will be assigned to an instance). Call instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"JoinTournament()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/leavedivisioninstance"},"LeaveDivisionInstance")," - leave a division instance. Call instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"LeaveTournament()"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/getmydivisions"},"GetMyDivisions")," - retrieves a list of the division instances that player is/has recently participated in")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/capi/tournament/posttournamentscoreutc"},"PostTournamentScoreUTC"),", ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/tournament/viewcurrentreward"},"ViewCurrentReward"),", ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/tournament/viewreward"},"ViewReward"),", and ",(0,r.kt)("a",{parentName:"p",href:"/api/capi/tournament/claimtournamentreward"},"ClaimTournamentReward")," all work as expected for divisions."),(0,r.kt)("h3",{id:"system-calls"},"System calls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/syscreatetournamenttemplate"},"SysCreateTournamentTemplate")," - Creates a new tournament template."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/sysreadtournamenttemplate"},"SysReadTournamentTemplate")," - Read a specific tournament template by tournament code and version."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/sysedittournamenttemplate"},"SysEditTournamentTemplate")," - Changes an existing tournament template."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/syslisttournamenttemplates"},"SysListTournamentTemplates")," - Lists all tournament templates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/sysdeletetournamenttemplate"},"SysDeleteTournamentTemplate")," - Deletes the tournament template identified by the tournament code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/syscreatedivisionsetconfig"},"SysCreateDivisionSetConfig")," - Creates a new division set configuration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/sysdeletedivisionsetconfig"},"SysDeleteDivisionSetConfig")," - Deletes the division set configuration uniquely identified by the division set id, with optional, additional enforcement."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/syseditdivisionsetconfig"},"SysEditDivisionSetConfig")," - Updates a division set configuration with specified changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/syslistdivisionsetconfigs"},"SysListDivisionSetConfigs")," - Lists all division set configurations for the app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/capi/tournament/sysreaddivisionsetconfig"},"SysReadDivisionSetConfig")," - Reads the current version of the division set configuration identified by the division set id.")),(0,r.kt)(m,{mdxType:"DocCardList"}))}c.isMDXComponent=!0}}]);