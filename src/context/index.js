import React, { createContext, useState, useEffect } from "react";
import  useTodos  from "../hooks";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const TodoContext = createContext();
// const {todos} = useTodos();

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
function TodoContextProvider({ children }) {
  return (
    <TodoContext.Provider
      value={{
        todos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContextProvider, TodoContext };
