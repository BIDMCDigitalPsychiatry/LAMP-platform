"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[7920],{

/***/ 98374:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ theme_SearchPage; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(87757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(52263);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 24 modules
var Layout = __webpack_require__(77019);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js + 1 modules
var Head = __webpack_require__(12859);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(39960);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(76775);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(10412);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/hooks/useSearchQuery.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SEARCH_PARAM_QUERY="q";function useSearchQuery(){var history=(0,react_router/* useHistory */.k6)();var location=(0,react_router/* useLocation */.TH)();var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;return{searchValue:ExecutionEnvironment["default"].canUseDOM&&new URLSearchParams(location.search).get(SEARCH_PARAM_QUERY)||"",updateSearchPath:function updateSearchPath(searchValue){var searchParams=new URLSearchParams(location.search);if(searchValue){searchParams.set(SEARCH_PARAM_QUERY,searchValue);}else{searchParams.delete(SEARCH_PARAM_QUERY);}history.replace({search:searchParams.toString()});},generateSearchPageLink:function generateSearchPageLink(searchValue){// Refer to https://github.com/facebook/docusaurus/pull/2838
return baseUrl+"search?q="+encodeURIComponent(searchValue);}};}/* harmony default export */ var hooks_useSearchQuery = (useSearchQuery);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchBar/fetchIndexes.js
var fetchIndexes = __webpack_require__(90022);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/SearchSourceFactory.js + 6 modules
var SearchSourceFactory = __webpack_require__(98202);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlight.js
var highlight = __webpack_require__(82539);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/highlightStemmed.js + 1 modules
var highlightStemmed = __webpack_require__(10726);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/getStemmedPositions.js
var getStemmedPositions = __webpack_require__(91073);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/LoadingRing/LoadingRing.jsx + 1 modules
var LoadingRing = __webpack_require__(80311);
// EXTERNAL MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/proxiedGenerated.js + 1 modules
var proxiedGenerated = __webpack_require__(61029);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/utils/simpleTemplate.js
function simpleTemplate(template,params){return template.replace(/\{\{\s*(\w+)\s*\}\}/g,function(raw,keyword){if(Object.prototype.hasOwnProperty.call(params,keyword)){return String(params[keyword]);}return raw;});}
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var SearchPage_module = ({"searchQueryInput":"searchQueryInput_5r-w","searchResultItem":"searchResultItem_18XW","searchResultItemPath":"searchResultItemPath_TjRL","searchResultItemSummary":"searchResultItemSummary_5qSX"});
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.jsx
function SearchPage(){var _useDocusaurusContext=(0,useDocusaurusContext/* default */.Z)(),baseUrl=_useDocusaurusContext.siteConfig.baseUrl;var _useSearchQuery=hooks_useSearchQuery(),searchValue=_useSearchQuery.searchValue,updateSearchPath=_useSearchQuery.updateSearchPath;var _useState=(0,react.useState)(searchValue),searchQuery=_useState[0],setSearchQuery=_useState[1];var _useState2=(0,react.useState)(),searchSource=_useState2[0],setSearchSource=_useState2[1];var _useState3=(0,react.useState)(),searchResults=_useState3[0],setSearchResults=_useState3[1];var pageTitle=(0,react.useMemo)(function(){return searchQuery?simpleTemplate(proxiedGenerated/* translations.search_results_for */.Iz.search_results_for,{keyword:searchQuery}):proxiedGenerated/* translations.search_the_documentation */.Iz.search_the_documentation;},[searchQuery]);(0,react.useEffect)(function(){updateSearchPath(searchQuery);if(searchSource){if(searchQuery){searchSource(searchQuery,function(results){setSearchResults(results);});}else{setSearchResults(undefined);}}// `updateSearchPath` should not be in the deps,
// otherwise will cause call stack overflow.
},[searchQuery,searchSource]);var handleSearchInputChange=(0,react.useCallback)(function(e){setSearchQuery(e.target.value);},[]);(0,react.useEffect)(function(){if(searchValue&&searchValue!==searchQuery){setSearchQuery(searchValue);}},[searchValue]);(0,react.useEffect)(function(){function doFetchIndexes(){return _doFetchIndexes.apply(this,arguments);}function _doFetchIndexes(){_doFetchIndexes=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){var _yield$fetchIndexes,wrappedIndexes,zhDictionary;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return (0,fetchIndexes/* fetchIndexes */.w)(baseUrl);case 2:_yield$fetchIndexes=_context.sent;wrappedIndexes=_yield$fetchIndexes.wrappedIndexes;zhDictionary=_yield$fetchIndexes.zhDictionary;setSearchSource(function(){return (0,SearchSourceFactory/* SearchSourceFactory */.v)(wrappedIndexes,zhDictionary,100);});case 6:case"end":return _context.stop();}}},_callee);}));return _doFetchIndexes.apply(this,arguments);}doFetchIndexes();},[baseUrl]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{title:pageTitle},/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("meta",{property:"robots",content:"noindex, follow"})),/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("h1",null,pageTitle),/*#__PURE__*/react.createElement("input",{type:"search",name:"q",className:SearchPage_module.searchQueryInput,"aria-label":"Search",onChange:handleSearchInputChange,value:searchQuery,autoComplete:"off",autoFocus:true}),!searchSource&&searchQuery&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(LoadingRing/* default */.Z,null)),searchResults&&(searchResults.length>0?/*#__PURE__*/react.createElement("p",null,simpleTemplate(searchResults.length===1?proxiedGenerated/* translations.count_documents_found */.Iz.count_documents_found:proxiedGenerated/* translations.count_documents_found_plural */.Iz.count_documents_found_plural,{count:searchResults.length})): true?/*#__PURE__*/react.createElement("p",null,proxiedGenerated/* translations.no_documents_were_found */.Iz.no_documents_were_found):/*#__PURE__*/0),/*#__PURE__*/react.createElement("section",null,searchResults&&searchResults.map(function(item){return/*#__PURE__*/react.createElement(SearchResultItem,{key:item.document.i,searchResult:item});}))));}function SearchResultItem(_ref){var _ref$searchResult=_ref.searchResult,document=_ref$searchResult.document,type=_ref$searchResult.type,page=_ref$searchResult.page,tokens=_ref$searchResult.tokens,metadata=_ref$searchResult.metadata;var isTitle=type===0;var isContent=type===2;var pathItems=(isTitle?document.b:page.b).slice();var articleTitle=isContent?document.s:document.t;if(!isTitle){pathItems.push(page.t);}return/*#__PURE__*/react.createElement("article",{className:SearchPage_module.searchResultItem},/*#__PURE__*/react.createElement("h2",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:document.u+(document.h||""),dangerouslySetInnerHTML:{__html:isContent?(0,highlight/* highlight */.C)(articleTitle,tokens):(0,highlightStemmed/* highlightStemmed */.o)(articleTitle,(0,getStemmedPositions/* getStemmedPositions */.m)(metadata,"t"),tokens,100)}})),pathItems.length>0&&/*#__PURE__*/react.createElement("p",{className:SearchPage_module.searchResultItemPath},pathItems.join(" › ")),isContent&&/*#__PURE__*/react.createElement("p",{className:SearchPage_module.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,highlightStemmed/* highlightStemmed */.o)(document.t,(0,getStemmedPositions/* getStemmedPositions */.m)(metadata,"t"),tokens,100)}}));}
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/index.js
/* harmony default export */ var theme_SearchPage = (SearchPage);

/***/ })

}]);