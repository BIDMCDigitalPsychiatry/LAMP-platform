"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[6908],{

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

/***/ 95951:
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
const frontMatter={};const contentTitle='Components of the LAMP Platform';const metadata={"unversionedId":"develop/intro","id":"develop/intro","title":"Components of the LAMP Platform","description":"The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see Deployment Recommendations if you do not plan on using Docker.","source":"@site/docs/08-develop/01-intro.md","sourceDirName":"08-develop","slug":"/develop/intro","permalink":"/develop/intro","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/01-intro.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1717511408,"formattedLastUpdatedAt":"6/4/2024","sidebarPosition":1,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Configuring your server to add Sensors and Activities","permalink":"/deploy/enabling_sensors_and_activities"},"next":{"title":"How the Platform Works","permalink":"/develop/how_works"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'<strong>API Server</strong>',id:'api-server',children:[],level:3},{value:'<strong>Database</strong>',id:'database',children:[],level:3},{value:'<strong>Message Queue</strong>',id:'message-queue',children:[],level:3},{value:'<strong>Automations Worker</strong>',id:'automations-worker',children:[],level:3},{value:'Repositories',id:'repositories',children:[],level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"components-of-the-lamp-platform"},`Components of the LAMP Platform`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`Deployment Recommendations`),` if you do not plan on using Docker.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(61476)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"api-server"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"h3"},`API Server`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The gatekeeper between the internal and external domains.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`This component is implemented in `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`Node.js`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`****All API requests are stateless (i.e. there is no session management) and map to a single response.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`All requests irrespective of authentication requirement must be accompanied by a client API key. This pre-registered API key is recorded in the audit log with each request and serves as origination reference for resources and events.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Using the Credential API, requests that require authentication and authorization are validated.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Data transport must be encrypted and decrypted as per security & privacy policy.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"database"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"h3"},`Database`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The persistent data storage device supporting transient caching and complex querying.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`This component is implemented by `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`CouchDB`),`, with an alternate implementation for low-power usage in `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`Node.js`),` using the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`PouchDB`),` framework.`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`This component can instead by substituted using custom adapter code by `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`Redis`),`, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`Amazon S3`),`, or for low-power usage, a naïve `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`Dictionary/Map`),` object in `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`js`),`.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`A key-value or document database (noSQL) is most ideal for storage needs of the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`LAMP Protocol`),`, due to its hierarchical object data and high throughput access and low latency manipulation requirements.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`To support real-time intervention deployment and management, an intermediate in-memory cache is used to ease the load on main long-term storage databases.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"message-queue"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"h3"},`Message Queue`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Handles the synchronization of communication between all the above actors in the server layer.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`This component is implemented by the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`Redis`),` high performance key-value store, with an alternate implementation for low-power usage in `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`Node.js`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Each component upon startup must register itself with the message queue for service discovery.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Any component may create any number of topics for which other components may publish messages to or subscribe to.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Implementation of database manipulation operations, automation events, and the audit log relies solely on subscription to the global topic; the API Server publishes requests here with a unique identifier awaiting response.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"automations-worker"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"h3"},`Automations Worker`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`This component handles scheduled push notification delivery as well as execution of triggered scripts to deliver interventions to patients.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`A compute platform such as a Docker-enabled system or AWS Lambda is used to handle actual execution of code once bundled.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`A dependency bundler such as Webpack, PIP, or Packrat is used to bundle each automation’s code to avoid dependency versioning conflicts that could crash or halt execution.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`This component encompasses: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`Docker Environment, Attachment Container, Automation Scripts, Scheduler`),`.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"repositories"},`Repositories`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("table",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("thead",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr",{parentName:"thead"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th",{parentName:"tr","align":null},`Frontend`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th",{parentName:"tr","align":null},`Backend`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th",{parentName:"tr","align":null},`Native Core`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th",{parentName:"tr","align":null},`Data Science`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th",{parentName:"tr","align":null},`Programming Libraries`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tbody",{parentName:"table"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-dashboard"},`Dashboard`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-server"},`API Server`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-ios"},`iOS`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex"},`Cortex`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-r"},`R`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-activities"},`Activities`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-app-gateway"},`App Gateway`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-core-android"},`Android`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study"},`CollegeStudy`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-js"},`JS`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"},`Python`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-swift"},`Swift`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr",{parentName:"tbody"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td",{parentName:"tr","align":null},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"td","href":"https://github.com/BIDMCDigitalPsychiatry/LAMP-kotlin"},`Kotlin`))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The LAMP Platform is designed, developed, and managed entirely as a series of GitHub repositories: `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Core:`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-platform`),`: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`All issues and documentation across any component repository MUST be centralized here!`),` Acts as the project tracker and documentation hub.`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`package.json`),`: All configuration for the Docusaurus documentation generator is housed here; the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`docusaurus.config.js`),` file is dynamically generated.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`openapi.json`),`: This file is dynamically generated from the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-protocol`),` git submodule that contains the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`openapi.yaml`),` file. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`blog`),`: This directory contains the release notes/updates/"What's New" tab documents. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`docs`),`: This directory contains all documentation in entirely markdown files. Each file and folder includes a numeric prefix that sorts its order in the documentation sidebar, as well as an `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`assets`),` folder for all relevant images and media. `))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-protocol`),`: The `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`openapi.yml`),` file houses the OpenAPI specification for the LAMP Protocol, upon which the entire LAMP Platform is built.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Backend:`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-server`),`: (See Backend section in the documentation for more details on the nature of the component and how the code is organized.)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-worker`),`: (See Automations section in the documentation for more details on the nature of the component and how the code is organized.)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-app-gateway`),`: (See App Gateway section in the documentation for more details on the nature of the component and how the code is organized.)`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Frontend:`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-dashboard`),`: (See Frontend section in the documentation for more details on the nature of the component and how the code is organized.)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-data-studio`),`:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-activities`),`: `))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`SDKs:`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-js`),`:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-py`),`:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-r`),`:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-swift`),`:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-kotlin`),`:`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Data Science:`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-cortex`),`: (See Cortex section in the documentation for more details on the nature of the component and how the code is organized.)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-ide`),`: A JupyterLab and VSCode-based integrated development environment with extensive support for Cortex.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Native Apps:`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-core-ios`),`: A Swift-based scaffolding that incorporates support for TypeScript business logic and a WKWebView for the frontend UI. Designed to work well with the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-swift`),` SDK.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-core-android`),`: A Kotlin-based scaffolding that incorporates support for TypeScript business logic and a WebView for the frontend UI. Designed to work well with the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-kotlin`),` SDK.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Other:`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-college-study`),`: A proof of concept for the Automations framework that is a part of the LAMP Platform.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`clinical-scales-importer`),`: Automated clinical scale importer that works for RedCap integration into the LAMP Platform.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`analysis-tools`),`: Misc. analysis tools for working with research studies using the LAMP Platform.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Deprecated:`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-app`),`: The mindLAMP v1 native app for iOS and Android. `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`DO NOT USE.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`LAMP-portal`),`: The mindLAMP v1 backend. `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"li"},`DO NOT USE.`))))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 61476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Platform_Overview-0c296dc1945d269d56d5b323bb31c142.png");

/***/ })

}]);