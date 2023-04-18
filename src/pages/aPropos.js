import { useState } from "react";
import Header from "../components/banner";

export function Apropos() {
  const [showVolet, setShowVolet] = useState(true);
  const toggleVolet = () => setShowVolet(!showVolet);

  const [showVolet1, setShowVolet1] = useState(true);
  const toggleVolet1 = () => setShowVolet1(!showVolet1);

  const [showVolet2, setShowVolet2] = useState(true);
  const toggleVolet2 = () => setShowVolet2(!showVolet2);

  const [showVolet3, setShowVolet3] = useState(true);
  const toggleVolet3 = () => setShowVolet3(!showVolet3);

  return (
    <div>
      <Header />
      <div className="ctn-volet">
        <div className="volet">
          <div className="ctn-btn-text">
            <p className="text-volet">Fiabilité</p>
            <button className="btn-about-1" onClick={toggleVolet}>
              <span className="material-symbols-outlined icon-volet">
                {showVolet ? "expand_less" : "expand_more"}
              </span>
            </button>
          </div>
          {showVolet && (
            <div className="ctn-description-about">
              <p className="description-about">
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            </div>
          )}
        </div>

        <div className="volet-2">
          <div className="ctn-btn-text-2">
            <p className="text-volet-2">Respect</p>
            <button className="btn-about-2" onClick={toggleVolet1}>
              <span className="material-symbols-outlined icon-volet">
                {showVolet1 ? "expand_less" : "expand_more"}
              </span>
            </button>
          </div>
          {showVolet1 && (
            <div className="ctn-description-about-2">
              <p className="description-about-3">
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            </div>
          )}
        </div>

        <div className="volet-3">
          <div className="ctn-btn-text-3">
            <p className="text-volet-3">Service</p>
            <button className="btn-about-1" onClick={toggleVolet2}>
              <span className="material-symbols-outlined icon-volet">
                {showVolet2 ? "expand_less" : "expand_more"}
              </span>
            </button>
          </div>
          {showVolet2 && (
            <div className="ctn-description-about-3">
              <p className="description-about-3">
                Nos équipes se tiennent à votre disposition pour vous fournir
                une expérience parfaite. N'hésitez pas à nous contacter si vous
                avez la moindre question.
              </p>
            </div>
          )}
        </div>
        <div className="volet-4">
          <div className="ctn-btn-text-4">
            <p className="text-volet-4">Sécurité</p>
            <button className="btn-about-1" onClick={toggleVolet3}>
              <span className="material-symbols-outlined icon-volet">
                {showVolet3 ? "expand_less" : "expand_more"}
              </span>
            </button>
          </div>
          {showVolet3 && (
            <div className="ctn-description-about-4">
              <p className="description-about-4">
                Sécurité La sécurité est la priorité de Kasa. Aussi bien pour
                nos hôtes que pour les voyageurs, chaque logement correspond aux
                critères de sécurité établis par nos services. En laissant une
                note aussi bien à l'hôte qu'au locataire, cela permet à nos
                équipes de vérifier que les standards sont bien respectés. Nous
                organisons également des ateliers sur la sécurité domestique
                pour nos hôtes. Miguel
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
