---
sidebar_position: 3
sidebar_label: JavaScript SDK
title: "JavaScript/TypeScript SDK"
description: "For web and Node.js integrations. Install with npm install lamp-core."
---

# JavaScript/TypeScript SDK

The JavaScript SDK provides LAMP API access for web and Node.js applications.

## Installation

```bash
npm install lamp-core
```

## Usage

```javascript
import LAMP from 'lamp-core';

// Connect
LAMP.connect({
  accessKey: 'email@address.com',
  secretKey: 'password',
  serverAddress: 'api.lamp.digital'
});

// Query participants
const participants = await LAMP.Participant.all_by_study(studyId);

// Query sensor events
const events = await LAMP.SensorEvent.all_by_participant(participantId, 'lamp.gps');
```

The JavaScript SDK mirrors the Python SDK's API methods. All methods return Promises and can be used with async/await.

## Use Cases

- Web-based data dashboards
- Node.js automation scripts
- Custom web applications integrating LAMP data
- Browser-based data visualization tools
