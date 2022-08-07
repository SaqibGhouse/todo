import React from "react";
import { CalendarDate, CaretUp } from "react-bootstrap-icons";
import { calenderItems } from "../constants";
import './Calender.css'

const Calender = () => {
  let renderCalenderItems;
  renderCalenderItems = calenderItems.map((item) => (
    <div className="item" key={item}>
      {item}
    </div>
  ));
  return (
    <div className="Calender">
      <div className="header">
        <div className="title">
          <CalendarDate size="18" />
          <p>Calender</p>
        </div>
        <div className="btns">
          <span>
            <CaretUp size="20" />
          </span>
        </div>
      </div>
      <div className="items">{renderCalenderItems}</div>
    </div>
  );
};

export default Calender;
