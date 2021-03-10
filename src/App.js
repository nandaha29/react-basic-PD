import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Utama from '../src/Utama';
import { CssBaseline, makeStyles, } from '@material-ui/core';

const useStyles = makeStyles({
  appMain: {
    width: '100%',
    display: 'inline-block',
  }
})

export default function App() {
  // state = {  }
  const classes = useStyles();

    return (  
      <>
        <div className={classes.appMain}>
          <Navbar />
          <Utama />
          
        </div>
        <CssBaseline />
      </>

    );
  }

 