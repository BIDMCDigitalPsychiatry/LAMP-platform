# Healthkit Sleep Duration

computed from raw feature: `cortex.raw.sleep`

#### Description

Healthkit sleep duration sums the durations from the `lamp.sleep` sensor. The "in_bed", "in_sleep", or "in_awake" durations can be summed. This data only comes from watches. Please refer to section on API Feature Types for more information. 

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.
- `duration_type`: (str, default: "in bed", options: "in_bed", "in_sleep", "in_awake") the type of durations to sum. If an invalid duration type is passed, None will be returned.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (int, units: ms) the duration.

#### Example

```markdown
cortex.secondary.healthkit_sleep_duration.healthkit_sleep_duration(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000, duration_type="in_bed")
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': None},
           {'timestamp': 1607331600000, 'value': 20000027},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 30040029}
          ]
}
```
