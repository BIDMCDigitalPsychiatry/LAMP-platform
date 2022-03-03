"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[6302],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13765:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(487462),r=n(263366),o=(n(667294),n(603905)),a=["components"],s={},l="Continuous Monitoring & Intervention Delivery",c={unversionedId:"develop/intervention_delivery",id:"develop/intervention_delivery",isDocsHomePage:!1,title:"Continuous Monitoring & Intervention Delivery",description:"The primary goal of the LAMP Platform remains the integration of continuous monitoring and rapid intervention delivery. Using the various components of the Platform with the mindLAMP app as an interface could suffice in most situations \u2014 processing power and battery life unconstrained, as well as constant access to network resources and the results of the processing from a Cloud server. As a Participant actively enrolled in a study uses the app, including interacting with Activities available therein, sensor instruments periodically collect measurements in the background. These data are submitted to the Cloud server which notifies and activates the correct set of Automations in the right order. These could include Visualizations, Predictive Models, or Clinical Decision Support systems that were installed by the Researcher supervising that Participant\u2019s study.",source:"@site/docs/08-develop/04-intervention_delivery.md",sourceDirName:"08-develop",slug:"/develop/intervention_delivery",permalink:"/develop/intervention_delivery",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/04-intervention_delivery.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1646339818,formattedLastUpdatedAt:"3/3/2022",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Low Power & Connectivity Support",permalink:"/develop/low_power"},next:{title:"Building New Activities",permalink:"/develop/build_new_activities"}},u=[],d={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"continuous-monitoring--intervention-delivery"},"Continuous Monitoring & Intervention Delivery"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(601790).Z})),(0,o.kt)("p",null,"The primary goal of the LAMP Platform remains the integration of continuous monitoring and rapid intervention delivery. Using the various components of the Platform with the mindLAMP app as an interface could suffice in most situations \u2014 processing power and battery life unconstrained, as well as constant access to network resources and the results of the processing from a Cloud server. As a Participant actively enrolled in a study uses the app, including interacting with Activities available therein, sensor instruments periodically collect measurements in the background. These data are submitted to the Cloud server which notifies and activates the correct set of Automations in the right order. These could include Visualizations, Predictive Models, or Clinical Decision Support systems that were installed by the Researcher supervising that Participant\u2019s study."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"mailto:team@digitalpsych.org"},"Please contact us directly for guidance on delivery of just-in-time interventions.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(944546).Z})),(0,o.kt)("p",null,"Taking the example of a Big Data-powered Clinical Decision Support (CDS) system, it may ingest a vast amount of passive as well as active data to apply heuristics and derive extracted meta-information, upon which machine learning analysis may detect a critical anomaly requiring clinical intervention and support. After notifying the clinician, this system may notify the Participant with an intervention Activity. As the Participant interacts with the newly suggested intervention, newly recorded measurements from the aforementioned sensor instruments will be synchronized to the Cloud server, and this same CDS system will be invoked again to verify that how successful the feedback was."),(0,o.kt)("p",null,"Supposing a Participant were not able to remain connected to the network frequently, the mindLAMP app may not be able to communicate with the Cloud server responsible for managing the execution of these Automations. Instead, however, a \u201clow-connectivity\u201d mode is entered, and of all the Automations installed by the Researcher, those specifically designated as capable of low-power processing (and written only in JavaScript, accessing no network or disk resources) will be downloaded and version-synchronized whenever possible. It is this lightweight version of the CDS system that will instead be executed, but the same intervention Activity will be presented to the Participant in the same timely manner. This version of the CDS system might instead rely only on simple heuristic such as the value of a single question related to suicidal ideation, as the processing scale of the Big data-powered variant CDS system would be dramatically greater and unsupportable on smartphone devices."))}p.isMDXComponent=!0},601790:function(e,t,n){t.Z=n.p+"assets/images/Clinic_Loop-3b31e525f2ae9a61380815241350b73f.png"},944546:function(e,t,n){t.Z=n.p+"assets/images/Cloud_vs_On-device_CDS-2915a2405f9952265b1b342443876dbc.png"}}]);