import { useLocation } from "react-router-dom";
import homeLogo from "../asset/homeLogo.png";
import aboutLogo from "../asset/aboutLogo.png";

function Header(props) {
  const location = useLocation();
  const isHome = props.isHome || location.pathname === "/"; 
  const about = props.about || location.pathname === "/a-propos"

  return (
    <div>
        <div className="div-img">
          <img src={isHome ? homeLogo : aboutLogo || about ? aboutLogo : homeLogo} alt="falaise location" className="img" />
          {isHome && <h1>Chez vous, partout et ailleurs</h1>}
        </div>
        
    </div>
  );
}

export default Header;