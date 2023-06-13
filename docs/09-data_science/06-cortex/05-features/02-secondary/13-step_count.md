# Step Count

***This feature uses the new version of the lamp.steps sensor data from April 2022. To use this feature with older data, please use Cortex version 2022.03.11 or earlier.***

computed from raw feature: `cortex.raw.steps`

***Step data collected on Apple phones prior to version `2023.5.2` of mindLAMP may be cumulative, producing inaccurate results. This problem can be solved by using argument `data_type`='pedometer'.***

#### Description

Step count aggregates the number of steps. 

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.
- `data_type`: (str; values: `health`, `pedometer`, `watch`; default: `health`) the source from which the step data is collected. `health` is from the Health app (Apple) or GoogleFit app (Android); `pedometer` is from the phone's accelerometer sensor and only works on Apple phones; and `watch` is from an Apple watch device. 

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (int, units: None) the number of steps.
#### Example

```markdown
cortex.secondary.step_count.step_count(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 0},
           {'timestamp': 1607331600000, 'value': 1027},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 13208}
          ]
}
```
