---
slug: "/activities/reference/breathe"
sidebar_position: 6
sidebar_label: Breathe
title: "Breathe"
---

# Breathe

![Breathe exercise interface](/img/experience/breathe.png)

A guided breathing and meditation exercise with a visual breathing animation, appearing in the Manage tab.

**ActivitySpec:** `lamp.breathe`

## Configuration

1. Navigate to the Activities tab and click **+ Add**.
2. Select **Breathe** (or Mindfulness).
3. Optionally upload a custom audio file or provide a URL to an audio resource.
4. Save.

If no audio is provided, the exercise uses the visual breathing guide only.

## Usage

The participant follows a visual breathing animation. If audio is configured, it plays during the exercise. The participant can end the session at any time.

## Data

```json
{
  "timestamp": 1649859300000,
  "activity": "breathe_activity_id",
  "duration": 300000,
  "static_data": {},
  "temporal_slices": []
}
```

| Field | Description |
|-------|-------------|
| `duration` | Total time spent in the breathing exercise (ms) |
| `static_data` | Always empty (`{}`) |
| `temporal_slices` | Always an empty array |

### Cortex Features

No Cortex features currently process Breathe data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
