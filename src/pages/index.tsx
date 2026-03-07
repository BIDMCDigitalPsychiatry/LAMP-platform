import { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import { capabilityPages } from '@site/src/components/capabilityPages';

// ========== HERO SECTION ==========
function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>BIDMC / Harvard Medical School</div>
          <Heading as="h1" className={styles.heroTitle}>
            mindLAMP
          </Heading>
          <p className={styles.heroValueProp}>
            An open-source platform for mobile health research and clinical care
          </p>
          <p className={styles.heroSubtitle}>
            Everything you need to run a digital health program, from participant-facing
            tools to data analysis, with one consistent data format.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.btnPrimary} to="/get-started">
              Request Consultation
            </Link>
            <Link className={styles.btnSecondary} to="/#capabilities">
              Explore Capabilities
            </Link>
          </div>
          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <span className={styles.trustNumber}>13</span>
              <span className={styles.trustLabel}>Countries</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustNumber}>10</span>
              <span className={styles.trustLabel}>Languages</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustNumber}>120+</span>
              <span className={styles.trustLabel}>Publications</span>
            </div>
          </div>
        </div>
        <div className={styles.heroLogo}>
          <img src="/img/logo.svg" alt="mindLAMP" className={styles.heroLogoImg} />
        </div>
      </div>
    </header>
  );
}

