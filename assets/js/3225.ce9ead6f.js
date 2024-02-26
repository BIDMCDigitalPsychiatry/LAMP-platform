"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[3225],{

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

/***/ 50039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ MainHeading),
  A: () => (/* binding */ theme_Heading)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 30 modules
var lib = __webpack_require__(91211);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_y2LR","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_3ly5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// eslint-disable-next-line react/function-component-definition
const MainHeading=_ref=>{let{...props}=_ref;return/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("h1",(0,esm_extends/* default */.A)({},props,{id:undefined// h1 headings do not need an id because they don't appear in the TOC
}),props.children));};const createAnchorHeading=Tag=>_ref2=>{let{id,...props}=_ref2;const{navbar:{hideOnScroll}}=(0,lib/* useThemeConfig */.pN)();if(!id){return/*#__PURE__*/react.createElement(Tag,props);}return/*#__PURE__*/react.createElement(Tag,(0,esm_extends/* default */.A)({},props,{className:(0,clsx_m/* default */.A)('anchor',{[styles_module.anchorWithHideOnScrollNavbar]:hideOnScroll,[styles_module.anchorWithStickyNavbar]:!hideOnScroll}),id:id}),props.children,/*#__PURE__*/react.createElement("a",{className:"hash-link",href:`#${id}`,title:(0,Translate/* translate */.T)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"\u200B"));};const Heading=headingType=>headingType==='h1'?MainHeading:createAnchorHeading(headingType);/* harmony default export */ const theme_Heading = (Heading);

/***/ }),

/***/ 61202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ theme_MDXComponents)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js + 1 modules
var Head = __webpack_require__(38895);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(75489);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(20053);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 1 modules
var dist = __webpack_require__(68382);
;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(text,_temp){let{target=document.body}=_temp===void 0?{}:_temp;if(typeof text!=='string'){throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);}const element=document.createElement('textarea');const previouslyFocusedElement=document.activeElement;element.value=text;// Prevent keyboard from showing on mobile
element.setAttribute('readonly','');element.style.contain='strict';element.style.position='absolute';element.style.left='-9999px';element.style.fontSize='12pt';// Prevent zooming on iOS
const selection=document.getSelection();const originalRange=selection.rangeCount>0&&selection.getRangeAt(0);target.append(element);element.select();// Explicit selection workaround for iOS
element.selectionStart=0;element.selectionEnd=text.length;let isSuccess=false;try{isSuccess=document.execCommand('copy');}catch{}element.remove();if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}// Get the focus back on the previously focused element, if any
if(previouslyFocusedElement){previouslyFocusedElement.focus();}return isSuccess;}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(21312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 30 modules
var lib = __webpack_require__(91211);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/palenight/index.js
// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(105, 112, 152)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "inserted"],
    style: {
      color: "rgb(195, 232, 141)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation", "selector"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(191, 199, 213)"
    }
  }, {
    types: ["class-name", "attr-name"],
    style: {
      color: "rgb(255, 203, 107)"
    }
  }, {
    types: ["tag", "deleted"],
    style: {
      color: "rgb(255, 85, 114)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(137, 221, 255)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["keyword"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }, {
    types: ["url"],
    style: {
      color: "rgb(221, 221, 221)"
    }
  }]
};

