"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[1252],{

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

/***/ 15304:
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
var _excluded=["components"];var frontMatter={};var contentTitle='Activities Currently Available on LAMP';var metadata={"unversionedId":"start_here/activities/activities","id":"start_here/activities/activities","title":"Activities Currently Available on LAMP","description":"Assess","source":"@site/docs/06-start_here/06-activities/09-activities.md","sourceDirName":"06-start_here/06-activities","slug":"/start_here/activities/activities","permalink":"/start_here/activities/activities","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/06-start_here/06-activities/09-activities.md","tags":[],"version":"current","lastUpdatedBy":"carlan1","lastUpdatedAt":1654882329,"formattedLastUpdatedAt":"6/10/2022","sidebarPosition":9,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Visualize data","permalink":"/start_here/activities/visualize"},"next":{"title":"Affirmations","permalink":"/start_here/activities/assets/VinfenTips"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Assess',id:'assess',children:[{value:'Surveys',id:'surveys',children:[],level:3},{value:'DBT Diary Card',id:'dbt-diary-card',children:[],level:3},{value:'Box Game/Spatial Span',id:'box-gamespatial-span',children:[],level:3},{value:'Cats and Dogs',id:'cats-and-dogs',children:[],level:3},{value:'Jewels',id:'jewels',children:[],level:3},{value:'Balloon Risk',id:'balloon-risk',children:[],level:3},{value:'Pop the Bubbles',id:'pop-the-bubbles',children:[],level:3}],level:2},{value:'Manage',id:'manage',children:[{value:'Mindfulness/Breathe',id:'mindfulnessbreathe',children:[],level:3},{value:'Scratch Image',id:'scratch-image',children:[],level:3},{value:'Journal',id:'journal',children:[],level:3}],level:2},{value:'Assess',id:'assess-1',children:[{value:'N-Back',id:'n-back',children:[],level:3},{value:'Simple Memory',id:'simple-memory',children:[],level:3},{value:'Serial 7s',id:'serial-7s',children:[],level:3},{value:'3D Figure Copy',id:'3d-figure-copy',children:[],level:3},{value:'Trails B',id:'trails-b',children:[],level:3},{value:'Trails B Dot Touch',id:'trails-b-dot-touch',children:[],level:3},{value:'Temporal Order',id:'temporal-order',children:[],level:3},{value:'Digit Span',id:'digit-span',children:[],level:3},{value:'Visual Association',id:'visual-association',children:[],level:3}],level:2},{value:'Manage',id:'manage-1',children:[{value:'Goal Setting',id:'goal-setting',children:[],level:3},{value:'Medication Tracker',id:'medication-tracker',children:[],level:3},{value:'Hope Box',id:'hope-box',children:[],level:3}],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"activities-currently-available-on-lamp"},"Activities Currently Available on LAMP"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"assess"},"Assess"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"surveys"},"Surveys"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(89015)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"dbt-diary-card"},"DBT Diary Card"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(85557)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"box-gamespatial-span"},"Box Game/Spatial Span"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(95910)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"cats-and-dogs"},"Cats and Dogs"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(5201)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"jewels"},"Jewels"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(4364)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"balloon-risk"},"Balloon Risk"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"pop-the-bubbles"},"Pop the Bubbles"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"manage"},"Manage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"mindfulnessbreathe"},"Mindfulness/Breathe"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Anchoring Ambience"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Breathe with Your Body"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Breathing Exercise"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Calming Your Body"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Forest and Nature Sounds"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Inner Teacher"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Kindness"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Loving Kindness"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Mountain Meditation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Positive Thinking"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Nature Relaxation\n",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(54097)/* ["default"] */ .Z)}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"scratch-image"},"Scratch Image"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(20864)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"journal"},"Journal"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(4499)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"activities-coming-soon"},"Activities Coming Soon"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"assess-1"},"Assess"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"n-back"},"N-Back"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(23484)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"simple-memory"},"Simple Memory"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(16445)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"serial-7s"},"Serial 7s"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(24380)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"3d-figure-copy"},"3D Figure Copy"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(35833)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"trails-b"},"Trails B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(99187)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"trails-b-dot-touch"},"Trails B Dot Touch"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(21217)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"temporal-order"},"Temporal Order"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(12352)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"digit-span"},"Digit Span"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(50858)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"visual-association"},"Visual Association"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(53537)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"manage-1"},"Manage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"goal-setting"},"Goal Setting"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"![](assets/goal_setting.png"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"medication-tracker"},"Medication Tracker"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(42764)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"hope-box"},"Hope Box"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(42112)/* ["default"] */ .Z)})));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 35833:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/3D_fig_ex-766a37efb1b10e9ef1d4c4522f482ced.png");

/***/ }),

/***/ 54097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/breathe_ex-3dd655fb80ce77b459c2bebbc2970486.png");

/***/ }),

/***/ 5201:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/cats_n_dogs_ex-03adbf61521adc6104c9ed006f66cabb.png");

/***/ }),

/***/ 85557:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/dbt_ex-c48a67fabae9a402050c1ab97411a8f1.png");

/***/ }),

/***/ 50858:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/digital_span-689e14680afe121fb8e4818d04c768c1.png");

/***/ }),

/***/ 42112:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/hope_box_ex-27100a0f6edd6ba8fb572a28cec6a8a8.png");

/***/ }),

/***/ 4364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/jewels_ex-aa1cd7f19e3565b0bbeb80b0190a721b.png");

/***/ }),

/***/ 4499:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/jounral_ex-d8d86674b25a89af746ce8cba0821ef7.png");

/***/ }),

/***/ 42764:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/medication_ex-4c5fcaff4f6e31b454cfb11d99ca34af.png");

/***/ }),

/***/ 23484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/nback_ex-8a1e113431d61414190bd55a56fb0189.png");

/***/ }),

/***/ 20864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/scratch_ex-1094e40788c402d3180b03e4c1e5bffd.png");

/***/ }),

/***/ 24380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/serial_ex-60bac76968edcabd6f949bfafc303e92.png");

/***/ }),

/***/ 16445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/simple_memory_ex-2f817d004f039a98fb532d16cf3eb3d7.png");

/***/ }),

/***/ 95910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/spatial_span_ex-df1faae4ce89ae10d0708f33a833ef7c.png");

/***/ }),

/***/ 89015:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/survey_ex-2cbc71f71fa79126254efb6ef80a3595.png");

/***/ }),

/***/ 12352:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/temp_order-4895ce7eaf57d9d509eec4f0b1187210.png");

/***/ }),

/***/ 21217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/trails_b_dot_ex-780b796a7245e2c8252f73514a2cf8f6.png");

/***/ }),

/***/ 99187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/trails_b_ex-73a98157ac0d68f4e483ab8570ad78ff.png");

/***/ }),

/***/ 53537:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ __webpack_exports__["Z"] = (__webpack_require__.p + "assets/images/visual_assoc-c4053ccb7f0b6d32bdc9e954db80457d.png");

/***/ })

}]);