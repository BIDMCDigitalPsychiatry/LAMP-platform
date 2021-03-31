---
title: Data Types
slug: data_types
---

All event streams in the LAMP API are catalogued by a timestamp and specific "blueprints" (schema) of what kind of data they hold. For example, a sensor event that occurred 20 minutes ago would carry that instant's timestamp, along with a link to what kind of sensor it was, and that sensor's measurement as a payload of data. The kinds of activities and sensors available are declared below, along with the blueprint you can expect their events' data to follow. 

**To learn more about accessing these data types, follow along with either of these tutorials:**
[Preparing to analyze your data in R](../Topics/Preparing_to_analyze_your_data_in_R.md) or [Preparing to analyze your data in Python](../Topics/Preparing_to_analyze_your_data_in_Python.md).

## Activity Types

In the case of activities (active data) completed by the participant or patient, the activity declares two types of blueprints: **static data**, or data that relates to the overall session, and **temporal slices**, data that provides millisecond precision and carries information about each action or intention the participant or patient might have. Furthermore, activities that can be customized will also have **settings** blueprints, but these won't actually appear in the event data (and are omitted from the fields listed below).

CSV Field,View In App,Description,Slot Name 2,Static Data Slot #1,Slot Name 1,Static Data Slot #2,Slot Name,Static Data Slot #3,Slot Name 3,Static Data Slot #4,Slot Name 4,Static Data Slot #5,TemporalSlice.Item,TemporalSlice.Value,TemporalSlice.Type,TemporalSlice.Duration,TemporalSlice.Level
lamp.survey,../../Topics/Activities in the app/Untitled Database/Survey.md,Customizable surveys.,,,,,,,,,,,The question index.,The selected question option index.,"The click range (""valid"" or ""none"") for the question.",The time taken to answer a question in the survey.,
lamp.nback,"../../Topics/Activities in the app/Untitled Database/N-Back (Removed, Unavailable).md",The NBack test.,score,The computed score for the completed session.,correct_answers,The total number of correct answers made in the session.,wrong_answers,The total number of incorrect answers made in the session.,total_questions,The total number of questions encountered during the session.,version,The version of the test played.,,,,,
lamp.nback_new,"../../Topics/Activities in the app/Untitled Database/Trails B (Removed, Unavailable).md",The Trails B test.,point,The associated point value with the completed session.,rating,The associated rating of the completed session.,score,The computed score for the completed session.,total_attempts,The total number of attempts made during the session.,Unused,The alphanumeric index of the item tapped.,,"Whether the correct index was tapped or not (""correct"" or ""none"").","The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).",The current sequence index in the game.,
lamp.spatial_span,../../Topics/Activities in the app/Untitled Database/Spatial Span.md,"The Spatial Span test, with Forward and Backward variants.",rating,The associated rating of the completed session.,score,The computed score for the completed session.,correct_answers,The total number of correct answers made in the session.,wrong_answers,The total number of incorrect answers made in the session.,type,The integer indicating forward or backward variant.,The game index.,The current sequence index in the session.,"Whether the correct item was tapped or not (""correct"" or ""none"").","The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).",The current level reached during the session.
lamp.simple_memory,"../../Topics/Activities in the app/Untitled Database/Simple Memory (Removed, Unavailable).md",The Simple Memory test.,score,The computed score for the completed session.,correct_answers,The total number of correct answers made in the session.,wrong_answers,The total number of incorrect answers made in the session.,total_questions,The total number of questions encountered during the session.,version,The version of the test played.,,,,,
lamp.serial_7s,"../../Topics/Activities in the app/Untitled Database/Serial 7s (Removed, Unavailable).md",The Serial 7s test.,rating,The associated rating of the completed session.,score,The computed score for the completed session.,total_attempts,The total number of attempts made during the session.,total_questions,The total number of questions encountered during the session.,version,The version of the test played.,,,,,
lamp.cats_and_dogs,../../Topics/Activities in the app/Untitled Database/Cats and Dogs.md,The Cats and Dogs game.,point,The associated point value with the completed session.,rating,The associated rating of the completed session.,correct_answers,The total number of correct answers made in the session.,wrong_answers,The total number of incorrect answers made in the session.,total_questions,The total number of questions encountered during the session.,,,,,
lamp.3d_figure_copy,"../../Topics/Activities in the app/Untitled Database/3D Figure Copy (Removed, Unavailable).md",The 3D Figure drawing game.,point,The associated point value with the completed session.,drawn_file_name,The link to the file containing the drawn image.,game_name,The unique game name for the drawing session.,,,,,,,,,
lamp.visual_association,"../../Topics/Activities in the app/Untitled Database/Visual Association (Removed, Unavailable).md",The Visual Association test.,rating,The associated rating of the completed session.,score,The computed score for the completed session.,total_attempts,The total number of attempts made during the session.,total_questions,The total number of questions encountered during the session.,version,The version of the test played.,,,,,
lamp.digit_span,"../../Topics/Activities in the app/Untitled Database/Digit Span (Removed, Unavailable).md","The Digit Span test, with Forward and Backward variants.",rating,The associated rating of the completed session.,score,The computed score for the completed session.,correct_answers,The total number of correct answers made in the session.,wrong_answers,The total number of incorrect answers made in the session.,type,The integer indicating forward or backward variant.,,,,,
lamp.cats_and_dogs_new,,The new variant of the Cats and Dogs game.,point,The associated point value with the completed session.,rating,The associated rating of the completed session.,score,The computed score for the completed session.,correct_answers,The total number of correct answers made in the session.,wrong_answers,The total number of incorrect answers made in the session.,,,,,
lamp.temporal_order,"../../Topics/Activities in the app/Untitled Database/Temporal Order (Removed, Unavailable).md",The Temporal Order test.,rating,The associated rating of the completed session.,score,The computed score for the completed session.,correct_answers,The total number of correct answers made in the session.,wrong_answers,The total number of incorrect answers made in the session.,version,The version of the test played.,,,,,
lamp.nback_new,"../../Topics/Activities in the app/Untitled Database/N-Back (Removed, Unavailable).md",The new variant of the NBack test.,rating,The associated rating of the completed session.,score,The computed score for the completed session.,correct_answers,The total number of correct answers made in the session.,wrong_answers,The total number of incorrect answers made in the session.,total_questions,The total number of questions encountered during the session.,,,,,
lamp.trails_b_new,,The new variant of the Trails B test.,point,The associated point value with the completed session.,rating,The associated rating of the completed session.,score,The computed score for the completed session.,total_attempts,The total number of attempts made during the session.,version,The version of the test played.,The alphanumeric index of the item tapped.,,"Whether the correct item was tapped or not (""correct"" or ""none"").","The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).",The current sequence index in the game.
lamp.trails_b_dot_touch,"../../Topics/Activities in the app/Untitled Database/Trails B Dot Touch (Removed, Unavailable).md",The new dot-touch variant of the Trails B test.,point,The associated point value with the completed session.,rating,The associated rating of the completed session.,score,The computed score for the completed session.,total_attempts,The total number of attempts made during the session.,,,The alphanumeric index of the item tapped.,,"Whether the correct item was tapped or not (""correct"" or ""none"").","The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).",The current sequence index in the game.
lamp.jewels_a,../../Topics/Activities in the app/Untitled Database/Jewels Trails A & B.md,"The Jewels game, variant A.",rating,The associated rating of the completed session.,score,The computed score for the completed session.,total_attempts,The total number of attempts made during the session.,total_bonus_collected,The total bonus collected during the session.,total_jewels_collected,The total jewels collected during the session.,The alphanumeric jewel index tapped.,,"Whether the correct jewel was tapped or not (""correct"" or ""none"").","The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).",The current sequence index in the game.
lamp.jewels_b,../../Topics/Activities in the app/Untitled Database/Jewels Trails A & B.md,"The Jewels game, variant B.",rating,The associated rating of the completed session.,score,The computed score for the completed session.,total_attempts,The total number of attempts made during the session.,total_bonus_collected,The total bonus collected during the session.,total_jewels_collected,The total jewels collected during the session.,The alphanumeric jewel index tapped.,,"Whether the correct jewel was tapped or not (""correct"" or ""none"").","The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).",The current sequence index in the game.

