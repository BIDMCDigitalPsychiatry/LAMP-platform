---
slug: "/dashboard/users-tab"
sidebar_position: 1
sidebar_label: Users Tab
title: "Users Tab"
description: "Create and manage participant accounts, view individual data, and monitor collection status."
---

# Users Tab

The Users tab displays all participants across all groups under the logged-in researcher account. It is the primary interface for managing participants and monitoring their status.

![The Users tab showing participant cards with data quality indicators, search bar, filter, and + Add button](../assets/dashboard_overview.png)

## Participant Cards

Each participant is displayed as a card with the following information:

![A single participant card showing name, group, data collection buttons, and action icons](../assets/users_card_icons.png)

### Name and Alias

Each card shows a de-identified identifier (typically starting with "U" followed by random digits). Click the **pencil icon** next to the name to add or change an alias. Aliases are only visible to the researcher/clinician — not to the participant or in exported data.

![Editing a participant alias showing the de-identified ID with an editable alias field](../assets/users_rename_alias.png)

### Data Collection Status

Each card has two color-coded buttons — **Last Passive** and **Last Active** — that indicate data recency at a glance:

- **Green** — Data collected within the last 2 days.
- **Yellow** — Data collected within the last week.
- **Red** — Data collected within the last month.
- **Gray** — No data collected in over 30 days, or none has ever been collected.

Hover over **Last Active** to see the exact login timestamp, device model, and app version.

![Last Active tooltip showing timestamp, device, and app version details](../assets/users_last_active_tooltip.png)

Hover over **Last Passive** to see which sensors last reported and how recently.

![Last Passive tooltip showing GPS and Accelerometer collection times](../assets/users_last_passive_tooltip.png)

### Group

The group the participant belongs to is displayed on the card.

## Filtering and Searching

Use the search bar to find specific participants. Use the **Filter Results** dropdown to reveal group bubbles, then click a group to filter participants by group.

![Filter Results dropdown with group bubbles showing group names and participant counts](../assets/users_filter_search.png)

## Per-Participant Actions

Each participant card has three icon buttons:

- **Key icon** — [Manage credentials](/dashboard/credentials) (username and password).
- **Gear icon** — Open the [participant profile](#participant-profile).
- **Arrow icon** — Navigate to the participant's data view.

Select a participant by checking the box next to their name to reveal the **Delete** action, which permanently removes the participant. **All associated data is irrecoverable.**

![Selected participant with action bar showing the Delete option](../assets/users_selected_actions.png)

## Creating Participants

1. Click the **+ Add** button at the top right.

![Users tab + Add menu showing Add a user, Add a new group, and Add a new user and group options](../assets/users_add_menu.png)

2. Select **Add a user**.
3. Choose the group to add the participant to and click **Save**.

![Create a new user dialog with group selection dropdown](../assets/users_add_user_dialog.png)

The system generates temporary credentials automatically. See [Credential Management](/dashboard/credentials#auto-generated-credentials) for details on the generated credentials, QR codes, and how to set up proper login credentials.

## Participant Profile

Click the gear icon on a participant card to open their profile page.

![Profile header showing participant ID](../assets/users_profile_header.png)

From this page you can set the participant's nickname (alias), reset their [credentials](/dashboard/credentials), and manage their group's study configuration. All changes made here apply at the [group level](/dashboard/groups-tab#group-structure).

![Activities table showing Name, Type, and Schedule columns with edit and calendar icons](../assets/users_profile_activities.png)

![Sensors table showing Name and Type columns with edit icons](../assets/users_profile_sensors.png)

The profile provides the same activity and sensor management as the dedicated [Activities](/dashboard/activities-tab) and [Sensors](/dashboard/sensors-tab) tabs, scoped to this participant's group. Use the floating message button at the bottom right to [send a message](/dashboard/messaging) to this participant.
