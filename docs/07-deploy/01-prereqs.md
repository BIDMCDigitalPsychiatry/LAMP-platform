# Prerequisites for Deploying the LAMP Platform

The mindLAMP app interfaces with the much broader LAMP Platform to provide all of the functionality and features you can interact with within the app. The [LAMP Platform is open source](https://github.com/BIDMCDigitalPsychiatry/) and its components are detailed below; to see technical materials such as source code or compiling/testing routines, please visit the components' corresponding repository. 

There are different ways for your organization to self-deploy the LAMP Platform, and because these components are interoperable, your organization has the choice between only self-deploying one, a combination, or all of these components together. 

**→** *Be sure to open the toggles on the left-hand side to learn more about what each component does.*

---
**CORE SERVICE**

To deploy mindLAMP and to receive support from BIDMC, we require all interested parties to use the Core Service. Cores are referred to as “specialized service facilities,” where they are work units that provide goods and services that facilitate research activity by providing scientific services and resources, both internal and external. Operating expenses are charged to research cores then recovered through user fees charged. The mindLAMP Core provides a way for users to help support to upkeep and maintenance of the software while receiving user support. No data sharing is necessary if mindLAMP is to be hosted outside of BIDMC. If desired and with a data sharing agreement, the mindLAMP Core can help support data hosting.

**Backend**

- **Database**
    - The noSQL databases used for modern sensor data collection are CouchDB and MongoDB.
    - Data backup must be manually configured as different organizations will expect different sizes and frequency of data storage, along with variance in data policies.
    - These database components are not built or maintained as part of the LAMP Platform but are required for its usage.
- **Server**
    - The server acts as an event bus that connects the different components of the Platform together on the data plane and provides a control plane.
    - It vends the LAMP Application Programming Interface (API) by which clients connect to and use the LAMP Platform.
    - The API enables data harmonization, synchronization, and integration with other platforms and databases through a standardized data format and set of actions with built-in credential management.
    - The API is defined using OpenAPI and JSONSchema to markup extensible interfaces.
    - The industry encryption standards AES-256 and TLSv1.3 facilitate secure storage and transmission of data in a HIPAA, COPPA, and GDPR-compliant manner.
- **Service Worker**
    - This component allows external apps and tools to be notified of changes to data from other users through sent notifications and events.
    - This component schedules push notifications to be delivered to mobile devices, as well as manages email/SMS notification delivery.
    - **Optionally**, it also schedules and executes scripts written in Python, Javascript, or R, as part of intervention delivery and data analysis. **This feature can be disabled.**

**When:** If your organization is required to ensure that all data is securely managed and complies with internal policies or regulations.

**Prerequisites:** Your organization will need to provision computing resources and encrypted snapshot storage and dedicate personnel to maintenance, updates, and security (i.e. data breach detection). 

**Options:** You can use a **Backend** hosted by your institution with your customized **Native App** or **Frontend** or the current Division of Digital Psychiatry version. 

---

**Frontend**

- **App UI**
    - The user interface for the mindLAMP app, accessible from the Web, iOS, and Android. For creating and using cognitive tests or other activities, please see the `LAMP-activities` repository.
    - This component allows administrators, researchers, clinicians, participants, and patients to access and manage their mindLAMP configuration and data.
    - It displays visualizations and can configure clinics and studies to specified requirements, and makes available activities and interventions to patients or participants, with push notifications to schedule them per user.
- **Integrated Development Environment**
    - **This component is optional.**
    - This component allows authorized developers and data scientists to build, test, and deploy algorithms that work with the LAMP Platform in a secure manner.
    - This component may be deployed multiple times to support different development needs or users.
    - We additionally recommend `JupyterLab` for Python data analysis, `RStudio` for R data analysis, and `Visual Studio Code` for TypeScript development.
    - Integrating development and data analysis with the LAMP Platform deployment increases data throughput and security, but access to these instances should be guarded carefully to avoid data leaks.

**When:** If your organization would like to create customized user experiences for your clients or clinicians.

**Prerequisites:** Your organization will need to provision a content delivery system to serve the user interface.

**Options:** You can use the existing mindLAMP **App UI** designed by the Division of Digital Psychiatry with your customized **Native App** or **Backend**.  

---

**Native App**

- **Smartphone (iOS, Android)**
    - This component is used to collect high precision sensor measurements from the numerous sensors outlined in the LAMP API documentation.
    - By embedding a miniature version of the LAMP server and database, it supports active bi-directional synchronization between two devices (i.e. watch and phone, or phone and cloud).
    - By embedding the **App UI**, patients and participants can interact with clinic or study-scheduled survey instruments and cognitive assessments to record active data and metadata.
- **Wearable** (Apple Watch, Google wearOS)
    - This component is used to collect high precision sensor measurements from the numerous sensors outlined in the LAMP API documentation.
    - By embedding a miniature version of the LAMP server and database, it supports active bi-directional synchronization between two devices (i.e. watch and phone, or phone and cloud).

**When:** if your organization would like to include support for additional sensor instruments, such as third party medical devices.

**Prerequisites:** Your organization will need to purchase membership with Apple and/or Google's developer program, submit modifications to the app for App Store review, and dedicate personnel to maintenance and updates.

**Options:** You can use the existing mindLAMP **Native App** submitted by the Division of Digital Psychiatry and vetted by Apple and Google with your customized **Frontend** or **Backend**.

---

It is always possible to customize the activities and sensors your patients will see in the app using the standard frontend hosted by BIDMC. You do not need to self-host the frontend.

Even if your organization chooses to make modifications to any of these components when self-deploying them, they remain compatible with one-another. For example, if one organization self-deploys a new **Frontend** user experience or adds medical devices support to the **Native App**, it remains compatible with another organization's self-deployed **Backend**.
