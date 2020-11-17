import { START_GAME, INIT, ANSWER, SIGNUP, ISAUTH } from "./types";

const startGame = (obj) => ({ type: START_GAME, payload: obj });

export default startGame;

export const initStore = (data) => { return { type: INIT, payload: data } };

export const handleAnswer = (data) => { return { type: ANSWER, payload: data } };

export const signUp = (id, login, email) => { return {type: SIGNUP, payload: {id, login, email}}};

export const isAuth = (id, login, email) => { return {type: ISAUTH, payload: {id, login, email}}};

