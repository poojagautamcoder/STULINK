import React from "react";
import Headerup from "../components/Headerup";
import Headinglow from "../components/Headinglow";
import styles from "../styles/Header.css";
import midnavbar from "../himages/navbar.png";
import Pagebody from "../components/Pagebody";
import Collegeexams from "../components/Collegeexams";

const HomePage = () => {
  return (
    <div className="homepage">
      <Headerup />
      <div>
        <img src={midnavbar} />
      </div>
      <Headinglow />
     <Pagebody/>
     <Collegeexams/>
    </div>
  );
};
export default HomePage;