// ========== CAPABILITY IMAGE COMPOSITIONS ==========
const capabilityImages: Record<string, ReactNode> = {
  '/capabilities/collect': (
    <div className={styles.collectLayout}>
      {/* Two phones fanning out with watch centered between them */}
      <div className={styles.collectDevices}>
        <div className={clsx(styles.collectPhone, styles.collectPhoneLeft)}>
          <div className={styles.fanPhoneBezel}>
            <div className={styles.iphoneDynamicIsland} />
            <div className={styles.fanPhoneScreen}>
              <img src="/assets/projects/smart-a/trails-b-gameplay.png" alt="Trails B cognitive game" />
            </div>
          </div>
          <div className={styles.deviceLabel}>Cognitive Games</div>
        </div>
        <div className={styles.collectWatch}>
          <div className={styles.watchFrame}>
            <div className={styles.watchBand} />
            <div className={styles.watchBody}>
              <div className={styles.watchCrown} />
              <div className={styles.watchScreenInner}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ef4444" strokeWidth="2.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                <div className={styles.watchBpm}>72 <small>bpm</small></div>
                <div className={styles.watchStats}>
                  <span>4,280 steps</span>
                  <span>HRV 42ms</span>
                </div>
                <div className={styles.watchRings}>
                  <svg viewBox="0 0 60 60" width="44" height="44">
                    <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="3" />
                    <circle cx="30" cy="30" r="26" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="130 164" strokeLinecap="round" transform="rotate(-90 30 30)" />
                    <circle cx="30" cy="30" r="21" fill="none" stroke="rgba(52,211,153,0.2)" strokeWidth="3" />
                    <circle cx="30" cy="30" r="21" fill="none" stroke="#34d399" strokeWidth="3" strokeDasharray="100 132" strokeLinecap="round" transform="rotate(-90 30 30)" />
                    <circle cx="30" cy="30" r="16" fill="none" stroke="rgba(96,165,250,0.2)" strokeWidth="3" />
                    <circle cx="30" cy="30" r="16" fill="none" stroke="#60a5fa" strokeWidth="3" strokeDasharray="75 100" strokeLinecap="round" transform="rotate(-90 30 30)" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.watchBand} />
          </div>
          <div className={styles.deviceLabel}>Wearable</div>
        </div>
        <div className={clsx(styles.collectPhone, styles.collectPhoneRight)}>
          <div className={styles.fanPhoneBezel}>
            <div className={styles.iphoneDynamicIsland} />
            <div className={styles.fanPhoneScreen}>
              <img src="/assets/projects/digital-clinic/survey-likert-question.png" alt="Weekly Depression Survey question" />
            </div>
          </div>
          <div className={styles.deviceLabel}>Surveys</div>
        </div>
      </div>
      {/* Passive sensor tags */}
      <div className={styles.collectSensorSection}>
        <div className={styles.collectSensorLabel}>Passive Sensors</div>
        <div className={styles.collectSensors}>
        <div className={styles.collectSensorTag}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
          GPS
        </div>
        <div className={styles.collectSensorTag}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12h4l3-9 6 18 3-9h4"/></svg>
          Accelerometer
        </div>
        <div className={styles.collectSensorTag}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round"/></svg>
          Screen Time
        </div>
        <div className={styles.collectSensorTag}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 9.41a16 16 0 006.5 6.5l1.24-1.24a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z"/></svg>
          Calls
        </div>
        <div className={styles.collectSensorTag}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          Heart Rate
        </div>
        <div className={styles.collectSensorTag}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
          Steps
        </div>
        <div className={styles.collectSensorTag}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          Sleep
        </div>
        <div className={styles.collectSensorTag}>
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          Gyroscope
        </div>
        </div>
      </div>
    </div>
  ),
  '/capabilities/experience': (
    <div className={styles.experienceFan}>
      <div className={clsx(styles.fanPhone, styles.fanPhoneLeft)}>
        <div className={styles.fanPhoneBezel}>
          <div className={styles.iphoneDynamicIsland} />
          <div className={styles.fanPhoneScreen}>
            <img src="/img/experience/breathe.png" alt="Breathe intervention" />
          </div>
        </div>
      </div>
      <div className={clsx(styles.fanPhone, styles.fanPhoneCenter)}>
        <div className={styles.fanPhoneBezel}>
          <div className={styles.iphoneDynamicIsland} />
          <div className={styles.fanPhoneScreen}>
            <img src="/img/app-feed.png" alt="mindLAMP Feed tab" />
          </div>
        </div>
      </div>
      <div className={clsx(styles.fanPhone, styles.fanPhoneRight)}>
        <div className={styles.fanPhoneBezel}>
          <div className={styles.iphoneDynamicIsland} />
          <div className={styles.fanPhoneScreen}>
            <img src="/img/experience/journal.png" alt="Journal activity" />
          </div>
        </div>
      </div>
    </div>
  ),
  '/capabilities/configure': (
    <div className={styles.configureComposition}>
      {/* Central hub branching to groups */}
      <div className={styles.configureHub}>
        <div className={styles.configureHubCenter}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
          </svg>
          <span>1 Platform</span>
        </div>
        <div className={styles.configureHubLines}>
          <div className={styles.configureHubLine} />
          <div className={styles.configureHubLine} />
          <div className={styles.configureHubLine} />
        </div>
        <div className={styles.configureGroups}>
          {[
            { name: 'Groups', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
            { name: 'Scheduling', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#3b82f6" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg> },
            { name: 'Languages', icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10b981" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
          ].map((g) => (
            <div key={g.name} className={styles.configureGroup}>
              <div className={styles.configureGroupIcon}>{g.icon}</div>
              <div className={styles.configureGroupName}>{g.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  '/capabilities/monitor': (
    <div className={styles.monitorComposition}>
      {/* Gauge charts */}
      <div className={styles.monitorCard}>
        <img src="/img/monitor/engagement-gauges.png" alt="Data Quality, Survey Completion, and Skill Practices gauges" />
      </div>
      {/* Participant cards with active/passive indicators */}
      <div className={styles.monitorParticipants}>
        <div className={styles.monitorParticipantCard}>
          <div className={styles.monitorParticipantInfo}>
            <span className={styles.monitorParticipantName}>U0310713415</span>
            <span className={styles.monitorParticipantGroup}>Cohort A</span>
          </div>
          <div className={styles.monitorIndicators}>
            <span className={styles.monitorBtnYellow}>Last Passive</span>
            <span className={styles.monitorBtnGreen}>Last Active</span>
          </div>
        </div>
        <div className={styles.monitorParticipantCard}>
          <div className={styles.monitorParticipantInfo}>
            <span className={styles.monitorParticipantName}>U2360822259</span>
            <span className={styles.monitorParticipantGroup}>Cohort B</span>
          </div>
          <div className={styles.monitorIndicators}>
            <span className={styles.monitorBtnRed}>Last Passive</span>
            <span className={styles.monitorBtnRed}>Last Active</span>
          </div>
        </div>
      </div>
      {/* Data quality heatmap */}
      <div className={styles.monitorCard}>
        <img src="/img/data-quality-gps.png" alt="GPS data quality heatmap showing data received over time" />
      </div>
    </div>
  ),
  '/capabilities/analyze': (
    <div className={styles.analyzeStack}>
      {/* Side-by-side visualizations */}
      <div className={styles.analyzeRow}>
        <div className={styles.analyzeCard}>
          <img src="/img/monitor/sleep-patterns.png" alt="Last week's sleeping patterns showing onset and wake times by day" />
        </div>
        <div className={styles.analyzeCard}>
          <img src="/img/report-snippet-3.png" alt="Correlation matrix of behavioral features" />
        </div>
      </div>
      {/* Pipeline strip */}
      <div className={styles.analyzePipeline}>
        <span className={styles.pipelineStep}>Raw Sensors</span>
        <span className={styles.pipelineArrow} />
        <span className={styles.pipelineStep}>Cortex Features</span>
        <span className={styles.pipelineArrow} />
        <span className={styles.pipelineStep}>Insights</span>
      </div>
    </div>
  ),
};

// ========== CAPABILITIES OVERVIEW SECTION ==========
function CapabilitiesOverviewSection() {
  return (
    <section id="capabilities" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            What you can do with mindLAMP
          </Heading>
          <p className={styles.sectionSubtitle}>
            From data collection to actionable insights, mindLAMP covers every step.
            Explore each capability to see real-world examples and how-to guides.
          </p>
        </div>
      </div>

      <div className={styles.capabilityShowcase}>
        {capabilityPages.map((page, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div key={page.route} className={styles.capabilityPanel}>
              <div className={clsx(styles.capabilityPanelInner, reversed && styles.capabilityPanelReversed)}>
                <div className={styles.capabilityText}>
                  <div className={styles.capabilityAccent} style={{ background: page.color }} />
                  <h3 className={styles.capabilityTitle}>{page.title}</h3>
                  <p className={styles.capabilityDescription}>{page.description}</p>
                  <div className={styles.capabilityPills}>
                    {page.pills.map((pill) => (
                      <span key={pill} className={styles.capabilityPill} style={{ borderColor: page.color, color: page.color }}>
                        {pill}
                      </span>
                    ))}
                  </div>
                  <Link className={styles.capabilityExplore} to={page.route} style={{ color: page.color }}>
                    Explore <span className={styles.capabilityExploreArrow}>&#8594;</span>
                  </Link>
                </div>
                <div className={styles.capabilityImageSide}>
                  {capabilityImages[page.route]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container">
        <div className={styles.audienceRouter}>
          <div className={styles.audienceRouterTitle}>Not sure where to start?</div>
          <div className={styles.audienceRouterGrid}>
            <div className={styles.audienceRouterCard}>
              <div className={styles.audienceRouterCardAccent} style={{ background: '#3b82f6' }} />
              <h4 className={styles.audienceRouterCardTitle}>Writing a grant?</h4>
              <p className={styles.audienceRouterCardText}>
                Start with{' '}
                <Link to="/capabilities/collect">Collect Rich Data</Link> and{' '}
                <Link to="/capabilities/analyze">Analyze & Visualize Outcomes</Link> to describe your data strategy.
              </p>
            </div>
            <div className={styles.audienceRouterCard}>
              <div className={styles.audienceRouterCardAccent} style={{ background: '#10b981' }} />
              <h4 className={styles.audienceRouterCardTitle}>Evaluating for clinical use?</h4>
              <p className={styles.audienceRouterCardText}>
                See{' '}
                <Link to="/capabilities/experience">Engage Participants</Link> and{' '}
                <Link to="/capabilities/monitor">Monitor Engagement</Link> for clinical workflows.
              </p>
            </div>
            <div className={styles.audienceRouterCard}>
              <div className={styles.audienceRouterCardAccent} style={{ background: '#f59e0b' }} />
              <h4 className={styles.audienceRouterCardTitle}>Ready to implement?</h4>
              <p className={styles.audienceRouterCardText}>
                Jump to{' '}
                <Link to="/capabilities/configure">Customize & Scale</Link> to see deployment and configuration options.
              </p>
            </div>
            <div className={styles.audienceRouterCard}>
              <div className={styles.audienceRouterCardAccent} style={{ background: '#64cebf' }} />
              <h4 className={styles.audienceRouterCardTitle}>Looking for technical docs?</h4>
              <p className={styles.audienceRouterCardText}>
                Browse the{' '}
                <Link to="/docs">full documentation</Link> for app guides, API reference, and developer resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== EVIDENCE & PROJECTS SECTION (Combined) ==========
function EvidenceSection() {
  const projects = [
    {
      name: 'AMP SCZ',
      institution: '43 sites, 5 continents',
      population: '2,600+ youth at clinical high risk for psychosis',
      highlight: 'Daily check-ins and continuous sensor data collection in 9 languages',
      color: '#86b6ff', // mindlamp-blue
      link: '/projects#PRJ-0001',
    },
    {
      name: 'PREDiCTOR',
      institution: 'Mount Sinai + IBM Research',
      population: 'Youth (15-30) seeking mental health care',
      highlight: 'Predicting outcomes using smartphone and clinical interview data',
      color: '#64cebf', // mindlamp-teal
      link: '/projects#PRJ-0035',
    },
    {
      name: 'Digital Clinic',
      institution: 'Beth Israel Deaconess',
      population: 'Depression & anxiety patients',
      highlight: '7 years of continuous clinical operation',
      color: '#ff775c', // mindlamp-coral
      link: '/projects#PRJ-0003',
    },
    {
      name: 'SHARP',
      institution: 'Boston, Bengaluru, Bhopal',
      population: 'Adults with schizophrenia',
      highlight: 'Relapse prediction via 12-month monitoring',
      color: '#ffd645', // mindlamp-yellow
      link: '/projects#PRJ-0002',
    },
    {
      name: 'CAPTURE-AD',
      institution: 'Butler Hospital',
      population: 'Older adults (60-77) with/without mild cognitive impairment',
      highlight: '90% continuous data capture rate',
      color: '#86b6ff', // mindlamp-blue
      link: '/projects#PRJ-0036',
    },
    {
      name: 'SMART-A',
      institution: 'Beth Israel Deaconess',
      population: 'Mild cognitive impairment and early Alzheimer\'s patients',
      highlight: '6 novel cognitive tasks for early detection of cognitive decline',
      color: '#64cebf', // mindlamp-teal
      link: '/projects#PRJ-0034',
    },
    {
      name: 'momLAMP',
      institution: 'Brigham & Women\'s Hospital',
      population: 'Women with postpartum anxiety',
      highlight: '8-week therapy program delivered through the app with high engagement',
      color: '#ff775c', // mindlamp-coral
      link: '/projects#PRJ-0032',
    },
    {
      name: 'Safeguard',
      institution: 'Henry M Jackson Foundation',
      population: 'U.S. Army soldiers',
      highlight: 'Life skills training for suicide prevention',
      color: '#ffd645', // mindlamp-yellow
      link: '/projects#PRJ-0033',
    },
  ];


  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Proven across diverse contexts
          </Heading>
          <p className={styles.sectionSubtitle}>
          </p>
        </div>

        <div className={styles.projectsGridCompact}>
          {projects.map((project, idx) => (
            <Link key={idx} className={styles.projectCardCompact} to={project.link} style={{ borderLeftColor: project.color, textDecoration: 'none', color: 'inherit' }}>
              <h3>{project.name}</h3>
              <p className={styles.projectInst}>{project.institution}</p>
              <p className={styles.projectPop}>{project.population}</p>
              <p className={styles.projectHighlight}>{project.highlight}</p>
            </Link>
          ))}
        </div>

        <div className={styles.domainsStrip}>
          <div className={styles.domainTags}>
            {['Schizophrenia', 'Depression', 'Anxiety', 'Bipolar', 'Dementia', 'PTSD',
              'Postpartum', 'Veterans', 'College Students', 'Chronic Pain', 'Dermatology', 'Cardiology',
            ].map((d) => (
              <span key={d} className={styles.domainTag}>{d}</span>
            ))}
          </div>
        </div>

        <div className={styles.textCenter} style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link className={styles.btnPrimaryAlt} to="/projects">
            View All Projects
          </Link>
          <Link className={styles.btnPrimaryAlt} to="/publications">
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  );
}

// ========== WHY MINDLAMP SECTION (combines audience + differentiators) ==========
function WhySection() {
  const reasons = [
    {
      title: 'Truly Modular',
      description: 'Configure activities, schedules, groups, app layout, and sensor collection without writing code.',
      color: '#86b6ff',
      link: '/capabilities/configure',
    },
    {
      title: 'Consistent Data Format',
      description: 'Every project produces data in the same structure, making it easy to compare across sites and populations.',
      color: '#64cebf',
      link: '/capabilities/collect',
    },
    {
      title: 'Real-Time Quality Monitoring',
      description: 'Catch missing data before it becomes a problem. Dashboards flag participants who need outreach.',
      color: '#ff775c',
      link: '/capabilities/monitor',
    },
    {
      title: 'Open Source',
      description: 'Inspect, modify, and extend the code. Adapt the platform as your needs evolve.',
      color: '#ffd645',
      link: 'https://github.com/BIDMCDigitalPsychiatry',
    },
    {
      title: '10 Languages',
      description: 'English, Spanish, French, Hindi, German, Italian, Korean, Danish, Chinese (Simplified & Traditional).',
      color: '#86b6ff',
      link: '/capabilities/experience',
    },
    {
      title: 'Expert Support',
      description: 'The Core team at BIDMC guides you from initial setup through ongoing operation and troubleshooting.',
      color: '#64cebf',
      link: '/get-started',
    },
  ];

  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Why teams choose mindLAMP
          </Heading>
        </div>

        <div className={styles.whyGrid}>
          {reasons.map((reason, idx) => (
            <Link key={idx} className={styles.whyCard} to={reason.link} style={{ borderTopColor: reason.color, textDecoration: 'none', color: 'inherit' }}>
              <h4>{reason.title}</h4>
              <p>{reason.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== CORE SERVICE SECTION ==========
function CoreSection() {
  return (
    <section className={clsx(styles.section, styles.sectionCore)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitleLight}>
            How we support you
          </Heading>
          <p className={styles.sectionSubtitleLight}>
            The mindLAMP Core team at Beth Israel Deaconess Medical Center provides expert support at every stage of your project.
          </p>
        </div>

        <div className={styles.coreSteps}>
          <div className={styles.coreStep}>
            <div className={styles.coreStepNum}>1</div>
            <h4>Consult</h4>
            <p>Understand your goals and identify the right approach</p>
          </div>
          <div className={styles.coreStep}>
            <div className={styles.coreStepNum}>2</div>
            <h4>Design</h4>
            <p>Plan your setup based on what has worked in similar projects</p>
          </div>
          <div className={styles.coreStep}>
            <div className={styles.coreStepNum}>3</div>
            <h4>Configure</h4>
            <p>Set up the platform to match your specific requirements</p>
          </div>
          <div className={styles.coreStep}>
            <div className={styles.coreStepNum}>4</div>
            <h4>Monitor</h4>
            <p>Track quality and engagement in real-time</p>
          </div>
          <div className={styles.coreStep}>
            <div className={styles.coreStepNum}>5</div>
            <h4>Support</h4>
            <p>Ongoing troubleshooting and assistance</p>
          </div>
        </div>

        <div className={styles.coreNote}>
          <p>
            With 8+ years of continuous clinical and research operation, the Core team brings
            operational expertise so you can focus on what matters.
          </p>
        </div>

        <div className={styles.textCenter}>
          <Link className={styles.btnLight} to="/get-started">
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

// ========== MAIN COMPONENT ==========
export default function Home(): ReactNode {
  return (
    <Layout
      title="Modular Digital Health Platform"
      description="mindLAMP is an open-source platform for mobile health research and clinical care. Everything you need to run a digital health program, from participant-facing tools to data analysis, with one consistent data format."
    >
      <HeroSection />
      <main>
        <CapabilitiesOverviewSection />
        <EvidenceSection />
        <WhySection />
        <CoreSection />
      </main>
    </Layout>
  );
}
