---
slug: "/activities/reference/pop-the-bubbles"
sidebar_position: 8
sidebar_label: Pop the Bubbles
title: "Pop the Bubbles"
---

# Pop the Bubbles


A go/no-go attention task where the participant must "pop" target bubbles while ignoring distractor bubbles. Bubbles appear in three colors (pink, blue, yellow), and the rules for which to pop change each level. Higher levels add pattern-based response rules.

**ActivitySpec:** `lamp.pop_the_bubbles`

**Cognitive domain:** Attention, inhibition

## Configuration

| Setting | Description |
|---------|-------------|
| **Level Count** | Number of bubbles shown in levels 1, 2, and 3 |
| **Level Speed** | How fast bubbles appear in each level |
| **Intertrial Duration** | Time in seconds between trials |
| **Bubble Duration** | How long bubbles stay on screen |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type |
|-------------------|-----------|------|
| Level Count | `bubble_count` | number[] (array length = number of levels) |
| Level Speed | `bubble_speed` | number[] (entry speed per level, seconds) |
| Intertrial Duration | `intertrial_duration` | number (seconds, default 0.5) |
| Bubble Duration | `bubble_duration` | number (seconds, default 1.0) |

</details>

### Sample Instructions

*"In this game, you will see lots of different colored bubbles, one at a time. Your task is to 'pop' the correctly colored bubbles, while ignoring the incorrect ones. Pay attention to the instructions for each level to know which colored bubbles you should tap, and which ones you should ignore. Your score is based on the percentage of balloons shown that you correctly tapped, minus the percentage that you incorrectly tapped, with a perfect score being 100%."*

## Usage

Bubbles appear one at a time. The participant must tap target bubbles (go) and avoid distractor bubbles (no-go) based on rules displayed at the start of each level.

### Scoring

Scoring is based on: percentage of bubbles successfully popped, percentage incorrectly missed, percentage correctly ignored, and percentage incorrectly popped.

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/C-rctV4syp0?si=xrQm1Rkzfrgg9a1x" title="Pop the Bubbles gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/pop-the-bubbles-gameplay.png" alt="Pop the Bubbles gameplay" width="280" />
  <img src="/img/cognitive-games/pop-the-bubbles-customization.png" alt="pop the uuubles customization" width="500" />
  <img src="/img/cognitive-games/pop-the-bubbles-scoring.png" alt="Pop the Bubbles scoring" width="280" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Overall score |
| `correct_answers` | number | Correct taps (go targets hit + no-go targets avoided) |
| `wrong_answers` | number | Errors (go targets missed + no-go targets tapped) |
| `total_questions` | number | Total targets presented |
| `point` | number | Score indicator |
| `levels` | array | Per-level breakdown (see below) |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

Each entry in the `levels` array contains:

| Field | Type | Description |
|-------|------|-------------|
| `go_correct` | number | Go targets correctly tapped |
| `go_total` | number | Total go targets |
| `go_missed` | number | Go targets missed |
| `nogo_correct` | number | No-go targets correctly avoided |
| `nogo_total` | number | Total no-go targets |
| `nogo_wrong` | number | No-go targets incorrectly tapped |
| `false_hits` | number | Taps on non-target bubbles |

### temporal_slices

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Bubble index in level |
| `value` | string | Color + trial type (e.g., `"blue go"`, `"red no-go"`, `"green no-go-constant"`) |
| `type` | boolean | `true` = correct response, `false` = incorrect |
| `level` | number | Level number |
| `duration` | number | Reaction time in ms (may be absent if bubble was ignored) |

### Cortex Features

[`pop_the_bubbles`](/developer/cortex/features/raw-features) (raw) → [`game_level_scores`](/developer/cortex/features/primary-features#game-level-scores) (primary) → [`game_results`](/developer/cortex/features/secondary-features#assessment-results) (secondary)

Game results returns average percent correct on no-go trials.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
