---
sidebar_position: 14
sidebar_label: Blood Pressure
title: "Blood Pressure"
---

# Blood Pressure (`lamp.blood_pressure`)

Records blood pressure readings from a connected blood pressure monitor via the device's health platform.

## Configuration

- **SensorSpec:** `lamp.blood_pressure`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Connected blood pressure monitor
- **Requirements:** Blood pressure monitor that syncs to HealthKit or Health Connect; health platform permissions granted

## Usage

Blood pressure readings are recorded by the connected monitor and synced via the health platform. Measurements require participant action (taking a reading with the monitor).

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `systolic` | object | `{ "value": number, "unit": "mmHg" }` |
| `diastolic` | object | `{ "value": number, "unit": "mmHg" }` |
| `source` | string or null | Data source identifier |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.blood_pressure",
  "data": {
    "systolic": { "value": 120.0, "unit": "mmHg" },
    "diastolic": { "value": 80.0, "unit": "mmHg" },
    "source": "com.example.bp_monitor"
  }
}
```

### Cortex Features

No Cortex features currently process blood pressure data. Access raw values via `cortex.raw.blood_pressure`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
