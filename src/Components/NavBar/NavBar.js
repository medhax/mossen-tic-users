import React from 'react';
import {AppBar,IconButton ,MenuItem} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));
    
    export default function NavBar(props) {
      const classes = useStyles();
        return(
          <div className={classes.root}>
          <AppBar  color="inherit" position="fixed">
            <Toolbar >
            <Avatar className={classes.menuButton}  src={props.foto}/>
              <MenuItem className={classes.title}> 
                <div>
                <Typography >Francina Femenies</Typography>
                <span></span>
                <Typography >femeniesfrancisca12345@iesmossenalcover.cat</Typography>
                </div>
               </MenuItem>

              <Link to="/"><IconButton className={classes.icono} aria-label="log out" component="span">
              <ExitToAppIcon />
            </IconButton></Link>
            </Toolbar>
          </AppBar>
          </div> 
        )
    }



    