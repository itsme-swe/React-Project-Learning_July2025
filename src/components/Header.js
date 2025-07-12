import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState(false);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </Link>
      </div>

      <div className="nav-items">
        <ul>
          <li> {onlineStatus ? "Online 🟢" : "Offline 🔴"}</li>
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
            <Link to="/instamart" style={{ textDecoration: "none" }}>
              InstaMart
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
