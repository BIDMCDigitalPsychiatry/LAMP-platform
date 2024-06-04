"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[144],{

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

/***/ 40245:
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
const frontMatter={};const contentTitle='Publications with LAMP';const metadata={"unversionedId":"about/publications","id":"about/publications","title":"Publications with LAMP","description":"If you use the LAMP Platform in your projects or publications, please cite the latest release at the time of publication using the DOI below. (This image will automatically always display only the latest version's DOI.)","source":"@site/docs/03-about/03-publications.md","sourceDirName":"03-about","slug":"/about/publications","permalink":"/about/publications","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/03-about/03-publications.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1717526470,"formattedLastUpdatedAt":"6/4/2024","sidebarPosition":3,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Who's using LAMP?","permalink":"/about/users"},"next":{"title":"L - Learn","permalink":"/using/learn"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Digital Futures in Mind: Reflecting on Technological Experiments in Mental Health &amp; Crisis Support',id:'digital-futures-in-mind-reflecting-on-technological-experiments-in-mental-health--crisis-support',children:[],level:3},{value:'Piloting Smartphone Digital Phenotyping to Understand Problematic Internet Use in an Adolescent and Young Adult Sample.',id:'piloting-smartphone-digital-phenotyping-to-understand-problematic-internet-use-in-an-adolescent-and-young-adult-sample',children:[],level:3},{value:'Global Collaboration Around Digital Mental Health: The LAMP Consortium.',id:'global-collaboration-around-digital-mental-health-the-lamp-consortium',children:[],level:3},{value:'Exploring the Neuropsychiatric Sequalae of Perceived COVID-19 Exposure in College Students: A Pilot Digital Phenotyping Study.',id:'exploring-the-neuropsychiatric-sequalae-of-perceived-covid-19-exposure-in-college-students-a-pilot-digital-phenotyping-study',children:[],level:3},{value:'Enabling Research and Clinical Use of Patient-Generated Health Data (the mindLAMP Platform): Digital Phenotyping Study.',id:'enabling-research-and-clinical-use-of-patient-generated-health-data-the-mindlamp-platform-digital-phenotyping-study',children:[],level:3},{value:'Validation of an ecological momentary assessment to measure processing speed and executive function in schizophrenia.',id:'validation-of-an-ecological-momentary-assessment-to-measure-processing-speed-and-executive-function-in-schizophrenia',children:[],level:3},{value:'Enhancing attention and memory of individuals at clinical high risk for psychosis with mHealth technology.',id:'enhancing-attention-and-memory-of-individuals-at-clinical-high-risk-for-psychosis-with-mhealth-technology',children:[],level:3},{value:'Smartphone-Based Neuropsychological Assessment in Parkinson’s Disease: Feasibility, Validity, and Contextually Driven Variability in Cognition',id:'smartphone-based-neuropsychological-assessment-in-parkinsons-disease-feasibility-validity-and-contextually-driven-variability-in-cognition',children:[],level:3},{value:'A pilot study using ecological momentary assessment via smartphone application to identify adolescent problematic internet use',id:'a-pilot-study-using-ecological-momentary-assessment-via-smartphone-application-to-identify-adolescent-problematic-internet-use',children:[],level:3},{value:'Actionable digital phenotyping: a framework for the delivery of just-in-time and longitudinal interventions in clinical healthcare',id:'actionable-digital-phenotyping-a-framework-for-the-delivery-of-just-in-time-and-longitudinal-interventions-in-clinical-healthcare',children:[],level:3},{value:'Assessing the potential of longitudinal smartphone based cognitive assessment in schizophrenia: A naturalistic pilot study',id:'assessing-the-potential-of-longitudinal-smartphone-based-cognitive-assessment-in-schizophrenia-a-naturalistic-pilot-study',children:[],level:3},{value:'Creating a Digital Health Smartphone App and Digital Phenotyping Platform for Mental Health and Diverse Healthcare Needs: an Interdisciplinary and Collaborative Approach',id:'creating-a-digital-health-smartphone-app-and-digital-phenotyping-platform-for-mental-health-and-diverse-healthcare-needs-an-interdisciplinary-and-collaborative-approach',children:[],level:3},{value:'Feasibility and correlations of smartphone meta‐data toward dynamic understanding of depression and suicide risk in schizophrenia',id:'feasibility-and-correlations-of-smartphone-metadata-toward-dynamic-understanding-of-depression-and-suicide-risk-in-schizophrenia',children:[],level:3},{value:'Multiple uses of an app instead of using multiple apps – a case for rethinking the digital health technology toolbox',id:'multiple-uses-of-an-app-instead-of-using-multiple-apps--a-case-for-rethinking-the-digital-health-technology-toolbox',children:[],level:3},{value:'Patient Innovation in Investigating the Effects of Environmental Pollution in Schizophrenia: Case Report of Digital Phenotyping Beyond Apps',id:'patient-innovation-in-investigating-the-effects-of-environmental-pollution-in-schizophrenia-case-report-of-digital-phenotyping-beyond-apps',children:[],level:3},{value:'Using a Smartphone App to Identify Clinically Relevant Behavior Trends via Symptom Report, Cognition Scores, and Exercise Levels: A Case Series',id:'using-a-smartphone-app-to-identify-clinically-relevant-behavior-trends-via-symptom-report-cognition-scores-and-exercise-levels-a-case-series',children:[],level:3},{value:'Digital Phenotyping for Spinal Cord Injury: Smartphone-based monitors for clinical utility',id:'digital-phenotyping-for-spinal-cord-injury-smartphone-based-monitors-for-clinical-utility',children:[],level:3}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"publications-with-lamp"},`Publications with LAMP`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div",{"className":"admonition admonition-note alert alert--secondary"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div",{parentName:"div","className":"admonition-heading"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h5",{parentName:"div"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span",{parentName:"h5","className":"admonition-icon"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("svg",{parentName:"span","xmlns":"http://www.w3.org/2000/svg","width":"14","height":"16","viewBox":"0 0 14 16"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("path",{parentName:"svg","fillRule":"evenodd","d":"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),`Citing the LAMP Platform`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div",{parentName:"div","className":"admonition-content"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"div"},`If you use the LAMP Platform in your projects or publications, please cite the latest release at the time of publication using the DOI below. (This image will automatically always display only the latest version's DOI.)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"div"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"https://zenodo.org/badge/latestdoi/311382406"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{parentName:"a","src":"https://zenodo.org/badge/311382406.svg","alt":"DOI"}))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"digital-futures-in-mind-reflecting-on-technological-experiments-in-mental-health--crisis-support"},`Digital Futures in Mind: Reflecting on Technological Experiments in Mental Health & Crisis Support`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Jonah Bossewitch, Lydia X. Z. Brown, Piers Gooding, Leah Harris, James Horton, Simon Katterl, Keris Myrick, Kelechi Ubozoh and Alberto Vasquez. Digital Futures in Mind: Reflecting on Technological Experiments in Mental Health & Crisis Support. (2023)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"piloting-smartphone-digital-phenotyping-to-understand-problematic-internet-use-in-an-adolescent-and-young-adult-sample"},`Piloting Smartphone Digital Phenotyping to Understand Problematic Internet Use in an Adolescent and Young Adult Sample.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(83767)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(77578)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Gansner, M., Nisenson, M., Lin, V. et al. Piloting Smartphone Digital Phenotyping to Understand Problematic Internet Use in an Adolescent and Young Adult Sample. Child Psychiatry Hum Dev (2022). https://doi.org/10.1007/s10578-022-01313-y
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"global-collaboration-around-digital-mental-health-the-lamp-consortium"},`Global Collaboration Around Digital Mental Health: The LAMP Consortium.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(44107)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(36633)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Bilden, R., Torous, J. Global Collaboration Around Digital Mental Health: The LAMP Consortium. J. technol. behav. sci. (2022). https://doi.org/10.1007/s41347-022-00240-y
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"exploring-the-neuropsychiatric-sequalae-of-perceived-covid-19-exposure-in-college-students-a-pilot-digital-phenotyping-study"},`Exploring the Neuropsychiatric Sequalae of Perceived COVID-19 Exposure in College Students: A Pilot Digital Phenotyping Study.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(5349)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(36889)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Patel, S., & Torous, J. Exploring the Neuropsychiatric Sequalae of Perceived COVID-19 Exposure in College Students: A Pilot Digital Phenotyping Study. Frontiers in Psychiatry, 2517.
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"enabling-research-and-clinical-use-of-patient-generated-health-data-the-mindlamp-platform-digital-phenotyping-study"},`Enabling Research and Clinical Use of Patient-Generated Health Data (the mindLAMP Platform): Digital Phenotyping Study.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(40878)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(81199)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Vaidyam A, Halamka J, Torous J. Enabling Research and Clinical Use of Patient-Generated Health Data (the mindLAMP Platform): Digital Phenotyping Study. JMIR Mhealth Uhealth. 2022 Jan 7;10(1):e30557. doi: 10.2196/30557. PMID: 34994710.
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"validation-of-an-ecological-momentary-assessment-to-measure-processing-speed-and-executive-function-in-schizophrenia"},`Validation of an ecological momentary assessment to measure processing speed and executive function in schizophrenia.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(19990)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(92495)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Shvetz C, Gu F, Drodge J, Torous J, Guimond S. Validation of an ecological momentary assessment to measure processing speed and executive function in schizophrenia. NPJ Schizophr. 2021 Dec 21;7(1):64. doi: 10.1038/s41537-021-00194-9. PMID: 34934063; PMCID: PMC8692600.
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"enhancing-attention-and-memory-of-individuals-at-clinical-high-risk-for-psychosis-with-mhealth-technology"},`Enhancing attention and memory of individuals at clinical high risk for psychosis with mHealth technology.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/86117379/130236989-b6265676-e77c-444b-9ded-91d78cbada66.png","alt":"image"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Li, H., Yang, S., Chi, H., Xu, L., Zhang, T., Singleton, G., Ting, Y., Stone, W.S. & Wang, J. (2021). Enhancing attention and memory of individuals at clinical high risk for psychosis with mHealth technology. Asian Journal of Psychiatry, 58, 102587. doi:10.1016/j.ajp.2021.102587
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"smartphone-based-neuropsychological-assessment-in-parkinsons-disease-feasibility-validity-and-contextually-driven-variability-in-cognition"},`Smartphone-Based Neuropsychological Assessment in Parkinson’s Disease: Feasibility, Validity, and Contextually Driven Variability in Cognition`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(64062)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(9621)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Weizenbaum, E., Fulford, D., Torous, J., Pinsky, E., Kolachalama, V., & Cronin-Golomb, A. (2021). Smartphone-Based Neuropsychological Assessment in Parkinson’s Disease: Feasibility, Validity, and Contextually Driven Variability in Cognition. Journal of the International Neuropsychological Society, 1-13. doi:10.1017/S1355617721000503
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"a-pilot-study-using-ecological-momentary-assessment-via-smartphone-application-to-identify-adolescent-problematic-internet-use"},`A pilot study using ecological momentary assessment via smartphone application to identify adolescent problematic internet use`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(98503)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(86207)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Gansner, M., Nisenson, M., Carson, N., & Torous, J. (2020). A pilot study using ecological momentary assessment via smartphone application to identify adolescent problematic internet use. Psychiatry Research, 293, 113428.
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"actionable-digital-phenotyping-a-framework-for-the-delivery-of-just-in-time-and-longitudinal-interventions-in-clinical-healthcare"},`Actionable digital phenotyping: a framework for the delivery of just-in-time and longitudinal interventions in clinical healthcare`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(12657)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(72629)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Vaidyam A, Halamka J, Torous J. Actionable digital phenotyping: a framework for the delivery of just-in-time and longitudinal interventions in clinical healthcare. Mhealth. 2019;5:25. Published 2019 Aug 12. doi:10.21037/mhealth.2019.07.04
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"assessing-the-potential-of-longitudinal-smartphone-based-cognitive-assessment-in-schizophrenia-a-naturalistic-pilot-study"},`Assessing the potential of longitudinal smartphone based cognitive assessment in schizophrenia: A naturalistic pilot study`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(57246)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(40191)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Gang Liu, Philip Henson, Matcheri Keshavan, Jukka Pekka-Onnela, John Torous, Assessing the potential of longitudinal smartphone based cognitive assessment in schizophrenia: A naturalistic pilot study, Schizophrenia Research: Cognition, Volume 17, 2019, 100144, ISSN 2215-0013, https://doi.org/10.1016/j.scog.2019.100144.
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"creating-a-digital-health-smartphone-app-and-digital-phenotyping-platform-for-mental-health-and-diverse-healthcare-needs-an-interdisciplinary-and-collaborative-approach"},`Creating a Digital Health Smartphone App and Digital Phenotyping Platform for Mental Health and Diverse Healthcare Needs: an Interdisciplinary and Collaborative Approach`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(29039)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(14725)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Torous, J., Wisniewski, H., Bird, B. et al. Creating a Digital Health Smartphone App and Digital Phenotyping Platform for Mental Health and Diverse Healthcare Needs: an Interdisciplinary and Collaborative Approach. J. technol. behav. sci. 4, 73–85 (2019). https://doi.org/10.1007/s41347-019-00095-w
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"feasibility-and-correlations-of-smartphone-metadata-toward-dynamic-understanding-of-depression-and-suicide-risk-in-schizophrenia"},`Feasibility and correlations of smartphone meta‐data toward dynamic understanding of depression and suicide risk in schizophrenia`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(17533)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(94193)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Henson, P, Torous, J. Feasibility and correlations of smartphone meta‐data toward dynamic understanding of depression and suicide risk in schizophrenia. Int J Methods Psychiatr Res. 2020; 29:e1825. https://doi.org/10.1002/mpr.1825
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"multiple-uses-of-an-app-instead-of-using-multiple-apps--a-case-for-rethinking-the-digital-health-technology-toolbox"},`Multiple uses of an app instead of using multiple apps – a case for rethinking the digital health technology toolbox`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(33861)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(98477)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Torous, J., & Vaidyam, A. (2020). Multiple uses of app instead of using multiple apps – a case for rethinking the digital health technology toolbox. Epidemiology and Psychiatric Sciences, 29, E100. doi:10.1017/S2045796020000013
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"patient-innovation-in-investigating-the-effects-of-environmental-pollution-in-schizophrenia-case-report-of-digital-phenotyping-beyond-apps"},`Patient Innovation in Investigating the Effects of Environmental Pollution in Schizophrenia: Case Report of Digital Phenotyping Beyond Apps`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(25044)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(52541)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Vaidyam A, Roux S, Torous J. Patient Innovation in Investigating the Effects of Environmental Pollution in Schizophrenia: Case Report of Digital Phenotyping Beyond Apps. JMIR Ment Health 2020;7(8):e19778
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"using-a-smartphone-app-to-identify-clinically-relevant-behavior-trends-via-symptom-report-cognition-scores-and-exercise-levels-a-case-series"},`Using a Smartphone App to Identify Clinically Relevant Behavior Trends via Symptom Report, Cognition Scores, and Exercise Levels: A Case Series`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(62798)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(829)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Wisniewski Hannah, Henson Philip, Torous John. Using a Smartphone App to Identify Clinically Relevant Behavior Trends via Symptom Report, Cognition Scores, and Exercise Levels: A Case Series. Frontiers in Psychiatry. 10-2019-652. doi:10.3389/fpsyt.2019.00652
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"digital-phenotyping-for-spinal-cord-injury-smartphone-based-monitors-for-clinical-utility"},`Digital Phenotyping for Spinal Cord Injury: Smartphone-based monitors for clinical utility`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{target:"_blank",href:(__webpack_require__(62798)/* ["default"] */ .A)},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(829)/* ["default"] */ .A)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},``)));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 98503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/1-s2.0-S0165178120310313-main-e0f4a19ce26146a254e8db96730ab148.pdf");

