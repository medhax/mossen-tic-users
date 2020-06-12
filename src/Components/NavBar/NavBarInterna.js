
import React from 'react';
import {AppBar,IconButton ,MenuItem} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
 
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  txtNav:{
    fontSize: '12px',
  }

}));
    
    export default function NavBar(props) {
      const classes = useStyles();
        return(
          
          <AppBar style={{padding: 0}}  color="inherit" position="fixed" >
            <Toolbar >
            

              <Link style={{color: 'transparent'}} to="/interficie"><IconButton className={classes.icono} aria-label="log out" component="span">
            
              <ArrowBackIcon /><Typography> Tornar al menu principal </Typography>  
            </IconButton></Link>
            </Toolbar>
          </AppBar>
      
        )
    }



    