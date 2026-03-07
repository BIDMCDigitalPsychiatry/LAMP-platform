---
sidebar_position: 10
sidebar_label: Sleep
title: "Sleep"
---

# Sleep (`lamp.sleep`)

Reports sleep stage data, generally sourced from a smartwatch via the device's health platform.

## Configuration

- **SensorSpec:** `lamp.sleep`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Apple Watch, WearOS watch
- **Requirements:** Connected wearable with sleep tracking; health platform permissions granted

Configure via the [Sensors tab](/dashboard/sensors-tab). See [Wearable Setup](/sensors-data/configuration#wearable-device-support) for pairing instructions.

## Usage

Sleep data is recorded by the wearable during sleep periods and synced to the phone's health platform. mindLAMP reads from the health platform and uploads to the server. No participant action is required beyond wearing the watch to bed.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | integer | `0` = in bed, `1` = asleep, `2` = awake |
| `representation` | string | `"in_bed"`, `"in_sleep"`, or `"in_awake"` |
| `duration` | integer | Duration of the state in milliseconds |
| `source` | string | Data source (e.g., `"com.apple.health"`) |

### Example

```json
{
  "timestamp": 1636639670000,
  "sensor": "lamp.sleep",
  "data": {
    "value": 0,
    "source": "com.apple.health.CACD64E0-EE17-4430-9B0B-5255F09075DE",
    "representation": "in_bed",
    "duration": 12523000
  }
}
```

### Cortex Features

[`sleep`](/developer/cortex/features/raw-features) (raw) → [`healthkit_sleep_duration`](/developer/cortex/features/secondary-features#health) (secondary)

Accepts a `duration_type` parameter: `"in_bed"`, `"in_sleep"`, or `"in_awake"`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
