# Running Cortex

The cortex.run() function is the easiest way to run multiple cortex features on multiple participants in a single function call.

#### Optional or required kwargs

- `id_or_set`: (list of strings) a list of researchers, studies, and participants that will be expanded into a list of all participants in the set.
- `features`: (list of strings) a list of the names of raw, primary, or secondary features to run.
- `feature_params`: (dict, default={}) a dictionary holding any other parameters to pass to the feature functions.
- `start`: (int, units: ms, default=None) the start time.
- `end`: (int, units: ms, default=None) the end time.
    - Note: If start or end is set to None, the first / last timestamp with raw data will be determined. If resolution is additionally set to the number of miliseconds in a day then these timestamps will be shifted to 9am UTC.
- `resolution`: (int, units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.
- `path_to_save`: (string, default: "") a filepath to a directory for the features. Folders will be created for each feature and participant data will be saved in individual pickle files.
- `run_part_and_features`: (string, default: "") a path to a csv file with "participant" and "feature" columns to run only certain features for certain participants.

#### Data

If `path_to_save` is not set, a dictionary with keys for each feature will be created. Each feature will have a datafream with columns "id" for the participant id, and then any parameters in the data.

#### Example

```markdown
cortex.run(id="dhfiej29384",
           features=['screen_duration', 'data_quality'],
           feature_params={'screen_duration': {}, 'data_quality': {"feature":"gps", "bin_size":3600000}},
           start=1638248400000,
           end=1638248400000 + 7 * MS_IN_DAY)
```
Output:
```markdown
{'screen_duration':             id           timestamp       value
 0  U7869554142 2021-11-30 05:00:00  25588172.0
 1  U7869554142 2021-12-01 05:00:00  15561390.0
 2  U7869554142 2021-12-02 05:00:00  25896531.0
 3  U7869554142 2021-12-03 05:00:00  33756622.0
 4  U7869554142 2021-12-04 05:00:00  16850746.0
 5  U7869554142 2021-12-05 05:00:00  19710799.0
 0  U1949510612 2021-11-30 05:00:00         0.0
 1  U1949510612 2021-12-01 05:00:00    184235.0
 2  U1949510612 2021-12-02 05:00:00         0.0
 3  U1949510612 2021-12-03 05:00:00  15452842.0
 4  U1949510612 2021-12-04 05:00:00  13476068.0
 5  U1949510612 2021-12-05 05:00:00  31316368.0,
 'data_quality':             id           timestamp     value
 0  U7869554142 2021-11-30 05:00:00  0.791667
 1  U7869554142 2021-12-01 05:00:00  0.958333
 2  U7869554142 2021-12-02 05:00:00  0.916667
 3  U7869554142 2021-12-03 05:00:00  1.000000
 4  U7869554142 2021-12-04 05:00:00  0.958333
 5  U7869554142 2021-12-05 05:00:00  0.708333
 0  U1949510612 2021-11-30 05:00:00  0.041667
 1  U1949510612 2021-12-01 05:00:00  0.041667
 2  U1949510612 2021-12-02 05:00:00  0.000000
 3  U1949510612 2021-12-03 05:00:00  0.416667
 4  U1949510612 2021-12-04 05:00:00  0.750000
 5  U1949510612 2021-12-05 05:00:00  1.000000}
```
