# Cortex Quick Start Guide

## Installing Cortex

You will need Python 3.4+ and `pip` installed in order to use Cortex. 
  - You may need root permissions, using `sudo`.
  - Alternatively, to install locally, use `pip --user`.
  - If `pip` is not recognized as a command, use `python3 -m pip`.

If you meet the prerequisites, install Cortex:

```sh
pip install lamp-cortex
```

If you do not have your environment variables set up (see Advanced section below), you will need to perform the initial server credentials configuraton below:


```python
import os
os.environ['LAMP_ACCESS_KEY'] = 'YOUR_EMAIL_ADDRESS'
os.environ['LAMP_SECRET_KEY'] = 'YOUR_PASSWORD'
os.environ['LAMP_SERVER_ADDRESS'] = 'YOUR_SERVER_ADDRESS'
```

## Using Cortex - High Level

```python
cortex.run('YOUR_RESEARCHER_ID', ['hometime'], start=0, end=cortex.now())
```
parameter 0: A string containing researcher, study, or single participant ID. (OR) A list containing multiple participant IDs.

parameter 1: A list containing strings matching Cortex feature functions to run

To see the list of features, call: ```cortex.all_features()```

This outputs a list of functions; to see names only, use: ```[x.__name__ for x in cortex.all_features()]```

This will provide the entire list of Cortex feature functions that can be used in the 2nd parameter of the cortex.run() function.
