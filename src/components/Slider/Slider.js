import { withStyles, Slider, fade } from '@material-ui/core/';

const styles = (theme) => ({
  root: {
    color: '#3880ff',
    height: 2,
    paddingBottom: 5,
  },
  thumb: {
    height: 20,
    width: 20,
    border: `2px solid ${theme.palette.text.primary}`,
    backgroundColor: theme.palette.text.primary,
    borderRadius: 50,
    marginTop: -10,
    marginLeft: -10,
  },
  active: {},
  valueLabel: {
    ///transform: 'rotate(90deg)',
    left: 'calc(-50% + 6px)',
    top: 20,
    '& *': {
      borderRadius: 0,
      background: fade(theme.palette.text.primary, 0.5),
      color: theme.palette.background.primary,
    },
  },
  track: {
    height: 2,
    background: theme.palette.text.primary,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: theme.palette.divider,
  },
  mark: {
    backgroundColor: theme.palette.divider,
    height: 11,
    width: 1,
    marginTop: -5,
  },
  markActive: {
    opacity: 1,
    backgroundColor: theme.palette.text.secondary,
  },
});

export default withStyles(styles)(Slider);
