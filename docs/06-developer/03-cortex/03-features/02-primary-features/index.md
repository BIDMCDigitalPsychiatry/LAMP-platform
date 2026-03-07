---
sidebar_position: 4
sidebar_label: Primary Features
title: "Primary Features"
description: "Primary feature modules with output schemas."
---

# Primary Features

Primary features are first-level computed metrics derived from raw data. They identify meaningful patterns and periods within raw sensor streams. The following primary features are available.

## Output Structure

Primary features return bouts or periods:

```python
{
    "data": [
        {"start": <ms>, "end": <ms>, "duration": <ms>, ...},
        ...
    ],
    "has_raw_data": 0 or 1
}
```

The `has_raw_data` flag distinguishes between "no data exists" (0) and "data exists but the computed result is empty" (1).

## Summary

| Feature | Raw Dependency | Output | Downstream |
|---------|---------------|--------|------------|
| [`acc_jerk`](#accelerometer-jerk) | `accelerometer` | Jerk values (m/s3) | [`inactive_duration`](../secondary-features#device-usage) |
| [`game_level_scores`](#game-level-scores) | 6 game raw features | Per-level scores | [`game_results`](../secondary-features#assessment-results) |
| [`screen_active`](#screen-active) | `device_state` | Screen-on bouts | [`screen_duration`](../secondary-features#device-usage), [`inactive_duration`](../secondary-features#device-usage) |
| [`significant_locations`](#significant-locations) | `gps` | Location clusters | [`hometime`](../secondary-features#mobility), [`entropy`](../secondary-features#mobility) |
| [`survey_scores`](#survey-scores) | `survey` | Category scores | [`survey_results`](../secondary-features#assessment-results) |
| [`trips`](#trips) | `gps` | Movement trips | [`trip_distance`](../secondary-features#mobility), [`trip_duration`](../secondary-features#mobility) |

---

## Accelerometer Jerk (`acc_jerk`) {#accelerometer-jerk}

Computes jerk (rate of change of acceleration) from accelerometer data. Jerk is calculated as the magnitude of the acceleration derivative: `sqrt((dx/dt)² + (dy/dt)² + (dz/dt)²)`.

**Raw dependency:** [`accelerometer`](../raw-features)

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `threshold` | int | 500 | Max time gap (ms) between consecutive points. Gaps larger than this are excluded. |

**Output fields:**

| Field | Type | Description |
|-------|------|-------------|
| `start` | int | Window start timestamp (ms) |
| `end` | int | Window end timestamp (ms) |
| `acc_jerk` | float | Jerk value (m/s³) |

**Downstream:** Used by [`inactive_duration`](../secondary-features#device-usage) to detect stillness.

---

## Game Level Scores (`game_level_scores`) {#game-level-scores}

Extracts per-level performance scores from cognitive game activity events.

**Raw dependencies:** `balloon_risk`, `cats_and_dogs`, `jewels_a`, `jewels_b`, `pop_the_bubbles`, `spatial_span`

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `name_of_game` | string | **Required.** One of: `jewels_a`, `jewels_b`, `balloon_risk`, `cats_and_dogs`, `pop_the_bubbles`, `spatial_span` |

**Output fields (vary by game):**

| Field | Description | Games |
|-------|-------------|-------|
| `level` | Level number | All |
| `avg_tap_time` | Average time between taps (ms) | All |
| `perc_correct` | Percentage of correct responses | All |
| `jewels_collected` | Number of jewels collected | Jewels A/B |
| `avg_go_perc_correct` | Go trial accuracy | Pop The Bubbles |
| `avg_NO_go_perc_correct` | No-go trial accuracy | Pop The Bubbles |
| `avg_pumps` | Average pumps per balloon | Balloon Risk |

**Downstream:** Used by [`game_results`](../secondary-features#assessment-results).

---

## Screen Active (`screen_active`) {#screen-active}

Identifies periods when the device screen was actively on, computed from device state events. Returns bouts of screen activity with start/end times.

**Raw dependency:** [`device_state`](../raw-features)

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `duration_threshold` | int | 7200000 (2 hr) | Maximum allowable bout duration (ms). Bouts exceeding this are filtered out. |

**Algorithm:**
- Maps state transitions: on-events = `[0 (screen_on), 3 (unlocked)]`, off-events = `[1 (screen_off), 2 (locked)]`
- Detects state changes to define screen-on bouts
- Filters consecutive near-identical events (less than 1 sec apart) and bouts exceeding threshold
- Validates against first activity timestamp for correct mapping

**Output fields:**

| Field | Type | Description |
|-------|------|-------------|
| `start` | int | Bout start timestamp (ms) |
| `end` | int | Bout end timestamp (ms) |
| `duration` | int | Bout duration (ms) |

**Downstream:** Used by [`screen_duration`](../secondary-features#device-usage) and [`inactive_duration`](../secondary-features#device-usage).

---

## Significant Locations (`significant_locations`) {#significant-locations}

Identifies significant locations from GPS data using spatial clustering algorithms. A significant location is a place where the participant spends substantial time.

**Raw dependency:** [`gps`](../raw-features)

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `method` | string | `"mode"` | Clustering method: `"mode"` (frequency-based) or `"k_means"` |
| `k_max` | int | 10 | Maximum clusters to test (k-means only) |
| `eps` | float | 1e-5 | DBSCAN epsilon (k-means only) |
| `min_cluster_size` | float | 0.01 | Minimum cluster size as fraction of total points |
| `max_dist` | int | 300 | Maximum distance (meters) between clusters to merge |
| `max_clusters` | int | -1 | If -1, use min_cluster_size; otherwise limit to this count |

**Algorithm (mode method):**
1. Rounds lat/long to 3 decimal places
2. Counts point frequency per rounded location
3. Selects top locations above `min_cluster_size` threshold
4. Merges clusters within `max_dist` meters (Haversine distance)

**Output fields:**

| Field | Type | Description |
|-------|------|-------------|
| `latitude` | float | Cluster centroid latitude |
| `longitude` | float | Cluster centroid longitude |
| `rank` | int | `0` = most visited (typically home) |
| `radius` | float | Mean distance from centroid (meters) |
| `proportion` | float | Fraction of total time at this location (0–1) |
| `duration` | int | Time spent at location (ms) |

**Downstream:** Used by [`hometime`](../secondary-features#mobility) and [`entropy`](../secondary-features#mobility).

---

## Survey Scores (`survey_scores`) {#survey-scores}

Computes aggregate scores from survey responses using a configurable scoring dictionary.

**Raw dependency:** [`survey`](../raw-features)

**Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `scoring_dict` | dict | `{}` | Maps questions to categories and scoring rules (see below) |
| `return_ind_ques` | bool | `False` | Return individual question scores in addition to category totals |

**Scoring dictionary format:**

```python
scoring_dict = {
    "category_list": ["anxiety", "depression"],
    "questions": {
        "I feel nervous": {"category": "anxiety", "scoring": "value"},
        "I feel sad": {"category": "depression", "scoring": "boolean"}
    }
}
```

Scoring types: `"value"` (cast to int), `"boolean"` (Yes→1, No→0), `"raw"` (no transform), or a custom mapping name.

**Output fields:**

| Field | Type | Description |
|-------|------|-------------|
| `start` | int | Survey start timestamp (ms) |
| `end` | int | Survey end timestamp (ms) |
| `category` | string | Score category name |
| `question` | string | Question text or category name |
| `score` | number | Numeric score |

**Downstream:** Used by [`survey_results`](../secondary-features#assessment-results).

---

## Trips (`trips`) {#trips}

Identifies movement trips from GPS data based on speed thresholds.

**Raw dependency:** [`gps`](../raw-features)

**Algorithm:**
- Speed threshold: 10 km/h — points below this are "stationary"
- Time threshold: 600 seconds (10 min) — gaps larger than this break a trip
- Detects stationary → moving transitions (trip start) and moving → stationary (trip end)
- Uses Haversine formula for great-circle distance

**Output fields:**

| Field | Type | Description |
|-------|------|-------------|
| `start` | int | Trip start timestamp (ms) |
| `end` | int | Trip end timestamp (ms) |
| `latitude` | float | Trip location |
| `longitude` | float | Trip location |
| `distance` | float | Total distance traveled (km) |

**Downstream:** Used by [`trip_distance`](../secondary-features#mobility) and [`trip_duration`](../secondary-features#mobility).

---

## Usage

Primary features can be called directly or computed via `cortex.run()`:

```python
import cortex

# Direct call
result = cortex.primary.significant_locations.significant_locations(
    id="U1234567890", start=start_time, end=end_time
)

# Via cortex.run()
result = cortex.run("U1234567890", features=["significant_locations"])
```
