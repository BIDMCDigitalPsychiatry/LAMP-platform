import { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './get-started.module.css';

const faqs = [
  {
    question: 'Can I use mindLAMP as an individual?',
    answer:
      'Currently, individuals can use mindLAMP if they enroll in a study or clinic that is running a mindLAMP project. See our Project Gallery for projects that are currently active. Otherwise, you can use the Self Help option in the app or dashboard to access a selection of mindLAMP activities without being enrolled in a project.',
  },
  {
    question: 'Can I use mindLAMP for my grant?',
    answer: 'We are happy to provide our services and support for grant purposes, including letters of support.',
  },
  {
    question: 'How much does this cost?',
    answer: 'Quotes are given after initial interest meeting.',
  },
  {
    question: 'Who will have my data?',
    answer:
      'mindLAMP instances can be hosted on our server or independently. Only staff assigned to the project will be able to see available data.',
  },
  {
    question: 'What platforms do you support?',
    answer: 'mindLAMP supports both Android and iOS platforms.',
  },
  {
    question: 'Can I add new features to mindLAMP?',
    answer:
      'Yes! Our team is constantly adding new features to mindLAMP and collaborating with other teams to make your vision actionable.',
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
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
}

export default function GetStarted() {
  return (
    <Layout title="Get Started" description="Start your own mindLAMP project">
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Start Your Own mindLAMP Project
          </Heading>
          <p className={styles.heroSubtitle}>
            If you are interested in using mindLAMP, this can be done in a number of ways. To get started, please
            determine which option below is right for you and fill out the interest form. A member of our team will
            review your request and respond promptly.
          </p>
          <Link
            className={styles.ctaButton}
            href="https://digitalpsychiatry.notion.site/26a33133d8a280b493cdd9503abcfb8c?pvs=105"
          >
            Fill Out Interest Form
          </Link>
        </div>
      </header>

      {/* Options Section */}
      <section className={styles.optionsSection}>
        <div className="container">
          <div className={styles.optionsGrid}>
            {/* Option 1 */}
            <div className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <span className={styles.optionNumber}>Option 1</span>
                <Heading as="h2" className={styles.optionTitle}>
                  Core Services
                </Heading>
              </div>
              <p className={styles.optionDescription}>
                Most teams implement mindLAMP through the mindLAMP Core, a centralized service that supports research
                teams and clinical programs in using mindLAMP correctly, consistently, and responsibly. The Core
                requires a business agreement to support teams throughout their project timeline.
              </p>
              <div className={styles.optionFeatures}>
                <Heading as="h4" className={styles.featuresTitle}>
                  The Core is responsible for:
                </Heading>
                <ul className={styles.featuresList}>
                  <li>Supporting teams throughout the full lifecycle of a project</li>
                  <li>Guiding how mindLAMP is configured and deployed</li>
                  <li>Ensuring studies are designed in ways that produce usable, comparable data</li>
                  <li>Maintaining shared infrastructure and analytics</li>
                </ul>
              </div>
              <Link className={styles.optionLink} href="https://research.bidmc.org/mindlamp/services">
                Learn more about services offered →
              </Link>
            </div>

            {/* Option 2 */}
            <div className={styles.optionCard}>
              <div className={styles.optionHeader}>
                <span className={styles.optionNumber}>Option 2</span>
                <Heading as="h2" className={styles.optionTitle}>
                  Self-Deployment
                </Heading>
              </div>
              <p className={styles.optionDescription}>
                Because mindLAMP is open-source, you may choose to deploy it yourself from our publicly available code;
                however, we cannot provide support for self-deployment, and it does require advanced technical
                expertise.
              </p>
              <div className={styles.optionNote}>
                <span className={styles.noteIcon}>ℹ️</span>
                <span>Requires advanced technical expertise. No support provided.</span>
              </div>
              <Link className={styles.optionLink} href="https://github.com/BIDMCDigitalPsychiatry">
                View GitHub →
              </Link>
            </div>
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
