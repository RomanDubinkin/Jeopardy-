import React, { useState, useEffect } from 'react'

function Timer() {
  const [count, setCount] = useState(20);

  useEffect(() => { 
    count >= 0 && setTimeout(() => setCount(count - 1), 1000)
  }, [count]);

  return <h3>{count > 0 ? count : "Alas! Time's out.."}</h3>

};

export default Timer
