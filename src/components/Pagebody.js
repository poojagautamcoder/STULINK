import react from "react";
import styles from "../styles/Bodypartone.css";
import data from "../himages/OBJECTS.png";
import text from "../himages/dreamcollege.png";
import vline from "../himages/Rectangle 1142.png";
const Pagebody = () => {
  return (
    <div className="container">
      <div className="overlay">
        <div className="child-overlay">
          <div>
            <div className="welcome">
              <p>WELCOME TO STULINK</p>
            </div>
            <br />
            <div className="data">
              <img className="colored-text" src={text} />
            </div>
            <br />
            <div className="para">
            <div className="line">
                <img className="verticle-line" src={vline}/>
              </div>
              <div className="lorem-text">
                <p>
                  Lorem ipsum dolor sit amet,
                  <br/>
                   consectetuer adipiscing elit.Aenean commodo
                   <br/>
                    dolor Aenean massa Cum sociis .
                </p>
              </div>
             
            </div>
          </div>
          <div>
            <img className="colored-text chart"  src={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pagebody;
