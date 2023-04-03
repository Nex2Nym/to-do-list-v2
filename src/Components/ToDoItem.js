import React from "react";
import "./ToDoItem.css"

function ToDoItem (props) {

    return (
        <li className="ToDoItem">
            <span className={`Icon Icon-check ${props.status && 'Icon-check--active'}`} onClick={props.onComplete}>
                √
            </span>
            <p className={`ToDoItem-p ${props.status && 'ToDoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
                X
            </span>
        </li>
    );
}

export { ToDoItem };