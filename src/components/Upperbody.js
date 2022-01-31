import react from "react";
import styles from "../styles/HomepageBody.css";
import data from "../himages/OBJECTS.png";
const Upperbody = () => {
  return (
    <div className="container">
      <div className="child-a">a</div>
      <div className="child-b">
        <div className="data-heading">
          <div>
            <h5 className="welcome">Weclome to Stulink</h5>
          </div>
          <div className="text">
            <ul className="sub-heading">
              <li>The</li>
              <li>Smarter</li>
              <li>Way</li>
            </ul>
            <ul className="sub-heading">
              <li>to</li>
              <li>Find</li>
              <li>Dream</li>
              <li>College</li>
            </ul>
          </div>
          <div>
            <h6>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo dolor Aenean massa Cum sociis .
            </h6>
          </div>
        </div>
        <div className="data-chart">
          <img src={data} />
        </div>
      </div>
    </div>
  );
};
export default Upperbody;
