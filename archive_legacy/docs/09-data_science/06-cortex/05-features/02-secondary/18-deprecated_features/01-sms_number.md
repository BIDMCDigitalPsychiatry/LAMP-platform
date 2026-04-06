# SMS Number

***To use this feature, please use Cortex version 2022.03.11 or earlier.***

computed from raw feature: cortex.raw.sms

#### Description

SMS number sums the number of incoming texts. Note that many types of phones no longer provide SMS data.

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value: number`: (units: None) the number of texts.

#### Example

```markdown
cortex.secondary.sms_number.sms_number(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 0},
           {'timestamp': 1607331600000, 'value': 0},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 3}
          ]
}
```

