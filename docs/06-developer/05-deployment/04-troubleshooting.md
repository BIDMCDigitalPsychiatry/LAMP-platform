---
sidebar_position: 4
sidebar_label: Troubleshooting
title: "Deployment Troubleshooting"
draft: true
---

# Deployment Troubleshooting

## Common Issues

### Disk Space

LAMP server logs can grow over time and consume significant disk space.

**Diagnosis:**
```bash
df -h        # Check overall disk usage
du -sh /var/lib/docker/containers/*  # Check container log sizes
```

**Solution:** Add logging limits to your Docker compose file:

```yaml
services:
  server:
    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"
```

If logs have already consumed disk space, stop and remove the container. Docker Swarm will automatically restart it with the logging limits applied.

### Lost Admin Password

The admin password is printed once in the server logs during initial setup:

```bash
docker service logs lamp_server 2>&1 | grep "password"
```

If the logs have been rotated, the password can be recovered by decrypting the `credential` collection in the database using the `ROOT_ENCRYPTION_KEY`:

```javascript
// Node.js decryption (AES-256-CBC)
const crypto = require('crypto');
const decipher = crypto.createDecipheriv('aes-256-cbc', ROOT_KEY, iv);
```

### Database Connection Failures

Verify the database is running:
```bash
curl http://localhost:5984/
```

Check that the MongoDB/CouchDB connection string in the LAMP server configuration matches your database deployment.

### API Server Not Responding

```bash
# Check service status
docker service ls
docker service logs lamp_server

# Verify the server is healthy
curl -k https://your-domain.com/
```

### SSL/TLS Certificate Issues

If using Traefik, verify:
- The ACME email is configured correctly
- DNS records point to the correct IP
- Ports 80 and 443 are open in the firewall

### Sensors Not Collecting Data

After deployment, sensors and activities must be explicitly enabled via the API. See [Self-Hosted Deployment](self-hosted) for instructions on enabling sensor specs and activity specs.
