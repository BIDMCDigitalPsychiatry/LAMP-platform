# Trip Duration

computed from primary feature: `cortex.primary.trips`
computed from raw feature: `cortex.raw.gps`

#### Description

Trip Duration is the total duration of all trips in a period of time. 

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms) the resolution over which to compute features.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (int, units: ms) the duration of the trip.

#### Example

```markdown
cortex.secondary.trip_duration.trip_duration(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 4524000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 32720174},
           {'timestamp': 1607331600000, 'value': None},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 29213514}
          ]
}
```
