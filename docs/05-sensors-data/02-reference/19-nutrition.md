---
sidebar_position: 19
sidebar_label: Nutrition
title: "Nutrition"
---

# Nutrition (`lamp.nutrition`)

Reports nutrition data from health platform apps, including calorie intake, hydration, and general nutrition tracking.

## Configuration

- **SensorSpec:** `lamp.nutrition`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Third-party nutrition/fitness apps
- **Requirements:** App that writes nutrition data to HealthKit or Health Connect; health platform permissions granted

## Usage

Nutrition data is recorded by third-party apps and synced via the health platform. Participants must manually log food and drink intake in a compatible app.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Measurement value |
| `unit` | string | `"kcal"`, `"liters"`, etc. |
| `type` | string | `"calories"`, `"hydration"`, or `"nutrition"` |
| `source` | string or null | Data source identifier |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.nutrition",
  "data": {
    "value": 350.0,
    "unit": "kcal",
    "type": "calories",
    "source": "com.example.fitness"
  }
}
```

### Cortex Features

No Cortex features currently process nutrition data. Access raw values via `cortex.raw.nutrition`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
