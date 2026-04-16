---
slug: "/activities/reference/spin-the-wheel"
sidebar_position: 10
sidebar_label: Spin the Wheel
title: "Spin the Wheel"
---

# Spin the Wheel


Based on the Iowa Gambling Task, Spin the Wheel measures decision-making and risk-taking behavior. The Iowa Gambling Task has been effectively used in studying substance abuse, pathological gambling, and schizophrenia. The game presents wheels that can be spun by selecting one of four buttons — each spin can result in a win or loss.

**ActivitySpec:** `lamp.spin_wheel`

**Cognitive domain:** Risk-taking behavior, decision-making

## Configuration

| Setting | Description |
|---------|-------------|
| **Spins per game** | Number of spins before the game ends |
| **Starting balance** | Initial balance (default $2000) |
| **Sum** | Amount added or subtracted per spin: 50, 100, or 250 |
| **Probability** | Probability of landing on a given sum: 0%, 25%, 50%, or 75% |

### Sample Instructions

*"The game presents you with two wheels that can be spun by selecting one of four buttons at the bottom of the screen. The colors of the buttons do not correspond to the colors on the wheel. Each spin can result in a win or loss of money, with the wheel at the top displaying money won and the bottom displaying money lost. The total amount remaining is displayed at the top of the screen. You start with $2000 and have 20 spins per game by default."*

## Usage

The game presents 4 buttons, with 2 randomly assigned as high-risk and 2 as low-risk each session. Buttons do not display their risk level — participants discover risk through experience. High-risk buttons offer larger potential rewards but also larger potential losses. The participant selects one of four buttons to spin the wheel. Each spin results in a gain or loss. The total balance is tracked at the top of the screen. The game ends after the configured number of spins.

### Scoring

Scoring is based on the amount of money the user has at the end of the game.

<details>
<summary>References</summary>

1. Bechara, A. et al. (1994) Insensitivity to future consequences following damage to human prefrontal cortex. Cognition, 50(1-3), 7-15. DOI: [10.1016/0010-0277(94)90018-3](https://doi.org/10.1016/0010-0277(94)90018-3)
2. Bechara, A. (2007) Iowa Gambling Task Professional Manual. Lutz: Psychological Assessment Resources, Inc.
3. Bowman, C. H. et al. (2005) Artificial time constraints on the Iowa gambling task. Brain and Cognition, 57, 21-25. DOI: [10.1016/j.bandc.2004.08.015](https://doi.org/10.1016/j.bandc.2004.08.015)

</details>

### Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/65pG23pwAmY?si=aaD8at4H6v6vRojd" title="Spin the Wheel gameplay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/spin-the-wheel-gameplay.png" alt="Spin the Wheel gameplay" width="280" />
  <img src="/img/cognitive-games/spin-the-wheel-customization.png" alt="spin the wheel customization" width="500" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `final_balance` | number | Final point balance |
| `starting_balance` | number | Starting point balance |
| `net_earnings` | number | Net points gained or lost |
| `total_spins` | number | Total spins completed |
| `total_high_risk_choices` | number | Times a high-risk button was chosen |
| `total_low_risk_choices` | number | Times a low-risk button was chosen |
| `risk_taking_rate` | number | Proportion of high-risk choices |
| `mean_reaction_time` | number | Mean time to choose a button (ms) |
| `score` | number | Overall score |
| `correct_answers` | number | Total spins |
| `wrong_answers` | number | Unused (0) |
| `total_questions` | number | Total spins |
| `questionnaire` | object | Post-game ratings: clarity (1-5), happiness (1-5) |

### temporal_slices

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Spin number |
| `type` | boolean | `true` = net gain or break-even, `false` = net loss |
| `value` | null | Unused |
| `duration` | number | Reaction time (ms) |
| `level` | number | Spin number |
| `risk_level` | string | "high" or "low" |
| `win_amount` | number | Points won on this spin |
| `loss_amount` | number | Points lost on this spin |
| `net_change` | number | Net point change |
| `balance_after` | number | Balance after this spin |

### Cortex Features

No Cortex features currently process Spin the Wheel data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
