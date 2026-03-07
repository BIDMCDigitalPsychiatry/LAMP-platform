---
sidebar_position: 15
sidebar_label: Blood Glucose
title: "Blood Glucose"
---

# Blood Glucose (`lamp.blood_glucose`)

Records blood glucose readings from a connected glucose monitor.

## Configuration

- **SensorSpec:** `lamp.blood_glucose`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Connected glucose monitor
- **Requirements:** Glucose monitor that syncs to HealthKit or Health Connect; health platform permissions granted

## Usage

Blood glucose readings are recorded by the connected monitor and synced via the health platform.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Blood glucose level |
| `unit` | string | `"mmol/L"` |
| `source` | string or null | Data source identifier |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.blood_glucose",
  "data": {
    "value": 5.6,
    "unit": "mmol/L",
    "source": "com.example.glucose_monitor"
  }
}
```

### Cortex Features

No Cortex features currently process blood glucose data. Access raw values via `cortex.raw.blood_glucose`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
