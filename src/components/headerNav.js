import "../style/acceuil.css";
import { Link } from "react-router-dom";

export function HeaderNav() {
  const title = "Kasa";
  return (
    <div className="nav">
      <li>
        <h1 className="title">{title}</h1>
      </li>
      <div className="flex-end">
        <li>
          <Link to="/">Acceuil</Link>
        </li>
        <li>
          <Link to="/a-propos">A propos</Link>
        </li>
      </div>
    </div>
  );
}
