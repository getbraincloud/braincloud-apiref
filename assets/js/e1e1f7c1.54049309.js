"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[21378],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>b});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=n,b=s["".concat(i,".").concat(m)]||s[m]||c[m]||o;return t?a.createElement(b,l(l({ref:r},d),{},{components:t})):a.createElement(b,l({ref:r},d))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50423:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const o={},l="AddGroupMember",p={unversionedId:"api/capi/group/addgroupmember",id:"api/capi/group/addgroupmember",title:"AddGroupMember",description:"Overview",source:"@site/docs/api/2_capi/group/addgroupmember.md",sourceDirName:"api/2_capi/group",slug:"/api/capi/group/addgroupmember",permalink:"/braincloud-apiref/api/capi/group/addgroupmember",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/group/addgroupmember.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671831235,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"AcceptGroupInvitation",permalink:"/braincloud-apiref/api/capi/group/acceptgroupinvitation"},next:{title:"ApproveGroupJoinRequest",permalink:"/braincloud-apiref/api/capi/group/approvegroupjoinrequest"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",r)},s=d("PartialServop"),c=d("BrowserWindow"),m=d("Tabs"),b=d("TabItem"),g={toc:u};function f(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"addgroupmember"},"AddGroupMember"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Add a member to the group. Optional parameters: jsonAttributes."),(0,n.kt)(s,{service_name:"group",operation_name:"ADD_MEMBER_TO_GROUP",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(c,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'string groupId = <%= data.example.groupId %>;\nstring profileId = <%= data.example.profileId %>;\nBrainCloudGroup.Role role = BrainCloudGroup.Role.MEMBER;\nstring jsonAttributes = <%= data.example.jsonAttributes %>;\n\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Debug.Log(string.Format("[AddGroupMember Success] {0}", response));\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));\n};\n\n_bc.GroupService.AddGroupMember(\n    groupId,\n    profileId,\n    role,\n    jsonAttributes,\n    successCallback,\n    failureCallback);\n'))),(0,n.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"const char* groupId = <%= data.example.groupId %>;\nconst char* profileId = <%= data.example.profileId %>;\neGroupMember::Role role = eGroupMember::MEMBER;\nstd::string jsonAttributes = <%= data.example.jsonAttributes %>;\n\nBrainCloudClient->getGroupService()->addGroupMember(groupId, profileId, role, jsonAttributes, this);\n"))),(0,n.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"NSString * groupId = @<%= data.example.groupId %>;\nNSString * profileId = @<%= data.example.profileId %>;\nGroupMemberRole role = MEMBER;\nNSString * jsonAttributes = @<%= data.example.jsonAttributes %>;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc groupService]\n         addGroupMember:groupId\n              profileId:profileId\n                   role:role\n         jsonAttributes:jsonAttributes\n        completionBlock:successBlock\n  errorCompletionBlock:failureBlock\n                  cbObject:nil];\n"))),(0,n.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"String groupId = <%= data.example.groupId %>;\nString profileId = <%= data.example.profileId %>;\nGroupService.Role role = GroupService.Role.MEMBER;\nString jsonAttributes = <%= data.example.jsonAttributes %>;\n<%= data.example.implementCallback %>\n\n_bc.getGroupService().addGroupMember(groupId, profileId, role, jsonAttributes, this);\n"))),(0,n.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var groupId = <%= data.example.groupId %>;\nvar profileId = <%= data.example.profileId %>;\nvar role = "MEMBER";\nvar jsonAttributes = <%= data.example.jsonAttributes_js %>;\n\n_bc.group.addGroupMember(groupId, profileId, role, attributes, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,n.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var groupId = <%= data.example.groupId %>;\nvar profileId = <%= data.example.profileId %>;\nvar role = "MEMBER";\nvar jsonAttributes = <%= data.example.jsonAttributes_js %>;\n\nvar groupProxy = bridge.getGroupServiceProxy();\nvar retVal = groupProxy.addGroupMember(groupId, profileId, role, jsonAttributes);\n'))),(0,n.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n  "groupId": "a-group-id",\n  "profileId": "a-profile-id",\n  "role": "MEMBER",\n  "attributes": {}\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": null\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"groupId"),(0,n.kt)("td",{parentName:"tr",align:null},"ID of the group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"profileId"),(0,n.kt)("td",{parentName:"tr",align:null},"Profile ID of the member being added")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"role"),(0,n.kt)("td",{parentName:"tr",align:null},"Role of the member being added")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jsonAttributes"),(0,n.kt)("td",{parentName:"tr",align:null},"Attributes of the member being added")))))}f.isMDXComponent=!0}}]);