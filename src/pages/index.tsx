import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { BodySite, Layout } from '../components';
import { DEFAULT_AUTHOR, DEFAULT_DESCRIPTION } from '../constants/head';
import { Typography } from '@mui/material';

const IndexPage = () => {
  return (
    <Layout>
      <Typography>
        <BodySite />
      </Typography>
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
  </>
);
