# Screen Active

computed from raw feature: `cortex.raw.screen_state`

#### Description

Using `screen_state` metrics, bouts of time where the screen_state is continously in the "on" state are computed. `cortex.raw.analytics` is used to determine whether the user has an iOS or Android device (default iOS if this information is not available). For iOS, on events have a value of 0 and off events have a value of 1 or 2. For Android, on events have a value of 0 or 3 and off events have a value of 1 or 2.

_Note: "lamp.screen_state" is now deprecated and has been replaced by "lamp.device_state". To ensure both new and old data are pulled properly, Cortex will pull both "lamp.screen_state" and "lamp.device_state" events and merge them into the single raw data stream `cortex.raw.screen_state`._

#### Optional or required kwargs

- `start`: number: (units: ms) the start time.
- `end`: number: (units: ms) the end time.

#### Data

- `start`: number: (units: ms) the start time of a given bout when the phone is "on".
- `end`: number: (units: ms) the end time of a given bout.
- `duration`: number: (units: ms) the duration of the bout (ie `start - end`).

#### Example

```markdown
cortex.primary.screen_active.screen_active(id="U1234567890", start=1607072400000, end=cortex.now())
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'data': [
           {'start': 1607094896733, 'end': 1607100072241, 'duration': 5175508},
           {'start': 1607100076065, 'end': 1607100088981, 'duration': 12916},
                 .
                 .
                 .
           {'start': 1607103351139, 'end': 1607108478253, 'duration': 5127114}
          ]
}
```

