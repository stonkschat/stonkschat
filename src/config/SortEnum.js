import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';

export const SortEnum = {
  ACCOUNT_AGE: {
    label: 'account age',
    iconComponent: <CakeOutlinedIcon />,
  },
  ACCOUNT_KARMA: {
    label: 'account karma',
    iconComponent: <WbSunnyOutlinedIcon />,
  },
  AWARD_COUNT: {
    label: 'award count',
    iconComponent: <StarOutlinedIcon />,
  },
};
