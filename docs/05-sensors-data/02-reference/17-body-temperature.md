---
sidebar_position: 17
sidebar_label: Body Temperature
title: "Body Temperature"
---

# Body Temperature (`lamp.body_temperature`)

Records body temperature from a connected thermometer or wearable.

## Configuration

- **SensorSpec:** `lamp.body_temperature`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Connected thermometer
- **Requirements:** Thermometer or wearable that syncs to HealthKit or Health Connect; health platform permissions granted

## Usage

Body temperature readings are recorded by the connected device and synced via the health platform.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Body temperature |
| `unit` | string | `"celsius"` |
| `source` | string or null | Data source identifier |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.body_temperature",
  "data": {
    "value": 36.8,
    "unit": "celsius",
    "source": "com.example.thermometer"
  }
}
```

### Cortex Features

No Cortex features currently process body temperature data. Access raw values via `cortex.raw.body_temperature`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
