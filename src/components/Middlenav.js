import react from "react";
import logo from "../himages/logo.png";
import login from "../himages/login.png"
import signup from "../himages/signup.png"
const middlenav = () => {
  return (
    <div className="middlenavbar">
      <div className="middle-container">
        <div>
          <img src={logo} />
        </div>
        <div className="inputarea">
          <input type="text" className="input" placeholder="SEARCH"/>
        </div>
        <div className="login-signup">
            <div className="login"><img src={login}/></div>
            <div><img src={signup}/></div>
        </div>
      </div>
    </div>
  );
};
export default middlenav;
