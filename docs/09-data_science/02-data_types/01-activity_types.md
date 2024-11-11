# Activity Types

All event streams in the LAMP API are catalogued by a timestamp and specific "blueprints" (schema) of what kind of data they hold. For example, a sensor event that occurred 20 minutes ago would carry that instant's timestamp, along with a link to what kind of sensor it was, and that sensor's measurement as a payload of data. The kinds of activities available are declared below, along with the blueprint you can expect their events' data to follow. 


In the case of activities (active data) completed by the participant or patient, the activity declares two types of blueprints: **static data**, or data that relates to the overall session, and **temporal slices**, data that provides millisecond precision and carries information about each action the participant took. Activities that can be customized will also have **settings** blueprints, but these won't actually appear in the event data (and are omitted from the fields listed below).

### Survey

ActivitySpec: `lamp.survey`

#### Description

Customizable surveys. Available question types currently include:

 - Text: A free-entry text box
 - Boolean: A choice between "True" and "False"
 - List: A radio button style list where a maximum of one option can be chosen
 - Multi-Select: A checkbox style list where multiple options can be chosen
 - Slider: A draggable slider to select one option from a numerical range
 - Short Answer: A smaller, free entry text box
 - Rating: A question which asks the participant to rate something on a numerical scale
 - Time: A interactive dropdown which allows the user to select a time. Choose between AM/PM and military options

#### Settings
 - `name`: A string title to display to the user
 - `settings`: An array of objects, one for each question
    - `text` : A string to display to the user
    - `type` : The question type. One of `text`,`boolean`,`list`,`multiselect`,`slider`,`short`,`rating`,`time`
    - `required`: True or False. Whether the question must be completed to advance.
    - List
      - `options` : An array of strings each corresponding to one option
    - Multi-Select
      - `options` : An array of strings each corresponding to one option 
    - Slider
      - `options` : An array of numbers each corresponding to one option
    - Rating
      - `options` : An array of numbers each corresponding to one option  
    - Time
      - `options` : An object with one key-value pair: `timepattern`: One of `standard` or `ampm` corresponding to the time selection method

Example
            
```
            {'category': ['assess'],
             'id': '5ha5qf49shjzmasrcrah',
             'name': 'Rating Test',
             'schedule': [],
             'settings': [{'required': True, 'text': 'Text Question', 'type': 'text'},
                          {'required': True, 'text': 'Boolean', 'type': 'boolean'},
                          {'options': ['Option 1', 'Option 2'],
                           'required': True,
                           'text': 'List',
                           'type': 'list'},
                          {'options': ['Option 1', 'Option 2'],
                           'required': True,
                           'text': 'Multi-Select',
                           'type': 'multiselect'},
                          {'options': [0, 1],
                           'required': True,
                           'text': 'Slider',
                           'type': 'slider'},
                          {'required': True, 'text': 'Short Answer', 'type': 'short'},
                          {'options': [0, 1],
                           'required': True,
                           'text': 'Rating',
                           'type': 'rating'},
                          {'options': {'timePattern': 'standard'},
                           'required': True,
                           'text': 'Time',
                           'type': 'time'}],
             'spec': 'lamp.survey'}    
```
          

#### Data 

- `static_data`: Unused.
- `temporal_slices`:
    - `item`: (string) The question text.
    - `value`: (string) The selected question option text.
    - `type`: Unused.
    - `duration`: The time taken to answer a question in the survey.
    - `level`: Unused.

#### Example

```
{'timestamp': 1634047106612,
   'activity': 'e2wxcekbb0typzdtz0pb',
   'static_data': {},
   'temporal_slices': [{'item': 'Question 1',
     'value': '1',
     'type': None,
     'level': None,
     'duration': 2500},
    {'item': 'Question 2',
     'value': '1',
     'type': None,
     'level': None,
     'duration': 1235}],
   'duration': 0}
```


### Balloon Risk 

ActivitySpec: `lamp.balloon_risk`

#### Description

The Balloon Risk test is a computerized assessment of risk-taking behavior. Participants click a button to continuously blow up a balloon until they either chose to "save their points" and move on to the next balloon or the balloon "pops" after being inflated too many times.

#### Settings

- `balloon_count`: Number of balloons the participant interacts with
- `breakpoint_mean`: The average value the balloon will pop at
- `breakpoint_std`: The standard deviation of the value the balloon will pop at.

#### Data 

- `static_data`:
    - `points`: The associated point value with the completed session.  
