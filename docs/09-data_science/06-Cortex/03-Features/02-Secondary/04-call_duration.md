# Call Duration

computed from raw feature: `cortex.raw.calls`

#### Description

Call duration sums the time spent on calls. 

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.
- `incoming`: (boolean, default: True) whether to compute for incoming (True) or outgoing (False) calls.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (float, units: s) the call duration.

#### Example

```markdown
cortex.secondary.call_duration.call_duration(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 111},
           {'timestamp': 1607331600000, 'value': 0},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 7}
          ]
}
```

