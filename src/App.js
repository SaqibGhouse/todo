import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import Main from "./components/main/Main";
import User from "./components/user/User";
import AddNewTodo from "./components/addNewTodo/AddNewTodo";
import Calender from "./components/calender/Calender";
import Projects from "./components/projects/Projects";
import Todos from "./components/todos/Todos";
import EditTodo from "./components/editTodo/EditTodo";

function App() {
  return (
    <div className="App">
      <SideBar>
        <User />
        <AddNewTodo />
        <Calender />
        <Projects />
      </SideBar>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
