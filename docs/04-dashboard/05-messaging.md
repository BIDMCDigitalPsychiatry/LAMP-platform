---
sidebar_position: 5
sidebar_label: Messaging
title: "Messaging"
description: "Send messages to participants from the dashboard."
---

# Messaging

mindLAMP supports asynchronous messaging between clinicians/researchers and participants through a built-in chat feature.

## Prerequisites

Messaging is **optional** and must be enabled by the server administrator before clinicians and participants can access it.

**Before enabling messaging**, clinicians and administrators **must** ensure:

- Proper consent procedures are in place.
- Safety planning has been documented.
- Clear expectations are set around response times.
- Emergency procedures are established and communicated.

Consult your organization's legal department or Institutional Review Board (IRB) **before** communicating with participants through mindLAMP.

## Sending a Message

From the dashboard:

1. Navigate to the [Users tab](/dashboard/users-tab).
2. Click the **gear icon** on a participant card to open their [profile](/dashboard/users-tab#participant-profile).
3. Click the **floating message button** at the bottom right of the profile page.

![Floating message button for contacting a participant](./assets/users_profile_message.png)

Messages are organized as group chats. All care team members with access to the participant can see the full conversation history and participate.

## Participant View

Participants access messaging through their profile section in the app. They can read and send messages to their care team. See [Account & Messages](/app/profile-settings) for details on how participants view messages.

## Important Considerations

- Messaging is asynchronous — there is no expectation of real-time response.
- All messages are stored on the mindLAMP server.
- Establish clear guidelines for what constitutes an emergency and how emergencies should be handled (messaging is **not** appropriate for crisis situations).

:::note Project-specific extension
The [Safeguard](/projects/safeguard#messaging) deployment adds a dedicated **Message Coordinator** account role that scopes a staff user to participant messaging without the broader permissions of a research coordinator. This role is not part of standard mindLAMP installations.
:::
