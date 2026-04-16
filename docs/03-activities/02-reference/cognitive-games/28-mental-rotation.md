---
slug: "/activities/reference/mental-rotation"
sidebar_position: 28
sidebar_label: Mental Rotation
title: "Mental Rotation"
---

# Mental Rotation

The Mental Rotation task measures spatial visualization ability. Participants view two shapes side by side and decide whether they are the same shape (just rotated) or different shapes (one is mirror-flipped). Response time increases linearly with angular disparity, a classic finding in cognitive psychology (Shepard & Metzler, 1971).

**ActivitySpec:** `lamp.mental_rotation`

**Cognitive domain:** Spatial visualization, mental imagery

## Configuration

| Setting | Description |
|---------|-------------|
| **Difficulty** | Controls shape complexity and rotation angles |
| **Time Limit** | Max response time per trial (seconds) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Difficulty | `difficulty` | string | "medium" |
| Time Limit | `time_limit_per_trial_s` | number | 15 |

</details>

### Sample Instructions

*"Two shapes will appear side by side. Decide if they are the Same shape (just rotated) or Different shapes (one is flipped). Respond as quickly and accurately as you can."*

## Usage

Stimuli are randomly generated asymmetric polyomino shapes (connected block patterns). The left shape is presented in canonical orientation; the right shape is rotated and optionally mirror-flipped. On "Same" trials, the right shape is rotated only. On "Different" trials, the right shape is mirrored and rotated. Difficulty levels control complexity: Easy uses 5 blocks with 4 rotation angles and 16 trials, Medium uses 6 blocks with 8 rotation angles and 16 trials, and Hard uses 7 blocks with 8 rotation angles and 32 trials. Brief correctness feedback (600ms) is shown after each response.

### Scoring

Accuracy and reaction time across conditions. Key metrics include overall accuracy, same/different accuracy, and mean correct RT at each rotation angle.

<details>
<summary>References</summary>

1. Shepard, R. N. & Metzler, J. (1971). Mental rotation of three-dimensional objects. Science, 171(3972), 701-703. DOI: [10.1126/science.171.3972.701](https://doi.org/10.1126/science.171.3972.701)

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Overall score |
| `correct_answers` | number | Correct responses |
| `total_questions` | number | Total trials |
| `trials_total` | number | Total trials presented |
| `trials_responded` | number | Trials with a response |
| `trials_correct` | number | Correct responses |
| `trials_timed_out` | number | Trials with no response |
| `accuracy` | number | Proportion correct |
| `same_accuracy` | number | Accuracy on "same" trials |
| `different_accuracy` | number | Accuracy on "different" trials |
| `mean_rt_correct_ms` | number | Mean RT on correct trials (ms) |
| `rt_0deg` through `rt_315deg` | number | Mean correct RT at each rotation angle (ms) |
| `difficulty` | string | Difficulty level used |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per trial.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Trial index |
| `type` | string | Trial type |
| `trial_number` | number | Trial sequence number |
| `rotation_deg` | number | Rotation angle of the right shape (degrees) |
| `is_mirrored` | boolean | Whether the right shape was mirror-flipped |
| `correct_answer` | string | Expected response ("same" or "different") |
| `response` | string | Participant's response |
| `correct` | boolean | Whether the response was correct |
| `rt_ms` | number | Reaction time (ms) |
| `duration` | number | Total trial duration (ms) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
