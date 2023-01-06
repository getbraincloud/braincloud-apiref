"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[61033],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(b,c(c({ref:n},p),{},{components:t})):a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[d]="string"==typeof e?e:r,c[1]=o;for(var s=2;s<l;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const l={},c="ChannelConnect",o={unversionedId:"api/capi/chat/channelconnect",id:"api/capi/chat/channelconnect",title:"ChannelConnect",description:"Overview",source:"@site/docs/api/2_capi/chat/channelconnect.md",sourceDirName:"api/2_capi/chat",slug:"/api/capi/chat/channelconnect",permalink:"/braincloud-apiref/api/capi/chat/channelconnect",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/api/2_capi/chat/channelconnect.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672193337,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Chat",permalink:"/braincloud-apiref/api/capi/chat/"},next:{title:"ChannelDisconnect",permalink:"/braincloud-apiref/api/capi/chat/channeldisconnect"}},i={},s=[{value:"Overview",id:"overview",level:2},{value:"Status Codes",id:"status-codes",level:3},{value:"Usage",id:"usage",level:2},{value:"Method Parameters",id:"method-parameters",level:2}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},d=p("PartialServop"),u=p("BrowserWindow"),m=p("Tabs"),b=p("TabItem"),g={toc:s};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"channelconnect"},"ChannelConnect"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Registers a handler for incoming events from the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"channelId"),". Also returns a list of that channel's recent messages (from history)."),(0,r.kt)("h3",{id:"status-codes"},"Status Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40346"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAT_INVALID_CHANNEL_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The channel id provided is invalid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40601"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT_NOT_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"RTT must be enabled for this feature")))),(0,r.kt)(d,{service_name:"chat",operation_name:"CHANNEL_CONNECT",mdxType:"PartialServop"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(u,{mdxType:"BrowserWindow"},(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(b,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'\n//Step 2:   Register a chat callback\nRTTCallback rttCallback = response =>\n{\n   Debug.Log(response);\n};\n_bc.RegisterRTTChatCallback(rttCallback);\n\n\n\nstring channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID\nint maxReturn = 25;\nSuccessCallback successCallback = (response, cbObject) =>\n{\n    Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);\n    Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];\n    Dictionary<string, object>[] messages = (Dictionary<string, object>[])jsonData["messages"];\n    string display = "";\n    var aMessage = JsonWriter.Serialize(jsonData["messages"]);\n    if (aMessage.Length > 10)\n    {\n        Dictionary<string, object>[] messages = (Dictionary<string, object>[])jsonData["messages"];\n        foreach (Dictionary<string, object> message in messages)\n        {\n            foreach (KeyValuePair<string, object> item in message)\n            {\n                display += item.Key + " : " + JsonWriter.Serialize(item.Value) + "\\r\\n";\n            }\n        }\n    }\n    else\n    {\n        display = "empty chat messages...";\n    }\n    Debug.Log(display);\n};\nFailureCallback failureCallback = (status, code, error, cbObject) =>\n{\n    Debug.Log(string.Format("[ChannelConnect Failed] {0}  {1}  {2}", status, code, error));\n};\n\n_bc.ChatService.ChannelConnect(channelId, maxReturn, successCallback, failureCallback);\n'))),(0,r.kt)(b,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'const char *channelId = "55555:gl:bcDev";\nint maxReturn = 25;\n_bc->getChatService()->channelConnect(channelId, maxReturn, this);\n'))),(0,r.kt)(b,{value:"objectivec",label:"Objective-C",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'NSString *channelId = @"55555:gl:bcDev";\nint maxReturn = 25;\nBCCompletionBlock successBlock;      // define callback\nBCErrorCompletionBlock failureBlock; // define callback\n\n[[_bc chatService] channelConnect:channelId\n                  maxReturn:maxReturn\n            completionBlock:successBlock\n       errorCompletionBlock:failureBlock\n                   cbObject:nil];\n'))),(0,r.kt)(b,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String channelId = "22817:gl:CHAT_TRADE"; // APP_ID:CHANNEL_TYPE:CHANNEL_ID\nint maxReturn = 25;\nthis; // implements IServerCallback\n\n_bc.getChatService().channelConnect(channelId, maxReturn, this);\n\npublic void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)\n{\n    System.out.print(String.format("Success | %s", jsonData.toString()));\n}\npublic void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)\n{\n    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));\n}\n'))),(0,r.kt)(b,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var channelId = "55555:gl:bcDev";\nvar maxReturn = 25;\n\n_bc.chat.channelConnect(channelId, maxReturn, result =>\n{\n    var status = result.status;\n    console.log(status + " : " + JSON.stringify(result, null, 2));\n});\n'))),(0,r.kt)(b,{value:"cfs",label:"Cloud Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfscript"},"var chatProxy = bridge.getChatServiceProxy();\n\nvar idResult = chatProxy.getChannelId( 'gl', 'bitChat' );\nif ( idResult.status == 200 ) {\n     \n    var channelId = idResult.data.channelId;\n\n    connectResult = chatProxy.channelConnect(channelId, 25);\n} \n"))),(0,r.kt)(b,{value:"r",label:"Raw",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'{\n    "service": "chat",\n    "operation": "CHANNEL_CONNECT",\n    "data": {\n        "channelId": "55555:gl:bcDev",\n        "maxReturn": 25\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "messages": [{\n            "date": 1530649082684,\n            "ver": 1,\n            "msgId": "783692330334210",\n            "from": {\n                "id": "a7b7de02-8432-4547-8c40-9af94537fce0",\n                "name": "RedBomber",\n                "pic": null\n            },\n            "chId": "22817:gl:CHAT_TRADE",\n            "content": {\n                "text": "Looking to sell a couch for 105 gold coins.",\n                "rich": {\n                    "SELL_ITEM": {\n                        "ITEM_TYPE": "COUCH",\n                        "ITEM_ID": "d05a5b9d-374e-41e2-a498-c7387bf15c76",\n                        "PRICE": "105",\n                        "CURRENCY": "GOLDCOINS"\n                    }\n                }\n            }\n        }, \n        {\n            "date": 1530650080029,\n            "ver": 1,\n            "msgId": "783692840974851",\n            "from": {\n                "id": "805cc012-0bf1-40a0-9716-b896d8f4c424",\n                "name": "Chantel",\n                "pic": null\n            },\n            "chId": "22817:gl:CHAT_TRADE",\n            "content": {\n                "text": "For that couch, how about 25 gems instead?"\n            }\n        }, \n        {\n            "date": 1530650218944,\n            "ver": 1,\n            "msgId": "783692912099332",\n            "from": {\n                "id": "a7b7de02-8432-4547-8c40-9af94537fce0",\n                "name": "RedBomber",\n                "pic": null\n            },\n            "chId": "22817:gl:CHAT_TRADE",\n            "content": {\n                "text": "Sold!"\n            }\n        }]\n    },\n    "status": 200\n}\n'))),(0,r.kt)("h2",{id:"method-parameters"},"Method Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelId"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the channel to connect to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxReturn"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of recent messages to return from history.")))))}h.isMDXComponent=!0}}]);