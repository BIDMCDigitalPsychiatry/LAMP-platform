"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[7729],{603905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var l=n(667294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=l.createContext({}),c=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return n?l.createElement(y,i(i({ref:e},p),{},{components:n})):l.createElement(y,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},880024:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var l=n(487462),a=n(263366),r=(n(667294),n(603905)),i=["components"],s={},o="List all TagSpecs.",c={type:"api",id:"list-all-tag-specs",unversionedId:"list-all-tag-specs",title:"List all TagSpecs.",description:"",slug:"/list-all-tag-specs",frontMatter:{},api:{operationId:"TagSpec.list",description:"List all TagSpecs.",tags:["TagSpec"],parameters:[],responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",description:"The TagSpec determines the parameters of Tags and execution of Automations.",properties:{id:{type:"string",description:"The name of the Tag, in reverse-DNS format.",example:"cortex.survey_groups"},schema:{allOf:[{type:"object",properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},readOnly:{type:"boolean",default:!1},examples:{type:"array",items:{}},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{type:"integer",minimum:0},minLength:{type:"integer",minimum:0,default:0},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#/components/schemas/JSONSchema"},items:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}}],default:!0},maxItems:{type:"integer",minimum:0},minItems:{type:"integer",minimum:0,default:0},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#/components/schemas/JSONSchema"},maxProperties:{type:"integer",minimum:0},minProperties:{type:"integer",minimum:0,default:0},required:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]},additionalProperties:{$ref:"#/components/schemas/JSONSchema"},definitions:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}]}},propertyNames:{$ref:"#/components/schemas/JSONSchema"},enum:{type:"array",items:{},minItems:1,uniqueItems:!0},type:{anyOf:[{enum:["array","boolean","integer","null","number","object","string"]},{type:"array",items:{enum:["array","boolean","integer","null","number","object","string"]},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#/components/schemas/JSONSchema"},then:{$ref:"#/components/schemas/JSONSchema"},else:{$ref:"#/components/schemas/JSONSchema"},allOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},anyOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},oneOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},not:{$ref:"#/components/schemas/JSONSchema"}},example:{type:"object",additionalProperties:!0}},{description:"The data definition of a Tag.",example:{type:"object",properties:{x:{title:"X Coordinate",type:"number",format:"double",description:"The x coordinate of the accelerometer reading.",example:1.123}}}}]}},required:["id"]}}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",example:"400.bad-request"}}}}}}},security:[{Authorization:[]}],"x-code-samples":[{lang:"js",label:"JavaScript",source:'import LAMP from \'lamp-core\'\nawait LAMP.connect({ serverAddress: "api.lamp.digital", accessKey: "email@address.com", secretKey: "password" })\n// function-specific sample code here\n'},{lang:"python",label:"Python",source:'import LAMP\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'},{lang:"go",label:"R Script",source:'library(LAMP)\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'}],method:"get",path:"/tag_spec",servers:[{url:"https://{server_url}",description:"LAMP Platform API Server",variables:{server_url:{default:"api.lamp.digital",description:"A specific API server instance (HTTPS required)."}}}],securitySchemes:{Authorization:{type:"http",scheme:"basic"}},info:{title:"LAMP Platform",version:"1.0.0",description:"See docs.lamp.digital for more.",contact:{url:"https://digitalpsych.org/",email:"team@digitalpsych.org",name:"Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center."}},postman:{name:"List all TagSpecs.",description:{content:"List all TagSpecs.",type:"text/plain"},url:{path:["tag_spec"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET",auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},source:"@site/LAMP-protocol/openapi.yml",sourceDirName:".",permalink:"/api/list-all-tag-specs",previous:{title:"Create an TagSpec.",permalink:"/api/create-an-tag-spec"},next:{title:"Update an TagSpec.",permalink:"/api/update-an-tag-spec"}},p=[],u={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"list-all-tagspecs"},"List all TagSpecs."),(0,r.kt)("p",null,"List all TagSpecs."),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Success"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The name of the Tag, in reverse-DNS format.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"schema"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"$id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"$schema"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uri"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"$ref"),(0,r.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"$comment"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"title"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"description"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"readOnly"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"examples"),(0,r.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"multipleOf"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"maximum"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"exclusiveMaximum"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"minimum"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"exclusiveMinimum"),(0,r.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"maxLength"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"minLength"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"pattern"),(0,r.kt)("span",{style:{opacity:"0.6"}}," regex"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"additionalItems"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"items"),(0,r.kt)("span",{style:{opacity:"0.6"}}," "))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"maxItems"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"minItems"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"uniqueItems"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"contains"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"maxProperties"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"minProperties"),(0,r.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"required"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"additionalProperties"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"definitions"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"properties"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"patternProperties"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"dependencies"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"propertyNames"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"enum"),(0,r.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," "))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"format"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"contentMediaType"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"contentEncoding"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"if"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"then"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"else"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"allOf"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"anyOf"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"oneOf"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"not"),(0,r.kt)("span",{style:{opacity:"0.6"}},"  (circular)")))))))))))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"default")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Error"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"error"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}m.isMDXComponent=!0}}]);