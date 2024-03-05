"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[8430],{

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

/***/ 70564:
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
const frontMatter={};const contentTitle='Participant-Level Visualizations';const metadata={"unversionedId":"data_science/cortex/visualizations/participant_level","id":"data_science/cortex/visualizations/participant_level","title":"Participant-Level Visualizations","description":"At times, it may be necessary to run specific analyses on one participant - for example, to ensure continuous data quality monitoring or check the level of interaction with LAMP. The following functions are designed to run on a specific participant and return information that may be helpful either with monitoring LAMP data collection or examining cortex scores","source":"@site/docs/09-data_science/06-cortex/06-visualizations/03-participant_level.md","sourceDirName":"09-data_science/06-cortex/06-visualizations","slug":"/data_science/cortex/visualizations/participant_level","permalink":"/data_science/cortex/visualizations/participant_level","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/06-visualizations/03-participant_level.md","tags":[],"version":"current","lastUpdatedBy":"carlan1","lastUpdatedAt":1709663378,"formattedLastUpdatedAt":"3/5/2024","sidebarPosition":3,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Basic Analysis","permalink":"/data_science/cortex/visualizations/basic_analysis"},"next":{"title":"General functions","permalink":"/data_science/cortex/utils/general_functions"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Passive Data Quality',id:'passive-data-quality',children:[{value:'Function',id:'function',children:[],level:3},{value:'Parameters',id:'parameters',children:[],level:3},{value:'Code Example',id:'code-example',children:[],level:3}],level:2},{value:'Active Data Quality',id:'active-data-quality',children:[{value:'Function',id:'function-1',children:[],level:3},{value:'Parameters',id:'parameters-1',children:[],level:3},{value:'Code Example',id:'code-example-1',children:[],level:3}],level:2},{value:'Cortex Tertiles',id:'cortex-tertiles',children:[{value:'Function',id:'function-2',children:[],level:3},{value:'Parameters',id:'parameters-2',children:[],level:3},{value:'Code Example',id:'code-example-2',children:[],level:3}],level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"participant-level-visualizations"},`Participant-Level Visualizations`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`At times, it may be necessary to run specific analyses on one participant - for example, to ensure continuous data quality monitoring or check the level of interaction with LAMP. The following functions are designed to run on a specific participant and return information that may be helpful either with monitoring LAMP data collection or examining cortex scores`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"passive-data-quality"},`Passive Data Quality`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"function"},`Function`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`    cortex.visualizations.participant.passive(id)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`This function produces two graphs intended to help assess data quality - a scatterplot and a heatmap, which both show on an hourly level the amount of data collected over the previous week. Data is stored in attachments to prevent unnecessary server load on subsequent runs - as such, this can be run repeatedly throughout the week to speed up individual runs.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"parameters"},`Parameters`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`id_list`),`: A string or array of strings of LAMP ids (participant, study, researcher)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`show_graphs`),`: If True, graphs are displayed in the output`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`attach_graphs`),`: If True, graphs are attached to the participant`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`display_graphs`),`: If True, graphs are attached to the study and researcher for display`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`days_ago`),`: The number of days ago the analysis should end. If 0, analysis ends on the current timestamp`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`sample_length`),`: The number of days to query data for`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`set_to_utc_midnight`),`: If True, timestamps are adjusted to UTC midnight`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`reporter_func`),`: The function that should output important logging info. Use with a webhook, for example logging to slack`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`return_dict`),`: If true, returns a dictionary containing data output. Else returns None.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`reset`),`: If true, data from previous runs will be deleted.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"code-example"},`Code Example`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`researcher_id='ffmz65mn1gtav5fq3bhq'
cortex.visualizations.participant.passive(researcher_id,attach_graphs=False)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`First Time:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Found no U5946075691 data under lamp.analysis.Accel_Quality_stored
Querying for U5946075691 - Accel_Quality
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Repeat Time:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`Querying for U5946075691 - GPS_Quality
Previous data was found. 168 chunks were excluded.
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Scatterplot:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(36901)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Heatmap:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(71019)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"active-data-quality"},`Active Data Quality`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"function-1"},`Function`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`    cortex.visualizations.participant.active(id)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`This function produces a graph intended to help assess participant interaction with lamp - a stacked bar chart, which shows on an daily level the number of LAMP activities collected each day. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"parameters-1"},`Parameters`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`id_list`),`: a string or array of strings of LAMP ids(participant, study, researcher)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`target_array`),`: a list of specs, names, or ids to display. Default is all. Include '' to show all activities.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`exclude_array`),`: a list of names to exclude. Default is None.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`exclude_groups`),`: attempt to exclude group completions`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`show_graphs`),`: if True, graphs are displayed in the output`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`attach_graphs`),`: if True, graphs are attached to the participant`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`display_graphs`),`: if True, graphs are attached to the study and researcher for display`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`graph_name`),`: set to another string to override the default name`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`days_ago`),`: the number of days ago the analysis should end.If 0, analysis ends on the current timestamp`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`sample_length`),`: The number of days to query data for`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`reporter_func`),`: The function that should output important logging info.Use with a webhook, for example logging to slack`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`return_dict`),`: If true, returns a dictionary containing data output. Else returns None.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"code-example-1"},`Code Example`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`cortex.visualizations.participant.active('U1978824471',attach_graphs=True,days_ago=160,sample_length=30)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(65365)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"cortex-tertiles"},`Cortex Tertiles`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"function-2"},`Function`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`    cortex.visualizations.participant.cortex_tertiles(id)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`This function produces a graph intended to help assess how participant's cortex measures change day by day. Using a 'lollipop' chart, researcher can visualize whether a particpant's scores on different cortex measures are high, medium, or low, relative to a week's worth of measurements.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"parameters-2"},`Parameters`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`target_id`),`: Required. a string or array of LAMP user, study, or researcher ids.All user ids below one or more ids in the list (if applicable) will be run`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`cortex_measures`),`: Default:`,`['acc_energy','entropy','hometime','screen_duration']`,`. a string, list, or dict of cortex measures. If a dict, keys will be used for the array fed into run and the values will be used as labels. E.g. `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`{'sleep_periods':'Sleep'}`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`measure_params`),`: Measure params to pass into cortex`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`use_cache`),`: If true, attempt to use cached data`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`show_graphs`),`:Default True. a boolean - whether to show graphs generated to the user running the function call`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`attach_graphs`),`:Default True. a boolean - whether to attach graphs to the participant as a tag`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`display_graphs`),`:Default True. a boolean - whether to display graphs tothe participant on their prevent page`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`days_ago`),`: Default 0. Number of days ago to end analysis. Set to 0 to end analysis today`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`sample_length`),`: Default 7. Timespan for analysis, in days.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`reporter_func`),`: Default 'print'. A function which should take one variable,which are outputs from this function, and displays them to a user`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`set_to_utc_midnight`),`: Default True. Whether or not to set the utc time to true`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`return_dict`),`: Default False. Whether or not to return a dictionary of all cortex outputs at the end.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"code-example-2"},`Code Example`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`cortex.visualizations.participant.cortex_tertiles(['U1978824471'],attach_graphs=True,use_cache=True)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(52830)/* ["default"] */ .A)}),`
`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(62451)/* ["default"] */ .A)}),`
`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(74114)/* ["default"] */ .A)})));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 65365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/active_plot-e82921fee658093679a4dc572b8d5945.png");

/***/ }),

/***/ 52830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/entropy-d66411dea03dd4d68d3976a89910c03c.png");

/***/ }),

/***/ 62451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/hometime-3c6dd6217253874d5503415250903938.png");

/***/ }),

/***/ 71019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/passive_heatmap-50d130f748fefdda9f7ee7bf6b09df4c.png");

/***/ }),

/***/ 36901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/passive_scatter-8f1d1fe60415460f52b3257934d9337a.png");

/***/ }),

/***/ 74114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/screen_duration-48500d85c1978ee5a446a32f63dd1ce7.png");

/***/ })

}]);