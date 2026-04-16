---
slug: "/activities/reference/memory-game"
sidebar_position: 17
sidebar_label: Memory Game
title: "Memory Game"
---

# Memory Game


A visual association memory task (TicTacToe-style) measuring visual, spatial, and temporal associative memory. Participants view a grid of gray boxes, then a short sequence of photos replaces some boxes before disappearing. The participant must recall both the order and location of the photos across learning trials, followed by a delayed recall.

**ActivitySpec:** `lamp.memory_game`

**Cognitive domain:** Visual, spatial, and temporal memory

## Configuration

| Setting | Description |
|---------|-------------|
| **Foils** | Number of incorrect images: 3 out of 9, or 4 out of 12 |
| **Animation interval** | Time in seconds between consecutive images in a sequence |
| **Animation persistence** | How long the full sequence remains visible after all images are shown |

### Sample Instructions

*"You will see a short sequence of pictures appear in the gray boxes. Please remember the pictures and their locations in order."*

## Usage

1. **Learning trials** — A sequence of photos appears in the grid. The participant identifies the order and locations.
2. **Delay** — A short timer period.
3. **Recall** — The participant reproduces the sequence without seeing it first.

The task with 3 learning phases can be completed in about 90 seconds (excluding the delay).

<details>
<summary>References</summary>

1. Lindeboom, J. et al. (2002) Visual association test to detect early dementia of the Alzheimer type. Journal of Neurology, Neurosurgery & Psychiatry, 73(2), 126-133.

</details>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/memory-game-gameplay1.png" alt="Memory Game screen 1" width="280" />
  <img src="/img/cognitive-games/memory-game-gameplay2.png" alt="Memory Game screen 2" width="280" />
</div>

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: '1rem'}}>
  <img src="/img/cognitive-games/memory-game-smarta-1.png" alt="Memory Game trial start" width="280" />
  <img src="/img/cognitive-games/memory-game-smarta-2.png" alt="Memory Game sequence shown" width="280" />
  <img src="/img/cognitive-games/memory-game-smarta-3.png" alt="Memory Game recall phase" width="280" />
  <img src="/img/cognitive-games/memory-game-smarta-4.png" alt="Memory Game selection" width="280" />
  <img src="/img/cognitive-games/memory-game-smarta-5.png" alt="Memory Game delayed recall" width="280" />
  <img src="/img/cognitive-games/memory-game-smarta-6.png" alt="Memory Game result" width="280" />
  <img src="/img/cognitive-games/memory-game-smarta-7.png" alt="Memory Game completion" width="280" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `total_learning/encoding_points` | number | Total correct during encoding trials |
| `total_recall/recall_points` | number | Total correct during delayed recall |
| `time_of_recall_phase` | number | Time for recall phase (ms) |
| `total_questions` | number | Sequence length (3 or 4, based on foils setting) |
| `correct_answers` | number | Correct taps in final round |
| `wrong_answers` | number | Incorrect taps in final round |
| `point` | number | `2` if 100% recall, else `1` |
| `locations` | number[] | Grid positions where target images were placed |
| `images` | array | Target image identifiers (category and index) |
| `time_taken_for_each_trial` | object | Per-trial timing (keyed by trial number, values in ms) |
| `target_sequence` | object | Full target sequence details (image IDs, selection grid, sequence order) |
| `images_in_selection_grid` | array | All images in the selection grid with position and whether each is a target |
| `per_round` | array | Detailed per-round data with selection time, placement time, and correctness for each image |
| `orientation_survey` | object | Delay-period orientation responses (same format as Funny Memory: start_time, day, today_date, month, year, season) |

### temporal_slices

Entries alternate between image selection (picking from the grid) and location placement (placing on the board):

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Step type: `1` = image selection, `2` = location placement |
| `value` | number | Grid index clicked |
| `type` | boolean | `true` = correct, `false` = incorrect |
| `duration` | number | Time since last tap (ms) |
| `level` | number | Trial number (encoding trials + 1 = recall trial) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
