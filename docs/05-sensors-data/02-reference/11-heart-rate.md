---
sidebar_position: 11
sidebar_label: Heart Rate
title: "Heart Rate"
---

# Heart Rate (`lamp.heart_rate`)

Records heart rate readings, typically from a smartwatch's optical heart rate sensor.

## Configuration

- **SensorSpec:** `lamp.heart_rate`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Apple Watch, WearOS watch
- **Requirements:** Connected wearable with heart rate sensor; health platform permissions granted

## Usage

Heart rate readings are recorded periodically by the wearable and synced via the health platform. Frequency depends on the wearable's measurement schedule (typically every few minutes, more frequently during workouts).

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Heart rate in beats per minute (bpm) |
| `unit` | string | `"bpm"` |
| `source` | string or null | Data source identifier |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.heart_rate",
  "data": {
    "value": 72,
    "unit": "bpm",
    "source": "com.apple.health"
  }
}
```

### Cortex Features

No Cortex features currently process heart rate data. Access raw values via `cortex.raw.heart_rate`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
