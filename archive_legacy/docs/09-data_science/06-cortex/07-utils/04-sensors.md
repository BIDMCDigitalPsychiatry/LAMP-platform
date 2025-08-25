# Sensor functions

## `utils.useful_functions.delete_sensors`
Remove all sensors from a participant to stop data collection. 

#### Args

- `part_id`: (string) the participant id.

#### Example

```markdown
utils.useful_functions.delete_sensors("U1234567890")
```


## `utils.useful_functions.add_sensor`
A wrapper for the Sensor.create function.

#### Args

- `study_id`: (string) the study ID.
- `spec`: (string) the spec of the sensor (ex: "lamp.gps").
- `name`: (string) what to call the sensor (shown on the dashboard).

#### Example

```markdown
utils.useful_functions.add_sensor("U1234567890", "lamp.gps", "GPS sensor")
```
