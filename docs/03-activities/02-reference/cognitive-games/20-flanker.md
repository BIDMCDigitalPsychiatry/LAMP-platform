---
slug: "/activities/reference/flanker"
sidebar_position: 20
sidebar_label: Flanker
title: "Eriksen Flanker Task"
---

# Eriksen Flanker Task

The Eriksen Flanker Task measures attentional control and conflict resolution (Eriksen & Eriksen, 1974). A central target arrow is flanked by surrounding arrows that either match or conflict with its direction. The participant must respond to the center arrow while ignoring the flankers. The Flanker effect (incongruent RT minus congruent RT) quantifies attentional interference. This task is a core component of the NIH Toolbox Cognition Battery and the Attention Network Test.

**ActivitySpec:** `lamp.flanker`

**Cognitive domain:** Attentional control, conflict resolution, selective attention

## Configuration

| Setting | Description |
|---------|-------------|
| **Trials per Condition** | Trials per condition |
| **Conditions** | Conditions to include |
| **Fixation Duration** | Fixation cross duration (ms) |
| **Stimulus Duration** | Max stimulus display time (ms) |
| **Feedback Duration** | Feedback display duration (ms) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Trials per Condition | `trials_per_condition` | number | 20 |
| Conditions | `conditions` | string | "congruent,incongruent,neutral" |
| Fixation Duration | `fixation_ms` | number | 500 |
| Stimulus Duration | `stimulus_duration_ms` | number | 1500 |
| Feedback Duration | `feedback_ms` | number | 500 |

</details>

### Sample Instructions

*"An arrow will appear in the center of the screen. Tap the button matching the direction of the CENTER arrow, ignoring the surrounding arrows."*

## Usage

Each trial presents a row of five arrows. In congruent trials, all arrows point the same direction (e.g., `→ → → → →`). In incongruent trials, flanker arrows point opposite to the center arrow (e.g., `← ← → ← ←`). In neutral trials, the center arrow is flanked by dashes (e.g., `— — → — —`).

The sequence for each trial is: fixation cross, then the stimulus (displayed for up to 1500 ms), then feedback. The participant taps a button matching the direction of the center arrow. The Flanker effect is computed as incongruent mean RT minus congruent mean RT.

### Scoring

The Flanker effect (incongruent minus congruent mean RT) is the primary metric. Per-condition accuracy and RT are also reported.

<details>
<summary>References</summary>

1. Eriksen, B. A. & Eriksen, C. W. (1974). Effects of noise letters upon the identification of a target letter in a nonsearch task. Perception & Psychophysics, 16(1), 143-149. DOI: [10.3758/BF03203267](https://doi.org/10.3758/BF03203267)

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `flanker_effect` | number | Incongruent mean RT minus congruent mean RT (ms) |
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
| `target` | string | Direction of center arrow ("left" or "right") |
| `response` | string | Participant's response |
| `condition` | string | "congruent", "incongruent", or "neutral" |
| `display` | string | The full arrow display string |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
