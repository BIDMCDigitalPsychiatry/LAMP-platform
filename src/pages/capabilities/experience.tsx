import React, { useState, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './capabilities.module.css';
import { CapabilityNav } from '@site/src/components/capabilityPages';

/* ============================================================
   SVG ICONS
   ============================================================ */

const icons = {
  feed: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  learn: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  assess: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" />
    </svg>
  ),
  manage: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  portal: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  bell: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  chat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  streak: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  group: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  tryIt: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  custom: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
};

/* ============================================================
   DATA
   ============================================================ */

const appTabs: {
  name: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  description: string;
  highlights: string[];
  docLink: string;
}[] = [
  {
    name: 'Feed',
    icon: icons.feed,
    color: '#3b82f6',
    image: '/assets/projects/digital-clinic/feed-tab.png',
    description: 'The participant\'s home screen, showing scheduled activities as a daily timeline. Participants work through their cards and see them checked off as they go.',
    highlights: [
      'Color-coded by activity type (Learn, Assess, Manage)',
      'Week view for navigating past and upcoming days',
      'Visual completion tracking',
    ],
    docLink: '/app/app-tabs/feed',
  },
  {
    name: 'Learn',
    icon: icons.learn,
    color: '#f59e0b',
    image: '/assets/projects/digital-clinic/learn-tab.png',
    description: 'The place for educational materials — psychoeducation, skill-building lessons, and health resources participants can explore at their own pace. Content can include text, images, links, and embedded video.',
    highlights: [
      'Self-paced educational content',
      'Can be sequenced into multi-step modules',
      'Text, images, video, and links',
    ],
    docLink: '/app/app-tabs/learn-assess-manage#learn',
  },
  {
    name: 'Assess',
    icon: icons.assess,
    color: '#10b981',
    image: '/assets/projects/digital-clinic/assess-tab.png',
    description: 'Interactive assessment activities including surveys, cognitive games, voice recordings, and diary cards.',
    highlights: [
      'Surveys with validated instrument support',
      'Cognitive games across multiple domains',
      'Voice recording and DBT diary card',
    ],
    docLink: '/app/app-tabs/learn-assess-manage#assess',
  },
  {
    name: 'Manage',
    icon: icons.manage,
    color: '#ef4444',
    image: '/assets/projects/digital-clinic/manage-tab.png',
    description: 'Wellness tools participants can use between sessions, like journaling, guided breathing, and meditation.',
    highlights: [
      'Freeform journal with timestamped entries',
      'Timed breathing exercise with optional audio',
      'Scratch card and other interactive tools',
    ],
    docLink: '/app/app-tabs/learn-assess-manage#manage',
  },
  {
    name: 'Portal',
    icon: icons.portal,
    color: '#8b5cf6',
    image: '/assets/projects/digital-clinic/portal-cortex.png',
    description: 'Where participants can see their own data — survey response trends, sensor-derived behavioral features, and activity completion history.',
    highlights: [
      'Trend visualizations over time',
      'Question-level survey breakdowns',
      'Sensor-derived behavioral feature charts',
    ],
    docLink: '/app/app-tabs/portal',
  },
];

const projectShowcases = [
  {
    project: 'momLAMP',
    site: 'Brigham & Women\'s Hospital',
    tagline: 'Postpartum anxiety program with structured psychoeducation and self-management tools',
    link: '/projects#PRJ-0032',
    screenshots: [
      { src: '/assets/projects/momlamp/feed-tab.png', label: 'Daily Schedule' },
      { src: '/assets/projects/momlamp/learn-tab.png', label: 'Numbered Modules' },
      { src: '/assets/projects/momlamp/tip-content-padded.png', label: 'CBT Psychoeducation' },
      { src: '/assets/projects/momlamp/assess-tab-new.png', label: 'Clinical Surveys' },
      { src: '/assets/projects/momlamp/manage-tab.png', label: 'Wellness Tools' },
      { src: '/assets/projects/momlamp/portal-tab-padded.png', label: 'Progress Tracking' },
    ],
  },
  {
    project: 'Social Media & Mental Health',
    site: 'BIDMC Division of Digital Psychiatry',
    tagline: 'Multi-module program exploring the relationship between social media use and well-being',
    link: '/projects',
    screenshots: [
      { src: '/assets/projects/social-media/manage-tab-activity-groups.png', label: 'Activity Groups' },
      { src: '/assets/projects/social-media/sleep-module-launch.png', label: 'Module Launch' },
      { src: '/assets/projects/social-media/tip-with-video.png', label: 'Embedded Video' },
      { src: '/assets/projects/social-media/activity-group-survey-slider.png', label: 'Slider Survey' },
      { src: '/assets/projects/social-media/activity-group-completion.png', label: 'Module Completion' },
    ],
  },
  {
    project: 'SMART-A',
    site: 'Beth Israel Deaconess Medical Center',
    tagline: 'Cognitive training and digital phenotyping for older adults',
    link: '/projects#PRJ-0034',
    screenshots: [
      { src: '/assets/projects/smart-a/feed-tab.png', label: 'Daily Schedule' },
      { src: '/assets/projects/smart-a/sleep-survey-question.png', label: 'Sleep Survey' },
      { src: '/assets/projects/smart-a/trails-b-gameplay.png', label: 'Trails B' },
      { src: '/assets/projects/smart-a/digit-span-gameplay.png', label: 'Digit Span' },
      { src: '/assets/projects/smart-a/memory-game-gameplay.png', label: 'Memory Game' },
    ],
  },
];

