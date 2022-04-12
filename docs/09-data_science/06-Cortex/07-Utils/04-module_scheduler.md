# Module scheduler

The module scheduling code allows researchers to specify a set of activities as a "module" which can then be used to easily schedule sets of activities for participants. The functions in this file can be used either individually to create your own module scheduling system or to automatically schedule via participant attachments.

First, the researcher must specify what activities consitutes an activity. Modules should be specified in a json file. Each module must include the name (which should be the key in the dictionary) and will have a dictionary containing:
- "activities": the list of names of activities for the module
- "daily": the list of either "none" or "daily" for if the activity should repeat daily or only occur once
- "times": the start times of each activity (relative to the start of the module, see example below)
- "message": a message to send to the participant (optional, put "" for no message)

For example, here is a sample specification:
```
{
    "trial_period": {
        "activities": ["Trial Period Day 1",
                       "Trial Period Day 2",
                       "Trial Period Day 3"],
        "daily": ["none", "none", "none"],
        "times": [0, 86400000, 172800000],
        "message": ""
    },
    "gratitude_journal": {
        "activities": ["Gratitude",
                       "Gratitude Journal Day 1",
                       "Gratitude Journal Day 2",
                       "Gratitude Journal Day 3",
                       "Gratitude Journal Day 4",
                       "Gratitude Journal Day 5",
                       "Gratitude Journal Day 6"],
        "daily": ["none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none",
                  "none"],
        "times": [-60000,
                   60000,
                   86400000,
                   172800000,
                   259200000,
                   345600000,
                   432000000],
        "message": "This week's module centers around gratitude."
    },
}
```
In the example above, we have specified two modules, "trial_period" and "gratitude_journal". The "trial_period" module has 3 activities, none of which repeat. The first one will occur at the time of scheduling (for example, at 6pm on that day), the second one will happen 86400000ms later (ie at 6pm on the second day), and the third one will happen 172800000ms later (ie at 6pm on the third day). Notice that the first activity for "gratitude_journal" has a negative time. This will schedule the activity 1 minute before the scheduled start time of 6pm. In this way, the start time does not truly need to be the start.

Please see the source code examples for more information here: https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex/tree/master/cortex/utils

Once modules have been specified, they can be scheduled in one of two ways. The first is by using the `schedule_module()` function directly. For more information, please see below. The second method involves setting attachments directly on participants to tell the study system which modules participants should be assigned and when and then periodically calling `correct_modules()` to update participant module schedules. To use this function, a phase tag is required of the form:
```
{
  "status": "enrolled",
  "phases": {"enrolled": 1649217600000,
             "trial": 1648353600000}
}
```
"phases" is the dictionary that holds the phases and when (in miliseconds) the participant started in this phase. Module scheduling is designed to only occur for particpants in the "enrolled" or "trial" phase. The module scheduler will check how long the participant has been in the given phase to determine which module should be scheduled. 

The second required tag is a module tag. This tag is set on a participant:

```
{
    "trial_period": {
                      "module": "trial_period",
                      "phase": "trial",
                      "start_end": [0, 345600000],
                      "shift": 18
                 },
    "gratitude_journal": {
                     "module": "gratitude_journal",
                     "phase": "enrolled",
                     "start_end": [0, 518400000],
                     "shift": 18
                 },
}
```
In this example, the participant will have the "trial_period" module scheduled when they are in time 0 to 345600000ms (4 days) into the "trial". In addition, the activity time will start at 18:00, or 6pm. The "gratitude_journal" module will be during the "enrolled" phase and will last from the start of enrollment (0ms) to the end of the first week (518400000ms = day 6). This module will also be shifted in time to start at 6pm (18:00).

## `utils.module_scheduler.correct_modules`
With the modules specified, and phase / module tags set on the participant, correct_modules() can be called to 1) check which module the participant should be scheduled for 2) determine if this matches with the current scheduled activities and 3) make any necessary corrections to the schedules. 

#### Args

- `part_id`: (string) the participant ID.
- `PHASE_TAG`: (string) the name of the phase tag.
- `MODULE_TAG`: (string) the name of the module tag.
- `module_json`: (dict, default: MODULE_JSON) the module specificaitons.

#### Example

```markdown
utils.module_scheduler.correct_modules("U1234567890", "my_study.phases", "my_study.modules", MODULE_JSON)
```
----
### Below is documentation on the functions that are used to support correct_modules() and that can be used individually to customize your own module scheduling as desired.
## `utils.module_scheduler.schedule_module`
Schedule a module for a participant.

#### Args

- `part_id`: (string) the participant ID.
- `module_name`: (string) the name of the module to schedule. This must be a name in the module json.
- `start_time`: (int, units: ms) the time to use as the "start" / reference time for the module. This does not need to be the time of the first activity. In addition, you can use negative times to schedule some activities before the start.
- `module_json`: (dict) the specification for the modules. 

#### Example

```markdown
utils.module_scheduler.schedule_module("U1234567890", "gratitude_journal", 1648368000000, module_json)
```
Please see the top of this page for the example `module_json`.

## `utils.module_scheduler.unschedule_other_surveys`
Uschedule all surveys for a participant (except those specified in `keep_these`).

#### Args
- `part_id`: (string) the participant ID.
- `keep_these`: (list of strings) names of any surveys to keep the schedules for.

#### Example

```markdown
utils.module_scheduler.unschedule_other_surveys("U1234567890", keep_these=["Morning Daily Survey", "Weekly Survey"])
```

## `utils.module_scheduler.unschedule_specific_survey`
Uschedule a specific survey.

#### Args
- `part_id`: (string) the participant ID.
- `survey_name`: (string) the name of the survey to unschedule.

#### Example

```markdown
utils.module_scheduler.unschedule_specific_survey("U1234567890", "Gratitude Journal Day 3")
```
