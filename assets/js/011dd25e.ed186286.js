"use strict";
(self["webpackChunkLAMP_documentation"] = self["webpackChunkLAMP_documentation"] || []).push([[2041],{

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

/***/ 23545:
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
const frontMatter={};const contentTitle='Migrating from CouchDB to MongoDB';const metadata={"unversionedId":"develop/couchdb-migration","id":"develop/couchdb-migration","title":"Migrating from CouchDB to MongoDB","description":"Please carefully read and replace the variables in this JS script before continuing:","source":"@site/docs/08-develop/11-couchdb-migration.md","sourceDirName":"08-develop","slug":"/develop/couchdb-migration","permalink":"/develop/couchdb-migration","editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/11-couchdb-migration.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1716491656,"formattedLastUpdatedAt":"5/23/2024","sidebarPosition":11,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"OAuth2/OIDC Support","permalink":"/develop/oauth_oidc"},"next":{"title":"Training Modules","permalink":"/develop/Training Modules/training-modules"}};/* @jsxRuntime classic */ /* @jsx mdx */const toc=[];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_LAMP_platform_LAMP_platform_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"migrating-from-couchdb-to-mongodb"},`Migrating from CouchDB to MongoDB`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Please carefully read and replace the variables in this JS script before continuing:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-js","metastring":"title=\"index.js\"","title":"\"index.js\""},`#!/usr/bin/env node
const es = require('event-stream')
const JSONStream = require('JSONStream')
const through2batch = require('through2-batch')
//const nano = require('nano')('http://admin:REDACTED_PASSWORD@10.0.0.1:5984/') // STAGING
const nano = require('nano')('http://admin:REDACTED_PASSWORD@10.0.0.2:5984/') // PRODUCTION
const { MongoClient } = require('mongodb')
const MONGO_URL = 'mongodb://USERNAME_REDACTED:PASSWORD_REDACTED@CLUSTER_NAME_REDACTED.us-east-2.docdb.amazonaws.com:27017/LAMP?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false'
const DB_NAME = "LAMP"

// MAKE THE REQUIRED COLLECTIONS AND INDEXES FIRST BEFORE LOADING DATA IN! 
/*
const REQUIRED_INDEXES = {
    "researcher": [
        { timestamp: 1 }, 
        { timestamp: 1, _id: 1 }
    ],
    "study": [
        { timestamp: 1 }, 
        { timestamp: 1, _id: 1 }, 
        { timestamp: 1, _id: 1, _parent: 1 }
    ],
    "participant": [
        { timestamp: 1 }, 
        { _parent: 1, timestamp: 1 }, 
        { _id: 1, _parent: 1, timestamp: 1 }
    ],
    "activity": [
        { timestamp: 1 },
        { timestamp: 1, _parent: 1 },
        { _id: 1, timestamp: 1 },
        { timestamp: 1, _id: 1, _parent: 1 },
    ],
    "sensor": [
        { timestamp: 1 },
        { timestamp: 1, _parent: 1 },
        { _id: 1, timestamp: 1 },
        { timestamp: 1, _id: 1, _parent: 1 },
    ],
    "activity_event": [
        { _parent: -1, activity: -1, timestamp: -1 },
        { _parent: -1, timestamp: -1 },
    ],
    "tag": [
        { _parent: 1, type: 1, key: 1 }
    ],
    "credential": [
        { access_key: 1 }, 
        { origin: 1 }, 
        { origin: 1, access_key: 1 }
    ],
    "sensor_event": [
        { _parent: -1, sensor: -1, timestamp: -1 },
        { _parent: -1, timestamp: -1 },
    ],
}
for (let [collection, indexes] of Object.entries(REQUIRED_INDEXES)) {
    console.dir([collection, indexes])
    db.collection(collection).createIndexes(indexes).catch(err => console.dir(err))
}
*/

// IGNORE THIS, SEE BELOW INSTEAD
const ANALYTICS_IDS = []
async function migrateANALYTICS(db, pID) {
    let count = 0
    nano.use('sensor_event')
        .findAsStream({
          selector: {
            "#parent": pID,
            "sensor": "lamp.analytics",
          },
          sort: [{ timestamp: 'desc' }],
          limit: 100000
        })
        .on('error', (e) => console.error('error', e))
        .pipe(JSONStream.parse('docs.*'))
        .pipe(es.map((data, callback) => {
            data._deleted = false
            data._parent = data['#parent']
            delete data._rev
            delete data['#parent']
            callback(null, data)
        }))
        .pipe(through2batch.obj({ batchSize: 100000 }))
        .pipe(es.map((data, callback) => {
            count += data.length
            db.collection('sensor_event')
                .insertMany(data, { ordered: false, writeConcern: { w: 0 } })
                .catch(err => err.code === 11000 ? {} : console.dir(err))
            console.dir([pID, count, Date.now(), process.memoryUsage()])
            callback(null, null)
        }))
        .on('end', () => {
            console.log(\`ANALYTICS complete!\`)
        })
}
async function check(db, collection) {
    console.log(\`\${collection} = \${await db.collection(collection).estimatedDocumentCount()} docs\`)
    //console.log(JSON.stringify((await nano.use(collection).list()).rows.map(x => x.id).sort()))
    //console.log(JSON.stringify((await db.collection(collection).find({}, { _id: 1 }).toArray()).map(x => x._id).sort()))
}
async function fixup(db) {
    await db.collection('researcher').remove({_id: {$regex: /^_design.*/}})
    await db.collection('study').remove({_id: {$regex: /^_design.*/}})
    await db.collection('participant').remove({_id: {$regex: /^_design.*/}})
    await db.collection('activity').remove({_id: {$regex: /^_design.*/}})
    await db.collection('sensor').remove({_id: {$regex: /^_design.*/}})
    await db.collection('activity_spec').remove({_id: {$regex: /^_design.*/}})
    await db.collection('sensor_spec').remove({_id: {$regex: /^_design.*/}})
    await db.collection('tag').remove({_id: {$regex: /^_design.*/}})
    await db.collection('credential').remove({_id: {$regex: /^_design.*/}})
    
    // THIS WILL BE INCREDIBLY SLOW SINCE WE DO NOT USE INDEXES FOR THESE:
    //await db.collection('activity_event').remove({_id: {$regex: /^_design.*/}})
    //await db.collection('sensor_event').remove({_id: {$regex: /^_design.*/}})
}

// FIXME: DO NOT USE THIS; THIS IS A BACKUP ONLY!
async function _migrate_old_deprecated() {
    await MongoClient.connect()
    const db = await MongoClient.db('LAMP_staging').collection('sensor_event')
    nano.use('sensor_event')
        .listAsStream({ include_docs: true })
        .on('error', (e) => console.error('error', e))
        .pipe(JSONStream.parse('rows.*.doc'))
        .pipe(es.mapSync(x => {
            let transformed = [{
                _deleted: false,
                _parent: x['#parent'],
                timestamp: x.timestamp,
                sensor: x.sensor,
                data: x.data
            }]
            db.insertMany(transformed).catch(err => err.code === 11000 ? {} : console.dir(err))
        }))
}

async function migrate(db, collection, skip, startkey) {
    console.log(\`\${collection} start = \${await db.collection(collection).estimatedDocumentCount()}\`)
    let count = skip || 0
    nano.use(collection)
        .listAsStream({ startkey: startkey, include_docs: true })
        .on('error', (e) => console.error('error', e))
        .pipe(JSONStream.parse(['rows', /./, 'doc']))
        .pipe(es.map((data, callback) => {
            data._deleted = false
            data._parent = data['#parent']
            delete data._rev
            delete data['#parent']
            if (collection === "tag") // HARDCODED FOR TAG ONLY!
                data.value = JSON.stringify(data.value)
            callback(null, data)
        }))
        .pipe(through2batch.obj({ batchSize: 100000 }))
        .pipe(es.map((data, callback) => {
            count += data.length
            db.collection(collection)
                .insertMany(data, { ordered: false, writeConcern: { w: 0 }})
                .catch(err => console.dir(err))
            console.dir([data.slice(-1)[0]._id, count, Date.now(), process.memoryUsage()])
            callback(null, null)
        }))
        .on('end', async () => {
            console.log(\`\${collection} complete = \${await db.collection(collection).estimatedDocumentCount()} docs!\`)
            console.log('PLEASE KEEP THIS TERMINAL SESSION OPEN UNTIL MONGODB HAS LOADED ALL CHANGES!')
        })
}

MongoClient.connect(MONGO_URL, { useUnifiedTopology: true }, async (err, client) => {
    const db = client.db(DB_NAME)
    
    // ONLY ONCE TO MAKE PUSH NOTIFICATIONS WORK CORRECTLY
    //for (let pID of ANALYTICS_IDS)
    //    await migrateANALYTICS(db, pID)
    
    // FIXME: This also copies over CouchDB design documents, _id prefixed with "_design/".
    // USE BELOW LINE TO DELETE THEM FROM A COLLECTION
    //fixup(db)
    
    // CHECKING STATUS ONLY
    // USE ANOTHER TERMINAL WINDOW TO QUERY PROGRESS WITH A COPY 
    // OF THIS SCRIPT WITH \`check(...)\` UNCOMMENTED!
    //check(db, 'tag')
    
    // YOU CAN ONLY RUN ONE AT A TIME:
    //migrate(db, 'researcher')
    //migrate(db, 'study')
    //migrate(db, 'participant')
    //migrate(db, 'activity')
    //migrate(db, 'sensor')
    //migrate(db, 'activity_event')
    //migrate(db, 'tag')
    //migrate(db, 'credential')
    //migrate(db, 'activity_spec')
    //migrate(db, 'sensor_spec')
    migrate(db, 'sensor_event', undefined, undefined)
})
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`You will likely need to adjust Node options to run the script.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-bash"},`export node_options=--max_old_space_size=14000
# set to around ~80% of max limit (default of 2GB WILL FAIL)
`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`To automate installation of prerequisite packages, use this `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode",{parentName:"p"},`package.json`),`:`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code",{parentName:"pre","className":"language-json","metastring":"title=\"package.json\"","title":"\"package.json\""},`{
  "name": "couch_mongo_importer",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "event-stream": "^4.0.1",
    "JSONStream": "^1.3.5",
    "mongodb": "^3.6.6",
    "nano": "^9.0.3",
    "through2-batch": "^1.1.1"
  }
}
`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);