import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from '../capabilities/capabilities.module.css';

/* ============================================================
   FEATURE DATA

   Prose (overview + useCases) is taken from the original supporting
   document so wording matches the source. Steps preserved verbatim from
   the same source.

   For multi-video features (Home Page, Modules) the placement below is a
   best guess at which video covers which steps — adjust as needed.
   ============================================================ */

type Video = { url: string; caption?: string };
type StepGroup = { heading?: string; steps: string[] };
type Block = { kind: 'video'; video: Video } | { kind: 'group'; group: StepGroup };

type Feature = {
  id: string;
  name: string;
  shortName?: string;
  overview: string;
  previewVideo?: Video; // User-facing "what it looks like" video, shown after the Overview
  setupHeading: string;
  body: Block[];
  useCases: string;
  extends?: { label: string; href: string };
};

const v = (url: string, caption?: string): Block => ({ kind: 'video', video: { url, caption } });
const g = (heading: string | undefined, steps: string[]): Block => ({
  kind: 'group',
  group: { heading, steps },
});

const features: Feature[] = [
  {
    id: 'home-page',
    name: 'Home Page',
    overview:
      'The Home Page feature gives mindLAMP users a central landing page that can highlight the most important content for a specific app account or group. Administrators can customize the page with a banner, image, linked activity, quick-action button, favorites or selected activities, calendar view, and progress/streak information. This helps users quickly find key activities while giving each mindLAMP implementation a more organized and tailored entry point.',
    previewVideo: { url: 'https://www.youtube.com/embed/fr4fi6Dg58s' },
    setupHeading: 'Configuration Steps',
    body: [
      v('https://www.youtube.com/embed/ricCRP7Cj8Q'),
      g('Access Home Settings', [
        'From the administrator dashboard, go to Users and select the relevant app account or group.',
        'Click the Home Settings gear icon for the group whose home page should be customized.',
      ]),
      g('Banner Settings', [
        'Add the Banner Title and Banner Subheading that should appear at the top of the home page.',
        'Select the activity that should open when users tap the banner.',
        'Upload or select a Banner Image to display in the banner area.',
      ]),
      g('Small Action Button Settings', [
        'Enter the text that should appear on the small action button.',
        'Select the activity that should open when users tap the button.',
      ]),
      g('Home Page Activities', [
        'Choose whether the home page should show Favorites, a Custom set of activities, or None.',
        'If using Custom, click Add Activity and select the activities that should appear on the home page.',
      ]),
      g('Featured Activity Settings', [
        'Choose whether a specific activity should be highlighted more prominently on the home page.',
        'Select the activity that should appear as the featured activity.',
      ]),
      g('Home Page Streak Settings', [
        'Choose the streak type that should be displayed on the home page, such as daily, weekly, monthly, or none.',
        'Add the streak title and description that users should see.',
      ]),
      g('Survey Group Settings', [
        'Use Survey Group Settings to group related surveys together for home page tracking.',
        'Use Ungrouped Surveys to identify surveys that should remain outside grouped tracking.',
      ]),
    ],
    useCases:
      'The Home Page can be used in mindLAMP to orient participants toward the most important activities, such as a daily check-in, study task, or core intervention module. It can also bring together frequently used content, favorited activities, calendar-based tasks, and progress feedback in one place. For multi-group deployments, administrators can create different home page experiences for different cohorts while keeping the app structure consistent.',
  },
  {
    id: 'modules',
    name: 'Modules',
    overview:
      'The Modules feature lets administrators group related app activities into a structured pathway that users can browse as a "Zone" or collection within a selected app tab. Each module can contain individual activities, resources, or other grouped content, allowing administrators to organize large amounts of material without overwhelming the user. Modules also support progress tracking, so users can see how much of a pathway they have completed.',
    previewVideo: { url: 'https://www.youtube.com/embed/YL_cbhq8q9w' },
    setupHeading: 'Configuration Steps',
    body: [
      v('https://www.youtube.com/embed/WSS8aPTHMrk'),
      g(undefined, [
        'Open the Activities dashboard: from the administrator view, select the relevant group or app account, then go to Activities.',
        'Create or edit a module: click the + button to create a new activity, or use the pencil icon to edit an existing module.',
        'Assign the module to the correct group: in the module setup screen, confirm the intended group, such as Level Up, so the module appears only for that cohort of users.',
        'Name the module and add an icon/image: enter the module title, such as Demo Module, and optionally upload or select an image that will represent it in the app.',
        'Choose where the module appears: use Customize which Tab this Activity appears in to place the module in a specific app tab, such as Check In rather than the default Missions area.',
        'Set visibility options: decide whether the module should appear in the participant feed and whether any streak popup settings should be added.',
        'Add activities to the module: under Configure activities and options, click Add Activity and search for the activities, resources, or existing zones/areas that should be included inside the module.',
        'Arrange the content order: use the drag handle on the left of each added item to reorder how activities appear within the module.',
        'Choose module behavior: toggle options such as Sequential Ordering, Hide Sub Activities, and Track Activity Progress depending on whether users should move through items in sequence, whether sub-activities should be hidden outside the module, and whether completion progress should be displayed.',
        'Save and review in the app: save the module, then log in as a user in the relevant group to confirm that the module appears in the intended tab and that its activities display as expected.',
      ]),
      v('https://www.youtube.com/embed/ZJMibpl8deE'),
    ],
    useCases:
      'Modules are useful for organizing a structured intervention into themed pathways, such as crisis support, wellness skills, leadership skills, or adulting skills. They can also be used to create a guided sequence where users complete activities in order, or a flexible library where users choose the resources most relevant to them.',
  },
  {
    id: 'branching-logic',
    name: 'Branching Logic',
    shortName: 'Branching',
    overview:
      'The Branching Logic feature allows administrators to create app experiences that change based on a user’s responses. Instead of every participant moving through the same fixed activity sequence, branching logic can direct users to different follow-up questions, activities, modules, or resources based on the option they select. This helps make group-based app content feel more relevant while still being configured at the cohort or account level rather than individually for each user.',
    previewVideo: { url: 'https://www.youtube.com/embed/3yFUkCGMmI4' },
    setupHeading: 'Configuration Steps',
    body: [
      g(undefined, [
        'Open the activity to be customized: from the investigator account dashboard open Activities, and select the survey where branching should be added.',
        'Create the branching question: under the survey items, add or edit a question that will determine what the user sees next. Question types such as Text, Short Answer, and Time cannot be used with branching logic as each has open-ended responses.',
        'Enable contingency for a response option: for each response option that should trigger a branch, check Enable Contingency.',
        'Choose the contingency type: select whether the response should branch to another Question within the same activity or to another Activity elsewhere in the app.',
        'Branch to a follow-up question within the survey: if the contingency type is Question, enter the question number that should appear next when that response is selected.',
        'Branch to another activity or module: if the contingency type is Activity, select the destination activity, resource, or module.',
        'Set branch behavior: choose whether the user should be automatically directed to the branched content, whether they should return to the original activity after completion, and whether the branch should trigger at the end of the current survey.',
        'Repeat for each option: configure contingencies separately for each response option so different answers can lead to different follow-up paths.',
        'Save.',
      ]),
    ],
    useCases:
      'Branching logic is useful for intake surveys, skill-building pathways, or check-ins where users should receive different follow-up content based on their needs or preferences. This is particularly applicable to clinical interventions, where content can be tailored to user self-reported data in the moment.',
    extends: { label: 'Surveys', href: '/activities/reference/surveys' },
  },
  {
    id: 'streaks',
    name: 'Streak System',
    shortName: 'Streaks',
    overview:
      'The updated Streak system allows administrators to define how participant engagement is recognized across activities and on the app home page. Streaks can be configured for different time frames, such as daily, weekly, or monthly engagement, and can include customized congratulatory text shown to users after completing relevant activities. These updates make streaks more flexible, allowing them to reinforce app use, highlight key activities, and provide positive feedback in ways that fit a specific program or study.',
    previewVideo: { url: 'https://www.youtube.com/embed/Gv3hm84Zaa0' },
    setupHeading: 'Configuration Steps',
    body: [
      g('Activity-Level Streak', [
        'Configure an activity-level streak: go to Activities, select the activity to be edited, and open the activity settings.',
        'Set the activity location and visibility: confirm the activity title, the tab where the activity should appear, and whether it should appear in the participant feed.',
        'Use Streak popup settings: in the activity editor, find Streak popup settings.',
        'Choose the streak type: select whether the activity should contribute to a Daily, Weekly, or Monthly streak, or choose None if no streak popup should be used.',
        'Customize the activity streak message: add a Streak title and Streak description, such as a brief congratulatory message that appears after the participant completes the activity.',
        'Save the activity: save the updated activity settings so the streak popup is applied to that activity.',
      ]),
      g('Home Page Streak', [
        'Open Home Settings: from the group dashboard, go to the Users page and select the Home Settings gear icon.',
        'Choose the home page streak display type: select whether the home page should show streak information based on Favorites, a Custom setup, or None.',
        'Select a featured activity: under Featured Activity Settings, choose the activity that should be highlighted on the user’s home page, such as a daily check-in.',
        'Configure Home Page Streak Settings: choose the streak type for the home page streak display and customize the streak title and description shown to users.',
      ]),
    ],
    useCases:
      'Streaks can be used in mental health apps to encourage consistent engagement with repeated activities such as daily mood check-ins, sleep diaries, symptom ratings, or coping-skills practice. They can also support clinical interventions by giving users immediate positive feedback after completing key therapeutic tasks, such as mindfulness exercises, behavioral activation activities, or relapse-prevention planning. In research and implementation settings, flexible streak settings can help programs emphasize the activities most important for adherence while allowing administrators to decide whether engagement should be tracked daily, weekly, monthly, or not at all.',
    extends: {
      label: 'Streak popup (standard mindLAMP)',
      href: '/activities/configuration',
    },
  },
  {
    id: 'favoriting',
    name: 'Favoriting',
    overview:
      'The Favoriting feature allows users to mark mindLAMP activities or zones that they want to return to easily. Favorited items are collected in a dedicated Favorites view and can also appear on the user’s home page for quick access. This helps users personalize navigation within the app without requiring administrators to create a different configuration for each person.',
    previewVideo: { url: 'https://www.youtube.com/embed/hu1Wvi3AIkY' },
    setupHeading: 'Use',
    body: [
      g(undefined, [
        'Open an activity or zone: from the app, the user navigates to a tab such as Missions and opens the activity, module, or zone they want to save.',
        'Select the star icon: the user taps the star icon on the activity or zone card. Once selected, the star appears filled, indicating that the item has been favorited.',
        'View saved favorites: the user can open the Favorites view within the relevant tab to see favorited zones and activities grouped together.',
        'Access favorites from the home page: favorited items can also appear in the Your Favorites section of the home page, giving users a faster way to return to commonly used content.',
        'Remove a favorite: the user can tap the filled star again to unfavorite an item and remove it from the Favorites list.',
      ]),
    ],
    useCases:
      'Favoriting can help users quickly return to mindLAMP resources they find useful, such as grounding exercises, coping skills, or frequently used check-ins. It can also support repeated practice by making preferred activities easier to find during moments of stress or limited attention. Because favoriting is controlled by the user, it adds a lightweight form of personalization within a group-configured mindLAMP account.',
  },
  {
    id: 'messaging',
    name: 'Messaging',
    overview:
      'The Messaging feature allows designated staff to communicate directly with participants from within the app system. It is designed for programs where participants may need reminders, encouragement, troubleshooting, or brief support from a coach or coordinator.',
    previewVideo: { url: 'https://www.youtube.com/embed/E1vMCM3JfIs' },
    setupHeading: 'Use',
    body: [
      g(undefined, [
        'Create a Message Coordinator account: from the administrator dashboard, select an Investigator account and select the key icon.',
        'Enter account details: add the staff member’s name, username, password, and confirm the password.',
        'Select the correct role: in the Role dropdown, choose Message Coordinator. This creates a staff-facing account intended for messaging rather than a general research coordinator account.',
        'Understand what the Message Coordinator can see: once logged in, the Message Coordinator can access the participants in the assigned account, including participant names or IDs and the conversation interface. They can view message threads and unread-message indicators for those participants.',
        'Managing accounts: multiple message coordinators can be assigned to a single investigator account. This means different coordinators, upon logging in, can all access existing chats with users in that investigator account.',
        'Open the Conversations tab: the Message Coordinator logs in, opens Conversations from the left panel.',
        'Find a participant: use the participant list, unread-message badge, or search bar to locate the person to message.',
        'Open the message thread: click the conversation icon next to the participant’s name or ID to view the message history.',
        'Send a message: type the message into the text field at the bottom of the conversation and use the send button to deliver it to the participant.',
        'Manage messaging availability: use the Enabled toggle on the Conversations screen to control whether messaging is active for that account.',
        'User messaging: users can contact a message coordinator through the message icon in the top left of their account UI.',
      ]),
    ],
    useCases:
      'Messaging can support light-touch coaching, reminders to complete app activities, or follow-up when a participant appears disengaged. It can also be used for logistical communication, such as helping users navigate the app, resolve access issues, or understand where to find specific resources.',
    extends: { label: 'Messaging (standard mindLAMP)', href: '/dashboard/messaging' },
  },
  {
    id: 'video-conferencing',
    name: 'Embedded Video Conferencing',
    shortName: 'Video Conferencing',
    overview:
      'The Embedded Video Conferencing feature allows administrators to add a video meeting link as an activity inside mindLAMP. This lets participants access a scheduled virtual session directly from the app, alongside other activities, modules, and resources. The feature can be placed in a selected app tab, making it easier for users to find the correct meeting link for a group session, booster session, or other live contact.',
    previewVideo: { url: 'https://www.youtube.com/embed/XTGvgCHGGz4' },
    setupHeading: 'Configuration Steps',
    body: [
      g(undefined, [
        'Go to Activities: open the Activities section and click Add to create a new activity.',
        'Select the video conferencing activity type: choose the activity option for the embedded meeting link or virtual meeting activity.',
        'Enter the meeting link: paste the video conferencing URL into the Meeting Link field. The video shows a Google Meet link, but the workflow is intended for a conferencing link that participants can open from within mindLAMP.',
        'Save the activity: click Save so the meeting link appears for users in the selected group.',
      ]),
    ],
    useCases:
      'Embedded video conferencing can be used in mindLAMP to provide quick access to telehealth visits, group sessions, study check-ins, or coaching meetings. It can also support programs that combine self-guided app activities with scheduled live contact, such as booster sessions or weekly intervention meetings.',
  },
];

