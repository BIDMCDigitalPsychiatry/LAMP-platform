---
sidebar_position: 2
sidebar_label: Configuration
title: "Sensor Configuration"
description: "Sampling types, rates, permissions, wearable setup, and health platform integration."
---

# Sensor Configuration

This page covers configuration options that apply across all sensor types, including sampling, permissions, wearable setup, and health platform integration.

## Enabling Sensors

Sensors are enabled and configured through the [Sensors tab](/dashboard/sensors-tab) in the dashboard, or programmatically via the API.

## Sampling Types

- **Continuous** — All data is collected and uploaded with a timestamp equal to the moment it occurred. No configurable frequency.
- **Discrete** — Data is sampled every *n* seconds as defined by a configurable `frequency` parameter.
- **Interval** — Data over *n* minutes is compiled into a single report describing events in that span.

## Default Sampling Rates

- **Accelerometer** — 5 Hz (5 samples per second). Configurable via the `frequency` setting.
- **GPS** — 1 Hz (1 sample per second). Configurable via the `frequency` setting. In practice, mobile operating systems throttle background GPS delivery, so the effective rate is often lower than the configured rate — particularly when the app is not in the foreground.

Both rates can be adjusted at the sensor spec level through the API. The [Sensors tab](/dashboard/sensors-tab) enables or disables sensors but does not expose rate configuration.

## Platform Capability Matrix

Not all sensors are available on all platforms:

| Capability | iOS | Android | Web |
|---|---|---|---|
| GPS | Yes | Yes | No |
| Accelerometer | Yes | Yes | No |
| Device Motion | Yes | Yes | No |
| Device State | Yes | Yes | No |
| Steps | Yes | Yes | No |
| Nearby Devices | Yes | Yes | No |
| Telephony | Yes | Yes | No |
| Activity Recognition | Yes | Yes | No |
| HealthKit / Health Connect | Yes | Yes | No |
| Push Notifications | Yes | Yes | No |
| Surveys & Games | Yes | Yes | Yes |
| Dashboard Access | Yes | Yes | Yes |

The web version supports active data collection (surveys, games) and dashboard access but does not support passive sensor data.

## Permissions

Participants must grant device permissions when they first sign in to the app. Required permissions vary by sensor — see [Download & Setup](/app/getting-started/download) for the complete permission list by platform.

Key permissions:
- **Location "Always"** — Required for GPS data collection in the background.
- **Motion & Fitness** — Required for accelerometer and activity recognition.
- **Health data** — Required for HealthKit (iOS) or Health Connect (Android) integration.

## Wearable Device Support

mindLAMP supports data collection from several wearable platforms through health platform integration.

### Supported Wearables

**Apple Watch**
- Requirements: watchOS 7+
- Pairing: Pair with iPhone via the Watch app, then download mindLAMP from the App Store on the Watch and sign in.
- Data: Heart rate, HRV, sleep, workouts, respiratory rate, blood oxygen, and more (via HealthKit).

**WearOS**
- Requirements: WearOS 3+ (Android 11+)
- Compatible brands: Samsung Galaxy Watch 4+, Fossil, TicWatch, Motorola, Huawei.
- Pairing: Pair with Android phone via the Wear app, then download mindLAMP from the Play Store on the watch and sign in.
- Data: Heart rate, sleep, workouts, and other Health Connect-compatible data.

**Fitbit**
- Integration: Indirect, through Google Health Connect. Fitbit data synced to Health Connect is accessible to mindLAMP on Android.
- No separate mindLAMP app on the Fitbit device.

**Oura Ring**
- Integration: Indirect, through health platform integration. Oura data synced to HealthKit (iOS) or Health Connect (Android) is accessible to mindLAMP.
- No separate mindLAMP app on the Oura Ring.

### How Wearable Integration Works

mindLAMP does not connect directly to wearable devices. Instead:

1. The wearable syncs data to the phone's health platform (HealthKit or Health Connect).
2. mindLAMP reads from the health platform.
3. Data is transmitted to the mindLAMP server.

Any wearable that writes data to HealthKit or Health Connect can potentially provide data to mindLAMP, even if not explicitly listed above.

### Setup Checklist

1. Pair the wearable with the participant's phone.
2. Ensure health data is syncing to HealthKit / Health Connect.
3. Grant mindLAMP permissions to read health data (see [Download & Setup](/app/getting-started/download)).
4. For Apple Watch and WearOS: install and sign in to mindLAMP on the watch for direct accelerometer and sensor collection from the wrist.

## Health Platform Integration

mindLAMP integrates with Apple HealthKit (iOS) and Google Health Connect (Android) to access health data from the device and connected wearables.

### How It Works

Health platform data is **not** collected directly by mindLAMP. Instead:

1. A wearable or the phone's built-in sensors record health data.
2. The data is stored in the device's health platform.
3. mindLAMP reads from the health platform and syncs to the server.

### iOS (HealthKit)

mindLAMP requests read access to HealthKit data categories. Participants must grant permissions during setup. HealthKit can contain data from Apple Watch, iPhone built-in sensors, and third-party apps.

### Android (Health Connect)

mindLAMP reads from Health Connect. Participants must grant permissions. Health Connect can contain data from WearOS watches, Fitbit (via Google integration), phone sensors, and third-party fitness apps.

### What's Available Without a Wearable

Without a dedicated wearable device, the phone itself provides:
- **Steps** — From the phone's built-in pedometer ([`lamp.steps`](/sensors-data/reference/steps)).
- **Activity Recognition** — Basic activity classification from the phone's sensors ([`lamp.activity_recognition`](/sensors-data/reference/activity-recognition)).

Most health data types (heart rate, sleep, blood glucose, etc.) require a connected wearable.
