"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[510],{603905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},82804:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(487462),a=r(263366),i=(r(667294),r(603905)),l=["components"],o={},s="Create a Researcher.",c={type:"api",id:"create-a-researcher",unversionedId:"create-a-researcher",title:"Create a Researcher.",description:"",slug:"/create-a-researcher",frontMatter:{},api:{operationId:"Researcher.create",description:"This action requires system administrator privileges.",tags:["Researcher"],parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",description:"",properties:{id:{type:"string",readOnly:!0,description:"The self-referencing identifier to this object.",example:"2wp97csc3g57ptznhhkg"},name:{type:"string",description:"The name of the researcher.",example:"Harvard Psychiatry"}},required:["id","name"]}}}},responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",properties:{data:{type:"object",additionalProperties:!0}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",example:"400.bad-request"}}}}}}},security:[{Authorization:[]}],"x-code-samples":[{lang:"js",label:"JavaScript",source:'import LAMP from \'lamp-core\'\nawait LAMP.connect({ serverAddress: "api.lamp.digital", accessKey: "email@address.com", secretKey: "password" })\n// function-specific sample code here\n'},{lang:"python",label:"Python",source:'import LAMP\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'},{lang:"go",label:"R Script",source:'library(LAMP)\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'}],method:"post",path:"/researcher",servers:[{url:"https://{server_url}",description:"LAMP Platform API Server",variables:{server_url:{default:"api.lamp.digital",description:"A specific API server instance (HTTPS required)."}}}],securitySchemes:{Authorization:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{id:"2wp97csc3g57ptznhhkg",name:"Harvard Psychiatry"},info:{title:"LAMP Platform",version:"1.0.0",description:"See docs.lamp.digital for more.",contact:{url:"https://digitalpsych.org/",email:"team@digitalpsych.org",name:"Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center."}},postman:{name:"Create a Researcher.",description:{content:"This action requires system administrator privileges.",type:"text/plain"},url:{path:["researcher"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "name": "<string>",\n    "dolore7": false\n}'},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},source:"@site/LAMP-protocol/openapi.yml",sourceDirName:".",permalink:"/api/create-a-researcher",previous:{title:"View an TagSpec.",permalink:"/api/view-an-tag-spec"},next:{title:"List all Researchers.",permalink:"/api/list-all-researchers"}},p=[],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-researcher"},"Create a Researcher."),(0,i.kt)("p",null,"This action requires system administrator privileges."),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"The self-referencing identifier to this object.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"The name of the researcher.")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Success"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"default")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Error"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"error"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);