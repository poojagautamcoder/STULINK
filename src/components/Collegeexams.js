import React from "react";
import findyourbest from "../himages/FindYourBest.png";
import collegeandexams from "../himages/Colleges & Exams.png";
import colleges from "../himages/Colleges1.png";
import exams from "../himages/Exams.png";
import styles from "../styles/Bodyparttwo.css";
import CardsOne from "../components/CardsOne";
import group1 from "../college-imgs/Group (1).png";
import group2 from "../college-imgs/Group (2).png";
import group3 from "../college-imgs/Group (3).png";
import group4 from "../college-imgs/Group (4).png";
import group5 from "../college-imgs/Group (5).png";
const Collegeexams = () => {
  
  return (
    <div className="college-container">
      <div>
        <img className="findyourbest" src={findyourbest} />
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
      <CardsOne imgsrc = {group1} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group2} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group3} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group4} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group5} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group1} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group2} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group3} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group4} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group5} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group1} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group2} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group3} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group4} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group5} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group1} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group2} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group3} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group4} cardhead = "abcdefgh" subhead = "efghijkl"/>
      <CardsOne imgsrc = {group5} cardhead = "abcdefgh" subhead = "efghijkl"/>
      </div>
    </div>
  );
};

export default Collegeexams;
