---
slug: "/activities/reference/stroop"
sidebar_position: 19
sidebar_label: Stroop
title: "Stroop Color-Word Test"
---

# Stroop Color-Word Test

The Stroop Color-Word Interference Test (Stroop, 1935) measures selective attention, cognitive control, and interference suppression. Color words are displayed in mismatching ink colors, and participants must name the ink color while ignoring the word itself. The Stroop effect -- slower responses on incongruent trials -- is one of the most robust findings in cognitive psychology.

**ActivitySpec:** `lamp.stroop`

**Cognitive domain:** Selective attention, cognitive control, interference suppression

## Configuration

| Setting | Description |
|---------|-------------|
| **Trials per Condition** | Number of trials per condition |
| **Conditions** | Comma-separated conditions to include |
| **Fixation Duration** | Fixation cross duration (ms) |
| **Feedback Duration** | Feedback display duration (ms) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Trials per Condition | `trials_per_condition` | number | 20 |
| Conditions | `conditions` | string | "congruent,incongruent,neutral" |
| Fixation Duration | `fixation_ms` | number | 500 |
| Feedback Duration | `feedback_ms` | number | 500 |

</details>

### Sample Instructions

*"A color word will appear on screen. Tap the button that matches the INK COLOR of the word, not the word itself."*

## Usage

Each trial begins with a fixation cross (500 ms), followed by a color word stimulus displayed in a specific ink color. Four color response buttons (red, blue, green, yellow) are arranged in a 2x2 grid. The participant taps the button matching the ink color of the word.

Trials fall into three conditions: congruent (word and ink color match, e.g., "RED" in red ink), incongruent (word and ink color conflict, e.g., "RED" in blue ink), and neutral (non-color word in colored ink, e.g., "DESK" in green ink). Trials are randomized across conditions with ink colors balanced. Correctness feedback is displayed for 500 ms after each response.

### Scoring

The Stroop effect (incongruent mean RT minus congruent mean RT) is the primary metric. Per-condition accuracy and RT are also reported.

<details>
<summary>References</summary>

1. Stroop, J. R. (1935). Studies of interference in serial verbal reactions. Journal of Experimental Psychology, 18(6), 643-662. DOI: [10.1037/h0054651](https://doi.org/10.1037/h0054651)
2. MacLeod, C. M. (1991). Half a century of research on the Stroop effect: an integrative review. Psychological Bulletin, 109(2), 163-203. DOI: [10.1037/0033-2909.109.2.163](https://doi.org/10.1037/0033-2909.109.2.163)

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `stroop_effect` | number | Incongruent mean RT minus congruent mean RT (ms) |
| `overall_mean_rt` | number | Mean RT across all conditions (ms) |
| `overall_accuracy` | number | Proportion correct across all conditions |
| `total_trials` | number | Total trials |
| `total_correct` | number | Total correct responses |
| `total_errors` | number | Total errors |
| `congruent` | object | `{count, correct_count, error_count, mean_rt, median_rt, sd_rt}` |
| `incongruent` | object | `{count, correct_count, error_count, mean_rt, median_rt, sd_rt}` |
| `neutral` | object | `{count, correct_count, error_count, mean_rt, median_rt, sd_rt}` |
| `score` | number | Overall score |
| `correct_answers` | number | Total correct |
| `wrong_answers` | number | Total errors |
| `total_questions` | number | Total trials |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per trial.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Trial index |
| `level` | number | Always 1 |
| `type` | boolean | Whether the response was correct |
| `value` | null | Unused |
| `duration` | number | Reaction time (ms) |
| `word` | string | The displayed word |
| `ink_color` | string | The ink color of the word |
| `response` | string | The color the participant selected |
| `condition` | string | "congruent", "incongruent", or "neutral" |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
