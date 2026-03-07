---
sidebar_position: 3
sidebar_label: Device Motion
title: "Device Motion"
---

# Device Motion (`lamp.device_motion`)

Combines gyroscope, magnetometer, and gravity data into a unified device motion event. This sensor replaces the deprecated `lamp.gyroscope` and `lamp.magnetometer` sensors.

## Configuration

- **SensorSpec:** `lamp.device_motion`
- **Sampling:** Discrete
- **Platform:** iOS, Android

## Usage

Device motion data is collected continuously in the background. No participant action is required.

:::note
On Android, individual sub-sensors (accelerometer, gyroscope, magnetometer, gravity) are collected separately and composed into the `DeviceMotion` structure. If a sub-sensor is unavailable, its fields will be `null`.
:::

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `motion` | object (`x`, `y`, `z`) | User acceleration (excludes gravity) |
| `magnetic` | object (`x`, `y`, `z`) | Geomagnetic field strength in micro Tesla (µT) |
| `attitude` | object (`x`, `y`, `z`) | Device attitude as roll, pitch, yaw |
| `gravity` | object (`x`, `y`, `z`) | Gravity vector |
| `rotation` | object (`x`, `y`, `z`) | Rotation rate vector |

### Example

```json
{
  "timestamp": 1647386641091,
  "sensor": "lamp.device_motion",
  "data": {
    "motion": { "x": -0.00178, "y": 0.00490, "z": -0.00018 },
    "magnetic": { "x": 3.451, "y": 8.882, "z": 53.097 },
    "attitude": { "x": 2.959, "y": 0.137, "z": -0.963 },
    "gravity": { "x": 0.180, "y": -0.137, "z": 0.974 },
    "rotation": { "x": 0.002, "y": -0.008, "z": 0.005 }
  }
}
```

### Cortex Features

[`device_motion`](/developer/cortex/features/raw-features) (raw) — not currently consumed by primary or secondary features.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
