---
sidebar_position: 5
sidebar_label: Steps
title: "Steps"
---

# Steps (`lamp.steps`)

Records step count and related pedometer data. On iOS, data may come from the device pedometer or from HealthKit. On Android, data comes from Google Health Connect.

## Configuration

- **SensorSpec:** `lamp.steps`
- **Sampling:** Interval
- **Platform:** iOS, Android

Available without a wearable — the phone's built-in pedometer provides step data.

## Usage

Step data is collected automatically. No participant action is required.

:::note
When `source` is `null` (device pedometer on iOS), each event reports the running total of steps for the calendar day. When `source` is set (HealthKit or Health Connect), events report the step count since the last recorded event.
:::

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `source` | string or null | Data source identifier (e.g., `"com.google.android.gms"`). `null` if from device pedometer directly. |
| `type` | string | Data type: `"step_count"`, `"distance"`, `"speed"`, or `"cadence"` |
| `unit` | string | Unit: `"count"`, `"meter"`, `"meters per second"`, or `"steps/minute"` |
| `value` | number | The measurement value |

### Example

```json
{
  "timestamp": 1649842803515,
  "sensor": "lamp.steps",
  "data": {
    "source": "com.google.android.gms",
    "type": "step_count",
    "unit": "count",
    "value": 13
  }
}
```

### Cortex Features

[`steps`](/developer/cortex/features/raw-features) (raw) → [`step_count`](/developer/cortex/features/secondary-features#activity) (secondary)

The `step_count` feature accepts a `data_type` parameter to select between `"health"` (HealthKit/Health Connect), `"pedometer"`, or `"watch"` sources.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