- `temporal_slices`:
    - `item`: Pump number.
    - `value`: 0 (exploded); 1 (unexploded).
    - `type`: False (exploded); True (unexploded).
    - `duration`: Time elapsed in s since last event.
    - `level`: Balloon number.

#### Example

```
{'balloon_count': 15,
   'breakpoint_mean': 64.5,
   'breakpoint_std': 37,
   'static_data': {'points': 55},
   'temporal_slices': [{'duration': 1821,
     'item': 1,
     'level': 1,
     'type': True,
     'value': 1},
    {'duration': 876, 'item': 2, 'level': 1, 'type': True, 'value': 1},
    {'duration': 425, 'item': 3, 'level': 1, 'type': True, 'value': 1},
    {'duration': 167, 'item': 8, 'level': 1, 'type': True, 'value': 1},
    ...
    {'duration': 128, 'item': 38, 'level': 1, 'type': True, 'value': 1},
    {'duration': 145, 'item': 39, 'level': 1, 'type': True, 'value': 1},
    {'duration': 135, 'item': 40, 'level': 1, 'type': True, 'value': 1},
    {'duration': 154, 'item': 41, 'level': 1, 'type': True, 'value': 1},
    {'duration': 1724, 'item': 1, 'level': 2, 'type': True, 'value': 1},
    
    {'duration': 160, 'item': 2, 'level': 2, 'type': True, 'value': 1},
    {'duration': 158, 'item': 3, 'level': 2, 'type': True, 'value': 1},
    {'duration': 306, 'item': 4, 'level': 2, 'type': True, 'value': 1},
    ...
    {'duration': 176, 'item': 73, 'level': 2, 'type': True, 'value': 1},
    {'duration': 151, 'item': 74, 'level': 2, 'type': True, 'value': 1},
    {'duration': 178, 'item': 75, 'level': 2, 'type': True, 'value': 1},
    {'duration': 161, 'item': 76, 'level': 2, 'type': False, 'value': 0},
    {'duration': 5602, 'item': 1, 'level': 3, 'type': True, 'value': 1},
    {'duration': 2588, 'item': 1, 'level': 4, 'type': True, 'value': 1},
    ...
    {'duration': 809, 'item': 1, 'level': 15, 'type': True, 'value': 1}],
   'timestamp': 1642779164213,
   'duration': 78365,
   'activity': '8vw829aemgdxy8f1fvk9'}
```    

### Cats & Dogs

ActivitySpec: `lamp.cats_and_dogs` & `lamp.cats_and_dogs_new`

#### Description

The Cats and Dogs game. Participants are shown a field of 10 boxes arranged in a fixed random pattern (does not change from test to test), which raise to reveal either an image of a cat, an image of a dog, or neither in a random pattern. Over the course of three levels and 45 trials, participants are told to:

1. Click on all dogs (only dogs and blanks are shown)
2. Click on all dogs (dogs, cats, and blanks are shown)
3. Click on all cats (dogs, cats, and blanks are shown)

#### Settings

Currently no settings are available for this activity.

#### Data 

- `static_data`:
    - `point`: The associated point value with the completed session. 2 if all 45 trials were answered perfectly, else 1.	
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.	
    - `total_questions`: The total number of trials given to the participant. Currently always 45.
- `temporal_slices`:
    - `item`: 1-10 depending on the box chosen
    - `value`: Unused.
    - `type`: True if the tap was correct, false otherwise
    - `duration`: Time elapsed since the last tap or trial start
    - `level`: 1-3 corresponding to the numbered levels above

#### Example

