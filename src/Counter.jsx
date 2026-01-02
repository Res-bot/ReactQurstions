import { useState } from "react";
import React from 'react';

function Counter(params) {
  const[count,setCount] = useState(0)

  let increasecount = async()=>{
    setCount(count+1);
  }

  let decreasecount = async()=>{
    setCount(count-1);
    if(count <= 0){
      setCount(0);
    }
  }

  return(
    <div>
      <p>HERE IS THE COUNTER BUTTON</p>
      <button onClick={increasecount}>+</button>
      <p>{count}</p>
      <button onClick={decreasecount}>-</button>
    </div>
  )
}

export default Counter;