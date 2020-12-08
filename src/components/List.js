import React from "react";
import Todo from "./Todo";
const List = ({todos, setTodos, filteredTodos}) =>{
return(
    <div className="todo-container">
    <ul className="todo-list">
    {filteredTodos.map(todo=>(
        <Todo 
        setTodos={setTodos}
        todos={todos}
        todo={todo}
        key={todo.id} 
        text={todo.text}/>
    ))}
    
    </ul>
    </div>
)
};

export default List;