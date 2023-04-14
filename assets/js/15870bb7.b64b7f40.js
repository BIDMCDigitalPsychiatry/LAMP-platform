"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[6853],{

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

/***/ 55680:
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
const frontMatter={};const contentTitle='Create an Activity for a Study.';const metadata={"type":"api","id":"create-an-activity-for-a-study","unversionedId":"create-an-activity-for-a-study","title":"Create an Activity for a Study.","description":"","slug":"/create-an-activity-for-a-study","frontMatter":{},"api":{"operationId":"Activity.create","description":"Create an Activity for a Study.","tags":["Activity"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","description":"An activity that may be performed by a participant in a study.","properties":{"id":{"type":"string","readOnly":true,"description":"The self-referencing identifier to this object.","example":"2wp97csc3g57ptznhhkg"},"spec":{"type":"string","description":"The specification, parameters, and type of the activity.","example":"lamp.survey"},"name":{"type":"string","description":"The name of the activity.","example":"Mood Survey"},"settings":{"type":"object","additionalProperties":true,"description":"The configuration settings for the activity.","example":{"questions":[{"text":"What day is it today?","description":"Please answer based on when you received the notification for this survey.","type":"slider","options":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}]}},"schedule":{"type":"array","description":"The notification schedule for the activity.","items":{"anyOf":[{"type":"object","description":"An advanced scheduling item.","properties":{"start":{"type":"integer","format":"int64","description":"The UNIX Epoch date-time representation: number of milliseconds since 1/1/1970 12:00 AM."},"interval":{"type":"array","items":{},"description":""},"repeat_count":{"type":"integer","format":"int64","description":""},"end":{"type":"integer","format":"int64","description":"The UNIX Epoch date-time representation: number of milliseconds since 1/1/1970 12:00 AM."}}},{"type":"object","description":"A simplified scheduling item.","properties":{"start_date":{"type":"string","format":"date-time","description":"The date after which this schedule should begin firing.","example":"2020-10-28T20:50:12.000Z"},"time":{"type":"string","format":"date-time","description":"For certain `repeat_interval` types, specify the hour and minute of the day to fire.","example":"2020-10-28T20:50:12.000Z"},"repeat_interval":{"type":"string","enum":["hourly","every3h","every6h","every12h","daily","biweekly","triweekly","weekly","bimonthly","monthly","custom","none"],"description":"If set to `hourly`, `every3h`, `every6h`, or `every12h`, only the `time` parameter's minute field is used. If set to anything other than `custom` or `none`, the `time` parameter's hour and minute field are both used. The `biweekly` option refers to Tue/Thurs and `triweekly` option refers to Mon/Wed/Fri. The `bimonthly` option refers to twice a month. The `custom` option refers to only using the `custom_times` array, and the `none` option means to only trigger the schedule once.","example":"every6h"},"custom_times":{"type":"array","items":{"type":"string","format":"date-time","description":"A specific date-time to fire at.","example":"2020-10-28T20:50:12.000Z"},"nullable":true,"description":"For `custom` schedules, specify a list of all specific date-times to fire at."}}}]},"example":[{"start_date":"2020-10-24T14:17:00.000Z","time":"2020-10-23T16:17:33.291Z","repeat_interval":"every3h","custom_time":["2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z"]}]}},"required":["id","spec","name","settings","schedule"]}}}},"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"object"}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from 'lamp-core'\nawait LAMP.connect({ serverAddress: \"api.lamp.digital\", accessKey: \"email@address.com\", secretKey: \"password\" })\n// function-specific sample code here\n"},{"lang":"python","label":"Python","source":"import LAMP\nLAMP.connect(\"api.lamp.digital\", \"email@address.com\", \"password\")\n# function-specific sample code here\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\nLAMP.connect(\"api.lamp.digital\", \"email@address.com\", \"password\")\n# function-specific sample code here\n"}],"method":"post","path":"/study/{id}/activity","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"securitySchemes":{"Authorization":{"type":"http","scheme":"basic"}},"jsonRequestBodyExample":{"id":"2wp97csc3g57ptznhhkg","spec":"lamp.survey","name":"Mood Survey","settings":{"questions":[{"text":"What day is it today?","description":"Please answer based on when you received the notification for this survey.","type":"slider","options":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}]},"schedule":[{"start_date":"2020-10-24T14:17:00.000Z","time":"2020-10-23T16:17:33.291Z","repeat_interval":"every3h","custom_time":["2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z","2020-10-23T14:18:20.973Z"]}]},"info":{"title":"LAMP Platform","version":"1.0.0","description":"See docs.lamp.digital for more.","contact":{"url":"https://digitalpsych.org/","email":"team@digitalpsych.org","name":"Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center."}},"postman":{"name":"Create an Activity for a Study.","description":{"content":"Create an Activity for a Study.","type":"text/plain"},"url":{"path":["study",":id","activity"],"host":["{{baseUrl}}"],"query":[],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"header":[{"key":"Content-Type","value":"application/json"}],"method":"POST","body":{"mode":"raw","raw":"{\n    \"spec\": \"<string>\",\n    \"name\": \"<string>\",\n    \"settings\": \"<object>\",\n    \"schedule\": [\n        {\n            \"start\": \"<long>\",\n            \"interval\": [\n                \"schema type not provided\",\n                \"schema type not provided\"\n            ],\n            \"repeat_count\": \"<long>\",\n            \"end\": \"<long>\"\n        },\n        {\n            \"start\": \"<long>\",\n            \"interval\": [\n                \"schema type not provided\",\n                \"schema type not provided\"\n            ],\n            \"repeat_count\": \"<long>\",\n            \"end\": \"<long>\"\n        }\n    ],\n    \"aute149\": true\n}"},"auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}}},"source":"@site/LAMP-protocol/openapi.yml","sourceDirName":".","permalink":"/api/create-an-activity-for-a-study","previous":{"title":"View a Participant.","permalink":"/api/view-a-participant"},"next":{"title":"List all Activities for a Study.","permalink":"/api/list-all-activities-for-a-study"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"create-an-activity-for-a-study"},`Create an Activity for a Study.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Create an Activity for a Study.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",{style:{"display":"table","width":"100%"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{style:{"textAlign":"left"}},"Path Parameters"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"id"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," string"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," \u2014 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{style:{"fontSize":"var(--ifm-code-font-size)","color":"var(--openapi-required)"}}," REQUIRED"))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",{style:{"display":"table","width":"100%"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{style:{"textAlign":"left"}},"Request Body ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," \u2014 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{style:{"fontSize":"var(--ifm-code-font-size)","color":"var(--openapi-required)"}}," REQUIRED"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",null)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"id"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," string"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," \u2014 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{style:{"fontSize":"var(--ifm-code-font-size)","color":"var(--openapi-required)"}}," REQUIRED"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{"marginTop":"var(--ifm-table-cell-padding)"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The self-referencing identifier to this object.`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"spec"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," string"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," \u2014 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{style:{"fontSize":"var(--ifm-code-font-size)","color":"var(--openapi-required)"}}," REQUIRED"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{"marginTop":"var(--ifm-table-cell-padding)"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The specification, parameters, and type of the activity.`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"name"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," string"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," \u2014 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{style:{"fontSize":"var(--ifm-code-font-size)","color":"var(--openapi-required)"}}," REQUIRED"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{"marginTop":"var(--ifm-table-cell-padding)"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The name of the activity.`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"settings"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," object"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," \u2014 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{style:{"fontSize":"var(--ifm-code-font-size)","color":"var(--openapi-required)"}}," REQUIRED"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{"marginTop":"var(--ifm-table-cell-padding)"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The configuration settings for the activity.`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"schedule"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," undefined[]"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," \u2014 "),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{style:{"fontSize":"var(--ifm-code-font-size)","color":"var(--openapi-required)"}}," REQUIRED"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{"marginTop":"var(--ifm-table-cell-padding)"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The notification schedule for the activity.`)))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",{style:{"display":"table","width":"100%"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{style:{"textAlign":"left"}},"Responses"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{"display":"flex"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{"marginRight":"var(--ifm-table-cell-padding)"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"200")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Success`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",{style:{"display":"table","width":"100%","marginTop":"var(--ifm-table-cell-padding)","marginBottom":"0px"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{style:{"textAlign":"left"}},"Schema ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",null)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"data"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," object")))))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{"display":"flex"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",{style:{"marginRight":"var(--ifm-table-cell-padding)"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"default")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Error`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table",{style:{"display":"table","width":"100%","marginTop":"var(--ifm-table-cell-padding)","marginBottom":"0px"}},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th",{style:{"textAlign":"left"}},"Schema ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div",null)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"error"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span",{style:{"opacity":"0.6"}}," string")))))))))));};MDXContent.isMDXComponent=true;

/***/ })

}]);