---
sidebar_position: 1
title: "Deployment Overview"
draft: true
---

# Deployment Overview

This section covers self-hosting the LAMP Platform. Most organizations use the hosted service at `api.lamp.digital`. Self-deployment is for organizations that require on-premises data storage or custom infrastructure.

## Architecture

The LAMP Platform consists of:

- **Backend**: API server (Node.js), database (CouchDB/MongoDB-compatible), Redis cache, NATS message queue
- **Frontend**: Web dashboard, iOS app, Android app
- **Service Worker**: Optional automation and intervention scheduling

## Requirements

### Infrastructure

- Docker Swarm (required — no other orchestration is supported)
- Minimum: 2 vCPU, 2 GB RAM, 250 GB HDD
- Recommended for digital phenotyping: 4+ vCPU, 8+ GB RAM, up to 4 TB SSD
- Domain name with DNS A records (wildcard for multi-service routing)

### Software

- Docker Engine with Swarm mode
- Traefik (recommended for TLS/SSL and routing)
- Portainer (optional, for Swarm management UI)

### Compliance

- AES-256 encryption at rest, TLSv1.3 in transit
- Sign a Business Associate Agreement (BAA) with your cloud provider for HIPAA compliance
- Consult legal/IT departments for regulatory requirements

## Cost Estimates

| Scenario | Participants | Data Types | Estimated Monthly Cost (AWS) |
|---|---|---|---|
| Small clinic | ~15 | Active only | ~$35 |
| Small study | ~50 | Active + passive | ~$100 |
| Large study | 200+ | Active + passive + ML | ~$1,500 |

On-premises hosting appears cheaper but has hidden costs for redundancy, uptime, backups, and bandwidth.
