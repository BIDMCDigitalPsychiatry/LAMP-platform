"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[4159],{603905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},238011:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=a(487462),n=a(263366),i=(a(667294),a(603905)),o=["components"],s={},l="Basic Analysis",c={unversionedId:"data_science/cortex/visualizations/basic_analysis",id:"data_science/cortex/visualizations/basic_analysis",title:"Basic Analysis",description:"There are some basic analyses that are useful for exploring study data. The Jupyter Notebook cortex/visualizations/correlation_plots.ipynb has code to:",source:"@site/docs/09-data_science/06-cortex/06-visualizations/02-basic_analysis.md",sourceDirName:"09-data_science/06-cortex/06-visualizations",slug:"/data_science/cortex/visualizations/basic_analysis",permalink:"/data_science/cortex/visualizations/basic_analysis",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/06-visualizations/02-basic_analysis.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1650470979,formattedLastUpdatedAt:"4/20/2022",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Data Quality",permalink:"/data_science/cortex/visualizations/data-quality"},next:{title:"General functions",permalink:"/data_science/cortex/utils/general_functions"}},u=[{value:"Data",id:"data",children:[{value:"Survey data",id:"survey-data",children:[],level:4},{value:"Passive data",id:"passive-data",children:[],level:4},{value:"Other features",id:"other-features",children:[],level:4}],level:3},{value:"Analysis",id:"analysis",children:[{value:"Correlations",id:"correlations",children:[],level:4},{value:"Comparison across groups",id:"comparison-across-groups",children:[],level:4},{value:"Logistic regression model",id:"logistic-regression-model",children:[],level:4}],level:3}],d={toc:u};function p(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-analysis"},"Basic Analysis"),(0,i.kt)("p",null,"There are some basic analyses that are useful for exploring study data. The Jupyter Notebook cortex/visualizations/correlation_plots.ipynb has code to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Score survey data and save it into a user specified directory."),(0,i.kt)("li",{parentName:"ol"},"Load survey data, passive data features, and any other researcher-generated features to generate correlation plots."),(0,i.kt)("li",{parentName:"ol"},"Compare features across groups of interest."),(0,i.kt)("li",{parentName:"ol"},"Fit a basic logistic regression model to predict the participants group based on the features.")),(0,i.kt)("p",null,"While these functionalities are by no means comprehensive, they can provide a starting place for further exploration."),(0,i.kt)("h3",{id:"data"},"Data"),(0,i.kt)("h4",{id:"survey-data"},"Survey data"),(0,i.kt)("p",null,"Surveys are scored using Cortex's score_surveys() function. Results are saved by survey category by participant in individual csv files. Each csv file will have a column for the timestamp as well as columns for each question in the survey and a total score."),(0,i.kt)("h4",{id:"passive-data"},"Passive data"),(0,i.kt)("p",null,"Passive data should be processed prior to analysis. cortex.run() can be used to generate the file format required. In particular, secondary features should be in pickle files with a column for timestamp and a column for the value of the secondary feature."),(0,i.kt)("h4",{id:"other-features"},"Other features"),(0,i.kt)("p",null,'Additional data can come in the form of "global" data or data that holds true across the entirety of the study (ex: number of activities, age). These features should be stored in a csv file called participantId_other_global_features.csv where each column of the dataframe is a differnet global feature. Each column that you would like to be used in analysis should be listed in the list OTHER_GLOBAL_FEATS. '),(0,i.kt)("p",null,'Other local features are "local" in time. These features look just like survey or passive data in that they will have a timestamp column (in ms) as well as columns for each feature. The file can be named anything, and the name of the file may or may not be in the columns. Using this filename, files will be saved in SURVEY_DIR as participantID_filename.csv. OTHER_LOCAL_FEATS should be a list of all of these file names. Then you must specify which columns in each file that should be usef in analysis. An example of how to do this in OTHER_LOCAL_SUBFEATS is shown below.'),(0,i.kt)("h3",{id:"analysis"},"Analysis"),(0,i.kt)("p",null,"For example, we could look at GAD-7 questions, sleep duration, and some passive data features from one of our studies. These example features are listed below."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(655949).Z})),(0,i.kt)("h4",{id:"correlations"},"Correlations"),(0,i.kt)("p",null,"Using these features, we could then produce a correlation map. The * indicate signficant correlations (p < 0.05, corrected for multiple comparisons)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(939785).Z})),(0,i.kt)("h4",{id:"comparison-across-groups"},"Comparison across groups"),(0,i.kt)("p",null,"We could then look at whether these features differed among participants that improved over the course of the study. Significantly different groups based on a t-test (p < 0.05, corrected for multiple comparisons) are marked with *. Entropy, home time, and GPS data quality differ between the group that did and did not improve. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(638408).Z})),(0,i.kt)("h4",{id:"logistic-regression-model"},"Logistic regression model"),(0,i.kt)("p",null,"Finally, we fit a logistic regression model to predict which participants improved. The model achieved an AUC of 0.862 and had three non-zero coefficients:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Feature"),(0,i.kt)("th",{parentName:"tr",align:null},"Coefficient"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"entropy"),(0,i.kt)("td",{parentName:"tr",align:null},"0.468")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"screen_duration"),(0,i.kt)("td",{parentName:"tr",align:null},"0.212")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sleep_duration"),(0,i.kt)("td",{parentName:"tr",align:null},"0.223")))),(0,i.kt)("p",null,"From here, we can take a deeper look at why some features may be different across groups or investigate the relationships between correlated variables. The goal of these visualizations is to provide a starting point for further analysis."))}p.isMDXComponent=!0},638408:function(e,t,a){t.Z=a.p+"assets/images/comp_feats-a7a5519327c7069a6196a7e7a15565fe.png"},939785:function(e,t,a){t.Z=a.p+"assets/images/corr_example-d4c0b8af34386d4e82b07f52ea56c270.png"},655949:function(e,t,a){t.Z=a.p+"assets/images/corr_key-976b0f6d56c508bb260ba52e313c05b2.png"}}]);