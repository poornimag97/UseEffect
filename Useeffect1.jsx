import React from 'react'
import { useState, useEffect } from 'react';

const Useeffect1 = () => {
    let [count, setCount]=useState(0)
    useEffect(()=>{
document.title=`you clicked ${count} time`}
    ,[count])
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{
        setCount(count+1)
    }
    }>Increment</button>
    </div>
  )
}

export default Useeffect1