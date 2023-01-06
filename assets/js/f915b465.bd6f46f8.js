"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[96220],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=n,g=s["".concat(i,".").concat(m)]||s[m]||d[m]||o;return t?a.createElement(g,p(p({ref:r},c),{},{components:t})):a.createElement(g,p({ref:r},c))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[s]="string"==typeof e?e:n,p[1]=l;for(var u=2;u<o;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},75361:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const o={},p="ReadGroup",l={unversionedId:"api/capi/group/readgroup",id:"api/capi/group/readgroup",title:"ReadGroup",description:"Overview",source:"@site/docs/api/2_capi/group/readgroup.md",sourceDirName:"api/2_capi/group",slug:"/api/capi/group/readgroup",permalink:"/braincloud-apiref/api/capi/group/readgroup",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/group/readgroup.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"ListGroupsWithMember",permalink:"/braincloud-apiref/api/capi/group/listgroupswithmember"},next:{title:"ReadGroupData",permalink:"/braincloud-apiref/api/capi/group/readgroupdata"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],c=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},s=c("PartialServop"),d=c("BrowserWindow"),m=c("Tabs"),g=c("TabItem"),b={toc:u};function v(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"readgroup"},"ReadGroup"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Retrieve information about the group."),(0,n.kt)(s,{service_name:"group",operation_name:"READ_GROUP",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(d,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string groupId = "a-group-id";\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("Success | {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.Group.ReadGroup(groupId, successCallback, failureCallback);\n'))),(0,n.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *groupId = "a-group-id";\n\n_bc->getGroup()->readGroup(groupId, this);\n'))),(0,n.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *groupId = @"a-group-id";\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc groupService] readGroup:groupId\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,n.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'String groupId = "a-group-id";\nthis; // implements IServerCallback\n\n_bc.getGroup().readGroup(groupId, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,n.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var groupId = "a-group-id";\n\n_bc.group.readGroup(groupId, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var groupId = "a-group-id";\nvar groupProxy = bridge.getGroupServiceProxy();\n\nvar postResult = groupProxy.readGroup(groupId);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "group",\n    "operation": "READ_GROUP",\n    "data": {\n        "groupId": "a-group-id"\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "gameId": "123456",\n        "groupId": "69191b48-0cb1-4538-9758-e2f5ef4c524b",\n        "ownerId": "b67b2d73-1e8c-42e9-9be5-9c1879a48555",\n        "name": "test22",\n        "groupType": "test",\n        "createdAt": 1462462308991,\n        "updatedAt": 1462462308991,\n        "members": {\n            "b67b2d73-1e8c-42e9-9be5-9c1879a48555": {\n                "role": "OWNER",\n                "attributes": {}\n            }\n        },\n        "pendingMembers": {},\n        "version": 1,\n        "data": {},\n        "isOpenGroup": false,\n        "defaultMemberAttributes": {},\n        "memberCount": 1,\n        "invitedPendingMemberCount": 0,\n        "requestingPendingMemberCount": 0,\n        "acl": {\n            "other": 1,\n            "member": 1\n        }\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupId"),(0,n.kt)("td",{parentName:"tr",align:null},"ID of the group")))))}v.isMDXComponent=!0}}]);