/* ============================================================
   STYLES (page-specific, kept inline to avoid a new CSS module)
   ============================================================ */

const featureBlockStyle: React.CSSProperties = {
  maxWidth: 880,
  margin: '0 auto',
};

const videoFrameStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  paddingTop: '56.25%',
  margin: '0.5rem 0 1.5rem',
  borderRadius: 12,
  overflow: 'hidden',
  background: 'var(--surface-elevated, #0f172a)',
};

const videoIframeStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
};

const videoCaptionStyle: React.CSSProperties = {
  marginTop: '1.75rem',
  marginBottom: '0.5rem',
  fontSize: '0.85rem',
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: 'var(--ifm-color-emphasis-600)',
};

const tabStripStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '0.5rem',
  overflowX: 'auto',
  WebkitOverflowScrolling: 'touch',
  padding: '0.5rem 0',
  scrollbarWidth: 'thin',
};

const tabStyle = (active: boolean): React.CSSProperties => ({
  padding: '0.5rem 1.1rem',
  borderRadius: 999,
  fontSize: '0.95rem',
  border: `1px solid ${active ? '#1f3a2e' : 'var(--ifm-color-emphasis-300)'}`,
  background: active ? '#1f3a2e' : 'var(--ifm-background-color)',
  color: active ? '#fff' : 'var(--ifm-color-emphasis-800)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  fontWeight: active ? 600 : 500,
  fontFamily: 'inherit',
  flexShrink: 0,
  transition: 'background 0.15s ease, color 0.15s ease, border-color 0.15s ease',
});

