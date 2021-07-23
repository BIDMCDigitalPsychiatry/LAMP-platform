### Survey Scores (Primary Feature)

computed from raw feature: cortex.raw.survey

#### Description

Survey scores gets all survey data and scores it.

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.

#### Data

- `category: string`: (units: None) the category of the survey.
- `timestamp: number`: (units: ms) the time the survey was started.
- `score: number`: (units: None) the mean score for a category.

#### Example

```markdown
cortex.primary.survey_scores.survey_scores(id="U1234567890", start=0, end=cortex.now())
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 5616000000,
  'data': [
             {'category': 'Daily Survey', 'timestamp': 1607201530002, 'score': 2.0},
             {'category': 'Weekly Survey', 'timestamp': 1609547093320, 'score': 1.6153846153846154},
                   .
                   .
                   .
             {'category': 'Weekly Survey', 'timestamp': 1608951137709, 'score': 1.8529411764705883}
           ]
}
```
