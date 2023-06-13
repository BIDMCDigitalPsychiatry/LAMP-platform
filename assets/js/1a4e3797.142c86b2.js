"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[7920],{

/***/ 98374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ theme_SearchPage)
});

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
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__(10412);
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/hooks/useSearchQuery.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const SEARCH_PARAM_QUERY="q";function useSearchQuery(){const history=(0,react_router/* useHistory */.k6)();const location=(0,react_router/* useLocation */.TH)();const{siteConfig:{baseUrl}}=(0,useDocusaurusContext/* default */.Z)();return{searchValue:ExecutionEnvironment["default"].canUseDOM&&new URLSearchParams(location.search).get(SEARCH_PARAM_QUERY)||"",updateSearchPath:searchValue=>{const searchParams=new URLSearchParams(location.search);if(searchValue){searchParams.set(SEARCH_PARAM_QUERY,searchValue);}else{searchParams.delete(SEARCH_PARAM_QUERY);}history.replace({search:searchParams.toString()});},generateSearchPageLink:searchValue=>{// Refer to https://github.com/facebook/docusaurus/pull/2838
return`${baseUrl}search?q=${encodeURIComponent(searchValue)}`;}};}/* harmony default export */ const hooks_useSearchQuery = (useSearchQuery);
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
function simpleTemplate(template,params){return template.replace(/\{\{\s*(\w+)\s*\}\}/g,(raw,keyword)=>{if(Object.prototype.hasOwnProperty.call(params,keyword)){return String(params[keyword]);}return raw;});}
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const SearchPage_module = ({"searchQueryInput":"searchQueryInput_5r-w","searchResultItem":"searchResultItem_18XW","searchResultItemPath":"searchResultItemPath_TjRL","searchResultItemSummary":"searchResultItemSummary_5qSX"});
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/SearchPage.jsx
function SearchPage(){const{siteConfig:{baseUrl}}=(0,useDocusaurusContext/* default */.Z)();const{searchValue,updateSearchPath}=hooks_useSearchQuery();const[searchQuery,setSearchQuery]=(0,react.useState)(searchValue);const[searchSource,setSearchSource]=(0,react.useState)();const[searchResults,setSearchResults]=(0,react.useState)();const pageTitle=(0,react.useMemo)(()=>searchQuery?simpleTemplate(proxiedGenerated/* translations */.Iz.search_results_for,{keyword:searchQuery}):proxiedGenerated/* translations */.Iz.search_the_documentation,[searchQuery]);(0,react.useEffect)(()=>{updateSearchPath(searchQuery);if(searchSource){if(searchQuery){searchSource(searchQuery,results=>{setSearchResults(results);});}else{setSearchResults(undefined);}}// `updateSearchPath` should not be in the deps,
// otherwise will cause call stack overflow.
},[searchQuery,searchSource]);const handleSearchInputChange=(0,react.useCallback)(e=>{setSearchQuery(e.target.value);},[]);(0,react.useEffect)(()=>{if(searchValue&&searchValue!==searchQuery){setSearchQuery(searchValue);}},[searchValue]);(0,react.useEffect)(()=>{async function doFetchIndexes(){const{wrappedIndexes,zhDictionary}=await (0,fetchIndexes/* fetchIndexes */.w)(baseUrl);setSearchSource(()=>(0,SearchSourceFactory/* SearchSourceFactory */.v)(wrappedIndexes,zhDictionary,100));}doFetchIndexes();},[baseUrl]);return/*#__PURE__*/react.createElement(Layout/* default */.Z,{title:pageTitle},/*#__PURE__*/react.createElement(Head/* default */.Z,null,/*#__PURE__*/react.createElement("meta",{property:"robots",content:"noindex, follow"})),/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("h1",null,pageTitle),/*#__PURE__*/react.createElement("input",{type:"search",name:"q",className:SearchPage_module.searchQueryInput,"aria-label":"Search",onChange:handleSearchInputChange,value:searchQuery,autoComplete:"off",autoFocus:true}),!searchSource&&searchQuery&&/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(LoadingRing/* default */.Z,null)),searchResults&&(searchResults.length>0?/*#__PURE__*/react.createElement("p",null,simpleTemplate(searchResults.length===1?proxiedGenerated/* translations */.Iz.count_documents_found:proxiedGenerated/* translations */.Iz.count_documents_found_plural,{count:searchResults.length})): true?/*#__PURE__*/react.createElement("p",null,proxiedGenerated/* translations */.Iz.no_documents_were_found):/*#__PURE__*/0),/*#__PURE__*/react.createElement("section",null,searchResults&&searchResults.map(item=>/*#__PURE__*/react.createElement(SearchResultItem,{key:item.document.i,searchResult:item})))));}function SearchResultItem(_ref){let{searchResult:{document,type,page,tokens,metadata}}=_ref;const isTitle=type===0;const isContent=type===2;const pathItems=(isTitle?document.b:page.b).slice();const articleTitle=isContent?document.s:document.t;if(!isTitle){pathItems.push(page.t);}return/*#__PURE__*/react.createElement("article",{className:SearchPage_module.searchResultItem},/*#__PURE__*/react.createElement("h2",null,/*#__PURE__*/react.createElement(Link/* default */.Z,{to:document.u+(document.h||""),dangerouslySetInnerHTML:{__html:isContent?(0,highlight/* highlight */.C)(articleTitle,tokens):(0,highlightStemmed/* highlightStemmed */.o)(articleTitle,(0,getStemmedPositions/* getStemmedPositions */.m)(metadata,"t"),tokens,100)}})),pathItems.length>0&&/*#__PURE__*/react.createElement("p",{className:SearchPage_module.searchResultItemPath},pathItems.join(" › ")),isContent&&/*#__PURE__*/react.createElement("p",{className:SearchPage_module.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,highlightStemmed/* highlightStemmed */.o)(document.t,(0,getStemmedPositions/* getStemmedPositions */.m)(metadata,"t"),tokens,100)}}));}
;// CONCATENATED MODULE: ./node_modules/@easyops-cn/docusaurus-search-local/dist/client/client/theme/SearchPage/index.js
/* harmony default export */ const theme_SearchPage = (SearchPage);

/***/ })

}]);