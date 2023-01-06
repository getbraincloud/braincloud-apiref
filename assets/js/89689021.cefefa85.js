"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[42803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(g,p(p({ref:t},u),{},{components:a})):r.createElement(g,p({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={},p="SysReadGroupEntitiesPage",i={unversionedId:"api/capi/group/sysreadgroupentitiespage",id:"api/capi/group/sysreadgroupentitiespage",title:"SysReadGroupEntitiesPage",description:"Overview",source:"@site/docs/api/2_capi/group/sysreadgroupentitiespage.md",sourceDirName:"api/2_capi/group",slug:"/api/capi/group/sysreadgroupentitiespage",permalink:"/braincloud-apiref/api/capi/group/sysreadgroupentitiespage",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/group/sysreadgroupentitiespage.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1671809255,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SysReadGroupData",permalink:"/braincloud-apiref/api/capi/group/sysreadgroupdata"},next:{title:"SysReadGroupEntitiesPageByOffset",permalink:"/braincloud-apiref/api/capi/group/sysreadgroupentitiespagebyoffset"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=u("PartialServop"),d=u("BrowserWindow"),m=u("Tabs"),g=u("TabItem"),y={toc:s};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sysreadgroupentitiespage"},"SysReadGroupEntitiesPage"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Retrieve a page of group entity information based on the specified context, bypassing ownership/ACL checks."),(0,n.kt)(c,{service_name:"group",operation_name:"SYS_READ_GROUP_ENTITIES_PAGE",mdxType:"PartialServop"}),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)(d,{mdxType:"BrowserWindow"},(0,n.kt)(m,{mdxType:"Tabs"},(0,n.kt)(g,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(g,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(g,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(g,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(g,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Cloud Code only. To view example, switch to the Cloud Code tab\n"))),(0,n.kt)(g,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cfscript"},'var context = {\n    "pagination": {\n        "rowsPerPage": 50,\n        "pageNumber": 1\n    },\n    "searchCriteria": {\n        "groupId": "130745f4-df57-4162-8f90-d89214fc8512",\n        "entityType": "BLUE"\n    },\n    "sortCriteria": {\n        "createdAt": 1,\n        "updatedAt": -1\n    }\n};\nvar groupProxy = bridge.getGroupServiceProxy();\n\nvar postResult = groupProxy.sysReadGroupEntitiesPage(context);\nif (postResult.status == 200) {\n    // Success!\n}\n'))),(0,n.kt)(g,{value:"r",label:"Raw",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "group",\n    "operation": "SYS_READ_GROUP_ENTITIES_PAGE",\n    "data": {\n        "context": {\n            "pagination": {\n                "rowsPerPage": 50,\n                "pageNumber": 1\n            },\n            "searchCriteria": {\n                "groupId": "130745f4-df57-4162-8f90-d89214fc8512",\n                "entityType": "BLUE"\n            },\n            "sortCriteria": {\n                "createdAt": 1,\n                "updatedAt": -1\n            }\n        }\n    }\n}\n'))))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"JSON Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status": 200,\n    "data": {\n        "_serverTime": 1637946319239,\n        "results": {\n            "moreBefore": false,\n            "count": 3,\n            "items": [\n                {\n                    "gameId": "20595",\n                    "groupId": "fee55a37-5e86-43e8-942e-06bcbe1b701e",\n                    "entityId": "91cfece7-debb-4698-ba6b-cd2cb432458d",\n                    "ownerId": null,\n                    "entityType": "BLUE",\n                    "createdAt": 1462812680359,\n                    "updatedAt": 1462812680359,\n                    "version": 1,\n                    "data": {},\n                    "acl": {\n                        "member": 2,\n                        "other": 1\n                    }\n                }\n            ],\n            "page": 1,\n            "moreAfter": true\n        },\n        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJncm91cElkIjoiZmVlNTVhMzct"\n    }\n}\n'))),(0,n.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"context"),(0,n.kt)("td",{parentName:"tr",align:null},"The JSON context for the page request")))))}b.isMDXComponent=!0}}]);