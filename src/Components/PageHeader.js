import React from 'react'
import { Paper, Card, Typography, makeStyles, Button, IconButton, Grid } from '@material-ui/core';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import * as ROUTES from '../Routes/Routes';
import { Route, useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#f4f4f4'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, subTitle, icon } = props;
    const histroy = useHistory();
    const onClickHandle = () => {
        histroy.push(ROUTES.LANDING);
    }

    return (
        <Paper elevation={0} square className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
            </div>
            </Grid>
            <Grid item xs={6}>
            <div style={{float:'right', marginTop:"4%"}}>
                    <IconButton onClick={onClickHandle}>
                                <SettingsBackupRestoreIcon fontSize="large" />
                    </IconButton>
                </div>
                </Grid>
            </Grid>
        </Paper>
    )
}
