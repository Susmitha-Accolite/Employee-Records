import React from 'react'
import { Paper, Card, Typography, makeStyles, Button, IconButton, Grid, Tooltip } from '@material-ui/core';
import * as ROUTES from '../Routes/Routes';
import { Route, useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#000080'
    },
    pageHeader:{
        padding:theme.spacing(2),
        display:'flex',
        marginBottom:theme.spacing(1)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        color: 'white',
        paddingLeft:theme.spacing(2),
        '& .MuiTypography-subtitle2':{
            opacity:'0.9'
        }
    },

    eventIcon: {
        float:'right',
        marginTop:"2%", 
        marginRight:"10%",
        backgroundColor: 'white',
        '&:hover' : {
            backgroundColor:"#C0C0C0"
        }
    }
    
}))

// Header for every page

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, subTitle, empIcon, funIcon, flag } = props;
    var histroy = useHistory();

    const onClickHandle = () => {
        if(flag){
            histroy.push(ROUTES.ADD_EMPLOYEE);
        }
        else{
        histroy.push(ROUTES.LANDING);
        }
    }
    return (
        <Paper elevation={0} square className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {empIcon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        <strong>{title}</strong></Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        <storng>{subTitle}</storng>
                        </Typography>
                </div>
            </div>
            </Grid>
            <Grid item xs={6}>
                <Tooltip 
                {... (flag) === true ? {title:'Add'} : {title:'Back'}} className={classes.eventIcon}>
                    <IconButton color="primary" onClick={onClickHandle}>
                                {funIcon}
                    </IconButton>
                </Tooltip>
            </Grid>
            </Grid>
        </Paper>
    )
}
