import { Link } from "react-router-dom";
import "../style/error.css";
export function Error() {
  return (
    <div className="ctn-error">
      <div className="error-404">
        <h1>404</h1>
      </div>
      <div className="text-error">
        <h5>Oups! La page que vous demandez n'existe pas.</h5>
      </div>
      <div className="lien-error">
        <Link to={"/"}>
          <p>Retourner sur la page d’accueil</p>
        </Link>
      </div>
    </div>
  );
}
