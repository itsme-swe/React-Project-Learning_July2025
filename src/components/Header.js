import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, setBtnName] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              Cart
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName(!btnName);
              console.log(btnName);
            }}
          >
            {btnName ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};
