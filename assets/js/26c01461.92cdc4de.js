"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[36791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22377:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"Store Integration \u2013 Amazon",date:"2020-06-22"},o=void 0,s={unversionedId:"learn/portal-tutorials/store-integration-amazon/index",id:"learn/portal-tutorials/store-integration-amazon/index",title:"Store Integration \u2013 Amazon",description:"In this tutorial, we\u2019ll look at integrating the Amazon Appstore with the brainCloud marketplace. By doing this, Amazon users will have the ability to validate purchased items from the Amazon Appstore with brainCloud.",source:"@site/docs/learn/5_portal-tutorials/store-integration-amazon/index.md",sourceDirName:"learn/5_portal-tutorials/store-integration-amazon",slug:"/learn/portal-tutorials/store-integration-amazon/",permalink:"/braincloud-apiref/learn/portal-tutorials/store-integration-amazon/",draft:!1,editUrl:"https://github.com/getbraincloud/braincloud-apiref/tree/main/docs/learn/5_portal-tutorials/store-integration-amazon/index.md",tags:[],version:"current",lastUpdatedBy:"jasonl",lastUpdatedAt:1672679892,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{title:"Store Integration \u2013 Amazon",date:"2020-06-22"},sidebar:"learnSidebar",previous:{title:"Push Notification Setup - Firebase",permalink:"/braincloud-apiref/learn/portal-tutorials/push-notification-setup-firebase/"},next:{title:"Store Integration - Facebook",permalink:"/braincloud-apiref/learn/portal-tutorials/store-integration-facebook/"}},p={},c=[{value:"brainCloud Portal Setup",id:"braincloud-portal-setup",level:2},{value:"Associate Amazon In-App\xa0Items with brainCloud Products",id:"associate-amazon-in-appitems-with-braincloud-products",level:3},{value:"Amazon Certificates and Credentials",id:"amazon-certificates-and-credentials",level:3},{value:"Confirming the purchase Client Side",id:"confirming-the-purchase-client-side",level:3},{value:"Confirming the transactions from brainCloud Portal",id:"confirming-the-transactions-from-braincloud-portal",level:3}],l={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, we\u2019ll look at integrating the Amazon Appstore with the brainCloud marketplace. By doing this, Amazon users will have the ability to validate purchased items from the Amazon Appstore with brainCloud."),(0,r.kt)("p",null,"Note that apps still have to make the purchase directly with the Amazon Appstore. For more information on this process refer to the Amazon Appstore ",(0,r.kt)("a",{parentName:"p",href:"https://developer.amazon.com/apps-and-games"},"developer console")," site."),(0,r.kt)("h2",{id:"braincloud-portal-setup"},"brainCloud Portal Setup"),(0,r.kt)("p",null,"Here are the steps to configure brainCloud for Amazon Appstore\xa0purchases."),(0,r.kt)("p",null,"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You\xa0should have set up your products in the brainCloud marketplace. Please refer to the ",(0,r.kt)("a",{parentName:"li",href:"/learn/portal-tutorials/marketplace-configuration/"},"Marketplace Configuration")," guide."),(0,r.kt)("li",{parentName:"ul"},"You should have created the Amazon Appstore In-App products(items) as per the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.amazon.com/docs/in-app-purchasing/iap-overview.html"},"Amazon Appstore Developer documentation"),". (Refer to our Unity example ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/getbraincloud/examples-unity/tree/develop/BCAmazonIAP"},"here"),".)")),(0,r.kt)("h3",{id:"associate-amazon-in-appitems-with-braincloud-products"},"Associate Amazon In-App\xa0Items with brainCloud Products"),(0,r.kt)("p",null,"After setting up your products in the brainCloud marketplace, you\u2019ll want to associate them with the\xa0Amazon In-App product SKU. In particular, we will be grabbing the product SKU from the\xa0Amazon developer site\xa0and entering them into the appropriate brainCloud products."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.amazon.com/"},"Amazon Developer")," site and go to the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.amazon.com/dashboard"},"Developer Console")," dashboard.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(78928).Z,width:"1024",height:"531"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click Apps & Services tab from the developer console.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(62485).Z,width:"1024",height:"673"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select your App and go to the \u201cIn-App Items\u201d section")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(66248).Z,width:"1024",height:"594"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select your In-App item and grab the SKU, make sure the item is ready to test (Status is ",(0,r.kt)("strong",{parentName:"li"},"Live"),").")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(47902).Z,width:"1024",height:"318"})),(0,r.kt)("p",null,"(for this tutorial\xa0we'll assume that the product(item) SKU is ",(0,r.kt)("em",{parentName:"p"},"bitheads.brainCloud.aiaptest.pc1"),")"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you skip registering your Amazon product(item) SKU to the brainCloud portal, you will get an error like below when calling verifying purchase API.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'"transactionResultCode": 102,'),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'"errorMessage": "Product not found",'))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log into the brainCloud Portal"),(0,r.kt)("li",{parentName:"ul"},"Go to the \u201cMarketplace | Products\u201d page in the Design tab  ","  ",(0,r.kt)("a",{target:"_blank",href:a(48195).Z},(0,r.kt)("img",{alt:"brainCloud",src:a(30760).Z,width:"254",height:"188"}))),(0,r.kt)("li",{parentName:"ul"},"Select the product you would like to associate with.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(15520).Z,width:"837",height:"255"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Click the **[+ Edit Product]** button to make it editable.\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(21252).Z,width:"840",height:"271"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find your Price (or create one by click ",(0,r.kt)("strong",{parentName:"li"},"[+]")," icon) and click the edit icon")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(64201).Z,width:"852",height:"246"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the Edit Price dialog, click the + icon to add an entry for\xa0Amazon")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(46067).Z,width:"544",height:"564"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter your Amazon item SKU for this price \u2013 in our case \u201cbitheads.brainCloud.aiaptest.pc1\u201d.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(34888).Z,width:"539",height:"557"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"At this point, you may want to select your price to be the default if it isn\u2019t already selected. You can do this back in the Edit Product page.\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(36554).Z,width:"829",height:"258"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can now verify that your Product is coming back with the correct Amazon In-app item SKU. Here is the output from the API Explorer \u201c",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Appstore.GetSaleInventory")),'\u201d call using "amazon" as the platform:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "data": {\n    "productInventory": [\n      {\n        "itemId": "coinbundle10",\n        "type": "Consumable",\n        "category": "coin",\n        "title": "product",\n        "description": "coinbundle10",\n        "imageUrl": null,\n        "currency": {},\n        "parentCurrency": {},\n        "peerCurrency": {\n          "deploypeer": {\n            "gems": 1\n          }\n        },\n        "data": null,\n        "createdAt": 1592542611282,\n        "updatedAt": 1592852462791,\n        "version": 9,\n        "priceData": {\n          "id": "bitheads.brainCloud.aiaptest.pc1",\n          "referencePrice": 399,\n          "isPromotion": false\n        }\n      }\n    ],\n    "serverTime": 1592857819454\n  },\n  "status": 200\n}\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If you skip registering your Amazon product(item) SKU to the brainCloud portal, you will get an error like below when calling verifying purchase API.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'"transactionResultCode": 102,'),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'"errorMessage": "Product not found",'))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you add more than one product associate with the same Amazon In-App Item SKU, you will only get one product transition recorded from brainCloud.")),(0,r.kt)("h3",{id:"amazon-certificates-and-credentials"},"Amazon Certificates and Credentials"),(0,r.kt)("p",null,"Once the products have been configured, you will need to add the appropriate Amazon credentials to brainCloud."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Application IDs page  ","  ",(0,r.kt)("a",{target:"_blank",href:a(92523).Z},(0,r.kt)("img",{alt:"brainCloud",src:a(18495).Z,width:"254",height:"270"}))),(0,r.kt)("li",{parentName:"ul"},"Click the Amazon icon and notice the following field is needed to fill in.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(20203).Z,width:"1024",height:"649"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can find this information from your Amazon developer console through Setting->Identity.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(78138).Z,width:"1024",height:"394"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should now be able to validate purchase with brainCloud.")),(0,r.kt)("p",null,"Warning"),(0,r.kt)("p",null,"Make sure your In-App Item's SKU is unique against all of your apps.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{src:a(77535).Z,width:"1234",height:"632"})),(0,r.kt)("p",null,"Information"),(0,r.kt)("p",null,"Test your App with Live App Testing after filling in all the necessary info of your app and uploading your app APK file.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{src:a(71120).Z,width:"1170",height:"924"}),(0,r.kt)("br",{parentName:"p"}),"\n","Add Testers from Live App Testing screen",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{src:a(34204).Z,width:"1434",height:"643"}),(0,r.kt)("br",{parentName:"p"}),"\n","Notice your test status became ",(0,r.kt)("strong",{parentName:"p"},"Processing")," once submit your test, then ",(0,r.kt)("strong",{parentName:"p"},"Publishing"),", and when ready, the status will change to ",(0,r.kt)("strong",{parentName:"p"},"Test in Progress"),".",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{src:a(67154).Z,width:"1060",height:"245"})),(0,r.kt)("h3",{id:"confirming-the-purchase-client-side"},"Confirming the purchase Client Side"),(0,r.kt)("p",null,"After making a purchase client-side, Amazon Appstore will\xa0return a receipt with a receiptId, SKU, itemType, purchaseDate and userId such info, we will need receiptId and userId that are used by the\xa0",(0,r.kt)("a",{parentName:"p",href:"/api/capi/product/confirmgoogleplaypurchase"},"VerifyPurchase")," API call."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your using Amazon IAP Plugin for Unity, some of your code may look like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'using System;\nusing System.Collections.Generic;\nusing UnityEngine;\nusing UnityEngine.UI;\nusing com.amazon.device.iap.cpt;\n\npublic class BCinterface : MonoBehaviour\n{\n    IAmazonIapV2 iapService = AmazonIapV2Impl.Instance;\n    public BrainCloudWrapper _bc;\n    string aiapReceipt = "";\n    string aiapUserId = "";\n    string aiapReceiptUpdateResponse = "";\n    string aiapUserIdUpdateResponse = "";\n    // Start is called before the first frame update\n    void Start()\n    {\n        // Register for an event\n        iapService.AddGetUserDataResponseListener(EventHandler);\n\n       iapService.AddPurchaseResponseListener(PurchaseResponseEventHandler);\n\n        iapService.AddGetPurchaseUpdatesResponseListener(PurchaseUpdateResponseEventHandler);\n    }\n\n    //click authentication button\n    public void AuthenticateBC()\n    {\n        _bc.AuthenticateEmailPassword("unityuser@unity.com", "unitytest", true, authSuccess_BCcall, authError_BCcall);\n    }\n    private void Awake()\n    {\n        DontDestroyOnLoad(gameObject);\n        _bc = gameObject.AddComponent<BrainCloudWrapper>();\n        _bc.WrapperName = gameObject.name;\n        _bc.Init();\n    }\n\n    //purchase button click\n    public void Amazonpurchase()\n    {\n        // Construct object passed to operation as input\n        SkuInput request = new SkuInput();\n\n        // Set input value\n        request.Sku = "com.braincloud.amazoniap.pc1";\n\n        // Call synchronous operation with input object\n        RequestOutput response = iapService.Purchase(request);\n\n    }\n\n    //looks like we don\'t need the user data info, but list here just in case\n    private void EventHandler(GetUserDataResponse args)\n    {\n        string requestId = args.RequestId;\n        string userId = args.AmazonUserData.UserId;\n        string marketplace = args.AmazonUserData.Marketplace;\n        string status = args.Status;\n    }\n\n    private void PurchaseResponseEventHandler(PurchaseResponse args)\n    {\n        string requestId = args.RequestId;\n        string userId = args.AmazonUserData.UserId;\n        string marketplace = args.AmazonUserData.Marketplace;\n        string receiptId = args.PurchaseReceipt.ReceiptId;\n        long cancelDate = args.PurchaseReceipt.CancelDate;\n        long purchaseDate = args.PurchaseReceipt.PurchaseDate;\n        string sku = args.PurchaseReceipt.Sku;\n        string productType = args.PurchaseReceipt.ProductType;\n        string status = args.Status;\n\n        aiapReceipt = receiptId;\n        aiapUserId = userId;\n\n    }\n\n    // Define event handler\n    private void PurchaseUpdateResponseEventHandler(GetPurchaseUpdatesResponse args)\n    {\n        string requestId = args.RequestId;\n        string userId = args.AmazonUserData.UserId;\n        string marketplace = args.AmazonUserData.Marketplace;\n        List<PurchaseReceipt> receipts = args.Receipts;\n        string status = args.Status;\n        bool hasMore = args.HasMore;\n\n        // for each purchase receipt you can get the following values\n        string receiptId = receipts[0].ReceiptId;\n        long cancelDate = receipts[0].CancelDate;\n        long purchaseDate = receipts[0].PurchaseDate;\n        string sku = receipts[0].Sku;\n        string productType = receipts[0].ProductType;\n\n        aiapReceiptUpdateResponse = receiptId;\n        aiapUserIdUpdateResponse = userId;\n    }\n\n    //brainCloud verify pruchase button click\n    public void BrainCloudVerifyPurchase()\n    {\n        if (String.IsNullOrEmpty(aiapReceipt))\n        {\n            //call purchase updateResonse verify if purchase is not fulfilled\n            string receiptData = "{\\"receiptId\\":\\"" + aiapReceiptUpdateResponse + "\\",\\"userId\\":\\"" + aiapUserIdUpdateResponse + "\\"}";\n            Debug.Log("BrainCloudVerifyPurchase click with purchase updateResonse receiptData:" + receiptData);\n            _bc.AppStoreService.VerifyPurchase("amazon", receiptData, veriSuccess_BCcall, veriError_BCcall);\n\n        }\n        else\n        {\n            //call purchase Resonse verify\n            string receiptData = "{\\"receiptId\\":\\"" + aiapReceipt + "\\",\\"userId\\":\\"" + aiapUserId + "\\"}";\n            Debug.Log("BrainCloudVerifyPurchase click with purchase Resonse receiptData:" + receiptData);\n            _bc.AppStoreService.VerifyPurchase("amazon", receiptData, veriSuccess_BCcall, veriError_BCcall);\n        }\n    }\n\n    public void authSuccess_BCcall(string responseData, object cbObject)\n    {\n        Debug.Log("bc authentication success call back");\n    }\n\n    public void authError_BCcall(int statusCode, int reasonCode, string statusMessage, object cbObject)\n    {\n        Debug.Log("bc authentication error call back");\n    }\n\n    public void veriSuccess_BCcall(string responseData, object cbObject)\n    {\n        Debug.Log("bc verify purchase success call back");\n    }\n\n    public void veriError_BCcall(int statusCode, int reasonCode, string statusMessage, object cbObject)\n    {\n        Debug.Log("bc verify purchase error call back");\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If using Amazon IAP for Android, some of your code snippets may look like the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'...\n//import amazon iap and brainCould client\nimport com.amazon.device.iap.PurchasingListener;\nimport com.amazon.device.iap.PurchasingService;\nimport com.amazon.device.iap.model.ProductDataResponse;\nimport com.amazon.device.iap.model.PurchaseResponse;\nimport com.amazon.device.iap.model.PurchaseUpdatesResponse;\nimport com.amazon.device.iap.model.Receipt;\nimport com.amazon.device.iap.model.UserDataResponse;\nimport com.bitheads.braincloud.client.IServerCallback;\nimport com.bitheads.braincloud.client.ServiceName;\nimport com.bitheads.braincloud.client.ServiceOperation;\nimport org.json.JSONException;\nimport org.json.JSONObject;\n...\n\n...\n//define your product\npublic enum MySku {\n    // This is the product to purchase and in the code.\n    PRODUCT1("bitheads.brainCloud.aiaptest.pc1", "US"),\n...\n\n...\n//register purchasingListener\n        sampleIapManager = new SampleIapManager(this);\n        sampleIapManager.activate();\n        final SamplePurchasingListener purchasingListener = new SamplePurchasingListener(sampleIapManager);\n        Log.d(TAG, "onCreate: registering PurchasingListener");\n        PurchasingService.registerListener(this.getApplicationContext(), purchasingListener);\n        Log.d(TAG, "IS_SANDBOX_MODE:" + PurchasingService.IS_SANDBOX_MODE);\n...\n\n...\n//when click a product buying button, passing your product sku\nfinal RequestId requestId = PurchasingService.purchase(MySku.PRODUCT1.getSku());\n...\n\n...\n//in your listener implements Amazon PurchasingListener and brainCloud callback\npublic class SamplePurchasingListener implements PurchasingListener, IServerCallback {\n    IServerCallback theCallback;\n...\n\n...\n//inside onPurchaseResponse verify the purchase with brainCloud\n    public void onPurchaseResponse(final PurchaseResponse response) {\n...\n        switch (status) {\n        case SUCCESSFUL:\n            final Receipt receipt = response.getReceipt();\n            iapManager.setAmazonUserId(response.getUserData().getUserId(), response.getUserData().getMarketplace());\n            Log.d(TAG, "onPurchaseResponse: receipt json:" + receipt.toJSON());\n            iapManager.handleReceipt(receipt, response.getUserData());\n            iapManager.refreshOranges();\n            String userIda = response.getUserData().getUserId();\n            String receiptId = response.getReceipt().getReceiptId();\n            JSONObject receiptData = new JSONObject();\n            try {\n                receiptData.put("receiptId", receiptId);\n                receiptData.put("userId",userIda);\n            } catch (JSONException e) {\n                e.printStackTrace();\n            }  \n\nMainActivity._bc.GetWrapper().getAppStoreService().verifyPurchase("amazon", receiptData.toString(), theCallback);\n            break;\n...\n')),(0,r.kt)("h3",{id:"confirming-the-transactions-from-braincloud-portal"},"Confirming the transactions from brainCloud Portal"),(0,r.kt)("p",null,"Check the transactions from brainCloud portal page on ",(0,r.kt)("strong",{parentName:"p"},"Monitoring | User Monitoring | Transactions")," after making a purchase from the test app."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(33715).Z,width:"1024",height:"250"})))}u.isMDXComponent=!0},48195:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/brainCloud_dashboard_productsTab-cd5e066fe9cbc06b9eccf4733aa61c6c.jpg"},92523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/portal_addGoogProd4-8f9b981cd7efdd9fb1a42310f692769c.jpg"},77535:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2020-06-22_18h10_40-1-0bf64794aa6188810752c6eb59ea56d0.png"},71120:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2020-06-22_18h17_29-eb9b8773e6defbc51738f726bf46dbe9.png"},34204:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2020-06-22_18h29_56-443de5aaf17d7c7766956b7084998411.png"},30760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/brainCloud_dashboard_productsTab-cd5e066fe9cbc06b9eccf4733aa61c6c.jpg"},62485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-1-1024x673-be29d1f8d589b005da081c591bdd31cc.png"},34888:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-10-8284beb14ca58da650ac92641b955f7a.png"},78928:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-1024x531-3a02b4a62ce0b77b854959ea9dcd906b.png"},46067:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-11-232d47e1f8a206f83f7b156ea5cbe617.png"},36554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-12-46e2aac031df84ed2c86eba29e8bea9c.png"},20203:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-13-1024x649-255b0e90575d9249edf8d009a7380a38.png"},78138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-14-1024x394-1d7e92ffdd696c19855b69815d5afdc3.png"},33715:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-15-1024x250-53b83c37dce8d9101cf598ac316845eb.png"},67154:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-16-2b3d9731f2826f768114b9436faf72b2.png"},66248:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-2-1024x594-8b5714fb3ae58fa55e82adc6a44172db.png"},47902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-4-1024x318-f410acd18c88f2fb0f590012d08346e3.png"},15520:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-5-30cf52ba065f11356cd7591b84e72cec.png"},21252:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-6-30282dc30405d87b974cd928adc28281.png"},64201:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-7-405f9c80b7e3649cb047d313b07a5272.png"},18495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/portal_addGoogProd4-8f9b981cd7efdd9fb1a42310f692769c.jpg"}}]);