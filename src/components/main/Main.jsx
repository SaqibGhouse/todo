import React from "react";
import { BackgroundImage } from "../backgroundImage/bgImage/BackgroundImage";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <div className="">
      <BackgroundImage show={true} />
      <div className="Main">{children}</div>;
    </div>
  );
};

export default Main;
