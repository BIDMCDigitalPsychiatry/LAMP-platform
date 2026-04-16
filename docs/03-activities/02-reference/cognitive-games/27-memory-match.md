---
slug: "/activities/reference/memory-match"
sidebar_position: 27
sidebar_label: Memory Match
title: "Memory Match"
---

# Memory Match

Memory Match is a classic card-matching task that engages visual-spatial recognition memory and working memory. Participants flip pairs of cards to find matching symbols, relying on spatial recall to remember previously revealed positions. The task measures recognition accuracy, spatial recall efficiency, and working memory load management.

**ActivitySpec:** `lamp.memory_match`

**Cognitive domain:** Visual-spatial recognition memory, working memory

## Configuration

| Setting | Description |
|---------|-------------|
| **Difficulty** | "easy" (3x4), "medium" (4x5), "hard" (5x6) |
| **Max Rounds** | Number of rounds |
| **Time Limit** | Time limit per round (seconds) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Difficulty | `difficulty` | string | "medium" |
| Max Rounds | `max_rounds` | number | 4 |
| Time Limit | `time_limit_per_round_s` | number | 120 |

</details>

### Sample Instructions

*"Find all matching pairs by flipping two cards at a time. Remember where each symbol is to make matches faster."*

## Usage

Grid sizes vary by difficulty: 3x4 (easy, 6 pairs), 4x5 (medium, 10 pairs), 5x6 (hard, 15 pairs). Cards display visually distinct symbols. Two cards are flipped per move; matched pairs stay face-up, while mismatches flip back after 700ms. Immediate feedback is provided: matched pairs show a green border.

### Scoring

Each round is scored by number of moves to find all pairs. A perfect round has zero errors (every flip attempt is a match). Key metrics are mean moves and rounds completed perfectly.

<details>
<summary>References</summary>

1. Sahakian, B. J. & Owen, A. M. (1992). Computerized assessment in neuropsychiatry using CANTAB. Journal of the Royal Society of Medicine, 85(7), 399-402.

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Overall score |
| `correct_answers` | number | Rounds solved |
| `total_questions` | number | Total rounds |
| `rounds_attempted` | number | Rounds presented |
| `rounds_solved` | number | Rounds completed |
| `rounds_perfect` | number | Rounds solved with zero mismatches |
| `total_moves` | number | Total flip attempts across all rounds |
| `total_errors` | number | Total mismatched flip attempts |
| `mean_errors` | number | Average mismatches per round |
| `mean_moves` | number | Average moves per round |
| `mean_planning_time_ms` | number | Average time before first flip (ms) |
| `mean_execution_time_ms` | number | Average time from first flip to completion (ms) |
| `rounds_timed_out` | number | Rounds where time expired |
| `difficulty` | string | Difficulty level used |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per round.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Round index |
| `type` | string | Outcome: "solved", "timeout", or "exit" |
| `round_number` | number | Round sequence number |
| `grid_size` | string | Grid dimensions (e.g., "4x5") |
| `total_pairs` | number | Number of pairs in the grid |
| `pairs_found` | number | Pairs successfully matched |
| `moves` | number | Total flip attempts |
| `errors` | number | Mismatched attempts |
| `perfect` | boolean | Whether the round had zero errors |
| `planning_time_ms` | number | Time before first flip (ms) |
| `execution_time_ms` | number | Time from first flip to completion (ms) |
| `duration` | number | Total time on this round (ms) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
