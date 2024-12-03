"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[6867],{63545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"data_science/python","title":"Preparing to Analyze Your Data in Python","description":"If you\'d like to follow along with this tutorial but don\'t have a Python development environment set up, consider using Google Collab, a free service from Google Research.","source":"@site/docs/09-data_science/04-python.md","sourceDirName":"09-data_science","slug":"/data_science/python","permalink":"/data_science/python","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/04-python.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1733233990000,"sidebarPosition":4,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"How does the LAMP Data Format Work?","permalink":"/data_science/data"},"next":{"title":"Preparing to Analyze Your Data in R","permalink":"/data_science/r"}}');var i=n(74848),r=n(28453);const s={},o="Preparing to Analyze Your Data in Python",l={},c=[{value:"Protocol methods",id:"protocol-methods",level:2},{value:"Querying sensor data",id:"querying-sensor-data",level:3},{value:"Example: Query accelerometer data",id:"example-query-accelerometer-data",level:3},{value:"Query activity event data",id:"query-activity-event-data",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"preparing-to-analyze-your-data-in-python",children:"Preparing to Analyze Your Data in Python"})}),"\n",(0,i.jsxs)(t.p,{children:["If you'd like to follow along with this tutorial but don't have a Python development environment set up, ",(0,i.jsxs)(t.strong,{children:["consider using ",(0,i.jsx)(t.a,{href:"https://colab.research.google.com/",children:"Google Collab"}),", a free service"]})," from Google Research."]}),"\n",(0,i.jsx)(t.h1,{id:"installation-and-setup",children:"Installation and Setup"}),"\n",(0,i.jsx)(t.p,{children:"First install the package."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"pip install LAMP-core\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then, import the library and connect to the server."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import LAMP\nLAMP.connect('my_email@address.com', 'my_password', 'api.lamp.digital')\n"})}),"\n",(0,i.jsx)(t.h1,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.h2,{id:"protocol-methods",children:"Protocol methods"}),"\n",(0,i.jsx)(t.p,{children:"Methods native to the LAMP API can now be called to pull data from the platform."}),"\n",(0,i.jsx)(t.p,{children:"For example, we can find all of the participants belonging to a Researcher:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"TEST_RESEARCHER = 'UmVzZWFyY2hlcjoxNjM~'\n\n[LAMP.Participant.all_by_study(study['id'])['data'] for study in LAMP.Study.all_by_researcher(TEST_RESEARCHER)['data']]\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# OUTPUT\n\n#{'data': [{'id': 'U34260565',\n#    'language': 'en',\n#    'theme': '#359FFE',\n#    'emergency_contact': None,\n#    'helpline': None},\n#   {'id': 'U33327158',\n#    'language': 'en',\n#    'theme': '#359FFE',\n#    'emergency_contact': None,\n#    'helpline': None}]}\n"})}),"\n",(0,i.jsx)(t.p,{children:"The code below will make CSV files of all the 'lamp.gps.contextual' sensor events for all participants under a given researcher id:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"import LAMP\nimport pandas as pd \nLAMP.connect(\"MY_EMAIL_ADDRESS_HERE\", \"MY_PASSWORD_HERE\")\n\nfor participant in LAMP.Participant.all_by_researcher(\"me\")['data']:\n    data = []\n    events = LAMP.SensorEvent.all_by_participant(participant['id'], origin='lamp.gps.contextual')['data']\n    for event in events:\n        data.append({\n            'timestamp': event['timestamp'],\n            'UTC time': \"\",\n            'latitude': event['data']['latitude'],\n            'longitude': event['data']['longitude'],\n            'altitude': 1.0,\n            'accuracy': 1.0\n        })\n    # Don't make CSV files for participants without any `lamp.gps.contextual` events.\n    if len(data) > 0:\n        pd.DataFrame.from_dict(data, orient='columns').to_csv(f\"{participant['id']}.csv\", index=False)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"querying-sensor-data",children:"Querying sensor data"}),"\n",(0,i.jsx)(t.p,{children:'Query sensor data with "all_by_participant"'}),"\n",(0,i.jsx)(t.p,{children:'Specify a sensor with "origin". If no origin is passed, it will try to query all sensors'}),"\n",(0,i.jsx)(t.p,{children:"Note that due to device or user specification, some spensors may not have data"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'# Full sensor specs at https://docs.lamp.digital/Data-Types-99b045852c7b406f87c124b927fe95fa\n\n# Please note that no GPS data has been included with these dummy profiles\n\nparticipant_1 = "U5704591513"\nlamp_sensors = ["lamp.accelerometer", "lamp.accelerometer.motion", "lamp.analytics", \n           "lamp.blood_pressure", "lamp.bluetooth", "lamp.calls", "lamp.distance",\n           "lamp.flights", "lamp.gps", "lamp.gps.contextual", "lamp.gyroscope",\n           "lamp.heart_rate", "lamp.height", "lamp.magnetometer", "lamp.respiratory_rate"\n           "lamp.screen_state","lamp.segment", "lamp.sleep", "lamp.steps",\n           "lamp.weight", "lamp.wifi"]\n\nLAMP.SensorEvent.all_by_participant(participant_1, origin="lamp.bluetooth")[\'data\'][:5]#, origin="lamp.calls")\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"[{'timestamp': 1578863459719,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -71}},\n {'timestamp': 1578863459533,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -74}},\n {'timestamp': 1578863459196,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -60}},\n {'timestamp': 1578863459167,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': 'YyTeKHTPetzGdC0j2EPJ9-VJ9FxafDpHd34MA41BQDKSt1Q4B7vtuFJZpN7_JTOKnDycjRcA3ik8pYwcrfFGlQ==',\n   'RSSI': -98}},\n {'timestamp': 1578863458989,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': 'lYcGRvQlyI9Gq8Yqu1wDX8mOQJDBzIMnnGS9UsVxsrsmKWb1nFOY0tLLAE8VTzJ83GeJaBhmnhpL8weRv7A96Q==',\n   'RSSI': -97}}]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"example-query-accelerometer-data",children:"Example: Query accelerometer data"}),"\n",(0,i.jsx)(t.p,{children:'Accelerometer data points are SensorEvents with the origin "lamp.accelerometer".'}),"\n",(0,i.jsxs)(t.p,{children:["See LAMP-py documentation at\xa0",(0,i.jsx)(t.a,{href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-py",children:"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"}),"\xa0for further API details."]}),"\n",(0,i.jsx)(t.p,{children:'Query responses are limtied to 1000 entries. In the event that there are more than 1000 events for a given sensor, the most recent 1000 events are returned. To access more data\u2014or to query during a specific time range\u2014you must use the "_to" and "from" parameters'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"# '_from' and 'to' are UNIX timestamps\nparticipant_accel_tr = LAMP.SensorEvent.all_by_participant(participant_1, \n                                                           origin=\"lamp.accelerometer\",\n                                                           _from=1577735460618,\n                                                           to=1577735460737)\nparticipant_accel_tr['data']\n"})}),"\n",(0,i.jsx)(t.h3,{id:"query-activity-event-data",children:"Query activity event data"}),"\n",(0,i.jsx)(t.p,{children:"Surveys are ActivityEvents, with each survey type defined as an Activity"}),"\n",(0,i.jsx)(t.p,{children:"'duration' is the survey completion time, in ms"}),"\n",(0,i.jsx)(t.p,{children:"'activity' is the Activity id"}),"\n",(0,i.jsx)(t.p,{children:"'temporal_slices' contains responses for each survey question"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"LAMP.ActivityEvent.all_by_participant(participant_1)['data'][0]\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# {'timestamp': 1600557560000,\n#  'duration': 15000,\n#  'activity': '16fnz109gs4sehyfc84n',\n#  'static_data': {},\n#  'temporal_slices': [{'item': 'How did you feel this week?',\n#    'value': 'Okay',\n#    'type': 'valid',\n#    'duration': 5000,\n#    'level': None},\n#   {'item': 'Have you been admitted to the hospital for psychiatric reasons in the past week?',\n#    'value': 'No',\n#    'type': 'valid',\n#    'duration': 7000,\n#    'level': None},\n#   {'item': 'Use this space to write down your thoughts and feelings about the week. ',\n#    'value': 'it was okay',\n#    'type': 'valid',\n#    'duration': 3000,\n#    'level': None}]}\n"})}),"\n",(0,i.jsx)(t.p,{children:"Details of the 'activity can be be viewed the following method"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"LAMP.Activity.view('16fnz109gs4sehyfc84n')\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);