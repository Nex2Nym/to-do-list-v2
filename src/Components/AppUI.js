import React from "react";
import { ToDoCounter } from "./ToDoCounter"
import { ToDoSearch } from "./ToDoSearch"
import { ToDoList } from "./ToDoList"
import { CreateToDoButton } from "./CreateToDoButton"
import { ToDoContext } from "./ToDoContext"
import { Modal } from "../Modal/Modal";
import { ToDoForm } from "./ToDoForm";
import MyLoader from "./MyLoader";

function AppUI() {
    return (
      <ToDoContext.Consumer>
        {({
            loading,
            error,
            searchValue,
            setSearchValue,
            ToDos,
            setToDos,
            OpenModal,
            setOpenModal
        }) => {
            return (
                <React.Fragment>
                    <ToDoCounter doneToDos={ToDos?.filter(item => item.completed === true).length } toDoCount={ToDos?.length}/>

                    <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            
                    {error && <p>Recargue la pagina</p>}
                    {loading && <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><MyLoader /></div>}
            
                    <ToDoList items={ToDos != [] ? ToDos : []} searchingFilterValue={searchValue} setUpdatedToDoList={setToDos} />

                    {!!OpenModal && (
                      <Modal>
                        <ToDoForm />
                      </Modal>
                    )}

                    <CreateToDoButton setOpenModal={setOpenModal}/>
                </React.Fragment>
            )
        }}
      </ToDoContext.Consumer>
  );
}

export {AppUI};