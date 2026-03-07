---
sidebar_position: 8
sidebar_label: Analytics
title: "Analytics"
---

# Analytics (`lamp.analytics`)

Records in-app events such as page navigation, logins, and notification receipts.

## Configuration

- **SensorSpec:** `lamp.analytics`
- **Sampling:** Continuous
- **Platform:** iOS, Android, Web

## Usage

Analytics events are generated automatically as participants use the app. No additional configuration is needed.

## Data

The data structure varies by event type:

### Login Event

| Field | Type | Description |
|-------|------|-------------|
| `action` | string | `"login"` |
| `device_token` | string | Push notification device token |
| `device_type` | string | `"Android"` or `"iOS"` |
| `user_agent` | string | App version, OS version, device model |

### Page Open Event

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | `"open_page"` |
| `page` | string | Page name (e.g., `"learn"`, `"assess"`, `"manage"`, `"portal"`) |
| `activity` | string or null | Activity identifier, if applicable |

### Notification Event

| Field | Type | Description |
|-------|------|-------------|
| `action` | string | `"notification"` |
| `device_type` | string | `"Android"` or `"iOS"` |
| `content` | object | Notification content and parameters |
| `actions` | array | User actions taken on the notification |

### Cortex Features

[`analytics`](/developer/cortex/features/raw-features) (raw) → [`app_time`](/developer/cortex/features/secondary-features#device-usage) (secondary)

The `app_time` feature accepts a `category` parameter to filter by app category.

View in [Portal](/app/app-tabs/portal) | [Python SDK](/developer/api-sdks/python-sdk) | [API Reference](/sensors-data/reference)
