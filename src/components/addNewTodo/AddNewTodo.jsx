import React from "react";
import { useState } from "react";
import Modal from "../modal/Modal";
import "./AddnewTodo.css";
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TodoForm from "../todoForm/TodoForm";

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleSubmit = () => {};

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
