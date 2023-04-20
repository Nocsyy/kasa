import { useState } from "react";

function Gallery (props){
  const [logement, setLogement] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const previousImage = () => {
        setCurrentImageIndex(
          (currentImageIndex - 1 + logement.pictures.length) %
            logement.pictures.length
        );
      };
    
  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % logement.pictures.length);
  };
  

return(
   
    <div>
      {logement && ( 
          <div className="photoLogement">
            {logement.pictures.map((pic, i) => (
              <img
                alt=""
                key={i}
                src={pic}
                style={{
                  display: i === currentImageIndex ? "block" : "none",
                }}
              ></img>
            ))}
            {logement.pictures.length > 1 && (
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
          )}
    </div>

);
}

export default Gallery;


/*{logement && (
        <div>
          <div className="photoLogement">
            {logement.pictures.map((pic, i) => (
              <img
                alt=""
                key={i}
                src={pic}
                style={{
                  display: i === currentImageIndex ? "block" : "none",
                }}
              ></img>
            ))}
            {logement.pictures.length > 1 && (
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
     </div>
  )}*/