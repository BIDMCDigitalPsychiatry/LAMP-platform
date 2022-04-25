"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[3939],{

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

/***/ 32329:
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
var _excluded=["components"];var frontMatter={};var contentTitle='Tags & Attachments';var metadata={"unversionedId":"data_science/tags","id":"data_science/tags","title":"Tags & Attachments","description":"To offer a way to store persistent, easily accessible data, the LAMP platform has implemented a feature known as attachments (sometimes also called tags). You can use tags to store any json-formatted data. Using this feature, you can attach data to any element of LAMP including:","source":"@site/docs/09-data_science/09-tags.md","sourceDirName":"09-data_science","slug":"/data_science/tags","permalink":"/data_science/tags","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/09-tags.md","tags":[],"version":"current","lastUpdatedBy":"dcurrey88","lastUpdatedAt":1650894187,"formattedLastUpdatedAt":"4/25/2022","sidebarPosition":9,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Using the LAMP Data Portal","permalink":"/data_science/data_portal"},"next":{"title":"Admin Checklist","permalink":"/consortium/admin/checklist"}};/* @jsxRuntime classic */ /* @jsx mdx */var toc=[{value:'Functions',id:'functions',children:[{value:'LAMP.Type.list_attachments(&#39;id&#39;)',id:'lamptypelist_attachmentsid',children:[],level:3},{value:'LAMP.Type.get_attachment(&#39;id&#39;,&#39;tag_name&#39;)',id:'lamptypeget_attachmentidtag_name',children:[],level:3},{value:'LAMP.Type.set_attachment(&#39;parent&#39;,&#39;target&#39;,&#39;tag_name&#39;,&#39;body&#39;)',id:'lamptypeset_attachmentparenttargettag_namebody',children:[],level:3}],level:2},{value:'Authority',id:'authority',children:[{value:'Case Example 1: Conflicting Tags',id:'case-example-1-conflicting-tags',children:[],level:3},{value:'Case Example 2: Removing a conflict',id:'case-example-2-removing-a-conflict',children:[],level:3}],level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"tags--attachments"},"Tags & Attachments"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"To offer a way to store persistent, easily accessible data, the LAMP platform has implemented a feature known as attachments (sometimes also called tags). You can use tags to store any json-formatted data. Using this feature, you can attach data to any element of LAMP including:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Participants"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Studies"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Researchers"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Activities")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"functions"},"Functions"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"There are three main functions used to interact with LAMP attachments, that allow you to list, view, and set attachments. In order, they are:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"lamptypelist_attachmentsid"},"LAMP.Type.list_attachments('id')"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Given a LAMP id, this function returns an array of strings. Each string corresponds to a tag that has been set on the target. For example:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"LAMP.Type.list_attachments(\"ffmz65mn1gtav5fq3bhq\")['data']\n\n\n['graphs.data_quality.activity_counts',\n 'graphs.data_quality.passive_features',\n 'graphs.data_quality.quality_tags',\n 'lamp.attachment_test',\n 'lamp.dashboard.credential_roles',\n 'lamp.dashboard.researcher_tags',\n 'lamp.dashboard.user_type',\n 'lamp.test']\n\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"lamptypeget_attachmentidtag_name"},"LAMP.Type.get_attachment('id','tag_name')"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Given a LAMP id and an existing tag, this function returns the currently set value of the tag. It returns a 404 error if the tag is not set. If the same tag has been set multiple times by different agents, (e.g. both a Researcher and a Study), the tag belonging to the highest authority (e.g. Researcher over Study) is returned. For more information on this, see ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#Authority"},"Authority")," below."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"LAMP.Type.get_attachment(\"ffmz65mn1gtav5fq3bhq\",'lamp.test')['data']\n\n{'test_data_key': 21283,\n 'my_list_of_data': [\"Android\", \"iOS\"]}\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"lamptypeset_attachmentparenttargettag_namebody"},"LAMP.Type.set_attachment('parent','target','tag_name','body')"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This function is used to set the value of a tag. 'Target' here is the LAMP element the tag will be attached to - while 'parent' is the agent setting the tag (such as a Researcher, Study, or even a Participant). An element can also use the shorthand ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"'me'")," to set a tag on itself - e.g. a Researcher targeting themself. This function can also be used to delete a tag by setting ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"body")," as ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"None"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"LAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test','This is a test tag')['data']\n\nLAMP.Type.get_attachment('U0591253803','lamp.test')['data']\n'This is a test tag'\n\n\nLAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",\"me\",'lamp.test','This is also a test tag')['data']\n\nLAMP.Type.get_attachment(\"ffmz65mn1gtav5fq3bhq\",'lamp.test')['data']\n'This is also a test tag'\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"authority"},"Authority"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"LAMP does not restrict the setting of a tag even if it has already been set. If the tag was previously set by the same parent, it will be overwritten (or deleted if set to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"None"),"). If the same tag has been set on the same target, but by multiple users, e.g. by both a Researcher and a Study, both will be ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"present")," in the database, but only the one set by the highest authority(see below) user will be returned from ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"LAMP.Type.get_attachment"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In descending order, authorities are:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Admin"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Researcher"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Study"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Participant")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If a tag set by a higher authority user is later deleted, however, a tag set by a lower authority user will become available again."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"case-example-1-conflicting-tags"},"Case Example 1: Conflicting Tags"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In the following code block, both \"ffmz65mn1gtav5fq3bhq\" (a Researcher), and 'dynp0g0530xkahnzh0xc' (a Study) attempt to set the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"lamp.test")," tag on the user 'U0591253803'. Both tags are successfully set and no error is thrown. However, since the Researcher has a higher authority than the Study, the tag set by the Researcher is returned (even though the tag set by the Study was set later)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"LAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test','Set by Researcher')['data']\nLAMP.Type.set_attachment('dynp0g0530xkahnzh0xc','U0591253803','lamp.test','Set by Study')['data']\n\nLAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']\n\n'Set by Researcher'\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"case-example-2-removing-a-conflict"},"Case Example 2: Removing a conflict"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In the following code block, both \"ffmz65mn1gtav5fq3bhq\" (a Researcher), and 'dynp0g0530xkahnzh0xc' (a Study) attempt to set the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"lamp.test")," tag on the user 'U0591253803'. As before, since the Researcher has a higher authority than the Study, the tag set by the Researcher is returned (even though the tag set by the Study was set later)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"However, the Researcher tag is then removed, and the tag set by the Study is now the one returned by the API"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},"LAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test','Set by Researcher')['data']\nLAMP.Type.set_attachment('dynp0g0530xkahnzh0xc','U0591253803','lamp.test','Set by Study')['data']\n\nLAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']\n'Set by Researcher'\n\nLAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test',None)['data']\n\nLAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']\n'Set by Study'\n")));};MDXContent.isMDXComponent=true;

/***/ })

}]);