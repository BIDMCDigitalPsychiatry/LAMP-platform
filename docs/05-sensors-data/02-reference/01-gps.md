---
sidebar_position: 1
sidebar_label: GPS
title: "GPS"
---

# GPS (`lamp.gps`)

Records the device's GPS coordinates. Depending on the device and battery level, the data source may alternate between GPS antennae (high accuracy), cellular triangulation (moderate accuracy), or WiFi triangulation (lower accuracy).

## Configuration

- **SensorSpec:** `lamp.gps`
- **Sampling:** Discrete (default 1 Hz — 1 sample per second)
- **Platform:** iOS, Android
- **Permissions:** Location "Always" required

Configure sampling rate via the API.

<details>
<summary>API settings fields</summary>

| Setting | API Field | Type | Default | Max |
|---------|-----------|------|---------|-----|
| Sampling Rate | `frequency` | number (Hz) | 1 | 5 |

</details>

### Quality Factors

- Location permissions must be set to "Always" (not "While Using").
- Accuracy depends on GPS reception — best outdoors, reduced indoors.
- Battery optimization can restrict background location access.

## Usage

GPS data is collected continuously in the background. No participant action is required. The sensor automatically selects the best available location source (GPS, cellular, WiFi) based on conditions.

:::note
GPS data is recorded as raw latitude/longitude coordinates. Coordinates are not hashed or anonymized in the raw data.
:::

## Data

### Fields

| Field | Type | Description |
|-------|------|-------------|
| `latitude` | float | Latitude in degrees |
| `longitude` | float | Longitude in degrees |
| `altitude` | float | Altitude in meters above sea level |
| `accuracy` | float | Accuracy radius in meters (68% confidence). `0.0` means no accuracy could be determined. |

### Example

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

### Cortex Features

[`gps`](/developer/cortex/features/raw-features) (raw) → [`significant_locations`](/developer/cortex/features/primary-features), [`trips`](/developer/cortex/features/primary-features) (primary) → [`hometime`](/developer/cortex/features/secondary-features#mobility), [`entropy`](/developer/cortex/features/secondary-features#mobility), [`trip_distance`](/developer/cortex/features/secondary-features#mobility), [`trip_duration`](/developer/cortex/features/secondary-features#mobility) (secondary)

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
