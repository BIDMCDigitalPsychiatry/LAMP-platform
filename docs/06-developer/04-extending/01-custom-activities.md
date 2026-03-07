---
sidebar_position: 1
sidebar_label: Custom Activities
title: "Custom Activities"
description: "Build new activities using HTML and JavaScript that run within the app."
---

# Custom Activities

mindLAMP supports custom activities built with HTML and JavaScript. Custom activities run within the app's embedded browser and collect structured data through the standard activity event API.

## How It Works

1. Write your activity as an HTML page with JavaScript logic.
2. The activity is loaded in an embedded web view within the mindLAMP app.
3. Your JavaScript code interacts with the LAMP activity API to submit results.
4. Results are stored as standard activity events, queryable through the API like any other activity data.

## Requirements

- The activity must be written in HTML and JavaScript (no required framework or structure).
- The activity communicates results back to the app using the JavaScript activity API.

## Creating a Custom Activity

1. Build your HTML/JavaScript activity.
2. Host the activity file or embed it directly.
3. In the dashboard, create a new activity and select the custom activity option.
4. Configure the activity URL or embedded content.
5. The activity will appear on the configured tab(s) in the participant's app.

## Data Collection

Custom activities submit data through the same `temporal_slices` format as built-in activities. Each interaction or response is recorded with a timestamp, value, and type. This data appears in the participant's activity events and can be analyzed through the API, Python SDK, or Cortex.

## Use Cases

- Research-specific assessment tasks not covered by built-in activity types
- Gamified interventions
- Interactive educational content
- Custom data collection instruments
