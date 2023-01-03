"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[33909],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},96151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={title:"Getting Started with Cocos2d-x",date:"2014-11-28"},l=void 0,o={unversionedId:"learn/sdk-tutorials/cocos2d-x-tutorials/cocos-2dx-example-1-getting-started/index",id:"learn/sdk-tutorials/cocos2d-x-tutorials/cocos-2dx-example-1-getting-started/index",title:"Getting Started with Cocos2d-x",description:"This tutorial\xa0will get you started with integrating the brainCloud library in your Cocos2d-x game. We've included an example project that runs through some basic brainCloud operations. Please excuse the lackluster UI.",source:"@site/docs/learn/6_sdk-tutorials/cocos2d-x-tutorials/cocos-2dx-example-1-getting-started/index.md",sourceDirName:"learn/6_sdk-tutorials/cocos2d-x-tutorials/cocos-2dx-example-1-getting-started",slug:"/learn/sdk-tutorials/cocos2d-x-tutorials/cocos-2dx-example-1-getting-started/",permalink:"/braincloud-apiref/learn/sdk-tutorials/cocos2d-x-tutorials/cocos-2dx-example-1-getting-started/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/6_sdk-tutorials/cocos2d-x-tutorials/cocos-2dx-example-1-getting-started/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672679892,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"Getting Started with Cocos2d-x",date:"2014-11-28"},sidebar:"learnSidebar",previous:{title:"Cocos2d-x Tutorials",permalink:"/braincloud-apiref/learn/sdk-tutorials/cocos2d-x-tutorials/"},next:{title:"Facebook Authentication",permalink:"/braincloud-apiref/learn/sdk-tutorials/cocos2d-x-tutorials/facebook-authentication/"}},s={},d=[{value:"Assumptions",id:"assumptions",level:2},{value:"Download the Example Project",id:"download-the-example-project",level:2},{value:"Create\xa0initial Cocos2d-x project",id:"createinitial-cocos2d-x-project",level:2},{value:"Download the latest brainCloud libraries",id:"download-the-latest-braincloud-libraries",level:2},{value:"Project Configuration",id:"project-configuration",level:2},{value:"iOS",id:"ios",level:3},{value:"Add brainCloud library to the project",id:"add-braincloud-library-to-the-project",level:4},{value:"Build Settings",id:"build-settings",level:4},{value:"Build Phases",id:"build-phases",level:4},{value:"Android",id:"android",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Quickstart guide to running the example Android project",id:"quickstart-guide-to-running-the-example-android-project",level:3},{value:"Setting up your own Android project",id:"setting-up-your-own-android-project",level:3},{value:"Optional - \xa0if you&#39;re creating a project from scratch you will probably need to do the following extra steps:",id:"optional---if-youre-creating-a-project-from-scratch-you-will-probably-need-to-do-the-following-extra-steps",level:4},{value:"Windows 8.1 (TBD)",id:"windows-81-tbd",level:4},{value:"Windows Phone (TBD)",id:"windows-phone-tbd",level:4},{value:"Windows 32 (TBD)",id:"windows-32-tbd",level:4},{value:"Initialize brainCloud",id:"initialize-braincloud",level:2},{value:"Hook up the Callback",id:"hook-up-the-callback",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Universal Authenticate",id:"universal-authenticate",level:3},{value:"Handling Callbacks (IServerCallback)",id:"handling-callbacks-iservercallback",level:3},{value:"Player Statistics",id:"player-statistics",level:2},{value:"Add Statistics to the brainCloud Portal",id:"add-statistics-to-the-braincloud-portal",level:3},{value:"Incrementing Player Statistics",id:"incrementing-player-statistics",level:3},{value:"Retrieving Player Statistics",id:"retrieving-player-statistics",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial\xa0will get you started with integrating the brainCloud library in your Cocos2d-x game. We've included an example project that runs through some basic brainCloud operations. Please excuse the lackluster UI."),(0,i.kt)("p",null,"The example project has been tested using the iOS simulator and device\xa0(32 and 64-bit architectures) as well as the Android simulator and device (using a mac build environment). The rest of the platforms (windows etc) haven't been tested at all so likely they will fail to compile and/or run. We will be updating the example project soon to provide support for these\xa0additional platforms."),(0,i.kt)("h2",{id:"assumptions"},"Assumptions"),(0,i.kt)("p",null,"Before starting you should make sure you've done the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Created a brainCloud Portal account"),(0,i.kt)("li",{parentName:"ul"},"Created a game in the brainCloud Portal. If you need help with this step refer to the Unity tutorial #1 video.")),(0,i.kt)("p",null,"Onwards!"),(0,i.kt)("h2",{id:"download-the-example-project"},"Download the Example Project"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://d28b58vufdqdih.cloudfront.net/brainCloudExamples/cpp/brainCloudExample_Cocos2dx_0.11.3_165242.zip"},"Download the example")),(0,i.kt)("p",null,"Version History"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0.11.3 - Updated to latest 2.14 brainCloud library"),(0,i.kt)("li",{parentName:"ul"},"0.11.2 - Minor update"),(0,i.kt)("li",{parentName:"ul"},"0.11.1 - Added support for Android"),(0,i.kt)("li",{parentName:"ul"},"0.10.1 - Integrated Cocos2d-x 3.3 and added Facebook authentication support"),(0,i.kt)("li",{parentName:"ul"},"0.9.2 - Integrated Cocos2d-x 3.3 rc1 which fixed 32-bit targets failing to link."),(0,i.kt)("li",{parentName:"ul"},"0.9.1 - Fixed hardcoded library path"),(0,i.kt)("li",{parentName:"ul"},"0.9.0 - Initial Release")),(0,i.kt)("h2",{id:"createinitial-cocos2d-x-project"},"Create\xa0initial Cocos2d-x project"),(0,i.kt)("p",null,'If you haven\'t already created your basic game folder structure, follow the Cocos2d-x steps to do so. See the "How To Start A New Game" section here:'),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cocos2d/cocos2d-x"},"https://github.com/cocos2d/cocos2d-x")),(0,i.kt)("p",null,'In our examples below we will assume our game is called "MyGame".'),(0,i.kt)("h2",{id:"download-the-latest-braincloud-libraries"},"Download the latest brainCloud libraries"),(0,i.kt)("p",null,"Log into the brainCloud portal and grab the latest brainCloud client libraries. When you first log in you will see a link to the client libraries in the left hand nav bar. Click this link and grab the appropriate library for your development platform."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(93608).Z},(0,i.kt)("img",{alt:"brainCloud_Dashboard_Project_Cyber",src:a(57625).Z,width:"256",height:"442"}))),(0,i.kt)("p",null,"Note that if you are already logged into the portal you can return to the Home page/Administration area by clicking the gear icon in the upper right."),(0,i.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,i.kt)("h3",{id:""}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1423795127_16-apple-64",src:a(92584).Z,width:"64",height:"64"})),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("h4",{id:"add-braincloud-library-to-the-project"},"Add brainCloud library to the project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open the XCode project in ",(0,i.kt)("em",{parentName:"p"},"proj.ios_mac/MyGame.xcodeproj"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Because I'm paranoid I hit run just to make sure the project Cocos2d-x generated actually compiles and runs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unzip the brainCloud libraries into a platform specific folder in your game project. I ended up creating a path that looks like this:_MyGame/libs/ios/brainCloud._Underneath this folder would be include, libs, src and thirdparty.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Add the brainCloud folder to the project by right clicking on the project and select "Add Files to MyGame..."'),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{target:"_blank",href:a(36342).Z},(0,i.kt)("img",{alt:"Fullscreen_2014-12-02__9_02_AM",src:a(98321).Z,width:"295",height:"233"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Point to the libs folder you just created and make sure the "Create Groups" option is selected. You should now see a folder structure like the image below:'),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{target:"_blank",href:a(8928).Z},(0,i.kt)("img",{alt:"MyGame_xcodeproj",src:a(10650).Z,width:"224",height:"225"}))))),(0,i.kt)("h4",{id:"build-settings"},"Build Settings"),(0,i.kt)("p",null,"In order to compile we need to set up a few include and link paths. Open up build settings and execute the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'In "Header Search Paths", add the following include:',(0,i.kt)("strong",{parentName:"li"},"$(SRCROOT)/../libs/ios/brainCloud/thirdparty/jsoncpp-1.0.0"),"  ",(0,i.kt)("a",{target:"_blank",href:a(21446).Z},(0,i.kt)("img",{alt:"MyGame_xcodeproj 2",src:a(91343).Z,width:"478",height:"238"})))),(0,i.kt)("h4",{id:"build-phases"},"Build Phases"),(0,i.kt)("p",null,'Execute the following steps under the "Build Phases" menu:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Under "Link Binary With Libraries" add the following Frameworks:',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"GameKit.framework"),(0,i.kt)("li",{parentName:"ul"},"Security.framework")))),(0,i.kt)("p",null,"Your iOS project is now setup!"),(0,i.kt)("h2",{id:"-1"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1423795117_android-64",src:a(59425).Z,width:"64",height:"64"})),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Android Studio (the important part is the ",(0,i.kt)("a",{parentName:"li",href:"http://developer.android.com/tools/help/sdk-manager.html"},"SDK manager"),")"),(0,i.kt)("li",{parentName:"ul"},"Install the Android SDK using the SDK Manager. I used 4.0 aka android-14"),(0,i.kt)("li",{parentName:"ul"},"Install\xa0the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/tools/sdk/ndk/index.html"},"Android NDK")," - I used r10d"),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://eclipse.org/"},"Eclipse")),(0,i.kt)("li",{parentName:"ul"},"Install the Eclipse ",(0,i.kt)("a",{parentName:"li",href:"http://developer.android.com/tools/sdk/eclipse-adt.html"},"ADT Plugin")),(0,i.kt)("li",{parentName:"ul"},"Set your NDK path in Eclipse properties")),(0,i.kt)("h3",{id:"quickstart-guide-to-running-the-example-android-project"},"Quickstart guide to running the example Android project"),(0,i.kt)("p",null,"The example project needs a few extra steps before you can run it properly. Namely you will need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Open Eclipse and import the project using the "Existing Projects into Workspace" option.'),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{target:"_blank",href:a(77063).Z},(0,i.kt)("img",{alt:"Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace",src:a(52854).Z,width:"493",height:"278"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Select the "brainCloudExample/proj.android" folder'),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{target:"_blank",href:a(79866).Z},(0,i.kt)("img",{alt:"Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace 2",src:a(22020).Z,width:"492",height:"296"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Once the project is imported, right click on the project and select properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the Android section, select the appropriate Build Target. I'm using Google API 4.0"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{target:"_blank",href:a(76886).Z},(0,i.kt)("img",{alt:"Properties_for_brainCloudExample",src:a(31223).Z,width:"781",height:"252"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Next, go to C/C++ Build | Environment. Add a new environment variable "NDK_ROOT" and point it to your NDK folder. Make sure to check "Add to all configurations".'),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("a",{target:"_blank",href:a(9739).Z},(0,i.kt)("img",{alt:"New_variable_and_Properties_for_brainCloudExample",src:a(73537).Z,width:"633",height:"163"}))))),(0,i.kt)("p",null,'You should now be setup to build the example project. To test things out, try setting the active build target to debug and doing a "Debug As | Android Native Application"'),(0,i.kt)("h3",{id:"setting-up-your-own-android-project"},"Setting up your own Android project"),(0,i.kt)("p",null,"After creating the cocos2d-x project skeleton, you can add brainCloud to your project by doing the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unzip the Android library into a libs folder. I chose to put them in a top level folder (same level as the Classes directory). My folder structure looks like the following:","  ",(0,i.kt)("a",{target:"_blank",href:a(37540).Z},(0,i.kt)("img",{alt:"libs",src:a(18222).Z,width:"750",height:"213"})))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the static library modules to your jni/Android.mk file. Note these should be before your main project definition (ie before the CLEAR_VARS)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"include $(CLEAR_VARS)\nLOCAL_MODULE := braincloud\nLOCAL_SRC_FILES := ../../libs/android/brainCloud/libs/$(TARGET_ARCH_ABI)/libbraincloud.a\ninclude $(PREBUILT_STATIC_LIBRARY)\n\ninclude $(CLEAR_VARS)\nLOCAL_MODULE := curl\nLOCAL_SRC_FILES := ../../cocos2d/external/curl/prebuilt/android/$(TARGET_ARCH_ABI)/libcurl.a\ninclude $(PREBUILT_STATIC_LIBRARY)\n\ninclude $(CLEAR_VARS)\nLOCAL_MODULE := crypto\nLOCAL_SRC_FILES := ../../cocos2d/external/curl/prebuilt/android/$(TARGET_ARCH_ABI)/libcrypto.a\ninclude $(PREBUILT_STATIC_LIBRARY)\n\ninclude $(CLEAR_VARS)\nLOCAL_MODULE := ssl\nLOCAL_SRC_FILES := ../../cocos2d/external/curl/prebuilt/android/$(TARGET_ARCH_ABI)/libssl.a\ninclude $(PREBUILT_STATIC_LIBRARY)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the includes to\xa0jni/Android.mk:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"LOCAL_C_INCLUDES += $(LOCAL_PATH)/../../libs/android/brainCloud/include\nLOCAL_C_INCLUDES += $(LOCAL_PATH)/../../libs/android/brainCloud/src\nLOCAL_C_INCLUDES += $(LOCAL_PATH)/../../libs/android/brainCloud/thirdparty/jsoncpp-1.0.0\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the source files to jni/Android.mk:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'define all-cpp-files-under\n$(patsubst ./%,%, \\\n  $(shell cd $(LOCAL_PATH) ; \\\n    find $(1) -name "*.cpp" -and -not -name ".*") \\\n )\nendef\n\ndefine all-subdir-braincloud-cpp-files\n$(call all-cpp-files-under,../../libs/android/brainCloud/src)\nendef\n\ndefine all-subdir-json-cpp-files\n$(call all-cpp-files-under,../../libs/android/brainCloud/thirdparty/jsoncpp-1.0.0)\nendef\n\nLOCAL_SRC_FILES += $(call all-subdir-braincloud-cpp-files)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the static library and c++ exception rule to jni/Android.mk:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"LOCAL_STATIC_LIBRARIES := cocos2dx_static braincloud curl crypto ssl\n\nLOCAL_CPP_FEATURES += exceptions\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the AndroidBridge.java file from the brainCloud javasrc directory into your project's java source code directory"),(0,i.kt)("li",{parentName:"ul"},"In the AppActivity.java file of your cocos project, add a call to AndroidBridge.initializeLocale(). We override the init method to accomplish this:  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n@Override\npublic void init() \n{\n    super.init();   \n    AndroidBridge.initializeLocale();\n}\n")),(0,i.kt)("h4",{id:"optional---if-youre-creating-a-project-from-scratch-you-will-probably-need-to-do-the-following-extra-steps"},"Optional - \xa0if you're creating a project from scratch you will probably need to do the following extra steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add the NDK_ROOT variable to your Project properties (C/C++ Build | Environment)"),(0,i.kt)("li",{parentName:"ul"},"Add the minimum Android SDK variable to your AndroidManifest.xml file (we used 14 in the example project)"),(0,i.kt)("li",{parentName:"ul"},"Add the minimum Android SDK to your Application.mk (APP_PLATFORM := android-14)"),(0,i.kt)("li",{parentName:"ul"},"Set the minimum Android SDK in your Project properties (Android | Project Build Target)"),(0,i.kt)("li",{parentName:"ul"},"Add the ABI to your Application.mk (APP_ABI := x86 armeabi)")),(0,i.kt)("h4",{id:"windows-81-tbd"},"Windows 8.1 (TBD)"),(0,i.kt)("h4",{id:"windows-phone-tbd"},"Windows Phone (TBD)"),(0,i.kt)("h4",{id:"windows-32-tbd"},"Windows 32 (TBD)"),(0,i.kt)("h2",{id:"initialize-braincloud"},"Initialize brainCloud"),(0,i.kt)("p",null,'Now that you have your project setup, you will need to initialize the brainCloud client with your game id/secret and a few other items. For this we\'ll use the included "BrainCloudWrapper" class (in the src directory of the brainCloud client).'),(0,i.kt)("p",null,"There are a number of places where this can be done. We're going to use the AppDelegate class but you're welcome to put this initialization code wherever makes the most sense for your project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open AppDelegate.cpp"),(0,i.kt)("li",{parentName:"ul"},"Add an include for BrainCloudWrapper to the top of the file:  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'\n#include "BrainCloudWrapper.h"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initialize BrainCloudWrapper with the appropriate parameters.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const char * url = "https://sharedprod.braincloudservers.com/dispatcher"; \nconst char * secretKey = "7014fb94-41e6-49cd-9a77-e50233d40133"; \nconst char * gameId = "10068"; \nconst char * gameVersion = "2.0"; \nconst char * companyName = "bitHeads"; \nconst char * gameName = "cocosExample"; \n\nBrainCloudWrapper::getInstance()->initialize(url, secretKey, gameId, gameVersion, companyName, gameName);\n')),(0,i.kt)("p",null,"You will want to substitute the correct parameters for your game.\xa0The secretKey and gameId need to correspond to the values for your game in the portal (see the Unity Tutorial #1 video for more details)."),(0,i.kt)("p",null,"The gameVersion, companyName, and gameName are up to you."),(0,i.kt)("h3",{id:"hook-up-the-callback"},"Hook up the Callback"),(0,i.kt)("p",null,'The next step is to ensure that the BrainCloudWrapper update method is being called\xa0regularly. This method is what triggers the brainCloud callback methods to execute (and sends/reads from the network pipe). In the cocos 2d-x example, you\'ll notice that the "MainScene" class includes an "update(float)" method which calls the BrainCloudWrapper update method:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"void MainScene::update(float dt)\n{\n    BrainCloudWrapper::getInstance()->update(dt);\n}\n")),(0,i.kt)("p",null,"MainScene kicks off the update method using this code in the init function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Director::getInstance()->getScheduler()->schedule(schedule_selector(MainScene::update), this, 0.1f, false);\n")),(0,i.kt)("p",null,"So in the example, there is nothing to add. However it is important to note that when implementing brainCloud for your game you will have to ensure the BrainCloudWrapper update method is being called regularly."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Now that the\xa0brainCloud client library is initialized and the callback routine is hooked up, you can begin authentication with the server. There are various authentication methods available but for this simple example, we will use Universal authentication. This allows us to specify a username and password and automatically have the account created if it doesn't already exist."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/capi/authentication",title:"BrainCloudAuthentication"},"See more details on Authentication here")),(0,i.kt)("p",null,'In our example project, you can navigate to "ConnectUniversalLayer.h/cpp" to follow along.'),(0,i.kt)("h3",{id:"universal-authenticate"},"Universal Authenticate"),(0,i.kt)("p",null,"In order to authenticate we use the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// grab the username and password from the cocos edit box\nconst char * user = m_usernameDisplay->getEditBox()->getText();\nconst char * pwd = m_pwdDisplay->getEditBox()->getText();\n\n// and the call authenticate passing in this pointer as the callback object\nBrainCloudWrapper::getInstance()->authenticateUniversal(user, pwd, this);\n")),(0,i.kt)("p",null,"Note that we pass in a this variable as our callback handler. The callback interface is defined in BrainCloud::IServerCallback"),(0,i.kt)("h3",{id:"handling-callbacks-iservercallback"},"Handling Callbacks (IServerCallback)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"IServerCallback\xa0is the interface\xa0used for all requests to the server. You'll notice there are three methods to implement (see IServerCallback.h in the brainCloud include directory):\n\nvirtual void serverCallback( ServiceName serviceName, ServiceOperation serviceOperation, std::string const & jsonData) = 0;\n\nvirtual void serverError( ServiceName serviceName, ServiceOperation serviceOperation, int returnCode, const std::string & jsonData) = 0;\n\nvirtual void serverWarning( ServiceName serviceName, ServiceOperation serviceOperation, int returnCode, int numRetries, const std::string & jsonData) = 0;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"serverCallback")," is called when a request is processed successfully. ",(0,i.kt)("strong",{parentName:"p"},"serverError")," is called when an error occurs, and ",(0,i.kt)("strong",{parentName:"p"},"serverWarning")," is called primarily when requests are retried due to a timeout (you can safely ignore this one)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ServiceName")," defines the server-side service that was invoked"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ServiceOperation")," defines the server-side operation that was invoked"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ServiceName")," and ",(0,i.kt)("strong",{parentName:"p"},"ServiceOperation")," come into significance when you have a single callback handler for multiple operations. You'll notice in the brainCloud method documentation (and in the brainCloud apidocs website) that all methods describe their ",(0,i.kt)("strong",{parentName:"p"},"ServiceName")," and ",(0,i.kt)("strong",{parentName:"p"},"ServiceOperation"),"."),(0,i.kt)("p",null,"So in order to implement the handler we do the following in our ConnectUniversalLayer class:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement the public interface")),(0,i.kt)("p",null,"class ConnectUniversalLayer : public Layer, public BrainCloud::IServerCallback"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement the success callback")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'void ConnectUniversalLayer::serverCallback( BrainCloud::ServiceName serviceName, BrainCloud::ServiceOperation serviceOperation, std::string const & jsonData)\n{\n    if (serviceName == BrainCloud::ServiceName::AuthenticateV2 && serviceOperation == BrainCloud::ServiceOperation::Authenticate)\n    {\n        m_logBox->addText("Authenticate was successful!");\n        if (m_mainScene != NULL)\n        {\n            // add short delay before switching scenes\n            Action *sequence = Sequence::createWithTwoActions(DelayTime::create(0.7f), CallFunc::create( CC_CALLBACK_0(MainScene::switchToMainLayer, m_mainScene)));\n            runAction(sequence);\n        }\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement the failure and warning callbacks")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'void ConnectUniversalLayer::serverError( BrainCloud::ServiceName serviceName, BrainCloud::ServiceOperation serviceOperation, int returnCode, const std::string & jsonData)\n{\n    __String* errorString = String::createWithFormat("Server Error: %d  %s", returnCode, jsonData.c_str());\n    m_logBox->addText(errorString->getCString());\n}\n\nvoid ConnectUniversalLayer::serverWarning( BrainCloud::ServiceName serviceName, BrainCloud::ServiceOperation serviceOperation, int returnCode, int numRetries, const std::string & jsonData)\n{\n    __String* warningString = String::createWithFormat("Server Warning: %d  %s  attempt %d", returnCode, jsonData.c_str(), numRetries);\n    m_logBox->addText(warningString->getCString());\n}\n')),(0,i.kt)("h2",{id:"player-statistics"},"Player Statistics"),(0,i.kt)("p",null,"brainCloud allows you to store statistics for a player. Below we show you how to set this up."),(0,i.kt)("h3",{id:"add-statistics-to-the-braincloud-portal"},"Add Statistics to the brainCloud Portal"),(0,i.kt)("p",null,"The first step is to add your player statistics to your game in the brainCloud Portal. Navigate to the Player Statistics section"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(21309).Z},(0,i.kt)("img",{alt:"brainCloud_Dashboard_-_Simple_Example",src:a(14569).Z,width:"247",height:"434"}))),(0,i.kt)("p",null,"Click the + icon on the right hand of the screen to add a Player Statistic"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(43484).Z},(0,i.kt)("img",{alt:"brainCloud_Dashboard_-_Simple_Example 4",src:a(66130).Z,width:"597",height:"431"}))),(0,i.kt)("p",null,'In this case I\'ve added a statistic called "gamesWon".'),(0,i.kt)("h3",{id:"incrementing-player-statistics"},"Incrementing Player Statistics"),(0,i.kt)("p",null,'Now we can add the code which increments and retrieves statistics. In this case refer to the "PlayerStatsLayer" class in the example project.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Json::Value stats;\nstats[statName] = valueString;\n                \nJson::FastWriter fastWriter;\nstring jsonToSend = fastWriter.write(stats);\n                \nBrainCloudWrapper::getInstance()->getBCClient()->getPlayerStatisticsService()->incrementPlayerStats(jsonToSend, this);\n")),(0,i.kt)("p",null,"A success message will be returned in the callback handler if everything is ok."),(0,i.kt)("h3",{id:"retrieving-player-statistics"},"Retrieving Player Statistics"),(0,i.kt)("p",null,"To retrieve player statistics we first call ReadAllPlayerStatistics:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'BrainCloudWrapper::getInstance()->getBCClient()->getPlayerStatisticsService()->readAllPlayerStats(this);\n\nAnd then in our callback handler we can iterate through the player statistics as follows:\n\nJson::Value jsonValue = BrainCloudWrapper::getInstance()->getBCClient()->jsonStringToValue(jsonData);\nJson::Value statMap = jsonValue["data"]["statistics"];\n    \nauto memberNames = statMap.getMemberNames();\nfor (int i = 0; i < memberNames.size(); i++)\n{\n    const char * statName = memberNames[i].c_str();\n    long statValue = statMap[memberNames[i]].asInt64();\n}\n')),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"There are many brainCloud APIs available to use. This guide should have familiarized you with the basic callback flow we use in the brainCloud client, as well as basic authentication and player statistics. As always, if you have any support questions, log into the brainCloud portal and click the green help icon on the bottom right. We will be glad to point you in the right direction!"))}u.isMDXComponent=!0},36342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Fullscreen_2014-12-02__9_02_AM-34d2fc38f12c8c095a22f0a3e5f4efde.png"},79866:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace-2-3062a7ba251ed3f8803106f6e417ed5c.png"},77063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace-6ef1f86f4a036e72aa6b7f655ea60bab.png"},21446:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/MyGame_xcodeproj-2-3ac97d3810a96b0fc95feabd53d58f39.png"},8928:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/MyGame_xcodeproj-0a496e6213c75e6086150481fee9617e.png"},9739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/New_variable_and_Properties_for_brainCloudExample-c368b3ef858658a02e673221f1f564e5.png"},76886:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Properties_for_brainCloudExample-2dc344386f9996612116e20d5a3357b1.png"},43484:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/brainCloud_Dashboard_-_Simple_Example-4-b0e884200059162fccc0832f16cf4709.png"},21309:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/brainCloud_Dashboard_-_Simple_Example-62a3875bc47bcd85d565f99233760970.png"},93608:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/brainCloud_Dashboard_Project_Cyber-823dc46b2f0168841ce73432e1d026a2.png"},37540:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/libs-2a50b8872329edd3023db60e68eca26d.png"},59425:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC6ElEQVR42u2azWsTQRTAn2JnXtLWoqIgHkQ9+IGICAqK/4YXPYgHPXny4kkCnZlWEcGLR0FRqRY8CuLBijYzk1ixN7F6EQShfrVUxS+IfS3R0CS7SXbtTuD94EGy897mzS8bdpgNpI1yeMZ4nNM2dyC1cxbxkLL4RXt5GkJHOzxnPFa0k+VKBVZABIUJyFNE5lRgpXHy+eI58SyEzsVJ6DVevKWGh5w88Xcixd4N2stTyss782NTxuIPyqGg18riS+PlbePkSfO4b321jmooRznx5pKFHHQDpoRHqWltxTvl8LBxcnT+/S861kooiz+VlyNUq7yYXjhXKXcEugnlxTg1nlKMQTdhyj27jcfXKQqYGnRiJ3QDQyU8qCzOUONphvLy01A5tx9Cxnixyzj5ub55/E0RN8n4fPlxsCy2Q4hcGId+5fFVg6ZvFsagb3FcjsQKiM4nOS8Wbp2hYTxeaTSh4ScDa/79PPrX1Y51mq89XoaQoEu/2SWun+Y3VvO0zW2qHes0f+GzimIHhAJdtk0n5fD+cFluVeNym/L4oHo8cb4T1yEECnb12uqqbjlDefx+fgIGIGPotnecGsoilMVjkDXaiWtZCTAOr0LWaIuTmQnw8hlkDa3QsvsJiA+wHBTGYBUFNMBYnKXNioxiJrLfpGib36e8eFRdmiqLD3UpvxcCJdV+qZAs1112dMz17Kmx3ZdltNxvu9CCpOlqzeO9ah69zzJa7rddlMdvTT/Y4tfQBMT22x7xEwtNQFweC2ABLIAFsAAWwAJYAAtgASyABbAAFsACWhIwF7HBMBuggOh+20V7ebfpCZ0cDU1AbL/tQg8njRXv65/JiWnl5ZbQBMT22wlUqJy8Rf/2olBe3FBF3ExjoQmI7DdtQhXQDBbAAlgAC2ABLOA/sfSZfVzDS/OT1kNoJP3Ggv/GWQALYAEsgAWwABbAAlhAgt3kRPWhE7c7m7g+dOJ2ZxPXdwOd7M5mtbv7ByaRF2V7GUcfAAAAAElFTkSuQmCC"},92584:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACjElEQVR42u3b32vNcRzH8fdpNgs3G8tqIYUdZgoTu5kksjZRLsiy0lKnVi7kws81abtYk0LSVn6lqJVaKSUUuSAu5Gb5EReM0vxc5gydj+fl+vQ935OT7+e89/1+n/X4A14X3855f09H4uLi4iZJJRLBVuA0niODWRKRkrgJY6mQCJRCGsbyC0US8rphsngiIa8dxkeXhLilGPcZn8EiCXF3YXwMSIhbA+PjB+ZLiOuD8bFbQt5bn/GdEvLKYDykkZIItADGcgNJiUgVuIMBHES1TPISWIZWHMIx7EVDHtdcJXbiBK5hAP04gkZMF0XNQQ+GYbL4jktYi2zNQBvuIwPj4yeuog4FqxRdnseLv5fowCrMRRPOYxQmD1dQDqfNw1MYJd5gCZy0EMNKhk/00cXNMBOvlQz2MoRiBNagkqFePqMZgbVFyVAv71CNwErgmZKxtq9YjEDboGSsl63ioMtKxtqui4MSGFEy2FYrDqpRMtb2EE7armSwrQNOOqxksK0JTjqpZLBtOZzUr2SwrQZO6lMy2LYaTjqlZLBtB5zUoWSwrRdOalMy2DYEJzUoGeylQRxUpmSsl3tw0islg72kxEEXlYz1knbxKLQoGZvNKDYisMrxW8nYbP6gEyUIpFtKhubyAuuj+BhMtE0CqBSflAz0M4KpCKRuJSP99CCwZmNMyVAv46hCoPUqGevlrDioTOlb4lFUgqJ5Ie6HZ1H4XvAYRXBalZKPxTEkUZA2IwNTQHtQ0I7DFMgFUVCiQD+e3tb0Z6qif3h9/ghH0Yw6rMQmHMADGOQyiGmisF34AGP5hnOoRa6SOIMvMJb3SCEhiitBI/ahHevyPE6KUY8WtKIeUyQuLu5/9Red+zF7wKGnDwAAAABJRU5ErkJggg=="},98321:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Fullscreen_2014-12-02__9_02_AM-34d2fc38f12c8c095a22f0a3e5f4efde.png"},22020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace-2-3062a7ba251ed3f8803106f6e417ed5c.png"},52854:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace-6ef1f86f4a036e72aa6b7f655ea60bab.png"},91343:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MyGame_xcodeproj-2-3ac97d3810a96b0fc95feabd53d58f39.png"},10650:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MyGame_xcodeproj-0a496e6213c75e6086150481fee9617e.png"},73537:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/New_variable_and_Properties_for_brainCloudExample-c368b3ef858658a02e673221f1f564e5.png"},31223:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Properties_for_brainCloudExample-2dc344386f9996612116e20d5a3357b1.png"},66130:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/brainCloud_Dashboard_-_Simple_Example-4-b0e884200059162fccc0832f16cf4709.png"},14569:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/brainCloud_Dashboard_-_Simple_Example-62a3875bc47bcd85d565f99233760970.png"},57625:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/brainCloud_Dashboard_Project_Cyber-823dc46b2f0168841ce73432e1d026a2.png"},18222:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/libs-2a50b8872329edd3023db60e68eca26d.png"}}]);