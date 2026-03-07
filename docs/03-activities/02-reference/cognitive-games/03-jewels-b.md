---
slug: "/activities/reference/jewels-b"
sidebar_position: 3
sidebar_label: Jewels B
title: "Jewels B"
---

# Jewels B


Jewels B is the alternating variant of the Jewels Trail Making Test. Instead of connecting only numbered jewels, the participant alternates between two differently shaped jewels in ascending order — assessing set-shifting ability in addition to executive function.

**ActivitySpec:** `lamp.jewels_b`

**Cognitive domain:** Executive function, set shifting, visual and motor abilities

## Configuration

1. Navigate to the Activities tab and click **+ Add**.
2. Select **Jewels** and choose the **Trails B** variant.
3. Configure the following settings:

| Setting | Description |
|---------|-------------|
| **Mode** | Difficulty level — Beginner, Intermediate, Advanced, or Expert. Higher difficulty reduces the time limit. Duration can also be set directly. |
| **Initial Diamond Count** | Number of jewels in Level 1 (up to 25) |
| **Initial Shape Count** | Number of shapes beyond the standard count |
| **Bonus points** | Points awarded for each completed level |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type |
|-------------------|-----------|------|
| Mode | `mode` | number (1 = beginner, 4 = expert) |
| Initial Diamond Count | `diamond_count` | number (default 15) |
| Initial Shape Count | `shape_count` | number (default 1) |
| Bonus points | `bonus_point_count` | number (default 50) |
| — | `variant` | string (if `trails_b`, shapes increase) |
| — | `beginner_seconds` | number (time limit) |
| — | `intermediate_seconds` | number (time limit) |
| — | `advanced_seconds` | number (time limit) |
| — | `expert_seconds` | number (time limit) |

</details>

### Sample Instructions

*"Look at the bottom of the screen to see which jewel to collect first. Tap number 1 of that shape, and then number 1 of the second shape. Continue alternating the jewel pattern in chronological order until all of the jewels have been collected."*

## Usage

The participant sees jewels of two different shapes placed randomly on the screen and must tap them in ascending order, alternating between shapes (shape 1 #1, shape 2 #1, shape 1 #2, shape 2 #2, etc.). Each level adds more jewels.

### Scoring

Scoring is out of 100 points, with each incorrect jewel resulting in a deduction of 2 points.

<details>
<summary>References</summary>

1. Soo-Yong Park & Nadja Schott (2021) The trail-making-test: Comparison between paper-and-pencil and computerized versions, Applied Neuropsychology: Adult, DOI: [10.1080/23279095.2020.1864374](https://doi.org/10.1080/23279095.2020.1864374)
2. Chanda Simfukwe et al. (2021) Digital trail making test-black and white: Normal vs MCI, Applied Neuropsychology: Adult, DOI: [10.1080/23279095.2021.1871615](https://doi.org/10.1080/23279095.2021.1871615)
3. Magdalene R. Bracken et al. (2019) Trail Making Test: Comparison of paper-and-pencil and electronic versions, Applied Neuropsychology: Adult, 26:6, DOI: [10.1080/23279095.2018.1460371](https://doi.org/10.1080/23279095.2018.1460371)

</details>

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/qVdbbUZJTgM?si=9L_5l4NkxBSIVxaL" title="Jewels B gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/jewels-gameplay.png" alt="Jewels gameplay" width="280" />
  <img src="/img/cognitive-games/jewels-customization.png" alt="jewels customization" width="500" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `point` | number | `1` = timed out, `2` = voluntarily exited |
| `score` | string | Percentage correct (e.g., `"97.37"`) |
| `total_attempts` | number | Total tap attempts |
| `total_bonus_collected` | number | Accumulated bonus (time remaining − 2 × errors) |
| `total_jewels_collected` | number | Correctly tapped jewels |

### temporal_slices

| Field | Description |
|-------|-------------|
| `item` | Jewel number tapped |
| `type` | `true` = correct, `false` = incorrect |
| `duration` | Time since previous tap (ms) |
| `level` | Trial level |
| `value` | Unused |

### Example

```json
{
  "timestamp": 1650900108188,
  "activity": "jewels_b_activity_id",
  "duration": 180000,
  "static_data": {
    "point": 2,
    "score": "92.10",
    "total_attempts": 80,
    "total_bonus_collected": 200,
    "total_jewels_collected": 72
  },
  "temporal_slices": [
    { "item": 1, "value": null, "type": true, "duration": 0, "level": 1 },
    { "item": 2, "value": null, "type": true, "duration": 2100, "level": 1 }
  ]
}
```

### Cortex Features

[`jewels_b`](/developer/cortex/features/raw-features) (raw) → [`game_level_scores`](/developer/cortex/features/primary-features#game-level-scores) (primary) → [`game_results`](/developer/cortex/features/secondary-features#assessment-results) (secondary)

Game results returns average tap time per level.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)

**See also:** [Jewels A](jewels-a) — the sequential variant
