import React from "react";
import Headermid from "../components/Headermid";
import Headerup from "../components/Headerup";
import Headinglow from "../components/Headinglow";
import styles from "../styles/Header.css";
const HomePage = () => {
  return (
    <div>
      <Headerup />
      <Headermid />
      <Headinglow/>
    </div>
  );
};
export default HomePage;
