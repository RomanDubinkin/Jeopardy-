import React from "react";
import TodoList from "../components/TodoList";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import DelAllTodos from "../components/DelAllTodos";
import { useSelector, useDispatch } from 'react-redux';
import { initAC } from "../store/actions";

const Main = () => {
  const dispatch = useDispatch();

  useSelector(() => {
    //const res = fetch(http://localhost:3100)
    // const data = res.json()
    // dispatch(writeToState(data))
  })

  React.useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:3100/save', {
        method: 'GET',
      });
      const data = await response.json();
      dispatch(initAC(data));
      console.log('>>>>>> fetch get request: ', data);
    };
    getData();
  }, []);

  return (
    <React.Fragment>
      <Table />
      <Game />
    </React.Fragment>
  )
};

export default Main;
