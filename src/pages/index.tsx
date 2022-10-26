import React, { useLayoutEffect } from 'react';
import type { HeadFC } from 'gatsby';
import { BodySite, Layout } from '../components';
import { DEFAULT_AUTHOR, DEFAULT_DESCRIPTION } from '../constants/head';

const IndexPage = () => {
  useLayoutEffect(() => {
    if (document.readyState === 'complete') {
      const hash = window.location.hash;
      if (!hash) return;

      const el = document.getElementById(hash.slice(1));
      setTimeout(() => el?.scrollIntoView({ behavior: 'smooth' }), 10);
    }
  });

  return (
    <Layout>
      <BodySite />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>ТОВ "Гросбух ГмбХ"</title>
    <meta name="description" content={DEFAULT_DESCRIPTION} />
    <meta name="author" content={DEFAULT_AUTHOR} />
    <meta
      name="google-site-verification"
      content={process.env.GOOGLE_META_API}
    />
    <meta
      name="google-site-verification"
      content="chBOlG016GWR6XzhcA-UoOrY1H_ew4tSbEFSr1P6jTc"
    />
  </>
);
