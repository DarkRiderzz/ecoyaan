import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header-cnt">
      <div className="header">
        <p className="logo">Ecoyaan</p>
        <ul className="header-list">
          <li>
            <NavLink className="footer-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="footer-link" to="/about-us">
              About us
            </NavLink>
          </li>
          <li className="visible">Sell on Ecoyaan</li>
          <li className="visible">Careers</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
