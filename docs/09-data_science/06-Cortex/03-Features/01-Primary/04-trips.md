# Trips

computed from raw feature: cortex.raw.gps

#### Description

Computes trips from gps data. Trips are when a participant is traveling more than 10 kph. Any change in gps less than 10 kph or for more than 600 ms is considered stationary.

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.

#### Data

- `start: number`: (units: ms) the start time of a given trip.
- `end: number`: (units: ms) the end time of a given trip.
- `latitude: number`: (units: degrees) the latitude of the starting point of the trip.
- `longitude: number`: (units: degrees) the longitude of the starting point of the trip.
- `distance: number`: (units: km) the distance traveled on the trip.

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
          ]
}
```

