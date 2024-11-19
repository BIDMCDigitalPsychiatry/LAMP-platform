"use strict";(self.webpackChunklamp_platform=self.webpackChunklamp_platform||[]).push([[2041],{4133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"develop/couchdb-migration","title":"Migrating from CouchDB to MongoDB","description":"Please carefully read and replace the variables in this JS script before continuing:","source":"@site/docs/08-develop/11-couchdb-migration.md","sourceDirName":"08-develop","slug":"/develop/couchdb-migration","permalink":"/develop/couchdb-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/11-couchdb-migration.md","tags":[],"version":"current","lastUpdatedBy":"Juan","lastUpdatedAt":1732048441000,"sidebarPosition":11,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"OAuth2/OIDC Support","permalink":"/develop/oauth_oidc"},"next":{"title":"Training Modules","permalink":"/develop/Training Modules/training-modules"}}');var a=t(74848),i=t(28453);const r={},c="Migrating from CouchDB to MongoDB",s={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"migrating-from-couchdb-to-mongodb",children:"Migrating from CouchDB to MongoDB"})}),"\n",(0,a.jsx)(n.p,{children:"Please carefully read and replace the variables in this JS script before continuing:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="index.js"',children:"#!/usr/bin/env node\nconst es = require('event-stream')\nconst JSONStream = require('JSONStream')\nconst through2batch = require('through2-batch')\n//const nano = require('nano')('http://admin:REDACTED_PASSWORD@10.0.0.1:5984/') // STAGING\nconst nano = require('nano')('http://admin:REDACTED_PASSWORD@10.0.0.2:5984/') // PRODUCTION\nconst { MongoClient } = require('mongodb')\nconst MONGO_URL = 'mongodb://USERNAME_REDACTED:PASSWORD_REDACTED@CLUSTER_NAME_REDACTED.us-east-2.docdb.amazonaws.com:27017/LAMP?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false'\nconst DB_NAME = \"LAMP\"\n\n// MAKE THE REQUIRED COLLECTIONS AND INDEXES FIRST BEFORE LOADING DATA IN! \n/*\nconst REQUIRED_INDEXES = {\n    \"researcher\": [\n        { timestamp: 1 }, \n        { timestamp: 1, _id: 1 }\n    ],\n    \"study\": [\n        { timestamp: 1 }, \n        { timestamp: 1, _id: 1 }, \n        { timestamp: 1, _id: 1, _parent: 1 }\n    ],\n    \"participant\": [\n        { timestamp: 1 }, \n        { _parent: 1, timestamp: 1 }, \n        { _id: 1, _parent: 1, timestamp: 1 }\n    ],\n    \"activity\": [\n        { timestamp: 1 },\n        { timestamp: 1, _parent: 1 },\n        { _id: 1, timestamp: 1 },\n        { timestamp: 1, _id: 1, _parent: 1 },\n    ],\n    \"sensor\": [\n        { timestamp: 1 },\n        { timestamp: 1, _parent: 1 },\n        { _id: 1, timestamp: 1 },\n        { timestamp: 1, _id: 1, _parent: 1 },\n    ],\n    \"activity_event\": [\n        { _parent: -1, activity: -1, timestamp: -1 },\n        { _parent: -1, timestamp: -1 },\n    ],\n    \"tag\": [\n        { _parent: 1, type: 1, key: 1 }\n    ],\n    \"credential\": [\n        { access_key: 1 }, \n        { origin: 1 }, \n        { origin: 1, access_key: 1 }\n    ],\n    \"sensor_event\": [\n        { _parent: -1, sensor: -1, timestamp: -1 },\n        { _parent: -1, timestamp: -1 },\n    ],\n}\nfor (let [collection, indexes] of Object.entries(REQUIRED_INDEXES)) {\n    console.dir([collection, indexes])\n    db.collection(collection).createIndexes(indexes).catch(err => console.dir(err))\n}\n*/\n\n// IGNORE THIS, SEE BELOW INSTEAD\nconst ANALYTICS_IDS = []\nasync function migrateANALYTICS(db, pID) {\n    let count = 0\n\tnano.use('sensor_event')\n\t\t.findAsStream({\n          selector: {\n            \"#parent\": pID,\n            \"sensor\": \"lamp.analytics\",\n          },\n          sort: [{ timestamp: 'desc' }],\n          limit: 100000\n        })\n\t\t.on('error', (e) => console.error('error', e))\n\t\t.pipe(JSONStream.parse('docs.*'))\n        .pipe(es.map((data, callback) => {\n            data._deleted = false\n            data._parent = data['#parent']\n            delete data._rev\n            delete data['#parent']\n            callback(null, data)\n        }))\n        .pipe(through2batch.obj({ batchSize: 100000 }))\n\t\t.pipe(es.map((data, callback) => {\n            count += data.length\n\t\t\tdb.collection('sensor_event')\n                .insertMany(data, { ordered: false, writeConcern: { w: 0 } })\n                .catch(err => err.code === 11000 ? {} : console.dir(err))\n            console.dir([pID, count, Date.now(), process.memoryUsage()])\n            callback(null, null)\n\t\t}))\n        .on('end', () => {\n            console.log(`ANALYTICS complete!`)\n        })\n}\nasync function check(db, collection) {\n    console.log(`${collection} = ${await db.collection(collection).estimatedDocumentCount()} docs`)\n    //console.log(JSON.stringify((await nano.use(collection).list()).rows.map(x => x.id).sort()))\n    //console.log(JSON.stringify((await db.collection(collection).find({}, { _id: 1 }).toArray()).map(x => x._id).sort()))\n}\nasync function fixup(db) {\n    await db.collection('researcher').remove({_id: {$regex: /^_design.*/}})\n    await db.collection('study').remove({_id: {$regex: /^_design.*/}})\n    await db.collection('participant').remove({_id: {$regex: /^_design.*/}})\n    await db.collection('activity').remove({_id: {$regex: /^_design.*/}})\n    await db.collection('sensor').remove({_id: {$regex: /^_design.*/}})\n    await db.collection('activity_spec').remove({_id: {$regex: /^_design.*/}})\n    await db.collection('sensor_spec').remove({_id: {$regex: /^_design.*/}})\n    await db.collection('tag').remove({_id: {$regex: /^_design.*/}})\n    await db.collection('credential').remove({_id: {$regex: /^_design.*/}})\n    \n    // THIS WILL BE INCREDIBLY SLOW SINCE WE DO NOT USE INDEXES FOR THESE:\n    //await db.collection('activity_event').remove({_id: {$regex: /^_design.*/}})\n    //await db.collection('sensor_event').remove({_id: {$regex: /^_design.*/}})\n}\n\n// FIXME: DO NOT USE THIS; THIS IS A BACKUP ONLY!\nasync function _migrate_old_deprecated() {\n    await MongoClient.connect()\n    const db = await MongoClient.db('LAMP_staging').collection('sensor_event')\n    nano.use('sensor_event')\n        .listAsStream({ include_docs: true })\n        .on('error', (e) => console.error('error', e))\n        .pipe(JSONStream.parse('rows.*.doc'))\n        .pipe(es.mapSync(x => {\n            let transformed = [{\n                _deleted: false,\n                _parent: x['#parent'],\n                timestamp: x.timestamp,\n                sensor: x.sensor,\n                data: x.data\n            }]\n            db.insertMany(transformed).catch(err => err.code === 11000 ? {} : console.dir(err))\n        }))\n}\n\nasync function migrate(db, collection, skip, startkey) {\n    console.log(`${collection} start = ${await db.collection(collection).estimatedDocumentCount()}`)\n    let count = skip || 0\n\tnano.use(collection)\n\t\t.listAsStream({ startkey: startkey, include_docs: true })\n\t\t.on('error', (e) => console.error('error', e))\n\t\t.pipe(JSONStream.parse(['rows', /./, 'doc']))\n        .pipe(es.map((data, callback) => {\n            data._deleted = false\n            data._parent = data['#parent']\n            delete data._rev\n            delete data['#parent']\n            if (collection === \"tag\") // HARDCODED FOR TAG ONLY!\n                data.value = JSON.stringify(data.value)\n            callback(null, data)\n        }))\n        .pipe(through2batch.obj({ batchSize: 100000 }))\n\t\t.pipe(es.map((data, callback) => {\n            count += data.length\n\t\t\tdb.collection(collection)\n                .insertMany(data, { ordered: false, writeConcern: { w: 0 }})\n                .catch(err => console.dir(err))\n            console.dir([data.slice(-1)[0]._id, count, Date.now(), process.memoryUsage()])\n            callback(null, null)\n\t\t}))\n        .on('end', async () => {\n            console.log(`${collection} complete = ${await db.collection(collection).estimatedDocumentCount()} docs!`)\n            console.log('PLEASE KEEP THIS TERMINAL SESSION OPEN UNTIL MONGODB HAS LOADED ALL CHANGES!')\n        })\n}\n\nMongoClient.connect(MONGO_URL, { useUnifiedTopology: true }, async (err, client) => {\n    const db = client.db(DB_NAME)\n    \n    // ONLY ONCE TO MAKE PUSH NOTIFICATIONS WORK CORRECTLY\n    //for (let pID of ANALYTICS_IDS)\n    //    await migrateANALYTICS(db, pID)\n    \n    // FIXME: This also copies over CouchDB design documents, _id prefixed with \"_design/\".\n    // USE BELOW LINE TO DELETE THEM FROM A COLLECTION\n    //fixup(db)\n    \n    // CHECKING STATUS ONLY\n    // USE ANOTHER TERMINAL WINDOW TO QUERY PROGRESS WITH A COPY \n    // OF THIS SCRIPT WITH `check(...)` UNCOMMENTED!\n    //check(db, 'tag')\n    \n    // YOU CAN ONLY RUN ONE AT A TIME:\n    //migrate(db, 'researcher')\n    //migrate(db, 'study')\n    //migrate(db, 'participant')\n    //migrate(db, 'activity')\n    //migrate(db, 'sensor')\n    //migrate(db, 'activity_event')\n    //migrate(db, 'tag')\n    //migrate(db, 'credential')\n    //migrate(db, 'activity_spec')\n    //migrate(db, 'sensor_spec')\n    migrate(db, 'sensor_event', undefined, undefined)\n})\n"})}),"\n",(0,a.jsx)(n.p,{children:"You will likely need to adjust Node options to run the script."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export node_options=--max_old_space_size=14000\n# set to around ~80% of max limit (default of 2GB WILL FAIL)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["To automate installation of prerequisite packages, use this ",(0,a.jsx)(n.code,{children:"package.json"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "name": "couch_mongo_importer",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "start": "node index.js"\n  },\n  "dependencies": {\n    "event-stream": "^4.0.1",\n    "JSONStream": "^1.3.5",\n    "mongodb": "^3.6.6",\n    "nano": "^9.0.3",\n    "through2-batch": "^1.1.1"\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(96540);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);