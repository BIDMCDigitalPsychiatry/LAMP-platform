"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[8409],{603905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return y}});var r=n(667294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),y=i,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(m,l(l({ref:e},c),{},{components:n})):r.createElement(m,l({ref:e},c))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},380587:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(487462),i=n(263366),a=(n(667294),n(603905)),l=["components"],o={},s="Query SensorEvents for a Participant.",p={type:"api",id:"query-sensor-events-for-a-participant",unversionedId:"query-sensor-events-for-a-participant",title:"Query SensorEvents for a Participant.",description:"",slug:"/query-sensor-events-for-a-participant",frontMatter:{},api:{operationId:"SensorEvent.list",description:"List SensorEvents produced by a Participant. The deprecated name for this operation is `SensorEvent.all_by_participant`.",tags:["SensorEvent"],parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}},{name:"origin",in:"query",schema:{type:"string"}},{name:"from",in:"query",schema:{type:"integer",description:"The UNIX Epoch date-time representation: number of milliseconds since 1/1/1970 12:00 AM.",format:"int64"}},{name:"to",in:"query",schema:{type:"integer",description:"The UNIX Epoch date-time representation: number of milliseconds since 1/1/1970 12:00 AM.",format:"int64"}},{name:"limit",in:"query",schema:{type:"integer",format:"int64",default:1e3,description:"The maximum number of events to return in the query. Positive values like +1000 return latest events first, while negative values like -1000 return earliest events first.",example:"-10"}}],responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",description:"An event generated by a participant interacting with the LAMP app.",properties:{timestamp:{type:"integer",format:"int64",description:"The UNIX Epoch date-time representation of when this event was recorded: number of milliseconds since 1/1/1970 12:00 AM."},sensor:{type:"string",description:"The type of the sensor event.",example:"lamp.accelerometer"},data:{type:"object",additionalProperties:!0,description:"The item information recorded within the sensor event.",example:{x:.1234,y:1.2345,z:2.3456}}},required:["timestamp","sensor","data"]}}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",example:"400.bad-request"}}}}}}},security:[{Authorization:[]}],"x-code-samples":[{lang:"js",label:"JavaScript",source:'import LAMP from \'lamp-core\'\nawait LAMP.connect({ serverAddress: "api.lamp.digital", accessKey: "email@address.com", secretKey: "password" })\n// function-specific sample code here\n'},{lang:"python",label:"Python",source:'import LAMP\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'},{lang:"go",label:"R Script",source:'library(LAMP)\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'}],method:"get",path:"/participant/{id}/sensor_event",servers:[{url:"https://{server_url}",description:"LAMP Platform API Server",variables:{server_url:{default:"api.lamp.digital",description:"A specific API server instance (HTTPS required)."}}}],securitySchemes:{Authorization:{type:"http",scheme:"basic"}},info:{title:"LAMP Platform",version:"1.0.0",description:"See docs.lamp.digital for more.",contact:{url:"https://digitalpsych.org/",email:"team@digitalpsych.org",name:"Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center."}},postman:{name:"Query SensorEvents for a Participant.",description:{content:"List SensorEvents produced by a Participant. The deprecated name for this operation is `SensorEvent.all_by_participant`.",type:"text/plain"},url:{path:["participant",":id","sensor_event"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"origin",value:"<string>"},{description:{content:"",type:"text/plain"},key:"from",value:"<long>"},{description:{content:"",type:"text/plain"},key:"to",value:"<long>"},{description:{content:"",type:"text/plain"},key:"limit",value:"1000"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"id"}]},method:"GET",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},source:"@site/LAMP-protocol/openapi.yml",sourceDirName:".",permalink:"/api/query-sensor-events-for-a-participant",previous:{title:"Create a SensorEvent for a Participant.",permalink:"/api/create-a-sensor-event-for-a-participant"},next:{title:"List all Tags set for or by a Researcher, Study, Participant, Activity, or Sensor.",permalink:"/api/list-all-tags-set-for-or-by-a-researcher-study-participant-activity-or-sensor"}},c=[],d={toc:c};function u(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-sensorevents-for-a-participant"},"Query SensorEvents for a Participant."),(0,a.kt)("p",null,"List SensorEvents produced by a Participant. The deprecated name for this operation is ",(0,a.kt)("inlineCode",{parentName:"p"},"SensorEvent.all_by_participant"),"."),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"id"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"origin"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"from"),(0,a.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"to"),(0,a.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"limit"),(0,a.kt)("span",{style:{opacity:"0.6"}}," int64"))))),(0,a.kt)("table",{style:{display:"table",width:"100%"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"200")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Success"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"timestamp"),(0,a.kt)("span",{style:{opacity:"0.6"}}," int64"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The UNIX Epoch date-time representation of when this event was recorded: number of milliseconds since 1/1/1970 12:00 AM.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"sensor"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The type of the sensor event.")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"data"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object"),(0,a.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,a.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,a.kt)("p",null,"The item information recorded within the sensor event."))))))))))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{display:"flex"}},(0,a.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,a.kt)("code",null,"default")),(0,a.kt)("div",null,(0,a.kt)("p",null,"Error"))),(0,a.kt)("div",null,(0,a.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,a.kt)("div",null)))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("code",null,"error"),(0,a.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);