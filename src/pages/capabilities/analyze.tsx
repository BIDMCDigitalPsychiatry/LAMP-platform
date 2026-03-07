import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './capabilities.module.css';
import { CapabilityNav } from '@site/src/components/capabilityPages';

/* ============================================================
   DATA
   ============================================================ */

const pipelineStages = [
  {
    label: 'Raw Features',
    title: '32 Modules',
    items: [
      'GPS coordinates',
      'Accelerometer (x, y, z)',
      'Screen state & battery',
      'Step counts',
      'Call & text metadata',
      'Survey responses',
      'Cognitive game results',
    ],
  },
  {
    label: 'Primary Features',
    title: '6 Modules',
    items: [
      'Significant locations (GPS clustering)',
      'Trips (origin, destination, duration)',
      'Screen-on bouts',
      'Acceleration jerk magnitude',
      'Game scores & response times',
      'Survey question-level scoring',
    ],
  },
  {
    label: 'Secondary Features',
    title: '23 Modules',
    items: [
      'Home time, entropy, trip distance',
      'Screen duration, step count',
      'Call & text frequency',
      'Sleep duration',
      'Data quality score',
      'One row per participant per day',
    ],
  },
];

const sdks = [
  { name: 'Python', install: 'pip install lamp-cortex' },
  { name: 'R (via reticulate)', install: 'Use Python SDK from R' },
  { name: 'JavaScript', install: 'npm i lamp-core' },
  { name: 'REST API', install: 'api.lamp.digital/v1' },
  { name: 'JSONata', install: 'Built-in query language for filtering data' },
];

const inPracticeProjects = [
  {
    project: 'Schizophrenia Clinical Subtypes',
    description: 'Integrated cognitive, functional, and digital phenotyping assessments to identify clinical subtypes in schizophrenia, demonstrating how Cortex features complement traditional measures.',
    citation: 'Byun et al., 2025',
    journal: 'Molecular Psychiatry',
    link: '/publications',
  },
  {
    project: 'Mount Sinai Mood & Anxiety',
    description: 'Used digital measures of physical activity and screen time to predict real-world changes in depression and anxiety symptoms, linking passive sensing to clinical outcomes.',
    citation: 'Beltr\u00e1n et al., 2025',
    journal: 'NPJ Digital Medicine',
    link: '/projects#PRJ-0006',
  },
  {
    project: 'SHARP-NIMHANS Cognitive Study',
    description: 'Analyzed longitudinal digital phenotyping correlates of cognitive performance in schizophrenia spectrum disorders across a 12-month study.',
    citation: 'Das et al., 2025',
    journal: 'Schizophrenia Research',
    link: '/projects#PRJ-0030',
  },
];

