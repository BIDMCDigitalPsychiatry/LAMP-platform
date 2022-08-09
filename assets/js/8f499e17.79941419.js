"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[5845],{

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

/***/ 37861:
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
const frontMatter={};const contentTitle='Troubleshooting';const metadata={"unversionedId":"troubleshooting","id":"troubleshooting","title":"Troubleshooting","description":"In case your app is running into issues or you have questions regarding setting up, see this section to see if the solutions listed help! If you are a collaborator or a researcher using mindLAMP, please post on our community forums here. If you are still in need of further assistance, please file a report through our bug reporting form here.","source":"@site/docs/11-troubleshooting.md","sourceDirName":".","slug":"/troubleshooting","permalink":"/troubleshooting","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/11-troubleshooting.md","tags":[],"version":"current","lastUpdatedBy":"dcurrey88","lastUpdatedAt":1660070784,"formattedLastUpdatedAt":"8/9/2022","sidebarPosition":11,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"MAPNET","permalink":"/consortium/mapnet"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'For Users',id:'for-users',children:[],level:2},{value:'Redownloading',id:'redownloading',children:[],level:2},{value:'Logging out and logging back in',id:'logging-out-and-logging-back-in',children:[],level:2},{value:'Clear data (Android)',id:'clear-data-android',children:[],level:2},{value:'Getting Logged out of the app',id:'getting-logged-out-of-the-app',children:[],level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"troubleshooting"},"Troubleshooting"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In case your app is running into issues or you have questions regarding setting up, see this section to see if the solutions listed help! If you are a collaborator or a researcher using mindLAMP, please post on our community forums ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://mindlamp.discourse.group/"},"here"),". If you are still in need of further assistance, please file a report through our bug reporting form ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.google.com/forms/d/e/1FAIpQLSdy354xNzQVekizuSMePWk_F7YGl9ENencXKJ-T0oo4ZTNkaA/viewform"},"here"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You can also access these links from within the app after logging in and clicking the person icon in the top right corner. Clicking on 'Help and Support' will take you to this documentation page and clicking 'LAMP Community' will take you to the community forums if you are a collaborator and having problems with the app. The 'Contact Us' button will allow you to email us in case you are encountering a unique issue that was unable to be solved after viewing the documentation and posting on the community forums. See the image of where to click to access these links below."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(44347)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{src:(__webpack_require__(50866)/* ["default"] */ .Z)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"for-users"},"For Users"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"redownloading"},"Redownloading"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Many issues occur that might be difficult to reproduce on our end or with other users. A common solution is to attempt uninstalling and the redownloading the app."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"logging-out-and-logging-back-in"},"Logging out and logging back in"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If you go to the top right corner, click on the person icon, which will allow you to access helpful links to contact us as well as logout. Attempt logging out and logging in to see if an issue you are encountering is resolved."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"clear-data-android"},"Clear data (Android)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"For Android users, please go to settings, then apps & notifications. Proceed to click on mindLAMP, then storage & cache, and clear cache to clean data. Sometimes this can help and it will clear stored data on your phone, allowing LAMP to run better. This does not affect data that has already been collected and uploaded, so there is no worry of losing past data."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"getting-logged-out-of-the-app"},"Getting Logged out of the app"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Sometimes, the app may log you out on its own. If this is the case, please try to give us as detailed of response as to when this happened and what other activities you may have been doing at the time you noticed the logout. We are currently investigating this issue, but because of the complexity of people having various phones, scenarios when logged out, and activities on their account, it will be a work in progress. If you experience any issues or have any feedback regarding this issue, please contact as at ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"mailto:team@digitalpsych.org"},"team@digitalpsych.org")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("head",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("meta",{name:"google-site-verification",content:"MDFm8izKofwRdAnUbqg2muDPnSlHISr1EVApzHUI-Z4"})));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 50866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/help-29f43cce83471e8f019eacb799a423ca.png");

/***/ }),

/***/ 44347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

}]);