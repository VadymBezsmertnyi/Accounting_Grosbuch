import { createTheme, Theme } from '@mui/material/styles';

type TCustomColors = {
  main: {
    borderColor: string;
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
        },
      },
    },
    palette: {
      custom: {
        main: {
          borderColor: `linear-gradient(180deg, ${AppColor.BorderDesertSand} 11.22%, ${AppColor.BorderTumbleweed} 53.39%, ${AppColor.BorderDeer} 82.44%)`,
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
