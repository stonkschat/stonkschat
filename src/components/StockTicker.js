import React from 'react';
import { makeStyles, Box, Typography, fade } from '@material-ui/core/';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons/';

const tickers = [
  {
    symbol: 'GME',
    price: 420.69,
    change: 120.12,
  },
  {
    symbol: 'BB',
    price: 223.69,
    change: 82.23,
  },
  {
    symbol: 'TSLA',
    price: 294.69,
    change: 23.26,
  },
  {
    symbol: 'AAPL',
    price: 121.69,
    change: -40,
  },
  {
    symbol: 'NDAQ',
    price: 3.5,
    change: -163.26,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    width: '100vw',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 205,
    //border: '2px solid salmon'
  },
  name: {
    //background: 'orange',
    width: '25%',
    height: '100%',
  },
  price: {
    height: '100%',
    fontWeight: 400,
    color: fade(theme.palette.text.primary, 0.8),
  },
  success: {
    color: theme.palette.success.light,
    height: '100%',
  },
  error: {
    color: theme.palette.error.light,
    height: '100%',
  },
}));

const StockTicker = ({ handleChange, commitChange, value }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {tickers.map(({ symbol, price, change }, idx) => (
        <Box className={classes.tickerContainer} key={idx}>
          <Typography variant="h5" color="textPrimary" className={classes.name}>
            {symbol}
          </Typography>
          <Typography variant="h5" color="textPrimary" className={classes.price}>
            $ {price}
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            {change > 0 ? (
              <ArrowDropUp className={classes.success} />
            ) : (
              <ArrowDropDown className={classes.error} />
            )}
            <Typography variant="h5" color="textPrimary" className={change > 0 ? classes.success : classes.error}>
              + {parseInt(change)}%{' '}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default StockTicker;
