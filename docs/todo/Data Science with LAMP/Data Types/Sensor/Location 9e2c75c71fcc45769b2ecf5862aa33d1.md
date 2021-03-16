# Location

SensorSpec: lamp.gps

### Description

The location sensor records the device's current GPS coordinates. Depending on the device operating system and device battery level, the source of the data from this sensor may alternate between GPS antennae (high accuracy), cellular tower triangulation (moderate accuracy), WiFi triangulation (poor accuracy), or a combination of these. 

### Settings

- `frequency: number`: (units: Hz) the required location measurement frequency; the sensor will make a best effort to match the requested `frequency` but no guarantees are made by the device hardware or operating system.

### Data

- `latitude: number`: (units: degrees) the coordinate's latitude.
- `longitude: number`: (units: degrees) the coordinate's longitude.
- `altitude: number`: (units: meters) the coordinate's altitude, relative to sea level.
- `accuracy: number`:  (units: meters) the coordinate's estimated accuracy representing the radius of a circle formed around the reported latitude/longitude pair, [for which there is **AT LEAST** a 68% probability that the true coordinate is contained within.](https://en.wikipedia.org/wiki/Circular_error_probable)
    - `0.0`: no accuracy could be determined.

*Unsupported event properties:* `bearing` *and* `speed`*.*

### Example

```markdown
# **LAMP.SensorEvent.all_by_participant("U1234567890", "lamp.gps")**
{
  "timestamp": 1234567890,
  "sensor": "lamp.gps",
  "data": {
    "latitude": 80.4827,
    "longitude": 46.28344,
    "altitude": 12.12455,
    "accuracy": 48
  }
}
```