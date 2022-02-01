import React from "react";
import trending from "../Headingdata/Trending.png";
import college from "../Headingdata/Colleges.png";
import groupone from "../himages/group1965.png";
import grouptwo from "../himages/group1596.png";
import groupthree from "../himages/group 1597.png";
import groupfour from "../himages/group 1598.png";
import leftarrow from "../Headingdata/left arrow.png";
import rightarrow from "../Headingdata/right arrow.png";
const Trendingcollege = () => {
  return (
    <div className="trending-container">
      <div className="trending-heading">
          <div className="trending">
          <img src={trending} />
          </div>
          <div className="college-title">
          <img src={college} />
          </div>
      </div>
      <div className="featured">
      <div className="arrow"><img src = {leftarrow}/></div>
         <div><img src ={groupone}/></div>  
         <div><img src = {grouptwo}/></div>  
         <div><img src = {groupthree}/></div> 
         <div><img src = {groupfour}/></div>
         <div className="arrow"><img src = {rightarrow}/></div>
      </div>
    </div>
  );
};

export default Trendingcollege;
