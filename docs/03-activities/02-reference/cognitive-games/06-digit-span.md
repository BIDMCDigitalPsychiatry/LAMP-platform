---
slug: "/activities/reference/digit-span"
sidebar_position: 6
sidebar_label: Digit Span
title: "Digit Span"
---

# Digit Span

Digit Span is a standard neuropsychological assessment (Wechsler, 2008) measuring working memory. A sequence of numbers (0–10) is read aloud by an automated voice and shown on screen one at a time. The participant repeats the sequence by tapping the numbers, either in forwards or backwards order. The game is adaptive — the sequence length changes based on whether the participant answered correctly.

**ActivitySpec:** `lamp.digit_span`

**Cognitive domain:** Working memory

## Configuration

The game is configured through the Activities tab. Select **Digit Span** and choose the forward or backward variant.

### Sample Instructions

*"You will hear and see a sequence of numbers. After the sequence ends, tap the numbers in the same order (forward) or reverse order (backward)."*

## Usage

Numbers appear on screen one at a time while being read aloud. After the sequence completes, the participant taps the numbers in the correct order. If correct, the next sequence is longer; if incorrect, the next sequence is shorter.

<details>
<summary>References</summary>

1. Wechsler, D. (2008). Wechsler Adult Intelligence Scale—Fourth Edition: Administration and scoring manual. Pearson.

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Computed score |
| `correct_answers` | number | Correct responses |
| `wrong_answers` | number | Incorrect responses |
| `rating` | number | Session rating |
| `type` | number | Forward or backward variant indicator |

### Cortex Features

[`digit_span`](/developer/cortex/features/raw-features) (raw). No primary or secondary Cortex features currently process Digit Span data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
