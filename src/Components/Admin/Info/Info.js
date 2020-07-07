import React from 'react';
import {CssBaseline, Container, Grid} from '@material-ui/core';
import './info.scss';
import { Redirect} from "react-router-dom";
//--Icons--


class Info extends React.Component{
  constructor(props){
    super(props);
    this.state={
      redirecting:false,
      titol:'',
    }

  }
  render(){
   
     const handle1ES = ()=> {
      this.setState({
        titol:"1r d'ESO",
        ruta: 'alumnes/ALUMNES/ESO/1RESO/',
        redirecting:true,
      });
    }
    const handle2ES = ()=> {
      this.setState({
        titol:"2n d'ESO",
        ruta: 'alumnes/ALUMNES/ESO/2NESO/',
        redirecting:true,
      });
    }
    const handle3ES = ()=> {
      this.setState({
        titol:"3r d'ESO",
        ruta: 'alumnes/ALUMNES/ESO/3RESO/',
        redirecting:true,
      });
    }
    const handle4ES = ()=> {
      this.setState({
        titol:"4t d'ESO",
        ruta: 'alumnes/ALUMNES/ESO/4TESO/',
        redirecting:true,
      });
    }

    const handle1Ba = ()=> {
      this.setState({
        titol:"1r de Batxiller",
        ruta: 'alumnes/ALUMNES/BAT/1RBAT/',
        redirecting:true,
      });
    }
    const handle2Ba = ()=> {
      this.setState({
        titol:"2n de Batxiller",
        ruta: 'alumnes/ALUMNES/BAT/2NBAT/',
        redirecting:true,
      });
    }
    const handleFP = ()=> {
      this.setState({
        titol:"FP",
        ruta: 'alumnes/ALUMNES/FP/',
        redirecting:true,
      });
    }
    const handlePerso = ()=> {
      this.setState({
        titol:"Personal",
        redirecting:true,
      });
    }



  return (
   <div >

       <CssBaseline />
<Container  className={"contenedor"}  maxWidth="lg">
  <Grid container spacing={3} justify="space-between" alignItems="stretch">
    <Grid item xs>
    <div className="button-container-1">
      <span className="mas">1r Eso</span>
    <button onClick={handle1ES} id='work' type="button" name="Hover">1r Eso</button>
  </div>
  </Grid>
    <Grid item xs>
    <div className="button-container-1">
      <span className="mas">2n Eso</span>
    <button onClick={handle2ES} id='work' type="button" name="Hover">2n Eso</button>
  </div>
    </Grid>
  </Grid>

  <br></br>

  <Grid container spacing={3} justify="space-between" alignItems="stretch">
  <Grid item xs>
  <div className="button-container-1">
      <span className="mas">3r Eso</span>
    <button onClick={handle3ES} id='work' type="button" name="Hover">3r Eso</button>
  </div>
    </Grid>
    <Grid item xs>
    <div className="button-container-1">
      <span className="mas">4t Eso</span>
    <button onClick={handle4ES} id='work' type="button" name="Hover">4t Eso</button>
  </div>
    </Grid>
  </Grid>

  <br></br>

  <Grid container spacing={3} justify="space-between" alignItems="stretch">
  <Grid item xs>
  <div className="button-container-1">
      <span className="mas">1r Batx</span>
    <button onClick={handle1Ba} id='work' type="button" name="Hover">1r Batx</button>
  </div>
    </Grid>
    <Grid item xs>
    <div className="button-container-1">
      <span className="mas">2n Batx</span>
    <button onClick={handle2Ba} id='work' type="button" name="Hover">2n Batx</button>
  </div>
    </Grid>
    </Grid>
    <br></br>

  <Grid container spacing={3} justify="space-between" alignItems="stretch">
  <Grid item xs>
  <div className="button-container-1">
      <span className="mas">FP</span>
    <button onClick={handleFP} id='work' type="button" name="Hover">FP</button>
  </div>
    </Grid>
    <Grid item xs>
    <div className="button-container-1">
      <span className="mas">FP</span>
    <button onClick={handleFP} id='work' type="button" name="Hover">FP</button>
  </div>
    </Grid>
    </Grid>

    <br></br>

  <Grid container spacing={3} justify="space-between" alignItems="stretch">
  <Grid item xs>
  <div className="button-container-1">
      <span className="mas">FP</span>
    <button onClick={handleFP} id='work' type="button" name="Hover">FP</button>
  </div>
    </Grid>
    <Grid item xs>
    <div className="button-container-1">
      <span className="mas">Personal</span>
    <button onClick={handlePerso} id='work' type="button" name="Hover">Personal</button>
  </div>
    </Grid>
    </Grid>
  </Container>
  {this.state.redirecting ? <Redirect to={{
            pathname: '/taula',
            state: { titol: this.state.titol, ruta: this.state.ruta }
        }}/> : null }
</div>  
  );
}
}

export default Info;