# lamp.3d_figure_copy

Description: The 3D Figure drawing game.
Slot Name: game_name
Slot Name 1: drawn_file_name
Slot Name 2: point
Static Data Slot #1: The associated point value with the completed session.
Static Data Slot #2: The link to the file containing the drawn image.
Static Data Slot #3: The unique game name for the drawing session.
View In App: ../../../Topics/Activities in the app/Untitled Database/3D Figure Copy (Removed, Unavailable).md

# lamp.cats_and_dogs

Description: The Cats and Dogs game.
Slot Name: correct_answers
Slot Name 1: rating
Slot Name 2: point
Slot Name 3: wrong_answers
Slot Name 4: total_questions
Static Data Slot #1: The associated point value with the completed session.
Static Data Slot #2: The associated rating of the completed session.
Static Data Slot #3: The total number of correct answers made in the session.
Static Data Slot #4: The total number of incorrect answers made in the session.
Static Data Slot #5: The total number of questions encountered during the session.
View In App: ../../../Topics/Activities in the app/Untitled Database/Cats and Dogs.md

# lamp.cats_and_dogs_new

Description: The new variant of the Cats and Dogs game.
Slot Name: score
Slot Name 1: rating
Slot Name 2: point
Slot Name 3: correct_answers
Slot Name 4: wrong_answers
Static Data Slot #1: The associated point value with the completed session.
Static Data Slot #2: The associated rating of the completed session.
Static Data Slot #3: The computed score for the completed session.
Static Data Slot #4: The total number of correct answers made in the session.
Static Data Slot #5: The total number of incorrect answers made in the session.

