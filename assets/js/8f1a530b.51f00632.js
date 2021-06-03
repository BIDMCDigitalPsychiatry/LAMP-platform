(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{202:function(e){e.exports=JSON.parse('{"operationId":"SensorEvent.list","summary":"Query SensorEvents for a Participant.","description":"List SensorEvents produced by a Participant. The deprecated name for this operation is `SensorEvent.all_by_participant`.","tags":["SensorEvent"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"}},{"name":"origin","in":"query","schema":{"type":"string"}},{"name":"from","in":"query","schema":{"type":"integer","description":"The UNIX Epoch date-time representation: number of milliseconds\\nsince 1/1/1970 12:00 AM.","format":"int64"}},{"name":"to","in":"query","schema":{"type":"integer","description":"The UNIX Epoch date-time representation: number of milliseconds\\nsince 1/1/1970 12:00 AM.","format":"int64"}},{"name":"limit","in":"query","schema":{"type":"integer","format":"int64","default":1000,"description":"The maximum number of events to return in the query. Positive\\nvalues like +1000 return latest events first, while negative values like\\n-1000 return earliest events first.","example":"-10"}}],"responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"type":"object","properties":{"data":{"type":"array","items":{"type":"object","description":"An event generated by a participant interacting with the LAMP app.","properties":{"timestamp":{"type":"integer","format":"int64","description":"The UNIX Epoch date-time representation of when this event\\nwas recorded: number of milliseconds since 1/1/1970 12:00 AM."},"sensor":{"type":"string","description":"The type of the sensor event.","example":"lamp.accelerometer"},"data":{"type":"object","additionalProperties":true,"description":"The item information recorded within the sensor event.","example":{"x":0.1234,"y":1.2345,"z":2.3456}}},"required":["timestamp","sensor","data"]}}}}}}},"default":{"description":"Error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"400.bad-request"}}}}}}},"security":[{"Authorization":[]}],"x-code-samples":[{"lang":"js","label":"JavaScript","source":"import LAMP from \'lamp-core\'\\nawait LAMP.connect({ serverAddress: \\"api.lamp.digital\\", accessKey: \\"email@address.com\\", secretKey: \\"password\\" })\\n// function-specific sample code here\\n"},{"lang":"python","label":"Python","source":"import LAMP\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n"},{"lang":"go","label":"R Script","source":"library(LAMP)\\nLAMP.connect(\\"api.lamp.digital\\", \\"email@address.com\\", \\"password\\")\\n"}],"postman":{"name":"Query SensorEvents for a Participant.","description":{"content":"List SensorEvents produced by a Participant. The deprecated name for this operation is `SensorEvent.all_by_participant`.","type":"text/plain"},"url":{"path":["participant",":id","sensor_event"],"host":["{{baseUrl}}"],"query":[{"description":{"content":"","type":"text/plain"},"key":"origin","value":"<string>"},{"description":{"content":"","type":"text/plain"},"key":"from","value":"<long>"},{"description":{"content":"","type":"text/plain"},"key":"to","value":"<long>"},{"description":{"content":"","type":"text/plain"},"key":"limit","value":"1000"}],"variable":[{"description":{"content":"(Required) ","type":"text/plain"},"type":"any","value":"<string>","key":"id"}]},"method":"GET","auth":{"type":"basic","basic":[{"type":"any","value":"<Basic Auth Username>","key":"username"},{"type":"any","value":"<Basic Auth Password>","key":"password"}]}},"method":"get","path":"/participant/{id}/sensor_event","hashId":"query-sensor-events-for-a-participant","servers":[{"url":"https://{server_url}","description":"LAMP Platform API Server","variables":{"server_url":{"default":"api.lamp.digital","description":"A specific API server instance (HTTPS required)."}}}],"permalink":"/api/query-sensor-events-for-a-participant","previous":{"title":"Create a SensorEvent for a Participant.","permalink":"/api/create-a-sensor-event-for-a-participant"},"next":{"title":"List all Credentials for a Researcher, Study, Participant, Activity, or Sensor.","permalink":"/api/list-all-credentials-for-a-researcher-study-participant-activity-or-sensor"}}')}}]);