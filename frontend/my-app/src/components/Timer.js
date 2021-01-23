import React, { useState, useEffect } from 'react'
import { wsContext } from '../App';

function Timer({ price }) {
  const [count, setCount] = useState(20);
  const ws = React.useContext(wsContext);
  useEffect(() => {
    let id;
    if (count >= 0) {
      id = setTimeout(() => setCount(count - 1), 1000)
    } else {
      ws.send(JSON.stringify({ func: 'handleAnswer', args: {score: -price, login: null }}));
    }
    return () => clearTimeout(id);
  }, [count]);
  return <h3>{count > 0 ? count : "time out"}</h3>
};

export default Timer
