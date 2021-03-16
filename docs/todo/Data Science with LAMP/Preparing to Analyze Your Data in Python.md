# Preparing to Analyze Your Data in Python

If you'd like to follow along with this tutorial but don't have a Python development environment set up, **consider using [Google Collab](https://colab.research.google.com/), a free service** from Google Research. 

# Installation and Setup

First install the package. 

```python
pip install LAMP-core
```

Then, import the library and connect to the server.

```python
import LAMP
LAMP.connect('api.lamp.digital', 'my_email@address.com', 'my_password')
```

# Usage

## Protocol methods

Methods native to the LAMP API can now be called to pull data from the platform. These methods can be easily viewed on the [[Data Science with LAMP](https://www.notion.so/Data-Science-with-LAMP-5420896d7b034afa8326f28e6bd24000)](../Data Science with LAMP.md). 

For example, we can find all of the participants belonging to a Researcher:

```python
TEST_RESEARCHER = 'UmVzZWFyY2hlcjoxNjM~'

LAMP.Participant.all_by_researcher(TEST_RESEARCHER)
```

```python
# OUTPUT

#{'data': [{'id': 'U34260565',
#    'language': 'en',
#    'theme': '#359FFE',
#    'emergency_contact': None,
#    'helpline': None},
#   {'id': 'U33327158',
#    'language': 'en',
#    'theme': '#359FFE',
#    'emergency_contact': None,
#    'helpline': None}]}
```

For information on API object hierarchy, please refer [[Data Science with LAMP](https://www.notion.so/Data-Science-with-LAMP-5420896d7b034afa8326f28e6bd24000)](../Data Science with LAMP.md) .

For example, the code below will make CSV files of all the 'lamp.gps.contextual' sensor events for all participants under a given researcher id:

```jsx
import LAMP
import pandas as pd 
LAMP.connect("MY_EMAIL_ADDRESS_HERE", "MY_PASSWORD_HERE")

for participant in LAMP.Participant.all_by_researcher("me")['data']:
    data = []
    events = LAMP.SensorEvent.all_by_participant(participant['id'], origin='lamp.gps.contextual')['data']
    for event in events:
        data.append({
            'timestamp': event['timestamp'],
            'UTC time': "",
            'latitude': event['data']['latitude'],
            'longitude': event['data']['longitude'],
            'altitude': 1.0,
            'accuracy': 1.0
        })
    # Don't make CSV files for participants without any `lamp.gps.contextual` events.
    if len(data) > 0:
        pd.DataFrame.from_dict(data, orient='columns').to_csv(f"{participant['id']}.csv", index=False)
```

### Querying sensor data

Query sensor data with "all_by_participant"

Specify a sensor with "origin". If no origin is passed, it will try to query all sensors

Note that due to device or user specification, some spensors may not have data

```jsx
# Full sensor specs at https://docs.lamp.digital/Data-Types-99b045852c7b406f87c124b927fe95fa

# Please note that no GPS data has been included with these dummy profiles

participant_1 = "U5704591513"
lamp_sensors = ["lamp.accelerometer", "lamp.accelerometer.motion", "lamp.analytics", 
           "lamp.blood_pressure", "lamp.bluetooth", "lamp.calls", "lamp.distance",
           "lamp.flights", "lamp.gps", "lamp.gps.contextual", "lamp.gyroscope",
           "lamp.heart_rate", "lamp.height", "lamp.magnetometer", "lamp.respiratory_rate"
           "lamp.screen_state","lamp.segment", "lamp.sleep", "lamp.steps",
           "lamp.weight", "lamp.wifi"]

LAMP.SensorEvent.all_by_participant(participant_1, origin="lamp.bluetooth")['data'][:5]#, origin="lamp.calls")
```

```jsx
[{'timestamp': 1578863459719,
  'sensor': 'lamp.bluetooth',
  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',
   'RSSI': -71}},
 {'timestamp': 1578863459533,
  'sensor': 'lamp.bluetooth',
  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',
   'RSSI': -74}},
 {'timestamp': 1578863459196,
  'sensor': 'lamp.bluetooth',
  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',
   'RSSI': -60}},
 {'timestamp': 1578863459167,
  'sensor': 'lamp.bluetooth',
  'data': {'hashed MAC': 'YyTeKHTPetzGdC0j2EPJ9-VJ9FxafDpHd34MA41BQDKSt1Q4B7vtuFJZpN7_JTOKnDycjRcA3ik8pYwcrfFGlQ==',
   'RSSI': -98}},
 {'timestamp': 1578863458989,
  'sensor': 'lamp.bluetooth',
  'data': {'hashed MAC': 'lYcGRvQlyI9Gq8Yqu1wDX8mOQJDBzIMnnGS9UsVxsrsmKWb1nFOY0tLLAE8VTzJ83GeJaBhmnhpL8weRv7A96Q==',
   'RSSI': -97}}]
```

### Example: Query accelerometer data

Accelerometer data points are SensorEvents with the origin "lamp.accelerometer".

See LAMP-py documentation at [https://github.com/BIDMCDigitalPsychiatry/LAMP-py](https://github.com/BIDMCDigitalPsychiatry/LAMP-py) for further API details.

Query responses are limtied to 1000 entries. In the event that there are more than 1000 events for a given sensor, the most recent 1000 events are returned. To access more data—or to query during a specific time range—you must use the "_to" and "from" parameters

```jsx
# '_from' and 'to' are UNIX timestamps
participant_accel_tr = LAMP.SensorEvent.all_by_participant(participant_1, 
                                                           origin="lamp.accelerometer",
                                                           _from=1577735460618,
                                                           to=1577735460737)
participant_accel_tr['data']
```

### Query sensor data

Surveys are ActivityEvents, with each survey type defined as an Activity

'duration' is the survey completion time, in ms

'activity' is the Activity id

'temporal_slices' contains responses for each survey question

```python
LAMP.ActivityEvent.all_by_participant(participant_1)['data'][0]
```

```python
# {'timestamp': 1600557560000,
#  'duration': 15000,
#  'activity': '16fnz109gs4sehyfc84n',
#  'static_data': {},
#  'temporal_slices': [{'item': 'How did you feel this week?',
#    'value': 'Okay',
#    'type': 'valid',
#    'duration': 5000,
#    'level': None},
#   {'item': 'Have you been admitted to the hospital for psychiatric reasons in the past week?',
#    'value': 'No',
#    'type': 'valid',
#    'duration': 7000,
#    'level': None},
#   {'item': 'Use this space to write down your thoughts and feelings about the week. ',
#    'value': 'it was okay',
#    'type': 'valid',
#    'duration': 3000,
#    'level': None}]}
```

Details of the 'activity can be be viewed the following method

```python
LAMP.Activity.view('16fnz109gs4sehyfc84n')
```

**To learn more about the data types available for Activities and Sensors, see** [Data Types](Data Types.md). 

## Dataframe methods

Pandas dataframe-based functionality has been implemented on top of the protocol methods to allow users to more easily work with data. This functionality is in the form of "ParticipantExt" and "StudyExt" objects.

### ParticipantExt objects

"ParticipantExt" objects are designed to represent individual LAMP participants. They are separet from the "Participant" object defined in the protocol. The objects have various properties and methods that will discussed here and can be viewed in more detail in the "participant_ext.py" file.

Subjects are be initialized with their LAMP id, as well as various other (optional) fields:

```python
TEST_PARTICIPANT = 'U34260565'
subject_1 = lamp.ParticipantExt(id = TEST_PARTICIPANT)

TEST_PARTICIPANT2 = 'U33327158'
subject_2 = lamp.ParticipantExt(id = TEST_PARTICIPANT2,  
												 age = 42, 
												 sex = 'F')
```

Integrated data can now be viewed in the Subject's df:

```python
subject_1.df
```

```python
#           Date         id   Anxiety      Mood
# 0   2018-08-22  U34260565       NaN       NaN
# 1   2018-08-23  U34260565  0.857143  1.000000
# 2   2018-08-24  U34260565       NaN       NaN
# 3   2018-08-25  U34260565       NaN  1.111111
# 4   2018-08-26  U34260565       NaN       NaN
# ..         ...        ...       ...       ...
# 115 2018-12-15  U34260565       NaN       NaN
# 116 2018-12-16  U34260565       NaN       NaN
# 117 2018-12-17  U34260565       NaN       NaN
# 118 2018-12-18  U34260565       NaN       NaN
# 119 2018-12-19  U34260565       NaN       NaN

# [120 rows x 4 columns]
```

To create this dataframe, "ParticipantExt.create_df()" is automatically called upon ParticipantExt initialization. A dataframe with customizable properties can also be generated after intialization: 

```python
import datetime

subject_1.create_df(days_cap=10, day_first=datetime.datetime(year=2018, month=8, day=24).date())
```

```python
#         Date           id   Anxiety      Mood
# 0 2018-08-24  U1684566141       NaN       NaN
# 1 2018-08-25  U1684566141       NaN  1.111111
# 2 2018-08-26  U1684566141       NaN       NaN
# 3 2018-08-27  U1684566141  1.714286       NaN
# 4 2018-08-28  U1684566141       NaN       NaN
# 5 2018-08-29  U1684566141  1.571429  1.111111
# 6 2018-08-30  U1684566141       NaN       NaN
# 7 2018-08-31  U1684566141       NaN       NaN
# 8 2018-09-01  U1684566141       NaN       NaN
# 9 2018-09-02  U1684566141       NaN       NaN
```

### StudyExt objects

If you have many participants that would like to group together as a cohort, you can do so with the StudyExt object. 

A StudyExt consists of one or many ParticipantExt objects. They are initialized with a list of valid LAMP ids, along with other (optional) parameters:

```python
test_cohort = lamp.StudyExt(subjects = ['U1234567', 'U33327158'])

for subject in test_cohort:
	print(subject.id)
	print(subject.df)
```

```python
# U1234567
#         Date         id      Mood   Anxiety  beta_a  beta_b
# 0 2020-02-27  U1234567  2.555556  2.428571     NaN     NaN

# U33327158
#         Date         id     Sleep  Psychosis   Anxiety  beta_a  beta_b
# 0 2020-02-27  U33327158  2.333333        1.4  1.428571     NaN     NaN
```

Many methods are shared between ParticipantExt and StudyExt objects. More details on StudyExt objects can be viewed in the "study_ext.py" file.

---

**Was there something we didn't cover, or need more help?**
Let us know by making a post in the [LAMP Community](https://community.lamp.digital/), or [contact us directly](mailto:team@digitalpsych.org). Thank you for your contribution! 🌟
*Page last updated on August 10th, 2020.*