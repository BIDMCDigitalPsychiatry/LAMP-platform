"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[8702],{

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

/***/ 37172:
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
const frontMatter={};const contentTitle='How the Platform Works';const metadata={"unversionedId":"develop/how_works","id":"develop/how_works","title":"How the Platform Works","description":"The LAMP Platform always collects data in a secure way before automatically processing and harmonizing it for you. Researchers/clinicians, and patients/participants can view their data in the frontend user interface. Patients will always retain ownership when contributing their data to your study or clinic and may always download and view their own data. Cognitive tests and survey instruments collect high quality metadata that can measure attention, focus, memory performance, and more.","source":"@site/docs/08-develop/02-how_works.md","sourceDirName":"08-develop","slug":"/develop/how_works","permalink":"/develop/how_works","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/02-how_works.md","tags":[],"version":"current","lastUpdatedBy":"Erlend Lane","lastUpdatedAt":1708965743,"formattedLastUpdatedAt":"2/26/2024","sidebarPosition":2,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Components of the LAMP Platform","permalink":"/develop/intro"},"next":{"title":"Low Power & Connectivity Support","permalink":"/develop/low_power"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Step 1: Sensor events are recorded in real-time.',id:'step-1-sensor-events-are-recorded-in-real-time',children:[],level:2},{value:'Step 2: Collected events are cached, awaiting server reachability.',id:'step-2-collected-events-are-cached-awaiting-server-reachability',children:[],level:2},{value:'Step 3: Server receives and processes requests from the app.',id:'step-3-server-receives-and-processes-requests-from-the-app',children:[],level:2},{value:'Step 4: Server coordinates internal components for processing.',id:'step-4-server-coordinates-internal-components-for-processing',children:[],level:2},{value:'Step 5: Database records the incoming data.',id:'step-5-database-records-the-incoming-data',children:[],level:2},{value:'Step 6: The scheduler coordinates and runs automations.',id:'step-6-the-scheduler-coordinates-and-runs-automations',children:[],level:2},{value:'Step 7: Applets are launched into a safe environment and run.',id:'step-7-applets-are-launched-into-a-safe-environment-and-run',children:[],level:2},{value:'Step 8: Applet results are saved after being run.',id:'step-8-applet-results-are-saved-after-being-run',children:[],level:2},{value:'Step 9: Applet results are persisted for later access.',id:'step-9-applet-results-are-persisted-for-later-access',children:[],level:2},{value:'Step 10: Scheduler updates invocation and audit log.',id:'step-10-scheduler-updates-invocation-and-audit-log',children:[],level:2},{value:'Step 11: Request completes with any response data.',id:'step-11-request-completes-with-any-response-data',children:[],level:2},{value:'Tags &amp; Automations',id:'tags--automations',children:[{value:'Tags as Arbitrary Data on Resources',id:'tags-as-arbitrary-data-on-resources',children:[],level:3},{value:'Data-URI strings in Tags',id:'data-uri-strings-in-tags',children:[],level:3},{value:'Atomic Indexed Access and Modification',id:'atomic-indexed-access-and-modification',children:[],level:3},{value:'Automations as Multidimensional Planes of Data within Tags',id:'automations-as-multidimensional-planes-of-data-within-tags',children:[],level:3}],level:2},{value:'Federated Systems Using the Automation Framework',id:'federated-systems-using-the-automation-framework',children:[],level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"how-the-platform-works"},`How the Platform Works`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The LAMP Platform always collects data in a secure way before automatically processing and harmonizing it for you. Researchers/clinicians, and patients/participants can view their data in the frontend user interface. Patients will always retain ownership when contributing their data to your study or clinic and may always download and view their own data. Cognitive tests and survey instruments collect high quality metadata that can measure attention, focus, memory performance, and more.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The LAMP Protocol, upon which the LAMP Platform is built, may also be integrated into other systems as it is intuitive, simple, and has security and privacy built-in. It models active and passive data together as evolving streams of events, and data becomes reactive and clinically actionable through user-defined applets across R, Python, and JS. Credential management is built into the object hierarchy, which uses OpenAPI and JSONSchema to mark up extensible interfaces. The industry encryption standards AES-256 and TLSv1.3 facilitate secure storage and transmission of data in a HIPAA, COPPA, and GDPR-compliant manner.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`LAMP Platform`),` consists of two broad domains: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`(1) local`),`: the components that users will see and interact with through smartphone or wearable devices, and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`(2) remote`),`: the components located off-device that process data, coordinate applets, and handle synchronization. The app serves to both capture diverse streams of sensor and activity measurements ranging from heart rate to mood and to prompt suggested user interactions. It informs the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`LAMP Platform`),` with a micro-temporal slice of the user’s physical and mental health. The server components supporting the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`LAMP Platform`),` play an equally important role in securely encrypting and processing the data, establishing the user’s “digital fingerprint” and predicting changes that could potentially result in relapse. app-based interventions can be deployed to improve the user’s health and relevant health data can automatically be shared with authorized care team members.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The figures below detail one operation typically performed by the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`LAMP Platform`),`. Shown on the left-hand side is the app, and on the right-hand side is the server. Note that both pieces consist of numerous components that work together as a modular distributed system to transfer and process data in a clinically relevant context. A full specification of all components and their interactivity is documented in later sections. Please note that an important distinction in naming is made between the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`local`),` and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`remote`),` domains: the components of the former are prefixed with “`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`mindLAMP`),`” where the components of the latter are prefixed only with “`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`LAMP`),`” as this distinction clarifies the scope and requirements of the components themselves.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(61476)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(76017)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-1-sensor-events-are-recorded-in-real-time"},`Step 1: Sensor events are recorded in real-time.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`High-frequency sensors on the mobile or wearable device record measurements based on the user’s current configuration settings defined by an administrator. This data is stored in a buffer on the device's hardware managed by the operating system (either iOS or Android) and provided to the app periodically while it is in the background.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(5243)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-2-collected-events-are-cached-awaiting-server-reachability"},`Step 2: Collected events are cached, awaiting server reachability.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The device’s buffer and operating system make no guarantees to save data from the current moment for the next time the app is run in the background. Because of this and the likelihood that the remote server may not be reachable due to poor signal, the measurements are immediately cached by the app whenever it is notified in the background. When battery levels are sufficient, and network connectivity to the remote server available, and enough data is cached, the app begins synchronization.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(89603)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-3-server-receives-and-processes-requests-from-the-app"},`Step 3: Server receives and processes requests from the app.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The app submits a request to the server for synchronizing and uploading its cached data. Once uploaded successfully, it is unpacked and examined by the server for further automated processing.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(99770)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-4-server-coordinates-internal-components-for-processing"},`Step 4: Server coordinates internal components for processing.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The server prepares instructions for internal components based on the data uploaded by the app. These instructions are pushed through the internal data bus (a message queue) that connects all internal controllers in the platform. The extensibility of the internal components and the data bus interconnecting them means components can be swapped out or replaced depending on context. In deployments or regions where some features should be disabled, their relevant components are "unplugged" from this data bus.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(51829)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-5-database-records-the-incoming-data"},`Step 5: Database records the incoming data.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Depending on the server’s system configuration and the content of the data uploaded, the database then records all event data and schedules an automated backup. The database considers the origin of the events as it saves them, harmonizing data from various sensors through a unified schema.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`![](assets/Untitled 75.png)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-6-the-scheduler-coordinates-and-runs-automations"},`Step 6: The scheduler coordinates and runs automations.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Once the database completes saving data and any backup processes, the scheduler component is engaged to determine if any data processing “applets” or other internal maintenance tasks need to run. After assessing cost and priority, the scheduler creates an execution plan consisting of the above and notifies these components. The scheduler relies on heuristics gathered from audit logs to determine the plan.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(7239)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-7-applets-are-launched-into-a-safe-environment-and-run"},`Step 7: Applets are launched into a safe environment and run.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Assuming no internal maintenance tasks need to run, the scheduler may create an execution plan with only a single applet. Once started, a new virtual environment is prepared and securely isolated from other data. For example, an R environment would analyze the script to run and install the correct versions of all required packages, replicating the environment used by the applet's author.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"mailto:team@digitalpsych.org"},`Please contact us directly for guidance on delivery of just-in-time interventions.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(31454)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-8-applet-results-are-saved-after-being-run"},`Step 8: Applet results are saved after being run.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`As the applet executes, its input and output are spliced from the automation controller and saved as tags. For example, an applet called "com.test.some_script" may create a new tag “com.test.some_script” attached to some resource in the database, or append to an existing tag with the same name. Any runtime logs are extracted separately from this result.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(87209)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-9-applet-results-are-persisted-for-later-access"},`Step 9: Applet results are persisted for later access.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`If an applet is configured to persist its output, the data are persisted to the database as a tag and may be accessed by a client app directly at a later time. For example, an applet may compute a dynamic visualization to be cached, or it could lookup login credentials from a predefined tag to access and convert data from a third-party system such as Fitbit into native resource objects which are then persisted by the database.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(63008)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-10-scheduler-updates-invocation-and-audit-log"},`Step 10: Scheduler updates invocation and audit log.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Once an execution plan completes, the scheduler records statistics about it for its next engagement.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(64328)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"step-11-request-completes-with-any-response-data"},`Step 11: Request completes with any response data.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`If any controller responds to their currently executing instruction with a response payload (such as the execution output of an applet), it is bundled and returned to the API client synchronously. If a controller needs more time to process an instruction, it can return a pointer to an operation resource that can be used in a later asynchronous request to the server to locate the response once completed. If a controller chooses to respond to an instruction but is unable to complete it, the response returns immediately to the client app as an error.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"tags--automations"},`Tags & Automations`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Automations are a flexible framework for the LAMP platform that allow you to run complex analytics and decision support tools either in reaction to new events in an event stream, or on a periodic schedule. Without having to configure a processing pipeline for system requirements such as CPU, I/O, or RAM, automations abstract the functional logic from data resources and system requirements. Automations support simple, flexible, and portable code that can run on low-power devices such as smartwatches or older smartphones all the way up to large servers and computing clusters in the cloud.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(91785)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`These "applets," called Automations, can be written in typical data science programming languages such as JavaScript, Python, and R, with any packages or dependencies automatically bundled within. When installed onto a Resource (that is, a Researcher, Study, Participant, or even an Activity), it is capable of listening to events generated by that Resource. For example, if installed for Participants, one such applet could listen to any SensorEvents or ActivityEvents, or when installed for Activities, it could listen only to anonymized ActivityEvents generated by any Participant. When the Cloud server receives new events, it prepares all Automations that fit the specified event mask and allows them to execute with preallocated hardware limits.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"tags-as-arbitrary-data-on-resources"},`Tags as Arbitrary Data on Resources`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Tags are an arbitrary unit of extensibility available to all Resource sub-types. Through string-indexed/keyed subscripting, out-of-line data may be attached to objects in the LAMP Platform as an ad-hoc micro-database. For a flow chart on the usage of Tags, see the figure below. Tags are a powerful tool that may be leveraged by clients of the LAMP Platform to build applets for the Platform as well as smaller apps within such client apps themselves.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(72716)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"data-uri-strings-in-tags"},`Data-URI strings in Tags`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Tags may consist of JSON object, array, or primitive types, as well as encoded `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`data-uri`),` strings (to represent binary data like PDFs or MP3s). `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`data-uri`),` strings are normal string primitives but prefixed with `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`data:<mime_type>[;base64],`),` where `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`<mime_type>`),` refers to the binary application file type of the data that follows, such as `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`application/json`),`, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`text/plain; charset=utf8`),`, or `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`image/svg+xml`),`. If the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`base64`),` optional parameter is provided, the contents of the string following the comma are to be base64-decoded when interpreted by the LAMP Platform or clients of the LAMP Protocol. Specifying an optional `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`Accept`),` header type may optionally allow the LAMP server component or other LAMP Protocol vendors to automatically convert such `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`data-uri`),` strings into a binary type.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"atomic-indexed-access-and-modification"},`Atomic Indexed Access and Modification`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Furthermore, to support atomic operations on Tags, an indexed modifier version of get & set methods shall exist such that for a Tag whose content is an object, the method `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`GET | POST /type/<id>/my.tag.name.here[/someKeyedIndex]`),` shall return or replace only the sub-content of the object but not the whole object represented by the Tag. For JSON arrays, keyed indices shall take the form of continuous numbered indices found in the array itself, including the special index `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`length`),` which shall only return but not replace the length of the underlying array. Through these rudimentary atomic mutation facilities, vendors and clients of the LAMP Protocol may perform basic synchronization without poll-waiting or SSE (Server Sent Events) reconciliation.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"automations-as-multidimensional-planes-of-data-within-tags"},`Automations as Multidimensional Planes of Data within Tags`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Automations shall be represented by their specific LAMP Protocol object schema, but encoded as a plaintext JSON data-uri string with the mime type `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`application/vnd+lamp.automation`),`. When registering or unregistering an Automation’s availability with a LAMP server or other component, the component itself shall maintain a running record of compute images, trigger-points, and code for each Automation. When the Tag containing the Automation data is removed, the Automation itself shall be unregistered and made no longer functional in that instance of the LAMP Platform. The figure below describes the relationship between the static data plan (Tags) and the dynamic data plane (Automations) which leverage the functionality described in prior chapters to perform Just-In-Time intervention, prediction, analysis, visualization, or some other set of relevant functions. `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong",{parentName:"p"},`This functionality has also been superceded by the TagSpec API.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(15858)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"federated-systems-using-the-automation-framework"},`Federated Systems Using the Automation Framework`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Supposing multiple existing systems provided clinically useful sources of data, such as longitudinal imaging repositories or existing Fitbit devices synchronized to the cloud. While data retrieval and ad-hoc storage of “out-of-line” (that is, unrecognized by the Platform, but retaining meaning to its owner) data from within the Platform is simple using the API, it would be simply infeasible to manually verify modified data against multiple specific conditions and run several scripts in the Researcher’s local computer before sending out notifications or awaiting further processing from elsewhere. Instead, the Platform supports, through the Automations framework, a method of dynamically running such scripts as “applets” atop extremely powerful unconstrained hardware not managed by the Researcher or their IT department.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(84527)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`In the example above, a combination of two applets and an external Amazon S3 database (unknown to the LAMP Platform) provide the equivalent three step upload-process-analyze functionality of apps such as AWARE, Fitbit, Beiwe, Google Fit, and more. The `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`lamp.anomaly_detection`),` applet is not considered a part of this group as it was written to use only the standard API provided by the LAMP Platform; it contains no knowledge of the other two applets and the external database. The `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`org.aware.upload`),` applet requests preallocation of storage, perhaps on the order of ~5GB, but entirely variable depending on the Participant’s device or historical data uploads. It then returns a response immediately to the requesting smartphone device or internet service with a URL to which it can upload the data. The second applet, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`org.aware.processing`),` is instead run by the Cloud server every 5 minutes to check if any processing needs to be done in the database, and if so, executes the processing, but otherwise does nothing. This applet converts the uploaded data to LAMP Resources (ActivityEvents or SensorEvents, specifically) and submits them to the Cloud server in bulk. Just as with any other events received by the Cloud server, it will then execute a set of Automation applets — in this case, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`lamp.anomaly_detection`),`. In summary, with this multi-applet workflow, data is automatically uploaded and stored in an external database wholly maintained by a third-party, subsequently converted to actionable reactive LAMP Sensor or ActivityEvents, and finally analyzed through the same methods as all other data.`));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 84527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Action_Chart-2d9395017b1f9a82874edf0127e9ddad.png");

