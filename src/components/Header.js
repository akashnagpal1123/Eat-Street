import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import logo from "../assets/Frame1.png";
import { Link } from "react-router-dom";

const Header = () => {

  let btnName = "login";
  let [buttonName, setButtonName] = useState("login");

  //if no dependency array useeffect is called on every component render
  // if dependency array is empty = [] -->useeffect is called on inital render and just once
  //if there is something as an dependency [setButtonName], then it will call everytime the the buttonName changes.


  useEffect(() => {
    console.log("useeffect called")
  }, [])

  return (
    <div className="header-container">
      <div className="wrapper">
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={logo} />
          </div>
          <div className="nav-items">
            <ul>

              <li>
                <Link to="">Home</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              <li>
                <Link to="/cart">Cart</Link>
              </li>
               
              <button className="header-login-btn"
                onClick={() => {
                  if (buttonName === "login") {
                    setButtonName("logout")
                  }
                  else {
                    setButtonName("login")
                  }
                }}
              >
                {buttonName}</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;