import React from 'react'
import PageHeader from "../../Components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';
import EmployeeForm from '../EmployeeForm'
import * as employeeService from '../../Services/service';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function EditEmployee(props) {
    const id = props.location.state['id'];
    console.log(id);
    const classes = useStyles();
    const details = employeeService.getEmployeeById(id);

    return (
        <>
            <PageHeader
                title="Edit Employee"
                subTitle="Editing Employee Details"
                empIcon={<PeopleOutlineTwoToneIcon fontSize="large" />}
                funIcon={<ArrowBackIosIcon fontSize="medium"/>}
                flag={false}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm details={details}/>
            </Paper>
        </>
    )
}
