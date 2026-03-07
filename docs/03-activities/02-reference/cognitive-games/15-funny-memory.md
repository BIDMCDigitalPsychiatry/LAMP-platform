---
slug: "/activities/reference/funny-memory"
sidebar_position: 15
sidebar_label: Funny Memory
title: "Funny Memory"
---

# Funny Memory

Also known as the Associative Memory Game, Funny Memory is derived from visual association memory tests. Participants view image pairs with unrelated objects combined in the same image (e.g., a fox in an ice cream cone), then must recall and recognize these associations through multiple phases: learning, delay, free recall, cued recall, and recognition.

**ActivitySpec:** `lamp.funny_memory`

**Cognitive domain:** Associative memory, visual memory

## Configuration

The game uses a fixed set of image pairs. The delay period between learning and recall phases can be customized within the mindLAMP platform.

## Usage

The assessment progresses through multiple phases:

1. **Learning** — The participant is briefly shown 6 images with combined objects and asked to say aloud and record what two objects are in each image.
2. **Delay** — Orientation questions (today's date, day of the week, season, etc.) fill a customizable delay period.
3. **Free recall** — The participant records any image pairs they can remember.
4. **Cued recall** — Each image is shown with only one object; the participant must name the missing object.
5. **Recognition** — Four similar images are displayed, and the participant selects the one originally shown.

<details>
<summary>References</summary>

1. Lindeboom, J. et al. (2002) Visual association test to detect early dementia of the Alzheimer type. Journal of Neurology, Neurosurgery, and Psychiatry, 73(2), 126-133. DOI: [10.1136/jnnp.73.2.126](https://doi.org/10.1136/jnnp.73.2.126)

</details>

### Screenshots

<div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/funny-memory-1.png" alt="Funny Memory instructions" width="280" />
  <img src="/img/cognitive-games/funny-memory-2.png" alt="Funny Memory learning phase" width="280" />
  <img src="/img/cognitive-games/funny-memory-3.png" alt="Funny Memory delay phase" width="280" />
  <img src="/img/cognitive-games/funny-memory-4.png" alt="Funny Memory free recall" width="280" />
  <img src="/img/cognitive-games/funny-memory-5.png" alt="Funny Memory cued recall" width="280" />
  <img src="/img/cognitive-games/funny-memory-6.png" alt="Funny Memory recognition" width="280" />
  <img src="/img/cognitive-games/funny-memory-7.png" alt="Funny Memory completion" width="150" />
</div>

## Data

### static_data

| Field | Type | Description |
|-------|------|-------------|
| `score` | number | Overall score |
| `correct_answers` | number | Correctly identified associations |
| `wrong_answers` | number | Incorrect responses |

### temporal_slices

| Field | Description |
|-------|-------------|
| `item` | Image pair index |
| `value` | Selected response |
| `type` | `true` = correct, `false` = incorrect |
| `duration` | Response time (ms) |
| `level` | Game phase (learning vs. recognition) |

### Cortex Features

[`funny_memory`](/developer/cortex/features/raw-features) (raw). No primary or secondary Cortex features currently process Funny Memory data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
