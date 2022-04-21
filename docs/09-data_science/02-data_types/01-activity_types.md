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
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

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
    - `score`: The percentage of trials answered correctly, converted to an integer. 
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




### Jewels

ActivitySpec: `lamp.jewels_a` & `lamp.jewels_b`

#### Description

The Jewels game, with variants A & B.

#### Settings

#### Data 

- `static_data`: 
    - `point`: (number) The associated point value with the completed session. 
    - `rating`: (number) The associated rating of the completed session.
    - `score`: (number) The computed score for the completed session.
    - `total_attempts`: (number) The total number of attempts made during the session.
- `temporal_slices`:
    - `item`: (number) Unused.
    - `value`: (string) The alphanumeric index of the item tapped.
    - `type`: (string) Whether the correct item was tapped or not ("correct" or "none").
    - `duration`: (number) Unused.
    - `level`: (number) Unused.

#### Example

```json
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

The Spatial Span test, with Forward and Backward variants.

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
