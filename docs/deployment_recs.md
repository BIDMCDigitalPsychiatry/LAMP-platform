---
title: Deployment Recommendations
slug: deployment_recs
---

# Disclosure

We encourage all self-deploying users to consult the legal and IT departments, as well as sign a Business Associate Agreement (BAA) with the cloud provider to comply with HIPAA regulations.

LAMP is completely free, open source software; as a result you are free to follow any or all steps that are suggested. However, we can only assure a successful deployment of the LAMP Platform if each required step is followed. If these steps are not implemented correctly, we are unable to guarantee LAMP will deploy properly. We are also unable to offer the technical support from our team for other deployments.

# Technical Requirements

The **use of Docker is imperative to successful self-deployment**. A single Docker Stack file is used to automate single-node or multi-node deployments, and requires Docker Swarm (multi-node for cloud testing, integration, and production usage, or single-node for local testing or smaller deployments). The LAMP Platform has only been tested with Docker Swarm, so therefore our team is only equipped to provide support for those using Docker or Docker compatible services.

We highly recommend the use of [Portainer](https://www.portainer.io/) as a Swarm Management Console to make it easier to troubleshoot failed deployments, rapidly test and integrate new components, and effectively monitor container logs and health. [Read this documentation to learn more about Portainer](https://documentation.portainer.io/) and how to configure and use it. We also recommend Traefik for managing service mesh routing and in-flight TLS encryption; additional Docker Stack files and instructions are provided for both in the self-deploy documentation. 

### Remote Access (WAF) Notes

The mobile apps and browsers must make an initial connection to the hosted VersionCheck API (part of the App Gateway) before downloading the user interface component. If your organization chooses to submit separate copies of the mobile apps to the Apple/Google app stores, you will also be responsible for deploying the App Gateway within your organization as well. This also means your organization must "pin" the versions of components as accessed from the VersionCheck API. If your organization is NOT deploying an internal App Gateway (i.e if using the existing mindLAMP apps on the App Store) then you will be using the App Gateway as hosted by the Division of Digital Psychiatry. (This must be disclosed in security/IT diagrams.)
