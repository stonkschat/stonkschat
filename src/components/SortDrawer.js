import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SortEnum } from '../config/SortEnum';

export function SortDrawer({ open, setSort, onClose, sorterTitle }) {
  return (
    <Drawer anchor={'bottom'} open={open} onClose={onClose}>
      <div role="presentation" onClick={onClose}>
        <Divider />
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {sorterTitle}
            </ListSubheader>
          }
        >
          {Object.keys(SortEnum).map((key) => {
            return (
              <ListItem
                key={key}
                button
                onClick={(event) => {
                  setSort(SortEnum[key].label);
                }}
              >
                <ListItemIcon>{SortEnum[key].iconComponent}</ListItemIcon>
                <ListItemText primary={SortEnum[key].label.toLocaleUpperCase('en-US')} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}