# lamp.digit_span

Description: The Digit Span test, with Forward and Backward variants.
Slot Name: correct_answers
Slot Name 1: score
Slot Name 2: rating
Slot Name 3: wrong_answers
Slot Name 4: type
Static Data Slot #1: The associated rating of the completed session.
Static Data Slot #2: The computed score for the completed session.
Static Data Slot #3: The total number of correct answers made in the session.
Static Data Slot #4: The total number of incorrect answers made in the session.
Static Data Slot #5: The integer indicating forward or backward variant.
View In App: ../../../Topics/Activities in the app/Untitled Database/Digit Span (Removed, Unavailable).md

# lamp.jewels_a

Description: The Jewels game, variant A.
Slot Name: total_attempts
Slot Name 1: score
Slot Name 2: rating
Slot Name 3: total_bonus_collected
Slot Name 4: total_jewels_collected
Static Data Slot #1: The associated rating of the completed session.
Static Data Slot #2: The computed score for the completed session.
Static Data Slot #3: The total number of attempts made during the session.
Static Data Slot #4: The total bonus collected during the session.
Static Data Slot #5: The total jewels collected during the session.
TemporalSlice.Duration: The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).
TemporalSlice.Item: The alphanumeric jewel index tapped.
TemporalSlice.Level: The current sequence index in the game.
TemporalSlice.Type: Whether the correct jewel was tapped or not ("correct" or "none").
View In App: ../../../Topics/Activities in the app/Untitled Database/Jewels Trails A & B.md

# lamp.jewels_b

Description: The Jewels game, variant B.
Slot Name: total_attempts
Slot Name 1: score
Slot Name 2: rating
Slot Name 3: total_bonus_collected
Slot Name 4: total_jewels_collected
Static Data Slot #1: The associated rating of the completed session.
Static Data Slot #2: The computed score for the completed session.
Static Data Slot #3: The total number of attempts made during the session.
Static Data Slot #4: The total bonus collected during the session.
Static Data Slot #5: The total jewels collected during the session.
TemporalSlice.Duration: The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).
TemporalSlice.Item: The alphanumeric jewel index tapped.
TemporalSlice.Level: The current sequence index in the game.
TemporalSlice.Type: Whether the correct jewel was tapped or not ("correct" or "none").
View In App: ../../../Topics/Activities in the app/Untitled Database/Jewels Trails A & B.md

# lamp.nback

Description: The NBack test.
Slot Name: wrong_answers
Slot Name 1: correct_answers
Slot Name 2: score
Slot Name 3: total_questions
Slot Name 4: version
Static Data Slot #1: The computed score for the completed session.
Static Data Slot #2: The total number of correct answers made in the session.
Static Data Slot #3: The total number of incorrect answers made in the session.
Static Data Slot #4: The total number of questions encountered during the session.
Static Data Slot #5: The version of the test played.
View In App: ../../../Topics/Activities in the app/Untitled Database/N-Back (Removed, Unavailable).md

# lamp.nback_new

Description: The Trails B test.
Slot Name: score
Slot Name 1: rating
Slot Name 2: point
Slot Name 3: total_attempts
Slot Name 4: Unused
Static Data Slot #1: The associated point value with the completed session.
Static Data Slot #2: The associated rating of the completed session.
Static Data Slot #3: The computed score for the completed session.
Static Data Slot #4: The total number of attempts made during the session.
Static Data Slot #5: The alphanumeric index of the item tapped.
TemporalSlice.Duration: The current sequence index in the game.
TemporalSlice.Type: The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).
TemporalSlice.Value: Whether the correct index was tapped or not ("correct" or "none").
View In App: ../../../Topics/Activities in the app/Untitled Database/Trails B (Removed, Unavailable).md

