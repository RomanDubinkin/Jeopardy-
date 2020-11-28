import { START_GAME, INIT, ANSWER, SIGNUP, ISAUTH, USERS } from "./types";

// export default startGame;

export const startGame = (obj) => ({ type: START_GAME, payload: obj });


export const initStore = (data) => { console.log('trying init>>>>>'); return { type: INIT, payload: data } };

export const handleAnswer = (data) => { return { type: ANSWER, payload: data } };

export const setUsers = (data) => { console.log('triyng to see if setUsers function ever gets called'); return { type: USERS, payload: data } };

export const signUp = (id, login, email) => { return {type: SIGNUP, payload: {id, login, email}}};

export const isAuth = (id, login, email) => { return {type: ISAUTH, payload: {id, login, email}}};

export const thunkInit = ({email, password, ws}) => async(dispatch) => {
    const response = await fetch('http://localhost:3100/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          email, 
          password,
        }),
      })
      console.log('fetch post response>>>>>', response);
      const newResponse = await response.json();
      if (newResponse.status === 'ok') {
        const response = await fetch('http://localhost:3100/game', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
          }
        });
        const data = await response.json();
        console.log('юхууууууу data from the server', data);
        const id = newResponse.id;
        const login = newResponse.login;
        const email = newResponse.email;
        if (newResponse.data) dispatch(setUsers(newResponse.data));
        dispatch(signUp(id, login, email));
        dispatch(initStore(data));
        ws.send(JSON.stringify({ func: 'setUsers', args: [{login, score: 0}] }));
    };
};