/***/ }),

/***/ 91785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Analysis_Methods-c26de5faf7a71752969b3fd08a08b878.png");

/***/ }),

/***/ 15858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Dynamic_Attachments-7d81352def9ccf4a7e1154fc551452d9.png");

/***/ }),

/***/ 61476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Platform_Overview-0c296dc1945d269d56d5b323bb31c142.png");

/***/ }),

/***/ 72716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Tags_Example-5b87923d7a9d39e168ae0a63e14ed025.png");

/***/ }),

/***/ 76017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_70-de49155d4339fac5a2e52be850b61c8b.png");

/***/ }),

/***/ 5243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_71-e11357790059c520d3b7626087a41e8c.png");

/***/ }),

/***/ 89603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_72-74800a942c1b724d35cdf6e933490cd9.png");

/***/ }),

/***/ 99770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_73-acca8b13717d72fa1dd27e164759b6a2.png");

/***/ }),

/***/ 51829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_74-391533020cae0f7b1f3f65b7bb202037.png");

/***/ }),

/***/ 7239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_76-2e669d298769343215ef01b6815be70f.png");

/***/ }),

/***/ 31454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_77-444461fc01fe965dcc0ce9aa07e03591.png");

/***/ }),

/***/ 87209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_78-5cb596a24573770380780cb83af464d2.png");

/***/ }),

/***/ 63008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_79-0d9c0b9f73c1ca024767bf404fc06c56.png");

/***/ }),

/***/ 64328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Untitled_80-0ec80c39dd7d2229f16bb15bdedb4e93.png");

/***/ })

}]);