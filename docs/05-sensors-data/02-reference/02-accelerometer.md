---
sidebar_position: 2
sidebar_label: Accelerometer
title: "Accelerometer"
---

# Accelerometer (`lamp.accelerometer`)

Records device acceleration in three axes. Units are **g** (multiples of gravitational acceleration, where 1 g ≈ 9.81 m/s²). At rest with the screen facing up, the z-axis reads approximately -1.0 g. The coordinate plane is relative to the device.

## Configuration

- **SensorSpec:** `lamp.accelerometer`
- **Sampling:** Discrete (default 5 Hz — 5 samples per second)
- **Platform:** iOS, Android
- **Permissions:** Motion & Fitness required

Configure sampling rate via the API.

<details>
<summary>API settings fields</summary>

| Setting | API Field | Type | Default | Max |
|---------|-----------|------|---------|-----|
| Sampling Rate | `frequency` | number (Hz) | 5 | 5 |

</details>

### Quality Factors

- Motion & Fitness permissions must be granted.
- Battery optimization can restrict background sensor access.
- Higher sampling rates produce more granular data but consume more battery.

## Usage

Accelerometer data is collected continuously in the background. No participant action is required.

:::note
On Android, accelerometer data may be delivered inside a `DeviceMotion`-style structure with a `motion` sub-object. Cortex normalizes this automatically. The data format described here is the canonical iOS format.
:::

## Data

### Fields

| Field | Type | Unit | Description |
|-------|------|------|-------------|
| `x` | float | g | Acceleration on x-axis (left to right across the screen) |
| `y` | float | g | Acceleration on y-axis (bottom to top of the screen) |
| `z` | float | g | Acceleration on z-axis (out from the screen toward the user) |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.accelerometer",
  "data": {
    "x": 0.19378,
    "y": 1.28474,
    "z": -0.19385
  }
}
```

### Cortex Features

[`accelerometer`](/developer/cortex/features/raw-features) (raw) → [`acc_jerk`](/developer/cortex/features/primary-features) (primary) → [`inactive_duration`](/developer/cortex/features/secondary-features#device-usage) (secondary)

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
