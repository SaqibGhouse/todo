import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TodoContext } from "../../context";
import Next7Days from "../next7Days/Next7Days";
import Todo from "../todo/Todo";
import "./Todos.css";
import { doc, onSnapshot,deleteDoc } from "firebase/firestore";
import { useState } from "react";
import { todosCollectionRef } from "../../firebase/firestore.collection";
import { db } from "../../firebase";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(todosCollectionRef, (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const deleteTodo = (id) => {
    const docDelRef = doc(db, "todos", id);
    deleteDoc(docDelRef)
      .then(() => console.log("document deleted"))
      .catch((err) => console.log(err));
  };

  
  return (
    <div className="Todos">
      <div className="todos">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
        ))}
      </div>
      <Next7Days />
    </div>
  );
};

export default Todos;
