# Configuring your server to add Sensors and Activities

By default, you will not be able to add any sensors or activities to your server. 
At first, when you try to add activities and sensors in the dashboard, none are available in the dropdown.
This is because not every mindLAMP deployment needs all of the sensors or activities that are available.
Instead, you must select each sensor or activity type you will need.
This process is called "adding an ActivitySpec" or "adding a SensorSpec".

Steps to add a SensorSpec (or ActivitySpec):
1. Navigate to https://docs.lamp.digital/api/create-a-sensor-spec (https://docs.lamp.digital/api/create-an-activity-spec)
2. Click the "authorize" button in the top right corner
3. Enter your server's address, your server's admin username, and your server's admin password
4. Figure out the SensorSpec name (or ActivitySpec) of the sensor (activity) you would like to enable.
To see a full list of SensorSpec names, check here: https://docs.lamp.digital/data_science/data_types/sensor_types.
To see a full list of ActivitySpec names, check here: https://docs.lamp.digital/data_science/data_types/activity_types.
For example, you will see that the SensorSpec for the accelerometer sensor is called "lamp.accelerometer".
6. Scroll down to the "Body" text box. Replace the field with `{"name":<sensorspec>}`. For example,
to add the "accelerometer" sensor, use: `{"name":"lamp.accelerometer"}`
7. Scroll down to the text box that says "api.lamp.digital". Replace this text with your server's address.
8. Select "execute". Check back in the dashboard for an updated dropdown list!

## Automated Script

```python setup.py
import LAMP

ACTIVITY_SPEC_LIST = [
	"lamp.3d_figure_copy",
	"lamp.balloon_risk",
	"lamp.breathe",
	"lamp.cats_and_dogs",
	"lamp.cats_and_dogs_new",
	"lamp.dbt_diary_card",
	"lamp.digit_span",
	"lamp.jewels_a",
	"lamp.jewels_b",
	"lamp.journal",
	"lamp.nback",
	"lamp.nback_new",
	"lamp.pop_the_bubbles",
	"lamp.scratch_image",
	"lamp.serial7s",
	"lamp.simple_memory",
	"lamp.spatial_span",
	"lamp.spin_wheel",
	"lamp.survey",
	"lamp.temporal_order",
	"lamp.tips",
	"lamp.trails_b",
	"lamp.trails_b_dot_touch",
	"lamp.trails_b_new",
	"lamp.visual_association",
	"lamp.recording"
]

SENSOR_SPEC_LIST = [
	"lamp.accelerometer",
	"lamp.accelerometer.motion",
	"lamp.analytics",
	"lamp.blood_pressure",
	"lamp.bluetooth",
	"lamp.calls",
	"lamp.device_state",
	"lamp.distance",
	"lamp.flights",
	"lamp.gps",
	"lamp.gps.contextual",
	"lamp.gyroscope",
	"lamp.heart_rate",
	"lamp.height",
	"lamp.magnetometer",
	"lamp.respiratory_rate",
	"lamp.segment",
	"lamp.sleep",
	"lamp.sms",
	"lamp.steps",
	"lamp.weight",
	"lamp.wifi",
]

print("[LAMP Platform] ActivitySpec & SensorSpec Initialization Tool")
print("You must enter your username, password, and server address to continue installation.")
print("Username: admin [CANNOT BE CHANGED]")
LAMP.connect("admin", input("Password: "), input("Server Address: "))

for spec in ACTIVITY_SPEC_LIST:
	print(f"Creating ActivitySpec '{spec}'...")
	LAMP.ActivitySpec.create({ "name": spec })
for spec in SENSOR_SPEC_LIST:
	print(f"Creating SensorSpec '{spec}'...")
	LAMP.SensorSpec.create({ "name": spec })
```
