"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[4645],{

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

/***/ 50046:
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
var _excluded=["components"];var frontMatter={slug:'/faq'};var contentTitle='Frequently Asked Questions';var metadata={"unversionedId":"quick_links/faq","id":"quick_links/faq","title":"Frequently Asked Questions","description":"Why are there two mindLAMP apps available? Which one should I use?","source":"@site/docs/02-quick_links/03-faq.md","sourceDirName":"02-quick_links","slug":"/faq","permalink":"/faq","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/02-quick_links/03-faq.md","tags":[],"version":"current","lastUpdatedBy":"dcurrey88","lastUpdatedAt":1651168703,"formattedLastUpdatedAt":"4/28/2022","sidebarPosition":3,"frontMatter":{"slug":"/faq"},"sidebar":"defaultSidebar","previous":{"title":"Report issues","permalink":"/bug"},"next":{"title":"Security & Privacy Policy","permalink":"/privacy"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Why are there two mindLAMP apps available? Which one should I use?',id:'why-are-there-two-mindlamp-apps-available-which-one-should-i-use',children:[],level:3},{value:'How do I transition from mindLAMP 1 to mindLAMP 2?',id:'how-do-i-transition-from-mindlamp-1-to-mindlamp-2',children:[],level:3},{value:'Do I need a wearable to collect passive data?',id:'do-i-need-a-wearable-to-collect-passive-data',children:[],level:3},{value:'What can I customize to my study or clinic?',id:'what-can-i-customize-to-my-study-or-clinic',children:[],level:3},{value:'What&#39;s a system administrator?',id:'whats-a-system-administrator',children:[],level:3},{value:'How do I get login information?',id:'how-do-i-get-login-information',children:[],level:3},{value:'How do I reset my password?',id:'how-do-i-reset-my-password',children:[],level:3},{value:'What&#39;s a study?',id:'whats-a-study',children:[],level:3},{value:'What&#39;s the difference between a survey and an activity?',id:'whats-the-difference-between-a-survey-and-an-activity',children:[],level:3},{value:'How do I create a survey?',id:'how-do-i-create-a-survey',children:[],level:3},{value:'Can I edit a survey?',id:'can-i-edit-a-survey',children:[],level:3},{value:'What happens to my data after I delete a survey?',id:'what-happens-to-my-data-after-i-delete-a-survey',children:[],level:3},{value:'How do I delete a survey?',id:'how-do-i-delete-a-survey',children:[],level:3},{value:'How do I customize an activity?',id:'how-do-i-customize-an-activity',children:[],level:3},{value:'There aren&#39;t any surveys or activities in my Feed. Why?',id:'there-arent-any-surveys-or-activities-in-my-feed-why',children:[],level:3},{value:'Why is my Manage section appearing blank?',id:'why-is-my-manage-section-appearing-blank',children:[],level:3},{value:'Who can see my data?',id:'who-can-see-my-data',children:[],level:3},{value:'Does the mindLAMP app work offline?',id:'does-the-mindlamp-app-work-offline',children:[],level:3},{value:'Where do I report a bug or request a feature?',id:'where-do-i-report-a-bug-or-request-a-feature',children:[],level:3},{value:'Is mindLAMP 2 available in other languages?',id:'is-mindlamp-2-available-in-other-languages',children:[],level:3},{value:'Is there a page for quick troubleshooting?',id:'is-there-a-page-for-quick-troubleshooting',children:[],level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"frequently-asked-questions"},"Frequently Asked Questions"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"why-are-there-two-mindlamp-apps-available-which-one-should-i-use"},"Why are there two mindLAMP apps available? Which one should I use?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The app that is associated with the LAMP Platform is called mindLAMP. mindLAMP 1 is no longer being used and has been replaced by mindLAMP 2. You will no longer be able to download or use the mindLAMP 1 app in early 2021."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"how-do-i-transition-from-mindlamp-1-to-mindlamp-2"},"How do I transition from mindLAMP 1 to mindLAMP 2?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If you are using mindLAMP with a web browser like Chrome, Safari, Firefox etc. then it will automatically have updated. If you are using the app, simply download mindLAMP 2 from the App Store or Play Store and log in."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"do-i-need-a-wearable-to-collect-passive-data"},"Do I need a wearable to collect passive data?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"HealthKit data is only available with wearables with two exceptions: step count and sleep data. Step count can be gathered through your mobile device, and sleep data can be gathered by downloading specific apps on iOS (napbot) and Android (sleep as android). mindLAMP requires WatchOS 7 and WearOS 2."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"what-can-i-customize-to-my-study-or-clinic"},"What can I customize to my study or clinic?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You are able to customize tips in Learn, surveys in Assess, activities in Assess and Manage, and potentially visualizations in Prevent."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"whats-a-system-administrator"},"What's a system administrator?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This is usually your Information Technology (IT) or Information Services (IS) department at your institution."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"how-do-i-get-login-information"},"How do I get login information?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If you or your organization is self-hosting the LAMP Platform independently, please contact your administrator or IT department for your login information; ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"mailto:team@digitalpsych.org"},"otherwise, please contact us.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"how-do-i-reset-my-password"},"How do I reset my password?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If you are a study participant, please reach out to your research coordinator. If you are a patient, please reach out to your clinician. If you are a research coordinator or clinician, please reach out to your system administrator or IT department. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"whats-a-study"},"What's a study?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A study comprises of a set of activities that multiple patients will interact with and receive notifications for, such as surveys or breathing exercises, as well as a set of sensors which will be enabled to collect data on the patients' smartphones or wearable devices. Researchers and clinicians add able to create and manage multiple studies."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"whats-the-difference-between-a-survey-and-an-activity"},"What's the difference between a survey and an activity?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"\"Activity\" is a broad term that encompasses different items that patients can interact with inside of the mindLAMP app. This includes cognitive tests, mindfulness, meditation, and more. A survey is a type of activity that presents a set of questions for patients or participants to answer."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"how-do-i-create-a-survey"},"How do I create a survey?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Click the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"[+ Add]")," button at the top right of the list and select \"Survey Instrument\"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"can-i-edit-a-survey"},"Can I edit a survey?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Yes, you can edit it from the activities tab by tapping on its row in the list. We recommend only editing surveys to fix typos or adjust the language of a question or response choice."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"what-happens-to-my-data-after-i-delete-a-survey"},"What happens to my data after I delete a survey?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Deleting a survey or other activity automatically deletes their response data across all participants or patients. This data is always recoverable \u2014 please reach out to your system administrator for help recovering data. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"how-do-i-delete-a-survey"},"How do I delete a survey?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Select one or more survey instruments you would like to delete and press the trash can icon at the top right of the list."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"how-do-i-customize-an-activity"},"How do I customize an activity?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Click the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"[+ Add]")," button at the top right of the list and select your desired activity. All customization options for a specific activity will be on the screen that follows."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"there-arent-any-surveys-or-activities-in-my-feed-why"},"There aren't any surveys or activities in my Feed. Why?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You may need to set schedules for the surveys or activities that you have assigned to your study. Please make sure you're viewing the Feed on a day where one of those schedules is activated to send notifications. "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"why-is-my-manage-section-appearing-blank"},"Why is my Manage section appearing blank?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You must add activities for them to show up in a specific tab. If there are no activities created for a specific tab, that tab will remain blank."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"who-can-see-my-data"},"Who can see my data?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Your system administrator will only access your personal information to support internal operations, including troubleshooting/user support, and service improvements. To ensure you are receiving the highest level of service in your interaction with the mindLAMP app, the Division of Digital Psychiatry may use your contact information to communicate with you regarding your requests.\xA0We also use this data to create aggregated statistics which helps us in the improvement of our service."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"does-the-mindlamp-app-work-offline"},"Does the mindLAMP app work offline?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The mindLAMP app does not currently work offline. However, this is a highly requested feature that we are working on."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"where-do-i-report-a-bug-or-request-a-feature"},"Where do I report a bug or request a feature?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Submit any bugs or feature requests here: ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"/bug"},"Report a Bug or Request a Feature")," "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"is-mindlamp-2-available-in-other-languages"},"Is mindLAMP 2 available in other languages?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The mindLAMP app currently supports Hindi and Spanish."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"is-there-a-page-for-quick-troubleshooting"},"Is there a page for quick troubleshooting?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If you require immediate advice on how to solve some commonly encountered issues, please see the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://docs.lamp.digital/troubleshooting"},"Troubleshooting Page")));};MDXContent.isMDXComponent=true;

/***/ })

}]);