import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import User from "./components/user/User";
import AddNewTodo from "./components/addNewTodo/AddNewTodo";
import Todos from "./components/todos/Todos";
import EditTodo from "./components/editTodo/EditTodo";
import Logo from "./components/logo/Logo";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Logo />
        <AddNewTodo />
        <User />
      </Navbar>
      <Main>
        <Todos />
        {/* <EditTodo /> */}
      </Main>
    </div>
  );
}

export default App;
