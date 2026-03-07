---
sidebar_position: 3
sidebar_label: Self-Hosted
title: "Self-Hosted Deployment"
draft: true
---

# Self-Hosted Deployment

This guide covers deploying LAMP on your own infrastructure outside of AWS.

## Requirements

- Linux server(s) with Docker Engine installed
- Docker Swarm initialized
- Domain name with DNS configured
- SSL/TLS certificates (or Traefik for automatic provisioning)

## Deployment Steps

The deployment process is the same regardless of cloud provider or on-premises infrastructure:

1. **Provision infrastructure** — Set up compute, storage, and networking.
2. **Install Docker** — Install Docker Engine and initialize Swarm mode.
3. **Configure networking** — Set up DNS records and firewall rules.
4. **Deploy Traefik** (recommended) — For automatic TLS and routing.
5. **Deploy LAMP stack** — Using `docker stack deploy` with the provided compose file.
6. **Verify** — Test API endpoints and create initial credentials.

## Enabling Sensors and Activities

By default, no activities or sensors are available on a fresh deployment. Each must be manually enabled:

### Via API

Navigate to the API docs on your server and create ActivitySpecs and SensorSpecs:

```bash
# Example: Enable accelerometer
curl -X POST https://your-domain.com/sensor_spec \
  -u admin:password \
  -H "Content-Type: application/json" \
  -d '{"name": "lamp.accelerometer"}'
```

### Via Python Script

A bulk-enable script is available that creates all standard activity specs (20) and sensor specs (23) in one run:

```python
import LAMP
LAMP.connect('admin@server.com', 'password', 'your-domain.com')

# Enable all activity specs and sensor specs
# (See deployment documentation for the full script)
```

## Password Policies

System administrators can enforce password complexity rules using the `lamp.dashboard.security_preferences` tag:

```json
{
  "passwordRegex": "^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$"
}
```

This enforces minimum 8 characters with lowercase, uppercase, and digits. If no tag is set, any password is accepted.

## Mobile App Configuration

The mobile apps require an initial connection to the App Gateway for version checking. If self-hosting:
- Deploy an internal App Gateway
- Configure version pins for your deployment
- Or instruct participants to manually enter your server address at login
