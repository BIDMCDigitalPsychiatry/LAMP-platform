---
slug: "/dashboard/sensors-tab"
sidebar_position: 3
sidebar_label: Sensors Tab
title: "Sensors Tab"
description: "Enable passive data collection sensors and configure sampling parameters."
---

# Sensors Tab

The Sensors tab allows researchers and clinicians to configure which passive sensors are active for their study groups.

![The Sensors tab showing sensor cards with name, type, group, and edit icons](../assets/sensors_tab_overview.png)

## Adding a Sensor

1. Navigate to the **Sensors** tab.
2. Click the blue **+ Add** button.
3. Select the group you want to add the sensor to.
4. Name your sensor (e.g., "GPS", "Accelerometer").
5. Select the sensor spec from the dropdown (e.g., `lamp.gps`, `lamp.accelerometer`).
6. Click **Add** to save.

![Add Sensor dialog with Group, Name, and Sensor spec fields](../assets/sensors_add_dialog.png)

The Sensor spec dropdown lists all available sensor types:

![Sensor spec dropdown showing all available sensor types](../assets/sensors_spec_list.png)

## Available Sensors

Sensors added through this tab correspond to the device sensors and health data types available on participants' devices. See [Sensors & Passive Data](/sensors-data) for the complete list of available sensor specs and their data fields.

## Sensor List

Each sensor entry shows:

- **Name** — The display name you assigned.
- **Group** — Which group the sensor belongs to.

## Sampling Rates

Sampling rates (how frequently a sensor collects data) are configurable but are set through the API rather than the dashboard UI. See [Sensor Configuration](/sensors-data/configuration#default-sampling-rates) for default rates, maximum values, and guidance on balancing sampling frequency with battery impact.

## Deleting a Sensor

Select a sensor by checking its box to reveal the **Delete** action. This stops data collection for that sensor type across the group. Previously collected data is not deleted.

![Selected sensor with Delete action bar](../assets/sensors_selected_actions.png)
