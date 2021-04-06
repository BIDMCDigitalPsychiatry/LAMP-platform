---
title: Screen Active
slug: screen-active
---

Screen active in *Cortex* lists bouts of active screen use for a given LAMP user. 

### *Dependencies*

*screen_state* (cortex.raw)

### *Parameters*

*id* (str): user's LAMP id

*start* (int): timestamp (in *milliseconds*)

*end* (int): timestamp (in *milliseconds*)


### *Output*

- *screen_active* (cortex.primary)

    - timestamp (int), in *ms*
    - duration (int), in *ms*
    - data (list)
        - start (int)
        - end (int)
        - distance (int), or *start* - *end**

### *Used in* 

*screen_duration* (cortex.secondary)

## **Example**
