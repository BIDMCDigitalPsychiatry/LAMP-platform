import { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// ========== HERO SECTION ==========
function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>Open-source digital health platform</div>
          <Heading as="h1" className={styles.heroTitle}>
            One platform.<br />
            Infinite configurations.
          </Heading>
          <p className={styles.heroSubtitle}>
            mindLAMP is a modular digital health platform backed by 120+ peer-reviewed publications. The same platform supports entirely different
            studies and clinical workflows, with data stored in a uniform schema for cross-study comparison.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.btnPrimary} to="/get-started">
              Request Consultation
            </Link>
            <Link className={styles.btnSecondary} to="/docs">
              Explore Documentation
            </Link>
          </div>
          <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <span className={styles.trustNumber}>50+</span>
              <span className={styles.trustLabel}>Sites Worldwide</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustNumber}>13</span>
              <span className={styles.trustLabel}>Countries</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustNumber}>10</span>
              <span className={styles.trustLabel}>Languages</span>
            </div>
            <div className={styles.trustBadge}>
              <span className={styles.trustNumber}>7</span>
              <span className={styles.trustLabel}>Years</span>
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

// ========== PROBLEM SECTION ==========
function ProblemSection() {
  return (
    <section className={styles.problemSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Why most digital health tools fail
          </Heading>
          <p className={styles.sectionSubtitle}>
            Most digital health tools are built for single studies, creating barriers to reproducible science.
          </p>
        </div>

        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <h3>Incompatible Data</h3>
            <p>
              Each study builds its own app with unique data formats. Results can't be compared
              and infrastructure investment is wasted.
            </p>
          </div>

          <div className={styles.problemCard}>
            <h3>Consumer Apps Lack Rigor</h3>
            <p>
              Popular wellness apps lack research-grade data capture, clinical workflow integration,
              and the transparency research requires.
            </p>
          </div>

          <div className={styles.problemCard}>
            <h3>Expertise Gap</h3>
            <p>
              Even good platforms fail without digital phenotyping experience. Teams struggle with
              study design and avoiding pitfalls that cause data loss.
            </p>
          </div>
        </div>

        <div className={styles.solutionTransition}>
          <p>
            <strong>mindLAMP solves all three.</strong> Not just as software, but as a platform
            with expert support and 7 years of continuous clinical operation.
          </p>
        </div>
      </div>
    </section>
  );
}

// ========== VIDEO SECTION ==========
function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            See how it works
          </Heading>
        </div>
        <div className={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/wnFml3qrLHI"
            title="mindLAMP Platform Overview"
            style={{ border: 'none' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

// ========== HOW IT WORKS SECTION (Dashboard Configuration) ==========
function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Configure Your Study
          </Heading>
          <p className={styles.sectionSubtitle}>
            Use the researcher dashboard to design exactly what participants experience. Rather than hard-coded study logic, mindLAMP represents studies as configurations of reusable building blocks.
          </p>
        </div>

        <div className={styles.howItWorksFlow}>
          {/* Step 1: Choose Data Sources */}
          <div className={styles.howItWorksStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Choose Your Data Sources</h3>
              <p>
                Capture both what participants tell you and what their behavior shows.
                Select which sources to enable for each study group.
              </p>

              <div className={styles.dataSourcesGrid}>
                <div className={styles.dataSourceColumn}>
                  <div className={styles.dataSourceHeader}>
                    <strong>Active Data</strong>
                  </div>
                  <p className={styles.dataSourceSubhead}>What participants complete</p>
                  <div className={styles.buildingBlocksGrid}>
                    <span className={styles.buildingBlock}>Educational Tips & Modules</span>
                    <span className={styles.buildingBlock}>Surveys & EMA</span>
                    <span className={styles.buildingBlock}>Cognitive Games</span>
                    <span className={styles.buildingBlock}>Breathing Exercises</span>
                    <span className={styles.buildingBlock}>Journal Entries</span>
                    <span className={styles.buildingBlock}>Voice Recordings</span>
                    <span className={styles.buildingBlock}>DBT Diary Card</span>
                    <span className={styles.buildingBlock}>Scratch Card</span>
                  </div>
                </div>

                <div className={styles.dataSourceColumn}>
                  <div className={styles.dataSourceHeader}>
                    <strong>Passive Data</strong>
                  </div>
                  <p className={styles.dataSourceSubhead}>Background sensor collection from phone & wearables</p>
                  <div className={styles.buildingBlocksGrid}>
                    <span className={styles.buildingBlock}>GPS</span>
                    <span className={styles.buildingBlock}>Accelerometer</span>
                    <span className={styles.buildingBlock}>Steps & Activity</span>
                    <span className={styles.buildingBlock}>Sleep</span>
                    <span className={styles.buildingBlock}>Heart Rate</span>
                    <span className={styles.buildingBlock}>Calls & Texts</span>
                    <span className={styles.buildingBlock}>Device Events</span>
                    <span className={styles.buildingBlock}>Gyroscope</span>
                    <span className={styles.buildingBlock}>Screen Time</span>
                    <span className={styles.buildingBlock}>Ambient Light</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Configure & Customize */}
          <div className={styles.howItWorksStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Customize the Participant Experience</h3>
              <p>Tailor every aspect of how your study runs</p>
              <div className={styles.configFeaturesExpanded}>
                <div className={styles.configFeature}>
                  <strong>Study Groups</strong>
                  <span>Create multiple groups with different configurations for control vs intervention, different languages, or different protocols</span>
                </div>
                <div className={styles.configFeature}>
                  <strong>Visual Presentation</strong>
                  <span>Choose icons, naming, and page layout</span>
                </div>
                <div className={styles.configFeature}>
                  <strong>Schedules & Notifications</strong>
                  <span>Define when activities appear in the feed, set reminder schedules, and configure push notification timing</span>
                </div>
              </div>

              <div className={styles.customDevNote}>
                <strong>Need more?</strong> With additional funding, the Core team can develop
                new activities, specialized Cortex analysis scripts, or unique features tailored to your research needs.
              </div>

              <Link className={styles.learnMoreLink} to="https://docs.lamp.digital/start_here/overview/">
                View all configuration options →
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.uniformDataHighlight}>
          <div className={styles.uniformDataContent}>
            <h4>Uniform Data Schema Across All Projects</h4>
            <p>
              Despite infinite configuration options, all mindLAMP data is stored in a standardized schema.
              This enables cross-study comparison and cumulative science.
            </p>
            <Link className={styles.learnMoreLink} to="/data_science/intro">
              Explore the data model →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== APP SECTION (What Participants See) ==========
function AppSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            The Participant Experience
          </Heading>
          <p className={styles.sectionSubtitle}>
            Participants engage through a user-friendly iOS and Android app with five configurable tabs. You decide which tabs to enable and what content appears in each.
          </p>
        </div>

        <div className={styles.outputsSubsection}>

          <div className={styles.carouselContainer}>
            <div className={styles.screenshotCarousel}>
              <div className={styles.carouselTrack}>
                <div className={styles.carouselSlide}>
                  <img src="/img/app-feed.png" alt="Feed tab" className={styles.carouselImage} />
                  <div className={styles.carouselLabel}>
                    <h4>Feed</h4>
                    <p>Daily schedule of activities to complete</p>
                  </div>
                </div>
                <div className={styles.carouselSlide}>
                  <img src="/img/app-learn.png" alt="Learn tab" className={styles.carouselImage} />
                  <div className={styles.carouselLabel}>
                    <h4>Learn</h4>
                    <p>Educational tips & modules</p>
                  </div>
                </div>
                <div className={styles.carouselSlide}>
                  <img src="/img/app-assess.png" alt="Assess tab" className={styles.carouselImage} />
                  <div className={styles.carouselLabel}>
                    <h4>Assess</h4>
                    <p>Surveys & cognitive tests</p>
                  </div>
                </div>
                <div className={styles.carouselSlide}>
                  <img src="/img/app-manage.png" alt="Manage tab" className={styles.carouselImage} />
                  <div className={styles.carouselLabel}>
                    <h4>Manage</h4>
                    <p>Wellness tools & journaling</p>
                  </div>
                </div>
                <div className={styles.carouselSlide}>
                  <img src="/img/app-portal.png" alt="Portal tab" className={styles.carouselImage} />
                  <div className={styles.carouselLabel}>
                    <h4>Portal</h4>
                    <p>Personal data & progress</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.carouselNav}>
              <div className={styles.carouselDots}>
                <span className={clsx(styles.carouselDot, styles.carouselDotActive)}></span>
                <span className={styles.carouselDot}></span>
                <span className={styles.carouselDot}></span>
                <span className={styles.carouselDot}></span>
                <span className={styles.carouselDot}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== CORTEX SECTION (Analytics & Data Processing) ==========
function CortexSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Analytics with Cortex
          </Heading>
          <p className={styles.sectionSubtitle}>
            Cortex is a Python library that transforms raw sensor data into meaningful behavioral features. Use it to monitor data quality, run standardized analyses, and generate customized reports.
          </p>
        </div>

        {/* Data Quality Monitoring */}
        <div className={styles.analyticsBlock}>
          <div className={styles.analyticsBlockHeader}>
            <div>
              <h4>Monitor Data Quality</h4>
              <p>Track sensor collection and identify issues in real-time</p>
            </div>
          </div>
          <div className={styles.dataQualityShowcase}>
            <div className={styles.dataQualityImageLarge}>
              <img
                src="/img/data-quality-gps.png"
                alt="GPS data collection heatmap"
                className={styles.qualityImage}
              />
              <p><strong>GPS Collection Heatmap</strong><br/>Visualize coverage by hour and day</p>
            </div>
            <div className={styles.dataQualityImageLarge}>
              <img
                src="/img/data-quality-acc.png"
                alt="Accelerometer sampling rate"
                className={styles.qualityImage}
              />
              <p><strong>Sampling Rate Monitoring</strong><br/>Track against target thresholds</p>
            </div>
          </div>
          <p className={styles.analyticsBlockNote}>
            Catch sensor issues, permission problems, and engagement drops before losing data.
          </p>
        </div>

        {/* Feature Extraction Pipeline */}
        <div className={styles.analyticsBlock}>
          <div className={styles.analyticsBlockHeader}>
            <div>
              <h4>Extract Behavioral Features</h4>
              <p>Transform raw sensor streams into research-ready metrics</p>
            </div>
          </div>
          <div className={styles.cortexPipelineVisual}>
            <div className={styles.pipelineStep}>
              <div className={styles.pipelineStepLabel}>Raw Data</div>
              <div className={styles.pipelineStepDesc}>GPS coordinates, accelerometer readings, screen events</div>
            </div>
            <div className={styles.pipelineArrow}>→</div>
            <div className={styles.pipelineStep}>
              <div className={styles.pipelineStepLabel}>Primary Features</div>
              <div className={styles.pipelineStepDesc}>Trips, screen bouts, significant locations</div>
            </div>
            <div className={styles.pipelineArrow}>→</div>
            <div className={styles.pipelineStep}>
              <div className={styles.pipelineStepLabel}>Secondary Features</div>
              <div className={styles.pipelineStepDesc}>Daily hometime, trip distance, location entropy</div>
            </div>
          </div>
          <div className={styles.cortexMetricSamples}>
            <span>Hometime</span>
            <span>Trip Distance</span>
            <span>Screen Duration</span>
            <span>Location Entropy</span>
            <span>Sleep Patterns</span>
            <span>Step Counts</span>
          </div>
          <div className={styles.textCenter}>
            <Link className={styles.learnMoreLink} to="/data_science/cortex/getting-started">
              Explore Cortex documentation →
            </Link>
          </div>
        </div>

        {/* Customized Reports */}
        <div className={styles.analyticsBlock}>
          <div className={styles.analyticsBlockHeader}>
            <div>
              <h4>Generate Custom Reports</h4>
              <p>Create visualizations for dashboards, patient portals, or clinical handouts</p>
            </div>
          </div>
          <div className={styles.reportCarouselContainer}>
            <div className={styles.reportCarousel}>
              <div className={styles.reportCarouselTrack}>
                <div className={styles.reportCarouselSlide}>
                  <img src="/img/report-snippet-1.png" alt="Data quality gauges" className={styles.reportCarouselImage} />
                  <p className={styles.reportCarouselCaption}>Data quality tracking with completion gauges</p>
                </div>
                <div className={styles.reportCarouselSlide}>
                  <img src="/img/report-snippet-2.png" alt="Symptom trends" className={styles.reportCarouselImage} />
                  <p className={styles.reportCarouselCaption}>Longitudinal symptom trends (PHQ-9, GAD-7)</p>
                </div>
                <div className={styles.reportCarouselSlide}>
                  <img src="/img/report-snippet-3.png" alt="Feature correlation matrix" className={styles.reportCarouselImage} />
                  <p className={styles.reportCarouselCaption}>Feature correlation matrix</p>
                </div>
                <div className={styles.reportCarouselSlide}>
                  <img src="/img/report-snippet-4.png" alt="Behavioral correlations" className={styles.reportCarouselImage} />
                  <p className={styles.reportCarouselCaption}>Passive data correlated with active symptoms</p>
                </div>
              </div>
            </div>
            <div className={styles.reportCarouselNav}>
              <div className={styles.carouselDots}>
                <span className={clsx(styles.carouselDot, styles.carouselDotActive)}></span>
                <span className={styles.carouselDot}></span>
                <span className={styles.carouselDot}></span>
                <span className={styles.carouselDot}></span>
              </div>
            </div>
            <p className={styles.carouselHint}>Swipe to view report examples</p>
            <div className={styles.reportBenefits}>
              <p><strong>For participants:</strong> Understand patterns and track progress</p>
              <p><strong>For clinicians:</strong> Identify concerning changes between visits</p>
              <p><strong>For researchers:</strong> Export data for deeper analysis</p>
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
      highlight: 'Multi-language EMA + passive sensing in 9 languages',
      color: '#5b9bfc',
    },
    {
      name: 'PREDiCTOR',
      institution: 'Mount Sinai + IBM Research',
      population: 'Youth (15-30) seeking mental health care',
      highlight: 'AI prediction using smartphone + clinical interview data',
      color: '#9C27B0',
    },
    {
      name: 'Digital Clinic',
      institution: 'Beth Israel Deaconess',
      population: 'Depression & anxiety patients',
      highlight: '7 years of continuous clinical operation',
      color: '#3dbf8f',
    },
    {
      name: 'SHARP',
      institution: 'Boston, Bengaluru, Bhopal',
      population: 'Adults with schizophrenia',
      highlight: 'Relapse prediction via 12-month monitoring',
      color: '#FF9800',
    },
    {
      name: 'CAPTURE-AD',
      institution: 'Butler Hospital',
      population: 'Older adults (60-77) with/without MCI',
      highlight: '90% passive data capture rate',
      color: '#E91E63',
    },
    {
      name: 'SMART-A',
      institution: 'Beth Israel Deaconess',
      population: 'MCI and mild Alzheimer\'s patients',
      highlight: '6 novel cognitive tasks for early AD detection',
      color: '#795548',
    },
    {
      name: 'momLAMP',
      institution: 'Brigham & Women\'s Hospital',
      population: 'Women with postpartum anxiety',
      highlight: '8-week CBT/ACT with high engagement',
      color: '#F06292',
    },
    {
      name: 'Safeguard',
      institution: 'Henry M Jackson Foundation',
      population: 'U.S. Army soldiers',
      highlight: 'Life skills training for suicide prevention',
      color: '#607D8B',
    },
  ];

  const findings = [
    {
      title: 'Relapse Prediction',
      finding: 'Anomaly detection achieved clinically significant prediction of symptom exacerbation, with GPS-derived mobility showing strongest signal.',
      citation: 'Cohen et al., 2023',
    },
    {
      title: 'Convergent Validity',
      finding: 'App-based mood ratings correlated r=0.80 with clinician-administered assessments.',
      citation: 'Torous et al., 2019',
    },
    {
      title: 'Participant Engagement',
      finding: 'Studies report 60-80% survey completion rates across diverse populations over multi-week protocols.',
      citation: 'Multiple studies, 2018-2024',
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
            120+ peer-reviewed publications across 50+ sites demonstrate that the modular approach works.
          </p>
        </div>

        <div className={styles.projectsGridCompact}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCardCompact} style={{ borderLeftColor: project.color }}>
              <h3>{project.name}</h3>
              <p className={styles.projectInst}>{project.institution}</p>
              <p className={styles.projectPop}>{project.population}</p>
              <p className={styles.projectHighlight}>{project.highlight}</p>
            </div>
          ))}
        </div>

        <div className={styles.domainsStrip}>
          <h4>Research Domains</h4>
          <div className={styles.domainTags}>
            <span>Schizophrenia</span>
            <span>Depression</span>
            <span>Anxiety</span>
            <span>Bipolar</span>
            <span>Dementia</span>
            <span>PTSD</span>
            <span>Postpartum</span>
            <span>Veterans</span>
            <span>College Students</span>
            <span>Chronic Pain</span>
            <span>Dermatology</span>
            <span>Cardiology</span>
          </div>
        </div>

        <div className={styles.findingsSection}>
          <h3>Selected Research Findings</h3>
          <div className={styles.findingsList}>
            {findings.map((item, idx) => (
              <div key={idx} className={styles.findingItem}>
                <h4>{item.title}</h4>
                <p>{item.finding}</p>
                <cite>{item.citation}</cite>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.textCenter}>
          <Link className={styles.btnPrimaryAlt} to="/publications">
            Browse All Publications
          </Link>
        </div>
      </div>
    </section>
  );
}

