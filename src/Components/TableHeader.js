import { Grid, Typography, Button } from '@material-ui/core'
import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, TableRow, TableCell, TableHead, TableSortLabel, makeStyles } from '@material-ui/core/';

function TableHeader(props) {
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
      }
      
      function getComparator(order, orderBy) {
        return order === 'desc'
          ? (a, b) => descendingComparator(a, b, orderBy)
          : (a, b) => -descendingComparator(a, b, orderBy);
      }
      
      function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
      }

      const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        paper: {
          width: '100%',
          marginBottom: theme.spacing(2),
        },
        table: {
          minWidth: 750,
        },
        visuallyHidden: {
          border: 0,
          clip: 'rect(0 0 0 0)',
          height: 1,
          margin: -1,
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          top: 20,
          width: 1,
        },
      }));
      
      const headCells = [
        // { id: 'id', numeric: true, disablePadding: true, label: 'ID' },  
        { id: 'name', numeric: false, disablePadding: true, label: 'Fullname' },
        { id: 'department', numeric: false, disablePadding: false, label: 'Departmemt' },
        { id: 'contact', numeric: false, disablePadding: false, label: 'Contact Numebr' },
        { id: 'city', numeric: false, disablePadding: false, label: 'City' },
        { id: 'state', numeric: false, disablePadding: false, label: 'State' },
        { id: 'zipcode', numeric: false, disablePadding: false, label: 'Zipcode' },
      ];
      
      TableHeader.propTypes = {
        classes: PropTypes.object.isRequired,
        numSelected: PropTypes.number.isRequired,
        onRequestSort: PropTypes.func.isRequired,
        onSelectAllClick: PropTypes.func.isRequired,
        order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        orderBy: PropTypes.string.isRequired,
        rowCount: PropTypes.number.isRequired,
      };
        const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
        const createSortHandler = (property) => (event) => {
          onRequestSort(event, property);
        };
      const styles = useStyles();
        return (
          <TableHead styles={{align: 'center', padding:"40%", backgroundColor:'black'}}>
            <TableRow styles={{align: 'center'}}>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={rowCount > 0 && numSelected === rowCount}
                  onChange={onSelectAllClick}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                />
              </TableCell>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <span className={classes.visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        );
    // return (
    //     <div>
    //         <Grid container>
    //             <Grid item xs={2}>
    //                 <Typography variant="h5">ID</Typography>
    //             </Grid>
    //             <Grid item xs={2}>
    //             <Typography variant="h5">Name</Typography>
    //             </Grid>
    //             <Grid item xs={2}>
    //             <Typography variant="h5">Department</Typography>
    //             </Grid>
    //             <Grid item xs={2}>
    //             <Typography variant="h5">Contact Number</Typography>
    //             </Grid>
    //             <Grid item xs={2}>
    //             <Typography variant="h5">Address</Typography>
    //             </Grid>
    //             <Grid item xs={2}>
    //                 <Button variant="container" fontSize="small">Edit</Button>
    //                 <Button variant="container" fontSize="small">Delete</Button>
    //             </Grid>
    //         </Grid>
    //     </div>
    // )
}

export default TableHeader
