import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  let [buttonValue, setButtonValue] = useState("login");
  console.log("Header Rendered");
  useEffect(() => {
    console.log("useEffect Called");
  }, [buttonValue]);
  return (
    <div className="header">
      <div className="img-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>OnlineStatus :{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contactus">Contact Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>

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
