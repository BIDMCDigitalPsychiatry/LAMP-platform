# Sensor Types

Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the **Platform Server** automatically by using the Activity API written in JavaScript. By “beginning” and “ending” a recording of these interactions, as well as “emitting” temporal data during the interaction, an ActivityEvent can be captured and sent to the **Platform Server**. A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository.

| Name           | SensorSpec                | 
|----------------|---------------------------| 
| Analytics      | lamp.analytics            | 
| Location       | lamp.gps                  | 
| Device Motion  | lamp.device_motion        | 
| Accelerometer  | lamp.accelerometer        | 
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
| None          | lamp.none | 
#### Details on the most commonly analyzed specs are below: For greater detail of specs, see **Cortex & API** section.

## Accelerometer
SensorSpec: lamp.accelerometer

### Description
The triaxial accelerometer measures acceleration applied to the device. Each measurement is measured in Gs and is taken relative to the coordinate plane of the device, screen facing upwards. For example, a device resting face-up on a flat surface will report a measurement with the coordinate values `<0, 0, 1>`.

## Bluetooth
Cortex: cortex.raw.bluetooth

### Description
The bluetooth sensor logs information about the device's Bluetooth sensor and about surrounding Bluetooth devices that are enabled and/or visible. The device scan for surrounding Bluetooth devices at a set frequency (default is 60 seconds). If multiple devices are detected in a single scan, they are all assigned the same timestamp.

## Calls
SensorSpec: lamp.calls

### Description
The calls sensor measures information on phone calls made and received by the user. Each event is a single phone call, with information on its type (incoming, outgoing, missed, etc), duration, and trace (the other device which the user connected with during the call).
Call type options differ between Android and iOS devices.

## Distance
SensorSpec: lamp.distance

## GPS
SensorSpec: lamp.gps

### Description
The GPS sensor gets the longitude and latitude of a user at a designated frequency of ~1Hz. As a requirement for smartphone apps to be running in the background and collecting any passive sensor data, GPS **is required** to be collected when any sensor data is being collected, even if it is not manually selected. To save battery and make it so extra data is not collected, GPS is collected at a lower frequency when it is not selected.

## Gyroscope
SensorSpec: lamp.gyroscope

### Description
The gyroscope sensors measures the rate of rotation around each of a device's x, y and z axes. Rotation values are in radians/second. Positive values indicate counter-clockwise rotation; negative values indicate clockwise rotation. These are raw values—i.e. they do not correct for nosie or drift.


## Motion
SensorSpec: lamp.accelerometer.motion

### Description
The motion sensor gathers information on the device's physical movement. It includes metrics on device tilt, rotation, experienced gravity, acceleration, and magnetic field. The acceleration measure here differs from `lamp.accelerometer` in that this measure does not correct for gravity.

## None
SensorSpec: lamp.none

### Description
The none sensor makes it so that no sensor data is collected from any sensors. This can be convenient if a user or study is ideally only to collect active data.

## SMS
SensorSpec: lamp.sms

### Description
The sms sensor measures information on text messages sent and received by the user. Each event is a single message, with information on its type (incoming, outgoing) and trace (the other device involved in the messaging exchange). 

## Screen
SensorSpec: lamp.device_state (previous version: lamp.screen_state)

### Description
The screen state sensor records when the screen was turned on or off, when the device was locked or unlocked, and changes in battery level from charging or discharging the device.
This sensor **DOES NOT** record the amount of time spent within specific apps on the device or how many notifications were received.

## WiFi
Cortex: cortex.raw.wifi

### Description
The wifi sensor provides information about the devices to which the user's device connects via wifi. 



