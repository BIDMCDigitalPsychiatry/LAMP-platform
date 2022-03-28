# Game level scores

computed from raw features: `cortex.raw.balloon_risk`, `cortex.raw.cats_and_dogs`, `cortex.raw.jewels_a`,
                            `cortex.raw.jewels_b`, `cortex.raw.pop_the_bubbles`, `cortex.raw.spatial_span`

#### Description

Computes cognitive game leve-wise scores from raw data.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `name_of_game`: (str) the name of the game to score. Options include: "balloon_risk", "cats_and_dogs", "jewels_a", "jewels_b", "pop_the_bubbles", and "spatial_span". No data will be returned if the game is not one of the options above.

#### Data

- `start`: (int, units: ms) the start time of a given survey entry.
- `end`: (int, units: ms) the end time of a given survey entry.
- `level`: (str) the game level.

The other return values depend on which game is being scored.
- `avg_go_perc_correct` (game: pop_the_bubbles): (float) the percent of go trials that were correct.
- `avg_NO_go_perc_correct` (game: pop_the_bubbles): (float) the average percent of no-go trials that were correct.
- `avg_pumps` (game: balloon_risk): (float) the average number of balloon pumps.
- `avg_tap_time` (game: cats_and_dogs, jewels_a, jewels_b, spatial_span): (float) the average tap time.
- `avg_perc_correct` (game: cats_and_dogs, jewels_a, jewels_b, spatial_span): (float) the average percent of correct taps.
Please note that currently there is information missing from the API, so the pop_the_bubbles scores will not be accurate.

#### Example

```markdown
cortex.primary.game_level_scores.game_level_scores(id="U1234567890", start=0, end=cortex.now(), name_of_game="jewels_b")
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 1627067480000,
  'data': [
           {'start': 1639759199227, 'end': 1639777579969, 'level': 1, 'avg_tap_time': 1233.5, 'perc_correct': 0.995},
           {'start': 1639759199227, 'end': 1639777579969, 'level': 1, 'avg_tap_time': 1009.2, 'perc_correct': 1.0},
           .
           .
           .
           {'start': 1639426388269, 'end': 1639426610663, 'level': 3, 'avg_tap_time': 981.24, 'perc_correct': 1.0},
          ],
  'has_raw_data': 1,
}
```
