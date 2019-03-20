import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{props.text}</p>
        </div>
    )
}

export default TodoItem