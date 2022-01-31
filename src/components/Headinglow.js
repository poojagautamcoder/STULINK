import react from "react";
import home from "../himages/Vector.png";

const Headinglow = () => {
  return (
    <div className="navbar-low">
      <div className="nav-child">
        <div>
          {" "}
          <img src={home} />
        </div>
        <div>Colleges</div>
        <div>Exam</div>
        <div>Courses</div>
        <div>Jobs</div>
        <div>News</div>
        <div>Chat Room</div>
        <div>Members</div>
        <div>Help Center</div>
      </div>
    </div>
  );
};

export default Headinglow;
