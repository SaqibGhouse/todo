import React from "react";
import { useContext } from "react";
import { TodoContext } from "../../context";
import Next7Days from "../next7Days/Next7Days";
import Todo from "../todo/Todo";
import "./Todos.css";

const Todos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="Todos">
      <div className="todos">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
      <Next7Days />
    </div>
  );
};

export default Todos;
