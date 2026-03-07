---
sidebar_position: 16
sidebar_label: Oxygen Saturation
title: "Oxygen Saturation"
---

# Oxygen Saturation (`lamp.oxygen_saturation`)

Records blood oxygen saturation (SpO2) percentage, typically from a smartwatch with a pulse oximeter sensor.

## Configuration

- **SensorSpec:** `lamp.oxygen_saturation`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Apple Watch, compatible WearOS watch
- **Requirements:** Wearable with pulse oximeter; health platform permissions granted

## Usage

SpO2 readings are recorded by the wearable (typically during sleep or on-demand) and synced via the health platform.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Blood oxygen saturation percentage |
| `unit` | string | `"%"` |
| `source` | string or null | Data source identifier |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.oxygen_saturation",
  "data": {
    "value": 97.0,
    "unit": "%",
    "source": "com.apple.health"
  }
}
```

### Cortex Features

No Cortex features currently process oxygen saturation data. Access raw values via `cortex.raw.oxygen_saturation`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
