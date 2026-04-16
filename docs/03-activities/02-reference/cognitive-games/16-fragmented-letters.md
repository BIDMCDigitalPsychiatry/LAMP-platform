---
slug: "/activities/reference/fragmented-letters"
sidebar_position: 16
sidebar_label: Fragmented Letters
title: "Fragmented Letters"
---

# Fragmented Letters

The participant identifies letters of the alphabet that have been partially "fragmented" — some pixels blend in with the background. If the participant correctly identifies a letter, the next letter is more fragmented by 5%; if incorrect, the next letter is less fragmented by 5%. The game ends after two errors.

**ActivitySpec:** `lamp.fragmented_letters`

**Cognitive domain:** Visual and perceptual processing

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

No `static_data` is included in the normal completion payload. This is a known limitation — the activity records audio responses but does not evaluate correctness in-game.

### temporal_slices

One entry per level (up to 10 levels):

| Field | Type | Description |
|-------|------|-------------|
| `item` | string | The letter displayed (A-Z) |
| `value` | string | Base64-encoded audio recording of the participant's verbal response |
| `type` | null | Always null — correctness is not evaluated in-game (responses must be scored offline from the audio recordings) |
| `duration` | number | Time since previous recording completed (ms) |
| `level` | number | Fragmentation percentage at this level (increases by 10% per level) |

### Cortex Features

[`fragmented_letters`](/developer/cortex/features/raw-features) (raw). No primary or secondary Cortex features currently process Fragmented Letters data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
