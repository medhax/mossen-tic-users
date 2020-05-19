import React from 'react';
import {CssBaseline, Container, Grid} from '@material-ui/core';
import './info.scss';

//--Icons--


export default function NavBar() {
  return (
   <div >

       <CssBaseline />
<Container  className={"contenedor"}  maxWidth="lg">
  <Grid container spacing={3} justify="space-between" alignItems="stretch">
    <Grid item xs>
    <div class="button-container-1">
      <span class="mas">1r Eso</span>
    <button id='work' type="button" name="Hover">1r Eso</button>
  </div>
    </Grid>
    <Grid item xs>
    <div class="button-container-1">
      <span class="mas">2n Eso</span>
    <button id='work' type="button" name="Hover">2n Eso</button>
  </div>
    </Grid>
  </Grid>

  <br></br>

  <Grid container spacing={3} justify="space-between" alignItems="stretch">
  <Grid item xs>
  <div class="button-container-1">
      <span class="mas">3r Eso</span>
    <button id='work' type="button" name="Hover">3r Eso</button>
  </div>
    </Grid>
    <Grid item xs>
    <div class="button-container-1">
      <span class="mas">4t Eso</span>
    <button id='work' type="button" name="Hover">4t Eso</button>
  </div>
    </Grid>
  </Grid>

  <br></br>

  <Grid container spacing={3} justify="space-between" alignItems="stretch">
  <Grid item xs>
  <div class="button-container-1">
      <span class="mas">1r Batx</span>
    <button id='work' type="button" name="Hover">1r Batx</button>
  </div>
    </Grid>
    <Grid item xs>
    <div class="button-container-1">
      <span class="mas">2n Batx</span>
    <button id='work' type="button" name="Hover">2n Batx</button>
  </div>
    </Grid>
    </Grid>
    <br></br>

  <Grid container spacing={3} justify="space-between" alignItems="stretch">
  <Grid item xs>
  <div class="button-container-1">
      <span class="mas">FP</span>
    <button id='work' type="button" name="Hover">FP</button>
  </div>
    </Grid>
    <Grid item xs>
    <div class="button-container-1">
      <span class="mas">FP</span>
    <button id='work' type="button" name="Hover">FP</button>
  </div>
    </Grid>
    </Grid>

    <br></br>

  <Grid container spacing={3} justify="space-between" alignItems="stretch">
  <Grid item xs>
  <div class="button-container-1">
      <span class="mas">FP</span>
    <button id='work' type="button" name="Hover">FP</button>
  </div>
    </Grid>
    <Grid item xs>
    <div class="button-container-1">
      <span class="mas">Personal</span>
    <button id='work' type="button" name="Hover">Personal</button>
  </div>
    </Grid>
    </Grid>
  </Container>
</div>  
  );
}
 