/***/ }),

/***/ 57246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/1-s2.0-S2215001319300101-main-4b6c5234be1ded46138fb49c721beb50.pdf");

/***/ }),

/***/ 44107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/1.18.22springer-a3bccb9ddc08ea17aaae15810b0c61d7.pdf");

/***/ }),

/***/ 19990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/NPJ.Schiz.12.21.2021-37d74bcdb981f1f9340b42a85425209a.pdf");

/***/ }),

/***/ 83767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/Springer.1.19.2022-9b4f440e5cdde9eb20b62e8f5c4e6dd9.pdf");

/***/ }),

/***/ 29039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/Torous2019_Article_CreatingADigitalHealthSmartpho-1e9f921e431296ad2847c0286c926db8.pdf");

/***/ }),

/***/ 64062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/Weizenbaum%20smartphone%20cognition%20PD%20JINS%20May%202021-20bb00dbf25c218b45d8d104726af59f.pdf");

/***/ }),

/***/ 5349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/covidpaper-276c5c6e657a5c31a82611be664f6dde.pdf");

/***/ }),

/***/ 62798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/fpsyt-10-00652-a86337487782797bf73e6e8730712e66.pdf");

/***/ }),

/***/ 40878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/jmir1.7.22-41b85a97b48d61276f5c6a2d2bb483a3.pdf");

