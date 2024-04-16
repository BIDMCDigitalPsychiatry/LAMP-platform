# Deploying the LAMP Platform

:::caution
Although some steps are able to completed using other methods, please follow these instructions as closely as possible.
Deviation from these deployment recommendations means BIDMC staff cannot provide technical support.
:::

**You must have a configured Docker Swarm cluster to continue.**
Please follow all steps below in the exact order specified, though you may skip optional steps.

The files provided below support these orchestration tools: 
1. **Docker Compose** (single-node)
2. **Docker Swarm** (single-node or multi-node)
    - **WARNING:** If creating a multi-node deployment, [follow the proper procedures for manager/worker node allocation](https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/). 
    - `An N manager cluster tolerates the loss of at most (N-1)/2 managers`. 
    - If creating a 2-node cluster and both are designated as managers, **CATASTROPHIC FAILURE AND SEVERE DATA LOSS may occur if EITHER node loses connectivity for more than 5 minutes.** 
4. **Kubernetes** (multi-node)
    - For more information on using Kubernetes, [follow this guide](https://docs.docker.com/get-started/orchestration/) or [this guide](https://docs.docker.com/docker-for-mac/kubernetes/#override-the-default-orchestrator) instead.

### Prerequisites

**This step is required.** 

Configure firewall rules as needed to avoid directly opening ports on your nodes, and instead appropriately route traffic through ports `80` (HTTP) and `443` (HTTPS). 

1. Create a new network called `public` to connect all externally accessible services. 

    ```bash
    docker network create --driver overlay --attachable public
    ```

2. Using your DNS provider of choice, provision a domain name (here we use `[example.com](http://example.com)` to represent your domain name and `1.1.1.1` to represent your node's IP address). 
    - DNS Records

        ```
        ┌───────────────┬──────┬─────────┬──────┐
        │ RECORD NAME   │ TYPE │ VALUE   │ TTL  │
        ├───────────────┼──────┼─────────┼──────┤
        │ example.com   │ A    │ 1.1.1.1 │ 3600 │ 
        │ *.example.com │ A    │ 1.1.1.1 │ 3600 │
        └───────────────┴──────┴─────────┴──────┘
        ```

3. If you have multiple nodes in your cluster, be sure to configure alternate IP address values for all DNS records.
    - DNS Records

        For example, on **AWS Route53**, `ROUND-ROBIN` refers to `Multivalue Answer` response types **without** health-check enabled.

        ```
        ┌───────────────┬──────┬─────────┬──────┬─────────────┬─────────┐
        │ RECORD NAME   │ TYPE │ VALUE   │ TTL  │ MODE        │ ALIAS   │
        ├───────────────┼──────┼─────────┼──────┼─────────────┼─────────┤
        │ example.com   │ A    │ 1.1.1.1 │ 3600 │ ROUND-ROBIN │ node-01 │
        │ example.com   │ A    │ 2.2.2.2 │ 3600 │ ROUND-ROBIN │ node-02 │
        │ *.example.com │ A    │ 1.1.1.1 │ 3600 │ ROUND-ROBIN │ node-01 │
        │ *.example.com │ A    │ 2.2.2.2 │ 3600 │ ROUND-ROBIN │ node-02 │
        └───────────────┴──────┴─────────┴──────┴─────────────┴─────────┘
        ```

### Cloud Mesh Router

**This step is optional and can be skipped.** 
We recommend deploying `Traefik` as a **Cloud Mesh Router** to make it easier to connect services and components, generate SSL certificates for encrypting traffic, diagnose traffic issues, and capture access logs for auditing.

- **Docker Stack:** `**traefik.yml**`

    **You MUST replace the following configuration variables in your copy of this file:**

    1. `administrator@example.com`

    ```yaml
    version: "3.7"
    services:
      traefik:
        image: traefik:latest
        command:
          - "--log.level=INFO"
          - "--accesslog=true"
          - "--api=true"
          - "--providers.docker=true"
          - "--providers.docker.swarmMode=true"
          - "--providers.docker.exposedByDefault=false"
          - "--entrypoints.web.address=:80"
          - "--entrypoints.websecure.address=:443"
          - "--entrypoints.websecure.http.tls.certResolver=default"
          - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
          - "--entrypoints.web.http.redirections.entryPoint.scheme=https"
          - "--entrypoints.web.http.redirections.entryPoint.permanent=true"
          - "--certificatesResolvers.default.acme.email=administrator@example.com"
          - "--certificatesResolvers.default.acme.storage=/data/acme.json"
          - "--certificatesResolvers.default.acme.tlsChallenge=true"
        volumes:
          - "/var/run/docker.sock:/var/run/docker.sock:ro"
          - "traefik-ssl:/data/"
        ports:
          - target: 80
            protocol: tcp
            published: 80
            mode: ingress
          - target: 443
            protocol: tcp
            published: 443
            mode: ingress
        networks:
          - public
        deploy:
          mode: replicated
          placement:
            constraints:
              - node.role == manager
    networks:
      public:
        external: true
    volumes:
      traefik-ssl:
    ```

```bash
docker stack deploy --compose-file traefik.yml router
```

**We recommend deploying `[Portainer](https://www.portainer.io/)`** as a **Swarm Management Console** to make it easier to troubleshoot failed deployments, rapidly test and integrate new components, and effectively monitor container logs and health. Read this documentation to learn more about [Portainer and how to configure and use it](https://portainer.readthedocs.io/en/stable/).

### LAMP Platform

**This step is required.** 

Create a `/data` folder in the node that will be hosting the database(s).

```bash
mkdir -p /data/db
```

You must first generate two cryptographically secure hexadecimal strings. Substitute these strings in the stack file below as indicated by the environment variables after the `#`. The strings must be of the correct length, or deployment will not work.

```bash
openssl rand -hex 8 # DB_PASSWORD_HERE
openssl rand -hex 32 # ROOT_ENCRYPTION_KEY_HERE
```
- **Docker Stack:** `**lamp.yml**`

    **You MUST replace the following configuration variables in your copy of this file:**

    1. `dashboard.example.com` The address you will use to access the LAMP dashboard. (If deploying the dashboard)
    2. `ROOT_ENCRYPTION_KEY_HERE` See above. Please confirm that this key has the correct number of characters (64).
    3. `DB_PASSSWORD_HERE` See above.
    4. `YOUR_PUSH_KEY_HERE` → **[Please contact us to enable push notifications.](mailto:team@digitalpsych.org)**
    5. `api.example.com` Your LAMP Platform API Server domain shared with others to use.

It is possible to use the LAMP dashboard hosted by BIDMC (dashboard.lamp.digital) or to self-host the dashboard. Self-hosting will require the addition of a dashboard service to the LAMP stack.

1. If you do not plan to self-host the LAMP dashboard:

    ```yaml
    version: '3.7'
    services:
      server:
        image: ghcr.io/bidmcdigitalpsychiatry/lamp-server:2023
        healthcheck:
          test: wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1
        environment:
          HTTPS: 'off'
          ROOT_KEY: 'ROOT_ENCRYPTION_KEY_HERE'
          DB: 'mongodb://admin:DB_PASSSWORD_HERE@database:27017/'
          PUSH_API_GATEWAY: 'https://app-gateway.lamp.digital/'
          PUSH_API_KEY: 'YOUR_PUSH_KEY_HERE'
          DASHBOARD_URL: 'dashboard.lamp.digital'
          REDIS_HOST: 'redis://cache:6379/0'
          NATS_SERVER: 'message_queue:4222'
        networks:
          - default
          - public
        logging:
          options:
            max-size: "10m"
            max-file: "3"
        deploy:
          mode: replicated
          update_config:
            order: start-first
            failure_action: rollback
          labels:
            traefik.enable: 'true'
            traefik.docker.network: 'public'
            traefik.http.routers.lamp_server.entryPoints: 'websecure'
            traefik.http.routers.lamp_server.rule: 'Host(`api.example.com`)'
            traefik.http.routers.lamp_server.tls.certresolver: 'default'
            traefik.http.services.lamp_server.loadbalancer.server.port: 3000
          placement:
            constraints:
              - node.role == manager
      database:
        image: mongo:6.0.4
        environment:
          MONGO_INITDB_ROOT_USERNAME: 'admin'
          MONGO_INITDB_ROOT_PASSWORD: 'DB_PASSWORD_HERE'
        volumes:
          - mongo_data:/data/db
        networks:
          - public
        deploy:
          mode: replicated
          update_config:
            order: stop-first
            failure_action: rollback
          placement:
            constraints:
              - node.role == manager
      cache:
        image: redis:6.0.8-alpine
        healthcheck:
          test: redis-cli ping
        deploy:
          mode: replicated
          update_config:
            order: stop-first
            failure_action: rollback
          placement:
            constraints:
              - node.role == manager
      message_queue:
        image: nats:2.1.9-alpine3.12
        healthcheck:
          test: wget --no-verbose --tries=1 --spider http://localhost:8222/varz || exit 1
        deploy:
          mode: replicated
          update_config:
            order: start-first
            failure_action: rollback
          placement:
            constraints:
              - node.role == manager
    volumes:
        mongo_data:
    networks:
      public:
        external: true
    ```
    
Note: If you are deploying more than one stack, please be sure that all traefik variables (for example, `traefik.http.routers.lamp_dashboard.rule`) under "labels" are unique. Otherwise, this will cause issues with both the deployment of this container and the other containers that contain the duplicate variables.

If you've deployed the **Swarm Management Console**, log into your swarm cluster and navigate to the `Stack` tab on the left sidebar. Paste the contents of the stack file into the editor pane and tap "Deploy", instead of running the command below. 

```bash
docker stack deploy --compose-file lamp.yml lamp
```

## Maintaining and Updating the LAMP Platform

If you are using this Docker Stack provided, you will only need to run a `docker service update` command on the API Server to pull the latest image. Because Docker image versioning is calendar-based, at the moment you will manually need to update from `2022` to `2023`, and so on.

If you are deploying multiple LAMP stacks, **please ensure the `traefik` router rules have been renamed!** (i.e. Ensure `traefik.http.routers.lamp_dashboard.rule` and `traefik.http.routers.lamp_dashboard_2.rule` are distinct.) If two or more instances of the same rule exist, the router will overwrite the first instance. 
