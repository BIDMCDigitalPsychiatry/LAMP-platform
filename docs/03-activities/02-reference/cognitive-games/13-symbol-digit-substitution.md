---
slug: "/activities/reference/symbol-digit-substitution"
sidebar_position: 13
sidebar_label: Symbol-Digit Substitution
title: "Symbol-Digit Substitution"
---

# Symbol-Digit Substitution


Originally part of the Wechsler Adult Intelligence Scale, the Symbol-Digit Substitution Task is one of the most frequently used neuropsychological assessments. The measure is valid and sensitive to change in major depressive disorder, age-related cognitive decline, alcoholism, and other conditions. Given a mapping of symbols to numbers 1–9, the participant identifies which number corresponds to a presented symbol.

**ActivitySpec:** `lamp.symbol_digit_substitution`

**Cognitive domain:** Motor speed, attention, associative thinking

## Configuration

| Setting | Description |
|---------|-------------|
| **Number of symbols** | How many symbols appear in the task |
| **Duration** | Task duration in seconds |

### Sample Instructions

*"In this game, you will be shown a symbol in the center of the screen. This symbol will correspond to a number. Check the symbol-mapping shown at the top of the screen and look for your symbol. Once you find the corresponding symbol, select the corresponding number at the bottom of the screen. The faster you move, the more points you will accrue."*

## Usage

A symbol-to-number mapping is displayed at the top of the screen. A symbol appears in the center, and the participant taps the corresponding number from a keypad at the bottom. After a correct selection, a new symbol appears. The process repeats until time runs out.

### Scoring

Scoring is based on the total number of correct symbols selected within the given timeframe.

<details>
<summary>References</summary>

1. Wechsler, D. (1955) Wechsler adult intelligence scale. Archives of Clinical Neuropsychology. DOI: [10.1037/t15169-000](https://doi.org/10.1037/t15169-000)
2. McLeod, D. R. et al. (1982) An automated version of the digit symbol substitution test (DSST). Behavior Research Methods & Instrumentation, 14(5), 463-466. DOI: [10.3758/BF03203313](https://doi.org/10.3758/BF03203313)
3. Jaeger, J. (2018) Digit symbol substitution test: the case for sensitivity over specificity. Journal of Clinical Psychopharmacology, 38(5), 513. DOI: [10.1097/JCP.0000000000000941](https://doi.org/10.1097/JCP.0000000000000941)

</details>

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/tiqKDGtdyKo?si=EixF6CQYp4cOINns" title="Symbol-Digit Substitution gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/symbol-digit-gameplay.png" alt="symuol digit gameplay" width="500" />
  <img src="/img/cognitive-games/symbol-digit-customization.png" alt="Symbol-Digit Substitution customization" width="500" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Correct Responses Per Minute (CRPM) |
| `number_of_symbols` | number | Total symbols presented |
| `number_of_correct_responses` | number | Correct responses |
| `number_of_incorrect_responses` | number | Incorrect responses |
| `avg_correct_response_time` | number | Average time for correct responses |
| `avg_incorrect_response_time` | number | Average time for incorrect responses |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

| Field | Type | Description |
|-------|------|-------------|
| `value` | boolean | `true` = correct, `false` = incorrect |
| `type` | number | Digit corresponding to symbol |
| `duration` | number | Response time (seconds) |
| `level` | null | Unused |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
