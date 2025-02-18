
import React,{useEffect, useState} from 'react';
//import { FaSearch } from "react-icons/fa";

function Search(){
    const[list,setList]=useState(["Orange","Grapes","Mango","Guava"]);
    const[data,setData]=useState('');
    const[list1,setList1]=useState(list);

    const filterEvent = (e)=>{
        console.log(e.target.value);
        setData(e.target.value);
        if(e.target.value){
      let result =   list1.filter((item)=>item.toLowerCase().includes(e.target.value.toLowerCase()))
      console.log("result",result);
      setList(result);
        }else{
            setList1(list1);
        }
    }

 useEffect(()=>{
    console.log('hi');
 },[data])

    
    return(
        <div className='Todoform'>
            <input  value = {data} className='todo-input' placeholder='Search here' onChange={(e)=>filterEvent(e)}/>
            {list.map((item)=>{
                return(
                    <div>
                 {item}
                    </div>
                )
            })}
        </div>
    )
}
export default Search;
