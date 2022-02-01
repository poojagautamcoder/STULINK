import React from "react";
import Headerup from "../components/Headerup";
import Headinglow from "../components/Headinglow";
import styles from "../styles/Header.css";
import midnavbar from "../himages/navbar.png";
import Pagebody from "../components/Pagebody";
import Collegeexams from "../components/Collegeexams";
import Trendingcollege from "../components/Trendingcollege";

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
     <Trendingcollege/>
    </div>
  );
};
export default HomePage;
