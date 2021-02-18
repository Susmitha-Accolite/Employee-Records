import React, {useState} from 'react';
import * as employeeService from '../Services/service';
import DisplayEmployee from '../Pages/DisplayEmployee/DisplayEmployee';
import TableHeader from './TableHeader';
import {makeStyles} from '@material-ui/core';

function EmployeeList() {

    const employeeList = employeeService.getAllEmployees();
    const [employeeDetails, setEmployeeDetails] = useState();
    console.log(employeeList);

    const useStyles = makeStyles(theme => ({
        header: {
            marginLeft: "30%",
            padding: "40%" 
        }
    }))

    const classes = useStyles();
    return (
        <div>
        {(employeeList.length == 0) ? 
        <p>No records found......</p> : 
            <DisplayEmployee employeeList={employeeList} />
        }
        </div>
    )
}

export default EmployeeList
