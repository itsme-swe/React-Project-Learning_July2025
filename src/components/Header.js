import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

export const Header = () => {
  const [btnName, setBtnName] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
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
