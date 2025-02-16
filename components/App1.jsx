import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App1 = () => {
  const[count,setCount]=useState(0);
  const handleClick = (action) =>{
    setCount(count + 1)
    if(action === "add"){
      setCount(count + 1);
    }else{
      setCount(count-1);
    }
  }
 useEffect (()=>{
 console.log("Prachi");
 })

 useEffect (()=>{
  console.log("Shivang");
 },[])

 useEffect (()=>{
  console.log("Rohit");
 },[count])

  return (
    <div>
      <p> count : {count}</p>
      <button onClick={()=>handleClick("add")}>+</button>
      <button onClick={()=>handleClick("minus")}>-</button>
    </div>
  )
}

export default App1;
