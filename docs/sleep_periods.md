---
title: Sleep Periods
slug: sleep-periods
---


### *Dependencies*

*cortex.raw.accelerometer* 

### *Parameters*

*id* (str): user's LAMP id

*start* (int): timestamp (in *milliseconds*)

*end* (int): timestamp (in *milliseconds*)

### *Output*

- *sleep_periods* (cortex.primary)
    - timestamp (int), in *ms*
    - duration (int), in *ms*
    - data (list)
        - start (*gps*)
        - end (*gps*)
        - distance (float), in *kilometers*

### *Used in* 

*cortex.secondary.sleep_duration* 

## **Example**
