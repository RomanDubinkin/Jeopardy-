import React from "react";
import startGame from '../store/actions';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function Question({ price, state, title }) {
  const dispatch = useDispatch();
  const handleClick = async () => {
    if (state) {
      const response = await fetch(`http://localhost:3100/game/${title}`, {
        method: 'GET'
      });
      const data = await response.json();
      const index = data.question.findIndex((el) => el.price === price);
      const obj = { question: data.question[index].title, answer: data.question[index].answer };
      console.log('>>>>>>> object to send is ', obj);
      dispatch(startGame({ ...obj, title, price }));
    }
  }

  return (
    // store is a reserved word!!!!

    <Button onClick={handleClick} >{state && price}</Button>

  );
}

export default Question;