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

