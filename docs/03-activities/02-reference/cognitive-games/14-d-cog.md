---
slug: "/activities/reference/d-cog"
sidebar_position: 14
sidebar_label: D-Cog
title: "D-Cog"
---

# D-Cog


Similar to Cats and Dogs, D-Cog presents an array of boxes that briefly reveal their contents — the participant must select boxes with dogs behind them. If all correct, the next level adds 2 more boxes and 1 more dog; if incorrect, the next level has 2 fewer boxes and 1 less dog. The number of boxes caps at 10, and the game lasts no longer than 2 minutes. Similar to the iBOCA3 counterpart. The game uses a 2-parameter logistic IRT (Item Response Theory) model for scoring, providing an ability estimate on a 0-10 scale rather than a simple percentage.

**ActivitySpec:** `lamp.dcog`

**Cognitive domain:** Visual and working memory, attention, response control, set-shifting

## Configuration

The game automatically progresses as levels are completed. No researcher-defined customization is necessary.

### Sample Instructions

*"When the squares turn white, tap where the dogs were."*

## Usage

The participant sees an array of boxes. The boxes briefly reveal their contents (dogs, cats, or nothing) for 2 seconds, then return to their closed state. The participant must tap the boxes where dogs were hidden. No-response rounds are not counted as successes. Difficulty adapts based on performance.

### Scoring

Scoring is based on the number of dogs remembered correctly across trials.

<details>
<summary>References</summary>

1. Weil, R. S. et al. (2017) The cats-and-dogs test: a tool to identify visuoperceptual deficits in Parkinson's disease. Movement Disorders, 32(12), 1789-1790. DOI: [10.1002/mds.27176](https://doi.org/10.1002/mds.27176)

</details>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/dcog-gameplay.png" alt="D-Cog gameplay" width="500" />
  <img src="/img/cognitive-games/dcog-end-screen.png" alt="D-Cog end screen" width="280" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `correct_answers` | number | Correct taps |
| `wrong_answers` | number | Incorrect taps |
| `total_questions` | number | Total dogs shown |
| `score` | number | IRT-based ability estimate (0-10 scale) |
| `point` | number | `2` if score = 100, else `1` |
| `is_favorite` | boolean | Whether the participant favorited this activity |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Box number tapped |
| `value` | null | Unused |
| `type` | boolean | `true` = correct, `false` = incorrect |
| `duration` | number | Time since last tap (ms) |
| `level` | number | Number of dogs on screen (difficulty level) |

### Cortex Features

[`dcog`](/developer/cortex/features/raw-features) (raw). No primary or secondary Cortex features currently process D-Cog data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
