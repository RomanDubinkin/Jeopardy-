import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import state from "./store/index";
import Main from "./screen/Main";
import Register from './screen/Register';
import Login from './screen/Login';
import Index from './screen/Index';
const wsContext = React.createContext();

function App() {
  let toggle = true;
  let ws = new WebSocket('ws://localhost:3100');
  ws.onclose = ()=> toggle = !toggle;
  React.useEffect(()=>ws = new WebSocket('ws://localhost:3100'), [toggle]);
  return (
    // store is a reserved word!!!!
    <Provider store={state}>
    <wsContext.Provider value={ws}>
      <Router>
        <Route exact path='/'>
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
      </wsContext.Provider>
    </Provider>
  );
}

export default App;
export { wsContext };
