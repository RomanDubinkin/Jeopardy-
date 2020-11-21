import { START_GAME, INIT, ANSWER, SIGNUP, ISAUTH } from './types'


const initialState = {
  users: [{ login: 'anonymous', score: 0 }],
  themes: [{ title: 'money', status: [true, true, true, true, true] }],
  game: { status: false, question: '2+2=?', asnwer: '4', title: 'money', price: 400 },
  loading: false,
  isAuth: true
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
      // find the user that gave the answer and update his/her total score balance
      const answerUsers = state.users.map((user) => {
        if (user.login === action.payload.login) user.score += action.payload.score;
        return user;
      });
      // updating status of the game: if true, other user should have a chance to answer the question
      const answerGame = { ...state.game, status: (action.payload.score < 0) }
      return { ...state, users: answerUsers, game: answerGame };

    case SIGNUP:
        // adding newly signup user to the list of current users
        const signupUsers = [...state.users, {login: action.payload.login, score: 0 }];

        // adding new fields such as id, login, email and return updated state
      return {...state, users: signupUsers,  id: action.payload.id, login: action.payload.login, email: action.payload.email};

      // most likely not going to need this one
    case ISAUTH:
      return {...state, id: action.payload.id, login: action.payload.login, email: action.payload.email};

    default:
      return state;
  }
};
