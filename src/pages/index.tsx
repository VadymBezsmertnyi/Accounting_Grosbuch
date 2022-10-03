import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { Layout } from '../components';

const IndexPage = () => {
  return <Layout>TEST LOYAUT</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>ТОВ "Гросбух ГмбХ"</title>;
