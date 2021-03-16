# What's New in the LAMP Platform?

---

## Top Priorities

*Press the toggle button to learn more about each priority item.*

---

- 🧩**Advanced Interventions**

    *We're expecting support for these features (Medications, Hope Box, Goals, etc.) to be generally available in early 2021.*

- ⌚**Sensor Customization**

    *We're expecting support for this feature to be generally available in early 2021.*

- 📥**Offline Support**

    *We're expecting support for this feature (offline data replication & synchronization) to be generally available by early 2021.*

- **🔍Data Visualization**

    *We're expecting support for this feature ("Data Studio") to be generally available in early 2021.*

## Known Issues

- On some macOS 11 (using Safari 14) and iOS 14, some lists in the app are not able to scroll until the page is resized or a button is tapped.

---

# February 12th, 2021 — 
Patient Profile & New Cognitive Tests

---

`**FEATURES**` 

### Patient Profile UI

- The new Patient profile interface allows quick and easy management of activities, sensors, and conversations in one place.
- You are now able to add, remove, and configure specific sensors for data collection across studies. (Support for this feature requires the upcoming smartphone and wearable app release.)

![What's New in the LAMP Platform/Screen_Shot_2021-02-12_at_11.54.43_AM.png](What's New in the LAMP Platform/Screen_Shot_2021-02-12_at_11.54.43_AM.png)

![What's New in the LAMP Platform/Screen_Shot_2021-02-12_at_11.54.48_AM.png](What's New in the LAMP Platform/Screen_Shot_2021-02-12_at_11.54.48_AM.png)

![What's New in the LAMP Platform/Screen_Shot_2021-02-12_at_11.55.09_AM.png](What's New in the LAMP Platform/Screen_Shot_2021-02-12_at_11.55.09_AM.png)

### Pop The Bubbles & Balloon Risk

- The new "Pop The Bubbles" and "Balloon Risk" cognitive test activities are available for configuration and usage (in specific installations only; consult your system administrator).

![What's New in the LAMP Platform/Untitled A.png](What's New in the LAMP Platform/Untitled A.png)

---

`**IMPROVEMENTS**`

### **Improved Native Apps**

- Updated and refactored the iOS and Android apps for higher performance and support for new enhanced features.
    - mindLAMP now requires a minimum version of iOS 14 or watchOS 6.
    - This update will be rolling out in the coming weeks once approved by Apple and Google.
- Updated push notifications to collect metadata about notifications and user interactions as a new sensor type.

### **Improved Native Apps**

- Updated graphing code to be higher performance and restored Step Count graphs.
- Updated error boundaries to display errors to the user instead of crashing to an unhelpful blank screen, and added a version number.

### Hardened Security Requirements

- Hardened security requirements for enterprise deployments will be rolling out in the coming weeks.
    - Clinicians will need to request their system administrator to be added to a clinic/study and system administrators may generate a password of sufficient complexity as required by organizational policies.
    - Patients and study participants will need to request their clinician or research coordinators to reset their password or add additional care team members.

---

`**BUG FIXES**`

- Resolved minor labeling and functionality issues with the DBT Diary Card activity.
- Resolved an issue where the backend message queue would not accept large payloads and inadvertently crash the API Server.
- Resolved an issue where Breathe exercises did not record duration spent correctly.
- Resolved issues in rare cases with embedded activities (i.e. Jewels) not receiving the correct language code for translations support at runtime.
- Resolved an issue where Activity Groups appeared in the Prevent tab incorrectly.
- Resolved an issue where tapping a notification could lead to a blank page instead of an embedded activity.
- Resolved an issue where loading patients' data could erroneously take twice as long as expected.
- We are aware of an issue with scrolling being temporarily locked on Safari browsers when viewing the Patient or Activity tabs in the dashboard; a temporary workaround is to resize the browser window, after which scrolling will resume normally.
- We are aware of an issue leading to slower than expected performance and speed when using the Patient tab of the dashboard across all browsers; a resolution for this issue is in progress.

---

# January 11th, 2021  — 
Stability & Performance Improvements

---

`**IMPROVEMENTS**`

**Server Administrators: 
Please begin to migrate your Docker image tags for `LAMP-server` and `LAMP-dashboard` from `2020` to `2021` to prepare for major upcoming releases.**

### Analytics API

- Added support for patient analytics (tab open, notification receipt). (See the `lamp.analytics` `SensorSpec`.)

---

`**BUG FIXES**`

- Resolved an issue with the Feed tab incorrectly displaying weekly/monthly schedules.
- Resolved several issues with activity icon uploads and configuration/settings.
- Resolved a theme inconsistency when logged in as a system administrator.
- Resolved a cursor glitch issue when hovering over the desktop sidebar icons.
- Resolved an issue where the conversations icon would always show an indicator even if previously viewed.
- Resolved an issue where launching a survey from a scheduled activity group on the Feed tab would prevent correctly saving the data.
- Resolved several display issues with the DBT Diary Card clinician-facing graphs.
- Resolved minor notification-related issues on the backend.

