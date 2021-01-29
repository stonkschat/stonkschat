import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListSubheader from '@material-ui/core/ListSubheader';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';

export const SortEnum = {
  ACCOUNT_AGE: 'account age',
  ACCOUNT_KARMA: 'account karma',
  AWARD_COUNT: 'award count',
};

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formControl: {
      '&. MuiInputBase--root': {},
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '& .Mui-focused': {
        backgroundColor: 'transparent',
      },
    },
    button: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    select: {
      // same font size as a medium size button
      fontSize: '0.875em',
      padding: '6px 0',
      '&:focus': {
        backgroundColor: 'transparent',
      },
    },
  };
});

export function SortBySelector({ initialSort }) {
  const [selectOpen, setSelectOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const theme = useTheme();
  const useModal = useMediaQuery(theme.breakpoints.down('sm'));
  const [sort, setSort] = useState(initialSort);
  const classes = useStyles(theme);

  const handleOpen = () => {
    if (useModal) {
      setModalOpen(true);
      setSelectOpen(false);
    } else {
      setModalOpen(false);
      setSelectOpen(true);
    }
  };

  const handleClose = (event) => {
    setSelectOpen(false);
    setModalOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button className={classes.button} onClick={handleOpen}>
        SORT COMMENTS BY:
      </Button>
      <FormControl className={classes.formControl} size="small">
        <Select
          classes={{
            root: classes.select,
          }}
          margin="dense"
          disableUnderline={true}
          value={sort}
          onChange={(event) => {
            setSort(event.target.value);
          }}
          open={selectOpen}
          onClose={handleClose}
          onOpen={handleOpen}
          inputProps={{ 'aria-label': 'Sort comments by' }}
        >
          <MenuItem value={SortEnum.ACCOUNT_AGE}>{SortEnum.ACCOUNT_AGE.toLocaleUpperCase('en-US')}</MenuItem>
          <MenuItem value={SortEnum.ACCOUNT_KARMA}>{SortEnum.ACCOUNT_KARMA.toLocaleUpperCase('en-US')}</MenuItem>
          <MenuItem value={SortEnum.AWARD_COUNT}>{SortEnum.AWARD_COUNT.toLocaleUpperCase('en-US')}</MenuItem>
        </Select>
      </FormControl>
      <SortDrawer open={modalOpen} setSort={setSort} onClose={handleClose} />
    </div>
  );
}

function SortDrawer({ open, setSort, onClose }) {
  return (
    <Drawer anchor={'bottom'} open={open} onClose={onClose}>
      <div role="presentation" onClick={onClose}>
        <Divider />
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              SORT COMMENTS BY
            </ListSubheader>
          }
        >
          <ListItem
            button
            onClick={(event) => {
              setSort(SortEnum.ACCOUNT_AGE);
            }}
          >
            <ListItemIcon>
              <CakeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={SortEnum.ACCOUNT_AGE.toLocaleUpperCase('en-US')} />
          </ListItem>

          <ListItem
            button
            onClick={(event) => {
              setSort(SortEnum.ACCOUNT_KARMA);
            }}
          >
            <ListItemIcon>
              <WbSunnyOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={SortEnum.ACCOUNT_KARMA.toLocaleUpperCase('en-US')} />
          </ListItem>
          <ListItem
            button
            onClick={(event) => {
              setSort(SortEnum.AWARD_COUNT);
            }}
          >
            <ListItemIcon>
              <StarOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={SortEnum.AWARD_COUNT.toLocaleUpperCase('en-US')} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
