"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[6549],{

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

/***/ 61405:
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
const frontMatter={};const contentTitle='Customize Emotions on a DBT Diary Card';const metadata={"unversionedId":"consortium/LAC/Clinicians/emotions","id":"consortium/LAC/Clinicians/emotions","title":"Customize Emotions on a DBT Diary Card","description":"1. Log in to the dashboard and navigate to the Activities tab.","source":"@site/docs/10-consortium/04-LAC/01-Clinicians/09-emotions.md","sourceDirName":"10-consortium/04-LAC/01-Clinicians","slug":"/consortium/LAC/Clinicians/emotions","permalink":"/consortium/LAC/Clinicians/emotions","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/10-consortium/04-LAC/01-Clinicians/09-emotions.md","tags":[],"version":"current","lastUpdatedBy":"Aditya Vaidyam","lastUpdatedAt":1683734871,"formattedLastUpdatedAt":"5/10/2023","sidebarPosition":9,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Customize Target Behaviors on a DBT Diary Card","permalink":"/consortium/LAC/Clinicians/behaviors"},"next":{"title":"Complete a DBT Diary Card for a Client","permalink":"/consortium/LAC/Clinicians/impersonate"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"customize-emotions-on-a-dbt-diary-card"},`Customize Emotions on a DBT Diary Card`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/x4CVaLhFf0o",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:true}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Log in to the dashboard and navigate to the Activities tab.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Click the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`[+ Add]`),` button at the top right of the list and select DBT Diary Card.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Create a title for the client's DBT Diary Card.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Add the life worth living goal.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Add target behaviors and target ineffective behavoirs.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Add an emotion by selecting the red `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`[+ ADD ITEM]`),` text.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Type the emotion in the text box.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(63050)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{"start":9},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Save the customized diary card by clicking the blue `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`Save`),` button in the bottom right-hand corner.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(33404)/* ["default"] */ .Z)})));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 63050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/emotions_create-415846548e4599ed4a5d080dd38e27b4.jpg");

/***/ }),

/***/ 33404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,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");

/***/ })

}]);