# lamp.nback_new

Description: The new variant of the NBack test.
Slot Name: correct_answers
Slot Name 1: score
Slot Name 2: rating
Slot Name 3: wrong_answers
Slot Name 4: total_questions
Static Data Slot #1: The associated rating of the completed session.
Static Data Slot #2: The computed score for the completed session.
Static Data Slot #3: The total number of correct answers made in the session.
Static Data Slot #4: The total number of incorrect answers made in the session.
Static Data Slot #5: The total number of questions encountered during the session.
View In App: ../../../Topics/Activities in the app/Untitled Database/N-Back (Removed, Unavailable).md

# lamp.serial_7s

Description: The Serial 7s test.
Slot Name: total_attempts
Slot Name 1: score
Slot Name 2: rating
Slot Name 3: total_questions
Slot Name 4: version
Static Data Slot #1: The associated rating of the completed session.
Static Data Slot #2: The computed score for the completed session.
Static Data Slot #3: The total number of attempts made during the session.
Static Data Slot #4: The total number of questions encountered during the session.
Static Data Slot #5: The version of the test played.
View In App: ../../../Topics/Activities in the app/Untitled Database/Serial 7s (Removed, Unavailable).md

# lamp.simple_memory

Description: The Simple Memory test.
Slot Name: wrong_answers
Slot Name 1: correct_answers
Slot Name 2: score
Slot Name 3: total_questions
Slot Name 4: version
Static Data Slot #1: The computed score for the completed session.
Static Data Slot #2: The total number of correct answers made in the session.
Static Data Slot #3: The total number of incorrect answers made in the session.
Static Data Slot #4: The total number of questions encountered during the session.
Static Data Slot #5: The version of the test played.
View In App: ../../../Topics/Activities in the app/Untitled Database/Simple Memory (Removed, Unavailable).md

# lamp.spatial_span

Description: The Spatial Span test, with Forward and Backward variants.
Slot Name: correct_answers
Slot Name 1: score
Slot Name 2: rating
Slot Name 3: wrong_answers
Slot Name 4: type
Static Data Slot #1: The associated rating of the completed session.
Static Data Slot #2: The computed score for the completed session.
Static Data Slot #3: The total number of correct answers made in the session.
Static Data Slot #4: The total number of incorrect answers made in the session.
Static Data Slot #5: The integer indicating forward or backward variant.
TemporalSlice.Duration: The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).
TemporalSlice.Item: The game index.
TemporalSlice.Level: The current level reached during the session.
TemporalSlice.Type: Whether the correct item was tapped or not ("correct" or "none").
TemporalSlice.Value: The current sequence index in the session.
View In App: ../../../Topics/Activities in the app/Untitled Database/Spatial Span.md

# lamp.survey

Description: Customizable surveys.
TemporalSlice.Duration: The time taken to answer a question in the survey.
TemporalSlice.Item: The question index.
TemporalSlice.Type: The click range ("valid" or "none") for the question.
TemporalSlice.Value: The selected question option index.
View In App: ../../../Topics/Activities in the app/Untitled Database/Survey.md

# lamp.temporal_order

Description: The Temporal Order test.
Slot Name: correct_answers
Slot Name 1: score
Slot Name 2: rating
Slot Name 3: wrong_answers
Slot Name 4: version
Static Data Slot #1: The associated rating of the completed session.
Static Data Slot #2: The computed score for the completed session.
Static Data Slot #3: The total number of correct answers made in the session.
Static Data Slot #4: The total number of incorrect answers made in the session.
Static Data Slot #5: The version of the test played.
View In App: ../../../Topics/Activities in the app/Untitled Database/Temporal Order (Removed, Unavailable).md

# lamp.trails_b_dot_touch

Description: The new dot-touch variant of the Trails B test.
Slot Name: score
Slot Name 1: rating
Slot Name 2: point
Slot Name 3: total_attempts
Static Data Slot #1: The associated point value with the completed session.
Static Data Slot #2: The associated rating of the completed session.
Static Data Slot #3: The computed score for the completed session.
Static Data Slot #4: The total number of attempts made during the session.
TemporalSlice.Duration: The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).
TemporalSlice.Item: The alphanumeric index of the item tapped.
TemporalSlice.Level: The current sequence index in the game.
TemporalSlice.Type: Whether the correct item was tapped or not ("correct" or "none").
View In App: ../../../Topics/Activities in the app/Untitled Database/Trails B Dot Touch (Removed, Unavailable).md

