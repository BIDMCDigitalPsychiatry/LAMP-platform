# Trips

computed from raw feature: `cortex.raw.gps`

#### Description

Computes trips from GPS data. Trips are when a participant is traveling more than 10 kph. Any change in gps less than 10 kph or over more than 600 ms is considered stationary.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.

#### Data

- `start`: (int, units: ms) the start time of a given trip.
- `end`: (int, units: ms) the end time of a given trip.
- `latitude`: (float, units: degrees) the latitude of the starting point of the trip.
- `longitude`: (float, units: degrees) the longitude of the starting point of the trip.
- `distance`: (float, units: km) the distance traveled on the trip.

#### Example

```markdown
cortex.primary.trips.trips(id="U1234567890", start=0, end=cortex.now())
```
Output:
```markdown
{
  'timestamp': 0,
  'duration': 1627067480000,
  'data': [
           {'start': 1607094903526, 'end': 1607094905476, 'latitude': 42.33786999329302, 'longitude': -71.0842230494398, 'distance': 0.008896610358911157},
           {'start': 1607094907376, 'end': 1607094933999, 'latitude': 42.33787296688118, 'longitude': -71.08414299583944, 'distance': 0.015118418131814458},
                 .
                 .
                 .
           {'start': 1607094950000, 'end': 1607094950000, 'latitude': 42.3379491204939, 'longitude': -71.08427063527692, 'distance': 0.0028039384631051243}
          ],
  'has_raw_data': 1,
}
```

