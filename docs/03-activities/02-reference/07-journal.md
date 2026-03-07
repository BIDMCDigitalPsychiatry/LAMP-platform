---
slug: "/activities/reference/journal"
sidebar_position: 7
sidebar_label: Journal
title: "Journal"
---

# Journal

A freeform journaling activity where participants can record thoughts, write lists, and make notes. Entries are date and time stamped and appear in the Manage tab. Previous entries can be recalled and read at any time.

| | |
|---|---|
| ![Journal on Manage tab](/img/journal/manage-tab.png) | ![New journal entry](/img/journal/new-entry.png) |
| **Manage tab** — Journal activity card | **New entry** — Writing with mood prompt |

**ActivitySpec:** `lamp.journal`

## Configuration

No specific configuration is needed beyond the standard activity settings (title, icon, tab placement). Create via the Activities tab by selecting **Journal**.

## Usage

The participant opens the journal and writes freely. Each entry is timestamped. Previous entries are accessible for review.

## Data

```json
{
  "timestamp": 1649859300000,
  "activity": "journal_activity_id",
  "duration": 60000,
  "static_data": {
    "text": "Today I practiced mindfulness techniques..."
  },
  "temporal_slices": []
}
```

| Field | Description |
|-------|-------------|
| `static_data.text` | The journal entry text content |
| `duration` | Time spent writing the entry (ms) |
| `temporal_slices` | Always an empty array |

### Cortex Features

No Cortex features currently process Journal data.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/activities/reference)
