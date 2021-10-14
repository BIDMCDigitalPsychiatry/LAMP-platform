(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{348:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(388)),o=["components"],c={},s={unversionedId:"develop/build_new_activities",id:"develop/build_new_activities",isDocsHomePage:!1,title:"Building New Activities",description:"Because the LAMP Platform is built around around a simple native core and a flexible WebView UI, any HTML/CSS/JavaScript code that works in a browser can work in the app.",source:"@site/docs/08-develop/05-build_new_activities.md",sourceDirName:"08-develop",slug:"/develop/build_new_activities",permalink:"/develop/build_new_activities",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/05-build_new_activities.md",version:"current",lastUpdatedBy:"Suraj",lastUpdatedAt:1634226185,formattedLastUpdatedAt:"10/14/2021",sidebarPosition:5,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Continuous Monitoring & Intervention Delivery",permalink:"/develop/intervention_delivery"},next:{title:"Just-In-Time Adaptive Interventions",permalink:"/develop/adaptive_interventions"}},p=[],l={toc:p};function d(e){var t=e.components,c=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{src:n(6269).default})),Object(i.b)("p",null,"Because the ",Object(i.b)("strong",{parentName:"p"},"LAMP Platform")," is built around around a simple native core and a flexible WebView UI, any HTML/CSS/JavaScript code that works in a browser can work in the app."),Object(i.b)("p",null,"Learning modules, surveys, cognitive tests, and interventions all use the same API and using a framework such as React makes it simple, for example, to create new interventions as needed with patient/participant feedback."),Object(i.b)("p",null,"Any Javascript-based code can be added the LAMP Platform using the ActivitySpec API, as long as it uses ",Object(i.b)("inlineCode",{parentName:"p"},"window.postMessage()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"window.addEventListener()")," API to receive the Activity settings and submit the ActivityEvent once complete. "),Object(i.b)("p",null,"With approximately ~40 lines of JavaScript + React code, shown on the left, produces a na\xefve implementation of the Jewels game, shown on the right."),Object(i.b)("p",null,Object(i.b)("img",{src:n(6270).default})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you'd like to try creating your own, but don't have a ReactJS development environment, ",Object(i.b)("strong",{parentName:"p"},"consider using ",Object(i.b)("a",{parentName:"strong",href:"https://codesandbox.io/"},"CodeSandbox")),", a free service."))))}d.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6269:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/activity_spec_event-4079658d64bcccde57fec657a006dabc.png"},6270:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Screen_Shot_2019-04-16_at_12.12.16_PM-289c1d28979a3911df0a34438f507d69.png"}}]);