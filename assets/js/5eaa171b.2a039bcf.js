"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[6484],{

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

/***/ 65036:
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
var _excluded=["components"];var frontMatter={};var contentTitle='Cortex Quick Start Guide';var metadata={"unversionedId":"data_science/cortex/getting-started","id":"data_science/cortex/getting-started","title":"Cortex Quick Start Guide","description":"Setting up Cortex","source":"@site/docs/09-data_science/06-cortex/01-getting-started.md","sourceDirName":"09-data_science/06-cortex","slug":"/data_science/cortex/getting-started","permalink":"/data_science/cortex/getting-started","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-cortex/01-getting-started.md","tags":[],"version":"current","lastUpdatedBy":"dcurrey88","lastUpdatedAt":1650893890,"formattedLastUpdatedAt":"4/25/2022","sidebarPosition":1,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Preparing to Analyze Your Data in R","permalink":"/data_science/r"},"next":{"title":"What is Cortex?","permalink":"/data_science/cortex/what_is_cortex"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Setting up Cortex',id:'setting-up-cortex',children:[],level:2},{value:'Source Code',id:'source-code',children:[],level:2},{value:'Example: Passive data features from Cortex',id:'example-passive-data-features-from-cortex',children:[],level:2},{value:'Example: Retrieving survey data from Cortex',id:'example-retrieving-survey-data-from-cortex',children:[],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"cortex-quick-start-guide"},"Cortex Quick Start Guide"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"setting-up-cortex"},"Setting up Cortex"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You will need Python 3.4+ and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"pip")," installed in order to use Cortex. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"You may need root permissions, using ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"sudo"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Alternatively, to install locally, use ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"pip --user"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"If ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"pip")," is not recognized as a command, use ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"python3 -m pip"),".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If you meet the prerequisites, install Cortex:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-sh"},"pip install lamp-cortex\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If you do not have your environment variables set up (see Advanced section below), you will need to perform the initial server credentials configuraton below:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"import os\nos.environ['LAMP_ACCESS_KEY'] = 'YOUR_EMAIL_ADDRESS'\nos.environ['LAMP_SECRET_KEY'] = 'YOUR_PASSWORD'\nos.environ['LAMP_SERVER_ADDRESS'] = 'YOUR_SERVER_ADDRESS'\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"source-code"},"Source Code"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The source code can be found here: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex"},"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"example-passive-data-features-from-cortex"},"Example: Passive data features from Cortex"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The primary function of Cortex is to provide a set of features derived from pasive data. Data can be pulled either by calling Cortex functions directly, or by using the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"cortex.run()")," function to parse multiple participants or features simultaneously. For example, one feature of interest is screen_duration or the time spent with the phone \"on\"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"First, we can pull this data using the Cortex function. Let's say we want to compute the amount of time spent by\nparticipant: \"U1234567890\" from 11/15/21 (epoch time: 1636952400000) to 11/30/21 (epoch time: 1638248400000) each day (resolution = miliseconds in a day = 86400000):"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"import cortex\nscreen_dur = cortex.secondary.screen_duration.screen_duration(\"U1234567890\", start=1636952400000, end=1638248400000, resolution=86400000)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The output would look something like this:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"{'timestamp': 1636952400000,\n 'duration': 1296000000,\n 'resolution': 86400000,\n 'data': [{'timestamp': 1636952400000, 'value': 0.0},\n  {'timestamp': 1637038800000, 'value': 0.0},\n  {'timestamp': 1637125200000, 'value': 0.0},\n  {'timestamp': 1637211600000, 'value': 0.0},\n  {'timestamp': 1637298000000, 'value': 0.0},\n  {'timestamp': 1637384400000, 'value': 0.0},\n  {'timestamp': 1637470800000, 'value': 8425464},\n  {'timestamp': 1637557200000, 'value': 54589034},\n  {'timestamp': 1637643600000, 'value': 50200716},\n  {'timestamp': 1637730000000, 'value': 38500923},\n  {'timestamp': 1637816400000, 'value': 38872835},\n  {'timestamp': 1637902800000, 'value': 46796405},\n  {'timestamp': 1637989200000, 'value': 42115755},\n  {'timestamp': 1638075600000, 'value': 44383154}]}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The 'data' in the dictionary holds the start timestamps (of each day from 11/15/21 to 11/29/21) and the screen duration for each of these days."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Second, we could have pulled this same data using the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"cortex.run")," function. Note that ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"resolution")," is automatically set to a day in ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"cortex.run"),". To invoke ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"cortex.run"),", you must provide a specific ID or a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"list")," of IDs (only ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Researcher"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Study"),", or ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Participant")," IDs are supported). Then, you specify the behavioral features to generate and extract. Once Cortex finishes running, you will be provided a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"dict")," where each key is the behavioral feature name, and the value is a dataframe. You can use this dataframe to save your output to a CSV file, for example, or continue data processing and visualization. This function call would look like this:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"import cortex\nscreen_dur = cortex.run(\"U1234567890\", ['screen_duration'], start=1636952400000, end=1638248400000)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"And the output might look like:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"{'screen_duration':              id           timestamp       value\n 0   U1234567890 2021-11-15 05:00:00         0.0\n 1   U1234567890 2021-11-16 05:00:00         0.0\n 2   U1234567890 2021-11-17 05:00:00         0.0\n 3   U1234567890 2021-11-18 05:00:00         0.0\n 4   U1234567890 2021-11-19 05:00:00         0.0\n 5   U1234567890 2021-11-20 05:00:00         0.0\n 6   U1234567890 2021-11-21 05:00:00   8425464.0\n 7   U1234567890 2021-11-22 05:00:00  54589034.0\n 8   U1234567890 2021-11-23 05:00:00  50200716.0\n 9   U1234567890 2021-11-24 05:00:00  38500923.0\n 10  U1234567890 2021-11-25 05:00:00  38872835.0\n 11  U1234567890 2021-11-26 05:00:00  46796405.0\n 12  U1234567890 2021-11-27 05:00:00  42115755.0\n 13  U1234567890 2021-11-28 05:00:00  44383154.0}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The output is the same as above, except the 'data' has been transformed into a Pandas DataFrame. Additionally, the dictionary is indexed by feature -- this way you can add to the list of features processed at once. Finally, a column \"id\" has been added so that multiple participants can be processed simultaneously. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"We can process two participants and add \"entropy\" to our feature list. Instead of 11/15-11/29/21, let's change the timeframe to the past 7 days. If you try this with your own participant IDs, it may take a moment to run:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"import cortex\nMS_IN_A_DAY = 1000 * 60 * 60 * 24 # The miliseconds in a day\nfeatures = cortex.run([\"U1234567890\", \"U0011008800\"], ['screen_duration', 'entropy'], start=cortex.now() - 7 * MS_IN_A_DAY, end=cortex.now())\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Output:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"{'screen_duration':             id           timestamp       value\n 0  U1234567890 2021-12-05 05:00:00  37035845.0\n 1  U1234567890 2021-12-06 05:00:00  53403478.0\n 2  U1234567890 2021-12-07 05:00:00  40274745.0\n 3  U1234567890 2021-12-08 05:00:00  46607703.0\n 4  U1234567890 2021-12-09 05:00:00  50506566.0\n 5  U1234567890 2021-12-10 05:00:00  45152245.0\n 0  U0011008800 2021-12-05 05:00:00  18144929.0\n 1  U0011008800 2021-12-06 05:00:00  49786516.0\n 2  U0011008800 2021-12-07 05:00:00  18542471.0\n 3  U0011008800 2021-12-08 05:00:00  18710925.0\n 4  U0011008800 2021-12-09 05:00:00         0.0\n 5  U0011008800 2021-12-10 05:00:00         0.0,\n 'entropy':             id           timestamp     value\n 0  U1234567890 2021-12-05 05:00:00 -0.000000\n 1  U1234567890 2021-12-06 05:00:00 -0.000000\n 2  U1234567890 2021-12-07 05:00:00 -0.000000\n 3  U1234567890 2021-12-08 05:00:00 -0.000000\n 4  U1234567890 2021-12-09 05:00:00  0.491646\n 5  U1234567890 2021-12-10 05:00:00 -0.000000\n 0  U0011008800 2021-12-05 05:00:00 -0.000000\n 1  U0011008800 2021-12-06 05:00:00 -0.000000\n 2  U0011008800 2021-12-07 05:00:00  0.214006\n 3  U0011008800 2021-12-08 05:00:00  0.191434\n 4  U0011008800 2021-12-09 05:00:00       NaN\n 5  U0011008800 2021-12-10 05:00:00       NaN}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"example-retrieving-survey-data-from-cortex"},"Example: Retrieving survey data from Cortex"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"We can also run the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"survey")," feature (which is not a behavioral feature, but rather a convenience around raw survey data) and save it to a csv using Pandas:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-python"},"import cortex\ncortex.run('YOUR_RESEARCHER_ID', ['survey'], start=0, end=cortex.now())['survey'].to_csv('~/export.csv', index=False)\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Yielding the following CSV output: "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-csv"},"id,timestamp,survey,item,value,type,duration,level\nU123456789,2020-01-16 20:57:01,RA,RA Initials,test,,0,\nU123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire, I feel better about myself,Neither agree nor disagree,,0,\nU123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,I feel able to take chances in life,Agree Strongly,,0,\nU123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,I am able to develop positive relationships with other people ,Agree,,0,\nU123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire, I feel part of society rather than isolated,Neither agree nor disagree,,0,\nU123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,I am able to assert myself,Disagree ,,0,\nU123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,I feel that my life has a purpose ,Agree Strongly,,0,\nU123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire,My experiences have changed me for the better,Agree,,0,\nU123456789,2020-01-16 20:56:50,SELF REPORT: Process of Recovery Questionnaire, I have been able to come to terms with things that  have happened to me in the past and move on with  my life,Disagree,,0,\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You can then load this CSV file into Microsoft Excel (or Apple Numbers on macOS). Additionally, you can add Categories to group the data by ID, survey, and the specific time that the survey was taken. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(93552)/* ["default"] */ .Z)})));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 93552:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/cortex_excel_survey_group-7e8d03b2bc61a29dcffeb2f2b13d4ccf.png");

/***/ })

}]);