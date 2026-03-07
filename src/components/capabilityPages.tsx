import Link from '@docusaurus/Link';
import styles from '@site/src/pages/capabilities/capabilities.module.css';

export interface CapabilityPage {
  title: string;
  shortTitle: string;
  route: string;
  description: string;
  color: string;
  pills: string[];
}

export const capabilityPages: CapabilityPage[] = [
  {
    title: 'Engage Participants',
    shortTitle: 'Experience',
    route: '/capabilities/experience',
    description:
      'LAMP stands for Learn, Assess, Manage, and Prevent. The app gives participants a place to build skills, complete assessments, and practice wellness activities — while each project configures exactly what that looks like for their population.',
    color: '#10b981',
    pills: ['Customizable App', 'Engagement Features', 'Cross-Platform', 'Multilingual'],
  },
  {
    title: 'Collect Rich Data',
    shortTitle: 'Collect',
    route: '/capabilities/collect',
    description:
      'Capture rich behavioral data continuously with minimal participant burden. Background sensing and participant responses flow into one consistent format, enabling comparison across projects.',
    color: '#3b82f6',
    pills: ['Passive Sensors', 'Surveys', 'Cognitive Games', 'Wearables'],
  },
  {
    title: 'Monitor Engagement',
    shortTitle: 'Monitor',
    route: '/capabilities/monitor',
    description:
      'Participants, coordinators, and data scientists each get the visibility they need, from personal progress tracking to color-coded dashboards to programmatic data quality analysis.',
    color: '#14b8a6',
    pills: ['Data Quality', 'Engagement', 'Dashboards', 'Participant Insights'],
  },
  {
    title: 'Analyze & Visualize Outcomes',
    shortTitle: 'Analyze',
    route: '/capabilities/analyze',
    description:
      'Cortex, an open-source pipeline, transforms raw sensor data into meaningful daily behavioral features. Outputs are validated across dozens of peer-reviewed studies.',
    color: '#a78bfa',
    pills: ['Feature Extraction', 'Visualization', 'Published Research', 'Open-Source'],
  },
  {
    title: 'Customize & Scale',
    shortTitle: 'Customize',
    route: '/capabilities/configure',
    description:
      'One platform adapts to projects of any size and context, from a 15-person pilot to a 43-site international consortium, with flexible hosting and complete data access.',
    color: '#f59e0b',
    pills: ['Multi-Site', 'Scheduling', 'Participant Groups', 'Deployment'],
  },
];

export function CapabilityNav({ current }: { current: string }) {
  const idx = capabilityPages.findIndex((p) => p.route === current);
  const prev = idx > 0 ? capabilityPages[idx - 1] : null;
  const next = idx < capabilityPages.length - 1 ? capabilityPages[idx + 1] : null;

  return (
    <div className="container">
      <nav className={styles.capabilityNav}>
        {prev ? (
          <Link className={styles.capabilityNavLink} to={prev.route}>
            &#8592; {prev.shortTitle}
          </Link>
        ) : (
          <div className={styles.capabilityNavPlaceholder} />
        )}
        <Link className={styles.capabilityNavCenter} to="/#capabilities">
          All Capabilities
        </Link>
        {next ? (
          <Link className={styles.capabilityNavLink} to={next.route} style={{ justifyContent: 'flex-end' }}>
            {next.shortTitle} &#8594;
          </Link>
        ) : (
          <div className={styles.capabilityNavPlaceholder} />
        )}
      </nav>
    </div>
  );
}
