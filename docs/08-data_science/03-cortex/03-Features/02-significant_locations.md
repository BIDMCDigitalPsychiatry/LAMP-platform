### Significant Locations (Primary Feature)

computed from raw feature: cortex.raw.gps

#### Description

Significant locations computes the locations where a participant spends most of their time, ie locations that are "significant." These are determined either using k-means clustering or using a more naive method by rounding the gps points to 3 decimal places and taking the most common locations. In addition to locations, the percent of the time spent at each significant location is computed.

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `method: string`: (defaut: "mode", options: "mode", "k_means") which method to use for finding significant locations. If a string other than "mode" or "k_means" is passed then method will be set to "mode".

For method="k-means":
- `k_max: number`: (units: ms, defualt: 10) the maximum KMeans clusters to test.
- `eps: number`: (units: None, default: 1e-5) used in sklearn.cluster.DBSCAN, "the maximum distance between two samples for one to be considered as in the neighborhood of the other." (source: https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html).
For method="mode":
- `max_clusters: number`: (units: None, default: -1) the maximum number of clusters to use. If set to -1, then TODO
- `min_cluster_size: number`: (units: None, default: 0.01) TODO 
- `max_dist: number`: (units: None, default: 300) TODO

#### Data

#### Example

```markdown
# **cortex.primary.**
{
TODO
}
```

