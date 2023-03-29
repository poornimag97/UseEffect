import React from 'react'
import { useState, useEffect } from 'react';

const Useeffect2 = () => {
    let [width,setWidth]=useState(window.innerWidth)
    useEffect=(()=>{
        window.addEventListener('resize',()=>{
            setWidth(window.innerWidth)
        }
        )
    },[width]
    )
  return (
   <div>{width}</div>
  
  )
}

export default Useeffect2