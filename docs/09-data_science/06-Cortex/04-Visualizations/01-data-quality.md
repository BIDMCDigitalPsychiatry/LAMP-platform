# Data Quality

## Why care about passive data?

- It is collected continuously, in the background.
- It can be used to help understand behaviors.
- Correlations with survey data can provide interesting insights. 

Missing data is problematic because it will affect the validity of passive features. There are multiple reasons you could have low data collection including:
- Permissions not set properly
- Low battery
- App has not been used in a while
- Remote area (for GPS)
- Phone not in use (OS turns off data collection)

As such, it is important to monitor data to ensure that you have enough data to create good quality features. If you have participants with low data, you can follow up and try to resolve the issue. We have created visualizations that can be attached to your Data Portal on the Dashboard to provide a summary of your participant's data. These include:

### 1) Activity counts over the last week:

[]("../assets/activities_qual_viz.png" | width=700)

### 2) A measure of screen, GPS, and accelerometer quality over the past week:
The graph has tool tips. If you hover over a colored block in the graph it will tell you the computed data frequency (percentage of hours with data) as well as any days where the participant had no data.

<img src="../assets/tags_qual_viz.png" width="900"/>

### 3) Average screen time, steps, and home time over the past week, as a sanity check:

<img src="../assets/hometime_qual_viz.png" width="300"/> <img src="../assets/screen_dur_qual_viz.png" width="300"/> <img src="../assets/steps_qual_viz.png" width="300"/> 

To generate these graphs, you can either call a function from Cortex, or download the source code from Github and run a bash script.

To use the Cortex function, make sure that Cortex is installed. Then use the following code (substituting "researcher_id" with your own ID):
```
import cortex
cortex.visualizations.data_quality.data_quality(researcher_id)
```

To run the bash script, first clone the cortex repository from source:
```
git clone https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex.git
```
Then from inside the LAMP-cortex folder run the bash script (substituting "researcher_id" with your own ID):
```
./cortex/visualizations/run_data_quality.sh "researcher_id"
```

### Where are the graphs I've generated?
Graphs are attached to the Data Portal. To Navigate to the Data Portal, go to the Dashboard and click "Data Portal" on the left hand side:

<img src="../assets/data_portal_viz0.png" width="700"/>

Search for and select your researcher. Then toggle the button next to "Analyze participant data" to see the researcher graphs.

<img src="../assets/data_portal_viz1.png" width="700"/>

Here, under graphs.data_quality, you should see the three graphs shown above: activity counts, passive features, and quality tags (along with any others you may have created). You can click on the buttons to view each graph.

<img src="../assets/data_portal_viz2.png" width="700"/>

For more information, please go to the Data Portal section of the documentation.
