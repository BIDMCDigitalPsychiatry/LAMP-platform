"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[8865],{90500:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"data_science/cortex/utils/notifications","title":"Notifications","description":"These functions provide code for sending email, slack, and push notifications (to participants or study personnel). In order to use them you must configure either a Slack webhook (for Slack) or push API key and push gateway (for device notifcations and email).","source":"@site/docs/09-data_science/06-cortex/07-utils/06-notifications.md","sourceDirName":"09-data_science/06-cortex/07-utils","slug":"/data_science/cortex/utils/notifications","permalink":"/data_science/cortex/utils/notifications","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/07-utils/06-notifications.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1732047474000,"sidebarPosition":6,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Database functions","permalink":"/data_science/cortex/utils/database"},"next":{"title":"Miscellaneous","permalink":"/data_science/cortex/utils/miscellaneous"}}');var s=n(74848),a=n(28453);const l={},o="Notifications",c={},d=[{value:"<code>utils.notifications.push_email</code>",id:"utilsnotificationspush_email",level:2},{value:"Args",id:"args",level:4},{value:"Example",id:"example",level:4},{value:"<code>utils.notifications.send_push_notification</code>",id:"utilsnotificationssend_push_notification",level:2},{value:"Args",id:"args-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>utils.notifications.slack</code>",id:"utilsnotificationsslack",level:2},{value:"Args",id:"args-2",level:4},{value:"Example",id:"example-2",level:4}];function r(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"notifications",children:"Notifications"})}),"\n",(0,s.jsxs)(i.p,{children:["These functions provide code for sending email, slack, and push notifications (to participants or study personnel). In order to use them you must configure either a Slack webhook (for Slack) or push API key and push gateway (for device notifcations and email).\nFor slack, please refer to the instructions on creating a webhook ",(0,s.jsx)(i.a,{href:"https://slack.com/help/articles/115005265063-Incoming-webhooks-for-Slack",children:"here"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"utilsnotificationspush_email",children:(0,s.jsx)(i.code,{children:"utils.notifications.push_email"})}),"\n",(0,s.jsx)(i.p,{children:"Send an email. Support email, push API key, and push gateway must be set for sending emails."}),"\n",(0,s.jsx)(i.h4,{id:"args",children:"Args"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"email"}),": (str) the email to push the message to."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"content"}),': (str) the content of the message. Subject and body should be split by a new line (ex: "email subject\\nemail text").']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"push_api_key"}),": (str, default: None) the API key, will be pulled from the environment variable ('PUSH_API_KEY') if None."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"push_gateway"}),": (str, default: None) the gateway, will be pulled from the environment variable ('PUSH_GATEWAY') if None."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"support_email"}),": (str, default: None) the email to send from. This email will also be cc'd."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"debug_mode"}),": (boolean, default: False) if set, notifications will be logged and not sent."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-markdown",children:"cortex.notifications.push_email('fakeemail0@lamp.com','Hello\\nHi,<br><br>This is a test email. Have a great day.')\n"})}),"\n",(0,s.jsx)(i.h2,{id:"utilsnotificationssend_push_notification",children:(0,s.jsx)(i.code,{children:"utils.notifications.send_push_notification"})}),"\n",(0,s.jsx)(i.p,{children:"Send a push notification to a participant. Push API key and push gateway must be set."}),"\n",(0,s.jsx)(i.h4,{id:"args-1",children:"Args"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"device"}),": (str) the device to send the message to. This information can be found using ",(0,s.jsx)(i.code,{children:"LAMP.analytics"})," (please see the example)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"content"}),": (str) the content of the message."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"push_api_key"}),": (str, default: None) the API key, will be pulled from the environment variable ('PUSH_API_KEY') if None."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"push_gateway"}),": (str, default: None) the gateway, will be pulled from the environment variable ('PUSH_GATEWAY') if None."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"expiry"}),": (int, units: ms, default: 86400000): how long before the notification expires."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"debug_mode"}),": (boolean, default: False) if set, notifications will be logged and not sent."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-markdown",children:"analytics = LAMP.SensorEvent.all_by_participant(participant_id, origin=\"lamp.analytics\")['data']\nall_devices = [event['data'] for event in analytics if 'device_token' in event['data']]\nif len(all_devices) > 0:\n    device = f\"{'apns' if all_devices[0]['device_type'] == 'iOS' else 'gcm'}:{all_devices[0]['device_token']}\"\ncortex.notifications.send_push_notification(device, 'Hello, this is a test notification. Have a great day.')\n"})}),"\n",(0,s.jsx)(i.h2,{id:"utilsnotificationsslack",children:(0,s.jsx)(i.code,{children:"utils.notifications.slack"})}),"\n",(0,s.jsx)(i.p,{children:"Send a slack. Slack webhook must be set for sending slack messages."}),"\n",(0,s.jsx)(i.h4,{id:"args-2",children:"Args"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"message"})," (str): the content of the message."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"slack_webhook"}),": (str, default: None) the slack webhook, will be pulled from the environment variable ('SLACK_WEBHOOK') if None."]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-markdown",children:"cortex.notifications.slack('This is a test slack. Have a great day.')\n"})})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var t=n(96540);const s={},a=t.createContext(s);function l(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);