---
title: Data Types
slug: data_types
---

All event streams in the LAMP API are catalogued by a timestamp and specific "blueprints" (schema) of what kind of data they hold. For example, a sensor event that occurred 20 minutes ago would carry that instant's timestamp, along with a link to what kind of sensor it was, and that sensor's measurement as a payload of data. The kinds of activities and sensors available are declared below, along with the blueprint you can expect their events' data to follow. 

**To learn more about accessing these data types, follow along with either of these tutorials:**
[Preparing to analyze your data in R](../Topics/Preparing_to_analyze_your_data_in_R.md) or [Preparing to analyze your data in Python](../Topics/Preparing_to_analyze_your_data_in_Python.md).

## Activity Types

In the case of activities (active data) completed by the participant or patient, the activity declares two types of blueprints: **static data**, or data that relates to the overall session, and **temporal slices**, data that provides millisecond precision and carries information about each action or intention the participant or patient might have. Furthermore, activities that can be customized will also have **settings** blueprints, but these won't actually appear in the event data (and are omitted from the fields listed below).

[Fields](Data Types/Fields a985fc19122441c4bedf3b9467c9f6b2.csv)

## Sensor Types

Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the **Platform Server** automatically by using the Activity API written in JavaScript. By “beginning” and “ending” a recording of these interactions, as well as “emitting” temporal data during the interaction, an ActivityEvent can be captured and sent to the **Platform Server**. A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository.

[Sensor](Data Types/Sensor 78757c3c00a84323bd4f12d83f659355.csv)

- **lamp.accelerometer.motion:** records processed triaxial motion, triaxial rotation, triaxial gravity, and triaxial magnetic field data.
    1. **tilt**
        1. **roll**: number
        2. **pitch**: number
        3. **yaw**: number
    2. **rotation**
        1. **x**: number
        2. **y**: number
        3. **z**: number
    3. **gravity**
        1. **x**: number
        2. **y**: number
        3. **z**: number
    4. **user_accel**
        1. **x**: number
        2. **y**: number
        3. **z**: number
    5. **magnetic_field**
        1. **x**: number
        2. **y**: number
        3. **z**: number
        4. **calibration**: number
- **lamp.analytics:** records events such as page opens, notification receipt, or login sessions.
    1. **This data type is currently for internal use only.**
    2. **event_name**: string
    3. **event_payload**: any
- **lamp.blood_pressure:** records blood pressure from an external connected monitor.
    1. **value**: number
    2. **units**: string
- **lamp.calls:** records calls after encrypting the phone number.
    1. **phone_number**: string
    2. **duration**: number
    3. **call_type**: string<incoming, outgoing, missed, busy>
- **lamp.distance:** records total distance moved.
    1. **value**: number
    2. **units**: string
- **lamp.bluetooth:** records bluetooth devices within range as well as signal strength.
    1. **device_id**: string
    2. **frequency**: number
    3. **rssi**: number
- **lamp.flights:** records stairs of flights climbed.
    1. **value**: number
    2. **units**: string
- **lamp.height:** records self-reported height.
    1. **value**: number
    2. **units**: string
- **lamp.magnetometer:** records triaxial magnetic field changes.
    1. **x**: number
    2. **y**: number
    3. **z**: number
- **lamp.respiratory_rate: r**ecords respiratory rate from an external connected monitor.
    1. **value**: number
    2. **units**: string
- **lamp.heart_rate:** records heart rate from an external connected monitor.
    1. **value**: number
    2. **units**: string
- **lamp.segment:** records workout segment duration and length.
    1. **value**: number
    2. **units**: string
- **lamp.gyroscope:** records unprocessed triaxial gyroscope data.
    1. **x**: number
    2. **y**: number
    3. **z**: number
- **lamp.sms:** records text messages after encrypting the phone number.
    1. **phone_number**: string
    2. **length**: integer
    3. **sms_type**: string<sent, received>
- **lamp.sleep:** records sleep duration with start and stop times.
    1. **value**: number
    2. **units**: string
- **lamp.weight:** records self-reported weight, or weight from an external connected monitor.
    1. **value**: number
    2. **units**: string
- **lamp.steps:** records number of steps taken since last such event, or the start of the day.
    1. **value**: number
    2. **units**: string
- **lamp.wifi:** records encrypted wireless hotspots as well as signal strength.
    1. **device_id**: string
    2. **frequency**: number
    3. **rssi**: number

### Beta Sensors

- **lamp.gps**
- **lamp.analytics**
- **lamp.device_motion**
- **lamp.steps**
- **lamp.nearby_device**
- **lamp.telephony**
- **lamp.screen_state**
- **lamp.segment**
- **lamp.sleep**
- **lamp.nutrition**
- **lamp.blood_glucose**
- **lamp.blood_pressure**
- **lamp.oxygen_saturation**
- **lamp.body_temperature**
- **lamp.heart_rate**
- **lamp.respiratory_rate**
- **lamp.accelerometer**
- **lamp.activity_recognition**
