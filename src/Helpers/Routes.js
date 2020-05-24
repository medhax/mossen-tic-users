import React from 'react';
import Login from '../Components/Login/Login'
import Interficie from '../Components/Interficie/Interficie'
import { Switch, Route, Router} from 'react-router-dom';
import history from './history';
import Admin from '../Components/Admin/Admin'
import Notificacions from '../Components/Interficie/Notificacions/Notificacions'
import Alerta from '../Components/Interficie/Alerta/Alerta'

export default function Routes() {        
  return (
    <div className="App">
        <Router history={history}>     
           <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/interficie">
            <Interficie />
          </Route>
          <Route path="/notificacions">
            <Notificacions />
          </Route>
        </Switch>
        </Router>

    </div>
  );
}
