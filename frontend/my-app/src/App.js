import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import state from "./store/index";
import Main from "./screen/Main";
import Register from './screen/Register';
import Login from './screen/Login';
import Index from './screen/Index';

function App() {

  return (
    // store is a reserved word!!!!
    <Provider store={state}>
      <Router>
        <Route exact path='/home'>
          <Index />
        </Route>
        <Switch>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/game'>
          <Main />
        </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
