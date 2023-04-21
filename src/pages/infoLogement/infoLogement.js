import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../../components/collapse/collapse";
import "../infoLogement/infoLogement.css";
import Title from "../../components/title/title";
import Localisation from "../../components/localisation/localisation";
import Tags from "../../components/tags/tag";
import Owner from "../../components/owner/owner";
import Rating from "../../components/rating/rating";
import Caroussel from "../../components/caroussel/caroussel";

export function InfoLogement() {
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch("/appt.json")
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

  return (
    <div>
      {logement && (
        <div>
          <Caroussel pictures={logement.pictures} />
          <div className="descriptionLogement">
            <div className="descriptionGauche">
              <Title title={logement.title} />
              <Localisation location={logement.location} />
              <Tags tags={logement.tags} />
            </div>
            <div className="descriptionDroite">
              <Owner host={logement.host} />
              <Rating rating={logement.rating} />
            </div>
          </div>

          <div className="ctn-equipment-description">
            <div className="ctn-description">
              <Collapse title="Description" text={logement.description} />
            </div>
            <div className="ctn-equipments">
              <Collapse
                title="Equipements"
                text={logement.equipments.map((p, i) => (
                  <p alt={p} key={i}>
                    {p}
                  </p>
                ))}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
