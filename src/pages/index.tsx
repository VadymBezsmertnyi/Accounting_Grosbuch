import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components';
import { DEFAULT_AUTHOR, DEFAULT_DESCRIPTION } from '../constants/head';

const IndexPage = () => {
  return <Layout>TEST LOYAUT</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>ТОВ "Гросбух ГмбХ"</title>
    <meta name="description" content={DEFAULT_DESCRIPTION} />
    <meta name="description" content={DEFAULT_AUTHOR} />
    <meta
      name="google-site-verification"
      content={process.env.GOOGLE_META_API}
    />
  </>
);
