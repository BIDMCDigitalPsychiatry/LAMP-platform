# Accelerometer Jerk

computed from raw feature: `cortex.raw.accelerometer`

#### Description

Computes jerk from accelerometer data. Jerk is the derivative of accelerometer.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `threshold`: (int, units: ms, default: 500) the maximum difference between timestamps to compute jerk.

#### Data

- `timestamp`: (int, units: ms) the start time of the jerk.
- `acc_jerk`: (float, units: m/s^3) the jerk.

#### Example

```markdown
cortex.primary.acc_jerk.acc_jerk(id="U1234567890", start=0, end=cortex.now())
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 1627067480000,
  'data': [
           {'timestamp': 1607094903526, 'acc_jerk': 0.008896610358911157},
                 .
                 .
                 .
           {'timestamp': 1607094950000, 'acc_jerk': 0.0028039384631051243}
          ],
  'has_raw_data': 1,
}
```

