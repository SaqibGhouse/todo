import React from "react";
import "./TodoForm.css";
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const TodoForm = ({
  handleSubmit,
  heading = false,
  text,
  setText,
  showButton = false,
  setShowModal = false,
  day,
  setDay,
  time,
  setTime,
}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit} className="TodoForm">
        <div className="text">
          {heading && <h3> {heading} </h3>}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="To do.."
            autoFocus
          />
        </div>
        {/* <div className="remind">
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
        </div> */}
        {showButton && (
          <>
            <div className="cancel" onClick={() => setShowModal(false)}>
              <X size={40} />
            </div>
            <div className="confirm">
              <button>Add to do</button>
            </div>
          </>
        )}
      </form>
    </MuiPickersUtilsProvider>
  );
};

export default TodoForm;
