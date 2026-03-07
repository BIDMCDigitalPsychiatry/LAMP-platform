---
sidebar_position: 3
sidebar_label: Data
title: "Sensor Data Format"
description: "SensorEvent format, data retrieval methods, Cortex analysis, and deprecated sensors."
---

# Sensor Data Format

All sensor data in mindLAMP follows a consistent event-based format, making retrieval and analysis straightforward.

## SensorEvent Structure

```json
{
  "timestamp": 1649859212042,
  "sensor": "lamp.gps",
  "data": {
    "latitude": 42.3601,
    "longitude": -71.0589,
    "altitude": 12.5,
    "accuracy": 10.0
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | integer | Unix timestamp in milliseconds when the data was collected |
| `sensor` | string | The SensorSpec identifier (e.g., `lamp.gps`, `lamp.accelerometer`) |
| `data` | object | Sensor-specific payload — structure varies by sensor type |

The `data` payload structure depends on the sensor. See the [Sensor Reference](reference) for the fields produced by each sensor.

## Data Retrieval

Data can be retrieved through:

- **REST API** — Query sensor events for specific participants, time ranges, and types. See the [API documentation](/api).
- **Python SDK** — `import LAMP` for programmatic data access. See [Python SDK](/developer/api-sdks/python-sdk).
- **Cortex** — Process raw events into computed behavioral features automatically. See [Cortex](/developer/cortex).
- **Dashboard** — View and export data through the [Data Portal](/dashboard/data-portal) or the [Portal tab](/app/app-tabs/portal).

## Cortex Analysis

Sensor event data — sometimes referred to as **raw data** — is what the [Cortex](/developer/cortex) pipeline uses to calculate higher-level behavioral metrics. Cortex transforms this raw sensor data into behavioral insights through three stages:

1. **Raw features** — Retrieve sensor event data directly (e.g., `gps`, `accelerometer`, `device_state`).
2. **Primary features** — Compute intermediate metrics (e.g., `significant_locations`, `trips`, `screen_active`, `acc_jerk`).
3. **Secondary features** — Aggregate into behavioral measures (e.g., `hometime`, `entropy`, `screen_duration`, `step_count`).

See the [Cortex documentation](/developer/cortex) for details. For per-sensor schemas, see the [Sensor Reference](/sensors-data/reference).

## Deprecated Sensors

The following sensor identifiers have been superseded. Data collected under these identifiers may still appear in historical records. [Cortex](/developer/cortex) handles both old and new identifiers automatically.

| Old SensorSpec | Replaced By | Notes |
|---|---|---|
| `lamp.gyroscope` | [`lamp.device_motion`](/sensors-data/reference/device-motion) | Rotation data now in `rotation` sub-object |
| `lamp.magnetometer` | [`lamp.device_motion`](/sensors-data/reference/device-motion) | Magnetic field data now in `magnetic` sub-object |
| `lamp.screen_state` | [`lamp.device_state`](/sensors-data/reference/device-state) | Identical schema — renamed for clarity |
| `lamp.calls` | [`lamp.telephony`](/sensors-data/reference/telephony) | Call type changed from integer codes to string labels |
| `lamp.sms` | [`lamp.telephony`](/sensors-data/reference/telephony) | Text metadata now combined with call data |
| `lamp.bluetooth` | [`lamp.nearby_device`](/sensors-data/reference/nearby-devices) | Field names changed; now includes WiFi alongside Bluetooth |
| `lamp.wifi` | [`lamp.nearby_device`](/sensors-data/reference/nearby-devices) | BSSID/SSID fields changed to `address`/`name` |
| `lamp.distance` | — | Removed. Distance available via `lamp.steps` with `type: "distance"` |
| `lamp.flights` | — | Removed. No direct replacement. |
| `lamp.weight` | — | Removed. No direct replacement. |
| `lamp.height` | — | Removed. No direct replacement. |
