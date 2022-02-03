import React from "react";
import findyourbest from "../himages/FindYourBest.png";
import collegeandexams from "../himages/Colleges & Exams.png";
import colleges from "../himages/Colleges1.png";
import exams from "../himages/Exams.png";
import styles from "../styles/Bodyparttwo.css";
import CardsOne from "../components/CardsOne"
const Collegeexams = () => {
  const data = [0,1,2,3,4,5,6,7,8,9,10,11,12,12,14]
  return (
    <div className="college-container">
      <div>
        <img  className="findyourbest" src={findyourbest} />
      </div>
      <div className="collegeexams">
        <img className="collegeExams" src={collegeandexams} />
      </div>
      <div className="buttons">
        <div className="bluediv">
          <img className="titlebtn" src={colleges} />
        </div>
        <div className="whitediv">
          <img className="titlebtn" src={exams} />
        </div>
      </div>
      <div className="Cards">
          {data.map((cards, index) => {
            return (
              <div className="cards-item" key={index}>
                 <CardsOne/>
              </div>
            );
          })}
        </div>
   
    </div>
  );
};

export default Collegeexams;
