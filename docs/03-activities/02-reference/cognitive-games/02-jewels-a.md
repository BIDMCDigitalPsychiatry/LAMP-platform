---
slug: "/activities/reference/jewels-a"
sidebar_position: 2
sidebar_label: Jewels A
title: "Jewels A"
---

# Jewels A


Jewels A is based on the Trail Making Test, a standard screening tool for dementia and cognitive assessment. The participant connects numbered jewels in ascending order by tapping them sequentially. Evidence suggests that digital Trail Making Tests reliably assess the same cognitive domains as their pen-and-paper counterparts.

**ActivitySpec:** `lamp.jewels_a`

**Cognitive domain:** Executive function, visual and motor abilities

## Configuration

1. Navigate to the Activities tab and click **+ Add**.
2. Select **Jewels** and choose the **Trails A** variant.
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

*"Tap the jewels in chronological order, starting with number 1."*

## Usage

The participant sees numbered jewels placed randomly on the screen and must tap them in ascending numerical order. Each level adds more jewels. The game continues until time runs out or the participant voluntarily exits.

### Scoring

Scoring is out of 100 points, with each incorrect jewel resulting in a deduction of 2 points.

<details>
<summary>References</summary>

1. Soo-Yong Park & Nadja Schott (2021) The trail-making-test: Comparison between paper-and-pencil and computerized versions in young and healthy older adults, Applied Neuropsychology: Adult, DOI: [10.1080/23279095.2020.1864374](https://doi.org/10.1080/23279095.2020.1864374)
2. Chanda Simfukwe, Young Chul Youn, Sang Yun Kim & Seong Soo An (2021) Digital trail making test-black and white: Normal vs MCI, Applied Neuropsychology: Adult, DOI: [10.1080/23279095.2021.1871615](https://doi.org/10.1080/23279095.2021.1871615)
3. Magdalene R. Bracken, Anya Mazur-Mosiewicz & Kuba Glazek (2019) Trail Making Test: Comparison of paper-and-pencil and electronic versions, Applied Neuropsychology: Adult, 26:6, 522-532, DOI: [10.1080/23279095.2018.1460371](https://doi.org/10.1080/23279095.2018.1460371)
4. Robert P. Fellows, Jessamyn Dahmen, Diane Cook & Maureen Schmitter-Edgecombe (2017) Multicomponent analysis of a digital Trail Making Test, The Clinical Neuropsychologist, 31:1, 154-167, DOI: [10.1080/13854046.2016.1238510](https://doi.org/10.1080/13854046.2016.1238510)

</details>

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/ynDuquI8Kuc?si=CqjuNFC0bJWhiND1" title="Jewels A gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
  "activity": "zezv4mhv2p6v8n60f5dq",
  "duration": 166494,
  "static_data": {
    "point": 2,
    "score": "97.37",
    "total_attempts": 76,
    "total_bonus_collected": 239,
    "total_jewels_collected": 74
  },
  "temporal_slices": [
    { "item": 1, "value": null, "type": true, "duration": 0, "level": 1 },
    { "item": 2, "value": null, "type": true, "duration": 1852, "level": 1 },
    { "item": 3, "value": null, "type": true, "duration": 1211, "level": 1 }
  ]
}
```

### Cortex Features

[`jewels_a`](/developer/cortex/features/raw-features) (raw) → [`game_level_scores`](/developer/cortex/features/primary-features#game-level-scores) (primary) → [`game_results`](/developer/cortex/features/secondary-features#assessment-results) (secondary)

Game results returns average tap time per level.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)

**See also:** [Jewels B](jewels-b) — the alternating variant
