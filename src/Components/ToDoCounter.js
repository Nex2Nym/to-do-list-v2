import React from "react";
import "./ToDoCounter.css"

function ToDoCounter (props) {
    return (
        <h2 className="ToDoCounter">
            Has completado {props.doneToDos} de {props.toDoCount} To-Dos
        </h2>
    );
}

export { ToDoCounter };