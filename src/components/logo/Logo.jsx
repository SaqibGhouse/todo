import React from "react";
import logo from "../../images/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="_logo">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>SG Studios</p>
      </div>
    </div>
  );
};

export default Logo;
