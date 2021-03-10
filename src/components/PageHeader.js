import React from 'react';
import { Paper, Card, Typography, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2),
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1',
        float: 'left',
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        },
        float: 'left',
    },
}))

export default function Header(props) {
    
    const classes = useStyles();
    const { title, subTitle, icon } = props;

    return (
        <>
            <Paper elevation={0} square className={classes.root} >
                
                <div className={classes.pageHeader} >
                    <Container>
                        <Card className={classes.pageIcon}  >
                            {icon}
                        </Card>
                        <div className={classes.pageTitle}>
                            <Typography
                                variant="h6"
                                component="div">
                                {title}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                component="div">
                                {subTitle}
                            </Typography>
                        </div>
                    </Container>
                
                </div>
            </Paper>
        </>
    )
}