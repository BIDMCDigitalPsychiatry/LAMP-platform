---
sidebar_position: 13
sidebar_label: Respiratory Rate
title: "Respiratory Rate"
---

# Respiratory Rate (`lamp.respiratory_rate`)

Records breathing rate, typically measured by a smartwatch during sleep or rest periods.

## Configuration

- **SensorSpec:** `lamp.respiratory_rate`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Apple Watch, WearOS watch
- **Requirements:** Connected wearable; health platform permissions granted

## Usage

Respiratory rate is typically measured during sleep or extended rest periods. The wearable records the data and syncs via the health platform.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Respiratory rate in breaths per minute |
| `unit` | string | `"rpm"` |
| `source` | string or null | Data source identifier |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.respiratory_rate",
  "data": {
    "value": 16.0,
    "unit": "rpm",
    "source": "com.apple.health"
  }
}
```

### Cortex Features

No Cortex features currently process respiratory rate data. Access raw values via `cortex.raw.respiratory_rate`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
