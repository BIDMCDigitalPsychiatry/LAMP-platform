---
sidebar_position: 1
sidebar_label: Usage
title: "Sensor Usage"
description: "Data collection workflow, quality monitoring, and troubleshooting."
---

# Sensor Usage

This page covers how sensor data is collected, quality monitoring, and troubleshooting.

## Two Types of Data

### Background (Passive) Data

Collected automatically by the device without participant action. Includes GPS location, accelerometer readings, device state, step counts, and health platform data. Runs continuously when the app is installed and permissions are granted.

### Participant-Generated (Active) Data

Collected through direct participant interaction — survey responses, cognitive game scores, journal entries, voice recordings. Active data is produced when participants complete [activities](/activities).

## Data Collection Workflow

1. **Configuration** — Researchers configure which sensors are active through the [Sensors tab](/dashboard/sensors-tab).
2. **Permissions** — Participants grant device permissions during setup (see [Download & Setup](/app/getting-started/download)).
3. **Collection** — The app collects sensor data in the background continuously.
4. **Caching** — Data is stored locally on the device, enabling offline collection.
5. **Sync** — Data is transmitted to the mindLAMP server when a network connection is available.
6. **Privacy** — Data is transmitted securely. Access is controlled through the API's credential system.

## Background Collection

For details on how background collection works, offline behavior, and battery considerations, see [Background Collection](/app/getting-started/background-collection).

## Data Quality Monitoring

### Dashboard Indicators

The [Users tab](/dashboard/users-tab) in the dashboard shows color-coded data quality indicators for each participant (green, yellow, red, gray) based on how recently passive data was collected. See [Users Tab — Data Collection Status](/dashboard/users-tab#data-collection-status) for the full threshold definitions.

### Cortex Data Quality Metrics

The [Cortex](/developer/cortex) library provides quantitative data quality features:

[`data_quality`](/developer/cortex/features/secondary-features#data-quality) — Measures data availability as a percentage within configurable time bins. Specify the sensor and `bin_size` in milliseconds to compute the fraction of each bin containing at least one data point.

```python
import cortex

result = cortex.run(
    "U1234567890",
    features=["data_quality"],
    feature_params={
        "data_quality": {
            "feature": "gps",
            "bin_size": 3600000  # 1-hour bins
        }
    },
    start=start_time,
    end=end_time
)
```

### How Data Quality Is Calculated

The Cortex `data_quality` feature divides a time window into fixed-size bins and measures the proportion of bins that contain at least one data point. It supports two sensors, each with a different default bin size:

| Sensor | Default bin size |
|--------|-----------------|
| GPS | 10 minutes (600,000 ms) |
| Accelerometer | 1 second (1,000 ms) |

The `bin_size` parameter can be overridden to any value in milliseconds. A score of 1.0 means every bin had data; 0.0 means none did.

### Key Factors Affecting Data Quality

- **App interaction frequency** — Passive data quality is strongly correlated with active data quality (Spearman's r = 0.94; Calvert et al., 2026). Modern operating systems (iOS 15+, Android 12+) restrict background processes for apps not regularly used. Daily app interaction — such as completing a survey — helps keep the app in active status and prevents OS suspension of background data collection.
- **Data quality degrades within ~3 days** without app interaction, as background processes are progressively throttled by the operating system (Currey & Torous, 2023).
- **Low Power Mode** is the most common resolvable cause of poor data quality (Calvert et al., 2026).

## Troubleshooting

:::tip Quick Check
Before investigating data quality issues:
1. **Permissions** — Verify all required permissions are granted (Location "Always", Motion & Fitness, Health data).
2. **Battery optimization** — Confirm mindLAMP is exempt from battery saver / Low Power Mode.
3. **App status** — Check that the app has not been force-quit or uninstalled.
4. **Connectivity** — Ensure the device has WiFi or cellular data for syncing.
:::

### Common Causes

| Issue | Likely Cause | Solution |
|---|---|---|
| No data at all | Permissions not granted | Check [Download & Setup](/app/getting-started/download) |
| Intermittent gaps | App force-quit or battery optimization | Ensure mindLAMP is exempt from battery optimization |
| Reduced frequency | Low Power Mode active | Disable Low Power / Battery Saver |
| Data stops after a few days | OS restricted background processes | Follow device-specific guidance at [dontkillmyapp.com](https://dontkillmyapp.com/) |

### iOS

- Are all relevant permissions granted for mindLAMP 2 in the Settings app?
- Is Low Power Mode turned off?
- Is Airplane Mode turned off?
- Is the device connected to WiFi or cellular data?
- Is the device powered on at all times?
- Has the app been force-quit by swiping it away?

### Android

- Is Battery Saver mode disabled (including automatic schedules)?
- Is Airplane Mode turned off?
- Are all relevant permissions granted?
- Is the device connected to WiFi or cellular data?

Some Android manufacturers aggressively restrict background processes. For Samsung, OnePlus, Huawei, and Xiaomi devices, visit [Don't Kill My App](https://dontkillmyapp.com/) for device-specific recommendations.

## Battery Impact

Higher sampling rates produce more data but consume more battery. The default configured rates are 5 Hz for the accelerometer and 1 Hz for GPS. In practice, mobile operating systems throttle background GPS delivery — the effective rate is often significantly lower than 1 Hz, particularly when the app is not in the foreground. Rates can be adjusted via the API.

## References

- Calvert, E., Lane, E., Flathers, M., & Torous, J. (2026). LINC: a framework for maintaining high-quality passive data in digital phenotyping studies. *Scientific Reports*. https://www.nature.com/articles/s41598-026-41435-0
- Currey, D., & Torous, J. (2023). Increasing the value of digital phenotyping through reducing missingness: a retrospective review and analysis of prior studies. *BMJ Mental Health*, 26(1), e300718. https://doi.org/10.1136/bmjment-2023-300718
