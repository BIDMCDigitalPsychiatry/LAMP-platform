---
sidebar_position: 5
sidebar_label: Advanced Usage
title: "Advanced Cortex Usage"
description: "Selective processing and additional patterns for Cortex."
---

# Advanced Cortex Usage

For the full `cortex.run()` parameter reference — including caching, saving results, and batch processing — see [Running Cortex](running).

## Selective Processing

Use a CSV file to run specific participant-feature combinations instead of computing every feature for every participant:

```python
cortex.run(
    study_id,
    features=['hometime', 'screen_duration'],
    run_part_and_feats="subset.csv"
)
```

The CSV should have `participant` and `feature` columns:

```csv
participant,feature
U1234567890,hometime
U1234567890,screen_duration
U0987654321,hometime
```

This is useful when reprocessing failed runs or targeting specific participants without recomputing the entire study.