```
{'duration': 445841,
  'static_data': {'StartTime': None,
   'correct_answers': 22,
   'point': 1,
   'score': 49,
   'type': 1,
   'wrong_answers': 1},
  'temporal_slices': [{'duration': 5243,
    'item': 9,
    'level': 1,
    'type': True,
    'value': None},
   {'duration': 2611, 'item': 5, 'level': 1, 'type': True, 'value': None},
   {'duration': 1125, 'item': 8, 'level': 1, 'type': True, 'value': None},
   {'duration': 2688, 'item': 2, 'level': 1, 'type': True, 'value': None},
   {'duration': 946, 'item': 3, 'level': 1, 'type': True, 'value': None},
   {'duration': 1000, 'item': 4, 'level': 1, 'type': True, 'value': None},
   {'duration': 4568, 'item': 4, 'level': 1, 'type': True, 'value': None},
   {'duration': 1035, 'item': 6, 'level': 1, 'type': True, 'value': None},
   {'duration': 843, 'item': 3, 'level': 1, 'type': True, 'value': None},
   {'duration': 798, 'item': 2, 'level': 1, 'type': True, 'value': None},
   {'duration': 4298, 'item': 1, 'level': 1, 'type': True, 'value': None},
   {'duration': 854, 'item': 8, 'level': 1, 'type': True, 'value': None},
   {'duration': 1397, 'item': 5, 'level': 1, 'type': True, 'value': None},
   {'duration': 885, 'item': 9, 'level': 1, 'type': True, 'value': None},
   {'duration': 4338, 'item': 10, 'level': 1, 'type': True, 'value': None},
   {'duration': 624, 'item': 9, 'level': 1, 'type': True, 'value': None},
   {'duration': 2846, 'item': 3, 'level': 1, 'type': True, 'value': None},
   {'duration': 2002, 'item': 8, 'level': 2, 'type': False, 'value': None},
   {'duration': 1981, 'item': 5, 'level': 2, 'type': True, 'value': None},
   {'duration': 731, 'item': 3, 'level': 2, 'type': True, 'value': None},
   {'duration': 4555, 'item': 4, 'level': 2, 'type': True, 'value': None},
   {'duration': 1608, 'item': 3, 'level': 2, 'type': True, 'value': None},
   {'duration': 910, 'item': 5, 'level': 2, 'type': True, 'value': None}],
  'timestamp': 1649447701749,
  'activity': 'sjfvrd7jpjyjzbkgwex4'}
```


### Emotion Recognition 

ActivitySpec: `lamp.emotion_recognition`

#### Description

The Emotion Recognition task. Participants are presented with a random subset of up to 10 images and must identify the emotion expressed in each one (e.g. "Happiness", "Sadness", "Neutral", "Fear", "Anger").


#### Settings
NA.

#### Data 

- `static_data`:
    - NA.
- `temporal_slices`:
    - `item`: Question number.
    - `value`: Happiness, Sadness, Fear, Anger, Neutral
    - `type`: False (incorrect); True (correct).
    - `duration`: Time elapsed in s since last event.
    - `level`: Question prompt.

#### Example

```
{'temporal_slices': [{'duration': 0.833,
'item': 1,
'level': 'Which emotion best describes this face?',
'type': False,
'value': 'Fear'},
{'duration': 0.798, 'item': 2, 'level': 'Which emotion best describes this face?', 'type': False, 'value': 'Anger'},
{'duration': 2.354, 'item': 3, 'level': 'Which emotion best describes this face?', 'type': False, 'value': 'Fear'},
{'duration': 1.407, 'item': 4, 'level': 'Which emotion best describes this face?', 'type': False, 'value': 'Neutral'},
{'duration': 1.886, 'item': 5, 'level': 'Which emotion best describes this face?', 'type': False, 'value': 'Neutral'},
{'duration': 1.059, 'item': 6, 'level': 'Which emotion best describes this face?', 'type': True, 'value': 'Neutral'},
{'duration': 0.923, 'item': 7, 'level': 'Which emotion best describes this face?', 'type': False, 'value': 'Neutral'},
{'duration': 0.948, 'item': 8, 'level': 'Which emotion best describes this face?', 'type': False, 'value': 'Neutral'},
{'duration': 0.91, 'item': 9, 'level': 'Which emotion best describes this face?', 'type': False, 'value': 'Neutral'}],
'timestamp': 1731005505839,
'date': '2024-11-07 18:51:45.839000',
'game': 'emotion_recognition'}
```    





### Jewels

ActivitySpec: `lamp.jewels_a` & `lamp.jewels_b`

#### Description

The Jewels game, with variants A & B. The Jewels game is similar to the Trail-Making Test which measures processing speed and task switching.

During the Jewels game, participants view a field of sequentially numbered jewels. In the "A" variant, participants click on the jewels in order. In the "B" variant, multiple jewel shapes may appear and the user must click on the same-numbered jewels in a predetermined order (e.g. clicking first on a square jewel numbered 1, then a round jewel numbered 1, then a square jewel numbered 2, and so on).

Except for the first trial (see Settings below), the maximum number of jewels is 25. The number of shapes will increase up to a maximum of 4.

The algorithm that calculates the number of jewels shown (15-25 by default) and shapes shown (1-4 by default) is rather complicated - we recommend leaving the non-timing settings as the default for this reason.

