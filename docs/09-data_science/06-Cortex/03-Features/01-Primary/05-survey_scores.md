# Survey scores

computed from raw feature: `cortex.raw.survey`

#### Description

Computes survey scores from raw survey data.

#### Optional or required kwargs

- `start`: number: (units: ms) the start time.
- `end`: number: (units: ms) the end time.
- `scoring_dict`: dictionary holding scoring information in the following form:
```
scoring_dict = {
        "category": [list of category strings],
        "questions": {
                         "question #1 text": {
                                                  "category": something from list of category strings,
                                                  "scoring": type of scoring
                                             },
                         "question #2 text": {
                                                  "category": something from list of category strings,
                                                  "scoring": type of scoring
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

- `start`: (number, units: ms) the start time of a given survey entry.
- `end`: (number, units: ms) the end time of a given survey entry.
- `category`: (str) the category of the given survey entry.
- `score`: (number) the sum of the scores for all questions in the survey entry.
  - Note: Only questions that are in the entry will be added to the score. Please ensure that all questions you wish to be added to your score are available in the participant data. (i.e. if you are trying to sum the results of "question 1" and "question 2" but participant X only has "question 2" the category score for particiapnt X will be only the "question 2" score.)

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

