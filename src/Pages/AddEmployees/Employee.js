import React from 'react'
import EmployeeForm from "../EmployeeForm";
import PageHeader from "../../Components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employees() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle="Adding new employee"
                empIcon={<PeopleOutlineTwoToneIcon fontSize="large" />}
                funIcon={<ArrowBackIosIcon fontSize="large"/>}
                flag={false}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
        </>
    )
}
