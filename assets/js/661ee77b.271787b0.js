"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[2737],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
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

/***/ 66695:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },
/* harmony export */   "default": function() { return /* binding */ MDXContent; },
/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "toc": function() { return /* binding */ toc; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87462);
/* harmony import */ var _home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
var _excluded=["components"];var frontMatter={};var contentTitle='Data Quality';var metadata={"unversionedId":"data_science/cortex/visualizations/data-quality","id":"data_science/cortex/visualizations/data-quality","title":"Data Quality","description":"Why care about passive data?","source":"@site/docs/09-data_science/06-cortex/06-visualizations/01-data-quality.md","sourceDirName":"09-data_science/06-cortex/06-visualizations","slug":"/data_science/cortex/visualizations/data-quality","permalink":"/data_science/cortex/visualizations/data-quality","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/06-visualizations/01-data-quality.md","tags":[],"version":"current","lastUpdatedBy":"Luke Scheuer","lastUpdatedAt":1650554620,"formattedLastUpdatedAt":"4/21/2022","sidebarPosition":1,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Trip Duration","permalink":"/data_science/cortex/features/secondary/trip_duration"},"next":{"title":"Basic Analysis","permalink":"/data_science/cortex/visualizations/basic_analysis"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Why care about passive data?',id:'why-care-about-passive-data',children:[{value:'1) Activity counts over the last week:',id:'1-activity-counts-over-the-last-week',children:[],level:3},{value:'2) A measure of screen, GPS, and accelerometer quality over the past week:',id:'2-a-measure-of-screen-gps-and-accelerometer-quality-over-the-past-week',children:[],level:3},{value:'3) Average screen time, steps, and home time over the past week, as a sanity check:',id:'3-average-screen-time-steps-and-home-time-over-the-past-week-as-a-sanity-check',children:[],level:3},{value:'Where are the graphs I&#39;ve generated?',id:'where-are-the-graphs-ive-generated',children:[],level:3}],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"data-quality"},"Data Quality"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"why-care-about-passive-data"},"Why care about passive data?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"It is collected continuously, in the background."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"It can be used to help understand behaviors."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Correlations with survey data can provide interesting insights. ")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Missing data is problematic because it will affect the validity of passive features. There are multiple reasons you could have low data collection including:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Permissions not set properly"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Low battery"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"App has not been used in a while"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Remote area (for GPS)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Phone not in use (OS turns off data collection)")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"As such, it is important to monitor data to ensure that you have enough data to create good quality features. If you have participants with low data, you can follow up and try to resolve the issue. We have created visualizations that can be attached to your Data Portal on the Dashboard to provide a summary of your participant's data. These include:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"1-activity-counts-over-the-last-week"},"1) Activity counts over the last week:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(21490)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"2-a-measure-of-screen-gps-and-accelerometer-quality-over-the-past-week"},"2) A measure of screen, GPS, and accelerometer quality over the past week:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The graph has tool tips. If you hover over a colored block in the graph it will tell you the computed data frequency (percentage of hours with data) as well as any days where the participant had no data."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(26086)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"3-average-screen-time-steps-and-home-time-over-the-past-week-as-a-sanity-check"},"3) Average screen time, steps, and home time over the past week, as a sanity check:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(41132)/* ["default"] */ .Z)}),"\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(41032)/* ["default"] */ .Z)}),"\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(26403)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"To generate these graphs, you can either call a function from Cortex, or download the source code from Github and run a bash script."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"To use the Cortex function, make sure that Cortex is installed. Then use the following code (substituting \"researcher_id\" with your own ID):"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"import cortex\ncortex.visualizations.data_quality.data_quality(researcher_id)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"To run the bash script, first clone the cortex repository from source:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"git clone https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex.git\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Then from inside the LAMP-cortex folder run the bash script (substituting \"researcher_id\" with your own ID):"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"./cortex/visualizations/run_data_quality.sh \"researcher_id\"\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"where-are-the-graphs-ive-generated"},"Where are the graphs I've generated?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Graphs are attached to the Data Portal. To Navigate to the Data Portal, go to the Dashboard and click \"Data Portal\" on the left hand side:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(30576)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Search for and select your researcher. Then toggle the button next to \"Analyze participant data\" to see the researcher graphs."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(36980)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Here, under graphs.data_quality, you should see the three graphs shown above: activity counts, passive features, and quality tags (along with any others you may have created). You can click on the buttons to view each graph."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(50113)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"For more information, please go to the Data Portal section of the documentation."));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 21490:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/activities_qual_viz-0d01b21d3c82cc45abb2d01f2204c85f.png");

/***/ }),

/***/ 30576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/data_portal_viz0-e2944d3872bbf83e9d6b16fc462a2dc4.png");

/***/ }),

/***/ 36980:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/data_portal_viz1-81b3f0ea979f939c3aacca4c4b3154d4.png");

/***/ }),

/***/ 50113:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/data_portal_viz2-f8dccebfe96aa85b856e8ba3041760ee.png");

/***/ }),

/***/ 41132:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/hometime_qual_viz-5d049ab94ace930cb51cd6bd27759505.png");

/***/ }),

/***/ 41032:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/screen_dur_qual_viz-a97fd67e9a0ed9ddbc629e027e120b97.png");

/***/ }),

/***/ 26403:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/steps_qual_viz-245aa42d0beeff20f1edbcc62d91d69b.png");

/***/ }),

/***/ 26086:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/tags_qual_viz-1e08da92d16e4142525aeb3ebc3977b6.png");

/***/ })

}]);