<details>
    <summary>Increase Explanation</summary>
    
    1. At the end of each successfully completed level a certain number of bonus points is assigned, equal to the remaining time minus 2 times the number of errors made.
   
    
    2. The running total of bonus points is then divided by the `bonus_point_count` setting and floored.
    
    3. If the number from step 2 is greater than 1, `level`-1, divided by the `x_changes_in_level_count` then multiplied by `x_diamond_count`  is used to determine how many extra jewels should be added, to maximum of 25 total jewels. If `level` is less than or equal to 1, nothing happens. The same applies for the number of shapes shown, but the maximum number of shapes is 4 and the parameters are `y_changes_in_level_count` and `y_shape_count`, respectively.
</details>

#### Settings

- `mode`: (number) Difficulty (1-easy, 4-expert)
- `shape_count`:(number) Starting number of shapes, default is 1. Do not set above 8.
- `variant`:  (string) If set to `trails_b`, the number of shapes will increase.
- `beginner_seconds`: (number) the number of seconds allowed if difficulty is set to 1.
- `intermediate_seconds`: (number) the number of seconds allowed if difficulty is set to 2.
- `advanced_seconds`: (number) the number of seconds allowed if difficulty is set to 3.
- `expert_seconds`: (number) the number of seconds allowed if difficulty is set to 4.
- `diamond_count`: (number) starting diamond count (default 15). After the first trial, the max is 25.
- `bonus_point_count`: (number) Default is 50. The number of bonus points (remaining time minus errors\*2) required to increase the number of jewels or shapes.
- `x_changes_in_level_count`: (number) Once enough bonus points are accumulated, changes the number of jewels by `x_diamond_count` times this (ceiling 25).
- `x_diamond_count`: (number) See above.
- `y_changes_in_level_count`: (number) Once enough bonus points are accumulated, changes the number of shapes by `x_diamond_count` times this (ceiling 4).
- `y_shape_count`: (number) see above.

#### Data 

- `static_data`: 
    - `point`: (number) The associated point value with the completed session. 1 if the participant timed out on a trial. 2 if they voluntarily returned to the dashboard via the back button.
    - `score`: (number) The percentage of correct trials, rounded to two decimal places.
    - `total_attempts`: (number) The total number of attempts made during the session.
    - `total_bonus_collected`: (number) The total bonus accumulated (time remaining when a trial is finished - 2\*errors). Can be negative.
    - `total_jewels_collected`: (number) The total number of jewels correctly clicked on.
- `temporal_slices`:
    - `item`: (number) The number of the jewel clicked.
    - `value`: Unused.
    - `type`: (boolean) Whether the correct item was tapped or not (True or False).
    - `duration`: (number) Time since the previous jewel was tapped.
    - `level`: (number) The trial level. Increases by 1 at the start of each new trial unless the accumulated bonus points divided by `bonus_point_count` is equal to the current level when floored.

#### Example

