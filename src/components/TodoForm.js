import React, {useState} from 'react'

function TodoForm({addTodo}) {
    const [value,setValue]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(value){
            addTodo(value);
            setValue("");
        }
    }
  return (
    <form  onSubmit={handleSubmit} className="TodoForm">
        <input type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        className="todo-input"
        placeholder="add task"/>
        <button type="submit" className="todo-btn">Add</button>
    </form>
  )
}

export default TodoForm