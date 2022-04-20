"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[9807],{603905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},752622:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(487462),a=r(263366),o=(r(667294),r(603905)),i=["components"],c={},u="Secondary Feature Overview",s={unversionedId:"data_science/cortex/features/secondary/overview",id:"data_science/cortex/features/secondary/overview",title:"Secondary Feature Overview",description:'Secondary features are dervived from primary features, raw data, or a combination of both. They are designed to produce a single value per time window (i.e. time spent at home per day, etc). Thus, the data will be a list of dictionaries with keys "timestamp" and "value."',source:"@site/docs/09-data_science/06-cortex/05-features/02-secondary/01-overview.md",sourceDirName:"09-data_science/06-cortex/05-features/02-secondary",slug:"/data_science/cortex/features/secondary/overview",permalink:"/data_science/cortex/features/secondary/overview",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/01-overview.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1650470979,formattedLastUpdatedAt:"4/20/2022",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Trips",permalink:"/data_science/cortex/features/primary/trips"},next:{title:"Bluetooth Device Count",permalink:"/data_science/cortex/features/secondary/bluetooth_device_count"}},d=[],l={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"secondary-feature-overview"},"Secondary Feature Overview"),(0,o.kt)("p",null,'Secondary features are dervived from primary features, raw data, or a combination of both. They are designed to produce a single value per time window (i.e. time spent at home per day, etc). Thus, the data will be a list of dictionaries with keys "timestamp" and "value."'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Values for every single timestamp from start to end by resolution will be computed."),(0,o.kt)("li",{parentName:"ul"},"Periods with no raw data will return None.")))}p.isMDXComponent=!0}}]);