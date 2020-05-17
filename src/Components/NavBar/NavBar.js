import React from 'react';
import Button from '@material-ui/core/Button';
import {AppBar,IconButton ,MenuItem} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logoMossen from '../img/logoMossen.png';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacing: {
    marginRight:'45%',
    
    justifyContent:'center',
  },
  title: {
    flexGrow: 1,
  },
  nom:{
    position:'fixed',
    top:'5px',
    alignItems:'center',
    fontSize:'1.7ex',
  },
  correu:{
    position:'fixed',
    top:'30px',
    fontSize:'1.7ex',
  }
}));
    
    export default function NavBar(props) {
      const classes = useStyles();
        return(
          <div className={classes.root}>
          <AppBar color="inherit" position="fixed">
            <Toolbar>
            <Avatar className={classes.spacing}  src={props.foto}/>
              <MenuItem className={classes.spacing}> 
                <Typography className={classes.nom} variant="subtitle1">Francina Femenies</Typography>
                <Typography className={classes.correu} variant="subtitle1">femeniesfrancisca12345@iesmossenalcover.cat</Typography>
               </MenuItem>

              <Link to="/login"><IconButton  aria-label="log out" component="span">
              <ExitToAppIcon />
            </IconButton></Link>
            </Toolbar>
          </AppBar>
        </div>     
        )
    }



    