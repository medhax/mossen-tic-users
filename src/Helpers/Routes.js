import React from 'react';
import Login from '../Components/Login/Login'
import Animacio from '../Components/Animacio/animacio'
import Interficie from '../Components/Interficie/Interficie'
import { Switch, Route, Router} from 'react-router-dom';
import history from './history';
import Admin from '../Components/Admin/Admin'

export default function Routes() {        
  return (
    <div className="App">
        <Router history={history}>
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/interficie">
            <Interficie />
          </Route>
          <Route path="/animacio">
            <Animacio />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
         
       
        </Switch>
        </Router>

    </div>
  );
}