# lamp.trails_b_new

Description: The new variant of the Trails B test.
Slot Name: score
Slot Name 1: rating
Slot Name 2: point
Slot Name 3: total_attempts
Slot Name 4: version
Static Data Slot #1: The associated point value with the completed session.
Static Data Slot #2: The associated rating of the completed session.
Static Data Slot #3: The computed score for the completed session.
Static Data Slot #4: The total number of attempts made during the session.
Static Data Slot #5: The version of the test played.
TemporalSlice.Duration: The time between the recording of this detail and the previous one (or the start of the activity, if no previous detail exists).
TemporalSlice.Item: The alphanumeric index of the item tapped.
TemporalSlice.Level: The current sequence index in the game.
TemporalSlice.Type: Whether the correct item was tapped or not ("correct" or "none").

# lamp.visual_association

Description: The Visual Association test.
Slot Name: total_attempts
Slot Name 1: score
Slot Name 2: rating
Slot Name 3: total_questions
Slot Name 4: version
Static Data Slot #1: The associated rating of the completed session.
Static Data Slot #2: The computed score for the completed session.
Static Data Slot #3: The total number of attempts made during the session.
Static Data Slot #4: The total number of questions encountered during the session.
Static Data Slot #5: The version of the test played.
View In App: ../../../Topics/Activities in the app/Untitled Database/Visual Association (Removed, Unavailable).md

## Sensor Types

Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the **Platform Server** automatically by using the Activity API written in JavaScript. By “beginning” and “ending” a recording of these interactions, as well as “emitting” temporal data during the interaction, an ActivityEvent can be captured and sent to the **Platform Server**. A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository.

Name,SensorSpec
Accelerometer,lamp.accelerometer
Motion,lamp.accelerometer.motion
Gyroscope,lamp.gyroscope
Screen,lamp.screen_state
Location,lamp.gps
Blood Pressure,lamp.blood_pressure
Calls,lamp.calls
SMS,lamp.sms
WiFi,lamp.wifi
Bluetooth,lamp.bluetooth
Weight,lamp.weight
Distance,lamp.distance

# Accelerometer

SensorSpec: lamp.accelerometer

### Description

The triaxial accelerometer measures acceleration applied to the device. Each measurement is measured in Gs and is taken relative to the coordinate plane of the device, screen facing upwards. For example, a device resting face-up on a flat surface will report a measurement with the coordinate values `<0, 0, 1>`.

### Settings

- `frequency: number`: (units: Hz) the required accelerometer measurement frequency; the sensor will make a best effort to match the requested `frequency` but no guarantees are made by the device hardware or operating system.

### Data

- `x: number`: (units: G) the X-axis coordinate.
- `y: number`: (units: G) the Y-axis coordinate.
- `z: number`: (units: G) the Z-axis coordinate.
- `accuracy: number`:  (units: None) the data accuracy level, or `null` if unavailable.
    - `-1`: invalid; the sensor is reporting data but is not connected to its environment.
    - `0`: none; the sensor is reporting data that is not calibrated and cannot be trusted.
    - `1`: low; the sensor is reporting data at poor accuracy, and environmental calibration is required.
    - `2`: medium; the sensor is reporting data at an average accuracy, and environmental calibration of the device may improve data.
    - `3`: high; the sensor is reporting data at maximal accuracy and is correctly calibrated.

### Example

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

# Blood Pressure

SensorSpec: lamp.blood_pressure

Blood pressure is 

- **lamp.blood_pressure:** records blood pressure from an external connected monitor.
    1. **value**: number
    2. **units**: string

# Bluetooth

SensorSpec: lamp.bluetooth

### Description

The bluetooth sensor logs information about the device's Bluetooth sensor and about surrounding Bluetooth devices that are enabled and/or visible. The device scan for surrounding Bluetooth devices at a set frequency (default is 60 seconds). If multiple devices are detected in a single scan, they are all assigned the same timestamp.

It is supported for Android devices

### Data

- `device_id: string`: unique identifier for detected device
- `frequency: number`: (units: Hz) WiFi band frequency
- `rssi: number`: (units: DB) WiFI signal strength

# Calls

SensorSpec: lamp.calls

### Description

The calls sensor measures information on phone calls made and received by the user. Each event is a single phone call, with information on its type (incoming, outgoing, missed, etc), duration, and trace (the other device which the user connected with during the call). 

