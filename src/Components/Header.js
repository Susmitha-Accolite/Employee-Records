import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, makeStyles, Typography } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";
import * as ROUTES from '../Routes/Routes';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'blue',
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '1.5rem',
        backgroundColor: '#AED6F1',
        '&:hover': {
            backgroundColor: 'white'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    },
    iconButton: {
        float:'right',
        backgroundColor: '#AED6F1',
        '&:hover': {
            backgroundColor: 'white',
        },
    }
}))

const Header = () => {

    const classes = useStyles();
    const history = useHistory();

    const onClickHandle = () => {
        history.push(ROUTES.ADD_EMPLOYEE);
    }

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="h5" style={{color:'white'}}> Employee Records </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <InputBase
                            placeholder="Search...."
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="medium" />}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton onClick={onClickHandle} className={classes.iconButton}>
                                <AddIcon fontSize="medium" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;