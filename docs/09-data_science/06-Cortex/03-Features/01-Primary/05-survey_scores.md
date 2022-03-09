# Survey scores

computed from raw feature: `cortex.raw.survey`

#### Description

Computes survey scores from raw survey data.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `scoring_dict`: (dictionary) dictionary holding scoring information in the following form:
```
scoring_dict = {
        "category_list": [list of category strings],
        "questions": {
                         "question #1 text": {
                                                  "category": something from list of category strings,
                                                  "scoring": type of scoring
                                             },
                         "question #2 text": {
                                                  "category": something from list of category strings,
                                                  "map_to": "question #1 text"
                                             },
                     },
        "map0": {
                    "Never": 0,
                    "Some of the time": 1,
                    "All of the time": 2
                }
    }
```
The supported scoring types are:
- "value": will cast the result to an int ("1" --> 1)
- "boolean": "Yes" --> 1, "No" --> 0
- map to a dictionary: give the name of the dictionary (ex: "map0", and create a corresponding dictionary in the scoring_dict)
Non-numeric scores are not supported at this time. 
Please see the example below for an example of a scoring_dict.

#### Data

- `start`: (int, units: ms) the start time of a given survey entry.
- `end`: (int, units: ms) the end time of a given survey entry.
- `category`: (str) the category of the given survey entry.
- `score`: (float) the sum of the scores for all questions in the survey entry.
  - Note: Only questions that are in the entry will be added to the score. Please ensure that all questions you wish to be added to your score are available in the participant data. (i.e. if you are trying to sum the results of "question 1" and "question 2" but participant X only has "question 2" the category score for particiapnt X will be only the "question 2" score.)

#### Example

```markdown
scoring_dict = {
    "category_list": ["PHQ-9", "GAD-7", "DWAI", "Daily_sleep_qual"],
    "questions": {
            "Over the past week, I have felt nervous, anxious, or on edge.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have not been able to stop or control worrying.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have been worrying too much about different things.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have had trouble relaxing.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have felt so restless that it's hard to sit still.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have felt myself becoming easily annoyed or irritable.": {"category": "GAD-7", "scoring": "value_map"},
            "Over the past week, I have felt afraid as if something awful might happen.": {"category": "GAD-7", "scoring": "value_map"},

            "Overall, how would you rate your sleep last night?": {"category": "Daily_sleep_qual", "scoring": "value"},
            "How did you sleep last night?": {"category": "Daily_sleep_qual", "map_to": "Overall, how would you rate your sleep last night?"},
        
            "I feel uninterested in the things I used to enjoy.": {"category": "PQ-16", "scoring": "boolean"},
            "I often seem to live through events exactly as they happened before (déjà vu).": {"category": "PQ-16", "scoring": "boolean"},
            "I sometimes smell or taste things that other people can’t smell or taste.": {"category": "PQ-16", "scoring": "boolean"},

            "I trust the app to guide me towards my personal goals.": {"category": "DWAI", "scoring": "dwai_value_map"},
            "I believe the app tasks will help me to address my problems.": {"category": "DWAI", "scoring": "dwai_value_map"},
        },
    "value_map": {
        "Not at all": 0,
        "Several days": 1,
        "More than half the days": 2,
        "Over half the days": 2,
        "Nearly every day": 3
    },
    "dwai_value_map": {
        "Strongly disagree": 0,
        "Disagree": 1,
        "Neither agree nor disagree": 2,
        "Agree": 3,
        "Strongly agree": 4
    }
}
cortex.primary.survey_scores.survey_scores(id="U1234567890", start=0, end=cortex.now(), scoring_dict=scoring_dict)
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 1627067480000,
  'data': [
           {'start': 1639759199227, 'end': 1639777579969, 'category': 'GAD-7', 'score': 7},
           {'start': 1639759199227, 'end': 1639777579969, 'category': 'DWAI', 'score': 6},
           .
           .
           .
           {'start': 1639426388269, 'end': 1639426610663, 'category': 'Daily_sleep_qual', 'score': 3},
          ]
}
```

Notes on the example above:
- The "category_list" may contain surveys that are not listed in the quesiton list, this will not throw an error but will also return no results. Scores are based only on the questions listed in "questions."
- Similarly, there can be questions in "questions" that have categories not in "category_list." These questions, if found in participant data, will not be scored.
- If you have multiple questions that should be considered the same, you may use "map_to" to point to another question. This is convinient if for example a spelling error is found and corrected during the study. Please note that answers must be the same.
- As shown in the "value_map", you may have multiple keys with the same value. 
- Notice that the start / end time of the two returned survey scores (GAD-7 and DWAI) are the same. This is because GAD-7 questions and DWAI questions are part of the same survey in LAMP. They have been split into two seperate dictionaries here because of the way we mapped the questions to different categories (ie "DWAI" and "GAD-7")

