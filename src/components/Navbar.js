import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Grid, IconButton, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: '#fff',
    },
    title: {
        color: '#008891',
    },

}))

export default function Header() {
    
    const classes = useStyles();
    return (
        
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Container>
                <Grid container alignItems="center">
                    <Grid item> 
                        <Typography className={classes.title} variant="h6" noWrap>
                            My First React
                        </Typography>
                    </Grid>

                    <Grid item sm></Grid> {/* utk -> jarak*/}

                    <Grid item > 
                        <IconButton component={Link} to="/">
                            <HomeWorkIcon fontSize="small" />
                        </IconButton>
                        <IconButton component={Link} to="/Cicilan">
                            <AccountBalanceWalletIcon fontSize="small" />
                        </IconButton>
                        <IconButton component={Link} to="/Bmi">
                            <AccessibilityIcon fontSize="small" />
                        </IconButton>
                        <IconButton component={Link} to="/Konversi">
                            <AcUnitIcon fontSize="small" />
                        </IconButton>
                    </Grid>

                </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}