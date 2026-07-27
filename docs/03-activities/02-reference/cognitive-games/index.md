---
sidebar_label: Overview
title: "Cognitive Games"
description: "mindLAMP's 30 cognitive games, grouped by domain — attention, working memory, processing speed, executive function, learning & memory, spatial cognition, language, social cognition, and decision-making."
slug: /activities/reference/cognitive-games
---

# Cognitive Games

> For a high-level overview of data collection capabilities, see [Collect Rich Data](/capabilities/collect).

mindLAMP includes **30 cognitive games** — brief, tap-based assessments of cognitive performance. Each is built on an established experimental paradigm from cognitive psychology and neuropsychology, and each records **timestamped, structured output**: not only whether a response was correct, but the reaction times and response patterns behind it.

The games are grouped below by cognitive domain; each links to its reference page for the full data schema, scoring, and configuration. For **ActivitySpec** identifiers and Cortex-feature status, see the [Activity Reference](/activities/reference); for the shared event structure, see [Activity Data Format](/activities/data).

## Attention & inhibitory control

| Game | What it measures | Primary output |
|------|------------------|----------------|
| [Stroop](/activities/reference/stroop) | Selective attention and interference control | Stroop effect (incongruent − congruent RT) |
| [Flanker](/activities/reference/flanker) | Attentional control and conflict resolution | Flanker effect (response-time cost) |
| [Pop the Bubbles](/activities/reference/pop-the-bubbles) | Sustained attention and response inhibition (go/no-go) | Commission and omission error rates |
| [Cats and Dogs](/activities/reference/cats-and-dogs) | Attention, response control, and set-shifting | Accuracy and response time |
| [D-Cog](/activities/reference/d-cog) | Adaptive attention and response control | IRT ability estimate (0–10) |

## Working memory

| Game | What it measures | Primary output |
|------|------------------|----------------|
| [N-Back](/activities/reference/nback) | Working-memory updating | d′ (sensitivity) and response criterion |
| [Digit Span](/activities/reference/digit-span) | Verbal working-memory span | Forward and backward span |
| [Spatial Span](/activities/reference/spatial-span) | Visuospatial working-memory span | Maximum Corsi span |
| [Memory Match](/activities/reference/memory-match) | Short-term visuospatial recognition | Mean moves to clear; perfect rounds |

## Processing speed

| Game | What it measures | Primary output |
|------|------------------|----------------|
| [Simple & Choice Reaction Time](/activities/reference/simple-rt) | Psychomotor speed and decision time | Simple and choice reaction times |
| [Symbol-Digit Substitution](/activities/reference/symbol-digit-substitution) | Processing speed and associative learning | Correct responses per minute |
| [Jewels A](/activities/reference/jewels-a) | Visuomotor processing speed (Trail Making A) | Completion time and accuracy |

## Executive function & planning

| Game | What it measures | Primary output |
|------|------------------|----------------|
| [Tower of London](/activities/reference/tower-of-london) | Planning and problem-solving | Problems solved in the minimum moves; excess moves |
| [Wisconsin Card Sorting Test](/activities/reference/wcst) | Cognitive flexibility and set-shifting | Perseverative errors; categories completed |
| [Water Sort](/activities/reference/water-sort) | Planning and sequencing | Solved in the minimum pours; excess pours |
| [Nonogram](/activities/reference/nonogram) | Deductive reasoning and constraint satisfaction | Puzzles solved; errors |
| [Trails B](/activities/reference/trails-b) | Set-shifting (Trail Making B) | Completion time and accuracy |
| [Jewels B](/activities/reference/jewels-b) | Set-shifting (Trail Making B analog) | Completion time and accuracy |

## Learning & memory

| Game | What it measures | Primary output |
|------|------------------|----------------|
| [Funny Memory](/activities/reference/funny-memory) | Associative learning and recall | Forced-choice recall accuracy |
| [Memory Game](/activities/reference/memory-game) | Sequence and spatial-location recall | Encoding and recall accuracy |
| [Fragmented Letters](/activities/reference/fragmented-letters) | Visual perceptual identification | Audio responses (scored offline) |

## Spatial cognition

| Game | What it measures | Primary output |
|------|------------------|----------------|
| [Mental Rotation](/activities/reference/mental-rotation) | Spatial visualization | Accuracy and reaction time by rotation angle |
| [Sliding Puzzle](/activities/reference/sliding-puzzle) | Spatial planning and problem-solving | Move efficiency (optimal ÷ actual) |
| [Maze Game](/activities/reference/maze-game) | Spatial navigation | Time and levels completed |

## Language

| Game | What it measures | Primary output |
|------|------------------|----------------|
| [Lexical Decision](/activities/reference/lexical-decision) | Lexical access and word recognition | d′; word-frequency effect |
| [Letter Logic](/activities/reference/letter-logic) | Vocabulary and hypothesis testing | Rounds solved; mean guesses |

## Social cognition

| Game | What it measures | Primary output |
|------|------------------|----------------|
| [Emotion Recognition](/activities/reference/emotion-recognition) | Facial-emotion identification | Correct identifications per trial |

## Decision-making & risk

| Game | What it measures | Primary output |
|------|------------------|----------------|
| [Balloon Risk](/activities/reference/balloon-risk) | Risk-taking (BART) | Adjusted average pumps |
| [Spin the Wheel](/activities/reference/spin-the-wheel) | Reward learning under uncertainty | Risk-taking rate; final balance |
| [Delay Discounting](/activities/reference/delay-discounting) | Temporal impulsivity | Area under the curve; hyperbolic *k* |

## Data & scoring

Every game produces an **ActivityEvent** with a session-level summary (`static_data`) and per-action detail (`temporal_slices`), so both the outcome and the process behind it are available in the raw data export. The metrics above are computed in-app and stored on each event (Fragmented Letters is the exception — it is scored offline from its audio responses).

A subset of the games — Jewels A and B, Spatial Span, Cats and Dogs, and Pop the Bubbles — also feed derived **Cortex** features for longitudinal analysis. The [Activity Reference](/activities/reference) lists each game's ActivitySpec identifier and its current Cortex status.

## Used in research

mindLAMP's cognitive games have been validated against gold-standard neuropsychological measures: the Jewels Trail Tests (digital Trail Making analogs) have been validated against the paper Trail Making Test in schizophrenia ([Shvetz et al., 2021](https://doi.org/10.1038/s41537-021-00194-9)) and in major depression ([Thérond, 2021](https://hdl.handle.net/20.500.14718/41234)). The broader smartphone battery has been evaluated in multi-site schizophrenia cohorts ([Castillo et al., 2025](https://doi.org/10.1038/s41537-025-00660-8)).

These assessments have also been used in longitudinal digital-phenotyping research across schizophrenia ([Liu et al., 2019](https://doi.org/10.1016/j.scog.2019.100144)), Parkinson's disease ([Weizenbaum et al., 2021](https://doi.org/10.1017/s1355617721000503)), and first-episode psychosis ([Lakhtakia et al., 2022](https://doi.org/10.1177/20552076221133758)).

For the full list of studies, see [Publications](/publications).
