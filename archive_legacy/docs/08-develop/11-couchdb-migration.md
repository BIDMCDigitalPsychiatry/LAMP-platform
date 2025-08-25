# Migrating from CouchDB to MongoDB

Please carefully read and replace the variables in this JS script before continuing:
```js title="index.js"
#!/usr/bin/env node
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
            console.log(`ANALYTICS complete!`)
        })
}
async function check(db, collection) {
    console.log(`${collection} = ${await db.collection(collection).estimatedDocumentCount()} docs`)
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
    console.log(`${collection} start = ${await db.collection(collection).estimatedDocumentCount()}`)
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
            console.log(`${collection} complete = ${await db.collection(collection).estimatedDocumentCount()} docs!`)
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
    // OF THIS SCRIPT WITH `check(...)` UNCOMMENTED!
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
```

You will likely need to adjust Node options to run the script.
```bash
export node_options=--max_old_space_size=14000
# set to around ~80% of max limit (default of 2GB WILL FAIL)
```

To automate installation of prerequisite packages, use this `package.json`:
```json title="package.json"
{
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
```
