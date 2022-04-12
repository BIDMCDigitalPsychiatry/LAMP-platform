# Trip Distance

computed from primary feature: `cortex.primary.trips`
computed from raw feature: `cortex.raw.gps`

#### Description

Trip Distance is the total distance traveled on all trips in a period of time. 

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms) the resolution over which to compute features.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (float, units: km) the trip distance.

#### Example

```markdown
cortex.secondary.trip_distance.trip_distance(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 0.018896610358911157},
           {'timestamp': 1607331600000, 'value': None},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 0.0228039384631051243}
          ]
}
```
