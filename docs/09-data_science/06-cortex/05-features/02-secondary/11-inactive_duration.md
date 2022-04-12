# Inactive Duration

computed from raw feature: `cortex.raw.screen_state` and `cortex.raw.accelerometer`

#### Description

Inactive duration is the sum of the inactive periods. Can be used as an estimate of sleep.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms) the resolution over which to compute features.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (int, units: ms) the inactive duration.

#### Example

```markdown
cortex.secondary.inactive_duration.inactive_duration(id="U1234567890", start=1607072400000, end=1609232400000, resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 38720178},
           {'timestamp': 1607331600000, 'value': None},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 12218716}
          ]
}
```
