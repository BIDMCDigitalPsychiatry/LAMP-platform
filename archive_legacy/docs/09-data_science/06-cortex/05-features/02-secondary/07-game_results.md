# Game Results

computed from primary feature: `cortex.primary.game_level_scores`
computed from raw features: `cortex.raw.balloon_risk`, `cortex.raw.cats_and_dogs`, `cortex.raw.jewels_a`,
                            `cortex.raw.jewels_b`, `cortex.raw.pop_the_bubbles`, `cortex.raw.spatial_span`

#### Description

Game results computes the mean score per resolution bin.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms) the resolution over which to compute features.
- `name_of_game`: (str) the name of the game to score.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (int, units: ms) the average score.
The "score" is based on `avg_pumps` for `balloon_risk`, `avg_NO_go_perc_correct` for `pop_the_bubbles` and `avg_tap_time` for `cats_and_dogs`, `jewels_a`, `jewels_b`, and `spatial_span`. Please see the documentation on the primary feature `game_level_scores` for more information.

#### Example

```markdown
cortex.secondary.game_results.game_results(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000,
        name_of_game="jewels_b")
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 4524000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 1002.2},
           {'timestamp': 1607331600000, 'value': None},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 1527.82}
          ]
}
```
