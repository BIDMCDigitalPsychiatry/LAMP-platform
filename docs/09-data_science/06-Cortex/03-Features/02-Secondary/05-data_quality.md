# Data Quality

computed from raw feature: cortex.raw.gps; cortex.raw.accelerometer

#### Description

Data quality computes the percent of the time that a feature achieved a certain data quality. This feature currently supports accelerometer and gps. 

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms) the resolution over which to compute features.
- `feature: string`: (units: None) the feature to compute data quality (must be either "gps" or "accelerometer").
- `bin_size: number`: (units: ms, default: -1) the width of each bin. If set to -1 then default parameters will be used which are 1000 ms, 1s for "accelerometer" and 1000 * 600 ms, 10min
for "gps".
#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value: number`: (units: None) the percent of the time that there was at least one datapoint in each bin of size `bin_size`.

#### Example

```markdown
cortex.secondary.data_quality.data_quality(id="U1234567890", start=0, end=cortex.now(), resolution=86400000, feature="gps", bin_size=10000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 1.0},
           {'timestamp': 1607331600000, 'value': 0.789291823},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 0.121212344}
          ]
}
```

