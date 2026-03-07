---
sidebar_position: 2
sidebar_label: Python SDK
title: "Python SDK"
description: "The primary SDK for data analysis, scripting, and automation. Install with pip install LAMP-core."
---

# Python SDK

The Python SDK is the primary and most actively maintained SDK for the LAMP Platform. It is recommended for data analysis, scripting, and automation.

## Installation

```bash
pip install LAMP-core
```

## Connecting

```python
import LAMP
LAMP.connect('email@address.com', 'password', 'api.lamp.digital')
```

Replace with your credentials and server address. If using the default hosted server, use `api.lamp.digital`.

## Querying Data

### List Researchers, Studies, and Participants

```python
# Get all researchers
researchers = LAMP.Researcher.all()

# Get studies for a researcher
studies = LAMP.Study.all_by_researcher(researcher_id)

# Get participants in a study
participants = LAMP.Participant.all_by_study(study_id)
```

### Retrieve Sensor Data

```python
# Get GPS data for a participant
events = LAMP.SensorEvent.all_by_participant(
    participant_id,
    origin='lamp.gps'
)
```

Results are limited to 1000 entries per request. Use the `_from` and `to` parameters (Unix timestamps in milliseconds) for range queries:

```python
events = LAMP.SensorEvent.all_by_participant(
    participant_id,
    origin='lamp.gps',
    _from=start_timestamp,
    to=end_timestamp
)
```

### Retrieve Activity Data

```python
events = LAMP.ActivityEvent.all_by_participant(participant_id)
```

Each event contains:
- `timestamp` — When the activity was completed (Unix ms).
- `duration` — Time spent (milliseconds).
- `activity` — Activity identifier.
- `temporal_slices` — Array of individual responses.

### Export to CSV

```python
import pandas as pd

# Collect GPS data for all participants in a study
all_data = []
for participant in LAMP.Participant.all_by_study(study_id)['data']:
    events = LAMP.SensorEvent.all_by_participant(
        participant['id'],
        origin='lamp.gps'
    )
    for event in events['data']:
        all_data.append({
            'participant': participant['id'],
            'timestamp': event['timestamp'],
            **event['data']
        })

df = pd.DataFrame(all_data)
df.to_csv('gps_data.csv', index=False)
```

## Next Steps

For automated feature computation from raw data, see [Cortex](/developer/cortex).
