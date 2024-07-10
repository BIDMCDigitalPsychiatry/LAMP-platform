"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[2840],{

/***/ 15680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xA: () => (/* binding */ MDXProvider),
/* harmony export */   yg: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 1723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15680);
const frontMatter={};const contentTitle='Who\'s using LAMP?';const metadata={"unversionedId":"about/users","id":"about/users","title":"Who's using LAMP?","description":"BIDMC Anesthesiology and Surgery","source":"@site/docs/03-about/02-users.md","sourceDirName":"03-about","slug":"/about/users","permalink":"/about/users","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/03-about/02-users.md","tags":[],"version":"current","lastUpdatedBy":"jtorous","lastUpdatedAt":1720572283,"formattedLastUpdatedAt":"7/10/2024","sidebarPosition":2,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"How does LAMP Platform Work?","permalink":"/about/intro"},"next":{"title":"Publications with LAMP","permalink":"/about/publications"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'BIDMC Anesthesiology and Surgery',id:'bidmc-anesthesiology-and-surgery',children:[],level:2},{value:'BIDMC Neurology',id:'bidmc-neurology',children:[],level:2},{value:'Boston University',id:'boston-university',children:[],level:2},{value:'California State University Northridge',id:'california-state-university-northridge',children:[],level:2},{value:'Cambridge Health Alliance',id:'cambridge-health-alliance',children:[],level:2},{value:'Henry Ford Behavioral Health Services',id:'henry-ford-behavioral-health-services',children:[],level:2},{value:'LA County Department of Mental Health',id:'la-county-department-of-mental-health',children:[],level:2},{value:'Massachusetts Psychosis Network for Early Treatment (MAPNET)',id:'massachusetts-psychosis-network-for-early-treatment-mapnet',children:[],level:2},{value:'Mayo Clinic',id:'mayo-clinic',children:[],level:2},{value:'McGill University',id:'mcgill-university',children:[],level:2},{value:'Uninersity of Michigan Medicine',id:'uninersity-of-michigan-medicine',children:[],level:2},{value:'Monash University',id:'monash-university',children:[],level:2},{value:'National Institute for Mental Health Collaboration',id:'national-institute-for-mental-health-collaboration',children:[],level:2},{value:'National Institute of Mental Health and Neurosciences',id:'national-institute-of-mental-health-and-neurosciences',children:[],level:2},{value:'New Hampshire State Hospital',id:'new-hampshire-state-hospital',children:[],level:2},{value:'Shanghai Mental Health',id:'shanghai-mental-health',children:[],level:2},{value:'Stony Brook University',id:'stony-brook-university',children:[],level:2},{value:'The Medical University of Varna',id:'the-medical-university-of-varna',children:[],level:2},{value:'Unity Health Toronto',id:'unity-health-toronto',children:[],level:2},{value:'University College London',id:'university-college-london',children:[],level:2},{value:'University of California San Diego',id:'university-of-california-san-diego',children:[],level:2},{value:'University of Nebraska Medical Center',id:'university-of-nebraska-medical-center',children:[],level:2},{value:'University of Ottawa',id:'university-of-ottawa',children:[],level:2},{value:'University of Oxford',id:'university-of-oxford',children:[],level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"whos-using-lamp"},`Who's using LAMP?`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"bidmc-anesthesiology-and-surgery"},`BIDMC Anesthesiology and Surgery`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Boston, Massachusetts, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`The goal of the study is to help to understand the different anesthetic options available prior to surgery, increase patient engagement and encourage shared decision making with their surgical team... Our MAC Decision Aid research is being conducted using a smartphone app LAMP platform, created by a multidisciplinary team at Beth Israel Deaconess Medical Center for research without commercial involvement. Subjects who consented for the study are taught how to download and use the app. They are asked to complete pre-survey, read about monitored anesthesia care and then complete post-survey. Preliminary data (10 patients of 100) demonstrates that an electronic based educational and assessment system is feasible.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"bidmc-neurology"},`BIDMC Neurology`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Boston, Massachusetts, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`Currently paused due to COVID-19`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"boston-university"},`Boston University`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Boston, Massachusetts, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`The objective of our research using the mindLAMP app is to understand how one’s internal and contextual experience shapes cognitive function from moment to moment. Our current work involves smartphone assessment of cognition and context in young adults as well as individuals with Parkinson’s disease. Our hope is through digital phenotyping we can determine how patterns of fluctuation can help improve clinical diagnosis and point us towards personalized and precision interventions.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`To learn more, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"https://www.bu.edu/ihsip/2019/09/17/cognitive-testing-in-the-wild/"},`you can read this article`),` published by `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"https://www.bu.edu/neuropsychology/lab-members/emma-weizenbaum-ma/"},`Emma Weizenbaum, MA`),`. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("summary",null," Related publications. "),"- **Abstract:** Assessing the convergence between smartphone- and lab-based neuropsychological assessment",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`**Authors:** Emma Weizenbaum, Alice Cronin-Golomb, John Torous, Daniel Fulford

**Objective:** Current methods of neuropsychological assessment are time-intensive and costly, which limits access. Further, they do not capture intraindividual variation in cognition across time (day-to-day, hour-to-hour) and context (e.g., mood, environment). Repeated assessment using smartphones represents a potential solution to these limitations, but validation is needed across populations and cognitive domains. In this study we assess the convergent validity of smartphone-based tests by examining relations with standard neuropsychological assessments and self-reported executive dysfunction in young adults (YAs) and individuals with Parkinson’s disease (PD).

**Participants and Methods:** 179 YAs (undergraduate students) and 20 persons with PD completed self-report questionnaires at baseline, including the Behavior Rating Inventory of Executive Function (BRIEF-A). Over the following 10 days they were prompted 5x/day to complete smartphone-based assessments of working memory (Backwards Spatial Span) and complex attention (Trails-B). PD participants completed lab-based equivalents of these tests, WMS-III Spatial Span and Trails A & B, along with the MoCA, at baseline. We examined associations between lab- and smartphone-based measures using multilevel modeling to account for clustering of observations within people. Lab-based measures were entered as fixed effect predictors of variance in smartphone-based assessments.

**Results:** BRIEF ratings in both YA and PD samples did not predict smartphone-based assessments nor lab-based measures in PD. In the PD sample, Trails-B at baseline predicted significant variance in smartphone-based Trails-B scores (*p*=0.03); Backwards Spatial Span score at baseline showed a trend association with Backwards Spatial Span as measured by smartphone (*p*=0.11). MoCA score at baseline also showed a trend association with smartphone-based Trails-B (*p*=0.05) and Backwards Spatial Span (*p*=0.08) scores.

**Conclusions** We provide preliminary evidence of convergent validity between smartphone-based assessments of complex attention and working memory and traditional neuropsychological tests in people with PD. Self-report of executive dysfunction did not relate to objective lab- or smartphone-based measures. These findings pave the way for a new era of more personalized assessment of cognition in real-world settings, with potential for more precise diagnosis and treatment.
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`Abstract:`),` Mobile cognitive assessment via smartphones: Studying how context shapes cognition in young adults and persons with Parkinson’s disease`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"li"},` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`Authors`),` Emma Weizenbaum, Alice Cronin-Golomb, Emma L. Pinsky, John Torous, Daniel Fulford`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"li"},` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`Objective:`),` Cognition fluctuates depending on state and context. Capturing diagnostically sensitive intraindividual variability in cognition in lab or clinic settings is typically infeasible and lacking in ecological validity. To improve precision of diagnosis and identify areas for personalized intervention, we can capitalize on the ubiquity of smartphones to measure real-world contexts that shape such cognitive variability. In this study we sought to assess the feasibility and validity of an open-access neuropsychological assessment app in young adults (YA) and individuals with Parkinson’s disease (PD).`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"li"},` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`Participants and Methods:`),` 179 YAs (undergraduate students) and 20 persons with PD filled out questionnaires at baseline and then were prompted to complete smartphone assessments of social context, mood, alertness, and motivation 5x/day for 10 days as they went about daily life. Those with PD also reported on their medication state. Participants were prompted to complete mobile tests of working memory (Backwards Spatial Span) and complex attention (Trails-B), also 5x/day for 10 days. In addition, people with PD completed the MoCA, Spatial Span, Trails A & B, and the Unified Parkinson's Disease Rating Scale in the lab at baseline.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"li"},` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`Results:`),` Response rate to smartphone assessments was 58% in YA and 73% in PD. Response rate declined by 34% in YA over 10 days, but increased by 48% in persons with PD. In YA, lower response rate was related to higher baseline negative emotion. In PD, there were no significant correlates of response rate. Participants with PD cited survey schedule and technical difficulties as deterrents of response. In YA, accuracy on games improved by 4.5% on Trails B (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em",{parentName:"p"},`t`),` = 5.66, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em",{parentName:"p"},`p`),` < 0.01) and 5.3% on Backwards Spatial Span (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em",{parentName:"p"},`t`),` = 2.89, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em",{parentName:"p"},`p`),` <0.01). In PD, accuracy on games improved by 3.8% on Trails-B (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em",{parentName:"p"},`t`),` = 0.58, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em",{parentName:"p"},`p`),` = 0.57) and 15.7% on Backwards Spatial Span (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em",{parentName:"p"},`t`),` = 2.20, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em",{parentName:"p"},`p`),` = 0.04).`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"li"},` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`Conclusions:`),` Repeated smartphone assessment of cognition and context in both YA and persons with PD is a feasible approach. We will also present findings regarding the impact of contextual factors, such as time of day, social context, mood, alertness, and motivation, on variability in cognitive performance.`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"california-state-university-northridge"},`California State University Northridge`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Los Angeles, California, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`In our Social Psychology in Everyday Life Lab at CSU Northridge, we used mindLAMP to augment our data collection for longitudinal studies of smartphone-related cognition and behavior. We programmed mindLAMP to deliver regular ecological momentary assessment measures, including brief surveys capturing the intentionality/automaticity of the user's prior smartphone usage and their current mood, life satisfaction, and context. We also attempted to capture some basic cognitive constructs using mindLAMP’s built-in attention and memory assessment games, like the n-back test. Our intention is to assess whether higher levels of automaticity (mindless, impulsive use) during the prior phone usage predict lower levels of present-moment mood. We’d also like to assess the influence of context, such the user’s location, the presence of others, and the duration and content of their smartphone uses on automaticity and well-being. Ultimately, we hope this research helps us better understand the relationship between smartphone users and their devices and assess whether well-being can be enhanced by implementing interventions for more intentional use.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"cambridge-health-alliance"},`Cambridge Health Alliance`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Massachusetts, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`They are using mindLAMP to study child mental health and its relationship to screen time. The goal of this research is to understand of how screen time impacts mental health as recorded by LAMP surveys and functioning as recorded by LAMP passive data.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"henry-ford-behavioral-health-services"},`Henry Ford Behavioral Health Services`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Detroit, Michigan, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"la-county-department-of-mental-health"},`LA County Department of Mental Health`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Los Angeles, California, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians, Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`They will be using LAMP with patients in the Department of Mental Health's system. Clincians will be using mindLAMP to implement a digital version of DBT diary cards.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"massachusetts-psychosis-network-for-early-treatment-mapnet"},`Massachusetts Psychosis Network for Early Treatment (MAPNET)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Massachusetts, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`The Massachusetts Psychosis Network for Early Treatment (MAPNET) is a state-funded initiative whose mission is to offer technical assistance on best practices in first episode psychosis treatment to service providers throughout the state. MAPNET will offer the LAMP app as an option to collect patient outcomes data from first episode psychosis clinics for both program quality improvement and state reporting.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"mayo-clinic"},`Mayo Clinic`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Rochester, Minnesota, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`The purpose of this protocol is to assess the feasibility and acceptability of passive data collection with a smartphone in depressed patients and investigate how passive data gathered via technology platforms can generate transdiagnostic digital phenotypes that potentially inform the assessment and/or treatment outcome of major mood disorders. To ensure these digital biomarkers are specific to mental health and not due to chance or regular variations in normal human behavior, we will have a control group of healthy adults. The control group will also allow us to report sensitivity and specificity of our results, which is important for understanding their use in clinical care as potential new tests. If MindLAMP is feasible in this patient population and digital phenotypes are identified, larger studies will be developed to assess digital phenotypic biomarkers and their ability to predict treatment response, early in the intervention, and impending relapse.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"mcgill-university"},`McGill University`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Montreal, Québec, Canada`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`We are planning a study in which we examine the association between sleep and cognition and would like to use LAMP to measure our cognitive performance.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"uninersity-of-michigan-medicine"},`Uninersity of Michigan Medicine`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Ann Arbor, Michigan, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`The Heinz C. Prechter Bipolar Research Program for approximately 20 people in a piloty study as a part of their Bipolar research.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"monash-university"},`Monash University`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Melbourne, Australia`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`Monash University is developing an Australian-first digital resource to help students and staff identify when they are at risk of mental health problems, and how to seek appropriate help.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`The platform - ‘Thrive’ - is being developed by the University’s Turner Institute for Brain and Mental Health, led by Turner Director and Head of the School of Psychology, Professor Kim Cornish, and is based on a similar platform developed by Harvard University for use with clinical populations.
The digital resource will initially be a portal that can be accessed by all Australian Monash students and staff, where they can find appropriate resources and interventions to improve mental health and well-being. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`Eventually, a smartphone app will track a person’s mental health through activity on their phone, including sleep patterns and activity levels, will act as a screener and direct individuals to the most appropriate resource within the portal. It will also be capable of delivering particular interventions on the spot.
After the Australian pilot is completed, the initiative will be rolled out across Monash’s global footprint and to the entire Monash community.
It will be able to provide regular pop-up alerts asking how the person is going, and provide general information on Monash resources that can provide assistance, including counselling services, exercise programs at Monash Sport, peer support and other programs.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"https://www.monash.edu/news/articles/monash-university-puts-focus-on-mental-health-of-students,-staff"},`Monash University puts focus on mental health of students, staff`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"national-institute-for-mental-health-collaboration"},`National Institute for Mental Health Collaboration`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: United States and Australia`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians, Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"https://www.nimh.nih.gov/news/research-highlights/2020/nimh-part-of-collaborative-effort-to-advance-early-intervention-for-individuals-at-risk-of-developing-schizophrenia.shtml"},`Research Highlight: NIMH Part of Collaborative Effort to Advance Early Intervention for Individuals at Risk of Developing Schizophrenia`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"national-institute-of-mental-health-and-neurosciences"},`National Institute of Mental Health and Neurosciences`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`Various teams at the National Institute of Mental Health and Neurosciences are using LAMP to advance mental health research and care. Projects including using LAMP to monitor, personalize, and predict treatment response to non-invasive brain stimulation techniques like TMS. Other projects including using LAMP to support patients with substance abuse disorder. Future projects will involve use of LAMP to help predict relapse in serious mental illness.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"new-hampshire-state-hospital"},`New Hampshire State Hospital`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Concord, New Hampshire, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`This study aims at using LAMP to monitor improvement of in-patients in the psychiatric unit.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"shanghai-mental-health"},`Shanghai Mental Health`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Shanghai, China`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`Shanghai Mental Health leveraged LAMP’s open-source platform to create BrainSmart. BrainSmart is an app with similar capabilities as LAMP, including customizable games and surveys that can be used to engage patients. Shanghai Mental Health used BrainSmart in a study that investigated whether interactive technology is feasible way to enhance cognitive function of patients at clinical risk for psychosis. The prevalence of smartphones, paired with high reports of regular app use, suggest that engaging technology may be an avenue for building on cognitive capabilities.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"stony-brook-university"},`Stony Brook University`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Stony Brook, New York, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`This will be a research study examining patterns of depression, community mobility, social engagement and health among those with subacute spinal cord injury. Over a 4 month period, participants will first be monitored (passive and active data) for the 2 months, then permitted to share their results and access the mindfulness/stress reduction activities in addition ongoing monitoring in the second 2 months.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"the-medical-university-of-varna"},`The Medical University of Varna`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Varna, Bulgaria`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians, Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`This study focuses on post hospitalization follow-up of patients with substance use disorder. It aims evaluate possibility of early prediction of relapse using LAMP versus telephone follow-up in patients with substance use disorder.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"unity-health-toronto"},`Unity Health Toronto`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Toronto, Ontario, Canada`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians, Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`They will be using LAMP as a mobile app to monitor factors affecting mental health. Specifically, they are looking at healthcare workers within hospital the network.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"university-college-london"},`University College London`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: London, United Kingdom`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians, Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`We are a group of ophthalmologists and psychologists at Moorfields Eye Hospital and University College London looking to conduct a study collecting real-world in-situ data on the behaviour and function of patients with inherited eye diseases. These patients suffer with progressive vision loss and require close clinical monitoring to identify changes in disease status, and this absorbs significant resources. We're interested in collecting data that can be transformed into clinically useful biomarkers to inform the need for treatment initiation/augmentation or a referral to psychological support. LAMP contains many of the features we would be interested in using to digitally phenotype these patients.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"university-of-california-san-diego"},`University of California San Diego`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: San Diego, California, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians, Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`We intend to use the survey and cognitive test features of LAMP among our study population. We would also be interested in learning about the mindfulness and coping activity features of the application.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"university-of-nebraska-medical-center"},`University of Nebraska Medical Center`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Omaha, Nebraska, United States`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Clinicians`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"university-of-ottawa"},`University of Ottawa`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Ottawa, Canada`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`Our study investigates the validity of mindLAMP, a smartphone application for both Apple and Android phones, in assessing cognition in individuals with a mental illness. While preliminary, our findings suggest that mindLAMP can be used to assess cognitive impairments in individuals with a mental illness. As a novel tool, mindLAMP has the potential to enable dynamic, scalable, and longitudinal assessment of cognition in research and clinical setting.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"university-of-oxford"},`University of Oxford`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Location: Oxford, United Kingdom`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Role: Researchers`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"blockquote"},`In this study we aim to use digital interventions to improve mental wellbeing in the general population, with a specific target of four groups that are particularly, but very differently, affected by the COVID-19 pandemic: people in isolation, students, athletes, and frontline clinical staff. Clinical staff will likely have limited flexibility in their daily routine, but those who can no longer work will have too much flexibility. We will capture digital phenotypes of participants as well as signals related to interventions like mood, anxiety, diet, sleep, steps etc (as noted above). We will compare a standard intervention (using the app to deliver generic advice and instructions about pre-defined interventions) with a personalised one (using information based on individual differences and preferences in a personalised and dynamic way). All data will be de-identified and made freely available to the scientific community at the end of the study.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`To read more about this study, see here: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"https://www.psych.ox.ac.uk/research/evidence-based-mental-health/paideia-trial"},`PAIDEIA: Personalised Artificial Intelligence versus a Designed by Experts Individualised Approach`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);