---
slug: "/activities/reference/emotion-recognition"
sidebar_position: 12
sidebar_label: Emotion Recognition
title: "Emotion Recognition"
---

# Emotion Recognition


Emotion Recognition tests whether participants can identify the emotion expressed in facial images. Researchers upload up to 50 images and label each with one of five emotions. Participants are shown a random subset of 10 images and must select the matching emotion.

**ActivitySpec:** `lamp.emotion_recognition`

**Cognitive domain:** Social cognition

## Configuration

Researchers must provide a dataset of up to 50 facial images and label each with the corresponding emotion. Default emotions: happiness, sadness, fear, anger, and neutral. Custom emotion labels beyond these five can be added in the activity settings.

A random subset of up to 10 images is selected and shuffled each session. If fewer than 10 images are uploaded, all images will be shown in random order.

### Sample Instructions

*"In this task you will be presented with up to 10 facial images and asked to identify the emotion expressed by each one from a list of 5 emotions."*

## Usage

The participant sees one image at a time, selects the emotion they believe matches, and taps "Save" to proceed. The assessment cycles through up to 10 randomly selected images.

### Scoring

Scoring is based on whether the user correctly identifies the emotion expressed in each image.

### Screenshots

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  <img src="/img/cognitive-games/emotion-recognition-gameplay.png" alt="Emotion Recognition gameplay" width="280" />
  <img src="/img/cognitive-games/emotion-recognition-customization.png" alt="Emotion Recognition customization" width="500" />
</div>


## Data

### temporal_slices

| Field | Type | Description |
|-------|------|-------------|
| `item` | number | Trial number (1-indexed, up to 10) |
| `value` | string | Selected emotion: `"Happiness"`, `"Sadness"`, `"Fear"`, `"Anger"`, `"Neutral"` |
| `type` | boolean | `true` = correct, `false` = incorrect |
| `duration` | number | Response time (ms) |
| `level` | string | Correct emotion text label (the expected answer for this trial) |

### Cortex Features

No Cortex features are currently available for this activity.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
