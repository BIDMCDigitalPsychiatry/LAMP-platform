# Data Types

All event streams in the LAMP API are catalogued by a timestamp and specific "blueprints" (schema) of what kind of data they hold. For example, a sensor event that occurred 20 minutes ago would carry that instant's timestamp, along with a link to what kind of sensor it was, and that sensor's measurement as a payload of data. The kinds of activities and sensors available are declared below, along with the blueprint you can expect their events' data to follow. 

## Activity Types

In the case of activities (active data) completed by the participant or patient, the activity declares two types of blueprints: **static data**, or data that relates to the overall session, and **temporal slices**, data that provides millisecond precision and carries information about each action or intention the participant or patient might have. Furthermore, activities that can be customized will also have **settings** blueprints, but these won't actually appear in the event data (and are omitted from the fields listed below).

### Survey

ActivitySpec: `lamp.survey`

#### Description

Customizable surveys.

#### Settings

#### Data 

- `static_data`: Unused.
- `temporal_slices`:
    - `item`: (string) The question text (or index).
    - `value`: (string) The selected question option text (or index).
    - `type`: Unused.
    - `duration`: The time taken to answer a question in the survey.
    - `level`: Unused.

#### Example

```json
```

### N-Back

ActivitySpec: `lamp.nback` & `lamp.nback_new`

#### Description

The NBack test.

#### Settings

#### Data 

- `static_data`:
    - `score`: The computed score for the completed session.
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.
    - `total_questions`: The total number of questions encountered during the session.	
    - `version`: The version of the test played.  
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Spatial Span

ActivitySpec: `lamp.spatial_span`

#### Description

The Spatial Span test, with Forward and Backward variants.

#### Settings

#### Data 

- `static_data`:
    - `rating`: The associated rating of the completed session.	
    - `score`: The computed score for the completed session.	
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.	
    - `type`: The integer indicating forward or backward variant.
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Simple Memory

ActivitySpec: `lamp.simple_memory`

#### Description

The Simple Memory test.

#### Settings

#### Data 

- `static_data`:
    - `score`: The computed score for the completed session. 
    - `correct_answers`: The total number of correct answers made in the session.
    - `wrong_answers`: The total number of incorrect answers made in the session.
    - `total_questions`: The total number of questions encountered during the session.
    - `version`: The version of the test played.
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Serial 7s

ActivitySpec: `lamp.serial_7s`

#### Description

The Serial 7s test.

#### Settings

#### Data 

- `static_data`: Unused.
    - `rating`: The associated rating of the completed session.	
    - `score`: The computed score for the completed session.	
    - `total_attempts`: The total number of attempts made during the session.	
    - `total_questions`: The total number of questions encountered during the session.	
    - `version`: The version of the test played.  
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Cats & Dogs

ActivitySpec: `lamp.cats_and_dogs` & `lamp.cats_and_dogs_new`

#### Description

The Cats and Dogs game.

#### Settings

#### Data 

- `static_data`:
    - `point`: The associated point value with the completed session.	
    - `rating`:	The associated rating of the completed session.	
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.	
    - `total_questions`: The total number of questions encountered during the session.    
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### 3D Figure Copy

ActivitySpec: `lamp.3d_figure_copy`

#### Description

The 3D Figure drawing game.

#### Settings

#### Data 

- `static_data`: 
    - `point`: The associated point value with the completed session.	
    - `drawn_file_name`: The link to the file containing the drawn image.	
    - `game_name`: The unique game name for the drawing session.
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Visual Association

ActivitySpec: `lamp.visual_association`

#### Description

The Visual Association test.

#### Settings

#### Data 

- `static_data`:
    - `rating`: The associated rating of the completed session.	
    - `score`: The computed score for the completed session.	
    - `total_attempts`:	The total number of attempts made during the session.	
    - `total_questions`: The total number of questions encountered during the session.	
    - `version`: The version of the test played.
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Digit Span

ActivitySpec: `lamp.digit_span`

#### Description

The Digit Span test, with Forward and Backward variants.