export default function Analyze() {
  return (
    <Layout
      title="Analyze & Visualize Outcomes"
      description="Transform raw sensor and activity data into meaningful behavioral features with Cortex, an open-source pipeline validated in peer-reviewed research."
    >
      {/* Hero */}
      <header
        className={styles.hero}
        style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)' }}
      >
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>Capability</div>
          <Heading as="h1" className={styles.heroTitle}>
            Analyze & Visualize Outcomes
          </Heading>
          <p className={styles.heroSubtitle}>
            Cortex transforms raw sensor data into meaningful daily behavioral features
            through an open-source pipeline. The outputs have been validated across dozens
            of peer-reviewed studies.
          </p>
        </div>
      </header>

      {/* 1. Cortex Pipeline */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            The Cortex Pipeline
          </Heading>
          <p className={styles.sectionSubtitle}>
            Cortex is mindLAMP's open-source Python library for turning raw sensor and activity
            data into research-ready behavioral features. It processes data through three stages,
            each adding interpretive value.{' '}
            <Link to="/developer/cortex/getting-started">
              Cortex documentation &#8594;
            </Link>
          </p>

          <div className={styles.pipelineDiagram}>
            {pipelineStages.map((stage, i) => (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className={styles.pipelineArrow}>&#8594;</div>
                )}
                <div className={styles.pipelineStage}>
                  <div className={styles.pipelineStageLabel}>
                    {stage.label}
                  </div>
                  <div className={styles.pipelineStageTitle}>
                    {stage.title}
                  </div>
                  <ul className={styles.pipelineStageItems}>
                    {stage.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Transformation narrative */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            From Raw Data to Behavioral Insights
          </Heading>
          <p className={styles.sectionSubtitle}>
            A week of raw sensor data becomes a compact set of behavioral features
            that reveal patterns no single data stream could show alone.
          </p>

          <div className={styles.narrativeStory}>
            <p>
              Thousands of GPS readings become a single daily "home time" value. Accelerometer
              streams become step counts. Screen events become usage duration. Researchers
              run Cortex on their data to extract these features across participants and time periods.
            </p>
          </div>

          <div className={styles.transformationRows}>
            {[
              { raw: '~86,400 GPS readings', output: 'hometime, entropy, trip_distance' },
              { raw: '~432,000 accelerometer samples', output: 'jerk_magnitude' },
              { raw: '144 GPS coverage bins', output: 'data_quality' },
              { raw: '~40 screen on/off events', output: 'screen_duration' },
              { raw: 'Call/SMS metadata events', output: 'call_frequency, text_frequency' },
            ].map((row, i) => (
              <div key={i} className={styles.transformationRow}>
                <div className={styles.transformationRowInput}>{row.raw}</div>
                <div className={styles.transformationRowArrow}>&#8594;</div>
                <div className={styles.transformationRowOutput}>{row.output}</div>
              </div>
            ))}
          </div>

          {/* Cortex visualization examples */}
          <p className={styles.sectionLinks}>
            <Link to="/developer/cortex/features">Full feature reference &#8594;</Link>
          </p>
        </div>
      </section>

      {/* 3. In Practice */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            In Practice
          </Heading>
          <p className={styles.sectionSubtitle}>
            Recent peer-reviewed research using Cortex analysis tools.
          </p>
          <div className={styles.featureGrid}>
            {inPracticeProjects.map((proj, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.projectLabel}>{proj.project}</div>
                <div className={styles.featureCardDescription}>
                  {proj.description}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--ifm-color-emphasis-500)', fontStyle: 'italic', marginTop: '0.75rem' }}>
                  {proj.citation} &mdash; <em>{proj.journal}</em>
                </div>
                <Link
                  to={proj.link}
                  className={styles.guideLink}
                >
                  View project &#8594;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Data Access */}
      <section className={styles.sectionAlt}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Heading as="h2" className={styles.sectionTitle}>
            Data Access
          </Heading>
          <p
            className={styles.sectionSubtitle}
            style={{ margin: '0 auto 2rem' }}
          >
            Access data programmatically in the language you already use.{' '}
            <Link to="/developer/api-sdks/introduction">
              SDK documentation &#8594;
            </Link>
          </p>
          <div className={styles.sdkBar}>
            {sdks.map((sdk, i) => (
              <div key={i} className={styles.sdkItem}>
                <div className={styles.sdkItemName}>{sdk.name}</div>
                <span className={styles.sdkItemInstall}>{sdk.install}</span>
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
            Explore the technical documentation for Cortex, data access, and analysis tools.
          </p>
          <div className={`${styles.featureGrid} ${styles.featureGridTwoCol}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Cortex Getting Started</div>
              <div className={styles.featureCardDescription}>
                Install Cortex, authenticate, and run your first feature extraction.
              </div>
              <Link className={styles.guideLink} to="/developer/cortex/getting-started">
                Read guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Feature Reference</div>
              <div className={styles.featureCardDescription}>
                Complete list of raw, primary, and secondary features with input/output schemas.
              </div>
              <Link className={styles.guideLink} to="/developer/cortex/features">
                View reference &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>API & SDKs</div>
              <div className={styles.featureCardDescription}>
                Python and JavaScript SDKs, REST API, and data access workflows.
              </div>
              <Link className={styles.guideLink} to="/developer/api-sdks">
                Read guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Data Portal</div>
              <div className={styles.featureCardDescription}>
                Browser-based data querying and CSV export for researchers who prefer not to use code.
              </div>
              <Link className={styles.guideLink} to="/dashboard/data-portal">
                Read guide &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Nav */}
      <CapabilityNav current="/capabilities/analyze" />
    </Layout>
  );
}
