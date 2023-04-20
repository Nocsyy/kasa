import { useState } from "react";
function Collapse (props){
    const [showVolet, setShowVolet] = useState(true);
    const toggleVolet = () => setShowVolet(!showVolet);
    return(
        <div className="volet">
        <div className="ctn-btn-text">
          <p className="text-volet">{props.title}</p>
          <button className="btn-about" onClick={toggleVolet}>
            <span className="material-symbols-outlined icon-volet">
              {showVolet ? "expand_less" : "expand_more"}
            </span>
          </button>
        </div>
        {showVolet && (
          <div className="ctn-description-about">
            <p className="description-about">
              {props.text}
            </p>
          </div>
        )}
      </div>
    )
  
}

export default Collapse;