import React from 'react';
import Slider from './Slider';
import Label from './Label';
import { marks } from './marks';
import { makeStyles, Box, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 800,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}));

const SliderComponent = ({ handleChange, commitChange, value }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <div>
        <Typography variant="h5">OLDER</Typography>
      </div>
      <div style={{ width: '80%', marginLeft: 20, marginRight: 20 }}>
        <Slider
          step={null}
          min={1}
          max={5}
          value={value}
          onChange={handleChange}
          onChangeCommitted={commitChange}
          aria-label="account age"
          defaultValue={3}
          marks={marks}
          ValueLabelComponent={Label}
          valueLabelDisplay="auto"
        />
      </div>
      <div>
        <Typography variant="h5">NEWER</Typography>
      </div>
    </Box>
  );
};

export default SliderComponent;
