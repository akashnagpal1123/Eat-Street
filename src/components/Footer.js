import React from 'react';
import { LOGO_URL } from "../utils/constants";
import logo from "../assets/Frame1.png";

function Footer() {
    return (
        <div className="footer bg-fuchsia-800  text-black">
            <div className="wrapper">
                <div className="logo-container ">
                    <img className="m-5" src={logo} />
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Social Links</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;