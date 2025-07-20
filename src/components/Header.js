import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [btnName, setBtnName] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
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
            }}
          >
            {btnName ? "Logout" : "Login"}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
