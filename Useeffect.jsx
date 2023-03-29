import React,{useState,useEffect} from 'react'

const Useeffect = () => {
    let [userData,setUserData]=useState([])
   useEffect(()=>{
        let fetchData=async()=>{
            let data=await window.fetch("https://api.github.com/users")
            let finalData=await data.json()
            setUserData(finalData)
        }
        fetchData()
    },[])
  return (
    <div>
        {userData.map((x,index)=>{
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

export default Useeffect