The following data is Jewels B Data
```
{'static_data': {'point': 2,
  'score': '97.37',
  'total_attempts': 76,
  'total_bonus_collected': 239,
  'total_jewels_collected': 74},
 'temporal_slices': [{'duration': 0,
   'item': 1,
   'level': 1,
   'type': True,
   'value': None},
  {'duration': 1852, 'item': 2, 'level': 1, 'type': True, 'value': None},
  {'duration': 1211, 'item': 3, 'level': 1, 'type': True, 'value': None},
  {'duration': 858, 'item': 4, 'level': 1, 'type': True, 'value': None},
  {'duration': 954, 'item': 5, 'level': 1, 'type': True, 'value': None},
  {'duration': 1892, 'item': 6, 'level': 1, 'type': True, 'value': None},
  {'duration': 958, 'item': 7, 'level': 1, 'type': True, 'value': None},
  {'duration': 1043, 'item': 8, 'level': 1, 'type': True, 'value': None},
  {'duration': 1172, 'item': 9, 'level': 1, 'type': True, 'value': None},
  {'duration': 2933, 'item': 10, 'level': 1, 'type': True, 'value': None},
  {'duration': 1048, 'item': 11, 'level': 1, 'type': True, 'value': None},
  {'duration': 526, 'item': 12, 'level': 1, 'type': True, 'value': None},
  {'duration': 573, 'item': 13, 'level': 1, 'type': True, 'value': None},
  {'duration': 712, 'item': 14, 'level': 1, 'type': True, 'value': None},
  {'duration': 1212, 'item': 15, 'level': 1, 'type': True, 'value': None},
  {'duration': 0, 'item': 1, 'level': 1, 'type': True, 'value': None},
  {'duration': 1049, 'item': 2, 'level': 1, 'type': True, 'value': None},
  {'duration': 2958, 'item': 3, 'level': 1, 'type': True, 'value': None},
  {'duration': 1001, 'item': 4, 'level': 1, 'type': True, 'value': None},
  {'duration': 832, 'item': 5, 'level': 1, 'type': True, 'value': None},
  {'duration': 685, 'item': 6, 'level': 1, 'type': True, 'value': None},
  {'duration': 1393, 'item': 7, 'level': 1, 'type': True, 'value': None},
  {'duration': 876, 'item': 8, 'level': 1, 'type': True, 'value': None},
  {'duration': 701, 'item': 9, 'level': 1, 'type': True, 'value': None},
  {'duration': 2651, 'item': 10, 'level': 1, 'type': True, 'value': None},
  {'duration': 1554, 'item': 11, 'level': 1, 'type': True, 'value': None},
  {'duration': 762, 'item': 12, 'level': 1, 'type': True, 'value': None},
  {'duration': 1228, 'item': 13, 'level': 1, 'type': True, 'value': None},
  {'duration': 1419, 'item': 14, 'level': 1, 'type': True, 'value': None},
  {'duration': 1236, 'item': 15, 'level': 1, 'type': True, 'value': None},
  {'duration': 0, 'item': 1, 'level': 2, 'type': True, 'value': None},
  {'duration': 3476, 'item': 2, 'level': 2, 'type': True, 'value': None},
  {'duration': 1256, 'item': 3, 'level': 2, 'type': True, 'value': None},
  {'duration': 6022, 'item': 4, 'level': 2, 'type': True, 'value': None},
  {'duration': 3205, 'item': 5, 'level': 2, 'type': True, 'value': None},
  {'duration': 742, 'item': 6, 'level': 2, 'type': True, 'value': None},
  {'duration': 1890, 'item': 8, 'level': 2, 'type': False, 'value': None},
  {'duration': 1563, 'item': 7, 'level': 2, 'type': True, 'value': None},
  {'duration': 1069, 'item': 8, 'level': 2, 'type': True, 'value': None},
  {'duration': 1113, 'item': 9, 'level': 2, 'type': True, 'value': None},
  {'duration': 3184, 'item': 10, 'level': 2, 'type': True, 'value': None},
  {'duration': 2339, 'item': 11, 'level': 2, 'type': True, 'value': None},
  {'duration': 2521, 'item': 12, 'level': 2, 'type': True, 'value': None},
  {'duration': 2564, 'item': 13, 'level': 2, 'type': True, 'value': None},
  {'duration': 911, 'item': 14, 'level': 2, 'type': True, 'value': None},
  {'duration': 957, 'item': 15, 'level': 2, 'type': True, 'value': None},
  {'duration': 919, 'item': 16, 'level': 2, 'type': True, 'value': None},
  {'duration': 1579, 'item': 17, 'level': 2, 'type': True, 'value': None},
  {'duration': 1281, 'item': 18, 'level': 2, 'type': True, 'value': None},
  {'duration': 1215, 'item': 19, 'level': 2, 'type': True, 'value': None},
  {'duration': 0, 'item': 1, 'level': 3, 'type': True, 'value': None},
  {'duration': 1518, 'item': 1, 'level': 3, 'type': True, 'value': None},
  {'duration': 7255, 'item': 2, 'level': 3, 'type': True, 'value': None},
  {'duration': 1192, 'item': 2, 'level': 3, 'type': True, 'value': None},
  {'duration': 3634, 'item': 3, 'level': 3, 'type': True, 'value': None},
  {'duration': 3519, 'item': 3, 'level': 3, 'type': True, 'value': None},
  {'duration': 3996, 'item': 4, 'level': 3, 'type': True, 'value': None},
  {'duration': 2013, 'item': 4, 'level': 3, 'type': True, 'value': None},
  {'duration': 2249, 'item': 5, 'level': 3, 'type': True, 'value': None},
  {'duration': 1022, 'item': 5, 'level': 3, 'type': True, 'value': None},
  {'duration': 1306, 'item': 6, 'level': 3, 'type': True, 'value': None},
  {'duration': 3250, 'item': 6, 'level': 3, 'type': True, 'value': None},
  {'duration': 1947, 'item': 7, 'level': 3, 'type': True, 'value': None},
  {'duration': 2047, 'item': 8, 'level': 3, 'type': False, 'value': None},
  {'duration': 1307, 'item': 7, 'level': 3, 'type': True, 'value': None},
  {'duration': 798, 'item': 8, 'level': 3, 'type': True, 'value': None},
  {'duration': 718, 'item': 8, 'level': 3, 'type': True, 'value': None},
  {'duration': 1371, 'item': 9, 'level': 3, 'type': True, 'value': None},
  {'duration': 813, 'item': 9, 'level': 3, 'type': True, 'value': None},
  {'duration': 718, 'item': 10, 'level': 3, 'type': True, 'value': None},
  {'duration': 924, 'item': 10, 'level': 3, 'type': True, 'value': None},
  {'duration': 1834, 'item': 11, 'level': 3, 'type': True, 'value': None},
  {'duration': 528, 'item': 11, 'level': 3, 'type': True, 'value': None},
  {'duration': 954, 'item': 12, 'level': 3, 'type': True, 'value': None},
  {'duration': 832, 'item': 12, 'level': 3, 'type': True, 'value': None},
  {'duration': 764, 'item': 13, 'level': 3, 'type': True, 'value': None}],
 'duration': 166494,
 'activity': 'zezv4mhv2p6v8n60f5dq',
 'timestamp': 1650900108188}

```


