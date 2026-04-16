---
slug: "/activities/reference/digit-span"
sidebar_position: 6
sidebar_label: Digit Span
title: "Digit Span"
---

# Digit Span

Digit Span is a standard neuropsychological assessment (Wechsler, 2008) measuring working memory, now scored using the WAIS-IV standard. A sequence of numbers (0–10) is read aloud by an automated voice and shown on screen one at a time. The participant repeats the sequence by tapping the numbers, either in forwards or backwards order. The game is adaptive — the sequence length changes based on whether the participant answered correctly. Use `forward_span`, `backward_span`, and `total_raw_score` for cognitive analysis; the `score` field is retained for legacy compatibility.

**ActivitySpec:** `lamp.digit_span`

**Cognitive domain:** Working memory

## Configuration

The game is configured through the Activities tab. Select **Digit Span** and choose the forward or backward variant.

### Sample Instructions

*"You will hear and see a sequence of numbers. After the sequence ends, tap the numbers in the same order (forward) or reverse order (backward)."*

## Usage

Numbers appear on screen one at a time while being read aloud. After the sequence completes, the participant taps the numbers in the correct order. Forward phase starts at 3-digit sequences, backward phase at 2-digit sequences. Two consecutive errors at the same length end a phase. Each round has a 30-second timeout. Maximum sequence length is 9 digits.

<details>
<summary>References</summary>

1. Wechsler, D. (2008). Wechsler Adult Intelligence Scale—Fourth Edition: Administration and scoring manual. Pearson.

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `forward_span` | number | Maximum digit sequence length recalled forward |
| `backward_span` | number | Maximum digit sequence length recalled backward |
| `forward_trials_correct` | number | Correct trials in forward phase |
| `backward_trials_correct` | number | Correct trials in backward phase |
| `total_raw_score` | number | WAIS-IV raw score (sum of correct trials) |
| `question_sequences` | array | All presented sequences with responses |
| `score` | number | Legacy compatibility score |
| `correct_answers` | number | Total correct trials |
| `wrong_answers` | number | Total incorrect trials |
| `total_questions` | number | Total trials |
| `point` | number | Score indicator |
| `bestForwardDigitSpan` | number | Legacy: same as forward_span |
| `bestBackwardDigitSpan` | number | Legacy: same as backward_span |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Sequence index |
| `type` | boolean | `true` = correct, `false` = incorrect |
| `value` | null | Unused |
| `duration` | number | Response time (ms) |
| `level` | number | Sequence length |
| `mode` | number | `0` = forward, `1` = backward |

### Cortex Features

[`digit_span`](/developer/cortex/features/raw-features) (raw). No primary or secondary Cortex features currently process Digit Span data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
