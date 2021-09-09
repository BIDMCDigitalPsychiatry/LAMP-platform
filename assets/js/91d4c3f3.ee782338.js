(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{249:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),i=(a(0),a(385)),o=["components"],c={},s={unversionedId:"why_use/intro",id:"why_use/intro",isDocsHomePage:!1,title:"How mindLAMP, the Data Center, and Cortex Work Together",description:"LAMP Platform",source:"@site/docs/04-why_use/01-intro.md",sourceDirName:"04-why_use",slug:"/why_use/intro",permalink:"/why_use/intro",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/04-why_use/01-intro.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1631213043,formattedLastUpdatedAt:"9/9/2021",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Publications with LAMP",permalink:"/about/publications"},next:{title:"What is the LAMP Platform?",permalink:"/why_use/what"}},l=[{value:"LAMP Platform",id:"lamp-platform",children:[{value:"\u2460 App",id:"-app",children:[]},{value:"\u2461 Dashboard",id:"-dashboard",children:[]},{value:"\u2462 Database",id:"-database",children:[]},{value:"\u2463 Cortex",id:"-cortex",children:[]}]}],u={toc:l};function p(e){var t=e.components,c=Object(n.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"lamp-platform"},"LAMP Platform"),Object(i.b)("p",null,Object(i.b)("img",{src:a(6204).default})),Object(i.b)("h3",{id:"-app"},"\u2460 App"),Object(i.b)("p",null,"The patient uses the ",Object(i.b)("strong",{parentName:"p"},"App"),", taking surveys, playing cognitive games, accessing helpful tips and resources, or doing meditation and breathing exercises; when enabled and configured, the app collects sensor data from the mobile device's accelerometer, GPS, pedometer, and more in the background without interrupting the patient. It also collects metadata about the patient's use of the app, like how long certain questions took to answer in a survey, or which helpful tips they appreciated the most, and uploads the data securely to a server you or your organization owns."),Object(i.b)("h3",{id:"-dashboard"},"\u2461 Dashboard"),Object(i.b)("p",null,"Clinicians and Researchers can create, customize, and schedule activities for patients or participants to interact and receive notifications, and tap into near-real-time information about patients and better inform decision making. "),Object(i.b)("h3",{id:"-database"},"\u2462 Database"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Database")," securely and chronologically indexes the data through the ",Object(i.b)("strong",{parentName:"p"},"LAMP Protocol")," for programming and data science. It informs custom data analysis code in real-time that new patient data has arrived. Researchers can better build reusable tools, analysis pipelines, and conduct reproducible science, knowing that others around the globe using the ",Object(i.b)("strong",{parentName:"p"},"LAMP Platform")," can easily work with their data or replicate their unique study."),Object(i.b)("h3",{id:"-cortex"},"\u2463 Cortex"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Cortex")," data analysis pipeline is designed to easily hook into the ",Object(i.b)("strong",{parentName:"p"},"Database")," and extract important and clinically useful secondary data features, such as sedentary behavior, time spent at home, device/screen usage, sleep estimates, and much more, from the terabytes of raw data. It can trigger custom just-in-time adaptive interventions and produce useful interactive visualizations viewable by patients and clinicians."))}p.isMDXComponent=!0},385:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},6204:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/LAMP_Overview-2214d02d381118a8d2772f096620d6d3.png"}}]);