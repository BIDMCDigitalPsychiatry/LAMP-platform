---
sidebar_label: Activity Reference
title: "Activity Reference"
description: "Per-activity documentation — surveys, cognitive games, interventions, data schemas, and Cortex features."
---

# Activity Reference

Detailed documentation for each activity available in mindLAMP. Every page covers what the activity measures, how it works, its data schema (`static_data` and `temporal_slices` fields), Cortex features, and configuration options.

Every activity has a unique **ActivitySpec** identifier used in the API and data events. For the general event structure shared by all activities, see [Activity Data Format](/activities/data).

## Learn

| Activity | ActivitySpec | Cortex |
|----------|------------|:------:|
| [Tips](tips) | `lamp.tips` | — |

## Assess

| Activity | ActivitySpec | Cortex |
|----------|------------|:------:|
| [Surveys](surveys) | `lamp.survey` | [Yes](surveys#cortex-features) |
| [Jewels A](jewels-a) | `lamp.jewels_a` | [Yes](jewels-a#cortex-features) |
| [Jewels B](jewels-b) | `lamp.jewels_b` | [Yes](jewels-b#cortex-features) |
| [Trails B](trails-b) | `lamp.trails_b` | [Raw only](trails-b#cortex-features) |
| [Spatial Span](spatial-span) | `lamp.spatial_span` | [Yes](spatial-span#cortex-features) |
| [Digit Span](digit-span) | `lamp.digit_span` | [Raw only](digit-span#cortex-features) |
| [Cats and Dogs](cats-and-dogs) | `lamp.cats_and_dogs` | [Yes](cats-and-dogs#cortex-features) |
| [Pop The Bubbles](pop-the-bubbles) | `lamp.pop_the_bubbles` | [Yes](pop-the-bubbles#cortex-features) |
| [Balloon Risk](balloon-risk) | `lamp.balloon_risk` | [Yes](balloon-risk#cortex-features) |
| [Spin The Wheel](spin-the-wheel) | `lamp.spin_wheel` | — |
| [Maze Game](maze-game) | `lamp.maze_game` | — |
| [Emotion Recognition](emotion-recognition) | `lamp.emotion_recognition` | — |
| [Symbol-Digit Substitution](symbol-digit-substitution) | `lamp.symbol_digit_substitution` | — |
| [D-Cog](d-cog) | `lamp.dcog` | [Raw only](d-cog#cortex-features) |
| [Funny Memory](funny-memory) | `lamp.funny_memory` | [Raw only](funny-memory#cortex-features) |
| [Fragmented Letters](fragmented-letters) | `lamp.fragmented_letters` | [Raw only](fragmented-letters#cortex-features) |
| [Memory Game](memory-game) | `lamp.memory_game` | — |
| [Simple RT](simple-rt) | `lamp.simple_rt` | — |
| [Stroop](stroop) | `lamp.stroop` | — |
| [Flanker](flanker) | `lamp.flanker` | — |
| [N-Back](nback) | `lamp.nback` | — |
| [Tower of London](tower-of-london) | `lamp.tower_of_london` | — |
| [WCST](wcst) | `lamp.wcst` | — |
| [Water Sort](water-sort) | `lamp.water_sort` | — |
| [Sliding Puzzle](sliding-puzzle) | `lamp.sliding_puzzle` | — |
| [Nonogram](nonogram) | `lamp.nonogram` | — |
| [Memory Match](memory-match) | `lamp.memory_match` | — |
| [Mental Rotation](mental-rotation) | `lamp.mental_rotation` | — |
| [Lexical Decision](lexical-decision) | `lamp.lexical_decision` | — |
| [Letter Logic](letter-logic) | `lamp.letter_logic` | — |
| [Delay Discounting](delay-discounting) | `lamp.delay_discounting` | — |
| [Voice Recording](voice-recording) | `lamp.recording` | [Raw only](voice-recording#cortex-features) |
| [DBT Diary Card](dbt-diary-card) | `lamp.dbt_diary_card` | — |

## Manage

| Activity | ActivitySpec | Cortex |
|----------|------------|:------:|
| [Breathe](breathe) | `lamp.breathe` | — |
| [Journal](journal) | `lamp.journal` | — |
| [Scratch Card](scratch-card) | `lamp.scratch_card` | — |

## Other

| Activity | ActivitySpec | Cortex |
|----------|------------|:------:|
| [Activity Groups](activity-groups) | `lamp.group` | — |
