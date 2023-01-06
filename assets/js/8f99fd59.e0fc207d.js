"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[18530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Release 4.1",date:"2019-06-25",tags:["release-history"]},l=void 0,i={permalink:"/braincloud-apiref/release/2019/06/25/release-4-1",source:"@site/release/2019-06-25-release-4-1/index.md",title:"Release 4.1",description:"Note - you can also view the highlights in our new Roadmap!",date:"2019-06-25T00:00:00.000Z",formattedDate:"June 25, 2019",tags:[{label:"release-history",permalink:"/braincloud-apiref/release/tags/release-history"}],readingTime:7.615,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Release 4.1",date:"2019-06-25",tags:["release-history"]},prevItem:{title:"Release 4.2",permalink:"/braincloud-apiref/release/2019/09/18/release-4-2"},nextItem:{title:"Release 4.0 is live!",permalink:"/braincloud-apiref/release/2019/05/23/release-4-0"}},s={authorsImageUrls:[]},p=[{value:"Group Leaderboards",id:"group-leaderboards",level:2},{value:"Group Enhancements",id:"group-enhancements",level:2},{value:"Voting Leaderboards",id:"voting-leaderboards",level:2},{value:"Multi-Region Support",id:"multi-region-support",level:2},{value:"Dynamic Chat Channels",id:"dynamic-chat-channels",level:2},{value:"Design",id:"design",level:2},{value:"Monitoring",id:"monitoring",level:2},{value:"General",id:"general",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Note - you can also view the highlights in our new ",(0,n.kt)("a",{parentName:"p",href:"https://portal.productboard.com/braincloud/1-braincloud-roadmap/tabs/4-coming-in-4-1"},"Roadmap"),"!"),(0,n.kt)("h1",{id:"release-highlights"},"Release Highlights"),(0,n.kt)("h2",{id:"group-leaderboards"},"Group Leaderboards"),(0,n.kt)("p",null,"Although brainCloud has long supported filtering leaderboards to group members, it has not supported true Group Leaderboards - where each entry in the leaderboard represent's a Group's (not a Player's) score. Until now that is."),(0,n.kt)("p",null,"Now, when creating a leaderboard, you will first choose whether it is a\xa0",(0,n.kt)("strong",{parentName:"p"},"Player")," or a\xa0",(0,n.kt)("strong",{parentName:"p"},"Group")," Leaderboard.\xa0"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(76173).Z,width:"215",height:"84"})),(0,n.kt)("p",null,"Important notes regarding Group Leaderboards:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Any member of a group can post a score on behalf of their team"),(0,n.kt)("li",{parentName:"ul"},"Post group scores via the new ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/leaderboard/postscoretogroupleaderboard"},"PostScoreToGroupLeaderboard()")," method. Additional new calls are described in the API section (below)."),(0,n.kt)("li",{parentName:"ul"},"Group Leaderboards\xa0",(0,n.kt)("em",{parentName:"li"},"cannot"),"\xa0be used as the basis for Tournaments or Divisions")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note - we are considering adding Group Tournament and Division support in the future. If it is important to you, vote for it in our\xa0",(0,n.kt)("a",{parentName:"em",href:"https://getbraincloud.com/roadmap"},"Roadmap"),"!")),(0,n.kt)("h2",{id:"group-enhancements"},"Group Enhancements"),(0,n.kt)("p",null,"We have made a bunch of enhancements to Groups and the Group APIs to go along with the new leaderboard support:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Group Summary Data")," - we have added the concept of ",(0,n.kt)("em",{parentName:"li"},"summary data")," to groups. This is an additional bit of custom JSON, associated with your groups, that can be read by non-members. This is useful when ",(0,n.kt)("em",{parentName:"li"},"searching")," for groups with specific qualities and also when ",(0,n.kt)("em",{parentName:"li"},"viewing group leaderboards"),"\xa0\u2190 the summary data gets returned in the leaderboard calls"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Enhanced Searching")," - when searching for groups, you can now include additional fields (",(0,n.kt)("inlineCode",{parentName:"li"},"isOpenGroup"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"updateAt"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"createdAt"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"summaryData"),") in the filter and sorting clauses."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Get Random Groups")," - we have added a new API call for retrieving a random selection of groups that fit the specified criteria. See ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/group/getrandomgroupsmatching"},"GetRandomGroupsMatching()"),".")),(0,n.kt)("h2",{id:"voting-leaderboards"},"Voting Leaderboards"),(0,n.kt)("p",null,"Since we were already in the Leaderboard code, we thought we would cover another customer request."),(0,n.kt)("p",null,"Voting Leaderboards are special leaderboards where the user doesn't post their ",(0,n.kt)("em",{parentName:"p"},"own")," score - rather, a player increments the score of ",(0,n.kt)("em",{parentName:"p"},"another player"),".\xa0This makes the most sense for a\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"CUMULATIVE")," leaderboard (where posts from players increment a total).\xa0You can imagine using this system to allow players to vote on custom content created by other players - like custom maps layouts, etc."),(0,n.kt)("p",null,"Important notes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This technically isn't a new type of leaderboard - it's merely a new leaderboard call - ",(0,n.kt)("a",{parentName:"li",href:"/api/capi/leaderboard/postscoretoleaderboardonbehalfof"},"PostScoreToLeaderboardOnBehalfOf()"),". Note that this call be made from Cloud Code only."),(0,n.kt)("li",{parentName:"ul"},"The API does not prevent users from voting (i.e. posting on behalf of another user) multiple times. We leave that enforcement up to the app (if desired, of course).")),(0,n.kt)("h2",{id:"multi-region-support"},"Multi-Region Support"),(0,n.kt)("p",null,"In V4 we introduced\xa0the ability to host Relay and Room Servers. When configuring your servers, you had the ability to choose\xa0",(0,n.kt)("em",{parentName:"p"},"which")," region to host them in."),(0,n.kt)("p",null,"This was a good start, but for global coverage developers would need to create individual server configurations for each of the regions they want to support. And if they're using our matchmaking and lobby services, they would need to set up separate lobby configurations for each region as well."),(0,n.kt)("p",null,"Release 4.1 greatly improves things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can now select\xa0",(0,n.kt)("em",{parentName:"li"},"multiple regions")," for a\xa0",(0,n.kt)("em",{parentName:"li"},"Room or Relay Server")," configuration in\xa0",(0,n.kt)("strong",{parentName:"li"},"My Servers")),(0,n.kt)("li",{parentName:"ul"},"There are new\xa0",(0,n.kt)("strong",{parentName:"li"},"Client APIs")," that allow you to retrieve the\xa0",(0,n.kt)("em",{parentName:"li"},"list of regions")," associated with lobby type(s), and calculate the latency (i.e. ",(0,n.kt)("em",{parentName:"li"},"ping times)")," to them"),(0,n.kt)("li",{parentName:"ul"},"When launching a\xa0",(0,n.kt)("em",{parentName:"li"},"Room or Relay Server")," from a lobby, the\xa0",(0,n.kt)("strong",{parentName:"li"},"Lobby Service")," will now automatically choose the\xa0",(0,n.kt)("em",{parentName:"li"},"best region")," for the members of that lobby")),(0,n.kt)("h2",{id:"dynamic-chat-channels"},"Dynamic Chat Channels"),(0,n.kt)("p",null,"And last but not least, this release introduces a new type of chat channel."),(0,n.kt)("p",null,"Dynamic chat channels are special channels that any user can create and/or join. They exist only for as long as there is activity. Once the channel inactivity timeout expires (typically 30 days), the history (and the channel itself) are automatically deleted and cleaned up."),(0,n.kt)("p",null,'Note that developers need to manage the "membership" to the channels themselves. If a user of an app connects to a dynamic channel during a session, and you want them to reconnect the next time the app launches as well - you\'ll need to save that information somewhere in your app (likely in a user entity).'),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"portal-changes"},"Portal Changes"),(0,n.kt)("p",null,"We have made the following portal changes:"),(0,n.kt)("h2",{id:"design"},"Design"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Core App Info | Application IDs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Renamed "Facebook Secret" to "Facebook App Secret" to better clarify what it is'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Core App Info | Admin Tools"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added new options to the\xa0",(0,n.kt)("strong",{parentName:"li"},"Deployment")," section to prevent overwriting the\xa0",(0,n.kt)("strong",{parentName:"li"},"Lobbies")," and\xa0",(0,n.kt)("strong",{parentName:"li"},"MyServers")," page settings. This is important because you very likely want to configure different performance + availability settings for dev vs. prod environments"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cloud Code | My Servers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Enhanced the Room Server and Relay Server configuration screens to support multiple regions"),(0,n.kt)("li",{parentName:"ul"},"Note that each region can use the default configuration settings (server size, # containers, etc); or you can override those settings on a region-by-region basis"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboards | Leaderboard Configs"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When creating a new Leaderboard config, you can now choose between\xa0",(0,n.kt)("strong",{parentName:"li"},"Player")," and\xa0",(0,n.kt)("strong",{parentName:"li"},"Group")," entry types (default is Player)."),(0,n.kt)("li",{parentName:"ul"},"Once the entry type has been set, it cannot be changed"),(0,n.kt)("li",{parentName:"ul"},"Tournaments and Division Templates cannot be enabled for Group leaderboards"),(0,n.kt)("li",{parentName:"ul"},"The entry type has been added to the Leaderboard Config list screen as well")))),(0,n.kt)("h2",{id:"monitoring"},"Monitoring"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Global Monitoring | Leaderboards"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Have been enhanced to show the results of\xa0",(0,n.kt)("strong",{parentName:"li"},"Group Leaderboards")),(0,n.kt)("li",{parentName:"ul"},"The column displayed now automatically change depending upon the leaderboard type being displayed"),(0,n.kt)("li",{parentName:"ul"},"Clicking on a\xa0",(0,n.kt)("strong",{parentName:"li"},"group id")," will bring you to the group.")))),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DOCS")," menu",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added a link to the new\xa0",(0,n.kt)("a",{parentName:"li",href:"https://getbraincloud.com/roadmap"},"Roadmap")," site")))),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"api-changes"},"API Changes"),(0,n.kt)("p",null,"The following changes/additions have affected the\xa0brainCloud\xa0API:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Chat Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/api/capi/chat/syscreatechannel"},"SysCreateChannel()"))," can be used to create a new dynamic chat channel.\xa0Cloud code only."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/api/capi/chat/sysdeletechannel"},"SysDeleteChannel()"))," is used to delete the specified chat channel.\xa0Cloud code only."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Group Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!]"," CreateGroupWithSummaryData()")," allows the creation of a group with summary data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][GetRandomGroupsMatching()]","(/api/capi/group/getrandomgroupsmatching)"),"\xa0returns a list of random groups that match the supplied criteria"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][SysChangeGroupType()]","(/api/capi/group/syschangegrouptype)")," changes the group type of a group. Useful for leveling up the maximum number of players in a group.\xa0Cloud code only."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][UpdateGroupSummaryData()]","(/api/capi/group/updategroupsummarydata)"),'\xa0allows a member to update the summary data of the app. Note that the user must be the owner of the group; or the group\'s data ACL must be set to "member": 2 to perform the update.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Update]","\xa0ReadGroup(), GetMyGroups(), ListGroupsPage()"),", and\xa0",(0,n.kt)("strong",{parentName:"li"},"ListGroupsPageByOffset()")," will now return the ",(0,n.kt)("inlineCode",{parentName:"li"},"summaryData")," associated with groups"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Update]")," Additional fields (",(0,n.kt)("inlineCode",{parentName:"li"},"updatedAt"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"createdAt"),",\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"isOpenGroup"),", and\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"summaryData"),") can now be used as filter and sort criteria in group calls."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Leaderboard Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][GetGroupLeaderboardView()]","(/api/capi/leaderboard/getgroupleaderboardview)")," and\xa0",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/api/capi/leaderboard/getgroupleaderboardviewbyversion"},"GetGroupLeaderboardViewByVersion()")),"\xa0for retrieving the leaderboard results, relative to the specified group"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][PostScoreToGroupLeaderboard()]","(/api/capi/leaderboard/postscoretogroupleaderboard)"),"\xa0for posting scores to group leaderboards. Note that the user must be a member of the specified group."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][PostScoreToLeaderboardOnBehalfOf()]","(/api/capi/leaderboard/postscoretoleaderboardonbehalfof)")," for posting scores to a leaderboard on behalf of another player.\xa0Cloud code only."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][RemoveGroupScore()]","(/api/capi/leaderboard/removegroupscore)"),"\xa0for removing a group score."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Lobby Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][GetRegionsForLobbies()]","(/api/capi/lobby/getregionsforlobbies)")," retrieves a list of super-set of regions for the specified list of lobbies. Is used by the client app to determine with regions to ping test."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][PingRegions()]","(/api/capi/lobby/pingregions)")," tells the client to ping the retrieved set of regions. Should be called after GetRegionsForLobbies() has completed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][CreateLobbyWithPingData()]","(/api/capi/lobby/createlobbywithpingdata), ",(0,n.kt)("a",{parentName:"strong",href:"/api/capi/lobby/findlobbywithpingdata"},"FindLobbyWithPingData()"),", ",(0,n.kt)("a",{parentName:"strong",href:"/api/capi/lobby/findorcreatelobbywithpingdata"},"FindOrCreateLobbyWithPingData()"))," and\xa0",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/api/capi/lobby/joinlobbywithpingdata"},"JoinLobbyWithPingData()"))," are enhanced versions of the regular calls, with the obvious addition of ping data that the server will use to select the best region when launching a Room or Relay Server. Note that the library will automatically provide the ping data for those calls (there are no additional parameters)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][SysSendSignal()]","(/api/capi/lobby/syssendsignal)")," allows cloud code scripts to send signals to members of a lobby."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][SysDisbandLobby()]","(/api/capi/lobby/sysdisbandlobby)")," allows cloud code scripts to disband a lobby."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tournament Service"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[New!][PostTournamentScoreOnBehalfOf()]","(/api/capi/tournament/posttournamentscoreonbehalfof)"),"\xa0for posting scores to a leaderboard on behalf of another player.\xa0Cloud code only.")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note that we have also made a small change to ",(0,n.kt)("a",{parentName:"em",href:"/api/capi/leaderboard/getgloballeaderboardviewbyversion"},"GetGlobalLeaderboardViewByVersion()")," and ",(0,n.kt)("a",{parentName:"em",href:"/api/capi/leaderboard/getgloballeaderboardviewbyversion"},"GetGlobalLeaderboardPageByVersion()")," to allow you to once again pass in -1 as the version id. That")," ",(0,n.kt)("em",{parentName:"p"},"behaviour")," ",(0,n.kt)("em",{parentName:"p"},"had regressed in 4.0. Apologies for the inconvenience!")),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"miscellaneous-changes--fixes"},"Miscellaneous Changes / Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated libraries",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"All libraries have been updated for the 4.1 release! Go get 'em!"),(0,n.kt)("li",{parentName:"ul"},"The Unreal Library now includes beta-level support for our Relay Communications protocol!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Warning - there is a known issue with Unity 2019 on IOS devices that affects brainCloud (and really any app making web requests).")," ",(0,n.kt)("a",{parentName:"li",href:"/blog/2019/06/17/warning-unity-2019-x-ios-issues"},"More info here!")))),(0,n.kt)("li",{parentName:"ul"},"Documentation updates",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New Roadmap Site - check it out at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://getbraincloud.com/roadmap"},"https://getbraincloud.com/roadmap")),(0,n.kt)("li",{parentName:"ul"},"Significant updates to the S2S sections of the API Reference\xa0"),(0,n.kt)("li",{parentName:"ul"},"Docs updated with all 4.1 APIs"))),(0,n.kt)("li",{parentName:"ul"},"Important Fixes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BCLD-4714 Mismatch of Service and Operation on API Explorer after quick authenticate"),(0,n.kt)("li",{parentName:"ul"},'BCLD-4833 Importing an invalid script zip file and choosing "Full Sync" deletes all existing scripts'),(0,n.kt)("li",{parentName:"ul"},'BCLD-4832 Facebook transactions - some transactions are being displayed as "null"'),(0,n.kt)("li",{parentName:"ul"},"BCLD-4812 Need ability to preserve My Servers and Lobby configurations on Deploy and Import"),(0,n.kt)("li",{parentName:"ul"},"BCLD-3193 SendEvent operations gives a positive response without entering profileID"),(0,n.kt)("li",{parentName:"ul"},'BCLD-4751 Descriptive text on "Edit Lobby Type" popup is out-of-date'),(0,n.kt)("li",{parentName:"ul"},'BCLD-4737 Can\'t delete a group after using "Delete Users"'))),(0,n.kt)("li",{parentName:"ul"},"Plus miscellaneous fixes and performance enhancements...")))}d.isMDXComponent=!0},76173:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);