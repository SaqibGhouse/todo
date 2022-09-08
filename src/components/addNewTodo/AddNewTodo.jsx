import React from "react";
import { useState } from "react";
import Modal from "../modal/Modal";
import "./AddnewTodo.css";
import TodoForm from "../todoForm/TodoForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/index";
import randomColor from "randomcolor";
import { todosCollectionRef } from "../../firebase/firestore.collection";

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    // const todosCollRef = collection(db, "todos");
    addDoc(todosCollectionRef, {
      text: text,
      checked: false,
      color: randomColor(),
    })
      .then((response) => {
        console.log(response.id);
      })
      .catch((error) => {
        console.log(error.messgae);
      });
    setShowModal(false);
    setText("");
  };

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <TodoForm
          handleSubmit={handleSubmit}
          heading="Add new todo!"
          text={text}
          setText={setText}
          showButton={true}
          setShowModal={setShowModal}
          day={day}
          setDay={setDay}
          time={time}
          setTime={time}
        />
      </Modal>
    </div>
  );
};

export default AddNewTodo;
