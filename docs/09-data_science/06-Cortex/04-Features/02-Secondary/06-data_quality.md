# Data Quality

computed from raw feature: `cortex.raw.gps` or `cortex.raw.accelerometer`

#### Description

Data quality computes the percent of the time that a feature achieved a certain data quality. This feature currently supports accelerometer and gps. 

_Note: Data quality in one of two ways 1) by pulling all raw data from 'start' to 'end' and the looping over each time bin to determine if a datapoint with that timestamp in the bin exists or 2) by looping over each time bin and trying to pull a single datapoint from that time bin using the API to determine if a timestamp in that bin exists. The threshold for switching between these methods has been set to 150 bins (ie less than 150 and method #2 will be used, else method #1) to try to increase processing speed._

#### Optional or required kwargs

- `start`: (units: ms) the start time.
- `end`: (units: ms) the end time.
- `resolution`: (units: ms) the resolution over which to compute features.
- `feature`: (str, options: "gps" or "accelerometer") the feature to compute data quality. If something other than "gps" or "accelerometer" is passed None will be returned.
- `bin_size`: (float, units: ms, default: -1) the width of each bin. If set to -1 then default parameters will be used which are 1000 ms (1s) for "accelerometer" and 1000 * 600 ms (10min) for "gps".

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (float, units: None) the percent of the time that there was at least one datapoint in each bin of size `bin_size`.

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

