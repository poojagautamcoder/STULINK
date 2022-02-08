import React from "react";
import styles from "../styles/Jobs.css";
import CartTwo from "./CartTwo";
import mask from "../jobs image/Mask Group.png";
import mask1 from "../jobs image/Mask Group (1).png";
import mask2 from "../jobs image/Mask Group (2).png";
import mask3 from "../jobs image/Mask Group (3).png";
import mask4 from "../jobs image/Mask Group (4).png";
const Jobs = () => {
  return (
    <div className="jobs">
      <h3>Jobs</h3>
      <div className="card-position">
        <CartTwo/>
      </div>
    </div>
  );
};

export default Jobs;
