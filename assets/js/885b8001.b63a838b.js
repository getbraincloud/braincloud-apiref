"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[29951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(r),d=n,b=s["".concat(i,".").concat(d)]||s[d]||c[d]||o;return r?a.createElement(b,u(u({ref:t},m),{},{components:r})):a.createElement(b,u({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,u=new Array(o);u[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:n,u[1]=p;for(var l=2;l<o;l++)u[l]=r[l];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},u="CreateGroupWithSummaryData",p={unversionedId:"api/capi/group/creategroupwithsummarydata",id:"api/capi/group/creategroupwithsummarydata",title:"CreateGroupWithSummaryData",description:"Overview",source:"@site/docs/api/2_capi/group/creategroupwithsummarydata.md",sourceDirName:"api/2_capi/group",slug:"/api/capi/group/creategroupwithsummarydata",permalink:"/braincloud-apiref/api/capi/group/creategroupwithsummarydata",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/group/creategroupwithsummarydata.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"CreateGroupEntity",permalink:"/braincloud-apiref/api/capi/group/creategroupentity"},next:{title:"DeleteGroup",permalink:"/braincloud-apiref/api/capi/group/deletegroup"}},i={},l=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},s=m("PartialServop"),c=m("BrowserWindow"),d=m("Tabs"),b=m("TabItem"),g={toc:l};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creategroupwithsummarydata"},"CreateGroupWithSummaryData"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Create a group. Optional parameters: all except name and groupType."),(0,n.kt)(s,{service_name:"group",operation_name:"CREATE_GROUP",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(c,{mdxType:"BrowserWindow"},(0,n.kt)(d,{mdxType:"Tabs"},(0,n.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string name = "myGroupName";\nstring groupType = "myGroupType";\nbool isOpenGroup = true;\nstring acl = "{\\"member\\":2,\\"other\\":0}";\nstring ownerAttributes = "{}";\nstring defaultMemberAttributes = "{}";\nstring data = "{}";\nstring summaryData = "{}";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.groupService.CreateGroupWithSummaryData(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData, successCallback, failureCallback);\n'))),(0,n.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *name = "myGroupName";\nconst char *groupType = "myGroupType";\nbool isOpenGroup = true;\nconst char *acl = "{\\"member\\":2,\\"other\\":0}";\nconst char *ownerAttributes = "{}";\nconst char *defaultMemberAttributes = "{}";\nconst char *data = "{}";\nconst char *summaryData = "{}";\n_bc->getGroupService()->createGroupWithSummaryData(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData, this);\n'))),(0,n.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *name = @"myGroupName";\nNSString *groupType = @"myGroupType";\nbool isOpenGroup = true;\nNSString *acl = "{\\"member\\":2,\\"other\\":0}";\nNSString *ownerAttributes = "{}";\nNSString *defaultMemberAttributes = "{}";\nNSString *data = "{}";\nNSString *summaryData = "{}";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc groupService] createGroupWithSummaryData:name\n                  groupType:groupType\n                isOpenGroup:isOpenGroup\n                        acl:acl\n            ownerAttributes:ownerAttributes\n    defaultMemberAttributes:defaultMemberAttributes\n                       data:data\n                summaryData:summaryData\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String name = "myGroupName";\nString groupType = "myGroupType";\nboolean isOpenGroup = true;\nString acl = "{\\"member\\":2,\\"other\\":0}";\nString ownerAttributes = "{}";\nString defaultMemberAttributes = "{}";\nString data = "{}";\nString summaryData = "{}";\nthis; // implements IServerCallback\n\n_bc.getGroupService().createGroupWithSummaryData(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var name = "myGroupName";\nvar groupType = "myGroupType";\nvar isOpenGroup = true;\nvar acl = {\n  "member": 2,\n  "other": 0\n};\nvar ownerAttributes = {};\nvar defaultMemberAttributes = {};\nvar data = {};\nvar summaryData = {};\n\n_bc.groupService.createGroupWithSummaryData(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var name = "myGroupName";\nvar groupType = "myGroupType";\nvar isOpenGroup = true;\nvar acl = {\n  "member": 2,\n  "other": 0\n};\nvar ownerAttributes = {};\nvar defaultMemberAttributes = {};\nvar data = {};\nvar summaryData = {};\nvar groupProxy = bridge.getGroupServiceProxy();\n\nvar postResult = groupProxy.createGroup(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "group",\n    "operation": "CREATE_GROUP",\n    "data": {\n        "name": "myGroupName",\n        "groupType": "myGroupType",\n        "isOpenGroup": true,\n        "acl": {\n            "member": 2,\n            "other": 0\n        },\n        "ownerAttributes": {},\n        "defaultMemberAttributes": {},\n        "data": {},\n        "summaryData": {}\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "gameId": "12345",\n    "groupId": "b7b590e0-0e27-47ef-8bf5-03a3b4e34475",\n    "ownerId": "77ce8889-20b7-4d01-b248-e0beb747f1b4",\n    "name": "myGroupName",\n    "groupType": "myGroupType",\n    "createdAt": 1561472696504,\n    "updatedAt": 1561472696504,\n    "members": {\n      "77ce8889-20b7-4d01-b248-e0beb747f1b4": {\n        "role": "OWNER",\n        "attributes": {}\n      }\n    },\n    "pendingMembers": {},\n    "version": 1,\n    "summaryData": {},\n    "isOpenGroup": true,\n    "defaultMemberAttributes": {},\n    "memberCount": 1,\n    "invitedPendingMemberCount": 0,\n    "requestingPendingMemberCount": 0,\n    "acl": {\n      "member": 2,\n      "other": 0\n    }\n  },\n  "status": 200\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"A name for the group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupType"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isOpenGroup"),(0,n.kt)("td",{parentName:"tr",align:null},"true if group is open; false if closed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"acl"),(0,n.kt)("td",{parentName:"tr",align:null},"The group's access control list. A null ACL implies default.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ownerAttributes"),(0,n.kt)("td",{parentName:"tr",align:null},"Attributes for the group owner (current user.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"defaultMemberAttributes"),(0,n.kt)("td",{parentName:"tr",align:null},"Default attributes for group members.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"data"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom application data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"summaryData"),(0,n.kt)("td",{parentName:"tr",align:null},"Public summary data for the group that is viewable even by non-members.")))))}y.isMDXComponent=!0}}]);