---

# December 17th, 2020 — 
Ease of Use Improvements

---

`**FEATURES**` 

### App Toolbar

- We've added a new toolbar at the top of the screen that helps you keep track of where you are in the app.
    - Viewing a patient when logged in as a clinician now has a gentle border around the app to remind you of which patient you're viewing, along with a helpful back button to return to the clinician view.

![What's New in the LAMP Platform/Screen_Shot_2020-12-17_at_2.38.10_PM.png](What's New in the LAMP Platform/Screen_Shot_2020-12-17_at_2.38.10_PM.png)

![What's New in the LAMP Platform/Screen_Shot_2020-12-17_at_2.38.31_PM.png](What's New in the LAMP Platform/Screen_Shot_2020-12-17_at_2.38.31_PM.png)

### Study Management

- We've added a studies management panel for researchers to better keep track of their studies, rename, or delete them.

![What's New in the LAMP Platform/Screen_Shot_2020-12-17_at_2.41.03_PM.png](What's New in the LAMP Platform/Screen_Shot_2020-12-17_at_2.41.03_PM.png)

### Real-time Event Subscription API

- We've added a powerful new (pre-release) real-time event subscription API for the upcoming logic/automations features that work closely with the Cortex data analysis pipeline.
    - Information on this API will be added to the documentation in the coming weeks, and the API endpoints are currently subject to change.

---

`**IMPROVEMENTS**`

### Miscellaneous

- Added support for displaying custom Activity Groups in the Assess tab along with the Feed tab.
- Improved HealthKit and Google Fit sensor (i.e. step count) data collection fidelity; this change will be rolling out over the next week for iOS and Android.
- Improved visualization of DBT Diary Card data in the Prevent tab, including dynamic charts and patients' free responses.

---

`**BUG FIXES**`

- Resolved a **significant** issue where some patients were unable to log in on iOS or Android with valid credentials due to server login latency.
- Resolved an issue where certain survey question text was not displaying for specific surveys.
- Resolved an issue where the message entry field for the Conversations UI cut off the message being typed by the user.
- Resolved an issue where survey slider question types sometimes showed incorrect option ranges.
- Resolved an issue where the Feed tab did not display schedule indicators correctly on days with scheduled activities.
- Resolved an issue where the "Last Active" and "Data Quality" (renamed "Last Passive") indicators were misleading and presented inaccurate information.
- Resolved an issue where after editing an activity for one study, activities from other studies would temporarily disappear from the Activity tab.
- Resolved an issue where push notifications on iOS and Android would not open to the specific activity's UI, instead showing a blank screen.
- Resolved an issue where sensor data collection would be erroneously paused or data cache would be cleared on certain Android 11 devices.

---

# December 1st, 2020 — 
Cortex Visualizations & Activity Updates

---

`**FEATURES**` 

### Cortex & Enhanced Visualizations

- We've added support for displaying real-time visualizations generated by the Cortex data analysis pipeline in both the app and management console.
    - We've optimized and streamlined the Prevent tab of the app

![What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.07.35_AM.png](What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.07.35_AM.png)

- We've added support for user-specified dynamic Vega charts in both the app and management console.
    - This feature is currently limited to the DBT Diary Card activity, but will soon be available for other activities.

![What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.09.53_AM.png](What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.09.53_AM.png)

---

`**IMPROVEMENTS**`

### Localization & Internationalization

- Added an "empty tab" message and optimized interface text.
- Updated support for Hindi (`hi-IN`).
- Updated support for Spanish (`es-ES`).

### Activities & Surveys

- Added the `SHORT ANSWER` question type with description text.

![What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.14.19_AM.png](What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.14.19_AM.png)

- Added the `RATING SCALE` question type with description text.

![What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.14.58_AM.png](What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.14.58_AM.png)

- Added custom icon support for surveys and activity groups.
- Added automatic question settings validation for certain question types.
- Updated Jewels settings to support multiple modes (`beginner`, `intermediate`, `advanced`, `expert`) and variants (`trails_a`, `trails_b`).

![What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.18.34_AM.png](What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.18.34_AM.png)

- Added support for **Markdown-formatted text** in Tips (coming soon to other activity types, including surveys).
    - *Currently does not support Table formatting.*

