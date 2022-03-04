"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[7670],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},476049:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(487462),r=n(263366),o=(n(667294),n(603905)),i=["components"],s={},l="Prerequisites for Deploying the LAMP Platform",p={unversionedId:"deploy/prereqs",id:"deploy/prereqs",isDocsHomePage:!1,title:"Prerequisites for Deploying the LAMP Platform",description:"The mindLAMP app interfaces with the much broader LAMP Platform to provide all of the functionality and features you can interact with within the app. The LAMP Platform is open source and its components are detailed below; to see technical materials such as source code or compiling/testing routines, please visit the components' corresponding repository.",source:"@site/docs/07-deploy/01-prereqs.md",sourceDirName:"07-deploy",slug:"/deploy/prereqs",permalink:"/deploy/prereqs",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/01-prereqs.md",tags:[],version:"current",lastUpdatedBy:"Ashley Meyer",lastUpdatedAt:1646413103,formattedLastUpdatedAt:"3/4/2022",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Checking LAMP battery and data usage",permalink:"/start_here/battery_data_usage"},next:{title:"Deployment Recommendations",permalink:"/deploy/recs"}},d=[],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites-for-deploying-the-lamp-platform"},"Prerequisites for Deploying the LAMP Platform"),(0,o.kt)("p",null,"The mindLAMP app interfaces with the much broader LAMP Platform to provide all of the functionality and features you can interact with within the app. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BIDMCDigitalPsychiatry/"},"LAMP Platform is open source")," and its components are detailed below; to see technical materials such as source code or compiling/testing routines, please visit the components' corresponding repository. "),(0,o.kt)("p",null,"There are different ways for your organization to self-deploy the LAMP Platform, and because these components are interoperable, your organization has the choice between only self-deploying one, a combination, or all of these components together. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u2192")," ",(0,o.kt)("em",{parentName:"p"},"Be sure to open the toggles on the left-hand side to learn more about what each component does.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Backend")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The noSQL database used for modern sensor data collection is CouchDB, but currently for legacy data support, Microsoft SQL Server must also be configured as part of deployment."),(0,o.kt)("li",{parentName:"ul"},"Data backup must be manually configured as different organizations will expect different sizes and frequency of data storage, along with variance in data policies."),(0,o.kt)("li",{parentName:"ul"},"These database components are not built or maintained as part of the LAMP Platform but are required for its usage."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Server"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The server acts as an event bus that connects the different components of the Platform together on the data plane and provides a control plane."),(0,o.kt)("li",{parentName:"ul"},"It vends the LAMP Application Programming Interface (API) by which clients connect to and use the LAMP Platform."),(0,o.kt)("li",{parentName:"ul"},"The API enables data harmonization, synchronization, and integration with other platforms and databases through a standardized data format and set of actions with built-in credential management."),(0,o.kt)("li",{parentName:"ul"},"The API is defined using OpenAPI and JSONSchema to markup extensible interfaces."),(0,o.kt)("li",{parentName:"ul"},"The industry encryption standards AES-256 and TLSv1.3 facilitate secure storage and transmission of data in a HIPAA, COPPA, and GDPR-compliant manner."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Worker"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This component allows external apps and tools to be notified of changes to data from other users through sent notifications and events."),(0,o.kt)("li",{parentName:"ul"},"This component schedules push notifications to be delivered to mobile devices, as well as manages email/SMS notification delivery."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Optionally"),", it also schedules and executes scripts written in Python, Javascript, or R, as part of intervention delivery and data analysis. ",(0,o.kt)("strong",{parentName:"li"},"This feature can be disabled."))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When:")," If your organization is required to ensure that all data is securely managed and complies with internal policies or regulations."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")," Your organization will need to provision computing resources and encrypted snapshot storage and dedicate personnel to maintenance, updates, and security (i.e. data breach detection). "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")," You can use a ",(0,o.kt)("strong",{parentName:"p"},"Backend")," hosted by your institution with your customized ",(0,o.kt)("strong",{parentName:"p"},"Native App")," or ",(0,o.kt)("strong",{parentName:"p"},"Frontend")," or the current Division of Digital Psychiatry version. "),(0,o.kt)("p",null,"At this time it is not possible to use the BIDMC server to host your data. "),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Frontend")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"App UI"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The user interface for the mindLAMP app, accessible from the Web, iOS, and Android. For creating and using cognitive tests or other activities, please see the ",(0,o.kt)("inlineCode",{parentName:"li"},"LAMP-activities")," repository."),(0,o.kt)("li",{parentName:"ul"},"This component allows administrators, researchers, clinicians, participants, and patients to access and manage their mindLAMP configuration and data."),(0,o.kt)("li",{parentName:"ul"},"It displays visualizations and can configure clinics and studies to specified requirements, and makes available activities and interventions to patients or participants, with push notifications to schedule them per user."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integrated Development Environment"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"This component is optional.")),(0,o.kt)("li",{parentName:"ul"},"This component allows authorized developers and data scientists to build, test, and deploy algorithms that work with the LAMP Platform in a secure manner."),(0,o.kt)("li",{parentName:"ul"},"This component may be deployed multiple times to support different development needs or users."),(0,o.kt)("li",{parentName:"ul"},"We additionally recommend ",(0,o.kt)("inlineCode",{parentName:"li"},"JupyterLab")," for Python data analysis, ",(0,o.kt)("inlineCode",{parentName:"li"},"RStudio")," for R data analysis, and ",(0,o.kt)("inlineCode",{parentName:"li"},"Visual Studio Code")," for TypeScript development."),(0,o.kt)("li",{parentName:"ul"},"Integrating development and data analysis with the LAMP Platform deployment increases data throughput and security, but access to these instances should be guarded carefully to avoid data leaks.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When:")," If your organization would like to create customized user experiences for your clients or clinicians."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")," Your organization will need to provision a content delivery system to serve the user interface."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")," You can use the existing mindLAMP ",(0,o.kt)("strong",{parentName:"p"},"App UI")," designed by the Division of Digital Psychiatry with your customized ",(0,o.kt)("strong",{parentName:"p"},"Native App")," or ",(0,o.kt)("strong",{parentName:"p"},"Backend"),".  "),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Native App")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Smartphone (iOS, Android)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This component is used to collect high precision sensor measurements from the numerous sensors outlined in the LAMP API documentation."),(0,o.kt)("li",{parentName:"ul"},"By embedding a miniature version of the LAMP server and database, it supports active bi-directional synchronization between two devices (i.e. watch and phone, or phone and cloud)."),(0,o.kt)("li",{parentName:"ul"},"By embedding the ",(0,o.kt)("strong",{parentName:"li"},"App UI"),", patients and participants can interact with clinic or study-scheduled survey instruments and cognitive assessments to record active data and metadata."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Wearable")," (Apple Watch, Google wearOS)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This component is used to collect high precision sensor measurements from the numerous sensors outlined in the LAMP API documentation."),(0,o.kt)("li",{parentName:"ul"},"By embedding a miniature version of the LAMP server and database, it supports active bi-directional synchronization between two devices (i.e. watch and phone, or phone and cloud).")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When:")," if your organization would like to include support for additional sensor instruments, such as third party medical devices."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")," Your organization will need to purchase membership with Apple and/or Google's developer program, submit modifications to the app for App Store review, and dedicate personnel to maintenance and updates."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Options:")," You can use the existing mindLAMP ",(0,o.kt)("strong",{parentName:"p"},"Native App")," submitted by the Division of Digital Psychiatry and vetted by Apple and Google with your customized ",(0,o.kt)("strong",{parentName:"p"},"Frontend")," or ",(0,o.kt)("strong",{parentName:"p"},"Backend"),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"It is always possible to customize the activities and sensors your patients will see in the app using the standard frontend hosted by BIDMC. You do not need to self-host the frontend."),(0,o.kt)("p",null,"Even if your organization chooses to make modifications to any of these components when self-deploying them, they remain compatible with one-another. For example, if one organization self-deploys a new ",(0,o.kt)("strong",{parentName:"p"},"Frontend")," user experience or adds medical devices support to the ",(0,o.kt)("strong",{parentName:"p"},"Native App"),", it remains compatible with another organization's self-deployed ",(0,o.kt)("strong",{parentName:"p"},"Backend"),"."))}c.isMDXComponent=!0}}]);