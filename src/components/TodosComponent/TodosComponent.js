import React, {useEffect, useState} from 'react';
import {todoService} from "../../services";
import TodoComponent from "../TodoComponent/TodoComponent";

const TodosComponent = () => {

    const [todos,setTodos] = useState([]);
    
    useEffect(()=>{
        
        todoService.getAll().then(({data}) => setTodos(data))
        
    },[])
    
    return (
        <div>
            {todos.length? todos.map(todo=><TodoComponent key={todo.id} todo={todo}/>):
                <h1>Loading...</h1>}
        </div>
    );
};

export default TodosComponent;