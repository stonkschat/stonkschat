import { Tooltip, withStyles } from '@material-ui/core/';

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    color: 'black',
    backgroundColor: theme.palette.text.primary,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
  arrow: {
    color: theme.palette.text.primary,
  },
}))(Tooltip);

export default CustomTooltip;
