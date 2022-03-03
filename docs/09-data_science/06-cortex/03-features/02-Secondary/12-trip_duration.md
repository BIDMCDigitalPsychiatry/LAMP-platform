Trip Duration is the total duration of all trips in a period of time. 

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value: number`: (units: ms) the duration of the trip.

#### Example

```markdown
cortex.secondary.trip_duration.trip_duration(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
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
