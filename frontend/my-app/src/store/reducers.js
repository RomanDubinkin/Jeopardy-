import { START_GAME, INIT, ANSWER, SIGNUP, ISAUTH, USERS } from './types'


const initialState = {
  users: [],
  themes: [{ title: 'money', status: [true, true, true, true, true] }],
  game: { status: false, question: '2+2=?', asnwer: '4', title: 'money', price: 400 },
  loading: false,
  abled: true,
  default: 'roman',
  isAuth: false
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
      console.log('>>>>>catching init>>>>', state);
      const initThemes = action.payload.map((el) => {
        return { status: new Array(5).fill(true), title: el.title }
      });
      return { ...state, themes: initThemes };

      // resetting array of current users upon new user entering the game through websockets
    case USERS:
          console.log('trying to reset users array', state);
          const resetUsers = [...state.users, ...action.payload];
        return { ...state, users: resetUsers};  

    case ANSWER:
      console.log('catch aswer >>>>>>');
      // find the user that gave the answer and update his/her total score balance
      let timeOut = true;
      const correctAnswer = (action.payload.score > 0)
      let current = state.default;
      let answerUsers = state.users.map((user) => {
        if (user.login === action.payload.login) {
          user.score += action.payload.score;
          timeOut = false;
          if (correctAnswer) current = action.payload.login;
        }
        return user;
      });
      // adding new users through action: answering question, not necessary in hard-coded vesrion
      // if (timeOut && action.payload.login) answerUsers = [...answerUsers, action.payload];
      // updating status of the game: if true, other user should have a chance to answer the question
      const answerGame = { ...state.game, status: (action.payload.score < 0) }
      return { ...state, abled: (!(state.login === action.payload.login) && state.abled) || (action.payload.score > 0), users: answerUsers, game: answerGame, isAuth: (timeOut && state.default === state.login) || (!timeOut && correctAnswer && state.login === current), default: current };

    case SIGNUP:
      console.log('checking signUp reducers', state);
        // adding new fields such as id, login, email and return updated state
      return {...state, isAuth: (state.default === action.payload.login), id: action.payload.id, login: action.payload.login, email: action.payload.email};

      // most likely not going to need this one
    case ISAUTH:
      return {...state, id: action.payload.id, login: action.payload.login, email: action.payload.email};

    default:
      return state;
  }
};
