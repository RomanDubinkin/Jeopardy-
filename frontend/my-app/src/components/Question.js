import React from "react";
import startGame from '../store/actions';
import { useDispatch } from 'react-redux';

function Question({ price, state, title }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(startGame);
  }

  return (
    // store is a reserved word!!!!
    <button onClick={handleClick} >{price}</button>
  );
}

export default Question;