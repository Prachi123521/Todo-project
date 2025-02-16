import React, {  useEffect, useState } from 'react';
import Search from './Search';
//import { FaSearch } from "react-icons/fa";




 function TodoForm({addTodo}) {
  const[value,setValue]=useState("");


    
     const handleSubmit = (e)=>{
        e.preventDefault();
       addTodo(value);
      setValue("")
        
  }
  
  
  
 useEffect(()=>{
  document.title = 'Todo Project'
 })


  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
    
        <input type = "text" value = {value} onChange={(e)=>setValue(e.target.value)}
        className='todo-input ' placeholder='Your Todos' />
        <button type = "submit" className='todo-btn' >Add Task</button>
     {/*<input type = "text" className='todo-input' placeholder='search'
     onChange={handleSearch}/>*/}
    
        <Search/>
      
         </form>
      
        


  )
}

export default TodoForm;
