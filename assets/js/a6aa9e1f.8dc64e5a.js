"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[4976],{

/***/ 66164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ theme_BlogLayout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(14971);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 24 modules
var Layout = __webpack_require__(45936);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(76016);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"sidebar":"sidebar_q+wC","sidebarItemTitle":"sidebarItemTitle_9G5K","sidebarItemList":"sidebarItemList_6T4b","sidebarItem":"sidebarItem_cjdF","sidebarItemLink":"sidebarItemLink_zyXk","sidebarItemLinkActive":"sidebarItemLinkActive_wcJs"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(84357);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar(_ref){let{sidebar}=_ref;if(sidebar.items.length===0){return null;}return/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.c)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.G)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'})},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.c)(styles_module.sidebarItemTitle,'margin-bottom--md')},sidebar.title),/*#__PURE__*/react.createElement("ul",{className:styles_module.sidebarItemList},sidebar.items.map(item=>/*#__PURE__*/react.createElement("li",{key:item.permalink,className:styles_module.sidebarItem},/*#__PURE__*/react.createElement(Link/* default */.c,{isNavLink:true,to:item.permalink,className:styles_module.sidebarItemLink,activeClassName:styles_module.sidebarItemLinkActive},item.title)))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogLayout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogLayout(props){const{sidebar,toc,children,...layoutProps}=props;const hasSidebar=sidebar&&sidebar.items.length>0;return/*#__PURE__*/react.createElement(Layout/* default */.c,layoutProps,/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:"row"},hasSidebar&&/*#__PURE__*/react.createElement("aside",{className:"col col--3"},/*#__PURE__*/react.createElement(BlogSidebar,{sidebar:sidebar})),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.c)('col',{'col--7':hasSidebar,'col--9 col--offset-1':!hasSidebar}),itemScope:true,itemType:"http://schema.org/Blog"},children),toc&&/*#__PURE__*/react.createElement("div",{className:"col col--2"},toc))));}/* harmony default export */ const theme_BlogLayout = (BlogLayout);

/***/ }),

/***/ 41176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ theme_BlogListPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(28264);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogLayout/index.js + 2 modules
var BlogLayout = __webpack_require__(66164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostItem/index.js + 5 modules
var BlogPostItem = __webpack_require__(65264);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(76016);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(84357);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogListPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){const{metadata}=props;const{previousPage,nextPage}=metadata;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav","aria-label":(0,Translate/* translate */.G)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'})},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item"},previousPage&&/*#__PURE__*/react.createElement(Link/* default */.c,{className:"pagination-nav__link",to:previousPage},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__label"},"\xAB",' ',/*#__PURE__*/react.createElement(Translate/* default */.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),/*#__PURE__*/react.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},nextPage&&/*#__PURE__*/react.createElement(Link/* default */.c,{className:"pagination-nav__link",to:nextPage},/*#__PURE__*/react.createElement("div",{className:"pagination-nav__label"},/*#__PURE__*/react.createElement(Translate/* default */.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),' ',"\xBB"))));}/* harmony default export */ const theme_BlogListPaginator = (BlogListPaginator);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 30 modules
var lib = __webpack_require__(7572);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogListPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPage(props){const{metadata,items,sidebar}=props;const{siteConfig:{title:siteTitle}}=(0,useDocusaurusContext/* default */.c)();const{blogDescription,blogTitle,permalink}=metadata;const isBlogOnlyMode=permalink==='/';const title=isBlogOnlyMode?siteTitle:blogTitle;return/*#__PURE__*/react.createElement(BlogLayout/* default */.c,{title:title,description:blogDescription,wrapperClassName:lib/* ThemeClassNames */.Wu.wrapper.blogPages,pageClassName:lib/* ThemeClassNames */.Wu.page.blogListPage,searchMetadata:{// assign unique search tag to exclude this page from search results!
tag:'blog_posts_list'},sidebar:sidebar},items.map(_ref=>{let{content:BlogPostContent}=_ref;return/*#__PURE__*/react.createElement(BlogPostItem/* default */.c,{key:BlogPostContent.metadata.permalink,frontMatter:BlogPostContent.frontMatter,assets:BlogPostContent.assets,metadata:BlogPostContent.metadata,truncated:BlogPostContent.metadata.truncated},/*#__PURE__*/react.createElement(BlogPostContent,null));}),/*#__PURE__*/react.createElement(theme_BlogListPaginator,{metadata:metadata}));}/* harmony default export */ const theme_BlogListPage = (BlogListPage);

/***/ }),

