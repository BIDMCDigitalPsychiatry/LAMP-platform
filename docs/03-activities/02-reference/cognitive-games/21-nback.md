---
slug: "/activities/reference/nback"
sidebar_position: 21
sidebar_label: N-Back
title: "N-Back"
---

# N-Back

The N-Back task is a continuous performance measure of working memory updating (Owen et al., 2005). Participants view a sequence of letters and must identify when the current letter matches the one shown N items ago. Performance is quantified using signal detection theory (d-prime and criterion), providing precise measures of working memory capacity that separate sensitivity from response bias.

**ActivitySpec:** `lamp.nback`

**Cognitive domain:** Working memory, working memory updating

## Configuration

| Setting | Description |
|---------|-------------|
| **Levels** | N-back levels to run (supports 1, 2, 3) |
| **Trials per Level** | Number of trials per level (clamped 10-100) |
| **Stimulus Duration** | Letter display duration (ms) |
| **ISI** | Inter-stimulus interval (ms) |
| **Target Proportion** | Proportion of trials that are targets |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Levels | `levels` | number[] | [1, 2] |
| Trials per Level | `trials_per_level` | number | 20 |
| Stimulus Duration | `stimulus_duration_ms` | number | 1500 |
| ISI | `isi_ms` | number | 2000 |
| Target Proportion | `target_proportion` | number | 0.3 |

</details>

### Sample Instructions

*"Letters will appear one at a time. Tap MATCH if the current letter is the same as the one shown 1 letter ago."*

## Usage

Consonants are displayed one at a time (vowels are excluded to prevent word-forming strategies). Each letter is shown for a configurable duration, followed by a blank inter-stimulus interval. The participant taps "Match" if the current letter is the same as the letter shown N items ago.

Trial outcomes are classified as: Hit (correct match), Miss (missed match), False Alarm (incorrect match), or Correct Rejection (correctly withheld response). d-prime is computed with log-linear correction (Hautus, 1995) to handle extreme proportions.

Multi-level support is built in: by default the task runs 1-back then 2-back sequentially, with a transition screen between levels.

### Scoring

d-prime (sensitivity) is the primary metric -- higher values indicate better discrimination between targets and non-targets. Criterion measures response bias (negative = liberal, positive = conservative).

<details>
<summary>References</summary>

1. Owen, A. M. et al. (2005). N-back working memory paradigm: a meta-analysis of normative functional neuroimaging studies. Human Brain Mapping, 25(1), 46-59. DOI: [10.1002/hbm.20131](https://doi.org/10.1002/hbm.20131)
2. Hautus, M. J. (1995). Corrections for extreme proportions and their biasing effects on estimated values of d'. Behavior Research Methods, Instruments, & Computers, 27(1), 46-51.

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `n_level` | number | N-back level |
| `d_prime` | number | Signal detection sensitivity |
| `criterion` | number | Response bias |
| `hit_rate` | number | Proportion of targets correctly identified |
| `false_alarm_rate` | number | Proportion of non-targets incorrectly identified |
| `hits` | number | Correct match responses |
| `misses` | number | Missed targets |
| `false_alarms` | number | Incorrect match responses |
| `correct_rejections` | number | Correctly withheld responses |
| `hit_rt_mean` | number | Mean RT on hits (ms) |
| `hit_rt_median` | number | Median RT on hits (ms) |
| `hit_rt_sd` | number | RT standard deviation on hits (ms) |
| `score` | number | Overall score |
| `correct_answers` | number | Total correct (hits + correct rejections) |
| `wrong_answers` | number | Total errors (misses + false alarms) |
| `total_questions` | number | Total trials |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per trial.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Trial index |
| `level` | number | N-back level (1, 2, or 3) |
| `type` | boolean | Whether the response was correct |
| `value` | null | Unused |
| `duration` | number | Reaction time (ms) |
| `letter` | string | Displayed letter |
| `is_target` | boolean | Whether this was a target trial |
| `responded` | boolean | Whether the participant responded |
| `outcome` | string | "hit", "miss", "false_alarm", or "correct_rejection" |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