#### Settings

#### Data 

- `static_data`: 
    - `rating`: The associated rating of the completed session.	
    - `score`: The computed score for the completed session.	
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.	
    - `type`: The integer indicating forward or backward variant.
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Temporal Order

ActivitySpec: `lamp.temporal_order`

#### Description

The Temporal Order test.

#### Settings

#### Data 

- `static_data`:
    - `rating`: The associated rating of the completed session.	
    - `score`: The computed score for the completed session.	
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.	
    - `version`: The version of the test played.  
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Trails B

ActivitySpec: `lamp.trails_b` & `lamp.trails_b_new` & `lamp.trails_b_dot_touch`

#### Description

The new dot-touch variant of the Trails B test.

#### Settings

#### Data 

- `static_data`: 
    -  `point`: The associated point value with the completed session.	
    -  `rating`: The associated rating of the completed session.
    -  `score`: The computed score for the completed session.	
    -  `total_attempts`: The total number of attempts made during the session.		
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Jewels

ActivitySpec: `lamp.jewels_a` & `lamp.jewels_b`

#### Description

The Jewels game, with variants A & B.

#### Settings

#### Data 

- `static_data`: 
    - `point`: (number) The associated point value with the completed session. 
    - `rating`: (number) The associated rating of the completed session.
    - `score`: (number) The computed score for the completed session.
    - `total_attempts`: (number) The total number of attempts made during the session.
- `temporal_slices`:
    - `item`: (number) Unused.
    - `value`: (string) The alphanumeric index of the item tapped.
    - `type`: (string) Whether the correct item was tapped or not ("correct" or "none").
    - `duration`: (number) Unused.
    - `level`: (number) Unused.

#### Example

```json
```

## Sensor Types

Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the **Platform Server** automatically by using the Activity API written in JavaScript. By “beginning” and “ending” a recording of these interactions, as well as “emitting” temporal data during the interaction, an ActivityEvent can be captured and sent to the **Platform Server**. A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository.

| Name           | SensorSpec                | 
|----------------|---------------------------| 
| Analytics      | lamp.analytics            | 
| Location       | lamp.gps                  | 
| Device Motion  | lamp.device_motion        | 
|                | lamp.accelerometer        | 
| Pedometer      | lamp.steps                | 
| Sleep          | lamp.sleep                | 
| Nutrition      | lamp.nutrition            | 
| Workouts       | lamp.segment              | 
| Screen         | lamp.screen_state         | 
| Bluetooth & WiFi | lamp.nearby_device      | 
| Calls & Texts  | lamp.telephony            | 
| Blood Pressure | lamp.blood_pressure       | 
| Blood Glucose  | lamp.blood_glucose        | 
| Oxygen Saturation | lamp.oxygen_saturation | 
| Body Temperature | lamp.body_temperature   | 
| Heart Rate & HRV | lamp.heart_rate         | 
| Respiratory Rate | lamp.respiratory_rate   | 
| Activity Recognition | lamp.activity_recognition | 

### Accelerometer

SensorSpec: lamp.accelerometer

#### Description

The triaxial accelerometer measures acceleration applied to the device. Each measurement is measured in Gs and is taken relative to the coordinate plane of the device, screen facing upwards. For example, a device resting face-up on a flat surface will report a measurement with the coordinate values `<0, 0, 1>`.

#### Settings

- `frequency: number`: (units: Hz) the required accelerometer measurement frequency; the sensor will make a best effort to match the requested `frequency` but no guarantees are made by the device hardware or operating system.

#### Data

- `x: number`: (units: G) the X-axis coordinate.
- `y: number`: (units: G) the Y-axis coordinate.
- `z: number`: (units: G) the Z-axis coordinate.
- `accuracy: number`:  (units: None) the data accuracy level, or `null` if unavailable.
    - `-1`: invalid; the sensor is reporting data but is not connected to its environment.
    - `0`: none; the sensor is reporting data that is not calibrated and cannot be trusted.
    - `1`: low; the sensor is reporting data at poor accuracy, and environmental calibration is required.
    - `2`: medium; the sensor is reporting data at an average accuracy, and environmental calibration of the device may improve data.
    - `3`: high; the sensor is reporting data at maximal accuracy and is correctly calibrated.

