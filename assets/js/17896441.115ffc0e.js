"use strict";(self.webpackChunkdocusauruns_ts=self.webpackChunkdocusauruns_ts||[]).push([[27918],{99055:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ue});var a=n(67294),l=n(10833),r=n(902);const s=a.createContext(null);function c(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(s.Provider,{value:l},t)}function o(){const e=(0,a.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=o();return a.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(86010),m=n(87524),u=n(87462),v=n(95999),h=n(32244);function b(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(h.Z,(0,u.Z)({},t,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(h.Z,(0,u.Z)({},n,{subLabel:a.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function p(){const{metadata:e}=o();return a.createElement(b,{previous:e.previous,next:e.next})}var E=n(52263),g=n(39960),f=n(80143),Z=n(35281),L=n(60373),N=n(74477);const _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){const t=_[e.versionMetadata.banner];return a.createElement(t,e)}function C(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(g.Z,{to:n,onClick:l},a.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,E.Z)(),{pluginId:r}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,L.J)(r),{latestDocSuggestion:c,latestVersionSuggestion:o}=(0,f.Jo)(r),i=c??(m=o).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.Z)(t,Z.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(k,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(C,{versionLabel:o.label,to:i.path,onClick:()=>s(o.name)})))}function w(e){let{className:t}=e;const n=(0,N.E)();return n.banner?a.createElement(T,{className:t,versionMetadata:n}):null}function x(e){let{className:t}=e;const n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,d.Z)(t,Z.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function H(e){let{lastUpdatedBy:t}=e;return a.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function U(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:Z.k.common.lastUpdated},a.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(H,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var A=n(84881),M=n(71526);const I="lastUpdated_vwxv";function B(e){return a.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M.Z,e)))}function S(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return a.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(A.Z,{editUrl:t})),a.createElement("div",{className:(0,d.Z)("col",I)},(n||l)&&a.createElement(U,{lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function V(){const{metadata:e}=o(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,c=s.length>0,i=!!(t||n||r);return c||i?a.createElement("footer",{className:(0,d.Z)(Z.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(B,{tags:s}),i&&a.createElement(S,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var O=n(86043),P=n(93743);const D="tocCollapsibleButton_TO0P",R="tocCollapsibleButtonExpanded_MG3E";function z(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,d.Z)("clean-btn",D,!t&&R,n.className)}),a.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const F="tocCollapsible_ETCw",W="tocCollapsibleContent_vkbj",j="tocCollapsibleExpanded_sAul";function q(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:c}=(0,O.u)({initialState:!0});return a.createElement("div",{className:(0,d.Z)(F,!s&&j,n)},a.createElement(z,{collapsed:s,onClick:c}),a.createElement(O.z,{lazy:!0,className:W,collapsed:s},a.createElement(P.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const X="tocMobile_ITEo";function G(){const{toc:e,frontMatter:t}=o();return a.createElement(q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(Z.k.docs.docTocMobile,X)})}var $=n(39407);function J(){const{toc:e,frontMatter:t}=o();return a.createElement($.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:Z.k.docs.docTocDesktop})}var Q=n(92503),Y=n(45042);function K(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=o();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.Z)(Z.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(Q.Z,{as:"h1"},n)),a.createElement(Y.Z,null,t))}var ee=n(53438),te=n(48596),ne=n(44996);function ae(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const le={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function re(e){let{children:t,href:n,isLast:l}=e;const r="breadcrumbs__link";return l?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(g.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function se(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return a.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ce(){const e=(0,ne.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(g.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",le.breadcrumbsItemLink),href:e},a.createElement(ae,{className:le.breadcrumbHomeIcon})))}function oe(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?a.createElement("nav",{className:(0,d.Z)(Z.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ce,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(se,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(re,{href:t.href,isLast:l},t.label))})))):null}const ie="docItemContainer_Djhp",de="docItemCol_VOVn";function me(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=o(),n=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?a.createElement(G,null):void 0,desktop:!r||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(J,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.Z)("col",!n.hidden&&de)},a.createElement(w,null),a.createElement("div",{className:ie},a.createElement("article",null,a.createElement(oe,null),a.createElement(x,null),n.mobile,a.createElement(K,null,t),a.createElement(V,null)),a.createElement(p,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function ue(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(l.FG,{className:t},a.createElement(i,null),a.createElement(me,null,a.createElement(n,null))))}},84881:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(67294),l=n(95999),r=n(35281),s=n(87462),c=n(86010);const o="iconEdit_Z9Sw";function i(e){let{className:t,...n}=e;return a.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(o,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(i,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),l=n(86010),r=n(39960);function s(e){const{permalink:t,title:n,subLabel:s,isNext:c}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&a.createElement("div",{className:"pagination-nav__sublabel"},s),a.createElement("div",{className:"pagination-nav__label"},n))}},93743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),l=n(67294),r=n(86668);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),o=i(c,{anchorTopOffset:n.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...h}=e;const b=(0,r.L)(),p=d??b.tableOfContents.minHeadingLevel,E=u??b.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>c({toc:s(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:E});return m((0,l.useMemo)((()=>{if(o&&i)return{linkClassName:o,linkActiveClassName:i,minHeadingLevel:p,maxHeadingLevel:E}}),[o,i,p,E])),l.createElement(v,(0,a.Z)({toc:g,className:n,linkClassName:o},h))}},39407:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(87462),l=n(67294),r=n(86010),s=n(93743);const c="tableOfContents_bqdL";function o(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar",t)},l.createElement(s.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},13008:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(86010),r=n(39960);const s="tag_zVej",c="tagRegular_sFm0",o="tagWithCount_h2kH";function i(e){let{permalink:t,label:n,count:i}=e;return a.createElement(r.Z,{href:t,className:(0,l.Z)(s,i?o:c)},n,i&&a.createElement("span",null,i))}},71526:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(86010),r=n(95999),s=n(13008);const c="tags_jXut",o="tag_QGVx";function i(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(c,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:o},a.createElement(s.Z,{label:t,permalink:n}))}))))}},51007:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),l=n(86010);const r="browserWindow_my1Q",s="browserWindowHeader_jXSR",c="buttons_uHc7",o="browserWindowAddressBar_Pd8y",i="dot_giz1",d="browserWindowMenuIcon_Vhuh",m="bar_rrRL",u="browserWindowBody_Idgs";function v(e){let{children:t,minHeight:n,url:v="http://localhost:3000"}=e;return a.createElement("div",{className:r,style:{minHeight:n}},a.createElement("div",{className:s},a.createElement("div",{className:c},a.createElement("span",{className:i,style:{background:"#f25f58"}}),a.createElement("span",{className:i,style:{background:"#fbbe3c"}}),a.createElement("span",{className:i,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,l.Z)(o,"text--truncate")},v),a.createElement("div",{className:d},a.createElement("div",null,a.createElement("span",{className:m}),a.createElement("span",{className:m}),a.createElement("span",{className:m})))),a.createElement("div",{className:u},t))}},13657:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(87462),l=n(67294),r=n(28227),s=n(9870),c=n(93394),o=n(11925),i=n(65471),d=n(98231),m=n(27390),u=n(91470),v=n(23612),h=n(11875),b=n(51007),p=n(65488),E=n(85162),g=n(3905);const f={toc:[]};function Z(e){let{components:t,...n}=e;return(0,g.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,g.kt)("table",{className:"servop"},(0,g.kt)("thead",null,(0,g.kt)("tr",null,(0,g.kt)("th",null,"Service"),(0,g.kt)("th",null,"Operation"))),(0,g.kt)("tbody",null,(0,g.kt)("tr",null,(0,g.kt)("td",null,n.service_name),(0,g.kt)("td",null,n.operation_name)))))}Z.isMDXComponent=!0;var L=n(52991),N=n(40640);const _={head:r.Z,code:s.Z,a:c.Z,pre:o.Z,details:i.Z,ul:m.Z,img:u.Z,h1:e=>l.createElement(d.Z,(0,a.Z)({as:"h1"},e)),h2:e=>l.createElement(d.Z,(0,a.Z)({as:"h2"},e)),h3:e=>l.createElement(d.Z,(0,a.Z)({as:"h3"},e)),h4:e=>l.createElement(d.Z,(0,a.Z)({as:"h4"},e)),h5:e=>l.createElement(d.Z,(0,a.Z)({as:"h5"},e)),h6:e=>l.createElement(d.Z,(0,a.Z)({as:"h6"},e)),admonition:v.Z,mermaid:h.Z,BrowserWindow:b.Z,Tabs:p.Z,TabItem:E.Z,PartialServop:Z,DocCardList:L.Z,LiteYouTubeEmbed:N.Z}}}]);