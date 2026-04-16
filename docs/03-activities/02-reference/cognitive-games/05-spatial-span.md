---
slug: "/activities/reference/spatial-span"
sidebar_position: 5
sidebar_label: Spatial Span
title: "Spatial Span"
---

# Spatial Span


Spatial Span assesses visuospatial memory, derived from the Corsi Block Test and Wechsler Spatial Span tests. White squares are arranged in a grid; squares "light up" (change to green) one at a time, and the participant must reproduce the sequence. Spatial span assessments have been used in populations including individuals with autism, psychosis, and depression.

**ActivitySpec:** `lamp.spatial_span`

**Cognitive domain:** Visuospatial memory, working memory

## Configuration

1. Navigate to the Activities tab and click **+ Add**.
2. Select **Spatial Span**.
3. Configure:

| Setting | Description |
|---------|-------------|
| **Tap Order** | Forward Spatial Span or Backward Spatial Span |

**Forward:** Reproduce the sequence in the same order.
**Backward:** Reproduce the sequence in reverse order — also measures working memory as processing is required before reproducing.

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type |
|-------------------|-----------|------|
| Tap Order | `reverse_tapping` | boolean (`true` = Backward, `false` = Forward) |

</details>

| Setting | API Field | Type | Default | Description |
|---------|-----------|------|---------|-------------|
| Starting Span | `starting_span` | number | 2 | Starting sequence length |
| Max Levels | `max_levels` | number | 5 | Maximum number of sequences |
| Max Failures | `max_failures` | number | 2 | Consecutive failures to end the game |

### Sample Instructions

**Forward:** *"You will see a grid of boxes. The boxes will light up in a certain order. Remember that order, and then tap the boxes in the same order in which they lit up. Each level will have more boxes light up. See how far you can get!"*

**Backward:** *"You will see a grid of boxes. The boxes will light up in a certain order. Remember that order, and then tap the boxes in the REVERSE order in which they lit up. Each level will have more boxes light up. See how far you can get!"*

## Usage

The game uses a 4x4 grid (16 positions). Squares highlight in sequence, and the participant must tap them in the same order. Sequences start at a configurable length (default 2) and increase. Two consecutive failures at the same span length end the game.

### Scoring

Scoring is based on how many times participants can correctly complete the task within the time limit.

<details>
<summary>References</summary>

1. Woods, D. L. et al. (2016) An improved spatial span test of visuospatial memory. Memory, 24(8), 1142-1155. DOI: [10.1080/09658211.2015.1076849](https://doi.org/10.1080/09658211.2015.1076849)
2. Wang, Y. et al. (2017) A meta-analysis of working memory impairments in autism spectrum disorders. Neuropsychology Review, 27, 46-61. DOI: [10.1007/s11065-016-9336-y](https://doi.org/10.1007/s11065-016-9336-y)
3. Sheffield, J. M. et al. (2018) Cognitive deficits in psychotic disorders: a lifespan perspective. Neuropsychology Review, 28, 509-533. DOI: [10.1007/s11065-018-9388-2](https://doi.org/10.1007/s11065-018-9388-2)
4. Douglas, K. M. et al. (2018) Prevalence of cognitive impairment in major depression and bipolar disorder. Bipolar Disorders, 20(3), 260-274. DOI: [10.1111/bdi.12602](https://doi.org/10.1111/bdi.12602)

</details>

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/gn9gyoi8G0M?si=tQrlz3QqRJW1meCu" title="Spatial Span gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/spatial-span-forward.png" alt="Spatial Span forward" width="280" />
  <img src="/img/cognitive-games/spatial-span-gameplay.png" alt="Spatial Span gameplay" width="280" />
  <img src="/img/cognitive-games/spatial-span-customization.png" alt="spatial span customization" width="500" />
  <img src="/img/cognitive-games/spatial-span-conclusion.png" alt="Spatial Span conclusion" width="150" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `mode` | string | "forward" or "backward" |
| `max_span` | number | Maximum sequence length correctly recalled (primary outcome) |
| `total_score` | number | Total correct sequences |
| `starting_span` | number | Starting sequence length |
| `level_results` | array | Per-sequence results (see below) |
| `levels_completed` | number | Number of sequences completed |
| `total_levels` | number | Total sequences presented |
| `score` | number | Legacy score |
| `correct_answers` | number | Correct sequences |
| `wrong_answers` | number | Incorrect sequences |
| `point` | number | Legacy indicator |
| `StartTime` | number | Game start timestamp (ms) |
| `EndTime` | number | Game end timestamp (ms) |
| `max_score` | number | Legacy: maximum possible score |
| `type` | string | Legacy: game type |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Square tapped |
| `type` | boolean | `true` = correct, `false` = incorrect |
| `value` | null | Unused |
| `duration` | number | Time since last tap (ms) |
| `level` | number | Sequence length |
| `span` | number | Current span being tested |
| `tap_index` | number | Position in the participant's response sequence |

### Cortex Features

[`spatial_span`](/developer/cortex/features/raw-features) (raw) → [`game_level_scores`](/developer/cortex/features/primary-features#game-level-scores) (primary) → [`game_results`](/developer/cortex/features/secondary-features#assessment-results) (secondary)

Game results returns average tap time per level.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
