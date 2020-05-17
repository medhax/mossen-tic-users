import React from 'react';
import './Login.scss'
import FadeIn from 'react-fade-in';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import logoAlcoxide from '../img/alcoxide.png'
import logoMossen from '../img/logoMossen.png'
import botonGoogle from '../img/googlebtn2x.png'
import Animacio from '../Animacio/animacio'
import {Link} from "react-router-dom";

class Login extends React.Component{
 
    render(){
        return(
            <FadeIn>              
            <Grid container direction="column" alignItems="center" spacing={0}>
              <Grid item m={12}>
               <img alt="logoMossen" className="logoMossen" src={logoMossen}/>        
              </Grid>

              
              <Grid className="botonets" item>
               <Link to="/interficie"> <img src={botonGoogle} className="botoGoogle"  alt="botonGoogle"/></Link><br/>
               <Link to="/admin"><Button variant="outlined" className="botoAdmin"  color="secondary">Accedir a la versió d'administrador</Button></Link> 
              </Grid>
             
              <Grid className="logoAlcoxideBox" item  xs={12}>
                <img alt="logoAlcoxide" className="logoAlcoxide" width="60%" src={logoAlcoxide}/>
            </Grid>
            </Grid>
            </FadeIn>
        )
    }
}

class PantallaPrinc extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      animacioOn:true
    };
  }
  componentDidMount() {
    
    setTimeout(() => {
      this.setState({animacioOn: false});
    }, 2000)
}
  render(){
    const animacioOn = this.state.animacioOn
    return(
      <div>
      {animacioOn ? <Animacio/> : <Login/>}
      </div>
    )
  }
}
export default PantallaPrinc;