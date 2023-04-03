//import './App.css';
import React from "react";
import { AppUI } from "./Components/AppUI";
import { ToDoProvider } from './Components/ToDoContext';

function App() {

  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
