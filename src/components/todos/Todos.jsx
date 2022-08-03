import React from "react";
import Next7Days from "../next7Days/Next7Days";
import Todo from "../todo/Todo";

const Todos = () => {
  return (
    <div className="Todos">
      <Todo />
      <Next7Days />
    </div>
  );
};

export default Todos;
