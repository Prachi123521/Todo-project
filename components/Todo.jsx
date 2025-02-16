import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


function Todo({task,deletetodo,edittodo,toggleComplete}) {
  
  return (
    <div className='Todo'>
      <input type = "checkbox" onClick={()=>toggleComplete(task.id)}/>
    <p className ={`${task.completed ? "completed" : "incompleted"}`}
     onClick={()=>toggleComplete(task.id)}>{task.task}</p>
    
  
    
     <div>
      <button className='delete-icon' onClick={()=> deletetodo(task.id)}><MdDelete /></button>
      <button className="edit-icon" onClick={()=> edittodo(task.id)}><FaEdit /></button>
</div>
    </div>
  );
}

export default Todo;
