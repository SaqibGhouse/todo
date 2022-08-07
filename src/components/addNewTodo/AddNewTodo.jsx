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

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <form>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="text">
              <h3>Add new Todo!</h3>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="To do.."
                autoFocus
              />
            </div>
            <div className="remind">
              <Bell />
              <p>Remind Me</p>
            </div>
            <div className="pick-day">
              <div className="title">
                <CalendarDay />
                <p>Choose a day</p>
              </div>
              <DatePicker value={day} onChange={(day) => setDay(day)} />
            </div>
            <div className="pick-time">
              <div className="title">
                <Clock />
                <p>Choose a day</p>
              </div>
              <TimePicker value={time} onChange={(time) => setTime(time)} />
            </div>
            <div className="pick-project">
              <Palette />
              <p>Choose a project</p>
            </div>
            <div className="projects">
              <div className="project active">personal</div>
              <div className="project">work</div>
            </div>
            <div className="cancel" onClick={() => setShowModal(false)}>
              <X size={40} />
            </div>
            <div className="confirm">
              <button>Add to do</button>
            </div>
          </MuiPickersUtilsProvider>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
