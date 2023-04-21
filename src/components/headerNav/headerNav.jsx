import "./headerNav.css";
import { Link } from "react-router-dom";
import kasaRed from "../../asset/kasaRed.svg";

export function HeaderNav() {
  return (
    <div className="nav">
      <li>
        <img className="logoKasa" alt="logo" src={kasaRed} />
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
