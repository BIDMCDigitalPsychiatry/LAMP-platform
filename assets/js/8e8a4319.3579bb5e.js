"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[2054],{

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

/***/ 23614:
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
const frontMatter={};const contentTitle='Survey scores';const metadata={"unversionedId":"data_science/cortex/features/primary/survey_scores","id":"data_science/cortex/features/primary/survey_scores","title":"Survey scores","description":"computed from raw feature: cortex.raw.survey","source":"@site/docs/09-data_science/06-cortex/05-features/01-primary/07-survey_scores.md","sourceDirName":"09-data_science/06-cortex/05-features/01-primary","slug":"/data_science/cortex/features/primary/survey_scores","permalink":"/data_science/cortex/features/primary/survey_scores","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/05-features/01-primary/07-survey_scores.md","tags":[],"version":"current","lastUpdatedBy":"Erlend Lane","lastUpdatedAt":1719949513,"formattedLastUpdatedAt":"7/2/2024","sidebarPosition":7,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Significant Locations","permalink":"/data_science/cortex/features/primary/sig_locs"},"next":{"title":"Trips","permalink":"/data_science/cortex/features/primary/trips"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Description',id:'description',children:[],level:4},{value:'Optional or required kwargs',id:'optional-or-required-kwargs',children:[],level:4},{value:'Data',id:'data',children:[],level:4},{value:'Example',id:'example',children:[],level:4}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"survey-scores"},`Survey scores`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`computed from raw feature: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`cortex.raw.survey`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4",{"id":"description"},`Description`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Computes survey scores from raw survey data.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4",{"id":"optional-or-required-kwargs"},`Optional or required kwargs`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`start`),`: (int, units: ms) the start time.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`end`),`: (int, units: ms) the end time.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`return_ind_ques`),`: (boolean, default: False) whether to return individual question scores (or just category scores)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`scoring_dict`),`: (dictionary) dictionary holding scoring information in the following form:`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`scoring_dict = {
        "category_list": [list of category strings],
        "questions": {
                         "question #1 text": {
                                                  "category": something from list of category strings,
                                                  "scoring": type of scoring
                                             },
                         "question #2 text": {
                                                  "category": something from list of category strings,
                                                  "map_to": "question #1 text"
                                             },
                     },
        "map0": {
                    "Never": 0,
                    "Some of the time": 1,
                    "All of the time": 2
                }
    }
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The supported scoring types are:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`"value": will cast the result to an int ("1" --> 1)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`"boolean": "Yes" --> 1, "No" --> 0`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`map to a dictionary: give the name of the dictionary (ex: "map0", and create a corresponding dictionary in the scoring_dict)
Non-numeric scores are not supported at this time. `)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`"map_to" can be used to say that for example "question #2" should really be considered identical to "quesiton #1."
Please see the example below for an example of a scoring_dict.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4",{"id":"data"},`Data`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`start`),`: (int, units: ms) the start time of a given survey entry.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`end`),`: (int, units: ms) the end time of a given survey entry.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`category`),`: (str) the category of the given survey entry.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`question`),`: (str) the question of the given survey entry, same as category for sum scores.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`score`),`: (float) the sum of the scores for all questions in the survey entry.`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Note: Only questions that are in the entry will be added to the score. Please ensure that all questions you wish to be added to your score are available in the participant data. (i.e. if you are trying to sum the results of "question 1" and "question 2" but participant X only has "question 2" the category score for particiapnt X will be only the "question 2" score.)`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4",{"id":"example"},`Example`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-markdown"},`scoring_dict = {
    "category_list": ["PHQ-9", "GAD-7", "DWAI", "Daily_sleep_qual"],
    "questions": {
            "Over the past week, I have felt nervous, anxious, or on edge.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have not been able to stop or control worrying.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have been worrying too much about different things.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have had trouble relaxing.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have felt so restless that it's hard to sit still.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have felt myself becoming easily annoyed or irritable.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have felt afraid as if something awful might happen.": {"category": "GAD-7", "scoring": "value_map"},

            "Overall, how would you rate your sleep last night?": {"category": "Daily_sleep_qual", "scoring": "value"},
            "How did you sleep last night?": {"category": "Daily_sleep_qual", "map_to": "Overall, how would you rate your sleep last night?"},
        
            "I feel uninterested in the things I used to enjoy.": {"category": "PQ-16", "scoring": "boolean"},
            "I often seem to live through events exactly as they happened before (déjà vu).": {"category": "PQ-16", "scoring": "boolean"},
            "I sometimes smell or taste things that other people can’t smell or taste.": {"category": "PQ-16", "scoring": "boolean"},

            "I trust the app to guide me towards my personal goals.": {"category": "DWAI", "scoring": "dwai_value_map"},
            "I believe the app tasks will help me to address my problems.": {"category": "DWAI", "scoring": "dwai_value_map"},
        },
    "value_map": {
        "Not at all": 0,
        "Several days": 1,
        "More than half the days": 2,
        "Over half the days": 2,
        "Nearly every day": 3
    },
    "dwai_value_map": {
        "Strongly disagree": 0,
        "Disagree": 1,
        "Neither agree nor disagree": 2,
        "Agree": 3,
        "Strongly agree": 4
    }
}
cortex.primary.survey_scores.survey_scores(id="U1234567890", start=0, end=cortex.now(), return_ind_ques=1, scoring_dict=scoring_dict)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Output:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-markdown"},`{
  'timestamp': 0,
  'duration': 1627067480000,
  'data': [
           {'start': 1639759199227, 'end': 1639777579969, 'category': 'GAD-7', 'question': 'GAD-7', 'score': 7},
           {'start': 1639759199227, 'end': 1639777579969, 'category': 'DWAI', 'question': 'DWAI', 'score': 6},
           .
           .
           .
           {'start': 1639426388269, 'end': 1639426610663, 'category': 'Daily_sleep_qual', 'question': 'How did you sleep last night?', score': 1},
          ],
  'has_raw_data': 1,
}
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Notes on the example above:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`The "category_list" may contain surveys that are not listed in the quesiton list, this will not throw an error but will also return no results. Scores are based only on the questions listed in "questions."`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Similarly, there can be questions in "questions" that have categories not in "category_list." These questions, if found in participant data, will not be scored.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`If you have multiple questions that should be considered the same, you may use "map_to" to point to another question. This is convinient if for example a spelling error is found and corrected during the study. Please note that answers must be the same.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`As shown in the "value_map", you may have multiple keys with the same value. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Notice that the start / end time of the two returned survey scores (GAD-7 and DWAI) are the same. This is because GAD-7 questions and DWAI questions are part of the same survey in LAMP. They have been split into two seperate dictionaries here because of the way we mapped the questions to different categories (ie "DWAI" and "GAD-7")`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);