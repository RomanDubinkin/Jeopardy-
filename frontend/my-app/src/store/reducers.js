import { START_GAME } from './types'

const initialState = {
  users: [{ user: 'roman', score: 0 }],
  themes: [{ title: 'money', status: [true, true, true, true, true] }],
  game: { status: false, question: '2+2=?', asnwer: '4', title: 'money', price: 400 },
  loading: false,
  isAuth: false
};

export const reducers = (state = initialState, action) => {
  //debugger;
  switch (action.type) {

      case START_GAME:
        const newGame = { status:true};
        return {...state, game: newGame};

    // case INIT:
    //   const initTodos = [...action.payload.todos];
    //   return { ...state, todos: initTodos };

    // case DONE_TODO:
    //   const newTodos = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) todo.done = true;
    //     return todo;
    //   });
    //   return { ...state, todos: newTodos };

    // case DEL_ALL_TODOS:
    //   return { ...state, todos: [] };

    // case ADD_TODO:
    //   const expandedTodos = [...state.todos, action.payload];
    //   return { ...state, todos: expandedTodos };

    // case DEL_TODO:
    //   const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
    //   return { ...state, todos: filteredTodos };

    // case TOGGLE_EDIT:
    //   const editTodos = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) todo.edit = !todo.edit;
    //     return todo;
    //   });
    //   return { ...state, todos: editTodos };

    // case TOGGLE_SAVE:
    //   const saveTodos = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       todo.edit = !todo.edit;
    //       todo.value = action.payload.value;
    //     }
    //     return todo;
    //   });
    //   return { ...state, todos: saveTodos };

    default:
      return state;
  }
};