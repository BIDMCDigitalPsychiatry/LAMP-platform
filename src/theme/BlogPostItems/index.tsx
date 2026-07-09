import React from 'react';
import BlogPostItems from '@theme-original/BlogPostItems';
import type BlogPostItemsType from '@theme/BlogPostItems';
import type {WrapperProps} from '@docusaurus/types';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Props = WrapperProps<typeof BlogPostItemsType>;

// Notion form that writes to the "Mailing list" database.
// It opens in a new tab because Notion serves `x-frame-options: SAMEORIGIN`
// and cannot be embedded inline.
const SUBSCRIBE_FORM_URL =
  'https://digitalpsychiatry.notion.site/39733133d8a2808b9575d4dec8dfbe28';

function SubscribeCallout(): JSX.Element {
  return (
    <div className={styles.banner}>
      <p className={styles.heading}>Get mindLAMP updates in your inbox!</p>
      <Link
        className="button button--primary button--lg"
        to={SUBSCRIBE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Subscribe
      </Link>
    </div>
  );
}

export default function BlogPostItemsWrapper(props: Props): JSX.Element {
  return (
    <>
      <SubscribeCallout />
      <BlogPostItems {...props} />
    </>
  );
}
