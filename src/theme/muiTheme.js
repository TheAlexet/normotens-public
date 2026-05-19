// src/theme/muiTheme.js
import { createTheme } from '@mui/material/styles'
import { lightTheme, darkTheme } from './theme'
import { typography } from './typography'

export const getMuiTheme = (mode = 'light') => {
  const currentTheme = mode === 'dark' ? darkTheme : lightTheme

  return createTheme({
    palette: {
      mode,
      primary: { main: currentTheme.colors.primary },
      secondary: { main: currentTheme.colors.secondary },
      error: { main: currentTheme.colors.error },
      warning: { main: currentTheme.colors.warning },
      info: { main: currentTheme.colors.info },
      success: { main: currentTheme.colors.success },
      text: {
        primary: currentTheme.colors.textPrimary,
        secondary: currentTheme.colors.textSecondary,
      },
      background: {
        default: currentTheme.colors.backgroundPrimary,
        paper: currentTheme.colors.backgroundSecondary,
      },
    },
    typography: {
      fontFamily: '"Lato", sans-serif',
      ...typography,
    },
  })
}