### Maze Task 

ActivitySpec: `lamp.maze_game`

#### Description

The Maze task assesses measure motor control and spatial problem solving by having participants tilt their phone to move a ball and complete a series of mazes that increase in diificulty.

#### Settings
NA.

#### Data 

- `static_data`:
    - NA.
- `temporal_slices`:
    - `item`: ?
    - `value`: time elapsed in ms
    - `type`: False (not completed); True (completed).
    - `duration`: Time elapsed in s since last event.
    - `level`: ?

#### Example

```
{'duration': 62613,
'temporal_slices': [{'duration': 46.909,
   'item': 2,
   'level': 1,
   'type': True,
   'value': 46909},
   {'duration': 9.596, 'item': 3, 'level': 2, 'type': True, 'value': 9596},
   {'type': 'manual_exit', 'value': False}],
   'static_data': {},
   'activity': 'r7dyn2cf8qpb09ygtffq',
   'timestamp': 1729203092208,
   '_parent': ''}
```    




### Pop The Bubbles

ActivitySpec: `lamp.pop_the_bubbles`

#### Description

A sustained attention task where the user is instructed to pop various sequences of bubbles according to varying rulesets.

#### Settings
- `bubble_count: number[] = [60, 80, 80]`: number of bubbles per level; array length = number of levels, must match below array's length
- `bubble_speed: number[] = [30, 30, 30]`: speed at which bubbles enter level in seconds; array length = number of levels, must match above array's length
- `intertrial_duration: number = 0.5`: duration between trials, in seconds
- `bubble_duration: number = 1.0`: length of time bubbles remain on screen, in seconds


#### Data
- `static_data`: Unused

- `temporal_slices`
    - `item: number`: the index of the bubble in the current level (Currently bugged: just shows the order of bubbles popped - i.e. the fifth bubble popped will have 5 for this value)
    - `value: string`: the color of the bubble (i.e. `yellow`, `red`, etc.) followed by trial type (i.e. `go`, `no-go`, `no-go-lure`, `no-go-constant`, `no-go-2inrow`).
    - `type: boolean`: whether this tap was correct or incorrect
    - `level: number`: the level number
    - `duration: number`: the reaction time to tap the bubble, in milliseconds, or `null` if bubble ignored (Currently bugged: not present)

#### Example
```
{'duration': 46083,
   'static_data': {},
   'temporal_slices': [{'item': 1,
     'level': 1,
     'type': True,
     'value': 'blue go'},
    {'item': 2, 'level': 1, 'type': True, 'value': 'pink go'},
    {'item': 3, 'level': 1, 'type': False, 'value': 'red no-go'},
    {'item': 1, 'level': 2, 'type': True, 'value': 'blue go'},
    {'item': 2, 'level': 2, 'type': True, 'value': 'yellow go'},
    {'item': 3, 'level': 2, 'type': True, 'value': 'blue go'},
    {'item': 4, 'level': 2, 'type': True, 'value': 'yellow go'},
    {'item': 1, 'level': 3, 'type': True, 'value': 'blue go'},
    {'item': 2, 'level': 3, 'type': False, 'value': 'green no-go-constant'},
    {'item': 3, 'level': 3, 'type': True, 'value': 'yellow no-go-2inrow'},
    {'item': 4, 'level': 3, 'type': True, 'value': 'blue go'}],
   'timestamp': 1642777640745,
   'activity': '3ztmvcbragc20a6sew4b'}
```


### Spatial Span

ActivitySpec: `lamp.spatial_span`

#### Description

