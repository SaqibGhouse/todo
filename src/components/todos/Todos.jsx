import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TodoContext } from "../../context";
import Next7Days from "../next7Days/Next7Days";
import Todo from "../todo/Todo";
import "./Todos.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/index";
import { useState } from "react";

const Todos = () => {
  // const { todos } = useContext(TodoContext);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    const todosCollectionref = collection(db, "todos");
    getDocs(todosCollectionref)
      .then((response) => {
        console.log(response.docs);
        const todos = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setTodos(todos);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="Todos">
      <div className="todos">
        {todos.map((todo) => (
          <Todo todo={todo.data} key={todo.id} />
        ))}
      </div>
      <Next7Days />
    </div>
  );
};

export default Todos;
