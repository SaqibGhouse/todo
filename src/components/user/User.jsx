import React from "react";
import "./User.css";
import logo from "../../images/logo.png";
const User = () => {
  return (
    <div className="User">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="info">
        <p>Saqib Ghouse</p>
        <a href="#">Logout</a>
      </div>
    </div>
  );
};

export default User;
