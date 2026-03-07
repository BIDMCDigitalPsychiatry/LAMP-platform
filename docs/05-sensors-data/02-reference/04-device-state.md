---
sidebar_position: 4
sidebar_label: Device State
title: "Device State"
---

# Device State (`lamp.device_state`)

Records screen on/off events, lock/unlock events, and battery level. This sensor does **not** record time spent in specific apps or notification counts.

## Configuration

- **SensorSpec:** `lamp.device_state`
- **Sampling:** Continuous (one event per state change)
- **Platform:** iOS, Android

## Usage

Events are generated automatically whenever the device state changes. No participant action is required.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `value` | integer | Numeric state code (see table below) |
| `representation` | string | Human-readable state name |
| `battery_level` | float | Battery level as a decimal (e.g., `0.85` = 85%) |

### State Codes

| Value | Representation | Meaning |
|-------|---------------|---------|
| `0` | `screen_on` | Screen turned on (by user or notification) |
| `1` | `screen_off` | Screen turned off (by user or timeout) |
| `2` | `locked` | Device locked (by user or timeout) |
| `3` | `unlocked` | Device unlocked by user |

### Example

```json
{
  "timestamp": 1649465295573,
  "sensor": "lamp.device_state",
  "data": {
    "value": 1,
    "representation": "screen_off",
    "battery_level": 0.07
  }
}
```

### Cortex Features

[`device_state`](/developer/cortex/features/raw-features) (raw) → [`screen_active`](/developer/cortex/features/primary-features) (primary) → [`screen_duration`](/developer/cortex/features/secondary-features#device-usage), [`screen_unlocks`](/developer/cortex/features/secondary-features#device-usage), [`screen_unlock_duration`](/developer/cortex/features/secondary-features#device-usage), [`screen_wakes`](/developer/cortex/features/secondary-features#device-usage), [`inactive_duration`](/developer/cortex/features/secondary-features#device-usage), [`battery_level`](/developer/cortex/features/secondary-features#device-usage) (secondary)

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
