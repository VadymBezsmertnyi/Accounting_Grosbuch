import { createTheme, Theme } from '@mui/material/styles';
import { Lora, Nunito } from '../fonts';

type TCustomColors = {
  main: {
    borderColor: string;
    borderDesertSand: string;
    borderTumbleweed: string;
    borderDeer: string;
    coolGrey: string;
  };
  font: {};
  background: {};
  accent: {};
  colors: {};
  other: {};
};
declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom?: TCustomColors;
  }
  interface Palette {
    custom?: TCustomColors;
  }
}
declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export enum AppColor {
  BackgroundRaisinBlack = '#231C26',
  BackgroundRaisinBlack70 = '#231C26B2',
  CheckboxCoolGrey = '#9097AC',
  BorderDesertSand = '#EBC6A4',
  BorderTumbleweed = '#D4AA83',
  BorderDeer = '#B4885E',
}

export const createAppTheme = () => {
  const styles = createTheme();
  const theme = createTheme({
    typography: {
      fontFamily: 'Lora',
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: styles.palette.common.white,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: AppColor.BackgroundRaisinBlack,
          },
          '@font-face': [
            {
              fontFamily: 'Lora',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontWeight: 300,
              src: `url(${Lora}) format('truetype')`,
            },
            {
              fontFamily: 'Nunito',
              fontStyle: 'normal',
              fontDisplay: 'swap',
              fontWeight: 300,
              src: `url(${Nunito}) format('truetype')`,
            },
          ],
        },
      },
    },
    palette: {
      custom: {
        main: {
          borderColor: `linear-gradient(180deg, ${AppColor.BorderDesertSand} 11.22%, ${AppColor.BorderTumbleweed} 53.39%, ${AppColor.BorderDeer} 82.44%)`,
          borderDesertSand: AppColor.BorderDesertSand,
          borderTumbleweed: AppColor.BorderTumbleweed,
          borderDeer: AppColor.BorderDeer,
          coolGrey: AppColor.CheckboxCoolGrey,
        },
        font: {},
        background: {},
        colors: {},
        accent: {},
        other: {},
      },
    },
  });
  return theme;
};
