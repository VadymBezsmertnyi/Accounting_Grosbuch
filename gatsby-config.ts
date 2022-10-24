import type { GatsbyConfig } from 'gatsby';
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(process.env);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ТОВ "Гросбух ГмбХ"`,
    description: `Компанія ТОВ «Гросбух ГмбХ», надає широкий спектр послуг з ведення бухгалтерського обліку підприємств. До кожного клієнта у нас індивідуальний підхід та гарантуємо надання професійних бухгалтерських функцій, а також повну конфіденційність інформації.`,
    author: `@VadymBezsmertnyi`,
    siteUrl: `https://www.grosbukh.com.ua/`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};

export default config;
