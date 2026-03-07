import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './capabilities.module.css';
import { CapabilityNav } from '@site/src/components/capabilityPages';

/* ============================================================
   DATA
   ============================================================ */

const btnClassMap: Record<string, string> = {
  green: styles.monitorDashBtn_green,
  yellow: styles.monitorDashBtn_yellow,
  red: styles.monitorDashBtn_red,
  gray: styles.monitorDashBtn_gray,
};

export default function Monitor() {
  return (
    <Layout title="Monitor Engagement" description="Track data quality, participant engagement, and progress through dashboards, visualizations, and Cortex data quality analysis.">
      {/* Hero */}
      <header className={styles.hero} style={{ background: 'linear-gradient(135deg, #0d9488 0%, #5eead4 100%)' }}>
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>Capability</div>
          <Heading as="h1" className={styles.heroTitle}>
            Monitor Engagement
          </Heading>
          <p className={styles.heroSubtitle}>
            Participants, coordinators, and data scientists each get the level of visibility
            they need, from personal progress tracking to programmatic data quality analysis.
          </p>
        </div>
      </header>

      {/* 1. Dashboard Indicators */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Spot Problems Early
          </Heading>
          <p className={styles.sectionSubtitle}>
            The dashboard shows color-coded indicators for every participant. Two buttons per
            card show when they last sent passive sensor data and when they last opened the app.
          </p>

          {/* SVG participant cards replicating dashboard pattern */}
          <div className={styles.monitorDashboardPreview}>
            {[
              { id: 'U0310713415', group: 'Cohort A', passive: 'green', active: 'green' },
              { id: 'U2360822259', group: 'Cohort B', passive: 'yellow', active: 'green' },
              { id: 'U8841029371', group: 'Cohort A', passive: 'red', active: 'red' },
              { id: 'U5572910483', group: 'Cohort C', passive: 'gray', active: 'gray' },
            ].map((p) => (
              <div key={p.id} className={styles.monitorDashCard}>
                <div className={styles.monitorDashCardInfo}>
                  <span className={styles.monitorDashCardId}>{p.id}</span>
                  <span className={styles.monitorDashCardGroup}>{p.group}</span>
                </div>
                <div className={styles.monitorDashCardBtns}>
                  <span className={btnClassMap[p.passive]}>Last Passive</span>
                  <span className={btnClassMap[p.active]}>Last Active</span>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.sectionLinks}>
            <Link to="/dashboard/users-tab">Users tab documentation &#8594;</Link>
          </p>
        </div>
      </section>

      {/* 2. Participant Portal */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Participants See Their Own Data
          </Heading>
          <p className={styles.sectionSubtitle}>
            The Portal tab gives participants a view of their own activity history,
            survey trends, and sensor-derived behavioral features. Clinicians see the
            same view when reviewing a participant, making it a shared reference point
            during check-ins.
          </p>

          <div className={styles.monitorPortalColumns}>
            <div className={styles.monitorPortalColumn}>
              <div className={styles.tabShowcaseFrame} style={{ width: '200px' }}>
                <img
                  className={styles.tabShowcaseImage}
                  src="/img/app-portal.png"
                  alt="mindLAMP Portal tab showing activity history"
                />
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureCardTitle}>Activity history and survey trends</div>
                <div className={styles.featureCardDescription}>
                  Completed activities with date filtering, response scores over time, and
                  question-level breakdowns via the grid icon.
                </div>
              </div>
            </div>
            <div className={styles.monitorPortalColumn}>
              <div className={styles.tabShowcaseFrame} style={{ width: '200px' }}>
                <img
                  className={styles.tabShowcaseImage}
                  src="/img/app-portal-cortex.png"
                  alt="mindLAMP Portal tab showing Cortex visualizations"
                />
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureCardTitle}>Cortex visualizations</div>
                <div className={styles.featureCardDescription}>
                  Scatter plots, heatmaps, and behavioral feature charts generated
                  by the Cortex pipeline.
                </div>
              </div>
            </div>
          </div>

          <p className={styles.sectionLinks}>
            <Link to="/app/app-tabs/portal">Portal tab documentation &#8594;</Link>
          </p>
        </div>
      </section>

      {/* 3. Data Quality with Cortex */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Quantify Data Quality
          </Heading>
          <p className={styles.sectionSubtitle}>
            Cortex automatically evaluates how much sensor data each participant is generating,
            so you know whether the data is dense enough to compute reliable behavioral features.
          </p>

          {/* Cortex visualization outputs */}
          <div className={styles.screenshotCompare}>
            <div className={styles.screenshotPanel}>
              <img
                className={styles.screenshotImage}
                src="/img/cortex-visualizations/passive_scatter.png"
                alt="GPS data quality scatter plot showing collection rate over time"
              />
              <div className={styles.screenshotLabel}>GPS Scatter Plot</div>
              <div className={styles.screenshotCaption}>
                Data entries per time window, with reference line for target rate
              </div>
            </div>
            <div className={styles.screenshotPanel}>
              <img
                className={styles.screenshotImage}
                src="/img/cortex-visualizations/passive_heatmap.png"
                alt="GPS data quality heatmap showing hourly coverage by day"
              />
              <div className={styles.screenshotLabel}>GPS Heatmap</div>
              <div className={styles.screenshotCaption}>
                Hourly data density by day, revealing daily collection patterns
              </div>
            </div>
          </div>

          {/* Research finding */}
          <div className={styles.featureGrid} style={{ maxWidth: '700px', marginTop: '2rem' }}>
            <div className={styles.featureCard}>
              <div className={styles.projectLabel}>Research Finding</div>
              <div className={styles.featureCardDescription}>
                In a study of 373 participants, most GPS quality issues were resolved by
                disabling Low Power Mode or charging the device. Below a quality score
                of 0.50, GPS-derived features like home time became unreliable.
              </div>
              <Link className={styles.guideLink} to="/publications">
                Calvert et al. (2026) &#8594;
              </Link>
            </div>
          </div>

          <p className={styles.sectionLinks}>
            <Link to="/sensors-data/usage">Data quality documentation &#8594;</Link>
            {' | '}
            <Link to="/developer/cortex/visualizations">Cortex visualizations &#8594;</Link>
          </p>
        </div>
      </section>

      {/* 4. In Practice */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            In Practice
          </Heading>
          <p className={styles.sectionSubtitle}>
            How monitoring tools work in a real clinical program.
          </p>

          <div className={styles.featureGrid} style={{ maxWidth: '700px' }}>
            <div className={styles.featureCard}>
              <div className={styles.projectLabel}>Digital Clinic</div>
              <div className={styles.featureCardDescription}>
                The BIDMC Digital Clinic built automated weekly reports using Cortex and
                the mindLAMP API. Each report scores GPS and accelerometer coverage,
                flags participants who haven't completed activities in seven days, and
                generates a summary designed for under two minutes of clinical review.
              </div>
              <Link to="/projects#PRJ-0003" className={styles.guideLink}>
                View project &#8594;
              </Link>
            </div>
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
            Explore the documentation for data quality, dashboards, and visualizations.
          </p>
          <div className={`${styles.featureGrid} ${styles.featureGridTwoCol}`}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Data Quality</div>
              <div className={styles.featureCardDescription}>
                Sampling frequency, quality thresholds, and guidance for maintaining reliable passive data.
              </div>
              <Link className={styles.guideLink} to="/sensors-data/usage">
                Read guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Dashboard</div>
              <div className={styles.featureCardDescription}>
                Navigate the researcher dashboard, monitor participants, and review engagement indicators.
              </div>
              <Link className={styles.guideLink} to="/dashboard">
                Read guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Cortex Visualizations</div>
              <div className={styles.featureCardDescription}>
                Built-in plotting functions for data quality, behavioral features, and participant reports.
              </div>
              <Link className={styles.guideLink} to="/developer/cortex/visualizations">
                View guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Portal Tab</div>
              <div className={styles.featureCardDescription}>
                Participant-facing data visualizations for self-monitoring and shared decision-making.
              </div>
              <Link className={styles.guideLink} to="/app/app-tabs/portal">
                Read guide &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Nav */}
      <CapabilityNav current="/capabilities/monitor" />
    </Layout>
  );
}
