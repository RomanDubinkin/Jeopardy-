import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers'

const composeEnhancers = composeWithDevTools(); // импорт reduxDevTools

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