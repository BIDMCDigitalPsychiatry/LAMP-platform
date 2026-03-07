---
slug: "/activities/reference/fragmented-letters"
sidebar_position: 16
sidebar_label: Fragmented Letters
title: "Fragmented Letters"
---

# Fragmented Letters

The participant identifies letters of the alphabet that have been partially "fragmented" — some pixels blend in with the background. If the participant correctly identifies a letter, the next letter is more fragmented by 5%; if incorrect, the next letter is less fragmented by 5%. The game ends after two errors.

**ActivitySpec:** `lamp.fragmented_letters`

**Cognitive domain:** Visual/perceptual processing

## Configuration

No researcher-defined customization is necessary. The game adapts automatically based on participant performance.

## Usage

Letters appear on screen with varying levels of fragmentation. The participant verbally identifies each letter. Fragmentation increases with correct answers and decreases with incorrect answers, finding the participant's perceptual threshold.

<details>
<summary>References</summary>

1. Warrington, E. K. & James, M. (1991) The Visual Object and Space Perception Battery. Thames Valley Test Company.

</details>

### Screenshots

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/fragmented-letters-1.png" alt="Fragmented Letters phase 1" width="280" />
  <img src="/img/cognitive-games/fragmented-letters-2.png" alt="Fragmented Letters phase 2" width="280" />
  <img src="/img/cognitive-games/fragmented-letters-3.png" alt="Fragmented Letters phase 3" width="280" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Overall score |
| `correct_answers` | number | Correctly identified letters |
| `wrong_answers` | number | Incorrect responses |

### temporal_slices

| Field | Description |
|-------|-------------|
| `item` | Letter presented |
| `value` | Participant's response |
| `type` | `true` = correct, `false` = incorrect |
| `duration` | Response time (ms) |
| `level` | Fragmentation level |

### Cortex Features

[`fragmented_letters`](/developer/cortex/features/raw-features) (raw). No primary or secondary Cortex features currently process Fragmented Letters data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
