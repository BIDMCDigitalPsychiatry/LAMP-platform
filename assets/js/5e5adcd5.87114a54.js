"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[6600],{

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

/***/ 53866:
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
const frontMatter={};const contentTitle='Deploying the LAMP Platform';const metadata={"unversionedId":"deploy/deploying","id":"deploy/deploying","title":"Deploying the LAMP Platform","description":"You must have a configured Docker Swarm cluster to continue.","source":"@site/docs/07-deploy/07-deploying.md","sourceDirName":"07-deploy","slug":"/deploy/deploying","permalink":"/deploy/deploying","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/07-deploying.md","tags":[],"version":"current","lastUpdatedBy":"Sarah Chang","lastUpdatedAt":1683570165,"formattedLastUpdatedAt":"5/8/2023","sidebarPosition":7,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Deploying via CloudFormation","permalink":"/deploy/cloudformation"},"next":{"title":"Testing the LAMP Platform","permalink":"/deploy/testing"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Prerequisites',id:'prerequisites',children:[],level:3},{value:'Cloud Mesh Router',id:'cloud-mesh-router',children:[],level:3},{value:'LAMP Platform',id:'lamp-platform',children:[],level:3},{value:'Maintaining and Updating the LAMP Platform',id:'maintaining-and-updating-the-lamp-platform',children:[],level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"deploying-the-lamp-platform"},`Deploying the LAMP Platform`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`You must have a configured Docker Swarm cluster to continue.`),`
Please follow all steps below in the exact order specified, though you may skip optional steps.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`The files provided below support these orchestration tools: `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Docker Compose`),` (single-node)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Docker Swarm`),` (single-node or multi-node)`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`WARNING:`),` If creating a multi-node deployment, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/"},`follow the proper procedures for manager/worker node allocation`),`. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`An N manager cluster tolerates the loss of at most (N-1)/2 managers`),`. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`If creating a 2-node cluster and both are designated as managers, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`CATASTROPHIC FAILURE AND SEVERE DATA LOSS may occur if EITHER node loses connectivity for more than 5 minutes.`),` `))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},`Kubernetes`),` (multi-node)`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},`For more information on using Kubernetes, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://docs.docker.com/get-started/orchestration/"},`follow this guide`),` or `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"https://docs.docker.com/docker-for-mac/kubernetes/#override-the-default-orchestrator"},`this guide`),` instead.`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"prerequisites"},`Prerequisites`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`This step is required.`),` `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Configure firewall rules as needed to avoid directly opening ports on your nodes, and instead appropriately route traffic through ports `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`80`),` (HTTP) and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`443`),` (HTTPS). `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`Create a new network called `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`public`),` to connect all externally accessible services. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},`docker network create --driver overlay --attachable public
`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`Using your DNS provider of choice, provision a domain name (here we use `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`[example.com](http://example.com)`),` to represent your domain name and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`1.1.1.1`),` to represent your node's IP address). `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`DNS Records`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},`┌───────────────┬──────┬─────────┬──────┐
│ RECORD NAME   │ TYPE │ VALUE   │ TTL  │
├───────────────┼──────┼─────────┼──────┤
│ example.com   │ A    │ 1.1.1.1 │ 3600 │ 
│ *.example.com │ A    │ 1.1.1.1 │ 3600 │
└───────────────┴──────┴─────────┴──────┘
`))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`If you have multiple nodes in your cluster, be sure to configure alternate IP address values for all DNS records.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`DNS Records`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`  For example, on `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`AWS Route53`),`, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`ROUND-ROBIN`),` refers to `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Multivalue Answer`),` response types `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`without`),` health-check enabled.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},`┌───────────────┬──────┬─────────┬──────┬─────────────┬─────────┐
│ RECORD NAME   │ TYPE │ VALUE   │ TTL  │ MODE        │ ALIAS   │
├───────────────┼──────┼─────────┼──────┼─────────────┼─────────┤
│ example.com   │ A    │ 1.1.1.1 │ 3600 │ ROUND-ROBIN │ node-01 │
│ example.com   │ A    │ 2.2.2.2 │ 3600 │ ROUND-ROBIN │ node-02 │
│ *.example.com │ A    │ 1.1.1.1 │ 3600 │ ROUND-ROBIN │ node-01 │
│ *.example.com │ A    │ 2.2.2.2 │ 3600 │ ROUND-ROBIN │ node-02 │
└───────────────┴──────┴─────────┴──────┴─────────────┴─────────┘
`)))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"cloud-mesh-router"},`Cloud Mesh Router`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`This step is optional and can be skipped.`),`
We recommend deploying `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Traefik`),` as a `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Cloud Mesh Router`),` to make it easier to connect services and components, generate SSL certificates for encrypting traffic, diagnose traffic issues, and capture access logs for auditing.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Docker Stack:`),` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`**traefik.yml**`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`  `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`You MUST replace the following configuration variables in your copy of this file:`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`administrator@example.com`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},`version: "3.7"
services:
  traefik:
    image: traefik:latest
    command:
      - "--log.level=INFO"
      - "--accesslog=true"
      - "--api=true"
      - "--providers.docker=true"
      - "--providers.docker.swarmMode=true"
      - "--providers.docker.exposedByDefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--entrypoints.websecure.http.tls.certResolver=default"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entryPoint.scheme=https"
      - "--entrypoints.web.http.redirections.entryPoint.permanent=true"
      - "--certificatesResolvers.default.acme.email=administrator@example.com"
      - "--certificatesResolvers.default.acme.storage=/data/acme.json"
      - "--certificatesResolvers.default.acme.tlsChallenge=true"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "traefik-ssl:/data/"
    ports:
      - target: 80
        protocol: tcp
        published: 80
        mode: ingress
      - target: 443
        protocol: tcp
        published: 443
        mode: ingress
    networks:
      - public
    deploy:
      mode: replicated
      placement:
        constraints:
          - node.role == manager
networks:
  public:
    external: true
volumes:
  traefik-ssl:
`)))))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},`docker stack deploy --compose-file traefik.yml router
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`We recommend deploying `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"strong"},`[Portainer](https://www.portainer.io/)`)),` as a `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Swarm Management Console`),` to make it easier to troubleshoot failed deployments, rapidly test and integrate new components, and effectively monitor container logs and health. Read this documentation to learn more about `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://portainer.readthedocs.io/en/stable/"},`Portainer and how to configure and use it`),`.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"lamp-platform"},`LAMP Platform`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`This step is required.`),` `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Create a `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`/data`),` folder in the node that will be hosting the database(s).`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},`mkdir -p /data/db
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`You must first generate two cryptographically secure hexadecimal strings. Substitute these strings in the stack file below as indicated by the environment variables after the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`#`),`. The strings must be of the correct length, or deployment will not work.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},`openssl rand -hex 8 # DB_PASSWORD_HERE
openssl rand -hex 32 # 32_BIT_ENCRYPTION_KEY_HERE
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Docker Stack:`),` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`**lamp.yml**`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`  `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`You MUST replace the following configuration variables in your copy of this file:`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`dashboard.example.com`),` The address you will use to access the LAMP dashboard. (If deploying the dashboard)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`32_BIT_ENCRYPTION_KEY_HERE`),` See above. Plese confirm that this key has the correct number of characters (64).`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`DB_PASSSWORD_HERE`),` See above.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`YOUR_PUSH_KEY_HERE`),` → `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"strong","href":"mailto:team@digitalpsych.org"},`Please contact us to enable push notifications.`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},`api.example.com`),` Your LAMP Platform API Server domain shared with others to use.`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`It is possible to use the LAMP dashboard hosted by BIDMC (dashboard.lamp.digital) or to self-host the dashboard. Self-hosting will require the addition of a dashboard service to the LAMP stack.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`If you do not plan to self-host the LAMP dashboard:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},`version: '3.7'
services:
  server:
    image: ghcr.io/bidmcdigitalpsychiatry/lamp-server:2022
    healthcheck:
      test: wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1
    environment:
      HTTPS: 'off'
      ROOT_KEY: '32_BIT_ENCRYPTION_KEY_HERE'
      DB: 'mongodb://admin:DB_PASSSWORD_HERE@database:27017/'
      PUSH_API_GATEWAY: 'https://app-gateway.lamp.digital/'
      PUSH_API_KEY: 'YOUR_PUSH_KEY_HERE'
      DASHBOARD_URL: 'dashboard.lamp.digital'
      REDIS_HOST: 'redis://cache:6379/0'
      NATS_SERVER: 'message_queue:4222'
    networks:
      - default
      - public
    logging:
      options:
        max-size: "10m"
        max-file: "3"
    deploy:
      mode: replicated
      update_config:
        order: start-first
        failure_action: rollback
      labels:
        traefik.enable: 'true'
        traefik.docker.network: 'public'
        traefik.http.routers.lamp_server.entryPoints: 'websecure'
        traefik.http.routers.lamp_server.rule: 'Host(\`api.example.com\`)'
        traefik.http.routers.lamp_server.tls.certresolver: 'default'
        traefik.http.services.lamp_server.loadbalancer.server.port: 3000
      placement:
        constraints:
          - node.role == manager
  database:
    image: mongo:6.0.4
    environment:
      MONGO_INITDB_ROOT_USERNAME: 'admin'
      MONGO_INITDB_ROOT_PASSWORD: 'DB_PASSWORD_HERE'
    volumes:
      - /data/db:/data/db
    networks:
      - public
    deploy:
      mode: replicated
      update_config:
        order: stop-first
        failure_action: rollback
      placement:
        constraints:
          - node.role == manager
  cache:
    image: redis:6.0.8-alpine
    healthcheck:
      test: redis-cli ping
    deploy:
      mode: replicated
      update_config:
        order: stop-first
        failure_action: rollback
      placement:
        constraints:
          - node.role == manager
  message_queue:
    image: nats:2.1.9-alpine3.12
    healthcheck:
      test: wget --no-verbose --tries=1 --spider http://localhost:8222/varz || exit 1
    deploy:
      mode: replicated
      update_config:
        order: start-first
        failure_action: rollback
      placement:
        constraints:
          - node.role == manager
networks:
  public:
    external: true
\`\`\`yaml

`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ol"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"li"},`If you plan to self-host the LAMP dashboard:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-yaml"},`version: '3.7'
services:
  dashboard:
    image: ghcr.io/bidmcdigitalpsychiatry/lamp-dashboard:2023
    logging:
        driver: "json-file"
        options:
          max-size: "50m"
    environment:
      REACT_APP_LAMP_RESEARCHER_ALIAS: 'Investigator'
    networks:
      - public
    healthcheck:
      test: wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1
    deploy:
      mode: replicated
      update_config:
        order: start-first
        failure_action: rollback
      labels:
        portainer.autodeploy: 'true'
        traefik.enable: 'true'
        traefik.http.routers.lamp_dashboard.entryPoints: 'websecure'
        traefik.http.routers.lamp_dashboard.rule: 'Host(\`dashboard.example.com\`)'
        traefik.http.routers.lamp_dashboard.tls.certresolver: 'default'
        traefik.http.services.lamp_dashboard.loadbalancer.server.port: 80
      placement:
        constraints:
          - node.role == manager
  server:
    image: ghcr.io/bidmcdigitalpsychiatry/lamp-server:2022
    healthcheck:
      test: wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1
    environment:
      HTTPS: 'off'
      ROOT_KEY: '32_BIT_ENCRYPTION_KEY_HERE'
      DB: 'mongodb://admin:DB_PASSSWORD_HERE@database:27017/'
      PUSH_API_GATEWAY: 'https://app-gateway.lamp.digital/'
      PUSH_API_KEY: 'YOUR_PUSH_KEY_HERE'
      DASHBOARD_URL: 'dashboard.lamp.digital'
      REDIS_HOST: 'redis://cache:6379/0'
      NATS_SERVER: 'message_queue:4222'
    networks:
      - default
      - public
    logging:
      options:
        max-size: "10m"
        max-file: "3"
    deploy:
      mode: replicated
      update_config:
        order: start-first
        failure_action: rollback
      labels:
        traefik.enable: 'true'
        traefik.docker.network: 'public'
        traefik.http.routers.lamp_server.entryPoints: 'websecure'
        traefik.http.routers.lamp_server.rule: 'Host(\`api.example.com\`)'
        traefik.http.routers.lamp_server.tls.certresolver: 'default'
        traefik.http.services.lamp_server.loadbalancer.server.port: 3000
      placement:
        constraints:
          - node.role == manager
  database:
    image: mongo:6.0.4
    environment:
      MONGO_INITDB_ROOT_USERNAME: 'admin'
      MONGO_INITDB_ROOT_PASSWORD: 'DB_PASSWORD_HERE'
    volumes:
      - /data/db:/data/db
    networks:
      - public
    deploy:
      mode: replicated
      update_config:
        order: stop-first
        failure_action: rollback
      placement:
        constraints:
          - node.role == manager
  cache:
    image: redis:6.0.8-alpine
    healthcheck:
      test: redis-cli ping
    deploy:
      mode: replicated
      update_config:
        order: stop-first
        failure_action: rollback
      placement:
        constraints:
          - node.role == manager
  message_queue:
    image: nats:2.1.9-alpine3.12
    healthcheck:
      test: wget --no-verbose --tries=1 --spider http://localhost:8222/varz || exit 1
    deploy:
      mode: replicated
      update_config:
        order: start-first
        failure_action: rollback
      placement:
        constraints:
          - node.role == manager
networks:
  public:
    external: true
\`\`\`yaml
`)))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`Note: If you are deploying more than one stack, please be sure that all traefik variables (for example, `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`traefik.http.routers.lamp_dashboard.rule`),`) under "labels" are unique. Otherwise, this will cause issues with both the deployment of this container and the other containers that contain the duplicate variables.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`If you've deployed the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},`Swarm Management Console`),`, log into your swarm cluster and navigate to the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`Stack`),` tab on the left sidebar. Paste the contents of the stack file into the editor pane and tap "Deploy", instead of running the command below. `),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-bash"},`docker stack deploy --compose-file lamp.yml lamp
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"maintaining-and-updating-the-lamp-platform"},`Maintaining and Updating the LAMP Platform`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,`If you are using this Docker Stack provided, you will only need to run a `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`docker service update`),` command on the API Server to pull the latest image. Because Docker image versioning is calendar-based, at the moment you will manually need to update from `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`2022`),` to `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},`2023`),`, and so on.`));};MDXContent.isMDXComponent=true;

/***/ })

}]);