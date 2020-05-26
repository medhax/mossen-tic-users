import React from 'react';
import {IconButton,BottomNavigationAction, BottomNavigation} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AppsIcon from '@material-ui/icons/Apps';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import './Admin.css'
import Info from './Info/Info';
import Stats from './Stats/Stats';
import Control from './Control/Control'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";
import * as fire from 'firebase';

export default function Admin(){
    const [screen, setScreen] = React.useState(0);
function canviaScreen() {
  switch(screen){
      default:return(
          <Info/>
      )
      case 1: return(
        <Stats/>
      )
      case 2: return(
        <Control/>
    )
    
  }
}

function sortir(){
  fire.auth().signOut()
}

  return (
      <div>
          {canviaScreen()}
    <BottomNavigation value={screen} className="bottomNav" onChange={(event, newScreen) => {
        setScreen(newScreen);
      }}
      showLabels
      
    >
      <BottomNavigationAction label="Informació" icon={<InfoIcon />} />
      <BottomNavigationAction label="Estadística" icon={<EqualizerIcon />} />
      <BottomNavigationAction label="Control" icon={<AppsIcon />} />
     <Link to="/"><IconButton color="secondary"  component="span" style={{float: 'right', alignSelf: 'flex-end'}} onClick={()=> sortir()}>
          <ExitToAppIcon /> 
        </IconButton></Link>
    </BottomNavigation>
    </div>
  );
    }