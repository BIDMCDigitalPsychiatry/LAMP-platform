---
slug: "/activities/reference/spin-the-wheel"
sidebar_position: 10
sidebar_label: Spin the Wheel
title: "Spin the Wheel"
---

# Spin the Wheel


Based on the Iowa Gambling Task, Spin the Wheel measures decision-making and risk-taking behavior. The Iowa Gambling Task has been effectively used in studying substance abuse, pathological gambling, and schizophrenia. The game presents wheels that can be spun by selecting one of four buttons — each spin can result in a win or loss.

**ActivitySpec:** `lamp.spin_wheel`

**Cognitive domain:** Decision-making, risk-taking behavior

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

The participant selects one of four buttons to spin the wheel. Each spin results in a gain or loss. The total balance is tracked at the top of the screen. The game ends after the configured number of spins.

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

Unused (always `{}`).

### temporal_slices

| Field | Description |
|-------|-------------|
| `item` | Spin number |
| `value` | `1` = high risk choice, `0` = low risk |
| `type` | Running score after this spin |
| `duration` | Time since last spin (string format, e.g., `"0.9s"`) |
| `level` | Button pressed (1–4) |

:::note
The `duration` field uses a string format with an "s" suffix (e.g., `"0.9s"`). Parse by removing the trailing "s" and converting to a number.
:::

### Cortex Features

No Cortex features currently process Spin the Wheel data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
