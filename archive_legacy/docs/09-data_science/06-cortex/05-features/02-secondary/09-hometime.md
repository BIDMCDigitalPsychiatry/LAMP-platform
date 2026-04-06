# Hometime

computed from primary feature: 'cortex.primary.significant_locations'
computed from raw feature: 'cortex.raw.gps'

#### Description

The time spent at the most visited (i.e. greatest number of GPS points collected there) location (assumed to be home). For this computation, significant locations defaults to 'mode' which means that the most common locations will be based on the mode for the time period of the resolution given. Therefore, it is possible that the true "home" location may not be preserved over days. Note: On iOS, the accuracy of this feature may be improved by enabling "precise location" in permissions settings for mindLAMP. Without this toggle, this feature may be unreliable.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (int, units: ms) the time spent in the most visited location. If there is no gps data, hometime will be 'None'.

#### Example

```markdown
cortex.secondary.hometime.hometime(id="U1234567890", start=1607072400000, end=1609232400000, resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 44145818},
           {'timestamp': 1607331600000, 'value': None},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 2188582}
          ]
}
```
