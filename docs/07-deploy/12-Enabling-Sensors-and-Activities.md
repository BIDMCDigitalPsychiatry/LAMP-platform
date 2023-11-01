## Configuring your server to add Sensors and Activities

By default, you will not be able to add any sensors or activities to your server. 
At first, when you try to add activities and sensors in the dashboard, none are available in the dropdown.
This is because not every mindLAMP deployment needs all of the sensors or activities that are available.
Instead, you must select each sensor or activity type you will need.
This process is called "adding an ActivitySpec" or "adding a SensorSpec".

Steps to add a SensorSpec (or ActivitySpec):
1. Navigate to https://docs.lamp.digital/api/create-a-sensor-spec (https://docs.lamp.digital/api/create-an-activity-spec)
2. Click the "authorize" button in the top right corner
3. Enter your server's address, your server's admin username, and your server's admin password
4. Figure out the SensorSpec (ActivitySpec) of the sensor (activity) you would like to enable.
To see a full list of SensorSpec, check here: https://docs.lamp.digital/data_science/data_types/sensor_types.
To see a full list of ActivitySpec names, check here: https://docs.lamp.digital/data_science/data_types/activity_types.
5. Scroll down to the "Body" text box. Replace the field with `{"name":<sensorspec>}`. For example,
to add the "accelerometer" sensor, use: `{"name":"lamp.accelerometer"}`
6. Scroll down to the tect box that says "api.lamp.digital". Replace this tect with your server's address.
7. Select "execute". Check back in the dashboard for an updated dropdown list!
