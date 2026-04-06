# Screen Active

computed from raw feature: `cortex.raw.device_state`

_Note: "lamp.screen_state" is now deprecated and has been replaced by "lamp.device_state". To preserve backwards compatability, Cortex will pull both "lamp.screen_state" and "lamp.device_state" events and merge them into the single raw data stream `cortex.raw.device_state`._

#### Description

Using `screen_state` metrics, bouts of time where the screen_state is continously in the "on" state are computed. The value --> representation mapping is as follows:
- 0 --> "screen_on"
- 1 --> "screen_off"
- 2 --> "locked"
- 3 --> "unlocked"


#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.

#### Data

- `start`: (int, units: ms) the start time of a given bout when the phone is "on".
- `end`: (int, units: ms) the end time of a given bout.
- `duration`: (int, units: ms) the duration of the bout (ie `start - end`).

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
          ],
  'has_raw_data': 1,
}
```

