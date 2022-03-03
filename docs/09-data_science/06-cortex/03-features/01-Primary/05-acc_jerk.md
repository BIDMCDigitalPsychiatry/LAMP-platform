# Acc_jerk

computed from raw feature: cortex.raw.accelerometer

#### Description

Computes jerk from accelerometer data. Jerk is the derivative of accelerometer.

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.

#### Data

- `start: number`: (units: ms) the start time of a given trip.
- `end: number`: (units: ms) the end time of a given trip.
- `threshold: number`: (units: ms) the maximum difference between timestamps to compute jerk.

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
          ]
}
```

