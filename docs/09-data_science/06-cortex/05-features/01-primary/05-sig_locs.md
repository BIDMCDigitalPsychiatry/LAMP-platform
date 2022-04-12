# Significant Locations

computed from raw feature: `cortex.raw.gps`

#### Description

Significant locations computes the locations where a participant spends most of their time, ie locations that are "significant." These are determined either using k-means clustering or using a more naive method by rounding the GPS latitude and longitude to 3 decimal places and taking the most common locations. In addition to locations, the percent of the time spent at each significant location is computed.

#### Optional or required kwargs

- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `method`: (str, defaut: "mode", options: "mode", "k_means") method to use for finding significant locations. If a string other than "mode" or "k_means" is passed then method will be set to "mode".

For method == "k-means":
- `k_max`: (int, units: ms, defualt: 10) the maximum KMeans clusters to test.
- `eps`: (float, units: None, default: 1e-5) used in sklearn.cluster.DBSCAN, "the maximum distance between two samples for one to be considered as in the neighborhood of the other." (source: https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html).

For method == "mode":
- `max_clusters`: (int, units: None, default: -1) the maximum number of clusters to use. If set to -1, then min_cluster_size will be used to determine the number of clusters returned (see below). If there are less clusters than max_clusters then all clusters will be returned. 
- `min_cluster_size`: (float, units: None, default: 0.01) the minimum size of possible clusters as a percentage of the total number of points. (ex: if the total number of points is 100 and min_cluster_size is set to 0.2 then any clusters with more than 20 points will be used).
- `max_dist`: (float, units: m, default: 300) if clusters are less than max_dist away from one another, they will be merged into one cluster. To not merge clusters, set max_dist to 0. 

#### Data
- `start`: (int, units: ms) the start time.
- `end`: (int, units: ms) the end time.
- `latitude`: (float, units: degrees) the latitude of the center of the cluster.
- `longitude`: (float, units: degrees) the longitude of the center of the cluster.
- `rank`: (int, units: None) the index of the cluster. Note that clusters are ordered by prevelance (starting with 0 being home). 
- `radius`: (float, units: km) the mean distance of cluster points from the cluster center.
- `proportion`: (float, units: None) the proportion of the points in this cluster. Note that this proportion only includes points in clusters.
- `duration`: (int, units: ms) the time spent in each cluster location.

#### Example 0 - using method='mode' with min_cluster_size set to 0.01

```markdown
cortex.primary.significant_locations.significant_locations(id="U1234567890",
                                                           start=1607072400000,
                                                           end=cortex.now(),
                                                           max_clusters=-1,
                                                           min_cluster_size=0.01)
 ```
 Output:
 ```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'data': [
            {
              'start': 1607072400000,
              'end': 1612688400000,
              'latitude': 42.338,
              'longitude': -71.084,
              'rank': 0,
              'radius': 24.29582585958463,
              'proportion': 0.7428286613808599,
              'duration': 1278792817
            },
            {
              'start': 1607072400000,
              'end': 1612688400000,
              'latitude': 42.076,
              'longitude': -71.255,
              'rank': 1,
              'radius': 21.562489967625048,
              'proportion': 0.2313546220415891,
              'duration': 587856388
           },
           {
              'start': 1607072400000,
              'end': 1612688400000,
              'latitude': 42.337,
              'longitude': -71.091,
              'rank': 2,
              'radius': 28.948886421408247,
              'proportion': 0.025816716577551066,
              'duration': 39207942
           }
       ],
  'has_raw_data': 1,
}
```
#### Example 1 - using method='mode' with max_clusters set to 2
```markdown
cortex.primary.significant_locations.significant_locations(id="U1234567890",
                                                           start=1607072400000,
                                                           end=cortex.now(),
                                                           max_clusters=2,
                                                           min_cluster_size=0.01)
 ```
 Output:
 ```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'data': [
            {
              'start': 1607072400000,
              'end': 1612688400000,
              'latitude': 42.338,
              'longitude': -71.084,
              'rank': 0,
              'radius': 24.29582585958463,
              'proportion': 0.7652037614040124,
              'duration': 1218884313
            },
            {
              'start': 1607072400000,
              'end': 1612688400000,
              'latitude': 42.076,
              'longitude': -71.255,
              'rank': 1,
              'radius': 21.562489967625048,
              'proportion': 0.23479623859598767,
              'duration': 566147289
           }
       ],
  'has_raw_data': 1,
}
```