const extendsCalloutStyle: React.CSSProperties = {
  marginTop: '1.25rem',
  padding: '0.75rem 1rem',
  borderLeft: '3px solid #5a7d6a',
  background: 'var(--ifm-color-emphasis-100)',
  borderRadius: '0 8px 8px 0',
  fontSize: '0.95rem',
};

const detailsStyle: React.CSSProperties = {
  marginTop: '2.5rem',
  borderTop: '1px solid var(--ifm-color-emphasis-200)',
  paddingTop: '1rem',
};

const summaryStyle: React.CSSProperties = {
  cursor: 'pointer',
  fontSize: '1.25rem',
  fontWeight: 600,
  padding: '0.5rem 0',
  color: 'var(--ifm-color-emphasis-800)',
};

/* ============================================================
   RENDER HELPERS
   ============================================================ */

function VideoBlock({ video }: { video: Video }) {
  return (
    <div>
      {video.caption && <div style={videoCaptionStyle}>{video.caption}</div>}
      <div style={videoFrameStyle}>
        <iframe
          style={videoIframeStyle}
          src={video.url}
          title={video.caption ?? 'Walkthrough video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function StepGroupBlock({ group }: { group: StepGroup }) {
  return (
    <div style={{ marginTop: group.heading ? '1.25rem' : '0' }}>
      {group.heading && (
        <h4 style={{ marginBottom: '0.5rem' }}>{group.heading}</h4>
      )}
      <ol>
        {group.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  );
}

function FeatureBody({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) =>
        block.kind === 'video' ? (
          <VideoBlock key={i} video={block.video} />
        ) : (
          <StepGroupBlock key={i} group={block.group} />
        )
      )}
    </>
  );
}

