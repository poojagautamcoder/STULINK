import React from "react";
import popular from "../courses img/POPULAR.png";
import courses from "../courses img/Courses.png";
import all from "../courses img/ALL.png";
import diploma from "../courses img/Diploma.png";
import undergraduate from "../courses img/Under Graduate.png";
import postgraduation from "../courses img/Post Graduate.png";
import line1 from "../courses img/Line 442.png";
import line2 from "../courses img/Line 443.png";
import phd from "../courses img/Phd.png";
import Courcesdata from "./Courcesdata";
import styles from "../styles/Bodypartfour.css";
import CourcesdataMobileview from "./CoursedataMobileview";
import Boxmobtwo from "./Boxmobtwo";
const Cources = () => {
  return (
    <div className="course-container">
      <div className="cources-child">
        <div>
          <img src={popular} />
        </div>
        <div className="cources-child">
          <img src={courses} />
        </div>
        <div className="title-container">
          <div className="all-title">
            {" "}
            <img src={all} />
          </div>
          <div className="all-title">
            {" "}
            <img src={diploma} />
          </div>
          <div className="all-title">
            {" "}
            <img src={undergraduate} />
          </div>
          <div className="all-title">
            {" "}
            <img src={postgraduation} />
          </div>
          <div className="all-title">
            {" "}
            <img src={phd} />
          </div>
        </div>
        <div className="underline">
          <img className="line1" src={line2} />
          <img className="line2" src={line1} />
        </div>
      </div>
      <Courcesdata />
      <CourcesdataMobileview />
      <Boxmobtwo/>
    </div>
  );
};

export default Cources;
