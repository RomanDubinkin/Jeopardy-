import React from "react";
import startGame from '../store/actions';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function Question({ price, state, title }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(startGame());
  }

  return (
    // store is a reserved word!!!!
    <Button onClick={handleClick} >{price}</Button>
  );
}

export default Question;