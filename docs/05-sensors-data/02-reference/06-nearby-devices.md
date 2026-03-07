---
sidebar_position: 6
sidebar_label: Nearby Devices
title: "Nearby Devices"
---

# Nearby Devices (`lamp.nearby_device`)

Records nearby Bluetooth and WiFi devices detected by the phone.

## Configuration

- **SensorSpec:** `lamp.nearby_device`
- **Sampling:** Discrete
- **Platform:** iOS, Android

## Usage

Nearby device scans run in the background. No participant action is required.

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | `"bluetooth"` or `"wifi"` |
| `name` | string | Device or network name |
| `address` | string | MAC address or device identifier |
| `strength` | number | Signal strength in dBm (RSSI). Closer to 0 = stronger signal. |

### Signal Strength Reference

| RSSI | Signal Quality |
|------|---------------|
| −30 dBm | Excellent |
| −67 dBm | Very good |
| −70 dBm | Acceptable |
| −80 dBm | Poor |
| −90 dBm | Unusable |

### Example

```json
{
  "timestamp": 1649866397374,
  "sensor": "lamp.nearby_device",
  "data": {
    "type": "bluetooth",
    "name": "device1",
    "address": "3FC6C779-D79C-E00A-B711-5B2C8CA3D313",
    "strength": -95
  }
}
```

### Cortex Features

[`nearby_device`](/developer/cortex/features/raw-features) (raw) → [`nearby_device_count`](/developer/cortex/features/secondary-features#activity) (secondary)

Counts unique Bluetooth device addresses per time window.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
