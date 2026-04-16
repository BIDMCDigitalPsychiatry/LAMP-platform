---
slug: "/activities/reference/simple-rt"
sidebar_position: 18
sidebar_label: Simple & Choice RT
title: "Simple & Choice Reaction Time"
---

# Simple & Choice Reaction Time

The Simple and Choice Reaction Time task combines the two most fundamental paradigms in experimental psychology. Simple RT (Donders, 1868) isolates psychomotor processing speed, while Choice RT adds stimulus-response mapping. The difference between the two provides a pure estimate of decision time.

**ActivitySpec:** `lamp.simple_rt`

**Cognitive domain:** Processing speed, psychomotor speed, decision time

## Configuration

| Setting | Description |
|---------|-------------|
| **Simple Trials** | Number of simple RT trials |
| **Choice Trials** | Number of choice RT trials (0 to skip) |
| **Min ISI** | Minimum inter-stimulus interval (ms) |
| **Max ISI** | Maximum inter-stimulus interval (ms) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Simple Trials | `simple_trials` | number | 20 |
| Choice Trials | `choice_trials` | number | 20 |
| Min ISI | `min_isi_ms` | number | 1000 |
| Max ISI | `max_isi_ms` | number | 4000 |

</details>

### Sample Instructions

*"Tap the circle as quickly as you can when it appears. In the first part, a circle will appear in the center. In the second part, it will appear on the left or right -- tap the matching side."*

## Usage

The task has two phases. In Phase 1 (Simple RT), a blue circle appears at screen center after a random inter-stimulus interval (1000-4000 ms), and the participant taps anywhere as fast as possible. In Phase 2 (Choice RT), the blue circle appears on the left or right side, and the participant must tap the matching side.

Tapping during the inter-stimulus interval (before the stimulus appears) counts as an anticipation error, as does any reaction time below 100 ms. After each trial, brief feedback is displayed: green for a valid response, red for an anticipation or incorrect response.

### Scoring

Primary metrics are mean and median RT for each phase. The difference between choice and simple mean RT estimates decision time.

<details>
<summary>References</summary>

1. Donders, F. C. (1868/1969). On the speed of mental processes. Acta Psychologica, 30, 412-431. DOI: [10.1016/0001-6918(69)90065-1](https://doi.org/10.1016/0001-6918(69)90065-1)
2. Jensen, A. R. (2006). Clocking the Mind: Mental Chronometry and Individual Differences. Elsevier.

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `simple_mean_rt` | number | Mean RT on simple trials (ms) |
| `simple_median_rt` | number | Median RT on simple trials (ms) |
| `simple_sd_rt` | number | RT standard deviation on simple trials (ms) |
| `simple_correct_count` | number | Valid simple trials |
| `simple_trial_count` | number | Total simple trials |
| `choice_mean_rt` | number | Mean RT on choice trials (ms) |
| `choice_median_rt` | number | Median RT on choice trials (ms) |
| `choice_sd_rt` | number | RT standard deviation on choice trials (ms) |
| `choice_correct_count` | number | Correct choice trials |
| `choice_error_count` | number | Wrong-side choice responses |
| `choice_trial_count` | number | Total choice trials |
| `overall_mean_rt` | number | Mean RT across all trials (ms) |
| `anticipation_count` | number | Anticipation errors (tapped before stimulus) |
| `score` | number | Overall score |
| `correct_answers` | number | Total correct responses |
| `wrong_answers` | number | Total errors |
| `total_questions` | number | Total trials |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per trial.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Trial index |
| `level` | number | Phase: 1 = simple, 2 = choice |
| `type` | boolean | Whether the response was correct |
| `value` | null | Unused |
| `duration` | number | Reaction time (ms) |
| `phase` | string | "simple" or "choice" |
| `trial` | number | Trial number within phase |
| `stimulus_side` | string | Stimulus location ("center", "left", or "right") |
| `response_side` | string | Side tapped |
| `anticipation` | boolean | Whether this was an anticipation error |
| `isi` | number | Inter-stimulus interval for this trial (ms) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
