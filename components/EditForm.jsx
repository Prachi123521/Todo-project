import React, { useState } from 'react';

function EditForm({edittodo,task}) {
    const[value,setValue]=useState(task.task);

    const handleSubmit = (e)=>{
        e.preventDefault();
        edittodo(value,task.id);
        setValue("");
        
        
    }
  return (

    <form onSubmit={handleSubmit} className='TodoForm'>
     
      <input type = "text" value = {value} onChange={(e)=>setValue(e.target.value)}
      className='todo-input' placeholder='Your todos'/>

<button type = "submit" className = 'todo-btn'>Update task </button>

        </form>
    
  )

}

export default EditForm;
