import { useState } from "react";


function Caroussel (props){

    const previousImage = () => {
        setCurrentImageIndex(
          (currentImageIndex - 1 + props.pictures.length) %
            props.pictures.length
        );
      };
    
      const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % props.pictures.length);
      };
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    return(
        <div className="photoLogement">
        {props.pictures.map((pic, i) => (
          <img
            alt=""
            key={i}
            src={pic}
            style={{
              display: i === currentImageIndex ? "block" : "none",
            }}
          ></img>
        ))}
        {props.pictures.length > 1 && (
          <div className="ctn-btn">
            <button className="btn-next" onClick={previousImage}>
              <span className="material-symbols-outlined icon">
                arrow_back_ios
              </span>
            </button>
            <button className="btn-previous" onClick={nextImage}>
              <span className="material-symbols-outlined icon">
                arrow_forward_ios
              </span>
            </button>
          </div>
        )}
      </div>
    )
}

export default Caroussel;