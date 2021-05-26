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

Methods native to the LAMP API can now be called to pull data from the platform.

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

The code below will make CSV files of all the 'lamp.gps.contextual' sensor events for all participants under a given researcher id:

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
