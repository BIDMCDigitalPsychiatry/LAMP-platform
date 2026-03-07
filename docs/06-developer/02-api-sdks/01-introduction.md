---
sidebar_position: 1
sidebar_label: Introduction
title: "API Introduction"
---

# API Introduction

The LAMP API provides programmatic access to all data and configuration in the mindLAMP platform. The API follows a hierarchical object model and uses HTTP Basic Auth for all requests.

## Object Model

The LAMP Platform organizes data in a hierarchy:

```
Server Administrator
  └── Researcher / Clinician
        └── Study / Group
              ├── Activity → ActivitySpec (schema)
              ├── Sensor → SensorSpec (schema)
              └── Participant
                    ├── ActivityEvent (time-series)
                    └── SensorEvent (time-series)
```

- **Researchers/Clinicians** manage studies and participants.
- **Studies/Groups** contain activities, sensors, and participants.
- **ActivitySpecs and SensorSpecs** are global schemas defining the structure of activities and sensors.
- **Events** are time-series data points owned by a participant and linked to an activity or sensor.
- **Tags** are arbitrary key-value metadata that can be attached to any object.

## Authentication

All API requests use HTTP Basic Auth. The scope of accessible data depends on the credential level:

- **Server Administrator** — Access to everything.
- **Researcher/Clinician** — Access to their own groups and participants.
- **Participant** — Access to their own data only.

## API Reference

The full interactive API reference is available at [/api](/api), generated from the OpenAPI specification. You can test API calls directly from the documentation.

## Data Format

All events follow a consistent format with a timestamp, a sensor/activity identifier, and a data payload. See [Data Types Reference](/sensors-data/reference) for schemas.
