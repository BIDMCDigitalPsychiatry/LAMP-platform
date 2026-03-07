---
sidebar_position: 3
sidebar_label: Background Collection
title: "Background Data Collection"
description: "How the app collects data in the background, offline behavior, battery impact, and guidelines."
---

# Background Data Collection

mindLAMP collects sensor data continuously in the background on mobile devices:

1. **Collection** — The app collects sensor readings (GPS, accelerometer, device state, etc.) according to configured sampling rates.
2. **Local caching** — Data is stored locally on the device before being uploaded. Data is not lost if the device temporarily loses internet connectivity.
3. **Sync** — Cached data is periodically transmitted to the mindLAMP server when a network connection is available.
4. **Privacy** — Data is transmitted securely to the mindLAMP server. Access is controlled through the API's credential system.

## Important Guidelines

- **Open the app regularly** — Modern operating systems (iOS 15+, Android 12+) restrict background processes for apps that are not regularly used. Opening the app at least once per day — for example, to complete a survey — keeps it in active status and prevents the OS from suspending background data collection. Data quality degrades significantly after approximately 3 days without app interaction (Currey & Torous, 2023).
- **Do not force-quit the app** by swiping it away from the app switcher — this stops all background data collection. If you accidentally force-quit, reopen the app to resume. There will be a gap in data for the period the app was not running.
- **Do not enable Low Power Mode / Battery Saver** — This is the most common resolvable cause of poor passive data quality (Calvert et al., 2026). Low Power Mode restricts background processes including GPS and accelerometer collection. Keep the device charged regularly to avoid the device entering Low Power Mode automatically. See [Download & Setup](download) for device-specific battery settings.
- **Offline collection** — The app continues collecting data even when the device is offline. Sensor readings are cached locally and uploaded when connectivity is restored.
- **Battery impact** — Background data collection does consume battery. The impact depends on which sensors are enabled and their sampling rates.
- **Low-power proxy mode** — mindLAMP supports a [low-power proxy mode](/developer/architecture/low-power) that reduces battery and bandwidth consumption by batching data transmissions at longer intervals (configured at the server level).
- **Checking data collection status** — From the dashboard, coordinators can monitor whether a participant's device is actively collecting data by checking the data quality indicators on the Users tab. See [The Dashboard](/dashboard) for details.

If passive data is not appearing as expected, see [Data Quality](/sensors-data/usage) for troubleshooting steps.
