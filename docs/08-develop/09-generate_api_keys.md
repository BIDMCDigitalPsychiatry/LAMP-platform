# Generating API Keys for the App Gateway

::: note

This documentation is for BIDMC Digital Psychiatry internal use only. 

:::

The mindLAMP apps for both iOS and Android enable two additional features beyond what is offered by simply logging into the dashboard and bookmarking the tab on the user's mobile device: 
1. sensor data collection, and
2. push notification scheduling for Activities.

However, sending a push notification from a LAMP server to a mobile device requires encrypted communication with official Apple and Google gateway servers (called [Apple Push Notification Service, or APNS](https://developer.apple.com/documentation/usernotifications/sending_push_notifications_using_command-line_tools), and [Google Firebase Cloud Messaging, or FCM](https://firebase.google.com/docs/cloud-messaging/send-message)). These gateways are only authorized to receive push notification requests from servers with an approved developer certificate (a file with the extention `.p8` or `.p12`) and developers must be granted access to this feature. 

Apple and Google both require BIDMC Digital Psychiatry to maintain records of approved IRB documents or clinical protocols (if not a research study) to allow external collaborators' LAMP servers to communicate with the native iOS and Android apps. This is because both apps are published under `John Torous`'s developer accounts. As a result, the LAMP Platform includes an **App Gateway** component (located at `app-gateway.lamp.digital`) that acts as an intermediary:
1. A patient logs in to the mindLAMP iOS app on a collaborator's LAMP server.
2. The collaborator's LAMP server schedules push notifications to be sent to the new iOS device registered.
3. At time of notification, the collaborator's LAMP server sends the notification to the **App Gateway** hosted by BIDMC. 
4. This notification request contains the collaborator's **unique API Key**. These API Keys should **NEVER** be shared with others.
5. The **App Gateway** verifies the included notification's API Key **but does NOT have access to the notification contents, to ensure privacy.**
6. If the API Key is valid, the **App Gateway** forwards the notification request to either Apple or Google servers automatically.
7. If the API Key is NOT valid, an error message is returned to the collaborator's LAMP server. 

The **App Gateway** supports multiple destinations, and each has a unique `device_token` prefix:
1. Apple Push Notification Service (iOS/macOS devices; `apns:<device_token>`)
2. Google Firebase Cloud Messaging (Android devices; `gcm:<device_token>`)
3. Amazon Web Services Simple Email Service (Email; `mailto:<email_address>`)
4. Amazon Web Services Simple Notification Service (SMS; `sms:<phone_number>`)
5. Slack Webhooks (Slack channels; `slack:<webhook_id>`)

External collaborators are **NOT PERMITTED** to use `mailto:`, `sms:`, or `slack:` destinations. [More information on **sending messages through the App Gateway from the command line** can be found here.](https://docs.lamp.digital/develop/app_gateway) To allow external collaborators to send push notifications to users' iOS and Android devices, the following steps must be completed: 
1. collaborator organization must complete the consortium enrollment form
2. collaborator organization must make the request for an API Key **on the community forum** (emailed requests **ARE NOT PERMITTED**)
3. a BIDMC team member must save this information to the `Projects → LAMP Platform → Documents → People Pipeline → Consortium Members` database in the internal team Notion.
4. the BIDMC team member must generate a new API Key in the terminal using this command: `openssl rand -base64 12`
     1. An API Key is actually just a randomly generated string to uniquely identify an external collaborator, and contains no other information.
     2. Should an API Key need to be replaced, a new one can be generated and replaced in this database (but all previously generated keys must be recorded in the `Notes` field).
5. the BIDMC team member must add this API Key to the App Gateway service in the internal Docker console (located at `console.lamp.digital`).
     1. Once logged in, locate `mindLAMP → Stacks → LAMP → Editor (tab)` and scroll down to find `app-gateway`. 
     2. Edit this YAML configuration under `environment → API_KEYS`: add the new API Key at the end of this list, separated by a comma. (**DO NOT** include a trailing comma.)
     3. Press the `Update the Stack` button.
7. the BIDMC team member should respond to the collaborator organization **via private DM on the forum** with this new API Key. 
8. the collaborator organization fills in the API Key in their LAMP Platform configuration ([see here](https://docs.lamp.digital/deploy/deploying) for more info)

::: info 

Should an API Key be revoked, follow the above procedures to remove the API Key from the Docker console and notify the external collaborator organization. 

::: 