![What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.32.56_AM.png](What's New in the LAMP Platform/Screen_Shot_2020-12-01_at_10.32.56_AM.png)

---

`**BUG FIXES**`

- Resolved an issue in the Breathe activity where the duration of the exercise did not correctly match the length of the audio, if one was uploaded or specified.
- Resolved an issue where adding a vector image (SVG) as a custom activity icon caused the icon to be erroneously compressed and pixelated.
- Resolved an issue with the Activity and Participant tabs of the management console displaying information slowly and in the wrong or random order.

---

# November 6th — 
Ease of Use Improvements

---

`**BUG FIXES**`

- Resolved an issue where introduction tooltips for each tab (Learn, Assess, Manage, Prevent) continued to appear when logged in as a patient even after being dismissed once.
- Resolved an issue where Automations visualizations were limited to 320 x 320 pixels in size.
- Resolved an issue where longer Journal entries could not be viewed later and were instead clipped to 700 characters max.
- Resolved an issue where the Likert survey option was not configurable and was limited to only four static response choices; **you must now manually specify** your Likert scale using the List option type.
- Resolved an issue where Spatial Span was not configurable to select between the Forwards and Backwards variants.
- Please note that if you have exported learn or manage tab Activities from a previous version of the dashboard, you may need to re-export them with this new version.

---

# November 5th, 2020 — 
Stability & Performance Improvements

---

`**IMPROVEMENTS**`

### Survey Slider Options & Description

- Customize the slider question type with as many or as few stops, and now add descriptions for each stop along the slider that will show below the slider for when a patient makes a selection.

![What's New in the LAMP Platform/Screen_Shot_2020-11-05_at_3.34.00_PM.png](What's New in the LAMP Platform/Screen_Shot_2020-11-05_at_3.34.00_PM.png)

- Survey and other activities now support custom descriptions and icons.

![What's New in the LAMP Platform/Screen_Shot_2020-11-05_at_3.34.30_PM.png](What's New in the LAMP Platform/Screen_Shot_2020-11-05_at_3.34.30_PM.png)

### Upload Guided Meditation Audio

- Breathe now supports uploading custom mp3 files for guided meditation, as well as using other mp3 files that are publicly available on the internet.

![What's New in the LAMP Platform/Screen_Shot_2020-11-05_at_3.31.00_PM.png](What's New in the LAMP Platform/Screen_Shot_2020-11-05_at_3.31.00_PM.png)

---

`**BUG FIXES**`

- Resolved an issue where the descriptions of activities/surveys would show the text `(10 minutes)` erroneously regardless of survey length or expected activity duration.
- Resolved an issue where devices running Android 10 had inconsistent app behavior, including crashing or opening to a white screen.
- Resolved an issue where opening the Manage tab would cause the app to crash if there were no Manage activities enabled for a patient.
- Resolved several areas where push notifications were inconsistent, either sending no notification or many (~50) duplicate notifications to logged in devices.
- Resolved an issue where logging out of one account and into another account caused the device to erroneously continue receive notifications for the previous account.
- Resolved an issue where the user interface was very slow when managing more than ten studies.

Please note that we are currently investigating an issue regarding inconsistent data collection from HealthKit (such as step count) on Apple iOS devices when paired to an Apple Watch, when compared to the Apple Health app.

---

# October 23rd, 2020 — 
Clinical Customization Updates

---

`**FEATURES**` 

### Customizable Activities

- Activities like **Jewels**, **Breathe**, and **Tips** now have their own customization editors, just like **Surveys** do.
- Upload your own audio files (mp3) to create multiple breathing and meditation exercises.
- Upload your own content and images to create unique Tips or resources for participants or patients to see.

---

`**BUG FIXES**`

- Resolved activity importing issues that caused activities such as surveys to not successfully import in accounts with multiple studies.
- Resolved survey interface alignment issues that made it difficult to read and answer questions.
- Resolved an issue with creating a survey where slider question types were not customizable.
- Resolved an issue where it was not possible for an account to create new studies.

Please note that we are currently investigating an issue regarding inconsistent data collection from HealthKit (such as step count) on Apple iOS devices when paired to an Apple Watch, when compared to the Apple Health app.

Please note that we are aware of an issue with some Android 10 devices being unable to open and use the mindLAMP app.

---

# October 15th, 2020 — 
User Experience Upgrades

---

`**FEATURES**` 

### Updated management interface

- The new Participant and Activity management tabs allow clinicians to better manage multiple studies or clinics in one simplified page.
- Activity management has been retooled to support complete customization of what patients see when they use the app.

### Self-hosted deployment support

- The LAMP Platform API Server has been retooled to automatically manage aspects of the deployment process.
- Databases are automatically bootstrapped and a secure system administrator password is automatically created and persisted on first launch.

---

`**IMPROVEMENTS**`

### Database improvements

- Improved the performance of Tag lookup, including for custom visualizations and patient names.
- Improved the performance of security and credential verification.

---

`**BUG FIXES**`

- Resolved an issue where connecting to a specific server address on the mobile app caused the app to not load the user interface.
- Resolved an issue where activity streaks were incorrectly reported as 14 days regardless of the actual streak duration.
- Resolved an issue where Jewels and Box Game were not correctly opening or saving due to missing values in configuration.
- Resolved a major issue that significantly impacted sensor collection frequency on iOS devices — device motion data is now correctly collected at frequencies greater than 0.002 Hz.

---

# October 5th, 2020 — 
General Availability of mindLAMP 2

---

`**FEATURES**` 

![What's New in the LAMP Platform/banner.png](What's New in the LAMP Platform/banner.png)

![What's New in the LAMP Platform/app-image.png](What's New in the LAMP Platform/app-image.png)

### Brand new user experience

- The new **Feed** tab will assist patients/participants with a heads-up of what needs to be completed each day, as well as what's already been completed in the past.
- The bright new user interface is approachable, friendly, and easy to use! You'll find the **Learn**, **Assess**, **Manage**, and **Prevent** tabs familiar, but now simplified and better organized.
- Management of studies and clinics is now simplified with a visual makeover that you can use in the browser dashboard or on-the-go when logged in as a clinician in the mobile app.

### New activities and interventions

- We've ported over some classics such as **Surveys** or the beloved **Jewels** game from mindLAMP 1, so you won't miss those.
- We've also added brand new activities such as **Tips** for customizable articles, **Breathe** for meditation and breathing exercises, **Journal** for a digital journal and thoughts tracker, and several more!
- **Conversations** now allow you to communicate with study participants or patients in the clinic. *(This is a completely optional feature that is disabled by default. Please see the user guide for more details.)*

### Visual data dashboard

- The new app experience also allows customizing how you want to see and work with data, located in the **Prevent** tab of the app.
- We have more planned for data visualization — stay tuned! ✨

### Wearables support

- mindLAMP 2 introduces support for the Apple Watch and Google wearOS watches (Fossil, Skagen, TicWatch, and others), and you can download these apps independently of the mobile apps.
- Because the screen sizes are typically too small for complex interaction, the wearable apps are limited to only passive sensor collection.

Please note that we're currently investigating an issue that significantly impacts the sensor collection frequency of device motion on iOS and Apple Watch devices.

---

`**IMPROVEMENTS**`

### Push notifications

- While mindLAMP 1 supported local notifications to remind patients/participants to take surveys or play cognitive games, it was not always reliable.
- We've upgraded our infrastructure to support directly sending notifications to devices from the cloud, ensuring that everyone receives activities on schedule.
- You'll also be able to track when a notification was received by a device and the time interval between when it was received and when the activity (such as a daily survey) was opened.

### Database improvements

- Data scientists and researchers will now be able to use our powerful API across the [R](https://github.com/BIDMCDigitalPsychiatry/LAMP-r), [Python](https://github.com/BIDMCDigitalPsychiatry/LAMP-python), [Javascript](https://github.com/BIDMCDigitalPsychiatry/LAMP-js), [Swift](https://github.com/BIDMCDigitalPsychiatry/LAMP-swift), and [Kotlin](https://github.com/BIDMCDigitalPsychiatry/LAMP-kotlin) programming languages.
- Security and performance improvements make it simpler to share data with others using Credentials and download data quickly using our Event-based API.
- It's now possible for organizations to deploy the LAMP Platform on Amazon Web Services, Microsoft Azure, or on-premise quickly and effectively. For more information, check out [Deploy & Develop LAMP](https://www.notion.so/Deploy-Develop-LAMP-7e06a70a07ee43bd9b70862367a2f2b9).

---

`**BUG FIXES**`

- Resolved several **Survey** issues, including questions not being displayed correctly, and data not being uploaded in the correct format.
- Resolved an issue where the data dashboard (in the **Prevent** tab) was not displaying the correct graphs or last activity text.
- Resolved an issue where being logged in already on the mobile app during a system upgrade caused the app to crash to a white screen.
- Resolved an issue where data from mindLAMP 1 was being saved but was not visible in the mindLAMP 2 user interface.

---

# August 25th, 2020 — 
Stability & Infrastructure Upgrades

---

`**IMPROVEMENTS**`

### Infrastructure Upgrades

- There's a lot of new improvements coming to support the release of mindLAMP 2 — thanks for helping us make it happen!

`**BUG FIXES**`

- Resolved an issue that prevented notifications from being received on iOS devices.
- Resolved an issue that caused the app to crash to a black screen on select Android devices.

---

**Was there something we didn't cover, or need more help?**
Let us know by making a post in the [LAMP Community](https://community.lamp.digital/), or [contact us directly](mailto:team@digitalpsych.org). Thank you for your contribution! 🌟
*Page last updated on November 5th, 2020.*