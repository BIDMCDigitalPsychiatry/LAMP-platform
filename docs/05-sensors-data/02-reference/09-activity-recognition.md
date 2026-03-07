---
sidebar_position: 9
sidebar_label: Activity Recognition
title: "Activity Recognition"
---

# Activity Recognition (`lamp.activity_recognition`)

Detects the participant's current physical activity using device motion sensors. Available without a wearable — uses the phone's built-in sensors.

## Configuration

- **SensorSpec:** `lamp.activity_recognition`
- **Sampling:** Continuous
- **Platform:** iOS, Android

## Usage

Activity recognition runs in the background. Events are generated when activity state transitions occur.

:::note
Activity states are entered and exited independently — a participant can simultaneously be `walking` and `on_foot`, for example. Each field tracks its own state transitions separately.
:::

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `running` | integer or null | `1` = activity entered, `0` = activity exited |
| `cycling` | integer or null | Same as above |
| `automotive` | integer or null | Same as above (in a vehicle) |
| `stationary` | integer or null | Same as above |
| `unknown` | integer or null | Same as above |
| `walking` | integer or null | Same as above |
| `on_foot` | integer or null | Same as above |

Each event reports a transition for one or more activity types. A value of `1` means the participant entered that activity state; `0` means they exited it; `null` means no change.

### Cortex Features

Not currently consumed by Cortex features.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
