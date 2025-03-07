import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [buttonValue, setButtonValue] = useState("login");

  return (
    <div className="header">
      <div className="img-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              buttonValue == "login"
                ? setButtonValue("logout")
                : setButtonValue("login");
            }}
          >
            {buttonValue}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