// ========== WHO IT SERVES SECTION ==========
function AudienceSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Who it serves
          </Heading>
        </div>

        <div className={styles.audienceCards}>
          <div className={styles.audienceCard}>
            <h3>Research Teams</h3>
            <ul>
              <li>Real-time data quality monitoring</li>
              <li>Multi-site consistency across 50+ locations</li>
              <li>Standardized schemas for cross-study comparison</li>
              <li>Cortex analytics pipeline for behavioral analysis</li>
            </ul>
          </div>

          <div className={styles.audienceCard}>
            <h3>Clinical Programs</h3>
            <ul>
              <li>Spot concerning patterns before crisis</li>
              <li>Data-informed conversations with patients</li>
              <li>Track progress with objective evidence</li>
              <li>Dashboards highlight who needs attention</li>
            </ul>
          </div>

          <div className={styles.audienceCard}>
            <h3>Participants</h3>
            <ul>
              <li>In-your-pocket accessibility to studies & interventions</li>
              <li>Personalized reports</li>
              <li>See how behaviors connect to mood</li>
              <li>Understand trends over time</li>
              <li>Review reports with care team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== WHY MINDLAMP SECTION ==========
function WhySection() {
  const reasons = [
    {
      title: 'Truly Modular',
      description: 'Configure activities, schedules, study groups, app layout, and phone/wearable sensor data collection without writing code.',
      color: '#5b9bfc',
    },
    {
      title: 'Proactive Quality',
      description: 'Real-time monitoring catches issues before data loss. Troubleshoot proactively.',
      color: '#3dbf8f',
    },
    {
      title: 'Uniform Data',
      description: 'All configurations produce the same schema. Compare across studies and reproduce methods.',
      color: '#9C27B0',
    },
    {
      title: 'Open Source',
      description: 'Inspect, modify, and extend the code. Adapt as your needs evolve.',
      color: '#FF9800',
    },
    {
      title: '10 Languages Supported',
      description: 'English, Spanish, French, Hindi, German, Italian, Korean, Danish, and Chinese.',
      color: '#E91E63',
    },
    {
      title: 'Flexible Deployment',
      description: 'Shared infrastructure, dedicated instances, or self-hosted for data residency requirements.',
      color: '#607D8B',
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Why teams choose mindLAMP
          </Heading>
        </div>

        <div className={styles.whyGrid}>
          {reasons.map((reason, idx) => (
            <div key={idx} className={styles.whyCard} style={{ borderTopColor: reason.color }}>
              <h4>{reason.title}</h4>
              <p>{reason.description}</p>
            </div>
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
            The mindLAMP Core team provides expert support from study design through analysis.
          </p>
        </div>

        <div className={styles.coreSteps}>
          <div className={styles.coreStep}>
            <div className={styles.coreStepNum}>1</div>
            <h4>Consult</h4>
            <p>Map your goals to configuration options</p>
          </div>
          <div className={styles.coreStep}>
            <div className={styles.coreStepNum}>2</div>
            <h4>Design</h4>
            <p>Optimize protocol based on prior studies</p>
          </div>
          <div className={styles.coreStep}>
            <div className={styles.coreStepNum}>3</div>
            <h4>Configure</h4>
            <p>Technical configuration to align with institutional requirements</p>
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
            The Core team at Beth Israel Deaconess Medical Center has supported projects
            across diverse domains, bringing operational expertise so you can focus on your research.
          </p>
        </div>

        <div className={styles.textCenter}>
          <Link className={styles.btnLight} to="/get-started">
            Learn About Core Services
          </Link>
        </div>
      </div>
    </section>
  );
}

// ========== CTA SECTION ==========
function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2" className={styles.ctaTitle}>
          Get started
        </Heading>

        <div className={styles.ctaOptions}>
          <div className={styles.ctaOption}>
            <h3>Request a Consultation</h3>
            <p>Discuss your needs, see examples from similar projects, and determine fit.</p>
            <Link className={styles.ctaOptionButton} to="/get-started">
              Schedule Free Consultation
            </Link>
          </div>

          <div className={styles.ctaOption}>
            <h3>Explore Documentation</h3>
            <p>Review configuration options, analytics, API schemas, and open-source code.</p>
            <Link className={styles.ctaOptionButtonAlt} to="/docs">
              Browse Documentation
            </Link>
          </div>
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
      description="mindLAMP is a modular open-source platform backed by 120+ publications. Configure exactly what participants experience. One platform supports entirely different studies with uniform data schema."
    >
      <HeroSection />
      <main>
        <ProblemSection />
        <WhySection />
        <VideoSection />
        <HowItWorksSection />
        <AppSection />
        <CortexSection />
        <EvidenceSection />
        <AudienceSection />
        <CoreSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
