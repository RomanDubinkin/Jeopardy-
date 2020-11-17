import { START_GAME, INIT, ANSWER } from "./types";

const startGame = (obj) => ({ type: START_GAME, payload: obj });

export default startGame;

// export const delAllTodosAC = () => ({ type: DEL_ALL_TODOS });

// export const addTodoAC = (todo) => ({ type: ADD_TODO, payload: todo });

// export const delTodoAC = (id) => ({ type: DEL_TODO, payload: { id: id } });

// export const toggleEditAC = (id) => ({ type: TOGGLE_EDIT, payload: { id: id } });

// export const toggleEditAndSaveAC = ({ id, value }) => ({ type: TOGGLE_SAVE, payload: { id, value } });

export const initStore = (data) => { console.log("checking on init>>>>>"); return { type: INIT, payload: data } };

export const handleAnswer = (data) => { console.log('>>>handle Answer?'); return { type: ANSWER, payload: data } };
