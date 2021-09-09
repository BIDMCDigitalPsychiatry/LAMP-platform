(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1129:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Common_Data_Format-d7d27d596920e6b8895fb42154bc3811.png"},123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(385)),c=["components"],o={},l={unversionedId:"data_science/02.1-data",id:"data_science/02.1-data",isDocsHomePage:!1,title:"How does the LAMP Data Format Work?",description:"\u2460",source:"@site/docs/09-data_science/02.1-data.md",sourceDirName:"09-data_science",slug:"/data_science/02.1-data",permalink:"/data_science/02.1-data",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/02.1-data.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1631213043,formattedLastUpdatedAt:"9/9/2021",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Using Document Transformations",permalink:"/data_science/jsonata"},next:{title:"Admin Checklist",permalink:"/consortium/admin/checklist"}},s=[{value:"\u2460",id:"",children:[]},{value:"\u2461",id:"-1",children:[]},{value:"\u2462",id:"-2",children:[]},{value:"\u2463",id:"-3",children:[]}],d={toc:s};function p(e){var t=e.components,o=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{src:n(1129).default})),Object(i.b)("h2",{id:""},"\u2460"),Object(i.b)("p",null,"Activity Specification"),Object(i.b)("hr",null),Object(i.b)("p",null,"Each activity that patients/participants can interact with is defined and encapsulated in an ",Object(i.b)("strong",{parentName:"p"},"ActivitySpec")," that contains the applet (written in HTML), along with a schema to describe the input and output data. "),Object(i.b)("hr",null),Object(i.b)("h2",{id:"-1"},"\u2461"),Object(i.b)("p",null,"Temporal Slices"),Object(i.b)("hr",null),Object(i.b)("p",null,"When a patient begins an interactive session with any activity, session-wide data about who, what, and when is recorded. Each user tap within is then automatically validated and converted into a time-indexed standardized format called a ",Object(i.b)("strong",{parentName:"p"},"TemporalSlice"),". "),Object(i.b)("hr",null),Object(i.b)("p",null,"This means data processing code can be written just once and work for any activity or any user."),Object(i.b)("h2",{id:"-2"},"\u2462"),Object(i.b)("p",null,"Event Stream"),Object(i.b)("hr",null),Object(i.b)("p",null,"When the user completes the interactive session, all the ",Object(i.b)("strong",{parentName:"p"},"TemporalSlice"),"s are packaged into chronologically ordered ",Object(i.b)("strong",{parentName:"p"},"ActivityEvent"),"s indexed under the user's ",Object(i.b)("strong",{parentName:"p"},"Participant")," object as a low-latency stream of continuously generated data."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"-3"},"\u2463"),Object(i.b)("p",null,"Time Series Query"),Object(i.b)("hr",null),Object(i.b)("p",null,"The researcher/data scientist can query this data at any desired temporal resolution (e.g. one millisecond, one day, one year, etc.) and filter by the type of activity (e.g. Survey, Jewels, etc.). The query can be manipulated using map/reduce document transforms and listened to notify client code directly with real-time updates."),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Example JSONata"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},'// Get all participants\n$Participant_all("study").{ id, timestamp }\n\n// Get all activities\n$Activity_all("study").{ id, ... }\n\n// Get all activity events for all participants\n$Participant_all("study").$merge([$ActivityEvent_all(id), { "#parent": id }])[$exists(timestamp)]\n')))))}p.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);