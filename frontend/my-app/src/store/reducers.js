import { START_GAME, INIT, ANSWER } from './types'
import { startGame, initStore, handleAnswer } from './actions'

const initialState = {
  users: [{ user: 'roman', score: 0 }],
  themes: [{ title: 'money', status: [true, true, true, true, true] }],
  game: { status: false, question: '2+2=?', asnwer: '4', title: 'money', price: 400 },
  loading: false,
  isAuth: false,
  func: { startGame, initStore, handleAnswer }
};

export const reducers = (state = initialState, action) => {
  //debugger;
  switch (action.type) {

    case START_GAME:
      console.log('>>>>>>>start game');
      const initGame = { status: true, ...action.payload };
      const startThemes = state.themes.map((theme) => {
        if (theme.title === action.payload.title) {
          theme.status[Math.round(action.payload.price / 200 - 1)] = false
        }
        return theme;
      });
      return { ...state, game: initGame, themes: startThemes };

    case INIT:
      const initThemes = action.payload.map((el) => {
        return { status: new Array(5).fill(true), title: el.title }
      });
      return { ...state, themes: initThemes };

    case ANSWER:
      console.log('catch aswer >>>>>>');
      const answerUsers = state.users.map((user, i) => {
        if (i === 0) user.score += action.payload;
        return user;
      });
      const answerGame = { ...state.game, status: false }
      return { ...state, users: answerUsers, game: answerGame };

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