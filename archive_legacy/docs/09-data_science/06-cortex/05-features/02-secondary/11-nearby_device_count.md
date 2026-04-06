# Nearby Device Count

computed from raw feature: `cortex.raw.nearby_device`

#### Description

Nearby device count sums the number of unique nearby bluetooth devices. 

#### Optional or required kwargs

- `id`: (str) the participant id.
- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms) the resolution over which to compute features (1 day = 86400000 ms).

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (int, units: None) the number of unique nearby bluetooth devices.

#### Example

```markdown
cortex.secondary.nearby_device_count.nearby_device_count(id="U1753020007", start=1646485947205, end=1647003793838, resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1646485947205,
  'duration': 517846633,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1646485947205, 'value': 3},
           {'timestamp': 1646572347205, 'value': None},
                 .
                 .
                 .
           {'timestamp': 1646831547205, 'value': None}
          ]
}
```
