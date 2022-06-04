import { createContext,useState } from "react";

export const TodoContext=createContext();

export const TodoProvider=({children})=>
{
    const [todo, settodo] = useState({});
    const [addtodo, setaddtodo] = useState([]);
    const [toogle, settoogle] = useState(false);
    
    
    
    return (<TodoContext.Provider value={{todo,settodo,addtodo, setaddtodo,toogle, settoogle}}>{children}</TodoContext.Provider>)
}