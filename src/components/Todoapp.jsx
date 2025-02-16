import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";
import EditForm from './EditForm';
//import App1 from './App1';







function Todoapp() {
  const[todos,setTodos] = useState([]);
   
 
  
  //Add Todo
  const addTodo = (todo)=>{
    setTodos([...todos,{id:uuidv4(), task:todo, completed:false, isEditing:false},])
    
  }

  //Delete Todo
  const deletetodo =(id)=>{
    setTodos(todos.filter((todo)=>todo.id !== id));
  }

  //ToggleComplete
  const toggleComplete = (id)=>{
    setTodos(
      todos.map((todo)=>todo.id === id ? {...todo,completed:!todo.completed}:todo)
    )
  }

  //Edit todo
  const edittodo =(id)=>{
    setTodos(
      todos.map((todo)=>todo.id === id ? {...todo,isEditing:!todo.isEditing}:todo)
    )
  }
  // Edit Task Todo
  const editTask = (task,id)=>{
    setTodos(todos.map((todo)=>todo.id === id ? {...todo,task,isEditing:!todo.isEditing}:todo))
   

    
  }
  


 return (
    <div className='TodoApp'>
  
      <h1>TodoApp</h1>
      
      <TodoForm   addTodo={addTodo}/>
     {/*<App1/>*/}
     {todos.length === 0 && <div> No Todos To Display </div>}
      {/*Display Todo*/}
      {todos.map((todo)=>(todo.isEditing ?(
        <EditForm  edittodo={editTask} task={todo}/>

      ):(
        
        <Todo
        key ={todo.id}
        task ={todo}
        deletetodo={deletetodo}
        edittodo={edittodo}
        toggleComplete={toggleComplete}
        />
  
        

   )))
  
}
</div>

  );

}



export default Todoapp;

