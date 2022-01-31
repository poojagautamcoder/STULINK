import react from "react";
import home from "../himages/Vector.png";

const Headinglow = () => {
  return (
    <div className="navbar-low ">
      <ul className="site-links">
        <li>
          <img src={home} />
        </li>
        <li>Colleges</li>
        <li>Exam</li>
        <li>Courses</li>
        <li>jobs</li>
        <li>News</li>
        <li>Chat Room</li>
        <li>Members</li>
        <li>Help Center</li>
      </ul>
    </div>
  );
};

export default Headinglow;