The Spatial Span test, with Forward and Backward variants. Participants see a grid of 16 squares (4 x 4) which light up in a specific order. Participants are then told to click, either in the original order (Forward) or reverse order (Backward), the boxes that lit up. Ends after two consecutive sequences where one or more incorrect answers was entered.

#### Settings

- `reverse_tapping`: (boolean) If true, participants see the Backwards variant. If false, participants get the Forwards variant.

#### Data 

- `static_data`:
    - `StartTime`: (string) Human readable timestamp of the start of the activity
    - `EndTime`: (string) Human readable timestamp of the end of the activity
    - `point`: (number) 2 if every trial was answered correctly, else 1.
    - `score`: (number) Percentage of stages answered correctly, rounded to 0 decimal spaces.	
    - `correct_answers`: (number) The total number of correct answers made in the session.	
    - `wrong_answers`: (number) The total number of incorrect answers made in the session.	
    - `type`: (number) 1
- `temporal_slices`:
    - `item`: The index of the box tapped (1-16) (1-4 across the top, 5-8 in the second level from the top, and so on)
    - `value`: Unused.
    - `type`: (boolean) Whether the tap was correct or not.
    - `duration`: (number) Time since previous tap or the beginning of the level. The first duration includes the length of time used to show the sequence of boxes to tap.
    - `level`: (number) The current level (advances by 1 at the end of each sequence).

#### Example

```
{'duration': 48366,
  'static_data': {'EndTime': '2022-04-21T17:31:33.825Z',
   'StartTime': '2022-04-21T17:30:46.062Z',
   'correct_answers': 7,
   'point': 1,
   'score': 50,
   'type': 1,
   'wrong_answers': 6},
  'temporal_slices': [{'duration': 5107,
    'item': 4,
    'level': 1,
    'type': True,
    'value': None},
   {'duration': 876, 'item': 7, 'level': 1, 'type': True, 'value': None},
   {'duration': 6024, 'item': 7, 'level': 2, 'type': True, 'value': None},
   {'duration': 674, 'item': 12, 'level': 2, 'type': True, 'value': None},
   {'duration': 650, 'item': 5, 'level': 2, 'type': True, 'value': None},
   {'duration': 8419, 'item': 4, 'level': 3, 'type': False, 'value': None},
   {'duration': 706, 'item': 3, 'level': 3, 'type': False, 'value': None},
   {'duration': 959, 'item': 13, 'level': 3, 'type': False, 'value': None},
   {'duration': 701, 'item': 6, 'level': 3, 'type': True, 'value': None},
   {'duration': 7751, 'item': 5, 'level': 3, 'type': False, 'value': None},
   {'duration': 728, 'item': 9, 'level': 3, 'type': False, 'value': None},
   {'duration': 598, 'item': 10, 'level': 3, 'type': False, 'value': None},
   {'duration': 895, 'item': 1, 'level': 3, 'type': True, 'value': None}],
  'timestamp': 1650562293825,
  'activity': '10rp8he6aa3hqbr5c7v9'}
```


### Spin the Wheel 

ActivitySpec: `lamp.spin_wheel`

#### Description

Spin the Wheel is based on the Iowa Gambling Task that aims to measure decision-making and risk-taking behavior. Participants start with $2000 and have 20 spins per game by default; to spin the wheel, participants select one of four buttons.

#### Settings
NA.

#### Data 

- `static_data`:
    - NA. 
- `temporal_slices`:
    - `item`: Spin number.
    - `value`: ?
    - `type`: Score
    - `duration`: Time elapsed in s since last event (TODO: remove "s").
    - `level`: ?

#### Example

