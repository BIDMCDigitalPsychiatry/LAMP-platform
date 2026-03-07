---
slug: "/activities/reference/voice-recording"
sidebar_position: 3
sidebar_label: Voice Recording
title: "Voice Recording"
---

# Voice Recording

![Voice Recording start screen](/img/voice-recording/start-screen.png)

Voice recording activities allow participants to record audio, which can be used for speech-based assessments or qualitative data collection. Recordings are stored as MP3 files.

**ActivitySpec:** `lamp.recording`

## Configuration

1. Navigate to the Activities tab and click **+ Add**.
2. Select **Voice Recording**.
3. Select the target group.
4. Title the activity.
5. Save.

The following labels can be customized by clicking the pencil icon under "Activity Settings":

- **Record label** — Text displayed on the record button (e.g., "Press to record").
- **Re-record label** — Text displayed on the re-record button.

This is useful for providing specific instructions on what to record or including a participant safety disclaimer.

## Usage

The participant sees a prompt and records up to 2 minutes of audio. They can pause and resume the recording. If unsatisfied, they can press "Clear" and re-record. When satisfied, they press "Upload" to submit.

| | | |
|---|---|---|
| ![Ready to record](/img/voice-recording/ready.png) | ![Recording in progress](/img/voice-recording/recording.png) | ![Playback ready](/img/voice-recording/playback.png) |
| **Ready** — Press microphone to start | **Recording** — Stop or pause | **Playback** — Review before uploading |

### Use Cases

- Speech pattern analysis in relation to mood or symptom changes
- Qualitative data collection (participant narratives)
- Pronunciation or language assessments
- Clinical speech assessments

## Data

### temporal_slices

| Field | Description |
|-------|-------------|
| `temporal_slices[0].value` | The recorded audio as a base64-encoded string (MP3 format) |

### Example

```json
{
  "timestamp": 1649859300000,
  "activity": "voice_recording_id",
  "duration": 30000,
  "static_data": {},
  "temporal_slices": [
    {
      "item": null,
      "value": "<base64-encoded audio data>",
      "type": null,
      "duration": 30000,
      "level": null
    }
  ]
}
```

### Cortex Features

[`voice_survey`](/developer/cortex/features/raw-features) (raw). No primary or secondary Cortex features process voice data. For custom speech analysis, access raw recordings via `cortex.raw.voice_survey`.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
