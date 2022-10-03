import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Box } from '@mui/material';

interface ISeoProps {
  description?: string;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
  title: string;
}

const Seo = ({
  lang = `en`,
  meta = [],
  description = ``,
  title,
}: ISeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Box>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.author || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      />
    </Box>
  );
};

export default Seo;
