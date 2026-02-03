import React from 'react';
import Layout from '@theme/Layout';
import PublicationsList from '@site/src/components/PublicationsList';

export default function PublicationsPage() {
  return (
    <Layout
      title="Publications"
      description="Explore MindLAMP in the literature - peer-reviewed research publications and studies"
    >
      <main style={{ padding: '2rem 1rem', maxWidth: '1400px', margin: '0 auto' }}>
        <PublicationsList />
      </main>
    </Layout>
  );
}
