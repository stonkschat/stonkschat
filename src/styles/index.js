import { createMuiTheme } from '@material-ui/core';
import typography from './typography';
import { strongShadows } from './shadows';

const config = {
  direction: 'ltr',
  typography,
  overrides: {},
  palette: {
    type: 'dark',
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.04)',
      selected: 'rgba(255, 255, 255, 0.08)',
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(255, 255, 255, 0.12)',
      shadow: 'rgba(0, 0, 0, 0.4)',
    },
    background: {
      default: '#1d1d1d',
      dark: '#1c2025',
      paper: '#303030',
    },
    primary: {
      main: '#1f2229',
    },
    secondary: {
      main: '#8a85ff',
    },
    text: {
      primary: '#e6e5e8',
      secondary: '#adb0bb',
    },
  },
  shadows: strongShadows,
};

const theme = createMuiTheme(config);
export default theme;
