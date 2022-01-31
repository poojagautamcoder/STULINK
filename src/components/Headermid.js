import React from "react";

const Headermid = () => {
  return (
    <div className="midparent-container">
      <div className="mid-child-container">
        <div>
          <h3>Stulink</h3>
        </div>

        <div className="search">
          <div class="search">
            <span class="fa fa-search"></span>
            <input className="search-area" placeholder="Search" />
          </div>
        </div>

        <div>
          <button className="log-in register">log in</button>
          <button className="sign-up register">sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Headermid;