/***/ 65264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ theme_BlogPostItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(14971);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(95788);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(84357);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(76016);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(70964);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 30 modules
var lib = __webpack_require__(7572);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js + 7 modules
var MDXComponents = __webpack_require__(29464);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js + 2 modules
var EditThisPage = __webpack_require__(16060);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"blogPostTitle":"blogPostTitle_d4p0","blogPostData":"blogPostData_-Im+","blogPostDetailsFull":"blogPostDetailsFull_xD8n"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js + 3 modules
var TagsListInline = __webpack_require__(49376);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthor/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const BlogPostAuthor_styles_module = ({"image":"image_9q7L"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthor/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogPostAuthor(_ref){let{author}=_ref;const{name,title,url,imageURL}=author;return/*#__PURE__*/react.createElement("div",{className:"avatar margin-bottom--sm"},imageURL&&/*#__PURE__*/react.createElement(Link/* default */.c,{className:"avatar__photo-link avatar__photo",href:url},/*#__PURE__*/react.createElement("img",{className:BlogPostAuthor_styles_module.image,src:imageURL,alt:name})),// Note: only legacy author frontmatter allow empty name (not frontMatter.authors)
name&&/*#__PURE__*/react.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:true,itemType:"https://schema.org/Person"},/*#__PURE__*/react.createElement("div",{className:"avatar__name"},/*#__PURE__*/react.createElement(Link/* default */.c,{href:url,itemProp:"url"},/*#__PURE__*/react.createElement("span",{itemProp:"name"},name))),title&&/*#__PURE__*/react.createElement("small",{className:"avatar__subtitle",itemProp:"description"},title)));}/* harmony default export */ const theme_BlogPostAuthor = (BlogPostAuthor);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const BlogPostAuthors_styles_module = ({"authorCol":"authorCol_8c0z"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostAuthors(_ref){let{authors,assets}=_ref;const authorsCount=authors.length;if(authorsCount===0){return null;}return/*#__PURE__*/react.createElement("div",{className:"row margin-top--md margin-bottom--sm"},authors.map((author,idx)=>/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.c)('col col--6',BlogPostAuthors_styles_module.authorCol),key:idx},/*#__PURE__*/react.createElement(theme_BlogPostAuthor,{author:{...author,// Handle author images using relative paths
imageURL:assets.authorsImageUrls[idx]??author.imageURL}}))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){const{selectMessage}=(0,lib/* usePluralForm */.Aj)();return readingTimeFloat=>{const readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.G)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime}));};}function BlogPostItem(props){const readingTimePlural=useReadingTimePlural();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.E)();const{children,frontMatter,assets,metadata,truncated,isBlogPostPage=false}=props;const{date,formattedDate,permalink,tags,readingTime,title,editUrl,authors}=metadata;const image=assets.image??frontMatter.image;const truncatedPost=!isBlogPostPage&&truncated;const tagsExists=tags.length>0;const renderPostHeader=()=>{const TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement(TitleHeading,{className:styles_module.blogPostTitle,itemProp:"headline"},isBlogPostPage?title:/*#__PURE__*/react.createElement(Link/* default */.c,{itemProp:"url",to:permalink},title)),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.c)(styles_module.blogPostData,'margin-vert--md')},/*#__PURE__*/react.createElement("time",{dateTime:date,itemProp:"datePublished"},formattedDate),typeof readingTime!=='undefined'&&/*#__PURE__*/react.createElement(react.Fragment,null,' · ',readingTimePlural(readingTime))),/*#__PURE__*/react.createElement(BlogPostAuthors,{authors:authors,assets:assets}));};return/*#__PURE__*/react.createElement("article",{className:!isBlogPostPage?'margin-bottom--xl':undefined,itemProp:"blogPost",itemScope:true,itemType:"http://schema.org/BlogPosting"},renderPostHeader(),image&&/*#__PURE__*/react.createElement("meta",{itemProp:"image",content:withBaseUrl(image,{absolute:true})}),/*#__PURE__*/react.createElement("div",{className:"markdown",itemProp:"articleBody"},/*#__PURE__*/react.createElement(esm/* MDXProvider */.Iu,{components:MDXComponents/* default */.c},children)),(tagsExists||truncated)&&/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.c)('row docusaurus-mt-lg',{[styles_module.blogPostDetailsFull]:isBlogPostPage})},tagsExists&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.c)('col',{'col--9':truncatedPost})},/*#__PURE__*/react.createElement(TagsListInline/* default */.c,{tags:tags})),isBlogPostPage&&editUrl&&/*#__PURE__*/react.createElement("div",{className:"col margin-top--sm"},/*#__PURE__*/react.createElement(EditThisPage/* default */.c,{editUrl:editUrl})),truncatedPost&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.c)('col text--right',{'col--3':tagsExists})},/*#__PURE__*/react.createElement(Link/* default */.c,{to:metadata.permalink,"aria-label":`Read more about ${title}`},/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))));}/* harmony default export */ const theme_BlogPostItem = (BlogPostItem);

/***/ }),

/***/ 16060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ EditThisPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(84357);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(45072);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(14971);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"iconEdit":"iconEdit_mS5F"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconEdit(_ref){let{className,...restProps}=_ref;return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.c)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.c)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));}/* harmony default export */ const theme_IconEdit = (IconEdit);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 30 modules
var lib = __webpack_require__(7572);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){let{editUrl}=_ref;return/*#__PURE__*/react.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener",className:lib/* ThemeClassNames */.Wu.common.editThisPage},/*#__PURE__*/react.createElement(theme_IconEdit,null),/*#__PURE__*/react.createElement(Translate/* default */.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}

/***/ }),

/***/ 49376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(11504);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(14971);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(84357);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(76016);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_WK-t","tagRegular":"tagRegular_LXbV","tagWithCount":"tagWithCount_S5Zl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(props){const{permalink,name,count}=props;return/*#__PURE__*/react.createElement(Link/* default */.c,{href:permalink,className:(0,clsx_m/* default */.c)(styles_module.tag,{[styles_module.tagRegular]:!count,[styles_module.tagWithCount]:count})},name,count&&/*#__PURE__*/react.createElement("span",null,count));}/* harmony default export */ const theme_Tag = (Tag);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TagsListInline_styles_module = ({"tags":"tags_NBRY","tag":"tag_F03v"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){let{tags}=_ref;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.c)(TagsListInline_styles_module.tags,'padding--none','margin-left--sm')},tags.map(_ref2=>{let{label,permalink:tagPermalink}=_ref2;return/*#__PURE__*/react.createElement("li",{key:tagPermalink,className:TagsListInline_styles_module.tag},/*#__PURE__*/react.createElement(theme_Tag,{name:label,permalink:tagPermalink}));})));}

/***/ })

}]);