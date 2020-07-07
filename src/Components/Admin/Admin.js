import React, {useEffect} from 'react';
import {IconButton,BottomNavigationAction, BottomNavigation} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AppsIcon from '@material-ui/icons/Apps';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import './Admin.css'
import Container from '@material-ui/core/Container'
import Info from './Info/Info';
import Stats from './Stats/Stats';
import Control from './Control/Control'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";
import fire from 'firebase/app';
import 'firebase/database';

export default function Admin(){
  const [screen, setScreen] = React.useState(0);
  const [admin, setAdmin] = React.useState(false);
   useEffect(() => {    
    fire.auth().onAuthStateChanged(function(user) {
      if (user) {
        setAdmin(true)
      }else {
        setAdmin(false)
      }
          });
  
    });
    
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
      
      
    >
      <BottomNavigationAction showLabel label="Informació" icon={<InfoIcon />} />
      <BottomNavigationAction showLabel label="Estadística" icon={<EqualizerIcon />} />
      <BottomNavigationAction showLabel label="Control" icon={<AppsIcon />} />
      <Link to="/"><IconButton color="secondary"  component="span" style={{float: 'right', alignSelf: 'flex-end'}} onClick={()=> sortir()}>
          <ExitToAppIcon /> 
        </IconButton></Link>
    </BottomNavigation>
             
    
    
    </div>
  );
    }