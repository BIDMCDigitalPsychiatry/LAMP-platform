---
sidebar_position: 1
sidebar_label: Getting Started
title: "Getting Started with Cortex"
description: "Installation and environment setup for the Cortex analysis library."
---

# Getting Started with Cortex

Cortex is the open-source Python library for analyzing data collected through mindLAMP.

## Installation

```bash
pip install lamp-cortex
```

Requires Python 3.8+ and a connection to a mindLAMP server.

## Environment Setup

Set the following environment variables to connect Cortex to your LAMP server:

```bash
export LAMP_ACCESS_KEY="your_email@address.com"
export LAMP_SECRET_KEY="your_password"
export LAMP_SERVER_ADDRESS="api.lamp.digital"
```

| Variable | Description |
|---|---|
| `LAMP_ACCESS_KEY` | Login email or access key |
| `LAMP_SECRET_KEY` | Password or secret key |
| `LAMP_SERVER_ADDRESS` | Server address (e.g., `api.lamp.digital`) |

Or configure in Python:

```python
import cortex
import LAMP
LAMP.connect('email@address.com', 'password', 'api.lamp.digital')
```

## Quick Example

```python
import cortex

# Compute screen duration for a participant over one week
result = cortex.secondary.screen_duration.screen_duration(
    id="U1234567890",
    start=1638248400000,
    end=1638248400000 + 7 * 86400000
)
```

## Next Steps

- [Running Cortex](running) — Use `cortex.run()` to process multiple participants and features at once, with full parameter reference.
- [Cortex Features](features) — The three-tier pipeline: raw, primary, and secondary features.
- [Cortex Visualizations](visualizations) — Built-in plotting functions.
