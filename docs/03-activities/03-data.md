---
sidebar_position: 3
sidebar_label: Data
title: "Activity Data Format"
description: "ActivityEvent format, data retrieval methods, and Cortex analysis overview."
---

# Activity Data Format

All activities produce **ActivityEvents** — timestamped records containing session summaries and per-action detail.

## ActivityEvent Structure

```json
{
  "timestamp": 1634047106612,
  "activity": "e2wxcekbb0typzdtz0pb",
  "duration": 3735,
  "static_data": { ... },
  "temporal_slices": [
    { "item": ..., "value": ..., "type": ..., "duration": ..., "level": ... }
  ]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `timestamp` | integer | Unix timestamp in milliseconds when the activity was completed |
| `activity` | string | The activity's unique identifier |
| `duration` | integer | Total time spent on the activity in milliseconds |
| `static_data` | object | Session-level summary (overall scores, points, metadata) |
| `temporal_slices` | array | Per-action detail (each question answered, each tap made, each level completed) |

### temporal_slices

Each element represents a single action — a survey question answered, a game level completed, or a tap recorded.

| Field | Type | Description |
|-------|------|-------------|
| `item` | string or number | Question text (surveys), tap/pump number (games), or level identifier |
| `value` | any | The response — selected option (surveys), score (games), correctness flag |
| `type` | any | Question type (surveys), correctness boolean (games), or null |
| `duration` | number | Time spent on this item in milliseconds |
| `level` | number or null | Game level number, or null for surveys |

The meaning of each field varies by activity type. See the individual activity pages in [Activity Reference](/activities/reference/surveys) for per-activity schemas.

## Data Retrieval

Data can be retrieved through:

- **REST API** — Query activity events for specific participants, time ranges, and types. See the [API documentation](/api).
- **Python SDK** — `import LAMP` for programmatic data access. See [Python SDK](/developer/api-sdks/python-sdk).
- **Cortex** — Process raw events into computed behavioral features automatically. See [Cortex](/developer/cortex).
- **Dashboard** — View and export data through the [Data Portal](/dashboard/data-portal) or the [Portal tab](/app/app-tabs/portal).

## Cortex Analysis

The Cortex pipeline transforms raw activity events into behavioral insights through three stages:

1. **Raw features** — Retrieve activity event data directly (e.g., `survey`, `jewels_a`, `balloon_risk`).
2. **Primary features** — Compute per-session metrics (e.g., `survey_scores`, `game_level_scores`).
3. **Secondary features** — Aggregate scores across time windows (e.g., `survey_results`, `game_results`).

See the [Cortex documentation](/developer/cortex) for details on running activity analysis. For per-activity schemas, see the [Activity Reference](/activities/reference).
