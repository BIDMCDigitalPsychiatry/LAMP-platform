"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[7688],{

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

/***/ 14456:
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
const frontMatter={};const contentTitle='Configuring your server to add Sensors and Activities';const metadata={"unversionedId":"deploy/enabling_sensors_and_activities","id":"deploy/enabling_sensors_and_activities","title":"Configuring your server to add Sensors and Activities","description":"By default, you will not be able to assign any activities or sensors to your participants (or groups of participants).","source":"@site/docs/07-deploy/12-enabling_sensors_and_activities.md","sourceDirName":"07-deploy","slug":"/deploy/enabling_sensors_and_activities","permalink":"/deploy/enabling_sensors_and_activities","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/12-enabling_sensors_and_activities.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1718286520,"formattedLastUpdatedAt":"6/13/2024","sidebarPosition":12,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Configure OAuth for Google","permalink":"/deploy/configure_oauth_google"},"next":{"title":"Components of the LAMP Platform","permalink":"/develop/intro"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Automated Script',id:'automated-script',children:[],level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"configuring-your-server-to-add-sensors-and-activities"},`Configuring your server to add Sensors and Activities`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`By default, you will not be able to assign any activities or sensors to your participants (or groups of participants).
At first, when you try to add activities and sensors in the dashboard, none are available in the dropdown.
This is because not every mindLAMP deployment needs all of the sensors or activities that are available.
Instead, you must individually enable each sensor or activity type you will need.
This process is called "adding an ActivitySpec" or "adding a SensorSpec".`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Steps to add a SensorSpec (or ActivitySpec):`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Navigate to `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"li","href":"https://docs.lamp.digital/api/create-a-sensor-spec"},`https://docs.lamp.digital/api/create-a-sensor-spec`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"li","href":"https://docs.lamp.digital/api/create-an-activity-spec"},`https://docs.lamp.digital/api/create-an-activity-spec`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Click the "authorize" button in the top right corner`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Enter your server's address, your server's admin username, and your server's admin password`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Figure out the SensorSpec name (or ActivitySpec) of the sensor (activity) you would like to enable.
To see a full list of SensorSpec names, check here: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"li","href":"https://docs.lamp.digital/data_science/data_types/sensor_types"},`https://docs.lamp.digital/data_science/data_types/sensor_types`),`.
To see a full list of ActivitySpec names, check here: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"li","href":"https://docs.lamp.digital/data_science/data_types/activity_types"},`https://docs.lamp.digital/data_science/data_types/activity_types`),`.
For example, you will see that the SensorSpec for the accelerometer sensor is called "lamp.accelerometer".`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Scroll down to the "Body" text box. Replace the field with `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`{"name":<sensorspec>}`),`. For example,
to add the "accelerometer" sensor, use: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`{"name":"lamp.accelerometer"}`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Scroll down to the text box that says "api.lamp.digital". Replace this text with your server's address.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Select "execute". Check back in the dashboard for an updated dropdown list!`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"automated-script"},`Automated Script`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-python","metastring":"setup.py","setup.py":true},`import LAMP

ACTIVITY_SPEC_LIST = [
    "lamp.spatial_span",
    "lamp.cats_and_dogs",
    "lamp.jewels_a",
    "lamp.jewels_b",
    "lamp.dbt_diary_card",
    "lamp.balloon_risk",
    "lamp.pop_the_bubbles",
    "lamp.journal",
    "lamp.breathe",
    "lamp.recording",
    "lamp.survey",
    "lamp.scratch_image",
    "lamp.tips",
    "lamp.goals",
    "lamp.medications",
    "lamp.memory_game",
    "lamp.spin_wheel",
    "lamp.maze_game",
    "lamp.emotion_recognition",
    "lamp.symbol_digit_substitution"
]

SENSOR_SPEC_LIST = [
    "lamp.accelerometer",
    "lamp.accelerometer.motion",
    "lamp.analytics",
    "lamp.blood_pressure",
    "lamp.bluetooth",
    "lamp.calls",
    "lamp.device_state",
    "lamp.distance",
    "lamp.flights",
    "lamp.gps",
    "lamp.gps.contextual",
    "lamp.gyroscope",
    "lamp.heart_rate",
    "lamp.height",
    "lamp.magnetometer",
    "lamp.respiratory_rate",
    "lamp.segment",
    "lamp.sleep",
    "lamp.sms",
    "lamp.steps",
    "lamp.weight",
    "lamp.wifi",
]

print("[LAMP Platform] ActivitySpec & SensorSpec Initialization Tool")
print("You must enter your username, password, and server address to continue installation.")
print("Username: admin [CANNOT BE CHANGED]")
LAMP.connect("admin", input("Password: "), input("Server Address: "))

for spec in ACTIVITY_SPEC_LIST:
    print(f"Creating ActivitySpec '{spec}'...")
    LAMP.ActivitySpec.create({ "name": spec })
for spec in SENSOR_SPEC_LIST:
    print(f"Creating SensorSpec '{spec}'...")
    LAMP.SensorSpec.create({ "name": spec })
`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);