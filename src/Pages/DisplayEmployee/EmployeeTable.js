import React, { useState } from 'react'
import PageHeader from "../../Components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment, Tooltip, Button, TextField, Typography } from '@material-ui/core';
import useTable from "../../Components/useTable";
import * as employeeService from '../../Services/service';
import { Search } from "@material-ui/icons";
import * as ROUTES from '../../Routes/Routes';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '100%',
    },

    title: {
        marginLeft: "30%"
    },
    
}))


const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'department', label: 'Department' },
    { id: 'mobile', label: 'Contact Number' },
    { id: 'city', label: 'City'},
    { id: 'state', label: 'State'},
    { id: 'zipcode', label: 'Zipcode'},
    { id: 'actions', label: 'Actions'},
]

export default function EmployeeTable() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [open, setOpen] = useState(false);
    const [itemId, setId] = useState(0);

    const {
        TableContainer,
        TableHeader,
        recordsAfterSorting
    } = useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    var newArr =  items.filter(function(item) {
                        return item.fullName.toLowerCase().includes(target.value.toLowerCase()) || 
                            item.department.toLowerCase().includes(target.value.toLowerCase()) ||
                            item.mobile.toLowerCase().includes(target.value.toLowerCase()) ||
                            item.city.toLowerCase().includes(target.value.toLowerCase()) ||
                            item.state.toLowerCase().includes(target.value.toLowerCase()) ||
                            item.zipcode.toLowerCase().includes(target.value.toLowerCase());
                    });
                return newArr;
            }
        })
    }

    function handleDelete(){
        employeeService.deleteEmployee(itemId);
        setOpen(false);
        setRecords(employeeService.getAllEmployees());
    }
    const history = useHistory();
  
    const handleEdit = (itemId) => {
        history.push({
            pathname: ROUTES.EDIT_EMPLOYEE,
            state: {
                id : itemId
            }
        });
    }

    const checkNumber = employeeService.getAllEmployees();

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = (id) => {
        setOpen(true);
        setId(id);
    }

    return (
        <>
        <PageHeader
                title="Employee Reocrds"
                subTitle="Displaying Emloyee Records"
                empIcon={<PeopleOutlineTwoToneIcon fontSize="medium" /> }
                funIcon={<AddIcon fontSize="large" /> }
                flag = {true}
            />
            {(checkNumber.length === 0) ? 
            <Paper className={classes.pageContent}>
                <Typography variant="h6"className={classes.title} >
                    <strong>No records Found. Please add the records! </strong>
                </Typography>
            </Paper>
            : 
            <>
            <Paper className={classes.pageContent}>
                <Toolbar>
                <TextField
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <TableContainer>
                    <TableHeader />
                    <TableBody>
                        {
                            recordsAfterSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.department}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.state}</TableCell>
                                    <TableCell>{item.zipcode}</TableCell>
                                    <TableCell>
                                    <Tooltip title="Edit"  >
                                        <IconButton aria-label="edit" onClick={() => handleEdit(item.id)}>
                                            <EditIcon fontSize="small"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
                                        <IconButton aria-label="delete"  onClick={() => handleOpen(item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TableContainer>
            </Paper>
            </>
            }
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">Do you want to delete the record?</DialogTitle>
            <DialogContent>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDelete} color="primary">
                Yes
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                No
                </Button>
            </DialogActions>
            </Dialog>
        </>
    )
}