const engagementFeatures: { title: string; description: string; icon: React.ReactNode }[] = [
  {
    title: 'Push Notifications',
    description: 'Participants receive push notifications reminding them to complete scheduled activities. Tapping a notification opens the activity directly.',
    icon: icons.bell,
  },
  {
    title: 'Care Team Messaging',
    description: 'Participants can message their care team directly from the app and receive responses in the same conversation thread.',
    icon: icons.chat,
  },
  {
    title: 'Streak Tracking',
    description: 'A streak counter shows participants how many consecutive days they\'ve completed activities. Displayed after each completion.',
    icon: icons.streak,
  },
  {
    title: 'Activity Groups',
    description: 'Related activities can be bundled into sequenced groups. For example, a sleep module might chain together a lesson, a diary survey, and a breathing exercise.',
    icon: icons.group,
  },
  {
    title: 'Try It & Self-Help',
    description: 'Try It mode lets anyone explore the app without an account. Self-help tools are also accessible without enrollment.',
    icon: icons.tryIt,
  },
];

const languages: { name: string; code: string }[] = [
  { name: 'English', code: 'US' },
  { name: 'Spanish', code: 'ES' },
  { name: 'French', code: 'FR' },
  { name: 'Hindi', code: 'IN' },
  { name: 'German', code: 'DE' },
  { name: 'Italian', code: 'IT' },
  { name: 'Korean', code: 'KR' },
  { name: 'Danish', code: 'DK' },
  { name: 'Chinese (Simplified)', code: 'CN' },
  { name: 'Chinese (Traditional)', code: 'TW' },
];

const platforms = ['iPhone', 'Android', 'Web Browser', 'Apple Watch', 'Fitbit', 'Oura Ring', 'Samsung Galaxy Watch'];

/* ============================================================
   SCROLLABLE SCREENSHOT STRIP
   ============================================================ */

function ScreenshotStrip({ screenshots }: { screenshots: { src: string; label: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', checkScroll);
    return () => { if (el) el.removeEventListener('scroll', checkScroll); };
  }, []);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 260, behavior: 'smooth' });
  };

  return (
    <div className={styles.screenshotStripWrapper}>
      {canScrollLeft && (
        <button className={`${styles.screenshotStripArrow} ${styles.screenshotStripArrowLeft}`} onClick={() => scroll(-1)} aria-label="Scroll left">
          &#8249;
        </button>
      )}
      <div ref={scrollRef} className={styles.screenshotStrip}>
        {screenshots.map((s, i) => (
          <div key={i} className={styles.screenshotStripItem}>
            <div className={styles.screenshotStripFrame}>
              <img src={s.src} alt={s.label} className={styles.screenshotStripImage} />
            </div>
            <div className={styles.screenshotStripLabel}>{s.label}</div>
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button className={`${styles.screenshotStripArrow} ${styles.screenshotStripArrowRight}`} onClick={() => scroll(1)} aria-label="Scroll right">
          &#8250;
        </button>
      )}
    </div>
  );
}

/* ============================================================
   INTERACTIVE TAB SELECTOR
   ============================================================ */

function AppTabShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tab = appTabs[activeIndex];

  return (
    <div className={styles.tabShowcase}>
      {/* Tab selector buttons */}
      <div className={styles.tabSelector}>
        {appTabs.map((t, i) => (
          <button
            key={t.name}
            className={`${styles.tabSelectorBtn} ${i === activeIndex ? styles.tabSelectorBtnActive : ''}`}
            onClick={() => setActiveIndex(i)}
            style={i === activeIndex ? { borderColor: t.color, color: t.color } : {}}
          >
            <span className={styles.tabSelectorIcon}>{t.icon}</span>
            {t.name}
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className={styles.tabShowcaseContent}>
        <div className={styles.tabShowcasePhone}>
          <div className={styles.tabShowcaseFrame}>
            <img src={tab.image} alt={`mindLAMP ${tab.name} tab`} className={styles.tabShowcaseImage} />
          </div>
        </div>
        <div className={styles.tabShowcaseInfo}>
          <h3 className={styles.tabShowcaseTitle} style={{ color: tab.color }}>
            {tab.name}
          </h3>
          <p className={styles.tabShowcaseDescription}>{tab.description}</p>
          <ul className={styles.tabShowcaseHighlights}>
            {tab.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          <Link to={tab.docLink} className={styles.guideLink}>
            {tab.name} documentation &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function Experience() {
  return (
    <Layout title="Engage Participants" description="LAMP stands for Learn, Assess, Manage, and Prevent. Participants get a single app where they learn new skills, complete assessments, practice wellness activities, and track their own progress.">
      {/* Hero */}
      <header className={styles.hero} style={{ background: 'linear-gradient(135deg, #065f46 0%, #10b981 100%)' }}>
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>Capability</div>
          <Heading as="h1" className={styles.heroTitle}>
            Engage Participants
          </Heading>
          <p className={styles.heroSubtitle}>
            LAMP stands for Learn, Assess, Manage, and Prevent. Participants get a single app
            where they learn new skills, complete assessments, practice wellness activities,
            and track their own progress.
          </p>
        </div>
      </header>

      {/* How Participants Interact with the App */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            How Participants Interact with the App
          </Heading>
          <p className={styles.sectionSubtitle}>
            The mindLAMP app is organized into five tabs — each serving a different part of
            the participant experience.
          </p>
          <AppTabShowcase />
        </div>
      </section>

      {/* Project Showcases with Scrollable Screenshots */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            One App, Many Configurations
          </Heading>
          <p className={styles.sectionSubtitle}>
            The same platform serves postpartum mothers, college students exploring social media habits, and older adults
            with cognitive impairment — each with a completely different participant experience.
          </p>

          {projectShowcases.map((proj, i) => (
            <div key={i} className={styles.projectShowcase}>
              <div className={styles.projectShowcaseHeader}>
                <div>
                  <div className={styles.projectShowcaseName}>{proj.project}</div>
                  <div className={styles.projectShowcaseSite}>{proj.site}</div>
                  <div className={styles.projectShowcaseTagline}>{proj.tagline}</div>
                </div>
                <Link to={proj.link} className={styles.guideLink}>
                  View project &#8594;
                </Link>
              </div>
              <ScreenshotStrip screenshots={proj.screenshots} />
            </div>
          ))}
        </div>
      </section>

      {/* Engagement & Communication Features */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Engagement & Communication
          </Heading>
          <p className={styles.sectionSubtitle}>
            The app also includes features for keeping participants engaged and connected
            to their care team.
          </p>

          <div className={styles.engagementGrid}>
            {engagementFeatures.map((feat, i) => (
              <div key={i} className={styles.engagementCard}>
                <div className={styles.engagementIcon}>{feat.icon}</div>
                <div>
                  <div className={styles.engagementTitle}>{feat.title}</div>
                  <div className={styles.engagementDescription}>{feat.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/app/app-tabs/feed" className={styles.guideLink} style={{ marginRight: '2rem' }}>
              Feed & notifications &#8594;
            </Link>
            <Link to="/app/profile-settings" className={styles.guideLink} style={{ marginRight: '2rem' }}>
              Messaging & account &#8594;
            </Link>
            <Link to="/activities/reference/activity-groups" className={styles.guideLink}>
              Activity groups &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* Platform & Language Support */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Platform & Language Support
          </Heading>
          <p className={styles.sectionSubtitle}>
            Participants use whatever device they already have — iPhone, Android, or web browser.
            The app interface is available in 10 languages, so participants can use it in their
            preferred language.
          </p>

          <div className={styles.platformLanguageStacked}>
            <div className={styles.platformLanguageSection}>
              <h3 className={styles.platformLanguageSectionTitle}>Platforms</h3>
              <div className={styles.platformPillsRow}>
                {platforms.map((p, i) => (
                  <div key={i} className={styles.platformPill}>
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.platformLanguageSection}>
              <h3 className={styles.platformLanguageSectionTitle}>Languages</h3>
              <div className={styles.languageGridWide}>
                {languages.map((lang, i) => (
                  <div key={i} className={styles.languageItem}>
                    <img
                      src={`https://flagcdn.com/w40/${lang.code.toLowerCase()}.png`}
                      alt={lang.name}
                      className={styles.languageFlag}
                      width="24"
                      height="16"
                    />
                    <span className={styles.languageName}>{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dive Deeper */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Dive Deeper
          </Heading>
          <p className={styles.sectionSubtitle}>
            Explore the guides for each part of the participant experience.
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>App Overview</div>
              <div className={styles.featureCardDescription}>
                Full walkthrough of the mindLAMP app and how participants interact with it.
              </div>
              <Link className={styles.guideLink} to="/app">
                Read guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Activities Reference</div>
              <div className={styles.featureCardDescription}>
                All activity types: surveys, cognitive games, tips, diary cards, voice recording, and more.
              </div>
              <Link className={styles.guideLink} to="/activities/reference">
                View reference &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>The Feed</div>
              <div className={styles.featureCardDescription}>
                How the daily timeline works, notification delivery, and activity completion tracking.
              </div>
              <Link className={styles.guideLink} to="/app/app-tabs/feed">
                Read guide &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Portal Tab</div>
              <div className={styles.featureCardDescription}>
                Participant-facing data visualizations: survey trends, sensor features, and completion history.
              </div>
              <Link className={styles.guideLink} to="/app/app-tabs/portal">
                Read guide &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Nav */}
      <CapabilityNav current="/capabilities/experience" />
    </Layout>
  );
}
