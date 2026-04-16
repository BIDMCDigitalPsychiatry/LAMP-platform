---
slug: "/activities/reference/nonogram"
sidebar_position: 26
sidebar_label: Nonogram
title: "Nonogram"
---

# Nonogram

Nonograms are logic puzzles that require constraint satisfaction and deductive reasoning. Participants fill in a grid using number clues that indicate how many consecutive cells are filled in each row and column. The task engages logical deduction, working memory, spatial reasoning, and planning.

**ActivitySpec:** `lamp.nonogram`

**Cognitive domain:** Logic, deductive reasoning, working memory, spatial reasoning

## Configuration

| Setting | Description |
|---------|-------------|
| **Difficulty** | "easy" (5x5), "medium" (7x7), "hard" (10x10) |
| **Max Puzzles** | Number of puzzles |
| **Time Limit** | Time limit per puzzle (seconds) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Difficulty | `difficulty` | string | "medium" |
| Max Puzzles | `max_puzzles` | number | 6 |
| Time Limit | `time_limit_per_puzzle_s` | number | 120 |

</details>

### Sample Instructions

*"Fill in the grid using the number clues. Each number tells you how many consecutive cells are filled in that row or column. Tap a cell to fill it. Use the Mark button to flag cells you know are empty."*

## Usage

Grid sizes vary by difficulty: 5x5 (easy), 7x7 (medium), 10x10 (hard). Clues indicate consecutive filled-cell runs for each row and column. All puzzles are verified solvable by line logic alone (no guessing required). Incorrect fills flash red as immediate feedback. Correctly filled cells are permanent. A mark mode is available for flagging cells known to be empty.

### Scoring

Puzzles are scored by completion and error count. A puzzle solved with zero errors is "solved perfectly."

<details>
<summary>References</summary>

1. Ueda, N. & Nagao, T. (1996). NP-completeness results for NONOGRAM via parsimonious reductions. Technical report, Tokyo Institute of Technology.

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Overall score |
| `correct_answers` | number | Puzzles solved |
| `total_questions` | number | Total puzzles attempted |
| `puzzles_attempted` | number | Puzzles presented |
| `puzzles_solved` | number | Puzzles completed |
| `puzzles_solved_perfectly` | number | Puzzles solved with zero errors |
| `total_errors` | number | Total incorrect cell fills |
| `mean_errors` | number | Average errors per puzzle |
| `mean_planning_time_ms` | number | Average time before first cell fill (ms) |
| `mean_execution_time_ms` | number | Average time from first fill to completion (ms) |
| `puzzles_timed_out` | number | Puzzles where time expired |
| `difficulty` | string | Difficulty level used |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per puzzle.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Puzzle index |
| `type` | string | Outcome: "solved", "timeout", or "exit" |
| `puzzle_number` | number | Puzzle sequence number |
| `grid_size` | number | Grid dimension (5, 7, or 10) |
| `total_filled` | number | Total cells that should be filled |
| `cells_filled` | number | Cells participant filled |
| `cells_marked` | number | Cells participant marked as empty |
| `errors` | number | Incorrect fills |
| `accuracy` | number | Proportion correct |
| `solved` | boolean | Whether the puzzle was completed |
| `planning_time_ms` | number | Time before first fill (ms) |
| `execution_time_ms` | number | Time from first fill to completion (ms) |
| `duration` | number | Total time on this puzzle (ms) |
| `level` | number | Puzzle difficulty |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
