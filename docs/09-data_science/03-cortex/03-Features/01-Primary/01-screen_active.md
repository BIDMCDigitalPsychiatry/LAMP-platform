# Screen Active

computed from raw feature: cortex.raw.screen_state

#### Description

Screen active builds bouts of time when the screen is "on". Using screen_state metrics, bouts of time where the screen_state is continously in state 0 and state 1 are computed. Then, an activity event is used to determine whether a state of 0 corresponds to the "on" or "off" state. This is based on the assumption that the screen must be "on" in order to complete an activity. If there are no activity events, it is assumed that 1 is "on" and 0 is "off."

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.

#### Data

- `start: number`: (units: ms) the start time of a given bout when the phone is "on".
- `end: number`: (units: ms) the end time of a given bout.
- `duration: number`: (units: ms) the duration of the bout (ie `start - end`).

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