function FeatureSection({ feature, index }: { feature: Feature; index: number }) {
  const isAlt = index % 2 === 1;

  return (
    <section
      id={feature.id}
      className={isAlt ? styles.sectionAlt : styles.section}
    >
      <div className="container">
        <div style={featureBlockStyle}>
          <Heading as="h2" className={styles.sectionTitle} style={{ textAlign: 'left' }}>
            {feature.name}
          </Heading>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>{feature.overview}</p>

          {feature.previewVideo && <VideoBlock video={feature.previewVideo} />}

          {feature.extends && (
            <div style={extendsCalloutStyle}>
              <strong>Extends:</strong>{' '}
              <Link to={feature.extends.href}>{feature.extends.label}</Link> in standard
              mindLAMP. This Safeguard build adds the configuration options described below.
            </div>
          )}

          <h3 style={{ marginTop: '2.5rem' }}>Use Cases</h3>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>{feature.useCases}</p>

          <details style={detailsStyle}>
            <summary style={summaryStyle}>{feature.setupHeading}</summary>
            <div style={{ marginTop: '1rem' }}>
              <FeatureBody blocks={feature.body} />
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function SafeguardFeatures() {
  const [activeId, setActiveId] = useState<string>(features[0].id);

  // On mount, honor the URL hash so deep links like #messaging open the right tab.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hashId = window.location.hash.slice(1);
    if (hashId && features.some((f) => f.id === hashId)) {
      setActiveId(hashId);
      setTimeout(() => {
        const el = document.querySelector(`[data-tab-id="${hashId}"]`);
        if (el && (el as HTMLElement).scrollIntoView) {
          (el as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }, 0);
    }
  }, []);

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (typeof window !== 'undefined' && window.history?.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const activeFeature = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <Layout
      title="Safeguard Feature Showcase"
      description="Features developed for the Safeguard deployment of mindLAMP — home page, modules, branching logic, streaks, favoriting, messaging, and embedded video conferencing."
    >
      {/* Hero */}
      <header
        className={styles.hero}
        style={{ background: 'linear-gradient(135deg, #1f3a2e 0%, #6b8c75 100%)' }}
      >
        <div className={styles.heroContent}>
          <div className={styles.heroTagline}>Project Showcase</div>
          <Heading as="h1" className={styles.heroTitle}>
            Safeguard
          </Heading>
          <p className={styles.heroSubtitle}>
            Safeguard is a life skills training program for U.S. Army soldiers, delivered
            through a customized mindLAMP experience built to support group-based program
            delivery. The features below help administrators organize app content, personalize
            each cohort&rsquo;s experience, and guide participants to the activities,
            resources, and communication channels most relevant to their group.
          </p>
        </div>
      </header>

      {/* Feature tab strip */}
      <section
        className={styles.section}
        style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem' }}
      >
        <div className="container">
          <div style={featureBlockStyle}>
            <div role="tablist" aria-label="Safeguard features" style={tabStripStyle}>
              {features.map((f) => {
                const isActive = f.id === activeId;
                return (
                  <button
                    key={f.id}
                    role="tab"
                    aria-selected={isActive}
                    data-tab-id={f.id}
                    onClick={() => handleSelect(f.id)}
                    style={tabStyle(isActive)}
                  >
                    {f.shortName ?? f.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Active feature */}
      <FeatureSection feature={activeFeature} index={0} />

      {/* Footer link back to projects */}
      <section className={styles.sectionAlt}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/projects" className={styles.guideLink}>
            &#8592; Back to all projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
