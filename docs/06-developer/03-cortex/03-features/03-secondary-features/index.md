---
sidebar_position: 5
sidebar_label: Secondary Features
title: "Secondary Features"
description: "Secondary feature modules organized by category."
---

# Secondary Features

Secondary features are higher-order digital phenotyping insights computed from primary features and raw data. They produce a single value per time window (e.g., one value per day). They are organized into the following categories.

## Output Structure

Secondary features return a time-series of values:

```python
{"timestamp": 1638248400000, "value": 14.5}
```

Periods with no raw data return `None` for the value.

---

## Device Usage (7 features) {#device-usage}

| Feature | Dependency | Output | Description |
|---------|-----------|--------|-------------|
| `screen_duration` | [`screen_active`](../primary-features#screen-active) (primary) | duration (ms) | Total screen-on time. Sums all `screen_active` bouts. |
| `screen_unlocks` | `device_usage` (SensorKit) | count | Number of screen unlock events. |
| `screen_unlock_duration` | `device_usage` (SensorKit) | duration (ms) | Total time screen was unlocked. |
| `screen_wakes` | `device_usage` (SensorKit) | count | Number of screen wake events. |
| `inactive_duration` | [`acc_jerk`](../primary-features#accelerometer-jerk) + [`screen_active`](../primary-features#screen-active) | duration (ms) | Longest continuous inactive period — intersection of zero accelerometer jerk AND screen off. Uses a 10-second gap threshold for merging inactive bouts. |
| `battery_level` | `device_state` ([raw](../raw-features)) | float (%) | Mean battery level across the time window. |
| `app_time` | `device_usage` (SensorKit) | duration (ms) | Total app usage time. Accepts a `category` parameter (e.g., `"social"`, `"health"`, `"all"`). Supports 27 app categories. |

:::note
`screen_unlocks`, `screen_unlock_duration`, `screen_wakes`, and `app_time` depend on iOS SensorKit data (`device_usage`). These features require enrollment in an Apple-approved research study. For non-SensorKit deployments, use `screen_duration` (which uses standard `device_state` data) for screen usage analysis.
:::

---

## Mobility (5 features) {#mobility}

| Feature | Dependency | Output | Description |
|---------|-----------|--------|-------------|
| `hometime` | [`significant_locations`](../primary-features#significant-locations) (primary) | duration (ms) | Time spent at the most-visited location (rank 0, typically home). |
| `entropy` | [`significant_locations`](../primary-features#significant-locations) (primary) | float | Location entropy — calculated as −Σ(p × log(p)) for each location's visit proportion. Higher entropy = more diverse movement. |
| `trip_distance` | [`trips`](../primary-features#trips) (primary) | distance (km) | Total distance traveled across all trips. Uses Haversine formula. |
| `trip_duration` | [`trips`](../primary-features#trips) (primary) | duration (ms) | Total time spent traveling (sum of trip durations). |
| `visit_time` | `visits` (SensorKit) | duration (ms) | Time spent at a specified location category. **Required parameter:** `category` — one of `"gym"`, `"home"`, `"school"`, `"work"`, `"other"`. |

**Sensor requirements:** `hometime`, `entropy`, `trip_distance`, and `trip_duration` require [`lamp.gps`](/sensors-data/reference/gps) to be enabled. `visit_time` requires iOS SensorKit.

---

## Communication (5 features) {#communication}

| Feature | Dependency | Output | Description |
|---------|-----------|--------|-------------|
| `call_number` | `telephony` or `phone_usage` (SensorKit) | count | Total number of calls. |
| `call_duration` | `telephony` or `phone_usage` (SensorKit) | duration (ms) | Total call duration. |
| `call_degree` | `telephony` or `phone_usage` (SensorKit) | count | Number of unique contacts called. |
| `text_number` | `messages_usage` (SensorKit) | count | Total number of text messages. |
| `text_degree` | `messages_usage` (SensorKit) | count | Number of unique contacts texted. |

**Common parameters for call features:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `sensor` | string | `"Telephony"` | Data source: `"Telephony"` (standard) or `"SensorKit"` |
| `call_direction` | string | `"all"` | Filter: `"all"`, `"incoming"`, or `"outgoing"` |

**Parameters for text features:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `text_direction` | string | `"all"` | Filter: `"all"`, `"incoming"`, or `"outgoing"` (text_number only) |

**Sensor requirements:** `call_number`, `call_duration`, and `call_degree` work with standard [`lamp.telephony`](/sensors-data/reference/telephony) data. `text_number` and `text_degree` require iOS SensorKit (`messages_usage`).

---

## Activity (2 features) {#activity}

| Feature | Dependency | Output | Description |
|---------|-----------|--------|-------------|
| `step_count` | `steps` + `analytics` (raw) | count | Total step count from the specified source. |
| `nearby_device_count` | `nearby_device` (raw) | count | Number of unique Bluetooth devices detected (filters by `type="bluetooth"`, counts unique addresses). |

**`step_count` parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `data_type` | string | `"health"` | Source: `"health"` (HealthKit/Health Connect), `"pedometer"` (device pedometer), or `"watch"` (wearable) |

**Sensor requirements:** `step_count` requires [`lamp.steps`](/sensors-data/reference/steps). `nearby_device_count` requires [`lamp.nearby_device`](/sensors-data/reference/nearby-devices).

---

## Health (1 feature) {#health}

| Feature | Dependency | Output | Description |
|---------|-----------|--------|-------------|
| `healthkit_sleep_duration` | `sleep` (raw) | duration (ms) | Sleep duration from HealthKit/Health Connect data. Deduplicates by timestamp. |

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `duration_type` | string | `"in_bed"` | Sleep state: `"in_bed"`, `"in_sleep"`, or `"in_awake"` |

**Sensor requirements:** Requires [`lamp.sleep`](/sensors-data/reference/sleep) data, typically from a connected wearable.

---

## Assessment Results (2 features) {#assessment-results}

| Feature | Dependency | Output | Description |
|---------|-----------|--------|-------------|
| `survey_results` | [`survey_scores`](../primary-features#survey-scores) (primary) | float | Mean score for a specified question or category across all surveys in the window. |
| `game_results` | [`game_level_scores`](../primary-features#game-level-scores) (primary) | float | Average game-specific score across sessions in the window. |

**`survey_results` parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `question_or_category` | string | **Required.** The survey question text or category label to aggregate. |

**`game_results` parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name_of_game` | string | **Required.** Game name. Score computation varies by game: |

| Game | Score Metric |
|------|-------------|
| `cats_and_dogs`, `spatial_span`, `jewels_a`, `jewels_b` | Average tap time (ms) |
| `balloon_risk` | Average number of pumps |
| `pop_the_bubbles` | Average percent correct on no-go trials |

---

## Data Quality (1 feature) {#data-quality}

| Feature | Dependency | Output | Description |
|---------|-----------|--------|-------------|
| `data_quality` | `accelerometer` or `gps` (raw) | float (0–1) | Percentage of time bins containing at least one data point. |

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `feature` | string | — | **Required.** Sensor to assess: `"accelerometer"` or `"gps"` |
| `bin_size` | int | varies | Bin size in ms. Default: 1000 ms for accelerometer, 600000 ms (10 min) for GPS. Set to -1 for defaults. |

```python
result = cortex.run(
    "U1234567890",
    features=["data_quality"],
    feature_params={
        "data_quality": {
            "feature": "gps",
            "bin_size": 3600000  # 1-hour bins
        }
    }
)
```

Returns a value from 0.0 (no data) to 1.0 (complete coverage). Compare against expected coverage to identify data collection gaps.

:::note Why the GPS default bin is 10 minutes, not 1 second
Although the app requests GPS at 1 Hz, mobile operating systems throttle background location delivery — actual data arrives at roughly 0.1 Hz or less. The 10-minute bin (600,000 ms) measures whether *any* GPS data was received in each 10-minute window, which aligns with what background collection realistically delivers. A 1.0 score means every 10-minute window in the day had at least one GPS reading; below 0.50, GPS-derived features like home time and entropy become unreliable (Calvert et al., 2026).
:::

See also: [Data Quality monitoring guide](/sensors-data/usage).

---

## Usage

```python
import cortex

# Compute multiple secondary features
result = cortex.run(
    "U1234567890",
    features=["hometime", "screen_duration", "step_count", "entropy"],
    start=start_time,
    end=end_time,
    resolution=86400000  # Daily
)

# Access individual feature results
hometime_df = result["hometime"]
```

## Common Analysis Patterns

Features that are typically used together for specific analyses:

- **Mobility profile:** `hometime` + `entropy` + `trip_distance` + `trip_duration` — characterizes overall movement patterns and home/away behavior.
- **Device engagement:** `screen_duration` + `inactive_duration` + `step_count` — combines screen usage with physical activity indicators.
- **Communication:** `call_number` + `call_degree` + `text_number` + `text_degree` — measures social interaction volume and network diversity.

## Deprecated Features

The following features have been replaced:
- `sms_number` — Replaced by `text_number` (SensorKit).
- `bluetooth_device_count` — Replaced by `nearby_device_count`.
- `sleep_duration` (accelerometer-based) — Replaced by `healthkit_sleep_duration`.
