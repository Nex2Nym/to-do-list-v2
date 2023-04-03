import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider (props) {
    const [OpenModal, setOpenModal] = React.useState(false)
    const [ToDos, setToDos, loading, error] = useLocalStorage('TODOLIST_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
    }, [ToDos]);

    const addToDo = (text) => {
        const newToDos = [...ToDos];
        newToDos.push({
          completed: false,
          text,
          id: Math.random()
        });
        localStorage.setItem ('TODOLIST_V1', JSON.stringify(newToDos));
      };


    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            searchValue,
            setSearchValue,
            ToDos,
            setToDos,
            OpenModal,
            setOpenModal,
            addToDo
        }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export {ToDoContext, ToDoProvider};