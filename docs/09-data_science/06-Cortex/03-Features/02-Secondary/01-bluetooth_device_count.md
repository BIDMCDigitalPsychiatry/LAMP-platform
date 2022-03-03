# Bluetooth Device Count

computed from raw feature: cortex.raw.bluetooth

#### Description

Bluetooth device count sums the number of bluetooth device connections. 

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value: number`: (units: None) the number of unique bluetooth devices.

#### Example

```markdown
cortex.secondary.bluetooth_device_count.bluetooth_device_count(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
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

