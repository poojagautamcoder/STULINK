import react from "react";
import home from "../himages/home.png";

const Headinglow = () => {
  return (
    <div className="navbar-low">
      <div className="nav-child">
        <p>
          {" "}
          <img src={home} />
        </p>
        <p>Colleges</p>
        <p>Exam</p>
        <p>Courses</p>
        <p>Jobs</p>
        <p>News</p>
        <p>Chat Room</p>
        <p>Members</p>
        <p>Help Center</p>
      </div>
    </div>
  );
};

export default Headinglow;