/***/ }),

/***/ 12657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/mh-05-2019.07.04-b71536eaea4a3e05eb6899c07976ea22.pdf");

/***/ }),

/***/ 17533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/mpr.1825-eab49e923d2522e9d959cc16e1ca8ab1.pdf");

/***/ }),

/***/ 33861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/multiple_uses_of_app_instead_of_using_multiple_apps_a_case_for_rethinking_the_digital_health_technology_toolbox-4c40e00c74aca88d32b891ba86f970fb.pdf");

/***/ }),

/***/ 25044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/pdf-2e0438ef0fc57fe09743be1f20de63f8.pdf");

/***/ }),

/***/ 36633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/1.18.22springer-a98b1d0d2417e9134ceb7c460c5eb087.png");

/***/ }),

/***/ 92495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/NPJ.Schiz.12.21.2021-e393b5be3a8c013df095b2182a1dcc49.png");

/***/ }),

/***/ 77578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Springer.1.19.2022-9f0b655cd214cdd82c41daf9ba3a6200.png");

/***/ }),

/***/ 72629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/actionable2020-8d03929fe8a2d8ea65778e9cc373920d.png");

/***/ }),

/***/ 36889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/covidpaperdocs-bf55cf984400d78f999092b22328e6db.png");

/***/ }),

/***/ 98477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/epidemiology2019-80b39876d6858be519b50b4f14ed7cd9.png");

/***/ }),

/***/ 829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/frontiers2019-ec1d3cea1412479aa651e685e4b0bf8b.png");

/***/ }),

/***/ 81199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/jmir1.7.22-94d26f82d5b72cd13fb0ec66a496a1c8.png");

/***/ }),

/***/ 52541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/jmir2020-6d7306672d74db71a4d93d2e70889032.png");

/***/ }),

/***/ 14725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/jtibs2019-7b13da3870cf6ea222dddc45c76508ce.png");

/***/ }),

/***/ 86207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/meredith2020-3c6cf39f935d19fd482a3020b0659f31.jpg");

/***/ }),

/***/ 40191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/szresearch2019-2d316bef3e010a66e0c278f3653c3c79.png");

/***/ }),

/***/ 9621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/weizenbaum_paper-15ee122ecc749d14d1d690f63f073420.jpg");

/***/ }),

/***/ 94193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/wiley2020-78386b7f82f7b31ce9a4afa3ddb022ef.png");

/***/ })

}]);