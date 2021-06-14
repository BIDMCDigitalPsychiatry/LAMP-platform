# Activity Types

In the case of activities (active data) completed by the participant or patient, the activity declares two types of blueprints: **static data**, or data that relates to the overall session, and **temporal slices**, data that provides millisecond precision and carries information about each action or intention the participant or patient might have. Furthermore, activities that can be customized will also have **settings** blueprints, but these won't actually appear in the event data (and are omitted from the fields listed below).

### Survey

ActivitySpec: `lamp.survey`

#### Description

Customizable surveys.

#### Settings

#### Data 

- `static_data`: Unused.
- `temporal_slices`:
    - `item`: (string) The question text (or index).
    - `value`: (string) The selected question option text (or index).
    - `type`: Unused.
    - `duration`: The time taken to answer a question in the survey.
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

### Cats & Dogs

ActivitySpec: `lamp.cats_and_dogs` & `lamp.cats_and_dogs_new`

#### Description

The Cats and Dogs game.

#### Settings

#### Data 

- `static_data`:
    - `point`: The associated point value with the completed session.	
    - `rating`:	The associated rating of the completed session.	
    - `correct_answers`: The total number of correct answers made in the session.	
    - `wrong_answers`: The total number of incorrect answers made in the session.	
    - `total_questions`: The total number of questions encountered during the session.    
- `temporal_slices`:
    - `item`: Unused.
    - `value`: Unused.
    - `type`: Unused.
    - `duration`: Unused.
    - `level`: Unused.

#### Example

```json
```

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
