---
title: Cortex
slug: cortex
---

## **What is Cortex?**

The Division of Digital Psychiatry has developed a data analysis pipeline called Cortex so that researchers and clinicians with a variety of backgrounds have the tools to analyze their data. Cortex is an analysis tool that automatically turns patient or participant data into useful features that provide valuable insight to clinicians and researchers.

## **Why Cortex?**

The unique data structure of LAMP data allows all sites that are using the LAMP platform to analyze their data without the need for a specific data science team. Cortex makes meaningful analysis easy and accessible with only a few lines of code.

- *Robust features — Cortex leverages the wide variety of data collected in the LAMP platform to provide researchers, clinicians, and patients numerous features that characterize users’ moment-by-moment physiology, behaviors, and well-being. These features are derived from data reported within the app as well as data sensed passively by user devices.*
- *Flexible — Cortex allows you to easily customize the processing of your data. For example, whether you want to view your data at hourly, daily, or weekly intervals, Cortex will automatically parse your data into the timeframe of your choice. While the pipeline will attempt to generate the maximum number of features given the available data, you can easily remove unwanted features from your dataset post-processing, or add new features to your dataset using your own scripts.*
- *Scalable — The LAMP platform was designed with large datasets in mind. Handling data across large studies is often a challenge. Cortex can process any amount of data, without requiring extra code.*
- *Interoperable — In Cortex, raw data from the LAMP app is transformed into and stored as dataframes in Pandas, a popular package that provides a robust set of tools for analyzing data. For example, after processing is done and your featurized data is ready for use as a dataframe, you can perform correlational or time-series analysis with just a few lines of code. If you would like to perform analysis using another statistical package, such as R or SPSS, you can easily export the processed data in CSV/XLS format and import it in the exogenous environment. You can also run other team’s algorithms or see how your code procedures result compared to others.*

## **Examples of Algorithms**

*Entropy*: The variability of the time a participant spent at significant locations (i.e. clusters) determined by their GPS data.

*Dynamic Time Warping (DTW)*: An algorithm for measuring similarity between two series of GPS points, which may vary in length and timing. Moreover, the DTW algorithm provides a score that measures the change in a participant’s location in a convenient way.

### *Sleep Suite*

Cortex provides daily estimated sleep duration for users, derived from sensor data. Estimates are customized to each user’s individual behavior, as Cortex finds their most common sleep window. The sleep estimation method is highly reliant on accelerometer data in particular, so users must have data from this sensor in order for Cortex to provide an accurate estimate. From this sensor data Cortex also provides estimates for time spent in active and sedentary states.

While sleep duration estimates are automatically processed and stored in the main dataframe, you can also view the estimates in the user dashboard. Graphs are plotted for the user’s last ten days of data and updated daily. You can download

### *Mobility Suite*

Cortex provides various features characterizing a user’s mobility in a given time window. Unlike the sleep estimates, the mobility suite can be used at any time scale, whether that is two minutes, hours, days, or months. Mobility features rely on GPS sensor data, so users must have data from this sensor in order for processing to successfully occur.

Mobility features belong to one of two categories: *trips* and *significant locations*. *Trips* provide information on discrete movement events that a user undergoes—e.g. commuting to work or going to the grocery store. Features included in this category are trip duration, distance and count. *Significant locations* provide information on places that users commonly visit. The coordinates of these locations is provided as well as the amount and fragmentation of time spent at each one, such as hometime location entropy, respectively.

### *Activity Suite*

Cortex provides activity segmentation derived from a user’s accelerometer and gyroscope sensor data. The segmentation involves 6 different activity classes: *Walking*, *Jogging*, *Walking Upstairs*, *Walking Downstairs*, *Sitting*, and *Standing*. Using labeled activity data, we are able to train a model to predict the activity a user is performing. Please note that this model does not return 100% accuracy - Cortex will never know the “ground truth” (i.e. the actual activity a user is performing). Moreover, for a large sample of points, we can provide a rough estimate of the amount of time a user spends performing each activity.
