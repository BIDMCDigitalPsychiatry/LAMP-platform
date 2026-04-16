import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './capabilities.module.css';
import { CapabilityNav } from '@site/src/components/capabilityPages';

/* ============================================================
   ICONS (Feather-style SVGs)
   ============================================================ */

const surveyFeatureIcons = {
  description: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  image: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
    </svg>
  ),
  required: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  warning: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  timer: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  scale: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  ),
};

const sensorIcons = {
  location: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  activity: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  phone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  screen: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  heart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  sensorkit: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

/* ============================================================
   DATA
   ============================================================ */

const cognitiveGames = [
  { name: 'Jewels A', icon: '/img/cognitive-games/icons/jewels-a.svg', domain: 'Executive functioning', link: '/activities/reference/jewels-a' },
  { name: 'Jewels B', icon: '/img/cognitive-games/icons/jewels-b.svg', domain: 'Set shifting', link: '/activities/reference/jewels-b' },
  { name: 'Spatial Span', icon: '/img/cognitive-games/icons/spatial-span.svg', domain: 'Visuospatial memory', link: '/activities/reference/spatial-span' },
  { name: 'Trails B', icon: '/img/cognitive-games/icons/trails-b.svg', domain: 'Executive functioning', link: '/activities/reference/trails-b' },
  { name: 'Pop the Bubbles', icon: '/img/cognitive-games/icons/pop-the-bubbles.svg', domain: 'Attention & inhibition', link: '/activities/reference/pop-the-bubbles' },
  { name: 'Cats and Dogs', icon: '/img/cognitive-games/icons/cats-and-dogs.svg', domain: 'Response control', link: '/activities/reference/cats-and-dogs' },
  { name: 'Balloon Risk', icon: '/img/cognitive-games/icons/balloon-risk.svg', domain: 'Risk-taking behavior', link: '/activities/reference/balloon-risk' },
  { name: 'Symbol Digit', icon: '/img/cognitive-games/icons/symbol-digit-substitution.svg', domain: 'Motor speed & attention', link: '/activities/reference/symbol-digit-substitution' },
  { name: 'Emotion Recognition', icon: '/img/cognitive-games/icons/emotion-recognition.svg', domain: 'Social cognition', link: '/activities/reference/emotion-recognition' },
  { name: 'Spin the Wheel', icon: '/img/cognitive-games/icons/spin-the-wheel.svg', domain: 'Decision-making', link: '/activities/reference/spin-the-wheel' },
  { name: 'Maze Game', icon: '/img/cognitive-games/icons/maze-game.svg', domain: 'Visual cognition', link: '/activities/reference/maze-game' },
  { name: 'DCog', icon: '/img/cognitive-games/icons/d-cog.svg', domain: 'Working memory', link: '/activities/reference/d-cog' },
  { name: 'Memory Game', icon: '/img/cognitive-games/icons/memory-game.svg', domain: 'Spatial & temporal memory', link: '/activities/reference/memory-game' },
  { name: 'Digit Span', icon: '/img/cognitive-games/icons/digit-span.svg', domain: 'Working memory', link: '/activities/reference/digit-span' },
  { name: 'Fragmented Letters', icon: '/img/cognitive-games/icons/fragmented-letters.svg', domain: 'Visual and perceptual processing', link: '/activities/reference/fragmented-letters' },
  { name: 'Funny Memory', icon: '/img/cognitive-games/icons/funny-memory.svg', domain: 'Associative memory', link: '/activities/reference/funny-memory' },
  { name: 'Simple RT', icon: '/img/cognitive-games/icons/simple-rt.svg', domain: 'Processing speed', link: '/activities/reference/simple-rt' },
  { name: 'Stroop', icon: '/img/cognitive-games/icons/stroop.svg', domain: 'Selective attention', link: '/activities/reference/stroop' },
  { name: 'Flanker', icon: '/img/cognitive-games/icons/flanker.svg', domain: 'Attentional control', link: '/activities/reference/flanker' },
  { name: 'N-Back', icon: '/img/cognitive-games/icons/nback.svg', domain: 'Working memory', link: '/activities/reference/nback' },
  { name: 'Tower of London', icon: '/img/cognitive-games/icons/tower-of-london.svg', domain: 'Planning', link: '/activities/reference/tower-of-london' },
  { name: 'WCST', icon: '/img/cognitive-games/icons/wcst.svg', domain: 'Cognitive flexibility', link: '/activities/reference/wcst' },
  { name: 'Water Sort', icon: '/img/cognitive-games/icons/water-sort.svg', domain: 'Executive function', link: '/activities/reference/water-sort' },
  { name: 'Sliding Puzzle', icon: '/img/cognitive-games/icons/sliding-puzzle.svg', domain: 'Spatial planning', link: '/activities/reference/sliding-puzzle' },
  { name: 'Nonogram', icon: '/img/cognitive-games/icons/nonogram.svg', domain: 'Logic & reasoning', link: '/activities/reference/nonogram' },
  { name: 'Memory Match', icon: '/img/cognitive-games/icons/memory-match.svg', domain: 'Visual-spatial memory', link: '/activities/reference/memory-match' },
  { name: 'Mental Rotation', icon: '/img/cognitive-games/icons/mental-rotation.svg', domain: 'Spatial visualization', link: '/activities/reference/mental-rotation' },
  { name: 'Lexical Decision', icon: '/img/cognitive-games/icons/lexical-decision.svg', domain: 'Language processing', link: '/activities/reference/lexical-decision' },
  { name: 'Letter Logic', icon: '/img/cognitive-games/icons/letter-logic.svg', domain: 'Vocabulary & logic', link: '/activities/reference/letter-logic' },
  { name: 'Delay Discounting', icon: '/img/cognitive-games/icons/delay-discounting.svg', domain: 'Impulsivity', link: '/activities/reference/delay-discounting' },
];

/* mindLAMP teal for selected states, matching the app */
const T = '#4a9080';

const questionTypes: { name: string; icon: React.ReactNode }[] = [
  {
    name: 'Likert Scale',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        {['Nearly All the Time', 'More than Half', 'Several Times', 'Not at all'].map((label, i) => {
          const y = 8 + i * 20;
          const selected = i === 2;
          return (
            <g key={i}>
              <circle cx="16" cy={y + 4} r="7" stroke={selected ? T : '#ccc'} strokeWidth="1.5" fill={selected ? T : 'none'} />
              {selected && <circle cx="16" cy={y + 4} r="3" fill="#fff" />}
              <text x="30" y={y + 8} fontSize="8" fill={selected ? '#1a1a1a' : '#666'} fontWeight={selected ? '600' : '400'}>{label}</text>
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    name: 'Boolean',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        {['Yes', 'No'].map((label, i) => {
          const y = 24 + i * 28;
          const selected = i === 0;
          return (
            <g key={i}>
              <circle cx="20" cy={y} r="8" stroke={selected ? T : '#ccc'} strokeWidth="1.5" fill={selected ? T : 'none'} />
              {selected && <circle cx="20" cy={y} r="3.5" fill="#fff" />}
              <text x="36" y={y + 4} fontSize="10" fill={selected ? '#1a1a1a' : '#666'} fontWeight={selected ? '600' : '400'}>{label}</text>
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    name: 'Slider',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        <line x1="10" y1="40" x2="110" y2="40" stroke="#ddd" strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} cx={10 + i * 20} cy="40" r="3" fill={i <= 3 ? T : '#ddd'} />
        ))}
        <circle cx={10 + 3 * 20} cy="40" r="10" fill={T} />
        <text x={10 + 3 * 20} y="44" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">3</text>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <text key={`l${i}`} x={10 + i * 20} y="60" textAnchor="middle" fontSize="7" fill="#888">{i}</text>
        ))}
      </svg>
    ),
  },
  {
    name: 'Free Text',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        <rect x="8" y="10" width="104" height="60" rx="8" stroke="#3b5998" strokeWidth="0.7" fill="#f5f5f5" />
        <text x="18" y="34" fontSize="9" fill="#444">Managing my</text>
        <text x="18" y="48" fontSize="9" fill="#444">emotions better.</text>
        <text x="88" y="62" fontSize="6" fill="#999">28/800</text>
      </svg>
    ),
  },
  {
    name: 'Multi-Select',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        {['Angry', 'Sad', 'Happy', 'Lonely'].map((label, i) => {
          const y = 8 + i * 20;
          const checked = i < 2;
          return (
            <g key={i}>
              <rect x="10" y={y} width="14" height="14" rx="3" stroke={checked ? T : '#ccc'} strokeWidth="1.5" fill={checked ? T : 'none'} />
              {checked && <polyline points={`14,${y + 7} 17,${y + 10} 22,${y + 5}`} stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
              <text x="32" y={y + 11} fontSize="9" fill={checked ? '#1a1a1a' : '#666'} fontWeight={checked ? '600' : '400'}>{label}</text>
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    name: 'Single-Select List',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        {[{ n: '0', l: 'Not at all' }, { n: '1', l: 'Several days' }, { n: '2', l: 'More than half' }, { n: '3', l: 'Nearly every day' }].map((item, i) => {
          const y = 4 + i * 22;
          const selected = i === 1;
          return (
            <g key={i}>
              <circle cx="16" cy={y + 6} r="7" stroke={selected ? T : '#ccc'} strokeWidth="1.5" fill={selected ? T : 'none'} />
              {selected && <circle cx="16" cy={y + 6} r="3" fill="#fff" />}
              <text x="30" y={y + 6} fontSize="8.5" fill="#1a1a1a" fontWeight="600">{item.n}</text>
              <text x="30" y={y + 15} fontSize="7" fill="#888">{item.l}</text>
            </g>
          );
        })}
      </svg>
    ),
  },
  {
    name: 'Rating',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        {[1, 2, 3, 4].map((n, i) => {
          const cx = 20 + i * 24;
          const selected = i === 3;
          return (
            <g key={i}>
              <circle cx={cx} cy="36" r="11" stroke={selected ? T : '#ccc'} strokeWidth="1.5" fill={selected ? T : 'none'} />
              <text x={cx} y="40" textAnchor="middle" fontSize="10" fill={selected ? '#fff' : '#888'} fontWeight="600">{n}</text>
            </g>
          );
        })}
        <text x="20" y="60" textAnchor="middle" fontSize="6.5" fill="#888">Terrible</text>
        <text x="92" y="60" textAnchor="middle" fontSize="6.5" fill="#888">Fantastic</text>
      </svg>
    ),
  },
  {
    name: 'Short Answer',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        <text x="14" y="42" fontSize="11" fill="#444">demo</text>
        <line x1="14" y1="48" x2="54" y2="48" stroke={T} strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Time Picker',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        <text x="10" y="52" fontSize="26" fill="#1a1a1a" fontWeight="700" fontFamily="system-ui">07</text>
        <text x="44" y="52" fontSize="26" fill="#1a1a1a" fontWeight="700" fontFamily="system-ui">:</text>
        <text x="52" y="52" fontSize="26" fill="#1a1a1a" fontWeight="700" fontFamily="system-ui">45</text>
        <text x="90" y="52" fontSize="13" fill="#1a1a1a" fontWeight="600" fontFamily="system-ui">AM</text>
        <line x1="10" y1="58" x2="42" y2="58" stroke={T} strokeWidth="1.5" />
        <line x1="52" y1="58" x2="84" y2="58" stroke={T} strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Matrix',
    icon: (
      <svg viewBox="0 0 120 88" fill="none">
        {['A', 'B', 'C'].map((h, i) => (
          <text key={`h${i}`} x={60 + i * 20} y="14" textAnchor="middle" fontSize="7" fill="#888">{h}</text>
        ))}
        {['Q1', 'Q2', 'Q3'].map((q, row) => {
          const y = 24 + row * 22;
          return (
            <g key={`r${row}`}>
              <line x1="6" y1={y + 8} x2="114" y2={y + 8} stroke="#eee" strokeWidth="0.5" />
              <text x="10" y={y + 5} fontSize="7" fill="#666">{q}</text>
              {[0, 1, 2].map((col) => {
                const checked = (row === 0 && col === 1) || (row === 1 && col === 0) || (row === 2 && col === 2);
                return (
                  <g key={`${row}-${col}`}>
                    <rect x={54 + col * 20} y={y - 5} width="12" height="12" rx="2.5" stroke={checked ? T : '#ccc'} strokeWidth="1.5" fill={checked ? T : 'none'} />
                    {checked && <polyline points={`${57 + col * 20},${y + 1} ${60 + col * 20},${y + 4} ${64 + col * 20},${y - 2}`} stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>
    ),
  },
];

const inPracticeProjects = [
  {
    project: 'AMP SCZ',
    description: 'Deployed the same sensor and survey battery across 43 sites in 13 countries, collecting GPS, accelerometer, and daily self-reports in one standardized protocol.',
    link: '/projects#PRJ-0001',
  },
  {
    project: 'Schizophrenia Relapse Prediction',
    description: 'Collected continuous GPS, accelerometer, and screen state data from 132 participants to detect behavioral shifts preceding clinical relapse.',
    link: '/projects#PRJ-0003',
  },
  {
    project: 'College Student Mental Health',
    description: 'Paired daily mood surveys with passive GPS data from 67 students, combining both data sources to predict changes in depression symptoms.',
    link: '/projects#PRJ-0010',
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */

export default function Collect() {
  return (
    <Layout title="Collect Rich Data" description="Continuous sensor data and participant responses, from surveys to cognitive games, captured in one consistent format.">
      {/* Hero */}
      <header className={styles.hero} style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>Capability</div>
          <Heading as="h1" className={styles.heroTitle}>
            Collect Rich Data
          </Heading>
          <p className={styles.heroSubtitle}>
            Continuous sensor data and participant responses, from surveys to cognitive games,
            captured in one consistent format.
          </p>
        </div>
      </header>

      {/* ============================================================
          BACKGROUND DATA
          ============================================================ */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            A Continuous Picture of Daily Life
          </Heading>
          <p className={styles.sectionSubtitle}>
            Phone sensors, health apps, and wearables feed data continuously in the background,
            building a behavioral picture with no action required from participants.
          </p>

          <div className={styles.engagementGrid}>
            <div className={`${styles.engagementCard} ${styles.engagementCardVertical}`}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div className={styles.engagementIcon}>{sensorIcons.location}</div>
                <div className={styles.engagementTitle}>GPS</div>
              </div>
              <div className={styles.engagementDescription}>
                Where participants go, how long they stay, and whether their daily routines are changing.
              </div>
            </div>

            <div className={`${styles.engagementCard} ${styles.engagementCardVertical}`}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div className={styles.engagementIcon}>{sensorIcons.activity}</div>
                <div className={styles.engagementTitle}>Accelerometer</div>
              </div>
              <div className={styles.engagementDescription}>
                How much someone is moving throughout the day, and whether they're mostly active or sedentary.
              </div>
            </div>

            <div className={`${styles.engagementCard} ${styles.engagementCardVertical}`}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div className={styles.engagementIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div className={styles.engagementTitle}>Steps</div>
              </div>
              <div className={styles.engagementDescription}>
                How many steps a participant takes each day, and how that changes week to week.
              </div>
            </div>

            <div className={`${styles.engagementCard} ${styles.engagementCardVertical}`}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div className={styles.engagementIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 18a5 5 0 0 0-10 0" /><line x1="12" y1="2" x2="12" y2="9" /><line x1="4.22" y1="10.22" x2="5.64" y2="11.64" /><line x1="1" y1="18" x2="3" y2="18" /><line x1="21" y1="18" x2="23" y2="18" /><line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
                  </svg>
                </div>
                <div className={styles.engagementTitle}>Sleep</div>
              </div>
              <div className={styles.engagementDescription}>
                How long participants sleep and how restful that sleep is, captured from wearables and health apps.
              </div>
            </div>

            <div className={`${styles.engagementCard} ${styles.engagementCardVertical}`}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div className={styles.engagementIcon}>{sensorIcons.phone}</div>
                <div className={styles.engagementTitle}>Telephony</div>
              </div>
              <div className={styles.engagementDescription}>
                How often someone is making and receiving calls, and whether that changes. Never captures content.
              </div>
            </div>

            <div className={`${styles.engagementCard} ${styles.engagementCardVertical}`}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div className={styles.engagementIcon}>{sensorIcons.screen}</div>
                <div className={styles.engagementTitle}>Device State</div>
              </div>
              <div className={styles.engagementDescription}>
                How often the phone is picked up, how long it stays on, and when it's being charged. Reveals daily routines.
              </div>
            </div>
          </div>

          <div className={styles.highlightCardRow}>
            <div className={styles.highlightCard}>
              <div className={styles.highlightCardHeader}>
                <div className={styles.engagementIcon}>{sensorIcons.heart}</div>
                <div className={styles.engagementTitle}>Health Platform Integration</div>
              </div>
              <div className={styles.engagementDescription}>
                Pulls in heart rate, HRV, blood pressure, SpO2, workouts, and more from Apple HealthKit and Google Health Connect. Any connected wearable is automatically supported.
              </div>
            </div>

            <div className={styles.highlightCard}>
              <div className={styles.highlightCardHeader}>
                <div className={styles.engagementIcon}>{sensorIcons.sensorkit}</div>
                <div className={styles.engagementTitle}>Apple SensorKit</div>
              </div>
              <div className={styles.engagementDescription}>
                On enrolled research devices, SensorKit adds app usage categories, text message metadata, and location visit types. A deeper behavioral picture available only through Apple's research program.
              </div>
            </div>
          </div>

          <p className={styles.sectionLinks}>
            <Link to="/sensors-data/reference">Full sensor reference &#8594;</Link>
            {' | '}
            <Link to="/sensors-data/configuration">Sensor configuration guide &#8594;</Link>
          </p>

        </div>
      </section>

      {/* ============================================================
          ACTIVE ASSESSMENTS — Surveys + Cognitive Games
          ============================================================ */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Surveys and Cognitive Games
          </Heading>
          <p className={styles.sectionSubtitle}>
            Participants complete surveys, cognitive games, and other structured activities.
            Their responses provide the clinical ground truth that makes passive sensor
            patterns interpretable.
          </p>

          {/* Surveys */}
          <div className={styles.subsectionCenter}>
          <Heading as="h3" className={styles.subsectionHeading}>
            Surveys
          </Heading>
          <p className={styles.subsectionDescription}>
            Build any survey from 10 question types. PHQ-9, GAD-7, and other validated scales
            have been built this way and are{' '}
            <Link to="/activities/reference/surveys#validated-instruments">ready to use</Link>,
            but the same tools work for any instrument you can design.
          </p>

          <p className={styles.surveyTypeHeading}>10 Question Types</p>
          <div className={styles.surveyTypeGrid}>
            {questionTypes.map((qt, i) => (
              <div key={i} className={styles.surveyTypeItem}>
                <div className={styles.surveyTypeIcon}>{qt.icon}</div>
                <div className={styles.surveyTypeLabel}>{qt.name}</div>
              </div>
            ))}
          </div>

          <div className={styles.surveyFeatureGrid}>
            {[
              { icon: surveyFeatureIcons.description, label: 'Question descriptions', detail: 'Add context or instructions to any question' },
              { icon: surveyFeatureIcons.image, label: 'Embedded images', detail: 'Include images directly in questions' },
              { icon: surveyFeatureIcons.required, label: 'Required fields', detail: 'Mark questions as mandatory' },
              { icon: surveyFeatureIcons.warning, label: 'Safety warnings', detail: 'Show crisis resources on flagged responses' },
              { icon: surveyFeatureIcons.timer, label: 'Per-question timing', detail: 'Captures how long each answer took' },
              { icon: surveyFeatureIcons.scale, label: 'Any clinical scale', detail: 'Build any instrument with the same tools' },
            ].map((feat, i) => (
              <div key={i} className={styles.surveyFeatureCard}>
                <div className={styles.surveyFeatureIcon}>{feat.icon}</div>
                <div>
                  <div className={styles.surveyFeatureLabel}>{feat.label}</div>
                  <div className={styles.surveyFeatureDetail}>{feat.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.sectionLinks} style={{ marginTop: '1rem' }}>
            <Link to="/activities/reference/surveys">Survey documentation &#8594;</Link>
          </p>

          </div>

          {/* Cognitive Games */}
          <div className={styles.subsectionCenter}>
          <Heading as="h3" className={styles.subsectionHeading}>
            Cognitive Games
          </Heading>
          <p className={styles.subsectionDescription}>
            Configurable cognitive assessments across executive functioning, memory, attention,
            language processing, spatial reasoning, processing speed, and decision-making. Every tap
            is timestamped, so you can analyze not just accuracy but response patterns across each task.
          </p>

          <div className={styles.gameThumbnailGrid}>
            {cognitiveGames.map((game, i) => (
              <Link key={i} className={styles.gameThumbnail} to={game.link}>
                {game.icon ? (
                  <img
                    src={game.icon}
                    alt={`${game.name} icon`}
                    className={styles.gameThumbnailIcon}
                  />
                ) : (
                  <div className={styles.gameThumbnailPlaceholder}>
                    {game.name}
                  </div>
                )}
                <div className={styles.gameThumbnailName}>{game.name}</div>
                <div className={styles.gameThumbnailDomain}>{game.domain}</div>
              </Link>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BETTER TOGETHER
          ============================================================ */}
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            Sensors + Surveys: Better Together
          </Heading>
          <p className={styles.sectionSubtitle}>
            mindLAMP captures passive sensor data and active participant responses together,
            in the same format, from the same device. That combination simplifies digital
            phenotyping workflows and produces richer data than either source alone.
          </p>

          <img
            src="/img/sensor-survey-overlay.png"
            alt="Screentime and hometime sensor data overlaid with daily depression, anxiety, and difficulty functioning survey scores over time"
            className={styles.betterTogetherImage}
          />
        </div>
      </section>

      {/* ============================================================
          IN PRACTICE
          ============================================================ */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2" className={styles.sectionTitle}>
            In Practice
          </Heading>
          <p className={styles.sectionSubtitle}>
            Real projects using mindLAMP data collection at scale, from multi-site consortia to
            single-clinic longitudinal programs.
          </p>

          <div className={styles.featureGrid}>
            {inPracticeProjects.map((proj, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.projectLabel}>{proj.project}</div>
                <div className={styles.featureCardDescription}>
                  {proj.description}
                </div>
                <Link className={styles.guideLink} to={proj.link}>
                  View project &#8594;
                </Link>
              </div>
            ))}
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
            Explore the technical documentation for sensors, activities, and data formats.
          </p>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Sensor Reference</div>
              <div className={styles.featureCardDescription}>
                Per-sensor documentation with data fields, platform support, and Cortex features.
              </div>
              <Link className={styles.guideLink} to="/sensors-data/reference">
                View reference &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Activity & Survey Reference</div>
              <div className={styles.featureCardDescription}>
                Per-activity documentation for surveys, cognitive games, tips, and other activity types.
              </div>
              <Link className={styles.guideLink} to="/activities/reference">
                View reference &#8594;
              </Link>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureCardTitle}>Data Formats</div>
              <div className={styles.featureCardDescription}>
                ActivityEvent and SensorEvent schemas, data retrieval, and Cortex processing pipeline.
              </div>
              <Link className={styles.guideLink} to="/sensors-data/data">
                View formats &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Nav */}
      <CapabilityNav current="/capabilities/collect" />
    </Layout>
  );
}
