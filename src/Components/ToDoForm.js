import React from 'react';
import { ToDoContext } from './ToDoContext';
import './ToDoForm.css';

function ToDoForm() {
 
  const [newToDoValue, setNewToDoValue] = React.useState('');
  
  const {
    addToDo,
    setOpenModal,
  } = React.useContext(ToDoContext);
  
  
  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };
  
  const onCancel = () => {
    setOpenModal(false);
  };
  
  
  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false);
    setNewToDoValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newToDoValue}
        onChange={onChange}
        placeholder="Escribe tu tarea..."
      />
      <div className="ToDoForm-buttonContainer">
        <button
          type="button"
          className="ToDoForm-button ToDoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="ToDoForm-button ToDoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };