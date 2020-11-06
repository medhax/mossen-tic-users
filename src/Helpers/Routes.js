import React from 'react';
import Login from '../Components/Login/Login'
import Interficie from '../Components/Interficie/Interficie'
import Config from '../Components/Configuracio/Configuracio'
import { Switch, Route, Router, Redirect} from 'react-router-dom';
import history from './history';
import Err404 from '../Components/Errors/404'
import Fitxers from '../Components/Interficie/Fitxers/Fitxers'

import WorldInfo from '../Components/WorldInfo/WorldInfo'
export default function Routes() {        
  return (
    <div className="App">
        <Router history={history}>     
           <Switch>
          <Route exact path="/">
            <Login />
          </Route>
         
          <Route path="/interficie">
            <Interficie />
          </Route>
          <Route path="/configuracio">
            <Config />
          </Route>
          <Route path="/fitxers">
            <Fitxers />
          </Route>
         
          <Route path="/info">
            <WorldInfo />
          </Route>
          <Route path="/404">
            <Err404 />
          </Route>
          <Route  path="*">
           <Redirect to="/404"/>
          </Route>
        </Switch>
       
        </Router>

    </div>
  );
}
