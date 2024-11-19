"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[8189],{76572:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"data_science/cortex/visualizations/data_quality","title":"Data Quality","description":"Why care about passive data?","source":"@site/docs/09-data_science/06-cortex/06-visualizations/01-data_quality.md","sourceDirName":"09-data_science/06-cortex/06-visualizations","slug":"/data_science/cortex/visualizations/data_quality","permalink":"/data_science/cortex/visualizations/data_quality","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/06-visualizations/01-data_quality.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1732047474000,"sidebarPosition":1,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Sleep Duration","permalink":"/data_science/cortex/features/secondary/deprecated_features/sleep_duration"},"next":{"title":"Basic Analysis","permalink":"/data_science/cortex/visualizations/basic_analysis"}}');var n=t(74848),s=t(28453);const r={},c="Data Quality",d={},l=[{value:"Why care about passive data?",id:"why-care-about-passive-data",level:2},{value:"1) Activity counts over the last week:",id:"1-activity-counts-over-the-last-week",level:3},{value:"2) A measure of screen, GPS, and accelerometer quality over the past week:",id:"2-a-measure-of-screen-gps-and-accelerometer-quality-over-the-past-week",level:3},{value:"3) Average screen time, steps, and home time over the past week, as a sanity check:",id:"3-average-screen-time-steps-and-home-time-over-the-past-week-as-a-sanity-check",level:3},{value:"Where are the graphs I&#39;ve generated?",id:"where-are-the-graphs-ive-generated",level:3},{value:"Additional functions",id:"additional-functions",level:2},{value:"<code>visualizations.data_quality.make_survey_count_graph_by_name()</code>",id:"visualizationsdata_qualitymake_survey_count_graph_by_name",level:3},{value:"Args",id:"args",level:4},{value:"Example",id:"example",level:4},{value:"<code>visualizations.data_quality.make_percent_completion_graph()</code>",id:"visualizationsdata_qualitymake_percent_completion_graph",level:3},{value:"Args",id:"args-1",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>visualizations.data_quality.clear_chart()</code>",id:"visualizationsdata_qualityclear_chart",level:3},{value:"Args",id:"args-2",level:4},{value:"Example",id:"example-2",level:4}];function o(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"data-quality",children:"Data Quality"})}),"\n",(0,n.jsx)(a.h2,{id:"why-care-about-passive-data",children:"Why care about passive data?"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"It is collected continuously, in the background."}),"\n",(0,n.jsx)(a.li,{children:"It can be used to help understand behaviors."}),"\n",(0,n.jsx)(a.li,{children:"Correlations with survey data can provide interesting insights."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Missing data is problematic because it will affect the validity of passive features. There are multiple reasons you could have low data collection including:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Permissions not set properly"}),"\n",(0,n.jsx)(a.li,{children:"Low battery"}),"\n",(0,n.jsx)(a.li,{children:"App has not been used in a while"}),"\n",(0,n.jsx)(a.li,{children:"Remote area (for GPS)"}),"\n",(0,n.jsx)(a.li,{children:"Phone not in use (OS turns off data collection)"}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"As such, it is important to monitor data to ensure that you have enough data to create good quality features. If you have participants with low data, you can follow up and try to resolve the issue. We have created visualizations that can be attached to your Data Portal on the Dashboard to provide a summary of your participant's data. These include:"}),"\n",(0,n.jsx)(a.h3,{id:"1-activity-counts-over-the-last-week",children:"1) Activity counts over the last week:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(60467).A+"",width:"1294",height:"664"})}),"\n",(0,n.jsx)(a.h3,{id:"2-a-measure-of-screen-gps-and-accelerometer-quality-over-the-past-week",children:"2) A measure of screen, GPS, and accelerometer quality over the past week:"}),"\n",(0,n.jsx)(a.p,{children:"The graph has tool tips. If you hover over a colored block in the graph it will tell you the computed data frequency (percentage of hours with data) as well as any days where the participant had no data."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(62571).A+"",width:"1408",height:"192"})}),"\n",(0,n.jsx)(a.h3,{id:"3-average-screen-time-steps-and-home-time-over-the-past-week-as-a-sanity-check",children:"3) Average screen time, steps, and home time over the past week, as a sanity check:"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{src:t(65560).A+"",width:"1154",height:"668"}),"\n",(0,n.jsx)(a.img,{src:t(14634).A+"",width:"1170",height:"668"}),"\n",(0,n.jsx)(a.img,{src:t(17351).A+"",width:"1160",height:"670"})]}),"\n",(0,n.jsx)(a.p,{children:"To generate these graphs, you can either call a function from Cortex, or download the source code from Github and run a bash script."}),"\n",(0,n.jsx)(a.p,{children:'To use the Cortex function, make sure that Cortex is installed. Then use the following code (substituting "researcher_id" with your own ID):'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"import cortex\ncortex.visualizations.data_quality.data_quality(researcher_id)\n"})}),"\n",(0,n.jsx)(a.p,{children:"To run the bash script, first clone the cortex repository from source:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"git clone https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex.git\n"})}),"\n",(0,n.jsx)(a.p,{children:'Then from inside the LAMP-cortex folder run the bash script (substituting "researcher_id" with your own ID):'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'./cortex/visualizations/run_data_quality.sh "researcher_id"\n'})}),"\n",(0,n.jsx)(a.h3,{id:"where-are-the-graphs-ive-generated",children:"Where are the graphs I've generated?"}),"\n",(0,n.jsx)(a.p,{children:'Graphs are attached to the Data Portal. To Navigate to the Data Portal, go to the Dashboard and click "Data Portal" on the left hand side:'}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(25361).A+"",width:"2872",height:"1280"})}),"\n",(0,n.jsx)(a.p,{children:'Search for and select your researcher. Then toggle the button next to "Analyze participant data" to see the researcher graphs.'}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(69064).A+"",width:"2872",height:"1526"})}),"\n",(0,n.jsx)(a.p,{children:"Here, under graphs.data_quality, you should see the three graphs shown above: activity counts, passive features, and quality tags (along with any others you may have created). You can click on the buttons to view each graph."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(22275).A+"",width:"2872",height:"1530"})}),"\n",(0,n.jsx)(a.p,{children:"For more information, please go to the Data Portal section of the documentation."}),"\n",(0,n.jsx)(a.h2,{id:"additional-functions",children:"Additional functions"}),"\n",(0,n.jsx)(a.p,{children:"We have added a couple of additional functions that can be used for more specialized situations. They are listed below and can be adapted to fit the needs of your specific study."}),"\n",(0,n.jsx)(a.h3,{id:"visualizationsdata_qualitymake_survey_count_graph_by_name",children:(0,n.jsx)(a.code,{children:"visualizations.data_quality.make_survey_count_graph_by_name()"})}),"\n",(0,n.jsx)(a.p,{children:"Creates a graph of the counts for a specific survey / activity."}),"\n",(0,n.jsx)(a.h4,{id:"args",children:"Args"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"participants"}),": (list of strings) the list of participant ids and names. ",(0,n.jsx)(a.code,{children:"visualizations.data_quality.get_parts(researcher_id)"})," can be used to generate a list."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"researcher_id"}),": (string) the name of the researcher id to attach the graph to."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"name"}),": (list of strings) the exact name of the survey."]}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-markdown",children:'part_list = [{"participant_id": "U11111111", "study_name": "participant1"},\n             {"participant_id": "U11111112", "study_name": "participant2"},\n             {"participant_id": "U11111113", "study_name": "participant3"},]\nvisualizations.data_quality.make_survey_count_graph_by_name(participants=part_list, researcher_id="abcdefg1234", name="Morning Daily Survey")\n'})}),"\n",(0,n.jsx)(a.h3,{id:"visualizationsdata_qualitymake_percent_completion_graph",children:(0,n.jsx)(a.code,{children:"visualizations.data_quality.make_percent_completion_graph()"})}),"\n",(0,n.jsx)(a.p,{children:"Creates a graph for the percent of required activities completed. Required activities are specified in the spec (see example below)."}),"\n",(0,n.jsx)(a.h4,{id:"args-1",children:"Args"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"spec"}),": (dict) the specification dict. This includes information about which activities and how many the participant should have completed in the last X days. If a study / researcher id is given, it will be exapanded to the participant level. Please see the example below."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"researcher_id"}),": (string) the name of the researcher id to attach the graph to."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"name"}),": (list of strings) the name of the graph."]}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"example-1",children:"Example"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-markdown",children:'mod_dict = [\n                   {\n                       "activity_name": "Mindfulness",\n                       "count": 3,\n                       "time_interval": MS_IN_DAY * 5\n                   },\n                   {\n                       "activity_name": "Morning Daily Survey",\n                       "count": 7,\n                       "time_interval": MS_IN_DAY * 7\n                   }\n            ]\nmod_dict_2 = [\n                   {\n                       "activity_name": "Weekly Survey",\n                       "count": 1,\n                       "time_interval": MS_IN_DAY * 7\n                   },\n                   {\n                       "activity_name": "Morning Daily Survey",\n                       "count": 7,\n                       "time_interval": MS_IN_DAY * 7\n                   }\n            ]\nspec = {"U2134213402": mod_dict,\n        "U3372337202": mod_dict,\n        "qwifh12839": mod_dict_2,\n       }\nvisualizations.data_quality.make_percent_completion_graph(spec=spec, researcher_id="abcdefg1234", name="activity_completion")\n'})}),"\n",(0,n.jsx)(a.p,{children:'In this example, participants "U2134213402" and "U3372337202" were required to complete 3 "Mindfulness" activites in the past 5 days. All participants under the "qwifh12839" study were required to complete 1 "Weekly Survey" and 7 "Morning Daily Survey" activities in the past week.'}),"\n",(0,n.jsx)(a.h3,{id:"visualizationsdata_qualityclear_chart",children:(0,n.jsx)(a.code,{children:"visualizations.data_quality.clear_chart()"})}),"\n",(0,n.jsx)(a.p,{children:"Removes a chart from a researcher's Data Portal page."}),"\n",(0,n.jsx)(a.h4,{id:"args-2",children:"Args"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"researcher_id"}),": (string) the name of the researcher id where the graph is attached."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"name"}),": (list of strings) the name of the graph."]}),"\n"]}),"\n",(0,n.jsx)(a.h4,{id:"example-2",children:"Example"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-markdown",children:'visualizations.data_quality.clear_chart(researcher_id="abcdefg1234", name="data_quality_graph")\n'})})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},60467:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/activities_qual_viz-0d01b21d3c82cc45abb2d01f2204c85f.png"},25361:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/data_portal_viz0-e2944d3872bbf83e9d6b16fc462a2dc4.png"},69064:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/data_portal_viz1-81b3f0ea979f939c3aacca4c4b3154d4.png"},22275:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/data_portal_viz2-f8dccebfe96aa85b856e8ba3041760ee.png"},65560:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/hometime_qual_viz-5d049ab94ace930cb51cd6bd27759505.png"},14634:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/screen_dur_qual_viz-a97fd67e9a0ed9ddbc629e027e120b97.png"},17351:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/steps_qual_viz-245aa42d0beeff20f1edbcc62d91d69b.png"},62571:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/tags_qual_viz-1e08da92d16e4142525aeb3ebc3977b6.png"},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>c});var i=t(96540);const n={},s=i.createContext(n);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);