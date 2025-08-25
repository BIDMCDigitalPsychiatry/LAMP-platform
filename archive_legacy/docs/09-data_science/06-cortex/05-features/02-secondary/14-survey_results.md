# Survey Results

computed from primary feature: `cortex.primary.survey_scores`
computed from raw feature: `cortex.raw.survey`

#### Description

Survey results computes the mean score per resolution bin for a given category. The category should match a category in the scoring_dict. Please see the documentation on `primary.survey_scores` for a full description of the scoring_dict.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `resolution`: (int, units: ms) the resolution over which to compute features.
- `question_or_category`: (str) a survey category / question to average.

#### Data

- `timestamp`: (int, units: ms) the start time of each bin of size `kwargs['resolution']`.
- `value`: (int, units: ms) the average score.

#### Example

```markdown
scoring_dict = {
    "category_list": ["GAD-7"],
    "questions": {
            "Over the past week, I have felt nervous, anxious, or on edge.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have not been able to stop or control worrying.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have been worrying too much about different things.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have had trouble relaxing.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have felt so restless that it's hard to sit still.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have felt myself becoming easily annoyed or irritable.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have felt afraid as if something awful might happen.": {"category": "GAD-7", "scoring": "value_map"},
        },
    "value_map": {
        "Not at all": 0,
        "Several days": 1,
        "More than half the days": 2,
        "Nearly every day": 3
    },
}
cortex.secondary.survey_results.survey_results(id="U1234567890", start=1607072400000, end=1609232400001, resolution=86400000,
        scoring_dict=scoring_dict, question_or_category="GAD-7")
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 4524000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'value': 5},
           {'timestamp': 1607331600000, 'value': None},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'value': 2.5}
          ]
}
```
