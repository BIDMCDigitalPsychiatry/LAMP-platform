## Secondary Feature Overview

Secondary features are dervived from primary features, raw data, or a combination of both. They are designed to produce a single value per time window (i.e. time spent at home per day, etc). Thus, the data will be a list of dictionaries with keys "timestamp" and "value."
- Values for every single timestamp from start to end by resolution will be computed.
- Periods with no raw data will return None.
