import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import logo from "../assets/Frame1.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";

import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";



const Header = () => {

  let btnName = "login";
  let [buttonName, setButtonName] = useState("login");

  //if no dependency array useeffect is called on every component render
  // if dependency array is empty = [] -->useeffect is called on inital render and just once


  //if there is something as an dependency [setButtonName], then it will call everytime the the buttonName changes. -> Check Slack

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  console.log(data);

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  useEffect(() => {
    console.log("useeffect called")
  }, [])

  //subscribing to the store using our selector  
  //READ the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header-container  ">

        <div className="bg-purple-800 flex justify-between shadow-lg ">

          <div className="logo-container">
            <img className="m-3 ml-10" src={logo} />
          </div>

          <div className="flex items-center">
            <ul className="flex p-5 text-xl font-semibold text-slate-200 ">



              <li className="px-4 hover:scale-110 hover:translate-y-0.2 transition-all hover:text-yellow-300">
                <Link to="">Home</Link>
              </li>

              <li className="px-4 hover:scale-110 hover:translate-y-0.2 transition-all hover:text-yellow-300">
                <Link to="/about">About Us</Link>
              </li>

              <li className="px-4 hover:scale-110 hover:translate-y-0.2 transition-all hover:text-yellow-300">
                <Link to="/grocery">Grocery</Link>
              </li>

              <li className="px-4 hover:scale-110 hover:translate-y-0.2 transition-all hover:text-yellow-300">
                <Link to="/contact">Contact Us</Link>
              </li>

              <li className="px-4 hover:scale-110 hover:translate-y-0.2 transition-all hover:text-yellow-300">
                <Link to="/signin"><FaUser size="20px" className="inline mr-2" />Login</Link>
              </li>

              <li className="px-4 hover:scale-110 hover:translate-y-0.2 transition-all hover:text-yellow-300 ">
         
                 {cartItems.length === 0 && <li className="" ><Link to="/cart"> <IoCartSharp size="30px" className="inline"/>  {cartItems.length} </Link></li>}

                {cartItems.length != 0 && 
                <li className=" text-yellow-300 animate-bounce" >
                  <Link to="/cart">
                  <IoCartSharp size="30px" className="inline"/> {cartItems.length} 
                  </Link>
                </li>}

              </li>

              {/* <li className="px-4 hover:scale-110 hover:translate-y-1 transition-all animate-bounce">
                <Link to="/cart">Cart {cartItems.length} Items</Link>
              </li> */}

            </ul>
          </div>

        </div>

        <div className="bg-purple-300 flex flex-row-reverse items-center px-5 mb-8">
          <button className="px-4"
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

          <div className="font-bold py-3">{loggedInUser}</div>

          <div className="px-4 text-blue-700">Online Status : {onlineStatus ? "🟢" : "🔴"} </div>
          {/* Conatact Design Team */}

        </div>

    </div>
  );
};

export default Header;