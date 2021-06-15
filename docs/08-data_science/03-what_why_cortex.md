# What is Cortex?

The Cortex data analysis and machine learning toolkit is part of the LAMP Platform, enabling researchers and clinicians with a variety of backgrounds have use pre-build tools to analyze their data and build analysis pipelines. 

- It integrates tightly across the platform to provide a unified processing pipeline to convert patient or participant data into useful features that provide valuable clinical and research insight.
- It offers robust support for artificial intelligence, behavioral feature extraction, interactive visualizations, generation of targeted and automated adaptive interventions, and high-performance data processing through parallelization and vectorization techniques.
- It obviates the need for individual analyses tied to custom code for specific sensor types across various devices. It also provides access to processed Apple HealthKit and Google Fit sensor data, such as activity recognition or heart rate variability.
- It provides a companion IDE based on JupyterLab and VSCode that abstracts away login and security issues by securely injecting an authenticated connection to the server into Cortex and resulting analysis notebooks.

# **Why Cortex?**

The unique data structure of the LAMP platform allows all users to analyze their data without the need for a specific data science team. Cortex makes meaningful analysis easy and accessible with only a few lines of code.

- *Robust data streams — Cortex leverages the wide variety of data collected in the LAMP platform to provide researchers, clinicians, and patients numerous features that characterize users’ moment-by-moment physiology, behaviors, and well-being. These data streams are derived from data reported within the app as well as data sensed passively by user devices.*
- *Flexible — Cortex allows you to easily customize the processing of your data. For example, whether you want to view your data at hourly, daily, or weekly intervals, Cortex will automatically parse your data into the timeframe of your choice. While the pipeline will attempt to generate the maximum number of features given the available data, you can easily remove unwanted features from your dataset post-processing, or add new data streams to your dataset using your own scripts.*
- *Scalable — The LAMP platform was designed with large datasets in mind. Handling data across large studies is often a challenge. Cortex can process any amount of data, without requiring extra code.*
- *Interoperable — In Cortex, raw data from the mindLAMP app is transformed into and stored as dataframes in Pandas, a popular package that provides a robust set of tools for analyzing data. For example, after processing is done and your featurized data is ready for use as a dataframe, you can perform correlational or time-series analysis with just a few lines of code. If you would like to perform analysis using another statistical package, such as R or SPSS, you can easily export the processed data in CSV/XLS format and import it in the exogenous environment. You can also run other team’s algorithms or see how your code procedures result compared to others.*
