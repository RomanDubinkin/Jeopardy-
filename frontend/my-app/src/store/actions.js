import { START_GAME } from "./types";

export default (obj) => ({ type: START_GAME, payload: obj });

// export const delAllTodosAC = () => ({ type: DEL_ALL_TODOS });

// export const addTodoAC = (todo) => ({ type: ADD_TODO, payload: todo });

// export const delTodoAC = (id) => ({ type: DEL_TODO, payload: { id: id } });

// export const toggleEditAC = (id) => ({ type: TOGGLE_EDIT, payload: { id: id } });

// export const toggleEditAndSaveAC = ({ id, value }) => ({ type: TOGGLE_SAVE, payload: { id, value } });

// export const initAC = (todos) => ({ type: INIT, payload: todos });
