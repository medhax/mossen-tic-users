import React from 'react';
import Login from '../Components/Login/Login'
import Interficie from '../Components/Interficie/Interficie'
import Config from '../Components/Configuracio/Configuracio'
import { Switch, Route, Router, Redirect} from 'react-router-dom';
import history from './history';
import Err404 from '../Components/Errors/404'
import Fitxers from '../Components/Interficie/Fitxers/Fitxers'
import ProtectedRoute from './protected-routes'
import WorldInfo from '../Components/WorldInfo/WorldInfo'
export default function Routes() {        
  return (
    <div className="App">
        <Router history={history}>     
           <Switch>
          <Route exact path="/">
            <Login />
          </Route>
         <ProtectedRoute path="/interficie" component={Interficie} />
         <ProtectedRoute path="/configuracio" component={Config} />
         <ProtectedRoute path="/fitxers" component={Fitxers} />
         
         
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
