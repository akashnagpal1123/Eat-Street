import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import logo from "../assets/Frame1.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  let btnName = "login";
  let [buttonName, setButtonName] = useState("login");

  //if no dependency array useeffect is called on every component render
  // if dependency array is empty = [] -->useeffect is called on inital render and just once
  //if there is something as an dependency [setButtonName], then it will call everytime the the buttonName changes.

  const onlineStatus = useOnlineStatus();


  useEffect(() => {
    console.log("useeffect called")
  }, [])

  return (
    <div className="header-container ">
      <div className="wrapper">
        <div className="flex justify-between bg-pink-950 shadow-lg mb-10">
          <div className="logo-container">
            <img className="m-5" src={logo} />
          </div>
          <div className="flex items-center">
            <ul className="flex p-10">

              <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"} </li>

              <li className="px-4">
                <Link to="">Home</Link>
              </li>

              <li className="px-4">
                <Link to="/about">About Us</Link>
              </li>

              <li className="px-4">
                <Link to="/grocery">Grocery</Link>
              </li>

              <li className="px-4">
                <Link to="/contact">Contact Us</Link>
              </li>

              <li className="px-4">
                <Link to="/cart">Cart</Link>
              </li>

              <button className="px-4 header-login-btn" 
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