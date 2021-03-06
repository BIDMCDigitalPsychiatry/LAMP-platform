# How mindLAMP, the Data Center, and Cortex Work Together

## LAMP Platform

![](assets/LAMP_Overview.png)

### ① App

The patient uses the **App**, taking surveys, playing cognitive games, accessing helpful tips and resources, or doing meditation and breathing exercises; when enabled and configured, the app collects sensor data from the mobile device's accelerometer, GPS, pedometer, and more in the background without interrupting the patient. It also collects metadata about the patient's use of the app, like how long certain questions took to answer in a survey, or which helpful tips they appreciated the most, and uploads the data securely to a server you or your organization owns.

### ② Dashboard

Clinicians and Researchers can create, customize, and schedule activities for patients or participants to interact and receive notifications, and tap into near-real-time information about patients and better inform decision making. 

### ③ Database

The **Database** securely and chronologically indexes the data through the **LAMP Protocol** for programming and data science. It informs custom data analysis code in real-time that new patient data has arrived. Researchers can better build reusable tools, analysis pipelines, and conduct reproducible science, knowing that others around the globe using the **LAMP Platform** can easily work with their data or replicate their unique study.

### ④ Cortex

The **Cortex** data analysis pipeline is designed to easily hook into the **Database** and extract important and clinically useful secondary data features, such as sedentary behavior, time spent at home, device/screen usage, sleep estimates, and much more, from the terabytes of raw data. It can trigger custom just-in-time adaptive interventions and produce useful interactive visualizations viewable by patients and clinicians.
