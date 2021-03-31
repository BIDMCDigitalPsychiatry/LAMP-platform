---
title: How Interventions Work
slug: how_interventions_work
---

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
