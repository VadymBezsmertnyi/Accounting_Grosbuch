import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ТОВ "Гросбух ГмбХ"`,
    description: `Компанія ТОВ «Гросбух ГмбХ», надає широкий спектр послуг з ведення бухгалтерського обліку підприємств. До кожного клієнта у нас індивідуальний підхід та гарантована якість обслуговування саме з тих видів послуг, які необхідні для ведення Вашої діяльності. Ми гарантуємо надання професійних бухгалтерських функцій, а також повну конфіденційність інформації.`,
    author: `@VadymBezsmertnyi`,
    siteUrl: `https://www.grosbukh.com.ua/`,
  },
  graphqlTypegen: true,
  plugins: [],
};

export default config;
