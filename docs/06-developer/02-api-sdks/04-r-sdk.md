---
sidebar_position: 4
sidebar_label: R SDK
title: "R SDK (Deprecated)"
---

# R SDK (Deprecated)

The R SDK for LAMP is **deprecated** and no longer actively maintained.

## Alternatives

- **Python SDK** — The recommended SDK for data analysis. Install with `pip install LAMP-core`. R users can call Python from R using the [reticulate](https://rstudio.github.io/reticulate/) package.
- **REST API** — Use R's `httr` package to make direct API calls.

## Using the REST API from R

```r
library(httr)
library(jsonlite)

# Authenticate and query
response <- GET(
  "https://api.lamp.digital/participant/<id>/sensor_event",
  authenticate("email@address.com", "password"),
  query = list(origin = "lamp.gps")
)

data <- fromJSON(content(response, "text"))
```

## Using Python via reticulate

```r
library(reticulate)
LAMP <- import("LAMP")
LAMP$connect("email@address.com", "password", "api.lamp.digital")

events <- LAMP$SensorEvent$all_by_participant(participant_id, origin="lamp.gps")
```
