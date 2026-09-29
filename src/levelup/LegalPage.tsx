import type { ComponentType } from 'react';
import Head from '@docusaurus/Head';
import LayoutProvider from '@theme/Layout/Provider';
import MDXContent from '@theme/MDXContent';

import styles from './legal.module.css';

type Props = {
  title: string;
  description: string;
  Content: ComponentType;
};

// Standalone page for Level Up legal documents: deliberately no @theme/Layout,
// so there is no navbar, footer, announcement bar, or site branding.
export default function LegalPage({ title, description, Content }: Props) {
  return (
    <LayoutProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Level Up" />
        <meta name="twitter:title" content={title} />
        {/* Blank out the site-wide themeConfig.image (mindLAMP logo) */}
        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="summary" />
        {/* Helmet can't drop core's siteConfig favicon link; this later one wins in browsers */}
        <link rel="icon" href="data:," />
      </Head>
      <main className={styles.container}>
        <MDXContent>
          <Content />
        </MDXContent>
      </main>
    </LayoutProvider>
  );
}
