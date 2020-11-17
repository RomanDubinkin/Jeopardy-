import React, { useState, useEffect } from 'react'
import { handleAnswer } from '../store/actions';
import { useDispatch } from 'react-redux';

function Timer({ price }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(20);

  useEffect(() => {
    if (count >= 0) {
      setTimeout(() => setCount(count - 1), 1000)
    } else {
      dispatch(handleAnswer(-price));
    }
  }, [count]);

  return <h3>{count > 0 ? count : "time out"}</h3>

};

export default Timer
