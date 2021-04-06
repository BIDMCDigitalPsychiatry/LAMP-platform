---
title: Trips
slug: trips
---

Trips in *Cortex* are segments of continuous user movement. They are determined using gps data sampled from a user's device. 

### *Dependencies*

*gps* (cortex.raw)

### *Parameters*

*id* (str): user's LAMP id

*start* (int): timestamp (in *milliseconds*)

*end* (int): timestamp (in *milliseconds*)

*SPEED_THRESHOLD* (float), default=1.0: The speed value (in *kilometers/hour*) used to determine whether the user is in a *non-stationary* or *stationary* state at a given point. Speed is calculated between every pair of adjacent *gps* readings. If, for an adjacent reading pair (*gps[t]*, *gps[t+1]*), the speed is greater than or equal to *SPEED_THRESHOLD*, the user is said to be *non-stationary* at *gps[t]*; else, *stationary*. 

*ELAPSED_TIME_THRESHOLD* (float), default=900000: The maximum allowable elapsed time (in *milliseconds*) between adjacent *gps* readings such that the two readings can be considered in the same trip. If elapsed time is greater than *ELAPSED_TIME_THRESHOLD*, any ongoing trip is discontinued and no new trip is started. 

### *Output*

- *trips* (cortex.primary)
    - timestamp (int), in *ms*
    - duration (int), in *ms*
    - data (list)
        - start (*gps*)
        - end (*gps*)
        - distance (float), in *kilometers*

### *Used in* 

*trip_distance* (cortex.secondary)

*trip_duration* (cortex.secondary)

## **Example**
