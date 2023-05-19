import React from 'react';
import { LOGO_URL } from "../utils/constants"

function Footer() {
    return (
        <div className="footer">
            <div className="wrapper">
                <div >
                    <img className="logo-footer" src={LOGO_URL} />
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