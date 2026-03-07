---
sidebar_position: 3
sidebar_label: Raw Features
title: "Raw Features"
description: "Raw feature modules for direct sensor and activity data."
---

# Raw Features

Raw features are direct representations of sensor and activity data as collected by the mindLAMP platform. They form the base layer of Cortex's three-tier pipeline.

## What Raw Features Do

Raw features query the LAMP API and normalize low-level data streams into a consistent format for downstream computation. They handle iOS/Android differences automatically — see the [Features overview](../index.mdx) for details on the full pipeline.

## Complete Raw Feature List

### Sensor Raw Features (11)

| Raw Feature | Source Sensor | Consumed By | Description |
|-------------|--------------|-------------|-------------|
| `gps` | [`lamp.gps`](/sensors-data/reference/gps) | [`significant_locations`](../primary-features#significant-locations), [`trips`](../primary-features#trips), [`data_quality`](../secondary-features#data-quality) | Latitude, longitude, altitude, accuracy |
| `accelerometer` | [`lamp.accelerometer`](/sensors-data/reference/accelerometer) | [`acc_jerk`](../primary-features#accelerometer-jerk), [`data_quality`](../secondary-features#data-quality) | x, y, z acceleration (g) |
| `device_motion` | [`lamp.device_motion`](/sensors-data/reference/device-motion) | — | Rotation, gravity, magnetic field, attitude |
| `device_state` | [`lamp.device_state`](/sensors-data/reference/device-state) | [`screen_active`](../primary-features#screen-active), [`battery_level`](../secondary-features#device-usage) | Screen on/off, battery level |
| `steps` | [`lamp.steps`](/sensors-data/reference/steps) | [`step_count`](../secondary-features#activity) | Step count and type |
| `nearby_device` | [`lamp.nearby_device`](/sensors-data/reference/nearby-devices) | [`nearby_device_count`](../secondary-features#activity) | Bluetooth/WiFi detections |
| `telephony` | [`lamp.telephony`](/sensors-data/reference/telephony) | [`call_number`](../secondary-features#communication), [`call_duration`](../secondary-features#communication), [`call_degree`](../secondary-features#communication) | Call metadata |
| `analytics` | [`lamp.analytics`](/sensors-data/reference/analytics) | [`step_count`](../secondary-features#activity) (version detection), [`app_time`](../secondary-features#device-usage) | App usage events |
| `sleep` | [`lamp.sleep`](/sensors-data/reference/sleep) | [`healthkit_sleep_duration`](../secondary-features#health) | Sleep stage data |
| `screen_state` | `lamp.screen_state` (deprecated) | [`inactive_duration`](../secondary-features#device-usage) | Legacy screen state events |
| `ambient_light` | — | — | Ambient light sensor (limited availability) |

### SensorKit Raw Features (5) {#sensorkit}

These features require iOS SensorKit data, available only on enrolled research devices.

| Raw Feature | Description | Consumed By |
|-------------|-------------|-------------|
| `device_usage` | Screen time, unlock events, app usage | `screen_unlocks`, `screen_unlock_duration`, `screen_wakes`, `app_time` |
| `phone_usage` | Phone call metadata (SensorKit source) | `call_number`, `call_duration`, `call_degree` (SensorKit mode) |
| `messages_usage` | Text message metadata | `text_number`, `text_degree` |
| `visits` | Location visit data with categories | `visit_time` |

### Activity Raw Features (13)

| Raw Feature | Source Activity | Consumed By | Description |
|-------------|----------------|-------------|-------------|
| `survey` | [`lamp.survey`](/activities/reference/surveys) | [`survey_scores`](../primary-features#survey-scores) | Question-level survey responses |
| `jewels_a` | [`lamp.jewels_a`](/activities/reference/jewels-a) | [`game_level_scores`](../primary-features#game-level-scores) | Jewels A game events |
| `jewels_b` | [`lamp.jewels_b`](/activities/reference/jewels-b) | [`game_level_scores`](../primary-features#game-level-scores) | Jewels B game events |
| `balloon_risk` | [`lamp.balloon_risk`](/activities/reference/balloon-risk) | [`game_level_scores`](../primary-features#game-level-scores) | Balloon Risk events |
| `cats_and_dogs` | [`lamp.cats_and_dogs`](/activities/reference/cats-and-dogs) | [`game_level_scores`](../primary-features#game-level-scores) | Cats and Dogs events |
| `pop_the_bubbles` | [`lamp.pop_the_bubbles`](/activities/reference/pop-the-bubbles) | [`game_level_scores`](../primary-features#game-level-scores) | Pop The Bubbles events |
| `spatial_span` | [`lamp.spatial_span`](/activities/reference/spatial-span) | [`game_level_scores`](../primary-features#game-level-scores) | Spatial Span events |
| `dcog` | [`lamp.dcog`](/activities/reference/d-cog) | — | D-Cog events |
| `digit_span` | [`lamp.digit_span`](/activities/reference/digit-span) | — | Digit Span events |
| `fragmented_letters` | [`lamp.fragmented_letters`](/activities/reference/fragmented-letters) | — | Fragmented Letters events |
| `funny_memory` | [`lamp.funny_memory`](/activities/reference/funny-memory) | — | Funny Memory events |
| `trails_b` | [`lamp.trails_b`](/activities/reference/trails-b) | — | Trails B events |
| `voice_survey` | [`lamp.recording`](/activities/reference/voice-recording) | — | Voice recording audio data |

### Legacy Raw Features {#legacy}

The following raw features correspond to deprecated sensors. They remain in Cortex for backward compatibility with older data. For the full deprecated sensor migration guide, see [Deprecated Sensors](/sensors-data/data#deprecated-sensors).

| Raw Feature | Deprecated Sensor | Replaced By |
|-------------|-------------------|-------------|
| `bluetooth` | `lamp.bluetooth` | `nearby_device` |
| `calls` | `lamp.calls` | `telephony` |
| `sms` | `lamp.sms` | `telephony` |
| `gyroscope` | `lamp.gyroscope` | `device_motion` |

## Usage

Raw features are typically not called directly — they are consumed by primary and secondary features automatically through Cortex's dependency graph. However, they can be accessed directly for custom analysis:

```python
import cortex

# Access raw GPS data
gps_data = cortex.raw.gps(id="U1234567890", start=start_time, end=end_time)

# Access raw survey data
survey_data = cortex.raw.survey(id="U1234567890", start=start_time, end=end_time)
```

## Output Structure

All raw features return a consistent structure:

```python
{
    "data": [ ... ],        # List of sensor/activity event records
    "has_raw_data": 1       # 1 if data exists, 0 if no data found
}
```

The `has_raw_data` flag distinguishes between "no data was collected" (0) and "data was collected but may be empty after filtering" (1).
