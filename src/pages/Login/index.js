import React, { useState } from 'react';
import Slider from 'src/components/Slider/';
import { makeStyles, Box, Typography } from '@material-ui/core/';
import { valueLookup } from 'src/components/Slider/marks';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

//Temporary function to demonstrate how to use the slider
const Login = () => {
  const [sliderValue, setSliderValue] = useState(3); //label value
  const [filterValue, setFilterValue] = useState(3); // filter value

  //update label here when slider changes values
  const handleChange = (e, v) => {
    sliderValue !== v && setSliderValue(v);
  };

  //update filter here when slider is released
  const commitChange = (e, v) => {
    filterValue !== v && setFilterValue(v);
  };

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h4" style={{ marginBottom: 50 }}>
        {valueLookup[filterValue]}
      </Typography>
      <Slider value={sliderValue} handleChange={handleChange} commitChange={commitChange} />
    </Box>
  );
};

export default Login;
