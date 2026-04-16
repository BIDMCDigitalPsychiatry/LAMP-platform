---
slug: "/activities/reference/maze-game"
sidebar_position: 11
sidebar_label: Maze Game
title: "Maze Game"
---

# Maze Game


The Maze task measures motor control and spatial problem-solving. Digital maze games have been utilized in assessing visual cognition in individuals with neurodegenerative disorders, brain injury, and schizophrenia. Participants tilt their phone to move a ball and navigate out of the maze. Difficulty increases with each level.

**ActivitySpec:** `lamp.maze_game`

**Cognitive domain:** Visual cognition, spatial problem-solving

## Configuration

The game automatically progresses as levels are completed. No researcher-defined customization is necessary.

### Sample Instructions

*"In this game, you can tilt your phone to control a small ball seen on your screen. Try to navigate the ball out of the center of the maze and into the open space. The faster you escape, the more points you will accrue."*

## Usage

The participant tilts their phone to move a ball through the maze. The first level starts with one ball and two rings. Each subsequent level adds complexity (more balls, more intricate puzzle designs).

### Scoring

Scoring is based on the time taken to complete each level and the number of levels completed.

<details>
<summary>References</summary>

1. Jin, R. et al. (2020) Current cognition tests, potential virtual reality applications, and serious games in cognitive assessment. Journal of Clinical Medicine, 9(10), 3287. DOI: [10.3390/jcm9103287](https://doi.org/10.3390/jcm9103287)
2. Livingstone, S. A. & Skelton, R. W. (2007) Virtual environment navigation tasks and the assessment of cognitive deficits in individuals with brain injury. Behavioural Brain Research, 185(1), 21-31. DOI: [10.1016/j.bbr.2007.07.015](https://doi.org/10.1016/j.bbr.2007.07.015)
3. Wilkins, L. K. et al. (2017) Hippocampal activation and memory performance in schizophrenia depend on strategy use in a virtual maze. Psychiatry Research: Neuroimaging, 268, 1-8. DOI: [10.1016/j.pscychresns.2017.07.007](https://doi.org/10.1016/j.pscychresns.2017.07.007)

</details>

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/ROXLDutOhxo?si=XsMLskiTP0P8jell" title="Maze Game gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/maze-gameplay.png" alt="Maze Game gameplay" width="280" />
  <img src="/img/cognitive-games/maze-conclusion.png" alt="Maze Game conclusion" width="150" />
</div>

## Data

### temporal_slices

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Number of concentric rings in the maze (starting from 2) |
| `value` | number | Time elapsed for this level (ms) |
| `type` | boolean | `true` = completed, `false` = not completed |
| `duration` | number | Time for this level (ms) — same value as `value` |
| `level` | number | Game level (1-12) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
