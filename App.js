import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"
//import TodoItem from "./TodoItem"

function App() {
    const todoList  = todosData.map(todoData => {
        return <TodoItem 
            key = {todoData.id}
            text = {todoData.text}
            completed = {todoData.completed}
        />
    })
    
    return (
        <div className="todo-list">
            {todoList}
        </div>
    )
}

export default App