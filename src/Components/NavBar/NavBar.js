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
            <Avatar className={classes.menuButton}  src={props.usuari.imageUrl}/>
              <MenuItem className={classes.title}> 
                <div>
                <Typography >{props.usuari.name}</Typography>
                <span></span>
                <Typography >{props.usuari.email}</Typography>
                <span></span>
                <Typography >{props.grupOrg}</Typography>
                </div>
               </MenuItem>

              <Link style={{color: 'transparent'}} to="/"><IconButton className={classes.icono} aria-label="log out" component="span">
            <Typography>Sortir</Typography>  <ExitToAppIcon />
            </IconButton></Link>
            </Toolbar>
          </AppBar>
          </div> 
        )
    }



    