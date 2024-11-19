"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[104],{82781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"data_science/cortex/features/secondary/trip_distance","title":"Trip Distance","description":"computed from primary feature: cortex.primary.trips","source":"@site/docs/09-data_science/06-cortex/05-features/02-secondary/15-trip_distance.md","sourceDirName":"09-data_science/06-cortex/05-features/02-secondary","slug":"/data_science/cortex/features/secondary/trip_distance","permalink":"/data_science/cortex/features/secondary/trip_distance","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/02-secondary/15-trip_distance.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1732047474000,"sidebarPosition":15,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Survey Results","permalink":"/data_science/cortex/features/secondary/survey_results"},"next":{"title":"Trip Duration","permalink":"/data_science/cortex/features/secondary/trip_duration"}}');var i=r(74848),s=r(28453);const a={},c="Trip Distance",d={},o=[{value:"Description",id:"description",level:4},{value:"Optional or required kwargs",id:"optional-or-required-kwargs",level:4},{value:"Data",id:"data",level:4},{value:"Example",id:"example",level:4}];function l(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"trip-distance",children:"Trip Distance"})}),"\n",(0,i.jsxs)(t.p,{children:["computed from primary feature: ",(0,i.jsx)(t.code,{children:"cortex.primary.trips"}),"\ncomputed from raw feature: ",(0,i.jsx)(t.code,{children:"cortex.raw.gps"})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Trip Distance is the total distance traveled on all trips in a period of time."}),"\n",(0,i.jsx)(t.h4,{id:"optional-or-required-kwargs",children:"Optional or required kwargs"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"start"}),": (int, units: ms) the start time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"end"}),": (int, units: ms) the end time."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"resolution"}),": (int, units: ms) the resolution over which to compute features."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"data",children:"Data"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"timestamp"}),": (int, units: ms) the start time of each bin of size ",(0,i.jsx)(t.code,{children:"kwargs['resolution']"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"value"}),": (float, units: km) the trip distance."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markdown",children:'cortex.secondary.trip_distance.trip_distance(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)\n'})}),"\n",(0,i.jsx)(t.p,{children:"Output:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-markdown",children:"{\n  'timestamp': 0,\n  'duration': 5616000000,\n  'resolution': 86400000,\n  'data': [\n           {'timestamp': 1607072400000, 'value': 0.018896610358911157},\n           {'timestamp': 1607331600000, 'value': None},\n                 .\n                 .\n                 .\n           {'timestamp': 1609232400000, 'value': 0.0228039384631051243}\n          ]\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);