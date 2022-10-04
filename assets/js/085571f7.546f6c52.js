"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[4188],{

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

/***/ 92559:
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
const frontMatter={slug:'/privacy'};const contentTitle='Security & Privacy Policy';const metadata={"unversionedId":"quick_links/privacy","id":"quick_links/privacy","title":"Security & Privacy Policy","description":"Your Personal Information","source":"@site/docs/02-quick_links/04-privacy.md","sourceDirName":"02-quick_links","slug":"/privacy","permalink":"/privacy","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/02-quick_links/04-privacy.md","tags":[],"version":"current","lastUpdatedBy":"Aditya Vaidyam","lastUpdatedAt":1664897588,"formattedLastUpdatedAt":"10/4/2022","sidebarPosition":4,"frontMatter":{"slug":"/privacy"},"sidebar":"defaultSidebar","previous":{"title":"Frequently Asked Questions","permalink":"/faq"},"next":{"title":"How does LAMP Platform Work?","permalink":"/about/intro"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Your Personal Information',id:'your-personal-information',children:[],level:2},{value:'How We Use Your Personal Information',id:'how-we-use-your-personal-information',children:[],level:2},{value:'Information We Share With Others',id:'information-we-share-with-others',children:[],level:2},{value:'How We Protect Your Information',id:'how-we-protect-your-information',children:[],level:2},{value:'Deleting Your Account',id:'deleting-your-account',children:[{value:'<strong>Can I delete data stored by the LAMP Platform?</strong>',id:'can-i-delete-data-stored-by-the-lamp-platform',children:[],level:3}],level:2},{value:'Copyright And Proprietary Rights',id:'copyright-and-proprietary-rights',children:[{value:'<strong>How do I let my IRB know that LAMP is safe to use in a research study?</strong>',id:'how-do-i-let-my-irb-know-that-lamp-is-safe-to-use-in-a-research-study',children:[],level:3}],level:2},{value:'Security &amp; Privacy',id:'security--privacy',children:[{value:'Login and Authentication',id:'login-and-authentication',children:[],level:3},{value:'Technical Safeguards',id:'technical-safeguards',children:[],level:3},{value:'Personal Health Information (PHI)',id:'personal-health-information-phi',children:[],level:3},{value:'HIPAA',id:'hipaa',children:[],level:3},{value:'Breach Policy',id:'breach-policy',children:[],level:3},{value:'Risk Analysis and Management',id:'risk-analysis-and-management',children:[],level:3},{value:'Security Threat Protocol',id:'security-threat-protocol',children:[],level:3}],level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"security--privacy-policy"},`Security & Privacy Policy`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"your-personal-information"},`Your Personal Information`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`“Your information” is the information we request when you initially download and launch the app. It is then accessible from your user profile under ‘Settings.’ This information includes, but is not limited to your user name and user profile you had used to register for the app. We also receive other types of information about you that is customarily gathered by web and mobile applications:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`We receive data about you whenever you interact with the mindLAMP app, such as when you launch the application, click on, view or otherwise interact with a feature. This may include date and time of the request, the feature requested, and completion status of the request. We receive data from the mobile phone you use to launch mindLAMP app. We receive data about your answers to surveys and cognitive tests. If you opt in, we receive geospatial data that can tell us where you are nearby when you interact with the app. If you opt in, we receive data about your step count and other information provided by Apple Health Kit or Google Fit.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"how-we-use-your-personal-information"},`How We Use Your Personal Information`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Your personal information may be used to support internal operations, including troubleshooting/user support, and service improvements. To ensure you are receiving the highest level of service in your interaction with the mindLAMP app, your contact information may be used to communicate back with you regarding your requests. We also use the data to create aggregated statistics which helps us in the improvement of our service. Aggregated data allows us to evaluate "traffic" patterns to our app in terms of the number and role of visitors, level of demand, most popular requests, and types of errors. These statistics are not linked to any personal information that can identify any individual person. This data may be kept for an indefinite amount of time, and it may also be used at any time and in any way reasonably necessary to monitor for security breaches and to ensure the integrity of the data on our servers.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center will never access your data without prior consent and permission. If self-deploying the LAMP Platform, you will be in sole control and ownership of all data consumed or produced by the LAMP platform. We do not by default request, use, or store any personally identifiable information, and strongly recommend against using the user-facing utilities to do so.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"information-we-share-with-others"},`Information We Share With Others`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`We do not sell, trade, or otherwise transfer to outside parties any information we receive. We may release information we collect to judicial, law enforcement or other government agencies when we believe release is appropriate to comply with a governmental or court order, or the law, to enforce our own policies, or to protect ours or others’ rights, property or safety. We may share aggregate statistics about our visitors, general traffic patterns, app usage, survey answers, cognitive test results, and phone collected data like step count, geospatial location, flights of steps climbed (and other Apple Healthkit and Google Fit data) for purely research purposes. If used for research, your data will be only used in an aggregate form. We will never use your data for marketing or commercial purposes.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"how-we-protect-your-information"},`How We Protect Your Information`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`We make every reasonable effort to protect your information against unauthorized access, alteration, disclosure or destruction using current security technologies. Servers that host the mindLAMP app and store your personal information are maintained in a secured facility behind a firewall. The mindLAMP app security measures are reviewed regularly and are consonant with policies for secure healthcare data storage. Finally, we restrict access to users’ personal information to our employees, contractors and agents who need to know that information in order to process it on our behalf for purposes of providing you support and services. These individuals are required to attend training on patient privacy and confidentiality and are bound by strict confidentiality obligations.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"deleting-your-account"},`Deleting Your Account`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Your account may be deleted via the app through the delete my account button. You may delete your account at any time. When you delete your account you will be asked if you want us to delete your data as well.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"can-i-delete-data-stored-by-the-lamp-platform"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},`Can I delete data stored by the LAMP Platform?`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Yes, you can delete any content stored in the LAMP Platform. There is a soft-deletion period of 90 days during which the data is unavailable but may be restored by request. Once the 90 day period ends, the data is deleted permanently, after which it may no longer be recovered.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"copyright-and-proprietary-rights"},`Copyright And Proprietary Rights`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The mindLAMP app, its features and contents are protected by copyright and other intellectual property laws, as well as other state, federal and international laws and regulations. Unless otherwise expressly provided in these Terms of Use, you may print or download information from the app for personal, non-commercial use only, provided you identify the source of the material, include a statement that the material is protected by copyright law, and do not modify any of the information. Reprinting, or otherwise reproducing, and/or reproducing any document in whole or in part is prohibited, unless prior written consent is obtained from the copyright owner.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Nothing in these Terms of Use shall be deemed to grant you any right, title, license or interest in or to any software or documentation, or in any related patents, copyrights, trademarks, trade secrets or other intellectual property of any kind.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"how-do-i-let-my-irb-know-that-lamp-is-safe-to-use-in-a-research-study"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"h3"},`How do I let my IRB know that LAMP is safe to use in a research study?`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Here's some language you might find useful in conveying the LAMP Platform's HIPAA compliance and safety to your IRB.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},`Encrypted information from survey responses and passive data will be sent and stored electronically on a secure server. Responses from individual patients will be identified by a randomized number and contain no personal identifiable information apart from age and gender.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Here's another example regarding participant anonymity.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"blockquote"},`The app never records or stores any personal identity information. Every participant is assigned a randomly generated participant ID (for example, “U123456789”), and all participant data are connected only to that ID, not to a name, phone number, or address.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"security--privacy"},`Security & Privacy`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The LAMP Platform is free and open source software currently developed by Beth Israel Deaconess Medical Center but does not have any licensing restrictions for intellectual property. LAMP is safe, secure, and easy to use. Though it has broad potential, we will be using it as an interface that patients and clinicians can use together to track data and generate visual reports. It’s important to note that LAMP is not an electronic health record system. Below is an outline of the technical specifications that back privacy and security in the LAMP Platform.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"login-and-authentication"},`Login and Authentication`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Credentials are required to access the LAMP Platform. By default, a clinician can see the data of their patient, but any other access must be explicitly granted. The clinicians are able to view aggregate reports that contain no identifying information about the patients in the site.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"technical-safeguards"},`Technical Safeguards`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`As data is transferred between the device and server, it is encrypted in flight using the TLS v1.3 protocol atop the HTTP/2.0 transmission format. As data is accepted by the server, it is stored in the data lake encrypted at rest using AES-256 encryption through a secret key unique to each site. Any requests made to the server to create, update, delete, or even read data, will cause the incremental addition of the request to an audit log, along with the credentials used to make the request so it is possible for a site to monitor all requests for data.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"personal-health-information-phi"},`Personal Health Information (PHI)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`There are 18 identifiers that make health information PHI. The one PHI type that LAMP will collect are dates as information is timestamped. LAMP will not collect patient names and uses codes instead. Thus, linking any information collected by LAMP to a unique patient is not easy without a key which will be kept by each site and not shared.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"hipaa"},`HIPAA`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`LAMP offers physical and technical safeguards that are in line with the HIPAA Security Privacy Rule. Specifically, the rule “requires covered entities to maintain reasonable and appropriate administrative, technical, and physical safeguards for protecting e-PHI including:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Ensure the confidentiality, integrity, and availability of all e-PHI they create, receive, maintain or transmit;`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Identify and protect against reasonably anticipated threats to the security or integrity of the information;`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Protect against reasonably anticipated, impermissible uses or disclosures; and`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Ensure compliance by their workforce.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`LAMP meets this through the offering the follow features:`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Limited facility access and control with authorized access procedures in place`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Restrictions for transferring, removing, disposing, and re-using PHI`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Access control allowing only for authorized personnel to access PHI.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Audit reports / tracking logs that record activity`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Integrity controls in the database that ensure data is not altered or destroyed unless by an authorized user with the appropriate permissions`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Encrypted network transmissions`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"breach-policy"},`Breach Policy`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`In the event of a suspected data breach, a site lead may immediately revoke all credentials and immediately disable access to the data. As both a public and private key are required to decrypt exported data, and separate private keys are maintained per site and per patient, a data breach of one sub-section of the data cannot and will not affect other sub-sections or the entire platform. Furthermore, devices are identified by a unique per-device token and data integrity in flight can be ensured when reviewing the audit trail by cross-referencing this device-specific token. As noted above, LAMP does not record name but identifies users by codes so even with a breach, it will be hard to connect a person to their data.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"risk-analysis-and-management"},`Risk Analysis and Management`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Our team performs frequent risk analysis as part of our security management processes. We take the following steps to mitigate risk:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Daily review of logs for all BIDMC-hosted research and clinical sites to pinpoint potential risks.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Determine the probability of a major security issue occuring.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Frequent security updates to proactively prevent new threats to LAMP's security.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"security-threat-protocol"},`Security Threat Protocol`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`In the unlikely event of an active security threat, our team will take the following steps:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Determine how and what information has been endangered.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Alert users with steps (if any) they must take, such as changing their passwords.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Identify and complete the necessary steps our team must take to secure our server, dashboard, and data.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},`Log the type of threat, when and how it occured, and the resolution.`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);