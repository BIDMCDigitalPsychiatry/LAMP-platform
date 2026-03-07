import React from 'react';
import Layout from '@theme/Layout';
import PublicationsList from '@site/src/components/PublicationsList';

export default function PublicationsPage() {
  return (
    <Layout
      title="Publications"
      description="Browse peer-reviewed publications featuring mindLAMP across mental health, neuroscience, and digital health"
    >
      <main style={{ padding: '2rem 1rem', maxWidth: '1400px', margin: '0 auto' }}>
        <PublicationsList />
      </main>
    </Layout>
  );
}
