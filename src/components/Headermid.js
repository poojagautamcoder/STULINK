import React from "react";
import logo from "../himages/logo.png";
import login from "../himages/login.png";
import signup from "../himages/signup.png";
const Headermid = () => {
  return (
    <div className="midparent-container">
      <div className="mid-child-container">
        <div>
          <img src={logo} />
        </div>
        <div  className="search-area">
          <input className="search" placeholder="SEARCH" />
        </div>
        <div>
          {" "}
          <button className="log-in register">
            <img src={login} /> log in
          </button>
          <button className="sign-up register">
            {" "}
            <img src={signup} /> sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headermid;
