---
slug: "/activities/reference/scratch-card"
sidebar_position: 8
sidebar_label: Scratch Card
title: "Scratch Card"
---

# Scratch Card

Scratch Card is a motor engagement and relaxation activity where the participant scratches away a grey cover layer to reveal a hidden illustrated scene. While not a standardized neuropsychological test, it functions as a low-demand filler, warm-up, or engagement activity. The recorded scratch path and coverage data map onto fine motor control, motor persistence, processing speed, and engagement behavior.

**ActivitySpec:** `lamp.scratch_card`

**Cognitive domain:** Motor engagement, fine motor control, relaxation

## Configuration

| Setting | Description |
|---------|-------------|
| **Threshold** | Percentage of the card that must be scratched before the completion prompt appears (default: 80%). The participant can continue scratching past this point. |
| **Number of Cards** | Number of scratch cards to present, 1-5 (default: 3). Each card shows a unique scene with no repeats within a session. |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Threshold | `threshold` | number | 80 |
| Number of Cards | `num_cards` | number | 3 |
| Path Sampling Interval | `scratch_path_interval_ms` | number | 50 |

</details>

### Sample Instructions

*"Scratch the surface with your finger to reveal the hidden image. Keep scratching until the full picture appears."*

## Usage

The participant scratches a grey cover layer by dragging their finger (or mouse) to reveal one of five illustrated SVG scenes (tree reader, lake boat, stargazer, garden, sleepy cat). A progress bar shows the percentage scratched, and a card counter tracks progress through the session.

When coverage reaches the configured threshold, a "Next Card" (or "Finish" on the last card) button appears — but the card does not end automatically. The participant can continue scratching past the threshold, and the gap between the threshold and final coverage percentage serves as a behavioral measure of completionism.

Scratch path coordinates and element bounding boxes share the same normalized (0-1) coordinate system, enabling direct spatial overlap analysis.

### Scoring

Each card is scored by whether the threshold was reached and the final coverage percentage. The overall score is the proportion of cards completed.

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `num_cards` | number | Number of cards configured |
| `cards_completed` | number | Cards where threshold was reached |
| `cards_attempted` | number | Cards the user started scratching |
| `total_scratch_time_ms` | number | Sum of scratch time across all attempted cards (ms) |
| `avg_scratch_time_ms` | number | Average scratch time per attempted card (ms) |
| `threshold` | number | Configured threshold percentage (0-100) |
| `card_results` | array | Per-card detail (see below) |
| `score` | number | Completion percentage |
| `correct_answers` | number | Cards completed |
| `total_questions` | number | Total cards |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

Each entry in `card_results`:

| Field | Type | Description |
|-------|------|-------------|
| `card` | number | Card number (1-indexed) |
| `background_name` | string | Scene identifier (e.g., "tree_reader", "lake_boat") |
| `time_ms` | number | Time spent scratching this card (ms) |
| `final_pct` | number | Actual percentage scratched (0-100, may exceed threshold) |
| `threshold_reached` | boolean | Whether coverage met the threshold |
| `elements` | array | Visual element bounding boxes for spatial analysis: `{name, x, y, w, h}` (all normalized 0-1) |
| `scratch_path` | array | Sampled pointer trajectory: `{x, y, t}` (x/y normalized 0-1, t = ms since card start) |

### temporal_slices

One entry per card attempted:

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Card number (1-indexed) |
| `type` | boolean | `true` if threshold was reached |
| `value` | number | Final scratch coverage percentage (0-100) |
| `duration` | number | Time spent on this card (ms) |
| `level` | number | Always 1 |
| `background_name` | string | Scene identifier |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
