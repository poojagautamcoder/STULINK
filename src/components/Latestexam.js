import React from "react";
import styles from "../styles/Latestexam.css";
import latest from "../exam images/LATEST.png";
import examupdate from "../exam images/Exam Updates.png";
import exam1569 from "../exam images/Group 1569.png";
import exam1570 from "../exam images/Group 1570.png";
import exam1571 from "../exam images/Group 1571.png";
import exam1572 from "../exam images/Group 1572.png";
import exam1573 from "../exam images/Group 1573.png";
import exam1574 from "../exam images/Group 1574.png";
import exam1575 from "../exam images/Group 1575.png";
import netexam2021 from "../exam images/NET EXAMS 2021.png";
import dateicon from "../exam images/Vector.png";
import date from "../exam images/25- August 2021.png";
const Latestexam = () => {
  return (
    <div>
      <div>
        <img src={latest} />
      </div>
      <div>
        <img src={examupdate} />
      </div>
      <div className="sections">
        <div className="section-one">
          <div>
            <img src={exam1569} />
          </div>
          <div>
            <img src={exam1570} />
          </div>
          <div>
            <img src={exam1571} />
          </div>
          <div>
            <img src={exam1572} />
          </div>
          <div>
            <img src={exam1573} />
          </div>
          <div>
            <img src={exam1574} />
          </div>
          <div>
            <img src={exam1575} />
          </div>
          <button>view more ...</button>
        </div>
        <div className="section-two">
          <div className="section-heading">
            <div>
              <img src={netexam2021} />
            </div>
            <div className="data-details">
              <div>
                <img src={dateicon} />
              </div>
              <div>
                <img src={date} />
              </div>
            </div>
          </div>
          <div className="exam-para">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div>
            <div className="paper-datails">
              <h5>Examination Mode </h5>
              <p>– Computer Based Test</p>
            </div>
            <div className="paper-datails">
              <h5>Number of Shits </h5>
              <p>- 2 (9 am to 12 pm & 2:30 pm to 5:30 pm)</p>
            </div>
            <div className="paper-datails">
              <h5>Duration of Exam</h5>
              <p> - 3 hours</p>
            </div>
            <div className="paper-datails">
              <h5>Mode of Language </h5>
              <p> – English and Hindi</p>
            </div>
            <button className="apply now" >Apply Now  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestexam;
