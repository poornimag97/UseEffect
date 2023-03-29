import React from 'react'
import { useState, useEffect } from 'react';

const Useeffect3 = () => {
    let [userData,setUserData]=useState([])
    useEffect(()=>{
        window.fetch("https://api.github.com/users")
        .then((x)=>x.json())
        .then((y)=>setUserData(y))
        .catch((err=>err))
    
    },[]
    )
  return (
    <div>
        {userData.map((x ,index)=>{
            console.log(index);
            return(
                <>
                <li key={index}>{x.login}</li>
                <img src={x.avatar_url} alt="" />
                </>
                
            )
        }
        )}
    </div>
  )
}

export default Useeffect3