---
sidebar_position: 12
sidebar_label: Heart Rate Variability
title: "Heart Rate Variability"
---

# Heart Rate Variability (`lamp.heartratevariability_sdnn`)

Reports SDNN (standard deviation of NN intervals), a common HRV metric reflecting autonomic nervous system activity. Lower SDNN values may indicate higher stress or reduced autonomic flexibility.

## Configuration

- **SensorSpec:** `lamp.heartratevariability_sdnn`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Apple Watch
- **Requirements:** Connected wearable with HRV measurement capability; health platform permissions granted

## Usage

HRV measurements are recorded periodically by the wearable (typically during rest or sleep) and synced via the health platform.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | SDNN value in milliseconds |
| `unit` | string | `"ms"` |
| `source` | string or null | Data source identifier |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.heartratevariability_sdnn",
  "data": {
    "value": 42.5,
    "unit": "ms",
    "source": "com.apple.health"
  }
}
```

### Cortex Features

No Cortex features currently process HRV data. Access raw values via `cortex.raw.heartratevariability_sdnn`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
