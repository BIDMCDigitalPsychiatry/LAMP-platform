# Components of the LAMP Platform

The LAMP Platform API Server manages all internal components and inter-component message-passing. Its components are embedded within Docker containers and use Docker Swarm for orchestration. Docker Compose and Kubernetes may also be used to deploy the components. Please see **Deployment Recommendations** if you do not plan on using Docker.

![](assets/Platform_Overview.png)

### **API Server**

The gatekeeper between the internal and external domains.

- This component is implemented in **Node.js**.
- ****All API requests are stateless (i.e. there is no session management) and map to a single response.
- All requests irrespective of authentication requirement must be accompanied by a client API key. This pre-registered API key is recorded in the audit log with each request and serves as origination reference for resources and events.
- Using the Credential API, requests that require authentication and authorization are validated.
- Data transport must be encrypted and decrypted as per security & privacy policy.

### **Database**

The persistent data storage device supporting transient caching and complex querying.

- This component is implemented by **CouchDB**, with an alternate implementation for low-power usage in **Node.js** using the **PouchDB** framework.
    1. This component can instead by substituted using custom adapter code by **Redis**, **Amazon S3**, or for low-power usage, a naïve **Dictionary/Map** object in **js**.
- A key-value or document database (noSQL) is most ideal for storage needs of the **LAMP Protocol**, due to its hierarchical object data and high throughput access and low latency manipulation requirements.
- To support real-time intervention deployment and management, an intermediate in-memory cache is used to ease the load on main long-term storage databases.

### **Message Queue**

Handles the synchronization of communication between all the above actors in the server layer.

- This component is implemented by the **Redis** high performance key-value store, with an alternate implementation for low-power usage in **Node.js**.
- Each component upon startup must register itself with the message queue for service discovery.
- Any component may create any number of topics for which other components may publish messages to or subscribe to.
- Implementation of database manipulation operations, automation events, and the audit log relies solely on subscription to the global topic; the API Server publishes requests here with a unique identifier awaiting response.

### **Automations Worker**

This component handles scheduled push notification delivery as well as execution of triggered scripts to deliver interventions to patients.

- A compute platform such as a Docker-enabled system or AWS Lambda is used to handle actual execution of code once bundled.
- A dependency bundler such as Webpack, PIP, or Packrat is used to bundle each automation’s code to avoid dependency versioning conflicts that could crash or halt execution.
- This component encompasses: **Docker Environment, Attachment Container, Automation Scripts, Scheduler**.

## Repositories

| Frontend | Backend | Native Core | Data Science | Programming Libraries |
|-|-|-|-|-|
| [Dashboard](https://github.com/BIDMCDigitalPsychiatry/LAMP-dashboard) | [API Server](https://github.com/BIDMCDigitalPsychiatry/LAMP-server) | [iOS](https://github.com/BIDMCDigitalPsychiatry/LAMP-core-ios) | [Cortex](https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex) | [R](https://github.com/BIDMCDigitalPsychiatry/LAMP-r) |
| [Activities](https://github.com/BIDMCDigitalPsychiatry/LAMP-activities) | [App Gateway](https://github.com/BIDMCDigitalPsychiatry/LAMP-app-gateway) | [Android](https://github.com/BIDMCDigitalPsychiatry/LAMP-core-android) | [CollegeStudy](https://github.com/BIDMCDigitalPsychiatry/LAMP-college-study) | [JS](https://github.com/BIDMCDigitalPsychiatry/LAMP-js) |
| | | | | [Python](https://github.com/BIDMCDigitalPsychiatry/LAMP-py) |
| | | | | [Swift](https://github.com/BIDMCDigitalPsychiatry/LAMP-swift) |
| | | | | [Kotlin](https://github.com/BIDMCDigitalPsychiatry/LAMP-kotlin) |

The LAMP Platform is designed, developed, and managed entirely as a series of GitHub repositories: 
1. Core:
    1. `LAMP-platform`: **All issues and documentation across any component repository MUST be centralized here!** Acts as the project tracker and documentation hub.
        1. `package.json`: All configuration for the Docusaurus documentation generator is housed here; the `docusaurus.config.js` file is dynamically generated.
        2. `openapi.json`: This file is dynamically generated from the `LAMP-protocol` git submodule that contains the `openapi.yaml` file. 
        3. `blog`: This directory contains the release notes/updates/"What's New" tab documents. 
        4. `docs`: This directory contains all documentation in entirely markdown files. Each file and folder includes a numeric prefix that sorts its order in the documentation sidebar, as well as an `assets` folder for all relevant images and media. 
    1. `LAMP-protocol`: The `openapi.yml` file houses the OpenAPI specification for the LAMP Protocol, upon which the entire LAMP Platform is built.
1. Backend:
    1. `LAMP-server`: (See Backend section in the documentation for more details on the nature of the component and how the code is organized.)
    1. `LAMP-worker`: (See Automations section in the documentation for more details on the nature of the component and how the code is organized.)
    1. `LAMP-app-gateway`: (See App Gateway section in the documentation for more details on the nature of the component and how the code is organized.)
1. Frontend:
    1. `LAMP-dashboard`: (See Frontend section in the documentation for more details on the nature of the component and how the code is organized.)
    1. `LAMP-data-studio`:
    1. `LAMP-activities`: 
1. SDKs:
    1. `LAMP-js`:
    2. `LAMP-py`:
    3. `LAMP-r`:
    4. `LAMP-swift`:
    5. `LAMP-kotlin`:
1. Data Science:
    1. `LAMP-cortex`: (See Cortex section in the documentation for more details on the nature of the component and how the code is organized.)
    1. `LAMP-ide`: A JupyterLab and VSCode-based integrated development environment with extensive support for Cortex.
1. Native Apps:
    1. `LAMP-core-ios`: A Swift-based scaffolding that incorporates support for TypeScript business logic and a WKWebView for the frontend UI. Designed to work well with the `LAMP-swift` SDK.
    1. `LAMP-core-android`: A Kotlin-based scaffolding that incorporates support for TypeScript business logic and a WebView for the frontend UI. Designed to work well with the `LAMP-kotlin` SDK.
1. Other:
    1. `LAMP-college-study`: A proof of concept for the Automations framework that is a part of the LAMP Platform.
    1. `clinical-scales-importer`: Automated clinical scale importer that works for RedCap integration into the LAMP Platform.
    1. `analysis-tools`: Misc. analysis tools for working with research studies using the LAMP Platform.
1. Deprecated:
    1. `LAMP-app`: The mindLAMP v1 native app for iOS and Android. **DO NOT USE.**
    1. `LAMP-portal`: The mindLAMP v1 backend. **DO NOT USE.**