```
{'duration': 61822,
    'temporal_slices': [{'duration': '0s',
    'item': 1,
    'level': 1,
    'type': 2000,
    'value': 0},
    {'duration': '0.9s', 'item': 2, 'level': 3, 'type': 2100, 'value': 1},
    {'duration': '0.897s', 'item': 3, 'level': 4, 'type': 2200, 'value': 1},
    {'duration': '0.894s', 'item': 4, 'level': 4, 'type': 1950, 'value': 1},
    {'duration': '0.938s', 'item': 5, 'level': 2, 'type': 2000, 'value': 0},
    {'duration': '0.892s', 'item': 6, 'level': 3, 'type': 2100, 'value': 1},
    {'duration': '0.89s', 'item': 7, 'level': 4, 'type': 2200, 'value': 1},
    {'duration': '1.006s', 'item': 8, 'level': 1, 'type': 2200, 'value': 0},
    {'duration': '0.91s', 'item': 9, 'level': 2, 'type': 2200, 'value': 0},
    {'duration': '0.909s', 'item': 10, 'level': 3, 'type': 2050, 'value': 1},
    {'duration': '0.949s', 'item': 11, 'level': 4, 'type': 1800, 'value': 1},
    {'duration': '0.938s', 'item': 12, 'level': 4, 'type': 1900, 'value': 1},
    {'duration': '0.994s', 'item': 13, 'level': 4, 'type': 1900, 'value': 1},
    {'duration': '0.895s', 'item': 14, 'level': 3, 'type': 1900, 'value': 1},
    {'duration': '0.886s', 'item': 15, 'level': 1, 'type': 1900, 'value': 0},
    {'duration': '0.829s', 'item': 16, 'level': 2, 'type': 1900, 'value': 0},
    {'duration': '0.9s', 'item': 17, 'level': 3, 'type': 1650, 'value': 1},
    {'duration': '0.944s', 'item': 18, 'level': 4, 'type': 1400, 'value': 1},
    {'duration': '0.958s', 'item': 19, 'level': 4, 'type': 1400, 'value': 1},
    {'duration': '0.883s', 'item': 20, 'level': 1, 'type': 1400, 'value': 0},
    {'type': 'manual_exit', 'value': False}],
    'static_data': {},
    'activity': 'g0q7yn340nmjfbh1k694',
    'timestamp': 1728688950735,
    '_parent': ''}
```    



---

## Coming Soon

The following activities are not currently implemented in LAMP but are actively being worked on (or ported, for activities that were available in mindLAMP v1)


### 3D Figure Copy

ActivitySpec: `lamp.3d_figure_copy`

#### Description

The 3D Figure drawing game.

#### Settings

#### Data 

- `static_data`: 
    - `point`: The associated point value with the completed session.	
    - `drawn_file_name`: The link to the file containing the drawn image.	
    - `game_name`: The unique game name for the drawing session.
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Digit Span

ActivitySpec: `lamp.digit_span`

#### Description

The Digit Span test, with Forward and Backward variants. 

#### Settings

#### Data 

- `static_data`: 
    - `rating`: The associated rating of the completed session.	
    - `score`: The computed score for the completed session.	
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.	
    - `type`: The integer indicating forward or backward variant.
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```


### N-Back

ActivitySpec: `lamp.nback` & `lamp.nback_new`

#### Description

The NBack test.

#### Settings

#### Data 

- `static_data`:
    - `score`: The computed score for the completed session.
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.
    - `total_questions`: The total number of questions encountered during the session.	
    - `version`: The version of the test played.  
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```


### Serial 7s

ActivitySpec: `lamp.serial_7s`

#### Description

The Serial 7s test.

#### Settings

#### Data 

- `static_data`: Unused.
    - `rating`: The associated rating of the completed session.	
    - `score`: The computed score for the completed session.	
    - `total_attempts`: The total number of attempts made during the session.	
    - `total_questions`: The total number of questions encountered during the session.	
    - `version`: The version of the test played.  
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```


### Simple Memory

ActivitySpec: `lamp.simple_memory`

#### Description

The Simple Memory test.

#### Settings

#### Data 

- `static_data`:
    - `score`: The computed score for the completed session. 
    - `correct_answers`: The total number of correct answers made in the session.
    - `wrong_answers`: The total number of incorrect answers made in the session.
    - `total_questions`: The total number of questions encountered during the session.
    - `version`: The version of the test played.
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```


### Temporal Order

ActivitySpec: `lamp.temporal_order`

#### Description

The Temporal Order test.

#### Settings

#### Data 

- `static_data`:
    - `rating`: The associated rating of the completed session.	
    - `score`: The computed score for the completed session.	
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.	
    - `version`: The version of the test played.  
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Trails B

ActivitySpec: `lamp.trails_b` & `lamp.trails_b_new` & `lamp.trails_b_dot_touch`

#### Description

The new dot-touch variant of the Trails B test.

#### Settings

#### Data 

- `static_data`: 
    -  `point`: The associated point value with the completed session.	
    -  `rating`: The associated rating of the completed session.
    -  `score`: The computed score for the completed session.	
    -  `total_attempts`: The total number of attempts made during the session.		
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

### Visual Association

ActivitySpec: `lamp.visual_association`

#### Description

The Visual Association test.

#### Settings

#### Data 

- `static_data`:
    - `rating`: The associated rating of the completed session.	
    - `score`: The computed score for the completed session.	
    - `total_attempts`:	The total number of attempts made during the session.	
    - `total_questions`: The total number of questions encountered during the session.	
    - `version`: The version of the test played.
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```
