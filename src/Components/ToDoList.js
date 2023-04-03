import React from "react";
import { ToDoItem } from "./ToDoItem"
import "./ToDoList.css"

function ToDoList (props) {
    
    const completeToDo = (id) => {
        const toDoIndex = props.items.findIndex (ToDo => ToDo.id === id);
    
        const tempToDos = [...props.items];
    
        tempToDos[toDoIndex].completed = !tempToDos[toDoIndex].completed;
    
        props.setUpdatedToDoList(tempToDos);
        localStorage.setItem ('TODOLIST_V1', JSON.stringify(tempToDos));
    }

    const deleteToDo = (id) => {
        const toDoIndex = props.items.findIndex (ToDo => ToDo.id === id);

        var tempToDos = [...props.items];

        console.log(toDoIndex);
        tempToDos.splice(toDoIndex, 1);

        props.setUpdatedToDoList(tempToDos);
        localStorage.setItem ('TODOLIST_V1', JSON.stringify(tempToDos));
    }

    return (
        <ul>
            {props.items?.map(ToDo => {
                return ToDo.text.toLowerCase().includes(props.searchingFilterValue.toLowerCase()) || props.searchingFilterValue === '' ? <ToDoItem key={ToDo.id} text={ToDo.text} status={ToDo.completed} onComplete={() => {completeToDo(ToDo.id)}} onDelete={() => {deleteToDo(ToDo.id)}} /> : <div></div>
            })}
        </ul>
    );
}

export { ToDoList };