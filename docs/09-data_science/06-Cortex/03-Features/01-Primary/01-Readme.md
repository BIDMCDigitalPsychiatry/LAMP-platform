## Primary Feature Overview

Primary features in cortex are derived from raw data and typically contain multiple bouts / periods. 

### 'has_raw_data'
All primary features will return a `has_raw_data` along with the `data` which is whether any raw datapoints exist. Some features can return the same result if there is / is not raw data, so this flag reduces ambiguity. 

For example, consider screen_active (the bouts where the screen is on):
```markdown
cortex.primary.screen_active.screen_active(id="U1234567890", start=1607072400000, end=cortex.now())
```

If there are screen on and off events, the data may look something like this:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'has_raw_data': 1,
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
If there is no device_state data, `screen_active` will return the following:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'has_raw_data': 0,
  'data': [
          ]
}
```

However, if there is device_state data, but only "screen_off" events (so there are no bouts where the screen is "on") the following will be returned:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'has_raw_data': 1,
  'data': [
          ]
}
```
