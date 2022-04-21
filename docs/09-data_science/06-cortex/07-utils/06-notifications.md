# Notifications

These functions provide code for sending email, slack, and push notifications (to participants or study personnel). In order to use them you must configure either a Slack webhook (for Slack) or push API key and push gateway (for device notifcations and email).
For slack, please refer to the instructions on creating a webhook [here](https://www.notion.so/digitalpsychiatry/Study-info-9f9855efc3e745209a636c6e9d85232c).

## `utils.notifications.push_email`
Send an email. Support email, push API key, and push gateway must be set for sending emails.

#### Args
- `email`: (str) the email to push the message to.
- `content`: (str) the content of the message. Subject and body should be split by a new line (ex: "email subject\nemail text").
- `push_api_key`: (str, default: None) the API key, will be pulled from the environment variable ('PUSH_API_KEY') if None.
- `push_gateway`: (str, default: None) the gateway, will be pulled from the environment variable ('PUSH_GATEWAY') if None.
- `support_email`: (str, default: None) the email to send from. This email will also be cc'd.
- `debug_mode`: (boolean, default: False) if set, notifications will be logged and not sent.

#### Example
```markdown
cortex.notifications.push_email('fakeemail0@lamp.com','Hello\nHi,<br><br>This is a test email. Have a great day.')
```

## `utils.notifications.send_push_notification`
Send a push notification to a participant. Push API key and push gateway must be set.

#### Args
- `device`: (str) the device to send the message to. This information can be found using `LAMP.analytics` (please see the example).
- `content`: (str) the content of the message. Subject and body should be split by a new line (ex: "email subject\nemail text").
- `push_api_key`: (str, default: None) the API key, will be pulled from the environment variable ('PUSH_API_KEY') if None.
- `push_gateway`: (str, default: None) the gateway, will be pulled from the environment variable ('PUSH_GATEWAY') if None.
- `expiry`: (int, units: ms, default: 86400000): how long before the notification expires.
- `debug_mode`: (boolean, default: False) if set, notifications will be logged and not sent.

#### Example
```markdown
analytics = LAMP.SensorEvent.all_by_participant(participant_id, origin="lamp.analytics")['data']
all_devices = [event['data'] for event in analytics if 'device_token' in event['data']]
if len(all_devices) > 0:
    device = f"{'apns' if all_devices[0]['device_type'] == 'iOS' else 'gcm'}:{all_devices[0]['device_token']}"
cortex.notifications.send_push_notification(device, 'Hello, this is a test notification. Have a great day.')
```

## `utils.notifications.slack`
Send a slack. Slack webhook must be set for sending slack messages.

#### Args
- `message` (str): the content of the message.
- 'slack_webhook`: (str, default: None) the slack webhook, will be pulled from the environment variable ('SLACK_WEBHOOK') if None.

#### Example
```markdown
cortex.notifications.slack('This is a test slack. Have a great day.')
```
