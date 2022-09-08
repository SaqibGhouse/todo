import React, { useState } from "react";
import { CheckCircleFill, Circle, Trash } from "react-bootstrap-icons";
import "./Todo.css";

function Todo(props) {
  const { todo, deleteTodo } = props;
  const [hover, setHover] = useState(false);

  return (
    <div className="Todo">
      <div
        className="todo-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="check-todo">
          {todo.data.checked ? (
            <span className="checked">
              <CheckCircleFill color="#bebebe" />
            </span>
          ) : (
            <span className="unchecked">
              <Circle color={todo.data.color} />
            </span>
          )}
        </div>
        <div className="text">
          <p style={{ color: todo.data.checked ? "#bebebe" : "#000000" }}>
            {todo.data.text}
          </p>
          <div
            className={`line ${todo.data.checked ? "line-through" : ""}`}
          ></div>
        </div>
        <div className="delete-todo" onClick={() => deleteTodo(todo.id)}>
          {(hover || todo.data.checked) && (
            <span>
              <Trash />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
