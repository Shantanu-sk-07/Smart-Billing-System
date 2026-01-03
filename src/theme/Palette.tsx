// // material-ui
// import { createTheme,type PaletteMode } from '@mui/material/styles';
// import { type PaletteOptions } from '@mui/material';

// // assets
// import defaultColor from '../styles/_themes-vars.module.scss';

// // Define the type for the custom color object imported from SCSS
// interface CustomColor {
//   [key: string]: string;
// }

// // Extend the MUI Palette to include custom colors
// declare module '@mui/material/styles' {
//   interface Palette {
//     orange: Palette['primary'];
//     dark: Palette['primary'];
//     text: Palette['text'] & {
//       dark?: string;
//     };
//   }
//   interface PaletteOptions {
//     orange?: PaletteOptions['primary'];
//     dark?: PaletteOptions['primary'];
//     text?: PaletteOptions['text'] & {
//       dark?: string;
//     };
//   }
// }

// // ==============================|| DEFAULT THEME - PALETTE ||============================== //

// export default function Palette(mode: PaletteMode, presetColor: string) {
//   let colors;
//   switch (presetColor) {
//     case 'default':
//     default:
//       colors = defaultColor;
//   }

//   const palette: PaletteOptions = {
//     mode,
//     common: {
//       black: colors.darkPaper
//     },
//     primary: {
//       light: colors.primaryLight,
//       main: colors.primaryMain,
//       dark: colors.primaryDark,
//       200: colors.primary200,
//       800: colors.primary800
//     },
//     secondary: {
//       light: colors.secondaryLight,
//       main: colors.secondaryMain,
//       dark: colors.secondaryDark,
//       200: colors.secondary200,
//       800: colors.secondary800
//     },
//     error: {
//       light: colors.errorLight,
//       main: colors.errorMain,
//       dark: colors.errorDark
//     },
//     orange: {
//       light: colors.orangeLight,
//       main: colors.orangeMain,
//       dark: colors.orangeDark
//     },
//     warning: {
//       light: colors.warningLight,
//       main: colors.warningMain,
//       dark: colors.warningDark,
//       contrastText: colors.grey700
//     },
//     success: {
//       light: colors.successLight,
//       200: colors.success200,
//       main: colors.successMain,
//       dark: colors.successDark
//     },
//     grey: {
//       50: colors.grey50,
//       100: colors.grey100,
//       500: colors.grey500,
//       600: colors.grey600,
//       700: colors.grey700,
//       900: colors.grey900
//     },
//     dark: {
//       light: colors.darkTextPrimary,
//       main: colors.darkLevel1,
//       dark: colors.darkLevel2,
//       800: colors.darkBackground,
//       900: colors.darkPaper
//     },
//     text: {
//       primary: colors.grey700,
//       secondary: colors.grey500,
//       dark: colors.grey900,
//       hint: colors.grey100
//     },
//     divider: colors.grey200,
//     background: {
//       paper: colors.paper,
//       default: colors.paper
//     }
//   };

//   return createTheme({ palette });
// }
import { createTheme, type PaletteMode } from '@mui/material/styles';
import { type PaletteOptions } from '@mui/material';
import defaultColor from '../styles/_themes-vars.module.scss';

declare module '@mui/material/styles' {
  interface TypeText {
    hint?: string;
  }

  interface Palette {
    customText?: {
      dark?: string;
    };
  }

  interface PaletteOptions {
    customText?: {
      dark?: string;
    };
  }
}

// ==============================|| DEFAULT THEME - PALETTE ||============================== //

export default function Palette(mode: PaletteMode, presetColor: string) {
  let colors;
  switch (presetColor) {
    case 'default':
    default:
      colors = defaultColor;
  }

  const isDark = mode === 'dark';

  const palette: PaletteOptions = {
    mode,
    common: {
      black: colors.darkPaper,
    },
    primary: {
      light: colors.primaryLight,
      main: colors.primaryMain,
      dark: colors.primaryDark,
      200: colors.primary200,
      800: colors.primary800,
    },
    secondary: {
      light: colors.secondaryLight,
      main: colors.secondaryMain,
      dark: colors.secondaryDark,
      200: colors.secondary200,
      800: colors.secondary800,
    },
    error: {
      light: colors.errorLight,
      main: colors.errorMain,
      dark: colors.errorDark,
    },
    warning: {
      light: colors.warningLight,
      main: colors.warningMain,
      dark: colors.warningDark,
      contrastText: colors.grey700,
    },
    success: {
      light: colors.successLight,
      200: colors.success200,
      main: colors.successMain,
      dark: colors.successDark,
    },
    grey: {
      50: colors.grey50,
      100: colors.grey100,
      500: colors.grey500,
      600: colors.grey600,
      700: colors.grey700,
      900: colors.grey900,
    },

    text: {
      primary: isDark ? '#ffffff' : "#111827",
      secondary: isDark ? '#bdbdbd' : "#4b5563",
      hint: isDark ? '#cccccc' : '#0F172A',
    },

    customText: {
      dark: isDark ? '#e0e0e0' : colors.grey900,
    },

    divider: isDark ? '#444444' : colors.grey200,

   background: {
  default: isDark ? '#121212' : '#ffffff',
  paper: isDark ? '#1e1e1e' : '#ffffff',
  box: isDark ? '#1e1e1e' : '#f4f6f8'
}

  };

  return createTheme({ palette });
}
