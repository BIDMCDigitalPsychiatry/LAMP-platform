---
slug: "/activities/reference/sliding-puzzle"
sidebar_position: 25
sidebar_label: Sliding Puzzle
title: "Sliding Puzzle"
---

# Sliding Puzzle

The Sliding Puzzle is a classic spatial problem-solving task that measures planning depth, spatial working memory, and problem-solving strategy. Participants slide numbered tiles to arrange them in order. The implementation computes the mathematically optimal solution (via IDA* with Manhattan distance heuristic) so move efficiency can be precisely measured.

**ActivitySpec:** `lamp.sliding_puzzle`

**Cognitive domain:** Spatial planning, spatial working memory, problem-solving

## Configuration

| Setting | Description |
|---------|-------------|
| **Difficulty** | Controls grid size and number of puzzles |
| **Time Limit** | Per-puzzle timeout in seconds (0 = untimed) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Difficulty | `difficulty` | string | "medium" |
| Time Limit | `time_limit_per_puzzle_s` | number | 0 |

</details>

### Sample Instructions

*"Slide the numbered tiles to put them in order, from 1 in the top-left to the last number in the bottom-right. Tap a tile next to the empty space to move it. Solve each puzzle as quickly and in as few moves as possible."*

## Usage

Grid sizes vary by difficulty: 3x3 (easy, 5 puzzles, 30 scramble moves), 4x4 (medium, 3 puzzles, 60 scramble moves), 5x5 (hard, 3 puzzles, 100 scramble moves). Only tiles adjacent to the empty space can move. The optimal solution is computed via IDA* with Manhattan distance and linear conflict heuristic. Move efficiency (optimal_moves / actual_moves) is the primary metric. For 5x5 puzzles, the optimal solution is not computed because the problem is NP-hard at that scale.

### Scoring

Move efficiency is the primary metric — the ratio of optimal moves to actual moves (1.0 = perfect). Mean solve time is the secondary metric.

<details>
<summary>References</summary>

1. Klahr, D. & Robinson, M. (1981). Formal assessment of problem-solving and planning processes in preschool children. Cognitive Psychology, 13(1), 113-148. DOI: [10.1016/0010-0285(81)90006-2](https://doi.org/10.1016/0010-0285(81)90006-2)

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Overall score |
| `correct_answers` | number | Puzzles solved |
| `total_questions` | number | Total puzzles |
| `mean_move_efficiency` | number | Average optimal/actual move ratio |
| `total_moves` | number | Total moves across all puzzles |
| `mean_solve_time_ms` | number | Average time to solve (ms) |
| `puzzles_total` | number | Number of puzzles presented |
| `puzzles_solved` | number | Puzzles completed |
| `puzzles_timed_out` | number | Puzzles where time expired |
| `difficulty` | string | Difficulty level used |
| `grid_size` | number | Grid dimension |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per puzzle.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Puzzle index |
| `type` | string | Outcome: "solved", "timeout", or "exit" |
| `puzzle_number` | number | Puzzle sequence number |
| `grid_size` | number | Grid dimension |
| `moves` | number | Participant's move count |
| `optimal_moves` | number | IDA*-computed minimum moves (null for 5x5) |
| `move_efficiency` | number | optimal_moves / moves (null for 5x5) |
| `solved` | boolean | Whether the puzzle was solved |
| `rt_ms` | number | Total solve time (ms) |
| `duration` | number | Total time on this puzzle (ms) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
