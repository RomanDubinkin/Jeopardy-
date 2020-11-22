import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware)); // импорт reduxDevTools

// const prelodableState = {
// todos: [
//     { id: "007", value: "Помыть кота не оч чисто", done: false },
//   ]
// }


// const reducers = combineReducers({
//   auth,
//   test,
//   users,
// });

// export const store = createStore(reducers, prelodableState, composeEnhancers);
export default createStore(reducers, composeEnhancers,);