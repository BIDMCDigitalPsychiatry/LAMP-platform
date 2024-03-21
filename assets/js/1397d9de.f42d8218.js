"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[4527],{

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

/***/ 7119:
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
const frontMatter={};const contentTitle='Create and Customize Tips';const metadata={"unversionedId":"start_here/activities/create_tips","id":"start_here/activities/create_tips","title":"Create and Customize Tips","description":"How to Create a Tip from the Patient Profile","source":"@site/docs/06-start_here/06-activities/01-create_tips.md","sourceDirName":"06-start_here/06-activities","slug":"/start_here/activities/create_tips","permalink":"/start_here/activities/create_tips","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/06-start_here/06-activities/01-create_tips.md","tags":[],"version":"current","lastUpdatedBy":"carlan1","lastUpdatedAt":1711034931,"formattedLastUpdatedAt":"3/21/2024","sidebarPosition":1,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Users vs Activities vs Sensors vs Studies Tab","permalink":"/start_here/users_vs_activities"},"next":{"title":"Create and Customize Surveys","permalink":"/start_here/activities/create_surveys"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[{value:'Basic Formatting',id:'basic-formatting',children:[],level:3},{value:'Advanced Formatting',id:'advanced-formatting',children:[],level:3},{value:'Embedding Media',id:'embedding-media',children:[],level:3}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"create-and-customize-tips"},`Create and Customize Tips`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5Hf3CPCgC50",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:true}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em",{parentName:"p"},`How to Create a Tip from the Patient Profile`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Navigate to the activities page click the “+ Add” button, and then scroll to the bottom and click “tips”.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Log in to the dashboard and navigate to the Activities tab.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Click the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`[+ Add]`),` button at the top right of the list to begin.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Select the study you wish to add the tip to.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Title your tip.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Copy and paste the link to the tip you want to add. If there is no link this will be left blank.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Add the tip author. If there is no author, this will be left blank.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ol"},`Press the `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"li"},`(+)`),` icon to add an image.`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(58680)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(14059)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"customizing-the-content-of-your-tip"},`Customizing the Content of Your Tip`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Tips support `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"https://www.markdownguide.org/getting-started/"},`Markdown-formatted text`),`, including basic HTML and embedded content such as YouTube videos or PDF documents. Markdown formatting is different than typical Word processing or other text editors, and uses special syntax to change how certain text is displayed. Examples of what you can do are provided below, but if you need more help, please see the Markdown Guide linked above.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"basic-formatting"},`Basic Formatting`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(91330)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-markdown"},`# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

---

## Text

**This is bold text**

*This is italic text*

Emojis in this text will be replaced like in Slack or GitHub: :dog: :+1:
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(39387)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-markdown"},`## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(53326)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(59908)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-markdown"},`## Blocks

Inline \`block\`

Paragraph blocks

`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Sample text here...`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`
---

## Quotes

> Quotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(30849)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-markdown"},`## Links & Media

[link text](https://docs.lamp.digital)

[link with title](https://docs.lamp.digital "Hello LAMP!")

![flaticon](https://www.flaticon.com/svg/static/icons/svg/3823/3823851.svg)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"advanced-formatting"},`Advanced Formatting`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(80057)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-markdown"},`## Tables

| hello | world | this | is | a |
|:-:|-|-|-|-|
| table | 1 | 2 | 3 | 4 |
| abc | 123 | | | |
| ![embedded image](https://www.flaticon.com/svg/static/icons/svg/3823/3823851.svg) | | 1. hi<br />2. hello | | **test** |
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img",{src:(__webpack_require__(32616)/* ["default"] */ .A)})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-markdown"},`<details>
<summary>Ready to watch a video?</summary>
<iframe width="400" height="300" src="https://www.youtube.com/embed/NkCPCFGxxr8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</details>

<details>
<summary>Ready to read a book?</summary>
<embed src="http://www.africau.edu/images/default/sample.pdf" width="400" height="520" type="application/pdf">
</details>
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3",{"id":"embedding-media"},`Embedding Media`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`In some cases, if you're embedding media such as images or small PDF files, it's important to encode that data into the Markdown text itself, instead of using URLs. → `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"https://dopiaza.org/tools/datauri/index.php"},`You may need to use an online base64 converter tool, like this one.`),` Upload the file, copy the text that appears and paste that as the “src=…” item.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Before (URL):`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`http://www.africau.edu/images/default/sample.pdf
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`After (Embedded Data):`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`data:image/png;base64,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
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"li"},`Full Markdown Sample`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-markdown"},`# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

---

## Text

**This is bold text**

*This is italic text*

Emojis in this text will be replaced like in Slack or GitHub: :dog: :+1:

---

## Quotes

> Quotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

---

## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

---

## Blocks

Inline \`block\`

Paragraph blocks

`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"li"},`  Sample text here...`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",{parentName:"li"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre"},`
---

## Links & Media

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

![image](https://www.flaticon.com/svg/static/icons/svg/3823/3823851.svg)

<details>
<summary>Ready to watch a video?</summary>
<iframe width="400" height="300" src="https://www.youtube.com/embed/NkCPCFGxxr8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</details>

<details>
<summary>Ready to read a book?</summary>
<embed src="data:application/pdf;base64,JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg==" width="400" height="520" type="application/pdf">
</details>

## Tables

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 hello                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | world | this           | is | a        |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-------|----------------|----|----------|
| table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 1     | 2              | 3  | 4        |
| abc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 123   |                |    |          |
| ![embedded image](data:image/png;base64,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) |       | 1. hi 2. hello |    | **test** |
`)))));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 91330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screen_Shot_2020-12-01_at_2.00.39_PM-b55ccde8b4ecdf0ad4d14766612a89ba.png");

/***/ }),

/***/ 39387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screen_Shot_2020-12-01_at_2.00.54_PM-f211d331ed951dd98beff603c8c1d610.png");

/***/ }),

/***/ 59908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screen_Shot_2020-12-01_at_2.01.12_PM-5189f2ae46a1b1c7c1ecf398d122b92c.png");

/***/ }),

/***/ 53326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screen_Shot_2020-12-01_at_2.01.29_PM-0dbb87ec4ef615540c090aba048a2491.png");

/***/ }),

/***/ 80057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screen_Shot_2020-12-01_at_2.01.46_PM-8bd7b38b31ad58ea4f80e9e0267ca4db.png");

/***/ }),

/***/ 30849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screen_Shot_2020-12-01_at_2.01.59_PM-55dfcc6ca4c82b19533e6fe2c2ea0eba.png");

/***/ }),

/***/ 32616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screen_Shot_2020-12-01_at_2.02.22_PM-7b6e7aa18b1de530a77716d3da2a9bee.png");

/***/ }),

/***/ 58680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/activity_menu-2788d6de1850a80a5fa39b0b5e4b0d69.jpg");

/***/ }),

/***/ 14059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/new_tip-0ab0e9e1db123c75ec907501edafa898.jpg");

/***/ })

}]);