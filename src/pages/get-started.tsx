import { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './get-started.module.css';

const faqs = [
  {
    question: 'Can I use mindLAMP as an individual?',
    answer:
      'Currently, individuals can use mindLAMP if they enroll in a project or clinic that is running mindLAMP. See our [Project Gallery](/projects) for projects that are currently active. Otherwise, you can use the [Self Help option](/app/getting-started/sign-in) in the app or dashboard to access a selection of mindLAMP activities without being enrolled in a project.',
  },
  {
    question: 'Can I use mindLAMP for my grant?',
    answer: 'We are happy to provide our services and support for grant purposes, including letters of support. Explore the [capability pages](/capabilities) to see what mindLAMP can do for your project.',
  },
  {
    question: 'How much does this cost?',
    answer:
      'Pricing depends on your project scope, including the number of participants, sites, duration, and any custom development needs. We provide detailed quotes after an initial consultation to understand your specific needs. The consultation itself is free.',
  },
  {
    question: 'Who will have my data?',
    answer:
      'Your institution owns its data. mindLAMP can be deployed on shared infrastructure (hosted by the Core team at BIDMC) or on a dedicated instance for your project. Only staff assigned to the project can access the data. The platform supports HIPAA-compliant workflows, and deployment options can be tailored to meet your institutional data and privacy requirements. See our [Security & Privacy Policy](/privacy) for details.',
  },
  {
    question: 'What platforms do you support?',
    answer:
      'mindLAMP supports iOS (14+) and Android (8+), with companion apps for Apple Watch and WearOS devices. The web dashboard runs in any modern web browser. See the [download guide](/app/getting-started/download) for details.',
  },
  {
    question: 'Can I add new features to mindLAMP?',
    answer:
      'Yes. The Core team regularly adds new features and can develop custom cognitive games, specialized analysis scripts, new survey types, or unique app experiences tailored to your project needs. Custom development is available as part of a Core Services agreement. See the [custom activities guide](/developer/extending/custom-activities) for examples.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className={`${styles.faqIcon} ${isOpen ? styles.faqIconOpen : ''}`}>+</span>
      </button>
      {isOpen && <div className={styles.faqAnswer} dangerouslySetInnerHTML={{ __html: answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>') }} />}
    </div>
  );
}

export default function GetStarted() {
  return (
    <Layout title="Get Started" description="Start your own mindLAMP project with a free consultation">
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Start Your Own mindLAMP Project
          </Heading>
          <p className={styles.heroSubtitle}>
            The mindLAMP Core team at Beth Israel Deaconess Medical Center supports teams from project planning
            through data analysis. Fill out the interest form below and a team member will follow up within a few
            business days to schedule a free consultation.
          </p>
          <Link
            className={styles.ctaButton}
            href="https://digitalpsychiatry.notion.site/26a33133d8a280b493cdd9503abcfb8c?pvs=105"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </header>

      {/* What to Expect */}
      <section className={styles.optionsSection}>
        <div className="container">
          <div className={styles.optionsGrid} style={{ gridTemplateColumns: '1fr' }}>
            <div className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <Heading as="h2" className={styles.optionTitle}>
                  What to Expect
                </Heading>
              </div>
              <p className={styles.optionDescription}>
                After you submit the interest form, here is how the process works:
              </p>
              <div className={styles.optionFeatures}>
                <ul className={styles.featuresList}>
                  <li><strong>Within a few business days:</strong> A Core team member reviews your submission and reaches out to schedule a consultation call.</li>
                  <li><strong>Consultation call (free):</strong> We discuss your goals, project design, timeline, and any technical requirements. We share examples from similar projects.</li>
                  <li><strong>Proposal & agreement:</strong> Based on the consultation, we provide a tailored proposal including scope, deployment option, and pricing.</li>
                  <li><strong>Configuration & onboarding:</strong> Once agreed, the Core team configures the platform, sets up your project, and provides training for your team.</li>
                </ul>
              </div>
              <Link className={styles.optionLink} href="https://research.bidmc.org/mindlamp/services">
                Learn more about Core Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explore While You Wait */}
      <section className={styles.exploreSection}>
        <div className="container">
          <Heading as="h2" className={styles.faqTitle}>
            Explore While You Wait
          </Heading>
          <div className={styles.exploreGrid}>
            <Link className={styles.exploreCard} to="/capabilities/collect">
              <div className={styles.exploreCardTitle}>Collect Rich Data</div>
              <div className={styles.exploreCardDescription}>
                Passive sensors, cognitive games, surveys, and wearable data
              </div>
            </Link>
            <Link className={styles.exploreCard} to="/capabilities/experience">
              <div className={styles.exploreCardTitle}>Engage Participants</div>
              <div className={styles.exploreCardDescription}>
                The participant app, real project screenshots, and customization options
              </div>
            </Link>
            <Link className={styles.exploreCard} to="/capabilities/monitor">
              <div className={styles.exploreCardTitle}>Monitor Engagement</div>
              <div className={styles.exploreCardDescription}>
                Dashboards, data quality tracking, and participant insights
              </div>
            </Link>
            <Link className={styles.exploreCard} to="/capabilities/analyze">
              <div className={styles.exploreCardTitle}>Analyze & Visualize Outcomes</div>
              <div className={styles.exploreCardDescription}>
                Feature extraction, visualization, and validated analysis tools
              </div>
            </Link>
            <Link className={styles.exploreCard} to="/capabilities/configure">
              <div className={styles.exploreCardTitle}>How You Customize Projects</div>
              <div className={styles.exploreCardDescription}>
                Deployment options, participant management, and scheduling
              </div>
            </Link>
            <Link className={styles.exploreCard} to="/projects">
              <div className={styles.exploreCardTitle}>Project Gallery</div>
              <div className={styles.exploreCardDescription}>
                See active and completed projects across 50+ sites worldwide
              </div>
            </Link>
            <Link className={styles.exploreCard} to="/publications">
              <div className={styles.exploreCardTitle}>Publications</div>
              <div className={styles.exploreCardDescription}>
                120+ peer-reviewed publications using mindLAMP
              </div>
            </Link>
            <Link className={styles.exploreCard} to="/docs">
              <div className={styles.exploreCardTitle}>Documentation</div>
              <div className={styles.exploreCardDescription}>
                Technical reference, guides, and API documentation
              </div>
            </Link>
            <Link className={styles.exploreCard} to="/privacy">
              <div className={styles.exploreCardTitle}>Security & Privacy Policy</div>
              <div className={styles.exploreCardDescription}>
                Data ownership, HIPAA compliance, and privacy practices
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqContainer}>
            <Heading as="h2" className={styles.faqTitle}>
              Frequently Asked Questions
            </Heading>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
