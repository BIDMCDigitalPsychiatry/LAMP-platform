---
slug: "/activities/reference/delay-discounting"
sidebar_position: 31
sidebar_label: Delay Discounting
title: "Delay Discounting"
---

# Delay Discounting

The Delay Discounting task measures temporal impulsivity -- the tendency to prefer smaller immediate rewards over larger delayed ones. Using an adjusting-amount bisection procedure, the task finds each participant's indifference point at multiple delay intervals. Results are quantified with both model-free (Area Under the Curve) and model-based (hyperbolic k) indices of discounting.

**ActivitySpec:** `lamp.delay_discounting`

**Cognitive domain:** Temporal impulsivity, reward valuation, decision-making

## Configuration

| Setting | Description |
|---------|-------------|
| **Delayed Amount** | Larger delayed reward amount ($) |
| **Delays** | Delay durations in days |
| **Trials per Delay** | Bisection trials per delay interval |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Delayed Amount | `delayed_amount` | number | 100 |
| Delays | `delays` | number[] | [1, 7, 30, 90, 365] |
| Trials per Delay | `trials_per_delay` | number | 6 |

</details>

### Sample Instructions

*"You will see two options: a smaller amount of money now, or a larger amount later. Tap the option you prefer."*

## Usage

Each delay block uses a bisection/titration procedure: the immediate amount starts at half the delayed amount and adjusts by halving the step size based on each choice. After the configured number of trials per delay, the final adjusted amount is the indifference point for that delay.

Default delay intervals are 1 day, 1 week, 1 month, 3 months, and 1 year. AUC (Area Under the Curve) is computed via trapezoidal integration of normalized indifference points, where 0 represents maximum discounting (most impulsive) and 1 represents no discounting (most patient). Hyperbolic k is fit using the model V = A/(1+kD), with the median k reported across delays.

### Scoring

AUC is the primary model-free metric (lower = more impulsive). Hyperbolic k is the primary model-based metric (higher = steeper discounting / more impulsive).

<details>
<summary>References</summary>

1. Mazur, J. E. (1987). An adjusting procedure for studying delayed reinforcement. In M. L. Commons et al. (Eds.), Quantitative analyses of behavior, Vol. 5: The effect of delay and of intervening events on reinforcement value (pp. 55-73). Erlbaum.
2. Myerson, J. et al. (2001). Area under the curve as a measure of discounting. Journal of the Experimental Analysis of Behavior, 76(2), 235-243. DOI: [10.1901/jeab.2001.76-235](https://doi.org/10.1901/jeab.2001.76-235)

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Overall score |
| `correct_answers` | number | Total choices made |
| `total_questions` | number | Total trials |
| `delayed_amount` | number | The larger delayed reward amount |
| `delays` | number[] | Delay intervals used (days) |
| `trials_per_delay` | number | Bisection trials per delay |
| `indifference_points` | object | Indifference point at each delay (keyed by delay in days) |
| `auc` | number | Area Under the Curve (0-1; lower = more impulsive) |
| `hyperbolic_k` | number | Hyperbolic discounting rate (higher = more impulsive) |
| `k_values` | object | k value at each delay (keyed by delay in days) |
| `mean_rt_ms` | number | Mean reaction time (ms) |
| `median_rt_ms` | number | Median reaction time (ms) |
| `proportion_immediate` | number | Proportion of choices for the immediate option |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per choice.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Trial index |
| `type` | string | "chose_immediate", "chose_delayed", or "exit" |
| `delay_days` | number | Delay for this block (days) |
| `delay_index` | number | Index of this delay in the delays array |
| `trial_in_delay` | number | Trial number within this delay block |
| `immediate_amount` | number | The immediate option amount |
| `delayed_amount` | number | The delayed option amount |
| `chose_immediate` | boolean | Whether the immediate option was chosen |
| `duration` | number | Reaction time (ms) |
| `level` | number | Delay block index |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
