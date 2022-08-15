import React from "react";
import { BackgroundImage } from "../backgroundImage/bgImage/BackgroundImage";
import "./Main.css";

const Main = ({ children }) => {
  return (
    <>
      {/* <BackgroundImage show={true} /> */}
      <div className="Main">{children}</div>;
    </>
  );
};

export default Main;
