# Bluetooth Device Count

computed from raw feature: `cortex.raw.bluetooth`

#### Description

Bluetooth device count sums the number of bluetooth device connections. 

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (int, units: None) the number of unique bluetooth devices.

#### Example

```markdown
cortex.secondary.bluetooth_device_count.bluetooth_device_count(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 0},
           {'timestamp': 1607331600000, 'value': 6},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 3}
          ]
}
```