Call type options differ between Android and iOS devices.

### Data

- `call_trace: string`: the SHA-1-encrypted source/target of the call. A device will have a consistent trace.
- `call_type: number`: integer label for the call type
    - Android
        - `1`: incoming; the call was received by the user
        - `2`: outgoing; the call was made by the user
        - `3`: missed; the call was meant to be received by the user, but missed it
        - `4`: busy; the user's phone was busy
- `call_duration`: (units: seconds) the length of the call session

# Distance

SensorSpec: lamp.distance

# Gyroscope

SensorSpec: lamp.gyroscope

### Description

The gyroscope sensors measures the rate of rotation around each of a device's x, y and z axes. Rotation values are in radians/second. Positive values indicate counter-clockwise rotation; negative values indicate clockwise rotation. These are raw values—i.e. they do not correct for nosie or drift.

### Settings

### Data

- `x: number` (units: rad/s) the rotational velocity around the x-axis. The x-axis goes from left to right, across the device's screen face
- `y: number` (units: rad/s) the rotational velocity around the y-axis. The y-axis is vertical and points up
- `z: number` (units: rad/s) the rotational velocity around the z-axis. The z-axis is horizontal and points out from the front screen (towards the user looking at the screen)

### Example

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

# Location

SensorSpec: lamp.gps

### Description

The location sensor records the device's current GPS coordinates. Depending on the device operating system and device battery level, the source of the data from this sensor may alternate between GPS antennae (high accuracy), cellular tower triangulation (moderate accuracy), WiFi triangulation (poor accuracy), or a combination of these. 

### Settings

- `frequency: number`: (units: Hz) the required location measurement frequency; the sensor will make a best effort to match the requested `frequency` but no guarantees are made by the device hardware or operating system.

### Data

- `latitude: number`: (units: degrees) the coordinate's latitude.
- `longitude: number`: (units: degrees) the coordinate's longitude.
- `altitude: number`: (units: meters) the coordinate's altitude, relative to sea level.
- `accuracy: number`:  (units: meters) the coordinate's estimated accuracy representing the radius of a circle formed around the reported latitude/longitude pair, [for which there is **AT LEAST** a 68% probability that the true coordinate is contained within.](https://en.wikipedia.org/wiki/Circular_error_probable)
    - `0.0`: no accuracy could be determined.

*Unsupported event properties:* `bearing` *and* `speed`*.*

### Example

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

# Motion

SensorSpec: lamp.accelerometer.motion

### Description

The motion sensor gathers information on the device's physical movement. It includes metrics on device tilt, rotation, experienced gravity, acceleration, and magnetic field. The acceleration measure here differs from `lamp.accelerometer` in that this measure does not correct for gravity.

### Data

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

### Example

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

# SMS

SensorSpec: lamp.sms

### Description

The sms sensor measures information on text messages sent and received by the user. Each event is a single message, with information on its type (incoming, outgoing) and trace (the other device involved in the messaging exchange). 

### Data

- `trace: string`: the SHA-1-encrypted source/target of the text message. A device will have a consistent trace.
- `type: number`: integer label for the message type
    - `1`: received; the message was received by the user
    - `2`: sent; the message was sent by the user

# Screen

SensorSpec: lamp.screen_state

### Description

The screen state sensor records when the screen was turned on or off, when the device was locked or unlocked, and changes in battery level from charging or discharging the device. 

This sensor **DOES NOT** record the amount of time spent within specific apps on the device or how many notifications were received.

### Settings

- None

### Data

- `screen_state: number`: (units: N/A) the current device screen and lock state.
    - `0`: screen_off; the screen was turned off, either by the user or by a notification.
    - `1`: screen_on; the screen was turned on, either by the user or by screen timeout.
    - `2`: device_locked; the device was locked, either by the user or by device timeout.
    - `3`: device_unlocked; the device was unlocked by the user.
    - `4`: battery_charging; the device was plugged in to charge by the user.
    - `5`: battery_unplugged; the device was unplugged from the charger by the user.
- `battery_level: number`: (units: percentage) the current battery level of the device.

### Example

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

# Weight

SensorSpec: lamp.weight

### Description

### Data

# WiFi

SensorSpec: lamp.wifi

### Description

The wifi sensor provides information about the devices to which the user's device connects via wifi. 

It is supported for Android devices

### Data

- `device__id: string`: unique identifier for detected device
- `frequency: number`: (units: Hz) WiFi band frequency
- `rssi: number`: (units: DB) WiFI signal strength

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
