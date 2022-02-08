import React from "react";
import Headinglow from "../components/Headinglow";
import styles from "../styles/Header.css";
import midnavbar from "../himages/navbar.png";
import Pagebody from "../components/Pagebody";
import Collegeexams from "../components/Collegeexams";
import Trendingcollege from "../components/Trendingcollege";
import Cources from "../components/Cources";
import Uppernav from "../components/Uppernav";
import Middlenav from "../components/Middlenav";
import MobileMiddlenav from "../components/MobileMiddlenav";
import TrendingMobileview from "../components/TrendingMobileview";
import Latestexam from "../components/Latestexam";
const HomePage = () => {
  return (
    <div className="homepage">
      <Uppernav />
      <MobileMiddlenav />
      <Middlenav />
      <Headinglow />
      <Pagebody />
      <Collegeexams />
      <Trendingcollege />
      <TrendingMobileview />
      <Cources/>
      {/* <Latestexam/> */}
    </div>
  );
};
export default HomePage;
