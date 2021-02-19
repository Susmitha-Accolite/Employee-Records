import React, { useState, useEffect } from 'react'
import { Grid, TextField, Button, makeStyles} from '@material-ui/core';
import { InputForm, Form } from '../Components/InputForm';
import * as employeeService from "../Services/service";

const useStyles = makeStyles(theme => ({
    Button: {
        margin: theme.spacing(0.5),
        margin: "20px",
        padding: "30px"
    },
}))

const initialValues = {
    id: 0,
    fullName: '',
    department: '',
    mobile: '',
    city: '',
    state: '',
    zipcode: ''
}

export default function EmployeeForm(props) {
    let details = Object.keys(props).length === 0 ? {} : props.details;
    // console.log(details);
    // console.log(details[0]);
    const classes = useStyles();
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length == 10 ? "" : "Exact 10 numbers required."
        if ('department' in fieldValues)
            temp.department = fieldValues.department.length != 0 ? "" : "This field is required."
        if ('city' in fieldValues)
            temp.city = fieldValues.city.length != 0 ? "" : "This field is required."
        if ('state' in fieldValues)
            temp.state = fieldValues.state != 0 ? "" : "This field is required."
        if ('zipcode' in fieldValues)
            temp.zipcode = fieldValues.zipcode.length == 6 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = InputForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(values);
        if(Object.keys(details).length === 0){
            if (validate()){
                employeeService.insertEmployee(values)
                resetForm()
            }
        }
        else {

            if(values.fullName !== ""){
                details[0].fullName=values.fullName;
            }
            if(values.department !== ""){
                details[0].department=values.department;
            }
            if(values.mobile !== ""){
                details[0].mobile=values.mobile;
            }
            if(values.city !== ""){
                details[0].city=values.city;
            }
            if(values.state !== ""){
                details[0].state=values.state;
            }
            if(values.zipcode !== ""){
                details[0].zipcode=values.zipcode;
            }
            alert("Details edited successfully!!")
            employeeService.editEmployee(details[0])
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        name="fullName"
                        label="Full Name"
                        {...(Object.keys(details).length === 0 ? 
                        {value: values.fullName,
                        error: errors.fullName } : 
                        {defaultValue: details[0].fullName}
                        )}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Department"
                        name="department"
                        {...(Object.keys(details).length === 0 ? 
                        {value: values.department,
                        error:errors.department} : 
                        {defaultValue: details[0].department
                        }
                        )}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Mobile"
                        name="mobile"
                       {...(Object.keys(details).length === 0 ? 
                        {value: values.mobile,
                        error:errors.mobile} : 
                        {defaultValue: details[0].mobile}
                        )}
                        onChange={handleInputChange}
                    />
                    <div>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={handleSubmit}
                        style={{float:'right', marginRight:"20%"}}
                        >
                        Submit
                    </Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="City"
                        name="city"
                        {...(Object.keys(details).length === 0 ? 
                        {value: values.city,
                        error:errors.city} : 
                        {defaultValue: details[0].city}
                        )}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="State"
                        name="state"
                        {...(Object.keys(details).length === 0 ? 
                        {value: values.state,
                        error:errors.state} : 
                        {defaultValue: details[0].state}
                        )}
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Zipcode"
                        name="zipcode"
                        {...(Object.keys(details).length === 0 ? 
                        {value: values.zipcode,
                        error:errors.zipcode} : 
                        {defaultValue: details[0].zipcode}
                        )}
                        onChange={handleInputChange}
                    />
                    {(Object.keys(details).length === 0) ? 
                    <div>
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        onClick={resetForm}
                        // classes={{ root: classes.root, label: classes.label }}
                        >
                        Reset
                    </Button>
                    </div>
                    : <></>
                    }
                </Grid>
            </Grid>
        </Form>
    )
}