/* harmony default export */ const palenight = (theme);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(94785);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const usePrismTheme=()=>{const{prism}=(0,lib/* useThemeConfig */.pN)();const{isDarkTheme}=(0,useThemeContext/* default */.A)();const lightModeTheme=prism.theme||palenight;const darkModeTheme=prism.darkTheme||lightModeTheme;const prismTheme=isDarkTheme?darkModeTheme:lightModeTheme;return prismTheme;};/* harmony default export */ const hooks_usePrismTheme = (usePrismTheme);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"codeBlockContainer":"codeBlockContainer_J+bg","codeBlockContent":"codeBlockContent_csEI","codeBlockTitle":"codeBlockTitle_oQzk","codeBlock":"codeBlock_rtdJ","copyButton":"copyButton_M3SB","codeBlockLines":"codeBlockLines_1zSZ"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlock(_ref){let{children,className:blockClassName,metastring,title}=_ref;const{prism}=(0,lib/* useThemeConfig */.pN)();const[showCopied,setShowCopied]=(0,react.useState)(false);const[mounted,setMounted]=(0,react.useState)(false);// The Prism theme on SSR is always the default theme but the site theme
// can be in a different mode. React hydration doesn't update DOM styles
// that come from SSR. Hence force a re-render after mounting to apply the
// current relevant styles. There will be a flash seen of the original
// styles seen using this current approach but that's probably ok. Fixing
// the flash will require changing the theming approach and is not worth it
// at this point.
(0,react.useEffect)(()=>{setMounted(true);},[]);// TODO: the title is provided by MDX as props automatically
// so we probably don't need to parse the metastring
// (note: title="xyz" => title prop still has the quotes)
const codeBlockTitle=(0,lib/* parseCodeBlockTitle */.wt)(metastring)||title;const prismTheme=hooks_usePrismTheme();// In case interleaved Markdown (e.g. when using CodeBlock as standalone component).
const content=Array.isArray(children)?children.join(''):children;const language=(0,lib/* parseLanguage */.Op)(blockClassName)??prism.defaultLanguage;const{highlightLines,code}=(0,lib/* parseLines */.Li)(content,metastring,language);const handleCopyCode=()=>{copyTextToClipboard(code);setShowCopied(true);setTimeout(()=>setShowCopied(false),2000);};return/*#__PURE__*/react.createElement(dist/* default */.Ay,(0,esm_extends/* default */.A)({},dist/* defaultProps */.Gs,{key:String(mounted),theme:prismTheme,code:code,language:language}),_ref2=>{let{className,style,tokens,getLineProps,getTokenProps}=_ref2;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(styles_module.codeBlockContainer,blockClassName,lib/* ThemeClassNames */.GN.common.codeBlock)},codeBlockTitle&&/*#__PURE__*/react.createElement("div",{style:style,className:styles_module.codeBlockTitle},codeBlockTitle),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(styles_module.codeBlockContent,language)},/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:(0,clsx_m/* default */.A)(className,styles_module.codeBlock,'thin-scrollbar'),style:style},/*#__PURE__*/react.createElement("code",{className:styles_module.codeBlockLines},tokens.map((line,i)=>{if(line.length===1&&line[0].content==='\n'){line[0].content='';}const lineProps=getLineProps({line,key:i});if(highlightLines.includes(i)){lineProps.className+=' docusaurus-highlight-code-line';}return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.A)({key:i},lineProps),line.map((token,key)=>/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.A)({key:key},getTokenProps({token,key})))),/*#__PURE__*/react.createElement("br",null));}))),/*#__PURE__*/react.createElement("button",{type:"button","aria-label":(0,Translate/* translate */.T)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),className:(0,clsx_m/* default */.A)(styles_module.copyButton,'clean-btn'),onClick:handleCopyCode},showCopied?/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))));});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(50039);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Details_styles_module = ({"details":"details_h+cY"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing alert classes?
const InfimaClasses='alert alert--info';function Details(_ref){let{...props}=_ref;return/*#__PURE__*/react.createElement(lib/* Details */.B_,(0,esm_extends/* default */.A)({},props,{className:(0,clsx_m/* default */.A)(InfimaClasses,Details_styles_module.details,props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// MDX elements are wrapped through the MDX pragma
// In some cases (notably usage with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element){if(element?.props?.mdxType&&element?.props?.originalType){const{mdxType,originalType,...newProps}=element.props;return/*#__PURE__*/react.createElement(element.props.originalType,newProps);}return element;}const MDXComponents={head:props=>{const unwrappedChildren=react.Children.map(props.children,child=>unwrapMDXElement(child));return/*#__PURE__*/react.createElement(Head/* default */.A,props,unwrappedChildren);},code:props=>{const{children}=props;// For retrocompatibility purposes (pretty rare use case)
// See https://github.com/facebook/docusaurus/pull/1584
if(/*#__PURE__*/(0,react.isValidElement)(children)){return children;}return!children.includes('\n')?/*#__PURE__*/react.createElement("code",props):/*#__PURE__*/react.createElement(CodeBlock,props);},a:props=>/*#__PURE__*/react.createElement(Link/* default */.A,props),pre:props=>{const{children}=props;// See comment for `code` above
if(/*#__PURE__*/(0,react.isValidElement)(children)&&/*#__PURE__*/(0,react.isValidElement)(children?.props?.children)){return children.props.children;}return/*#__PURE__*/react.createElement(CodeBlock,/*#__PURE__*/(0,react.isValidElement)(children)?children?.props:{...props});},details:props=>{const items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the Detais theme component
const summary=items.find(item=>item?.props?.mdxType==='summary');const children=/*#__PURE__*/react.createElement(react.Fragment,null,items.filter(item=>item!==summary));return/*#__PURE__*/react.createElement(Details,(0,esm_extends/* default */.A)({},props,{summary:summary}),children);},h1:(0,Heading/* default */.A)('h1'),h2:(0,Heading/* default */.A)('h2'),h3:(0,Heading/* default */.A)('h3'),h4:(0,Heading/* default */.A)('h4'),h5:(0,Heading/* default */.A)('h5'),h6:(0,Heading/* default */.A)('h6')};/* harmony default export */ const theme_MDXComponents = (MDXComponents);

/***/ }),

/***/ 68382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ dist),
  Gs: () => (/* binding */ defaultProps)
});

// UNUSED EXPORTS: Prism

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(61258);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ const duotoneDark = (theme);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism["default"],
  theme: duotoneDark
};

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

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ const dist = (Highlight);



/***/ })

}]);