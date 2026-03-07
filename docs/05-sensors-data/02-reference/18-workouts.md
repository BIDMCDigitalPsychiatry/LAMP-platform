---
sidebar_position: 18
sidebar_label: Workouts
title: "Workouts"
---

# Workouts (`lamp.segment`)

Reports workout or exercise session data from a smartwatch or fitness app.

## Configuration

- **SensorSpec:** `lamp.segment`
- **Sampling:** Continuous (events synced from health platform)
- **Platform:** iOS (HealthKit), Android (Health Connect)
- **Typical source:** Apple Watch, WearOS watch
- **Requirements:** Connected wearable or fitness app; health platform permissions granted

## Usage

Workout data is recorded when participants start exercise sessions on their wearable or fitness app. Data is synced via the health platform.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | number | Workout-specific value (e.g., duration, distance) |
| `unit` | string | Unit of measurement |
| `source` | string or null | Data source identifier |

### Example

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.segment",
  "data": {
    "value": 1800000,
    "unit": "ms",
    "source": "com.apple.health"
  }
}
```

### Cortex Features

No Cortex features currently process workout data. Access raw values via `cortex.raw.segment`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
