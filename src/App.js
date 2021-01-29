import './styles/App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
    createStyles,
    makeStyles,
    CssBaseline,
    ThemeProvider,
} from '@material-ui/core';

import Routes from './Routes';
import theme from './styles/';

const useStyles = makeStyles((theme) => createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        height: '100%',
        width: '100%',
      },
      '#root': {
        height: '100%',
        width: '100%',
      }
    }
}));

const Spinner = () => {
    <div>LOADING....</div>
}

const History = createBrowserHistory();
function App() {
    useStyles();
  return (
     <Suspense fallback={<Spinner />}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
                <Router history={History}>
                    <Routes />
                </Router>
        </ThemeProvider>
    </Suspense>
    )
}

export default App;
