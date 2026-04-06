# Just-In-Time Adaptive Interventions

This is a proof-of-concept for the LAMP Automations system. The workflow is detailed below:

1. Patient logs into mobile app (iOS/Android)
2. Mobile app uses Study configuration to activate device sensor data collection (i.e. which sensors, frequency per sensor, misc. settings)
3. Mobile app collects sensor data in background and caches it
4. Conditions must be met: device charged/charging + active WiFi connection
5. Mobile app bulk uploads cached sensor data to specified server (organization) 
6. Mobile app individually uploads activity data upon participant’s completion of a session
7. API Server processes and stores this data into database 
8. API Server signals all listeners that new data has arrived (per-study, per-activity, per-participant)
9. Automations worker receives new data notification
10. Worker searches its installed scripts catalog for scripts that specify a matching trigger condition
    1. [For example, the BIDMC College Study has installed their own script (source code provided here).](https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study/blob/master/main.py)
11. Worker executes scripts, providing the new data notification information to the script
12. Scripts (third-party user-specified code) are executed in isolated docker containers
13. Script processes the data as it needs and may optionally execute actions
    1. **Example: BIDMC college study script**
    2. Script computes change in daily survey score today vs. yesterday += 3 points
    3. If condition is met, script selects a random activity (meditation, journaling, placebo) to send to participant 
    4. Script sends message containing activity ID to API server for mobile app push notification
    5. Participant receives push notification on their mobile device 
        1. Participant opens push notification and starts activity session
        2. Upon completion of session (i.e. saved a journal entry), activity data is uploaded to server
        3. Repeat this feedback cycle from step #6

---

### Private Sensors and Tags

1. `lamp.gps.contextual` Sensor: This was a mindLAMP 1 feature that collected street-level GPS (not lat/long coordinates) with a paired survey asking about social and environmental context (who you were with and where you were) between 5-30 min of taking a survey in the app. 
1. `lamp.demographics` Tag: This holds processed clinical scale data from when a patient is onboarded onto a study (i.e. via paper-pencil surveys or RedCap, etc.)
1. `beiwe.*` Sensors: The full list of these Sensors is below; these are migrated sensors from when the Beiwe app was used alongside mindLAMP 1.
    1. `beiwe.identifiers`
    1. `beiwe.accelerometer`
    1. `beiwe.bluetooth`
    1. `beiwe.calls`
    1. `beiwe.gps`
    1. `beiwe.power_state`
    1. `beiwe.texts`
    1. `beiwe.wifi`
    1. `beiwe.audio_recordings`
    1. `beiwe.survey_answers`
    1. `beiwe.survey_timings`
    1. `beiwe.app_log`
    1. `beiwe.ios_log`
1. `lamp.dashboard.activity_details` and `lamp.dashboard.survey_description` Tags: These were placeholder tags for the mindLAMP v1 to v2 migration; the Activity API was not fixed at the time and did not support activity icons, descriptions, etc. and so these Tags were required on each customized Activity.
1. `lamp.dashboard.credential_roles` Tag: The Care Team feature allowed attaching a separate Tag with a dictionary, where each key matched a Credential set on the Participant; the values for each key (the Credential's email address) was a name, photo, and description of the individual's role in the care team. This is no longer supported as a feature.
1. `lamp.name` Tag: This added backwards-compatible support for the `Participant.aliases` feature.
1. `lamp.messaging` Tag: This added backwards-compatible support for the Conversations feature of the dashboard.
1. `lamp.dashboard.welcome_dismissed` Tag: Unknown; this Tag was never used. 
1. `lamp.selectedStudies`, `lamp.selectedActivities`, and `lamp.selectedSensors` Tags: Due to bugs in the earliest version of the mindLAMP v2 dashboard, these tags held an array of studies, activities, or sensors that were selected by the currently logged in Researcher. This is now defunct and should not be used (`localStorage` should be used instead).
