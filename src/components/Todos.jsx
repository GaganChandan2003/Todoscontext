import React, { useContext, useReducer } from 'react'
import { TodoContext } from '../Context/TextContext';
import "./Todo.css"
import {v4 as uuidv4} from 'uuid'

const Todos = () => {
  const {todo,settodo,addtodo,setaddtodo}=useContext(TodoContext);
  const reducer=(state,action)=>
  {
    switch(action.type)
    {
       case "add_todo":
         {
           return setaddtodo([...addtodo,{value:action.value,id:uuidv4(),toogle:false}])
         }
    case "REMOVE_TODO":
      {
        return setaddtodo(addtodo.filter((el)=>el.id!==action.el.id));
      }
      case "toogle":
        {
           return action.el.toogle=true;
        }
 
    }
  }
  const [state, dispatch] = useReducer(reducer,setaddtodo);
  return (
    <>
    <h2>Todos</h2>
    <div>
        <input type="text" onChange={(e)=>settodo(e.target.value)} />
        <button onClick={()=>{dispatch({type:"add_todo",value:todo})}}>+</button>
    </div>
    <div >
      {
        addtodo.map((el)=>
        (
          <>
          <div className='todos'>
          <input type="checkbox" onClick={()=>{dispatch({type:"toogle",el})}} />
             <div className={el.toogle? "line":null} key={el.id}>{el.value}</div>
              <button  onClick={() => dispatch({ type: "REMOVE_TODO",el})}>delete</button>
 
          </div>
            
          </>
              
         
        ))
      }
    </div>
    </>
    
  )
}

export default Todos