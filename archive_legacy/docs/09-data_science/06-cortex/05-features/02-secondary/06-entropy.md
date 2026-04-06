# Entropy

computed from primary feature: `cortex.primary.significant_locations`
computed from raw feature: `cortex.raw.gps`

#### Description

Entropy is a measure of how much a participant moves around to different locations. Higher entropy typically means that the participant's time is more evenly split between differnt locations. Assuming that p is an array holding the porportion of time at each location, entropy can be computed as follows:

<img src="https://latex.codecogs.com/svg.latex?\small&space;\sum_{i=0}^{n}-p[i]\log(p[i])"/>

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (float) the entropy. If there is no gps data, entropy will be 'None'.

#### Example

```markdown
cortex.secondary.entropy.entropy(id="U1234567890", start=1607072400000, end=1609232400000, resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 0.16071499652789484},
           {'timestamp': 1607331600000, 'value': None},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 0.8753883626144159}
          ]
}
```


