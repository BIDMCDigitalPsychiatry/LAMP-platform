---
sidebar_position: 2
sidebar_label: Running Cortex
title: "Running Cortex"
description: "Executing the feature pipeline and configuring output."
---

# Running Cortex

The `cortex.run()` function is the primary interface for computing features across participants.

## Function Signature

```python
cortex.run(
    id_or_set,
    features,
    feature_params={},
    start=None,
    end=None,
    resolution=86400000,
    path_to_save="",
    run_part_and_feats="",
    cache=False,
    print_logs=False
)
```

## Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `id_or_set` | str or list | required | Participant, study, or researcher ID(s). Study/researcher IDs are expanded into their full participant lists. |
| `features` | list | required | List of feature names to compute (raw, primary, or secondary). |
| `feature_params` | dict | `{}` | Additional parameters per feature (keyed by feature name). |
| `start` | int | None | Start time in Unix milliseconds. Defaults to the timestamp of the first raw data point. |
| `end` | int | None | End time in Unix milliseconds. Defaults to the timestamp of the last raw data point. |
| `resolution` | int | `86400000` | Time window in milliseconds (default: 1 day = 86,400,000 ms). |
| `path_to_save` | str | `""` | Directory path to save output as pickle files (one per feature per participant). If empty, returns results as a dict. |
| `run_part_and_feats` | str | `""` | Path to a CSV file with `participant` and `feature` columns, for running a subset of combinations. |
| `cache` | bool | `False` | Cache raw data to avoid re-downloading on subsequent runs. |
| `print_logs` | bool | `False` | Print detailed logs (otherwise only warnings). |

## Output

When `path_to_save` is not set, returns a dict with feature names as keys and Pandas DataFrames as values. DataFrame columns include `id` (participant ID) plus feature-specific columns (typically `timestamp` and `value`).

## Example

```python
import cortex

MS_IN_DAY = 86400000

result = cortex.run(
    "U1234567890",
    features=['screen_duration', 'data_quality'],
    feature_params={
        'screen_duration': {},
        'data_quality': {"feature": "gps", "bin_size": 3600000}
    },
    start=1638248400000,
    end=1638248400000 + 7 * MS_IN_DAY,
    resolution=MS_IN_DAY
)

# Access results
screen_df = result['screen_duration']
quality_df = result['data_quality']
```

## Batch Processing

To process an entire study:

```python
result = cortex.run(
    study_id,  # Expands to all participants
    features=['hometime', 'screen_duration', 'step_count'],
    resolution=86400000,
    cache=True
)
```

## Saving Results

```python
cortex.run(
    study_id,
    features=['hometime'],
    path_to_save="/path/to/output/"
)
# Creates pickle files: /path/to/output/hometime/U1234567890.pkl, etc.
```
