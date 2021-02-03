import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

export const FilterEnum = {
  GLOBAL: {
    label: 'global',
    iconComponent: <PublicOutlinedIcon />,
  },
  DAILY_DISCUSSION: {
    label: 'daily discussion',
    iconComponent: <ImportContactsOutlinedIcon />,
  },
  SPECIFIC_THREAD: {
    label: 'specific thread...',
    iconComponent: <AddBoxOutlinedIcon />,
  },
};
