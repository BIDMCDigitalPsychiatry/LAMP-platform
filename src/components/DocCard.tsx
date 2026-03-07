import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useDocsVersion, useDocsData} from '@docusaurus/plugin-content-docs/client';

function useDoc(id: string) {
  // Version metadata has title/description but no path
  const version = useDocsVersion();
  const versionDocs = version.docs as Record<string, {id: string; title: string; description: string; sidebar?: string}>;
  const docMeta = versionDocs[id];
  if (!docMeta) {
    throw new Error(
      `DocCard: No doc with id "${id}". Available IDs:\n${Object.keys(versionDocs).join(', ')}`,
    );
  }

  // Global data has path (respects slug frontmatter)
  const globalData = useDocsData('default');
  const globalVersion = globalData.versions[0];
  const globalDoc = globalVersion?.docs.find((d) => d.id === id);

  return {
    title: docMeta.title,
    description: docMeta.description,
    path: globalDoc?.path ?? `/${id}`,
  };
}

export function DocCard({
  id,
  title,
  description,
  hash,
}: {
  /** Doc ID matching file path without number prefixes, e.g. "app/getting-started/download" */
  id: string;
  /** Override the doc's frontmatter title */
  title?: string;
  /** Override the doc's frontmatter description */
  description?: string;
  /** Optional anchor hash, e.g. "learn" */
  hash?: string;
}) {
  const docData = useDoc(id);
  const href = hash ? `${docData.path}#${hash}` : docData.path;

  return (
    <Link to={href}>
      <div className="doc-card-title">{title ?? docData.title}</div>
      {(description ?? docData.description) && (
        <div className="doc-card-desc">{description ?? docData.description}</div>
      )}
    </Link>
  );
}

export function DocCardGrid({children}: {children: ReactNode}) {
  return <div className="doc-card-grid">{children}</div>;
}
