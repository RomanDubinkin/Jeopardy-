import { START_GAME, INIT, ANSWER, SIGNUP, ISAUTH, USERS } from "./types";

// export default startGame;

export const startGame = (obj) => ({ type: START_GAME, payload: obj });


export const initStore = (data) => { console.log('trying init>>>>>'); return { type: INIT, payload: data } };

export const handleAnswer = (data) => { return { type: ANSWER, payload: data } };

export const setUsers = (data) => { console.log('triyng to see if setUsers function ever gets called'); return { type: USERS, payload: data } };

export const signUp = (id, login, email) => { return {type: SIGNUP, payload: {id, login, email}}};

export const isAuth = (id, login, email) => { return {type: ISAUTH, payload: {id, login, email}}};

