---
sidebar_position: 7
sidebar_label: Telephony
title: "Telephony"
---

# Telephony (`lamp.telephony`)

Records call metadata (not content). Call traces are hashed identifiers — the same contact produces a consistent trace, enabling degree analysis without exposing the actual phone number.

## Configuration

- **SensorSpec:** `lamp.telephony`
- **Sampling:** Continuous (one event per call)
- **Platform:** iOS, Android

## Usage

Call events are recorded automatically. No participant action is required. Only metadata is captured — call audio content is never recorded by this sensor.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | `"incoming"`, `"outgoing"`, or `"missed"` |
| `duration` | number | Call duration in seconds |
| `trace` | string | Hashed contact identifier |

### Example

```json
{
  "timestamp": 1649864919743,
  "sensor": "lamp.telephony",
  "data": {
    "type": "incoming",
    "duration": 24,
    "trace": "22F222FF-F2F2-4000-92F3-293049DC4FEC"
  }
}
```

### Cortex Features

[`telephony`](/developer/cortex/features/raw-features) (raw) → [`call_number`](/developer/cortex/features/secondary-features#communication), [`call_duration`](/developer/cortex/features/secondary-features#communication), [`call_degree`](/developer/cortex/features/secondary-features#communication) (secondary)

Call features accept a `call_direction` parameter: `"all"`, `"incoming"`, or `"outgoing"`.

:::note
Text message features (`text_number`, `text_degree`) depend on the `messages_usage` raw feature from iOS SensorKit — not on `lamp.telephony`. See [Communication features](/developer/cortex/features/secondary-features#communication) for details.
:::

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
