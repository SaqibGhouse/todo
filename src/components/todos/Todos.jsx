import React from "react";
import Next7Days from "../next7Days/Next7Days";
import Todo from "../todo/Todo";
import "./Todos.css";

const Todos = () => {
  const todos = [
    {
      id: "d54sd4",
      text: "Go for a run",
      time: "10:00 AM",
      date: "06/03/2021",
      day: "6",
      checked: false,
      color: "#000000",
      project: "personal",
    },
    {
      id: "d54fdf",
      text: "Meeting",
      time: "09:00 AM",
      date: "08/03/2021",
      day: "1",
      checked: true,
      color: "#00ff00",
      project: "work",
    },
  ];
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
