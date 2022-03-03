# Call Degree

computed from raw feature: cortex.raw.calls

#### Description

Call degree is the number of different people that a participant calls.

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value: number`: (units: None) the call degree.

#### Example

```markdown
cortex.secondary.call_degree.call_degree(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 0},
           {'timestamp': 1607331600000, 'value': 2},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 4}
          ]
}
```
