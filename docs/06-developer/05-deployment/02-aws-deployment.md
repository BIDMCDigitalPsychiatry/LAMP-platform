---
sidebar_position: 2
sidebar_label: AWS Deployment
title: "AWS Deployment"
draft: true
---

# AWS Deployment

## Preparing AWS Resources

### EC2 Instance

1. Launch an AWS Linux 2 instance (t2.medium minimum).
2. Attach an encrypted EBS volume (minimum 64 GB, recommended 1 TB).
3. Configure security groups:
   - HTTP (80) and HTTPS (443) from anywhere
   - Docker daemon ports (2377, 7946, 4789) within your VPC

### EBS Setup

```bash
# Format and mount the EBS volume
sudo mkfs -t ext4 /dev/xvdb
sudo mkdir /data
sudo mount /dev/xvdb /data

# Add to fstab for persistence
echo '/dev/xvdb /data ext4 defaults,nofail 0 2' | sudo tee -a /etc/fstab
```

### Docker Configuration

```bash
# Move Docker root to EBS
sudo systemctl stop docker
sudo mv /var/lib/docker /data/docker
sudo ln -s /data/docker /var/lib/docker
sudo systemctl start docker

# Initialize Docker Swarm
docker swarm init
```

### MongoDB Requirements

For production workloads:
- Minimum: 125 MB/s throughput, 3,000 IOPS
- Recommended: 593 MB/s throughput, 20,000 IOPS
- Minimum 64 GB disk space

## CloudFormation (One-Click Deploy)

AWS CloudFormation templates are available for automated deployment. Required parameters:
- HostedZoneId, DomainName
- InstanceType, ImageId
- VPC and Subnet CIDR blocks
- Key pair name

## Deploying the Stack

### Prerequisites

1. Configure DNS: A record + wildcard A record pointing to your instance.
2. Create Docker overlay network: `docker network create --driver overlay --attachable public`

### Optional: Traefik (Recommended)

Deploy Traefik for automatic SSL/TLS certificate generation and service routing:

```yaml
# traefik.yml (simplified)
services:
  traefik:
    image: traefik:latest
    command:
      - --providers.docker.swarmMode=true
      - --entrypoints.websecure.address=:443
      - --certificatesresolvers.default.acme.email=your@email.com
```

### Core LAMP Stack

Deploy the LAMP platform using `docker stack deploy`:

```bash
# Generate required secrets
ROOT_KEY=$(openssl rand -hex 32)
DB_PASS=$(openssl rand -hex 8)

# Deploy (substitute your values in lamp.yml)
docker stack deploy -c lamp.yml lamp
```

The stack includes: LAMP Server, MongoDB 6.0.4, Redis, and NATS.

### Verification

```bash
# Check API server
curl -k https://your-domain.com/

# Check database
curl http://localhost:5984/

# Find admin password (printed once in server logs)
docker service logs lamp_server 2>&1 | grep "password"
```

## Updates

LAMP uses calendar-based versioning. To update:

```bash
docker service update --image <new-image> lamp_server
```
