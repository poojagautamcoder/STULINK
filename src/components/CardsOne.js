import react from "react"; 
import styles from "../styles/Bodyparttwo.css";
const CardsOne = (props) => {
    return(
        <div className="logo">
          <div>
            <img className="card-img" src= {props.imgsrc}/>
          </div>
          <div>
            <h3>{props.cardhead}</h3>
          </div>
          <div>
            <p>{props.subhead}</p>
          </div>
      </div>
    );
}

export default CardsOne
