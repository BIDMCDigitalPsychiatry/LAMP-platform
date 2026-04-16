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
| `image_exposure_time` | number | Time each image was shown during learning (ms) |
| `learning_trials` | number | Number of learning trial repetitions |
| `image_set_shown` | number | Image set used (1-6, selected based on current month) |
| `delay_time` | number | Delay period between learning and recall (seconds) |
| `timeTakenForTrial` | number | Total time for all learning trials (ms) |
| `timeTakenForRecall` | number | Time for free recall phase (ms) |
| `timeForRecognition1` | number | Time for cued recall phase (ms) |
| `timeForRecognition2` | number | Time for forced-choice recognition phase (ms) |
| `number_of_correct_force_choice` | number | Correct selections in the forced-choice recognition phase (0-6) |
| `total_number_of_pairings_listed` | number | Number of image pairs presented |
| `orientation_survey` | object | Delay-period orientation responses (see below) |

The `orientation_survey` object contains responses to orientation questions asked during the delay period. Each field has a `value` (the participant's answer) and `is_correct` (boolean, compared against actual date/time):

| Field | Description |
|-------|-------------|
| `start_time` | Current time (H:M format; correct if within 5 minutes) |
| `day` | Day of the week |
| `today_date` | Day of the month |
| `month` | Current month |
| `year` | Current year |
| `season` | Current season |

### temporal_slices

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Image index from the randomized set |
| `value` | string or null | Base64-encoded audio recording (learning, recall, and cued recall phases) or null (recognition phase) |
| `type` | null or boolean | null for audio-based phases; `true`/`false` for recognition phase (correct/incorrect image selection) |
| `duration` | number | Time since previous interaction (ms) |
| `level` | string | Phase name: "Trial", "Trial1", "Trial2", "recall", "recognition1", or "recognition2" |

### Cortex Features

[`funny_memory`](/developer/cortex/features/raw-features) (raw). No primary or secondary Cortex features currently process Funny Memory data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
