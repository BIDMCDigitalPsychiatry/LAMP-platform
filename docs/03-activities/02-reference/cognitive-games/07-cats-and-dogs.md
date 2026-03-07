---
slug: "/activities/reference/cats-and-dogs"
sidebar_position: 7
sidebar_label: Cats and Dogs
title: "Cats and Dogs"
---

# Cats and Dogs


Originally developed for assessing early-stage Parkinson's disease, Cats and Dogs requires participants to remember where different stimuli are hidden, reproduce their locations, and switch between which stimuli to respond to. The game assesses visual and working memory, attention, response control, and set-shifting.

**ActivitySpec:** `lamp.cats_and_dogs`

**Cognitive domain:** Visual and working memory, attention, response control, set-shifting

## Configuration

The game automatically progresses as levels are completed. No researcher-defined customization is necessary.

### Sample Instructions

*"In this game, you will see a screen with many boxes. These boxes will 'lift', revealing either a dog, cat, or nothing behind them. Your task is to tap the correct boxes, based on what is behind each box. The instructions for which boxes are correct will change depending on the level, so pay attention to the animals!"*

## Usage

Boxes on the screen temporarily disappear, revealing dogs or cats behind some of them. After the boxes reappear, the participant must select the boxes with the correct animal. As the game progresses, the instructions change — the participant must switch between selecting cats or dogs, functioning as go/no-go stimuli. Later trials require remembering more cues.

### Scoring

Scoring is based on the number of correct selections within the timeframe of the game.

<details>
<summary>References</summary>

1. Weil, R. S. et al. (2017) The cats-and-dogs test: a tool to identify visuoperceptual deficits in Parkinson's disease. Movement Disorders, 32(12), 1789-1790. DOI: [10.1002/mds.27176](https://doi.org/10.1002/mds.27176)

</details>

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/1EXixCUWfSQ?si=Ar06fr-daP7VCzNO" title="Cats and Dogs gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Screenshots

<img src="/img/cognitive-games/cats-and-dogs-gameplay.png" alt="Cats and Dogs gameplay" width="280" />

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `point` | number | `2` if all correct, else `1` |
| `correct_answers` | number | Total correct taps |
| `wrong_answers` | number | Total incorrect taps |
| `total_questions` | number | Total trials (always 45) |
| `score` | number | Score percentage |

### temporal_slices

| Field | Description |
|-------|-------------|
| `item` | Box number (1–10) |
| `type` | `true` = correct, `false` = incorrect |
| `duration` | Time since last tap (ms) |
| `level` | Game level (1–3) |
| `value` | Unused |

### Cortex Features

[`cats_and_dogs`](/developer/cortex/features/raw-features) (raw) → [`game_level_scores`](/developer/cortex/features/primary-features#game-level-scores) (primary) → [`game_results`](/developer/cortex/features/secondary-features#assessment-results) (secondary)

Game results returns average tap time per level.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
