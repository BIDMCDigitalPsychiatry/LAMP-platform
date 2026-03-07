import React from 'react';
import Layout from '@theme/Layout';
import ProjectGallery from '@site/src/components/ProjectGallery';

export default function ProjectsPage() {
  return (
    <Layout
      title="Project Gallery"
      description="Explore how teams around the world use mindLAMP to support mental health programs, clinical care, and research"
    >
      <main style={{ padding: '2rem 1rem', maxWidth: '1400px', margin: '0 auto' }}>
        <ProjectGallery />
      </main>
    </Layout>
  );
}
