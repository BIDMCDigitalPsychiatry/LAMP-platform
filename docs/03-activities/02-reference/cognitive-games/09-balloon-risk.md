---
slug: "/activities/reference/balloon-risk"
sidebar_position: 9
sidebar_label: Balloon Risk
title: "Balloon Risk"
---

# Balloon Risk


The Balloon Analog Risk Task (BART) is a computerized risk-reward assessment. The participant taps to inflate a balloon — each tap increases potential points, but if the balloon pops, all points for that balloon are lost. BART scores correlate with self-reported sensation seeking, impulsivity, and real-world risk behaviors including drug use, gambling, and sexually risky behavior.

**ActivitySpec:** `lamp.balloon_risk`

**Cognitive domain:** Risk-taking behavior, decision-making

## Configuration

| Setting | Description |
|---------|-------------|
| **Balloon Count** | Number of balloons (trials) in the task |
| **Breakpoint Mean** | Mean number of taps before the balloon bursts |
| **Breakpoint Standard Deviation** | Variability in the burst threshold |

<details>
<summary>API settings fields</summary>

| Dashboard Setting | API Field | Type |
|-------------------|-----------|------|
| Balloon Count | `balloon_count` | number |
| Breakpoint Mean | `breakpoint_mean` | number |
| Breakpoint Std Dev | `breakpoint_std` | number |

</details>

### Sample Instructions

*"Tap the button labeled 'Pump Up Balloon' to inflate it as large as you can, before the balloon bursts. When you feel like you can't inflate it anymore without it bursting, tap the button to 'Collect Points'. The number of times you pumped up the balloon will be equal to the number of points you get. If the balloon bursts, you get no points!"*

## Usage

The participant inflates a balloon by tapping. At any point, they can choose to "Collect Points" to bank the current inflation count. If the balloon pops before collecting, the participant receives zero points for that balloon. The burst threshold varies per balloon.

### Scoring

If the balloon does not pop and the user collects, points equal the number of pumps. If the balloon pops, the user receives 0 points for that trial.

<details>
<summary>References</summary>

1. Lejuez, C. W. et al. (2002) Evaluation of a behavioral measure of risk taking: the Balloon Analogue Risk Task (BART). Journal of Experimental Psychology: Applied, 8(2), 75. DOI: [10.1037//1076-898X.8.2.75](https://doi.org/10.1037//1076-898X.8.2.75)
2. Hunt, M. K. et al. (2005) Construct validity of the BART: associations with psychopathy and impulsivity. Assessment, 12(4), 416-428. DOI: [10.1177/1073191105278740](https://doi.org/10.1177/1073191105278740)
3. Lauriola, M. et al. (2014) Individual differences in risky decision making: A meta-analysis of sensation seeking and impulsivity with the BART. Journal of Behavioral Decision Making, 27(1), 20-36. DOI: [10.1002/bdm.1784](https://doi.org/10.1002/bdm.1784)

</details>

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/NL8X5Jyl0cM?si=yhWMnokG_f0sndHv" title="Balloon Risk gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/balloon-risk-gameplay.png" alt="Balloon Risk gameplay" width="280" />
  <img src="/img/cognitive-games/balloon-risk-customization.png" alt="ualloon risk customization" width="500" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `total_earnings` | number | Total points earned |
| `total_pumps` | number | Total pump taps across all balloons |
| `balloons_collected` | number | Balloons where points were banked |
| `balloons_popped` | number | Balloons that burst |
| `total_balloons` | number | Total balloons presented |
| `avg_pumps` | number | Average pumps per balloon |
| `avg_pumps_collected` | number | Average pumps on collected balloons (standard BART risk index) |
| `pop_rate` | number | Proportion of balloons that popped |
| `balloon_count` | number | Configuration: number of balloons |
| `breakpoint_mean` | number | Configuration: mean burst threshold |
| `breakpoint_std` | number | Configuration: burst threshold variability |
| `breakpoints` | number[] | Actual burst thresholds for each balloon |
| `balloon_results` | array | Per-balloon detail (see below) |
| `score` | number | Legacy score |
| `correct_answers` | number | Balloons collected |
| `total_questions` | number | Total balloons |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

Each entry in `balloon_results`:

| Field | Type | Description |
|-------|------|-------------|
| `pumps` | number | Pumps on this balloon |
| `collected` | boolean | Whether points were collected |
| `earnings` | number | Points earned (0 if popped) |
| `breakpoint` | number | Burst threshold for this balloon |

### temporal_slices

The activity emits three event types per balloon:

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Balloon number |
| `type` | string | Event type: "pump", "burst", or "collect" |
| `value` | number | Cumulative pumps (0 for burst events) |
| `duration` | number | Time since last event (ms) |
| `level` | number | Balloon number |
| `pumps` | number | Cumulative pump count |
| `event` | string | "pump", "burst", or "collect" |

### Cortex Features

[`balloon_risk`](/developer/cortex/features/raw-features) (raw) → [`game_level_scores`](/developer/cortex/features/primary-features#game-level-scores) (primary) → [`game_results`](/developer/cortex/features/secondary-features#assessment-results) (secondary)

Game results returns average number of pumps per balloon.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
