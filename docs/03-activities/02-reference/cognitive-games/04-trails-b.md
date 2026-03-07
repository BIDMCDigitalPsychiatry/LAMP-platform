---
slug: "/activities/reference/trails-b"
sidebar_position: 4
sidebar_label: Trails B
title: "Trails B"
---

# Trails B


Trails B is a digital adaptation of Part B of the Trail Making Test. The participant selects dots containing numbers and letters in ascending order, alternating between numbers and letters (1-A-2-B-3-C...). Unlike the paper-and-pencil version, participants tap each dot discretely rather than drawing a continuous line.

**ActivitySpec:** `lamp.trails_b`

**Cognitive domain:** Frontoexecutive function

## Configuration

1. Navigate to the Activities tab and click **+ Add**.
2. Select **Trails B**.
3. Configure the following settings:

| Setting | Description |
|---------|-------------|
| **Number of dots for Level 1** | 10 or 12 |
| **Timeout period for Level 1** | Time limit in seconds |
| **Number of dots for Level 2** | 20 or 24 |
| **Timeout period for Level 2** | Time limit in seconds |

### Sample Instructions

*"For this game, you will alternate between tapping on numbers and letters in increasing order: for instance, 1-A-2-B etc."*

## Usage

The participant sees an array of dots containing numbers and letters and must tap them in the correct alternating sequence. The game progresses through two levels with increasing dot counts.

### Scoring

Scoring is based on the accuracy with which the user taps out each sequence.

<details>
<summary>References</summary>

1. Army Individual Test Battery (1984)

</details>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/trails-b-gameplay.png" alt="Trails B gameplay" width="280" />
  <img src="/img/cognitive-games/trails-b-customization.png" alt="Trails B customization" width="500" />
</div>

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: '1rem'}}>
  <img src="/img/cognitive-games/trails-b-smarta-1.png" alt="Trails B phase 1" width="280" />
  <img src="/img/cognitive-games/trails-b-smarta-2.png" alt="Trails B phase 2" width="280" />
  <img src="/img/cognitive-games/trails-b-smarta-3.png" alt="Trails B phase 3" width="280" />
  <img src="/img/cognitive-games/trails-b-smarta-4.png" alt="Trails B phase 4" width="280" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `point` | number | Point value |
| `rating` | number | Session rating |
| `score` | number | Computed score |
| `total_attempts` | number | Total attempts |

### Cortex Features

[`trails_b`](/developer/cortex/features/raw-features) (raw). No primary or secondary Cortex features currently process Trails B data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
