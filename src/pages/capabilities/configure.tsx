import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './capabilities.module.css';
import { CapabilityNav } from '@site/src/components/capabilityPages';

/* ============================================================
   SVG ICONS (Feather-style)
   ============================================================ */

const icons = {
  cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  server: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  users: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  grid: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  calendar: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  database: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

/* ============================================================
   DATA
   ============================================================ */

const deploymentOptions = [
  {
    name: 'Shared (Core-Hosted)',
    best: 'Best for most projects',
    description:
      'Hosted and maintained by the mindLAMP Core team at BIDMC. Start collecting data immediately.',
    color: '#3b82f6',
    icon: icons.cloud,
  },
  {
    name: 'Dedicated Instance',
    best: 'Best for large projects needing data isolation',
    description:
      'Isolated environment on Core infrastructure. Fully separated data, Core team handles maintenance.',
    color: '#f59e0b',
    icon: icons.server,
  },
  {
    name: 'Self-Hosted',
    best: 'Best for institutions with data residency requirements',
    description:
      'Deploy on your own infrastructure using standard container technology. Full control, with Core team documentation and support.',
    color: '#10b981',
    icon: icons.shield,
  },
];

const configFeatures = [
  {
    title: 'Participant Groups',
    description:
      'Organize participants into groups with distinct configurations. Treatment and control arms, multi-site groupings, or cohort divisions. Each group gets its own activities, sensors, and notification schedules.',
    icon: icons.users,
    color: '#3b82f6',
    link: { label: 'Groups documentation', to: '/dashboard/groups-tab' },
  },
  {
    title: 'Activity Scheduling',
    description:
      'Configure when activities appear and when push notifications are sent. Daily, weekly, biweekly, monthly, custom, or one-time. Multiple schedules per activity.',
    icon: icons.calendar,
    color: '#f59e0b',
    link: { label: 'Scheduling documentation', to: '/dashboard/scheduling' },
  },
  {
    title: 'De-Identified Enrollment',
    description:
      'Every participant gets a system-generated ID. No email addresses, names, or personal information enters the platform. Teams choose their own credential and naming conventions.',
    icon: icons.shield,
    color: '#10b981',
    link: { label: 'Credentials documentation', to: '/dashboard/credentials' },
  },
  {
    title: 'Group Duplication',
    description:
      'Duplicate an existing group to copy all activity and sensor configurations into a new group. Useful for multi-arm studies or adding sites with consistent setup.',
    icon: icons.grid,
    color: '#a78bfa',
    link: { label: 'Groups documentation', to: '/dashboard/groups-tab' },
  },
];

const dataAccessMethods = [
  {
    title: 'REST API',
    description:
      'Full programmatic access. Create participants, push activities, pull sensor readings, query results.',
    icon: icons.code,
    link: { label: 'API reference', to: '/api' },
  },
  {
    title: 'Python & JavaScript SDKs',
    description:
      'Official client libraries with built-in authentication, pagination, and error handling. R available via reticulate.',
    icon: icons.database,
    link: { label: 'SDK documentation', to: '/developer/api-sdks/introduction' },
  },
  {
    title: 'Built-In Data Queries',
    description:
      'Transform and filter data directly on the platform using JSONata without downloading raw files.',
    icon: icons.grid,
    link: { label: 'JSONata guide', to: '/developer/api-sdks/jsonata' },
  },
];

/* ============================================================
   PAGE
   ============================================================ */

export default function Configure() {
  return (
    <Layout title="Customize & Scale" description="One platform fits projects of any size. Flexible hosting, group-based configuration, multi-site coordination, and complete data access.">
      {/* Hero */}
      <header className={styles.hero} style={{ background: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)' }}>
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>Capability</div>
          <Heading as="h1" className={styles.heroTitle}>
            Customize & Scale
          </Heading>
          <p className={styles.heroSubtitle}>
            One platform adapts to projects of any size and context, from a 15-person pilot
            to a 43-site international consortium, with flexible hosting and complete data access.
          </p>
        </div>
      </header>

      {/* 1. Deployment Options */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Deployment Options
          </Heading>
          <p className={styles.sectionSubtitle}>
            Three paths to get running, depending on your institution's requirements and timeline.
          </p>
          <div className={styles.deploymentDiagram}>
            {deploymentOptions.map((opt) => (
              <div key={opt.name} className={styles.deploymentOption}>
                <div className={styles.deploymentIcon} style={{ background: opt.color }}>
                  {opt.icon}
                </div>
                <div>
                  <div className={styles.deploymentOptionTitle}>{opt.name}</div>
                  <div className={styles.deploymentOptionBest}>{opt.best}</div>
                  <div className={styles.deploymentOptionDescription}>{opt.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Group-Based Configuration */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Configure Once, Apply to Many
          </Heading>
          <p className={styles.sectionSubtitle}>
            Activities, sensors, and schedules are set at the group level and apply uniformly
            to every participant in that group. Change a schedule or add an activity, and it
            takes effect for the entire group immediately.
          </p>

          <div className={`${styles.featureGrid} ${styles.featureGridTwoCol}`} style={{ maxWidth: '800px', margin: '0 auto' }}>
            {configFeatures.map((feat) => (
              <div key={feat.title} className={styles.featureCard}>
                <div className={styles.deploymentIcon} style={{ background: feat.color, marginBottom: '0.75rem' }}>
                  {feat.icon}
                </div>
                <div className={styles.featureCardTitle}>{feat.title}</div>
                <div className={styles.featureCardDescription}>{feat.description}</div>
                <Link className={styles.guideLink} to={feat.link.to}>
                  {feat.link.label} &#8594;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Multi-Site at Scale */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Multi-Site Coordination
          </Heading>
          <p className={styles.sectionSubtitle}>
            A single platform instance can serve dozens of sites with consistent setup, localized
            content, and a uniform data format.
          </p>

          <div className={styles.specsGrid}>
            <div className={styles.specsCard}>
              <div className={styles.engagementIcon} style={{ marginBottom: '0.5rem', color: '#f59e0b' }}>{icons.grid}</div>
              <div className={styles.specsCardTitle}>Central Configuration</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', margin: 0 }}>
                Define activities and sensors once. Changes propagate to every site instantly.
                Each site gets its own participant group for local management.
              </p>
            </div>
            <div className={styles.specsCard}>
              <div className={styles.engagementIcon} style={{ marginBottom: '0.5rem', color: '#3b82f6' }}>{icons.globe}</div>
              <div className={styles.specsCardTitle}>Multilingual Content</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', margin: 0 }}>
                Surveys and instructions are available in 10 languages while the underlying
                data schema stays identical, enabling direct cross-site comparison.
              </p>
            </div>
            <div className={styles.specsCard}>
              <div className={styles.engagementIcon} style={{ marginBottom: '0.5rem', color: '#10b981' }}>{icons.database}</div>
              <div className={styles.specsCardTitle}>One Data Format</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', margin: 0 }}>
                Every site produces identically structured data. Merge and analyze across
                sites without reformatting or transformation.
              </p>
            </div>
          </div>

          <div className={styles.narrativeStory} style={{ marginTop: '2rem' }}>
            <p>
              The Accelerating Medicines Partnership Schizophrenia Program (AMP SCZ) runs
              mindLAMP across 43 sites in 13 countries with content in 9 languages. Activity
              configurations are defined once and applied uniformly. Centralized dashboards
              track sensor coverage and activity completion across all sites, enabling
              coordinators to spot and resolve collection issues quickly.
            </p>
          </div>

          <p className={styles.sectionLinks}>
            <Link to="/projects#PRJ-0001">View the AMP SCZ project &#8594;</Link>
          </p>
        </div>
      </section>

      {/* 4. Data Export & API */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Data Export & API
          </Heading>
          <p className={styles.sectionSubtitle}>
            Programmatic access to everything the platform collects.
          </p>

          <div className={styles.featureGrid}>
            {dataAccessMethods.map((method) => (
              <div key={method.title} className={styles.featureCard}>
                <div className={styles.engagementIcon} style={{ marginBottom: '0.5rem', color: '#f59e0b' }}>{method.icon}</div>
                <div className={styles.featureCardTitle}>{method.title}</div>
                <div className={styles.featureCardDescription}>{method.description}</div>
                <Link className={styles.guideLink} to={method.link.to}>
                  {method.link.label} &#8594;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dive Deeper */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Dive Deeper
          </Heading>
          <p className={styles.sectionSubtitle}>
            Explore the technical documentation for deployment, participant management, scheduling, and data access.
          </p>
          <div className={`${styles.featureGrid} ${styles.featureGridTwoCol}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Getting Started</div>
              <div className={styles.featureCardDescription}>
                Account setup, first login, and orientation to the platform.
              </div>
              <Link className={styles.guideLink} to="/app">
                Read guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Participant Setup</div>
              <div className={styles.featureCardDescription}>
                Create accounts, assign groups, and distribute credentials.
              </div>
              <Link className={styles.guideLink} to="/dashboard/credentials">
                Read guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Activity Scheduling</div>
              <div className={styles.featureCardDescription}>
                Configure survey schedules, notification timing, and activity availability.
              </div>
              <Link className={styles.guideLink} to="/dashboard/scheduling">
                Read guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>REST API Reference</div>
              <div className={styles.featureCardDescription}>
                Full API documentation for all platform operations.
              </div>
              <Link className={styles.guideLink} to="/api">
                View reference &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Nav */}
      <CapabilityNav current="/capabilities/configure" />
    </Layout>
  );
}
