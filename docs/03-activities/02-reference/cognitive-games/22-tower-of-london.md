---
slug: "/activities/reference/tower-of-london"
sidebar_position: 22
sidebar_label: Tower of London
title: "Tower of London"
---

# Tower of London

The Tower of London task is a classic neuropsychological test of executive function and planning ability (Shallice, 1982). Participants must rearrange colored balls on three pegs to match a goal pattern, using the fewest moves possible. The task engages prefrontal cortical regions involved in goal-directed planning and problem-solving.

**ActivitySpec:** `lamp.tower_of_london`

**Cognitive domain:** Planning, problem-solving, executive function

## Configuration

| Setting | Description |
|---------|-------------|
| **Difficulty** | "easy" (1-3 moves), "medium" (2-5 moves), "hard" (4-7 moves) |
| **Max Problems** | Number of problems to present |
| **Time Limit** | Time limit per problem (seconds) |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type | Default |
|-------------------|-----------|------|---------|
| Difficulty | `difficulty` | string | "medium" |
| Max Problems | `max_problems` | number | 12 |
| Time Limit | `time_limit_per_problem_s` | number | 60 |

</details>

### Sample Instructions

*"Move the colored balls to match the goal pattern shown at the top. Tap a ball to pick it up, then tap a peg to place it. You can only move the top ball on each peg. Try to solve each puzzle in as few moves as possible."*

## Usage

The task presents 3 pegs with capacities of 3, 2, and 1 (left to right) and 3 colored balls (Red, Green, Blue). Only the top ball on a peg can be moved. Problems progress from 1-move to 5-move minimum solutions, computed via BFS. A per-problem time limit prevents stalling. Difficulty controls problem complexity: easy presents problems requiring 1-3 moves, medium requires 2-5, and hard requires 4-7.

### Scoring

Each problem is scored as solved (within minimum moves or with excess), timed out, or exited. Key metrics are problems solved in minimum moves, mean excess moves, and mean planning time (time before first move).

<details>
<summary>References</summary>

1. Shallice, T. (1982). Specific impairments of planning. Philosophical Transactions of the Royal Society B, 298(1089), 199-209. DOI: [10.1098/rstb.1982.0082](https://doi.org/10.1098/rstb.1982.0082)

</details>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Overall score |
| `correct_answers` | number | Problems solved |
| `total_questions` | number | Total problems attempted |
| `problems_attempted` | number | Problems presented |
| `problems_solved` | number | Problems completed successfully |
| `problems_solved_in_minimum` | number | Problems solved in optimal move count |
| `total_excess_moves` | number | Sum of extra moves beyond minimum across all problems |
| `mean_excess_moves` | number | Average excess moves per problem |
| `mean_planning_time_ms` | number | Average time before first move (ms) |
| `mean_execution_time_ms` | number | Average time from first move to completion (ms) |
| `problems_timed_out` | number | Problems where time expired |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

One entry per problem.

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Problem index |
| `type` | string | Outcome: "solved", "timeout", or "exit" |
| `problem_number` | number | Problem sequence number |
| `minimum_moves` | number | BFS-computed optimal solution length |
| `actual_moves` | number | Participant's move count |
| `excess_moves` | number | actual_moves - minimum_moves |
| `solved` | boolean | Whether the problem was solved |
| `planning_time_ms` | number | Time before first move (ms) |
| `execution_time_ms` | number | Time from first move to completion (ms) |
| `duration` | number | Total time on this problem (ms) |
| `move_sequence` | string[] | Sequence of moves made |
| `level` | number | Problem difficulty (minimum moves) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