#### Example

```markdown
# **LAMP.SensorEvent.all_by_participant("U1234567890", "lamp.accelerometer")**
{
  "timestamp": 1234567890,
  "sensor": "lamp.accelerometer",
  "data": {
    "x": 0.19378492,
    "y": 1.28473749,
    "z": -0.19384932,
    "accuracy": 2
  }
}
```

### Blood Pressure

SensorSpec: lamp.blood_pressure

Blood pressure is 

- **lamp.blood_pressure:** records blood pressure from an external connected monitor.
    1. **value**: number
    2. **units**: string

### Bluetooth

Cortex: cortex.raw.bluetooth

#### Description

The bluetooth sensor logs information about the device's Bluetooth sensor and about surrounding Bluetooth devices that are enabled and/or visible. The device scan for surrounding Bluetooth devices at a set frequency (default is 60 seconds). If multiple devices are detected in a single scan, they are all assigned the same timestamp.

#### Data

- `timestamp: number`:  UTC timestamp of the Bluetooth event
- `bt_address: string`: Address of Bluetooth event 
- `bt_rssi: number`: (units: DB) WiFI signal strength
    > RSSI is a term used to measure the relative quality of a received signal to a client device, but has no absolute value. […] Cisco, for example, uses a 0-100 scale, while Atheros uses 0-60. It’s all up to the manufacturer (which is why RSSI is a relative index), but you can infer that the higher the RSSI value is, the better the signal is. […] There’s a lot of math we could get into, but basically, the closer to 0 dBm, the better the signal is. [-- Source](https://www.metageek.com/training/resources/understanding-rssi.html)


![](assets/rssi.png)

```
 {'timestamp': 1616172913842,
   'sensor': 'lamp.bluetooth',
   'data': {'bt_rssi': -88,
    'bt_address': 'CCF087D3-A0FC-0FDF-D7F9-1285211653FB'}},
  {'timestamp': 1616172858929,
   'sensor': 'lamp.bluetooth',
   'data': {'bt_rssi': -91,
    'bt_address': 'CCF087D3-A0FC-0FDF-D7F9-1285211653FB'}},
  {'timestamp': 1616170339651,
   'sensor': 'lamp.bluetooth',
   'data': {'bt_rssi': -98,
    'bt_address': 'CCF087D3-A0FC-0FDF-D7F9-1285211653FB'}},
  {'timestamp': 1616022127303,
   'sensor': 'lamp.bluetooth',
   'data': {'bt_rssi': -94,
    'bt_address': 'CCF087D3-A0FC-0FDF-D7F9-1285211653FB'}},
  {'timestamp': 1616022112113,
   'sensor': 'lamp.bluetooth',
   'data': {'bt_rssi': -95,
    'bt_address': 'CCF087D3-A0FC-0FDF-D7F9-1285211653FB'}}
```

#### Example

(Sample code to generate a plot of number of unique addresses encountered per day per patient.)

```python
import cortex
import altair as alt 

# Generate an Altair chart with Cortex data source:
alt.Chart(

    # Obtain patient U123's bluetooth data.
    cortex.run("U123", ["bluetooth"])

        # Resample (aggregate/group-by) the data per-day.
        .resample('D')

        # Count the number of unique entries (address) encountered per day.
        .nunique()

        # Revert the df index to a column for Altair to access it.
        .reset_index())

# Encode "timestamp vs. address (unique count)" as a line plot.
.mark_line().encode(x='timestamp', y='address')
```
![](assets/bt_plot.png)

### Calls

SensorSpec: lamp.calls

#### Description

The calls sensor measures information on phone calls made and received by the user. Each event is a single phone call, with information on its type (incoming, outgoing, missed, etc), duration, and trace (the other device which the user connected with during the call). 

Call type options differ between Android and iOS devices.

#### Data

- `call_trace: string`: the SHA-1-encrypted source/target of the call. A device will have a consistent trace.
- `call_type: number`: integer label for the call type
    - Android
        - `1`: incoming; the call was received by the user
        - `2`: outgoing; the call was made by the user
        - `3`: missed; the call was meant to be received by the user, but missed it
        - `4`: busy; the user's phone was busy
- `call_duration`: (units: seconds) the length of the call session

### Distance

SensorSpec: lamp.distance

### Gyroscope

SensorSpec: lamp.gyroscope

#### Description

The gyroscope sensors measures the rate of rotation around each of a device's x, y and z axes. Rotation values are in radians/second. Positive values indicate counter-clockwise rotation; negative values indicate clockwise rotation. These are raw values—i.e. they do not correct for nosie or drift.

#### Settings

#### Data

- `x: number` (units: rad/s) the rotational velocity around the x-axis. The x-axis goes from left to right, across the device's screen face
- `y: number` (units: rad/s) the rotational velocity around the y-axis. The y-axis is vertical and points up
- `z: number` (units: rad/s) the rotational velocity around the z-axis. The z-axis is horizontal and points out from the front screen (towards the user looking at the screen)

#### Example

```markdown
# **LAMP.SensorEvent.all_by_participant("U1234567890", "lamp.accelerometer")**
{
  "timestamp": 1234567890,
  "sensor": "lamp.accelerometer",
  "data": {
    "x": 0.19378492,
    "y": 1.28473749,
    "z": -0.19384932,
    "accuracy": 2
  }
}
```

### Location

SensorSpec: lamp.gps

#### Description

The location sensor records the device's current GPS coordinates. Depending on the device operating system and device battery level, the source of the data from this sensor may alternate between GPS antennae (high accuracy), cellular tower triangulation (moderate accuracy), WiFi triangulation (poor accuracy), or a combination of these. 

#### Settings

- `frequency: number`: (units: Hz) the required location measurement frequency; the sensor will make a best effort to match the requested `frequency` but no guarantees are made by the device hardware or operating system.

#### Data

- `latitude: number`: (units: degrees) the coordinate's latitude.
- `longitude: number`: (units: degrees) the coordinate's longitude.
- `altitude: number`: (units: meters) the coordinate's altitude, relative to sea level.
- `accuracy: number`:  (units: meters) the coordinate's estimated accuracy representing the radius of a circle formed around the reported latitude/longitude pair, [for which there is **AT LEAST** a 68% probability that the true coordinate is contained within.](https://en.wikipedia.org/wiki/Circular_error_probable)
    - `0.0`: no accuracy could be determined.

*Unsupported event properties:* `bearing` *and* `speed`*.*

#### Example

```markdown
# **LAMP.SensorEvent.all_by_participant("U1234567890", "lamp.gps")**
{
  "timestamp": 1234567890,
  "sensor": "lamp.gps",
  "data": {
    "latitude": 80.4827,
    "longitude": 46.28344,
    "altitude": 12.12455,
    "accuracy": 48
  }
}
```

### Motion

SensorSpec: lamp.accelerometer.motion

#### Description

The motion sensor gathers information on the device's physical movement. It includes metrics on device tilt, rotation, experienced gravity, acceleration, and magnetic field. The acceleration measure here differs from `lamp.accelerometer` in that this measure does not correct for gravity.

#### Data

- `tilt: object`
    - 
- `rotation: object`
    - `x: number`: the rotation vector component around the x-axis, which points tangentially along the ground, to the East: `x * sin(theta/2)`
    - `y: number`: the rotation vector component around the y-axis, which points tangent along the ground, to the North: `y * sin(theta/2)`
    - `z: number`: the rotation vector component around the z-axis, which points towards the sky, perpendicular to the ground: `z * sin(theta/2)`

- `gravity: object`
    - `x: number`: the force of gravity along the device's x-axis, where the x-axis runs from left to right, across the front screen
    - `y: number`: the force of gravity along the device's y-axis, where the y-axis runs vertically from the bottom to the top of the device's screen
    - `z: number`: the force of gravity along the device's z-axis, where the z-axis runs towards the outside of the device's screen (toward the user)
- `user_accel: object`:
    - `x: number`: the device's acceleration along its x-axis, where the x-axis runs from left to right, across the front screen
    - `y: number`: the device's acceleration along its y-axis, where the y-axis runs vertically from the bottom to the top of the device's screen
    - `z: number`: the device's acceleration along its z-axis, where the z-axis runs towards the outside of the device's screen (toward the user)
- `magnetic_field: object`:
    - `x: number` : (units: micro T) the geomagnetic field strength along the device's x-axis, where the x-axis runs from left to right, across the front screen
    - `y: number`: (units: micro T) the geomagnetic field strength along the device's y-axis, where the y-axis runs vertically from the bottom to the top of the device's screen
    - `z: number`: (units: micro T) the geomagnetic field strength along the device's z-axis, where the z-axis runs towards the outside of the device's screen (toward the user)
    - `calibration_accuracy: number` : the sensor's accuracy level. One of:
        - `-1`: invalid; the sensor is reporting data but is not connected to its environment.
        - `0`: none; the sensor is reporting data that is not calibrated and cannot be trusted.
        - `1`: low; the sensor is reporting data at poor accuracy, and environmental calibration is required.
        - `2`: medium; the sensor is reporting data at an average accuracy, and environmental calibration of the device may improve data.
        - `3`: high; the sensor is reporting data at maximal accuracy and is correctly calibrated.

#### Example

```markdown
# **LAMP.SensorEvent.all_by_participant("U1234567890", "lamp.accelerometer")**
{
  "timestamp": 1234567890,
  "sensor": "lamp.accelerometer",
  "data": {
    "x": 0.19378492,
    "y": 1.28473749,
    "z": -0.19384932,
    "accuracy": 2
  }
}
```

### SMS

SensorSpec: lamp.sms

#### Description

The sms sensor measures information on text messages sent and received by the user. Each event is a single message, with information on its type (incoming, outgoing) and trace (the other device involved in the messaging exchange). 

#### Data

- `trace: string`: the SHA-1-encrypted source/target of the text message. A device will have a consistent trace.
- `type: number`: integer label for the message type
    - `1`: received; the message was received by the user
    - `2`: sent; the message was sent by the user

### Screen

SensorSpec: lamp.screen_state

#### Description

The screen state sensor records when the screen was turned on or off, when the device was locked or unlocked, and changes in battery level from charging or discharging the device. 

This sensor **DOES NOT** record the amount of time spent within specific apps on the device or how many notifications were received.

#### Settings

- None

#### Data

- `screen_state: number`: (units: N/A) the current device screen and lock state.
    - `0`: screen_off; the screen was turned off, either by the user or by a notification.
    - `1`: screen_on; the screen was turned on, either by the user or by screen timeout.
    - `2`: device_locked; the device was locked, either by the user or by device timeout.
    - `3`: device_unlocked; the device was unlocked by the user.
    - `4`: battery_charging; the device was plugged in to charge by the user.
    - `5`: battery_unplugged; the device was unplugged from the charger by the user.
- `battery_level: number`: (units: percentage) the current battery level of the device.

#### Example

```markdown
# **LAMP.SensorEvent.all_by_participant("U1234567890", "lamp.screen_state")**
{
  "timestamp": 1234567890,
  "sensor": "lamp.screen_state",
  "data": {
    "screen_state": 2,
    "battery_level": 0.68
  }
}
```

### Weight

SensorSpec: lamp.weight

#### Description

#### Data

### WiFi

Cortex: cortex.raw.wifi

#### Description

The wifi sensor provides information about the devices to which the user's device connects via wifi. 

#### Data

- `timestamp: number`: UTC timestamp of WiFi event
- `bssid: string`: BSSID of WiFi event
- `ssid: string`: SSID of WiFi event

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
