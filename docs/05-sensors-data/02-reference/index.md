---
sidebar_label: Sensor Reference
title: "Sensor Reference"
description: "Per-sensor documentation — data fields, platform support, sampling behavior, Cortex features, and configuration."
---

# Sensor Reference

Detailed documentation for each sensor available in mindLAMP. Every page covers data fields and JSON schema, platform support, sampling behavior, Cortex features, and configuration options.

Every sensor has a unique **SensorSpec** identifier used in the API and data events. For the general event structure shared by all sensors, see [Sensor Data Format](/sensors-data/data).

## Device Sensors

| Sensor | SensorSpec | Platform | Sampling | Cortex |
|--------|-----------|----------|----------|:------:|
| [GPS](gps) | `lamp.gps` | iOS, Android | Discrete (1 Hz) | [Yes](gps#cortex-features) |
| [Accelerometer](accelerometer) | `lamp.accelerometer` | iOS, Android | Discrete (5 Hz) | [Yes](accelerometer#cortex-features) |
| [Device Motion](device-motion) | `lamp.device_motion` | iOS, Android | Discrete | [Raw only](device-motion#cortex-features) |
| [Device State](device-state) | `lamp.device_state` | iOS, Android | Continuous | [Yes](device-state#cortex-features) |
| [Steps](steps) | `lamp.steps` | iOS, Android | Interval | [Yes](steps#cortex-features) |
| [Nearby Devices](nearby-devices) | `lamp.nearby_device` | iOS, Android | Discrete | [Yes](nearby-devices#cortex-features) |
| [Telephony](telephony) | `lamp.telephony` | iOS, Android | Continuous | [Yes](telephony#cortex-features) |
| [Analytics](analytics) | `lamp.analytics` | iOS, Android, Web | Continuous | [Yes](analytics#cortex-features) |
| [Activity Recognition](activity-recognition) | `lamp.activity_recognition` | iOS, Android | Continuous | — |

## Health Platform Sensors

These sensors read from Apple HealthKit (iOS) or Google Health Connect (Android) and typically require a connected wearable device.

| Sensor | SensorSpec | Cortex |
|--------|-----------|:------:|
| [Sleep](sleep) | `lamp.sleep` | [Yes](sleep#cortex-features) |
| [Heart Rate](heart-rate) | `lamp.heart_rate` | — |
| [Heart Rate Variability](heart-rate-variability) | `lamp.heartratevariability_sdnn` | — |
| [Respiratory Rate](respiratory-rate) | `lamp.respiratory_rate` | — |
| [Blood Pressure](blood-pressure) | `lamp.blood_pressure` | — |
| [Blood Glucose](blood-glucose) | `lamp.blood_glucose` | — |
| [Oxygen Saturation](oxygen-saturation) | `lamp.oxygen_saturation` | — |
| [Body Temperature](body-temperature) | `lamp.body_temperature` | — |
| [Workouts](workouts) | `lamp.segment` | — |
| [Nutrition](nutrition) | `lamp.nutrition` | — |

## iOS SensorKit

On enrolled iOS research devices, Apple's SensorKit framework provides additional data streams — including app usage, phone call metadata, text message metadata, and location visit categories. These are not standard mindLAMP sensors (they have no `lamp.*` SensorSpec) but are consumed by [Cortex](/developer/cortex) as [raw features](/developer/cortex/features/raw-features#sensorkit) and feed into several [secondary features](/developer/cortex/features/secondary-features) (e.g., `screen_unlocks`, `app_time`, `text_number`, `visit_time`). SensorKit requires explicit enrollment approval from Apple.
