import "./footer.css";
import kasaWhite from "../../asset/kasaWhite.svg";
export function Footer() {
  return (
    <div>
      <div className="ctn-footer">
        <img className="logo-footer-kasa" alt="logo" src={kasaWhite} />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
