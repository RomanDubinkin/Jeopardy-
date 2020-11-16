import React from "react";
import { Provider } from "react-redux";

import state from "./store/index";
import Main from "./screen/Main";

function App() {

  return (
    // store is a reserved word!!!!
    <Provider store={state}>
      <Main />
    </Provider>
  );
}

export default App;