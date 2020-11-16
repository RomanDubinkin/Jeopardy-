import React from "react";
import { useDispatch } from "react-redux";
import { doneTodoAC, delTodoAC, toggleEditAC } from "../store/actions";
import Item from './Item';
import Entry from './itemEntry'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const delTodo = async (id) => {
    const response = await fetch(`http://localhost:3100/delete/${id}`, {
      method: 'GET',
    });
    const data = await response.json();
    console.log('>>>>>> fetch delete request: ', data);
    dispatch(delTodoAC(id))
  };


  return (
    <div style={{ ...styles.list, textDecoration: todo.done ? "line-through" : "none" }}>
      {!todo.edit && <div style={styles.wrap}>}
        <Header todo={todo} />
        <div className={styles.listwrapper}>
          <ol>
            {todos.map((todo) => (
              <Question key={todo.id} todo={todo} />
            ))}
          </ol>
        </div>
      {todo.edit && <Entry todo={todo} />}
    </div>
  );
};

const styles = {
  wrap: {
    display: "flex",
    justifyContent: 'space-between',
    flexWrap: 'nowrap'
  },
  list: {
    lineHeight: "1.8",
    borderBottom: "2px solid white",
  },
  doneButton: {
    color: "green",
  },
  delButton: {
    color: "red",
    marginLeft: 2
  },
  baseButton: {
    color: "black",
    marginLeft: 2
  },
};

export default TodoItem;