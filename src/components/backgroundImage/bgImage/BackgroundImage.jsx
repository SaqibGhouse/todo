import React from "react";
import BGImage from "../../../images/bg.jpg";
import "./BackgroundImage.css";
export const BackgroundImage = ({ show }) => {
  return (
    show && (
      <div className="BackgroundImage">
        <img src={BGImage} alt="" />
      </div>
    )
  );
};
