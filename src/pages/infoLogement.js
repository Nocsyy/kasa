import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_APPT } from "../global";
import "../style/infoLogement.css";

export function InfoLogement() {
  const [logement, setLogement] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(API_APPT)
      .then((response) => response.json())
      .then((data) => {
        const foundLogement = data.find((logement) => logement.id === id);
        setLogement(foundLogement);
        if (!foundLogement) {
          navigate("/erreur-chargement");
        }
      })
      .catch((error) => {
        console.log(error);
        navigate("/erreur-chargement");
      });
  }, [id, navigate]);

  const previousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + logement.pictures.length) %
        logement.pictures.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % logement.pictures.length);
  };
  const [showDescription, setShowDescription] = useState(true);
  const toggleDescription = () => setShowDescription(!showDescription);

  const [showEquipments, setShowEquipments] = useState(true);
  const toggleEquipments = () => setShowEquipments(!showEquipments);

  return (
    <div>
      {logement && (
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

          <div className="descriptionLogement">
            <div className="descriptionGauche">
              <div className="titreLogement">
                <h3>{logement.title}</h3>
              </div>
              <div className="localisationLogement">
                <p>{logement.location}</p>
              </div>
              <div className="ctn-tag">
                <div className="tag">
                  {logement.tags.map((p, i) => (
                    <p alt={p} key={i}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="descriptionDroite">
              <div className="bailleur">
                {logement.host ? (
                  <p>{logement.host.name}</p>
                ) : (
                  <p>No host information available</p>
                )}
                {logement.host ? (
                  <img
                    alt={logement.host.name}
                    src={logement.host.picture}
                  ></img>
                ) : (
                  <p>No host information available</p>
                )}
              </div>
              <div className="ctn-star">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    style={{
                      color: i < Math.floor(logement.rating) ? "red" : "gray",
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="ctn-equipment-description">
            <div className="ctn-description">
              <div className="volet-description">
                <p>Description</p>
                <button onClick={toggleDescription}>
                  <span className="material-symbols-outlined">
                    {showDescription ? "expand_less" : "expand_more"}
                  </span>
                </button>
              </div>
              {showDescription && (
                <div className="description-logement">
                  <p>{logement.description}</p>
                </div>
              )}
            </div>
            <div className="ctn-equipments">
              <div className="volet-equipments">
                <p>Equipements</p>
                <button onClick={toggleEquipments}>
                  <span className="material-symbols-outlined">
                    {showEquipments ? "expand_less" : "expand_more"}
                  </span>
                </button>
              </div>
              {showEquipments && (
                <div className="description-equipments">
                  <div>
                    {logement.equipments.map((p, i) => (
                      <p alt={p} key={i}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
