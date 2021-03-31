# Bluetooth

SensorSpec: lamp.bluetooth

### Description

The bluetooth sensor logs information about the device's Bluetooth sensor and about surrounding Bluetooth devices that are enabled and/or visible. The device scan for surrounding Bluetooth devices at a set frequency (default is 60 seconds). If multiple devices are detected in a single scan, they are all assigned the same timestamp.

It is supported for Android devices

### Data

- `device_id: string`: unique identifier for detected device
- `frequency: number`: (units: Hz) WiFi band frequency
- `rssi: number`: (units: DB) WiFI signal strength