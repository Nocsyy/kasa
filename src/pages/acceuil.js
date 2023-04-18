import React, { useState, useEffect } from "react";
import "../style/acceuil.css";
import { API_APPT } from "../global";
import { Link } from "react-router-dom";
import Header from "../components/banner.jsx";
export function Acceuil() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch(API_APPT)
      .then((response) => response.json())
      .then((data) => {
        setLogements(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header isHome={true} />
      <div className="grid-acc">
        {logements.map((logement, index) => (
          <div className="div-logement" key={index}>
            <Link to={"/info-logement/" + logement.id}>
              <img src={logement.cover} alt={logement.title} id={logement.id} />
              <div className="ctn-title-img-acc">
                <figcaption className="fig-margin">{logement.title}</figcaption>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
