import React, { useState } from "react";
import TodoForm from "../todoForm/TodoForm";
import "./EditTodo.css"

const EditTodo = () => {
  const [text, setText] = useState();
  const [day, setDay] = useState();
  const [time, setTime] = useState();

  const handleSubmit = () => {};
  return (
    <div className="EditTodo">
      <div className="header">Edit Todo</div>
      <div className="container">
        <TodoForm
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
        />
      </div>
    </div>
  );
};

export default EditTodo;
