---
slug: "/activities/reference/wcst"
sidebar_position: 23
sidebar_label: Wisconsin Card Sorting Test
title: "Wisconsin Card Sorting Test"
---

# Wisconsin Card Sorting Test

The Wisconsin Card Sorting Test (WCST) is the gold-standard measure of cognitive flexibility, set-shifting, and abstract reasoning. Participants sort cards by matching to one of four key cards, but the sorting rule (color, shape, or number) is never stated — they must infer it from correctness feedback. The rule changes without warning after 10 consecutive correct sorts, requiring flexible adaptation. Perseverative errors (continuing to sort by the old rule after a shift) are the most clinically informative metric.

**ActivitySpec:** `lamp.wcst`

**Cognitive domain:** Cognitive flexibility, set-shifting, abstract reasoning

## Configuration

| Setting | Description |
|---------|-------------|
| **Deck Size** | Number of cards (64 or 128) |
| **Time Limit** | Per-trial timeout in seconds (0 = untimed) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Deck Size | `deck_size` | number | 64 |
| Time Limit | `time_limit_per_trial_s` | number | 0 |

</details>

### Sample Instructions

*"Match each card to one of the four cards at the top. You can match by color, shape, or number. You will not be told the rule — use the feedback to figure it out. The rule may change without warning."*

## Usage

Four key cards are displayed at the top: 1 Red Triangle, 2 Green Stars, 3 Yellow Crosses, 4 Blue Circles. A response deck of 64 unique cards (4 colors x 4 shapes x 4 numbers) is presented one at a time, or 128 for the full version. The rule sequence follows Color, Shape, Number and repeats up to 6 categories. Ten consecutive correct sorts complete a category and trigger a rule shift. The participant receives only "Correct" or "Incorrect" feedback. The game ends when 6 categories are completed or the deck is exhausted.

### Scoring

The primary clinical metrics are perseverative errors and categories completed. Perseverative errors occur when the participant continues sorting by the previous rule after a shift.

<details>
<summary>References</summary>

1. Berg, E. A. (1948). A simple objective technique for measuring flexibility in thinking. Journal of General Psychology, 39(1), 15-22. DOI: [10.1080/00221309.1948.9918159](https://doi.org/10.1080/00221309.1948.9918159)
2. Heaton, R. K. (1981). Wisconsin Card Sorting Test Manual. Odessa, FL: Psychological Assessment Resources.

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `categories_completed` | number | Number of sorting categories achieved (max 6) |
| `perseverative_responses` | number | Responses matching the previous rule |
| `perseverative_errors` | number | Incorrect responses matching the previous rule |
| `non_perseverative_errors` | number | Errors not matching the previous rule |
| `conceptual_level_responses` | number | Correct responses in runs of 3+ consecutive correct |
| `failure_to_maintain_set` | number | Times a run of 5+ correct was broken before reaching 10 |
| `trials_to_first_category` | number | Trials needed to complete the first category |
| `total_trials` | number | Total cards sorted |
| `total_correct` | number | Total correct sorts |
| `total_errors` | number | Total errors |
| `mean_rt_correct_ms` | number | Mean RT on correct sorts (ms) |
| `score` | number | Overall score |
| `correct_answers` | number | Total correct sorts |
| `total_questions` | number | Total trials |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per card sort.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Card index |
| `type` | string | Sort type |
| `trial_number` | number | Trial sequence number |
| `card_color` | string | Color of the presented card |
| `card_shape` | string | Shape of the presented card |
| `card_number` | number | Number on the presented card |
| `chosen_key` | number | Which key card was selected (1-4) |
| `current_rule` | string | Active sorting rule ("color", "shape", or "number") |
| `match_dimension` | string | Which dimension the sort matched |
| `correct` | boolean | Whether the sort was correct |
| `perseverative` | boolean | Whether the response matched the previous rule |
| `perseverative_error` | boolean | Whether this was a perseverative error |
| `rt_ms` | number | Reaction time (ms) |
| `duration` | number | Total trial duration (ms) |
| `consecutive_correct` | number | Current streak of correct sorts |
| `categories_completed` | number | Categories completed so far |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
