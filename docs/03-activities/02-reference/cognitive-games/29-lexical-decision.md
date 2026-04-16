---
slug: "/activities/reference/lexical-decision"
sidebar_position: 29
sidebar_label: Lexical Decision
title: "Lexical Decision Task"
---

# Lexical Decision Task

The Lexical Decision Task is one of the most widely used paradigms in psycholinguistics (Rubenstein et al., 1970). Participants see strings of letters and decide whether each is a real English word or not. The task measures lexical access speed, word frequency sensitivity, and discrimination ability (d-prime). Response times to words versus nonwords reveal the efficiency of lexical retrieval.

**ActivitySpec:** `lamp.lexical_decision`

**Cognitive domain:** Word recognition, lexical access, language processing

## Configuration

| Setting | Description |
|---------|-------------|
| **Difficulty** | Controls trial count and word frequency mix |
| **Fixation Duration** | Fixation cross duration (ms) |
| **Time Limit** | Max response time per trial (seconds) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Difficulty | `difficulty` | string | "medium" |
| Fixation Duration | `fixation_ms` | number | 500 |
| Time Limit | `time_limit_per_trial_s` | number | 5 |

</details>

### Sample Instructions

*"A string of letters will appear on screen. Decide as quickly as you can whether it is a real English word or not. Tap WORD if it is a real word, or NOT A WORD if it is not."*

## Usage

Each trial follows this sequence: fixation cross (500 ms), then the letter string stimulus (displayed until the participant responds or the time limit expires), then correctness feedback (500 ms).

Stimuli consist of 204 words (102 high-frequency and 102 low-frequency) plus 102 pronounceable nonwords, all balanced across 4, 5, and 6 letter lengths. Difficulty levels control the trial count and word frequency distribution: Easy (40 trials, 75% high-frequency words), Medium (60 trials, 50/50 frequency split), and Hard (80 trials, 25% high-frequency words with a 2-second stimulus time limit).

d-prime is computed using signal detection theory with log-linear correction.

### Scoring

d-prime (sensitivity) is the primary metric. The word frequency effect (low-frequency RT minus high-frequency RT) and lexicality effect (nonword RT minus word RT) are key secondary metrics.

<details>
<summary>References</summary>

1. Rubenstein, H. et al. (1970). Homographic entries in the internal lexicon. Journal of Verbal Learning and Verbal Behavior, 9(5), 487-494.

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `d_prime` | number | Signal detection sensitivity |
| `accuracy` | number | Overall proportion correct |
| `word_accuracy` | number | Accuracy on word trials |
| `nonword_accuracy` | number | Accuracy on nonword trials |
| `mean_rt_ms` | number | Overall mean RT (ms) |
| `mean_rt_word_ms` | number | Mean RT on word trials (ms) |
| `mean_rt_nonword_ms` | number | Mean RT on nonword trials (ms) |
| `mean_rt_high_freq_ms` | number | Mean RT on high-frequency words (ms) |
| `mean_rt_low_freq_ms` | number | Mean RT on low-frequency words (ms) |
| `word_frequency_effect_ms` | number | Low-freq RT minus high-freq RT (ms) |
| `lexicality_effect_ms` | number | Nonword RT minus word RT (ms) |
| `trials_total` | number | Total trials |
| `trials_responded` | number | Trials with a response |
| `trials_correct` | number | Correct responses |
| `trials_timed_out` | number | Trials with no response |
| `score` | number | Overall score |
| `correct_answers` | number | Total correct |
| `total_questions` | number | Total trials |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per trial.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Trial index |
| `type` | string | Trial type |
| `trial_number` | number | Trial sequence number |
| `stimulus` | string | The displayed letter string |
| `is_word` | boolean | Whether the stimulus is a real word |
| `word_frequency` | string | "high", "low", or "nonword" |
| `stimulus_length` | number | Number of letters |
| `response` | string | Participant's response ("word" or "nonword") |
| `correct` | boolean | Whether the response was correct |
| `rt_ms` | number | Reaction time (ms) |
| `duration` | number | Total trial duration (ms) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
