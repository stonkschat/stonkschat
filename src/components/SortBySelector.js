import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { SortDrawer } from './SortDrawer';

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

export function SortBySelector({ configEnum, initialSort, sorterTitle }) {
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
        {sorterTitle}
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
          {Object.keys(configEnum).map((key) => {
            return (
              <MenuItem key={key} value={configEnum[key].label}>
                {configEnum[key].label.toLocaleUpperCase('en-US')}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <SortDrawer open={modalOpen} setSort={setSort} onClose={handleClose} sorterTitle={sorterTitle} />
    </div>
  );
}
