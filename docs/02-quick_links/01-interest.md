# Get Started with mindLAMP

If you are interested in using mindLAMP, this can be done in a number of ways. To get started, please determine which option below is right for you and fill out this [interest form](https://digitalpsychiatry.notion.site/26a33133d8a280b493cdd9503abcfb8c?pvs=105). A member of our team will review your request and respond promptly.

## mindLAMP Core Services

Most teams implement mindLAMP through LAMP Core. The mindLAMP Core is a centralized service that supports research teams and clinical programs in using mindLAMP correctly, consistently, and responsibly. 

The Core is responsible for:
- Guiding how mindLAMP is configured and deployed
- Ensuring studies are designed in ways that produce usable, comparable data
- Maintaining shared infrastructure and analytics
- Supporting teams throughout the full lifecycle of a project

The Core supports teams across five phases:

### Phase 1: Study & Clinical Design Consultation (free, pre-contracting)

- Meeting with teams to understand research or clinical goals
- Translating goals into specific uses of mindLAMP
- Mapping goals to existing platform features
- Identifying when configuration is sufficient versus when new development would be required
- Flagging study designs associated with missing, low-quality, or non-comparable data
- Advising on appropriate use cases for mindLAMP based on prior deployments

### Phase 2: Protocol Optimization & Participant-Centered Design (after contracting)

- Advising on EMA frequency and timing
- Advising on expected engagement patterns and drop-off points
- Recommending passive data streams based on participant comfort and prior use
- Reviewing tradeoffs between data richness and participant burden
- Advising on longitudinal EMA content and structure
- Identifying known failure modes (e.g., survey fatigue, missing data)

### Phase 3: Technical & Privacy-Aware Configuration

- Configuring mindLAMP instances to align with institutional privacy requirements
- Supporting study-specific access controls and permissions
- Aligning configurations with data governance expectations
- Providing standardized language and configuration patterns for IRB and security review
- Ensuring consistent implementation of privacy and security safeguards

**Infrastructure involved:**

- Secure servers
- Role-based access controls
- Audit logs for data access and changes

### Phase 4: Infrastructure, Hosting, and Performance Management

mindLAMP supports multiple deployment models. The Core’s responsibilities vary by model.

| **Option** | **Description** | **Best For** |
| --- | --- | --- |
| **Self-hosted** | Full mindLAMP stack in partner's own AWS account | Organizations with data residency requirements, need for full control |
| **Separate instance hosted at BIDMC** | Dedicated instance managed by BIDMC team | Organizations wanting data isolation without managing infrastructure |
| **Shared BIDMC instance** | Use the main mindLAMP instance at lamp.digital | Smaller studies, quick starts, organizations without special requirements |

Across all deployment models, the Core:

- Hosts and maintains servers where applicable
- Monitors uptime & performance
- Manages software updates and platform releases
- Ensures compatibility with OS, device, and platform changes
- Coordinates updates to minimize disruption to active studies

### Phase 5: Study Execution & Ongoing Support

**Onboarding & Training**

- Training project staff on mindLAMP tools
- Supporting participant onboarding workflows
- Advising on participant communication and expectations

**Data Monitoring & Analytics**

- Assisting with setup of analysis environments
- Supporting use of shared analytics pipelines (e.g., Cortex)
- Advising on monitoring data quality and participant engagement
- Supporting interpretation of digital phenotyping outputs

**Troubleshooting & Operational Support**

- Responding to technical issues during active studies
- Supporting resolution of participant-reported issues
- Identifying whether issues are platform-wide or study-specific
- Coordinating fixes and updates as needed

## Self-Deployment

Because mindLAMP is open-source, you may choose to deploy it yourself from our publicly available code; however, we cannot provide support for self-deployment, and it does require advanced technical expertise.
