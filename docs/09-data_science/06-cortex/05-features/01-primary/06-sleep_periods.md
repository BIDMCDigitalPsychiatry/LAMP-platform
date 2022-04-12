# Sleep Periods

computed from raw feature: `cortex.raw.accelerometer`

#### Description

Sleep periods finds the bouts of sleep using accelerometer data. Data is grouped into 10 minute bins. Then bins with lower accelerometer magnitude that occur during the night are considered sleep and bins with higher magnitude are considered active. For more details on the sleep algorithm, please consult the source code.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.

#### Data

- `start`: (int, units: ms) the start time of a given bout of sleep.
- `end`: (int, units: ms) the end time of a given bout.

#### Example

```markdown
cortex.primary.sleep_periods.sleep_periods(id="U1234567890", start=0, end=cortex.now())
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 5616000000,
  'data': [
             {'start': 1607116800000, 'end': 1607146800000},
             {'start': 1607205600000, 'end': 1607233800000},
                   .
                   .
                   .
             {'start': 1607980200000, 'end': 1608009600000}
           ],
  'has_raw_data': 1,
}
```
