import React from "react";
import Headerup from "../components/Headerup";
import Headinglow from "../components/Headinglow";
import styles from "../styles/Header.css";
import midnavbar from "../himages/navbar.png";
import Pagebody from "../components/Pagebody";
import Collegeexams from "../components/Collegeexams";
import Trendingcollege from "../components/Trendingcollege";
import Cources from "../components/Cources";

const HomePage = () => {
  return (
    <div className="homepage">
      <Headerup />
        <img className="middlenav" src={midnavbar} />
      <Headinglow />
     <Pagebody/>
     <Collegeexams/>
     <Trendingcollege/>
     <Cources/>
    </div>
  );
};
export default HomePage;
