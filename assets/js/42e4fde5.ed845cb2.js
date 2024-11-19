"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[3746],{22825:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var t=n(10005),s=n(74848),a=n(28453);const r={author:"Aditya Vaidyam",author_title:"Division of Digital Psychiatry",author_url:"https://github.com/avaidyam",author_image_url:"https://avatars.githubusercontent.com/u/1361003"},l="Significant Performance Improvements & UI Overhaul",o={authorsImageUrls:[void 0]},d=[{value:"Frontend",id:"frontend",level:2},{value:"Features",id:"features",level:3},{value:"Improvements",id:"improvements",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Backend",id:"backend",level:2},{value:"Features",id:"features-1",level:2},{value:"Bug Fixes",id:"bug-fixes-1",level:3},{value:"Native Core (iOS &amp; Android)",id:"native-core-ios--android",level:2},{value:"Features",id:"features-2",level:3},{value:"Bug Fixes",id:"bug-fixes-2",level:3}];function c(e){const i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"This is a significant update -- please review the bolded disclaimer text!"}),"\n",(0,s.jsx)(i.h2,{id:"frontend",children:"Frontend"}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["This release of the Frontend REQUIRES the Backend to be updated first. If you are using the ",(0,s.jsx)(i.code,{children:"dashboard.lamp.digital"})," link, please ask your system administrator to upgrade your backend immediately."]})})}),"\n",(0,s.jsx)(i.h3,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Overhauled activity creation for automatic validation, descriptions, min/max guides for numeric values."}),"\n",(0,s.jsx)(i.li,{children:"Added a new tab item for Sensors management and a new tab item for Studies management when logged in as a clinician."}),"\n",(0,s.jsx)(i.li,{children:"Added a new patient list creation option to auto-create a study based on a template with a single patient."}),"\n",(0,s.jsx)(i.li,{children:"Added the ability to configure multiple system administrator-level accounts from the API and the dashboard."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"improvements",children:"Improvements"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Added the ability to search by patient alias or study name."}),"\n",(0,s.jsx)(i.li,{children:"Added page navigation to make it easier to track and sort activities or patients."}),"\n",(0,s.jsx)(i.li,{children:"Updated the layout to a larger and more readable grid."}),"\n",(0,s.jsx)(i.li,{children:"Significant performance improvements across the clinician dashboard that support up multiple clinics/studies containing a total of up to 1000 patients."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Resolved an issue where the last patient in the patient list would be hidden underneath the navigation bar."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where tips would disappear from the Learn tab once viewed."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where survey questions with longer text would be entirely cut off or require scrolling to view the full text."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where Activity Groups would incorrectly appear in the Prevent tab."}),"\n",(0,s.jsx)(i.li,{children:"Resolved consistency issues with the DBT Diary Card component."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where scheduled activities would sometimes not correctly appear in the Feed tab."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where icons for tips would not appear."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where Jewels would sometimes be hidden underneath the bottom bar of the Jewels game."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where the login email address field auto-capitalized text on mobile devices."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where the back/next buttons for surveys on mobile devices would hide the actual question."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where sensor data would not upload correctly for Samsung devices if the URL included a '/'."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where Activity Groups erroneously had a disabled incorrect schedule automatically added."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"backend",children:"Backend"}),"\n",(0,s.jsx)(i.h2,{id:"features-1",children:"Features"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Added support for MongoDB in addition to CouchDB, including enterprise managed solutions such as AWS DocumentDB and Azure CosmosDB."}),"\n",(0,s.jsx)(i.li,{children:"Added the ability to configure multiple system administrator-level accounts from the API and the dashboard."}),"\n",(0,s.jsx)(i.li,{children:"Added a brand new visualization and data extraction query system."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"bug-fixes-1",children:"Bug Fixes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Resolved several memory leak related issues for the LISTEN and push notificatons API."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue with MongoDB backends where queries could run indefinitely and bottleneck the backend processes."}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"native-core-ios--android",children:"Native Core (iOS & Android)"}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.strong,{children:["This release of the Native Core apps (iOS, Android, Apple Watch, Google wearOS) REQUIRES the Backend to be updated first. If you are NOT using the ",(0,s.jsx)(i.code,{children:"api.lamp.digital"})," link, please ask your system administrator to upgrade your backend immediately."]})})}),"\n",(0,s.jsx)(i.h3,{id:"features-2",children:"Features"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Sensors are now configurable (enable/disable specific sensor types) using the new Frontend and Backend components."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"bug-fixes-2",children:"Bug Fixes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Resolved an issue where cached sensor data would sometimes fail to upload."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue on iOS where the app would crash in the background and halt the sensor data collection process."}),"\n",(0,s.jsx)(i.li,{children:"Resolved an issue where sleep duration from wearable sensors would not be collected correctly."}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var t=n(96540);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}},10005:e=>{e.exports=JSON.parse('{"permalink":"/blog/2021/04/22/","source":"@site/blog/2021-04-22.md","title":"Significant Performance Improvements & UI Overhaul","description":"This is a significant update -- please review the bolded disclaimer text!","date":"2021-04-22T00:00:00.000Z","tags":[],"readingTime":2.885,"hasTruncateMarker":false,"authors":[{"name":"Aditya Vaidyam","title":"Division of Digital Psychiatry","url":"https://github.com/avaidyam","imageURL":"https://avatars.githubusercontent.com/u/1361003","key":null,"page":null}],"frontMatter":{"author":"Aditya Vaidyam","author_title":"Division of Digital Psychiatry","author_url":"https://github.com/avaidyam","author_image_url":"https://avatars.githubusercontent.com/u/1361003"},"unlisted":false,"prevItem":{"title":"Minor Stability Updates and Bug Fixes","permalink":"/blog/2021/08/09/"},"nextItem":{"title":"Documentation Overhaul","permalink":"/blog/2021/04/01/"}}')}}]);