import React, { useState, useEffect } from 'react'
import { Grid, TextField, Button, makeStyles} from '@material-ui/core';
import { InputForm, Form } from '../../Components/InputForm';
import * as employeeService from "../../Services/service";

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

export default function EmployeeForm() {

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
        console.log("Heloo");
        if (validate()){
            employeeService.insertEmployee(values)
            resetForm()
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
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <TextField
                        variant="outlined"
                        label="Department"
                        name="department"
                        value={values.department}
                        onChange={handleInputChange}
                        error={errors.department}
                    />
                    <TextField
                        variant="outlined"
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
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
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                    <TextField
                        variant="outlined"
                        label="State"
                        name="state"
                        value={values.state}
                        onChange={handleInputChange}
                        error={errors.state}
                    />
                    <TextField
                        variant="outlined"
                        label="Zipcode"
                        name="zipcode"
                        value={values.zipcode}
                        onChange={handleInputChange}
                        error={errors.zipcode}
                    />

                    
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
                </Grid>
            </Grid>
        </Form>
    )
}
