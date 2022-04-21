# Notifications

These functions provide code for sending email, slack, and push notifications (to participants or study personel). In order to use them you must configure either a slack webhook (for slack) or push API key and push gateway (for device notifcations and email).
For slack, please refer to the instructions on creating a webhook here: https://www.notion.so/digitalpsychiatry/Study-info-9f9855efc3e745209a636c6e9d85232c

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
import cortex
cortex.notifications.push_email('fakeemail0@lamp.com','Hello\nHi,<br><br>This is a test email. Have a great day.')
```
