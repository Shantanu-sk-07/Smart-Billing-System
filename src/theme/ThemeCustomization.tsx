import { useMemo, type ReactNode } from 'react';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  type ThemeOptions,
  type PaletteMode,
  type Components,
  type TypographyVariantsOptions
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Project imports
import Palette from './Palette';
import ComponentStyleOverrides from './ComponentStyleOverrides';
import CustomShadows from './Shadows';

interface ThemeCustomizationProps {
  children: ReactNode;
  mode: PaletteMode; 
}

const defaultConfig = {
  borderRadius: 8,
  fontFamily: `'Roboto', sans-serif`,
  outlinedFilled: true,
  presetColor: 'default'
};

export default function ThemeCustomization({ children, mode }: ThemeCustomizationProps) {
  const { borderRadius, fontFamily, outlinedFilled, presetColor } = defaultConfig;

  const baseTheme = useMemo(() => Palette(mode, presetColor), [mode, presetColor]);

  const themeTypography = useMemo<TypographyVariantsOptions>(
    () => ({
      fontFamily,
      h6: {
        fontWeight: 500,
        color: baseTheme.palette.text.primary,
        fontSize: '0.75rem'
      },
      h5: {
        fontSize: '0.875rem',
        color: baseTheme.palette.text.primary,
        fontWeight: 500
      },
      h4: {
        fontSize: '1rem',
        color: baseTheme.palette.text.primary,
        fontWeight: 600
      },
      h3: {
        fontSize: '1.25rem',
        color: baseTheme.palette.text.primary,
        fontWeight: 600
      },
      h2: {
        fontSize: '1.5rem',
        color: baseTheme.palette.text.primary,
        fontWeight: 700
      },
      h1: {
        fontSize: '2.125rem',
        color: baseTheme.palette.text.primary,
        fontWeight: 700
      },
      subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: baseTheme.palette.text.secondary
      },
      subtitle2: {
        fontSize: '0.75rem',
        fontWeight: 400,
        color: baseTheme.palette.text.secondary
      },
      caption: {
        fontSize: '0.75rem',
        color: baseTheme.palette.text.secondary,
        fontWeight: 400
      },
      body1: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.334em',
        color: baseTheme.palette.text.primary
        
      },
      body2: {
        letterSpacing: '0em',
        fontWeight: 400,
        lineHeight: '1.5em',
        color: baseTheme.palette.text.primary
      },
      button: {
        textTransform: 'capitalize' as const,
        fontWeight: 500
      }
    }),
    [fontFamily, baseTheme]
  );

  const themeCustomShadows = useMemo(() => CustomShadows(mode, baseTheme), [mode, baseTheme]);

  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      direction: 'ltr',
      palette: baseTheme.palette,
      mixins: {
        toolbar: {
          minHeight: '48px',
          padding: '16px',
          '@media (min-width: 600px)': {
            minHeight: '48px'
          }
        }
      },
      typography: themeTypography,
      customShadows: themeCustomShadows
    }),
    [baseTheme, themeCustomShadows, themeTypography]
  );

  const finalTheme = useMemo(() => {
    const theme = createTheme(themeOptions);
    theme.components = ComponentStyleOverrides(theme, borderRadius, outlinedFilled) as unknown as Components;
    return theme;
  }, [themeOptions, borderRadius, outlinedFilled]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={finalTheme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
