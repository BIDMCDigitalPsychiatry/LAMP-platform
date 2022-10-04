"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[5863],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


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

/***/ 69906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
const frontMatter={};const contentTitle='Cognitive Games and Assessments';const metadata={"unversionedId":"using/cog_games","id":"using/cog_games","title":"Cognitive Games and Assessments","description":"mindLAMP offers a variety of neurocognitive assessments in the form of games, which are native to the app. These will show up on the Assess page of the app, and performance scores can be displayed on the Prevent page.","source":"@site/docs/05-using/06-cog_games.md","sourceDirName":"05-using","slug":"/using/cog_games","permalink":"/using/cog_games","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/05-using/06-cog_games.md","tags":[],"version":"current","lastUpdatedBy":"Aditya Vaidyam","lastUpdatedAt":1664897588,"formattedLastUpdatedAt":"10/4/2022","sidebarPosition":6,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Surveys","permalink":"/using/surveys"},"next":{"title":"Sensor Types","permalink":"/using/sensors"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Jewels',id:'jewels',children:[{value:'Jewels A (left) and B (right) Sample Game Play',id:'jewels-a-left-and-b-right-sample-game-play',children:[],level:3},{value:'Customization',id:'customization',children:[],level:3},{value:'Scoring',id:'scoring',children:[],level:3},{value:'Sample Instructions',id:'sample-instructions',children:[],level:3}],level:2},{value:'Spatial Span',id:'spatial-span',children:[{value:'Sample Game Play',id:'sample-game-play',children:[{value:'Forward Spatial Span',id:'forward-spatial-span',children:[{value:'Level 1',id:'level-1',children:[],level:5},{value:'Level 2',id:'level-2',children:[],level:5}],level:4},{value:'Backward Spatial Span',id:'backward-spatial-span',children:[{value:'Level 1',id:'level-1-1',children:[],level:5},{value:'Level 2',id:'level-2-1',children:[],level:5}],level:4}],level:3},{value:'Customization',id:'customization-1',children:[],level:3},{value:'Sample Instructions',id:'sample-instructions-1',children:[],level:3}],level:2},{value:'Cats and Dogs',id:'cats-and-dogs',children:[{value:'Sample Game Play',id:'sample-game-play-1',children:[{value:'Trial 1',id:'trial-1',children:[],level:4},{value:'Trial 2',id:'trial-2',children:[],level:4}],level:3},{value:'Examples of Rule Changes at Subsequent Levels',id:'examples-of-rule-changes-at-subsequent-levels',children:[],level:3},{value:'Sample Instructions',id:'sample-instructions-2',children:[],level:3}],level:2},{value:'Pop the Bubbles',id:'pop-the-bubbles',children:[{value:'Examples of Rule Changes at Subsequent Levels',id:'examples-of-rule-changes-at-subsequent-levels-1',children:[],level:3},{value:'Customization',id:'customization-2',children:[],level:3},{value:'Scoring',id:'scoring-1',children:[],level:3},{value:'Sample Instructions',id:'sample-instructions-3',children:[],level:3}],level:2},{value:'Balloon Risk',id:'balloon-risk',children:[{value:'Sample Game Play',id:'sample-game-play-2',children:[],level:3},{value:'Customizations',id:'customizations',children:[],level:3},{value:'Scoring',id:'scoring-2',children:[],level:3},{value:'Sample Instructions',id:'sample-instructions-4',children:[],level:3}],level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"cognitive-games-and-assessments"},`Cognitive Games and Assessments`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`mindLAMP offers a variety of neurocognitive assessments in the form of games, which are native to the app. These will show up on the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Assess`),` page of the app, and performance scores can be displayed on the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Prevent`),` page.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"jewels"},`Jewels`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Jewels replicates the Trail Making Tests, in which participants are asked to sequentially select numbered jewels in the correct ascending order. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The Trail Making Test, with its two subtypes A and B, typically used to screen for dementia and assess cognition. It evaluates visual and motor abilities, executive functioning, and set shifting (1). Evidence suggests that digital and computerized version of the pen-and-paper Trail Making Test reliably assess the same cognitive domains. (2, 3, 4). Trails A requires a patient to make a 'trail' connecting numbered circles, placed randomly on a single page, in ascending order. Trails B requires a patient to make a similar trail, but alternate between numbered and alphabetized circles.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`mindLAMP offers its own digitized version of both version of the Trail Making Test, called Jewels. Here, the numbered circles are replaced by numbered jewels in both Jewels A and B. For Jewels B, instead of having alternating numbers and alphabets, the sets alternate between two differently shaped jewels. participants must select jewels starting from 1 in ascending order, within a given time limit. Participants are indicated which jewel shape they must begin at number 1 with. Here is an example of both Jewels A and B.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary",null," References "),"1. Soo-Yong Park & Nadja Schott (2021) The trail-making-test: Comparison between paper-and-pencil and computerized versions in young and healthy older adults,          Applied Neuropsychology: Adult, DOI: 10.1080/23279095.2020.1864374 [https://doi.org/10.1080/23279095.2020.1864374]              (https://doi.org/10.1080/23279095.2020.1864374) 2. Chanda Simfukwe, Young Chul Youn, Sang Yun Kim & Seong Soo An (2021) Digital trail making test-black and white: Normal vs MCI, Applied Neuropsychology: Adult, DOI: 10.1080/23279095.2021.1871615 [https://doi.org/10.1080/23279095.2021.1871615](https://doi.org/10.1080/23279095.2021.1871615)",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},`3. Magdalene R. Bracken, Anya Mazur-Mosiewicz & Kuba Glazek (2019) Trail Making Test: Comparison of paper-and-pencil and electronic versions, Applied Neuropsychology: Adult, 26:6, 522-532, DOI: 10.1080/23279095.2018.1460371 [https://doi.org/10.1080/23279095.2018.1460371](https://doi.org/10.1080/23279095.2018.1460371)

4. Robert P. Fellows, Jessamyn Dahmen, Diane Cook & Maureen Schmitter-Edgecombe (2017) Multicomponent analysis of a digital Trail Making Test, The Clinical Neuropsychologist, 31:1, 154-167, DOI: 10.1080/13854046.2016.1238510 [https://doi.org/10.1080/13854046.2016.1238510](https://doi.org/10.1080/13854046.2016.1238510)
`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"jewels-a-left-and-b-right-sample-game-play"},`Jewels A (left) and B (right) Sample Game Play`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/130969826-0f467610-b988-451b-a57d-207827208986.png","alt":"Jewels Samples"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"customization"},`Customization`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The digitized version offers the opportunity to customize Jewels, using the Activity settings: `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/130677807-298add5e-43ce-4f6c-8e14-c842eec5e1dc.png","alt":"Screen Shot 2021-08-23 at 3 27 32 PM"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Variant:`),` Here, clinicians and researchers can define which Variant, A or B, they would like patients to play. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Mode:`),` The game can be played at four different difficulty modes - Beginner, Intermediate, Advanced, or Expert. Clinicians can customize which difficulty mode they would like patients to play, by selecting from the Mode category.
a. Each mode varies by the Duration the player has to complete the trail. This can also be changed for each mode, by changing the various Durations, in seconds. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Initial Diamond Count:`),` This can be used to determine the number of jewels that appear at the Level 1.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Initial Shape Count:`),` If so desired, the game can present not 1 or 2 different shapes of jewels, as it would for Trails A and B respectively, but any number of shapes. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Bonus points:`),` As an additional gamification strategy, bonus points can be awarded for each level completed.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`For more advanced settings, please contact our research team for assistance.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"scoring"},`Scoring`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Scoring for both Jewels variants are out of a 100, with each incorrect jewel earning -2 point`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sample-instructions"},`Sample Instructions`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Sample Instructions, Jewels A:`),` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`"Tap the jewels in chronological order, starting with number 1."`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Sample Instructions, Jewels B:`),` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`"Look at the bottom of the screen to see which jewel to collect first. Tap number of 1 of that shape, and then number 1 of the second shape. Continue alternating the jewel pattern in chronological order until all of the jewels have been collected."`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"spatial-span"},`Spatial Span`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Spatial Span is a task that assess visuospatial working memory and memory capacity. In this game, white squares are arranged in a grid. Squares will 'light up' or change color to green, and then return to white, one square at a time. Participants are required to recall and reproduce the order in which squares in the grid light up. The task can be customized such that the patterns must be reproduced in the same order as cued, or in reverse of the order cued. At every subsequent level, the number of squares that light up increases.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The recall and reproduce task requires the visuospatial working memory. The backward variation also measures working memory, as some processing must be done before reproducing the pattern. Finally, the increasing number of squares to remember measures memory capacity.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sample-game-play"},`Sample Game Play`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"forward-spatial-span"},`Forward Spatial Span`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h5",{"id":"level-1"},`Level 1`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180452-ac22d260-7f9b-4f86-8229-8c278d69744f.png","alt":"FSS Trial 0"}),`
`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180463-351b12c1-55a9-4979-b395-25903dab89ff.png","alt":"FSS Trial 0B"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h5",{"id":"level-2"},`Level 2`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180486-d31bf6d8-4b62-4855-a207-4141636d095a.png","alt":"FSS Trial 1 "}),`
`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180519-7886ec94-acef-4e5b-a30c-17a8192a4ddb.png","alt":"FSS Trial1B"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"backward-spatial-span"},`Backward Spatial Span`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h5",{"id":"level-1-1"},`Level 1`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180554-8c6410b2-00be-4620-b769-a94934c49b31.png","alt":"SS Trial 1"}),`
`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180563-47f75b56-bb54-47a4-866c-42f0f9ef2624.png","alt":"Trial 1B"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h5",{"id":"level-2-1"},`Level 2`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180581-3dfc3e79-4525-4def-9639-1e43bc679089.png","alt":"Trial 2 A"}),`
`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180598-0d8797da-e145-49cc-939d-7f8ee9e44da9.png","alt":"SS Trial 2B"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"customization-1"},`Customization`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Each trial allows the user to play 5 levels as a default. Researchers and clinicians can designate whether the game is to be ordered Forward or Backward.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180976-c5f81535-a293-4162-9f1f-df38c0b520b1.png","alt":"Screen Shot 2021-08-23 at 3 30 50 PM"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sample-instructions-1"},`Sample Instructions`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Forward Spatial Span:`),` "`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`You will see a grid of boxes. The boxes in a grid will light up in a certain order. Remember that order, and then tap the boxes in the same order in which they lit up. Each level will have more boxes light up in the sequence. See how far you can get!"`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Backwards Spatial Span:`),` "`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`You will see a grid of boxes. The boxes in a grid will light up in a certain order. Remember that order, and then tap the boxes in the REVERSE order in which they lit up. Each level will have more boxes light up in the sequence. See how far you can get!"`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"cats-and-dogs"},`Cats and Dogs`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Cats and Dogs is a task that tests multiple domains at once: visual and working memory, attention, response control, and set-shifting. Users must remember the location of multiple stimuli, remember which stimuli to respond to and which to ignore, reproduce the location of the response stimuli from memory, and switch between which stimuli to pay attention to. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`In this task, participants are first shown a pattern of boxes. The boxes temporarily lift, to reveal the image of a dog or a cat behind some of them. Participants are asked to select the boxes which have . At higher levels, participants must switch whether to respond to the the cat or the dog. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The cat and dog cues assess response control and set-shifting as go/no-go stimuli: participants must respond to one, but not the other, and then change which to respond to and which to ignore when instructed.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The animal stimuli and the box together assess visual memory, working memory, and attention: each cue is only briefly visible 'behind' the boxes, so participants must attend to the cues, remember the position of each stimulus, and then recall the position to select the correct boxes. They must also remember increasingly more cues at each subsequent trial within a level.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sample-game-play-1"},`Sample Game Play`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"trial-1"},`Trial 1`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/130972978-b96e9129-df46-4a80-8176-93639f1758e4.png","alt":"C D Trial 1A"}),`
`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/130972986-f74a39ef-9465-491f-8a37-23dd2a30bd6b.png","alt":"C D Trial 1B"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4",{"id":"trial-2"},`Trial 2`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/130973004-e035e322-7804-49d2-838e-211d8a49bf29.png","alt":"C D Trial 2"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"examples-of-rule-changes-at-subsequent-levels"},`Examples of Rule Changes at Subsequent Levels`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/130973343-b1a41782-c9a2-493d-9a37-748e4900cd93.png","alt":"C D Rules"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sample-instructions-2"},`Sample Instructions`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`"In this game, you will see a screen with many boxes. These boxes will 'lift', revealing either a dog, cat, or nothing behind them. Your task is to tap the correct boxes, based on what is behind each box. The instructions for which boxes are correct will change depending on the level, so pay attention to the animals!"`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"pop-the-bubbles"},`Pop the Bubbles`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Pop the Bubbles is a type of go/no-go task that can measure sustained attention and response control. Go/no-go tasks typically require a response to one stimulus, and response inhibition to another stimulus. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`mindLAMP offers a task with multiple stimuli in the form of bubbles, which participants must  'pop' or ignore. Participants must pay attention the rules for each level to know which bubbles to pop and which to ignore. In addition to color-based responses, higher levels also demand pattern-based responses. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"examples-of-rule-changes-at-subsequent-levels-1"},`Examples of Rule Changes at Subsequent Levels`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/130975328-392de105-18c6-4272-bc13-2c0200773205.png","alt":"Pop Levels"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"customization-2"},`Customization`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The task can be customized by the clinician or researcher in the Activity settings, to adjust the speed at which each bubble is presented, the number of bubbles shown for a given level, and the duration between bubbles.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/130858903-f4e6efc1-1e62-4551-8ece-488611a61c27.png","alt":"Screen Shot 2021-08-23 at 3 23 36 PM"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"scoring-1"},`Scoring`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Final scores on based on the number of bubbles successfully popped, the number of incorrectly missed bubbles, the number of correctly-ignored bubbles and the number of incorrectly popped bubbles, as shown below:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/130975605-572b2c88-89cd-4121-a2cd-22e1bced2656.png","alt":"Pop Score (1)"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sample-instructions-3"},`Sample Instructions`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`"In this game, you will see lots of different colored bubbles, one at a time. Your task is to "pop" the correctly colored bubbles, while ignoring the incorrect ones. Pay attention to the instructions for each level to know which colored bubbles you should tap, and which ones you should ignore."`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"balloon-risk"},`Balloon Risk`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Balloon Risk, or the Balloon Analog Risk Task is a risk-reward task, in which participants must tap to inflate a balloon to the largest possible size without it bursting. The task has been successfully used as a computerized assessment for risk-taking behavior.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sample-game-play-2"},`Sample Game Play`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131180830-892e1ce4-5c22-404f-93e0-1693f7bcc590.png","alt":"Balloon Risk T1"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"customizations"},`Customizations`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Balloon Count:`),` This will change the number of balloon trials required to complete the task. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Breakpoint Mean and Standard Deviation:`),` The task can be customized to alter the mean number of taps required to burst the balloon, as well as the standard deviation for the number of taps required. These can be used to adjust the level of risk. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{parentName:"p","src":"https://user-images.githubusercontent.com/82968538/131181080-a61d2e72-1af7-4497-9d20-def6e5becb31.png","alt":"Screen Shot 2021-08-23 at 3 24 53 PM"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"scoring-2"},`Scoring`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Participants are given points based on the number of taps they made before they stopped inflating the balloon, or no points if the balloon burst.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"sample-instructions-4"},`Sample Instructions`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},`Tap the button to 'Pump Up Balloon' to inflate it as large as you can, before the balloon bursts. When you feel like you can't inflate it anymore without it bursting, tap the button to 'Collect Points'. The number of times you pumped up the balloon will be equal to the number of points you get. If the balloon bursts, you get no points!`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);