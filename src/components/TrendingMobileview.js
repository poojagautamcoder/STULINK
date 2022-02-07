import React from "react";
import trending from "../Headingdata/Trending.png";
import college from "../Headingdata/Colleges.png";
import groupone from "../himages/group1965.png";
import grouptwo from "../himages/group1596.png";
import groupthree from "../himages/Group 1597.png";
import groupfour from "../himages/Group 1598.png";
import leftarrow from "../Headingdata/left arrow.png";
import rightarrow from "../Headingdata/right arrow.png";
import styles from "../styles/Bodypartthree.css";
const TrendingMobileview = () => {
  return (
    <div className="trendingmobile-container">
      <div className="trending-heading">
        <div className="trending">
          <img  className="trend" src={trending} />
        </div>
        <div className="college-title">
          <img className="college" src={college} />
        </div>
      </div>
      <div className="featured">
        <div className="arrow">
          <img src={leftarrow} />
        </div>
        <div>
          <img className="card-photo" src={groupone} />
        </div>
        <div>
          <img className="card-photo" src={grouptwo} />
        </div>
        <div className="arrow">
          <img src={rightarrow} />
        </div>
      </div>
      <div className="featured">
        <div className="arrow">
          <img src={leftarrow} />
        </div>
        <div>
          <img className="card-photo" src={groupthree} />
        </div>
        <div>
          <img className="card-photo" src={groupfour} />
        </div>
        <div className="arrow">
          <img src={rightarrow} />
        </div>
      </div>
    </div>
  );
};

export default TrendingMobileview;
