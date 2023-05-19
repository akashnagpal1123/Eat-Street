import { LOGO_URL } from "../utils/constants";
import logo1 from "../assets/Frame1.png";
import { useState } from "react";

const loggedInUser = () => {
    //api call to check authentication status
    //if success return true
    //else return false

    return false;
}

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [title, setTitle] = useState("Eat Street")
    return (
        <div className="headerMain">
            <div className="wrapper">
                <div className="header">
                    <div  >
                        {/* <img className="logo" src={LOGO_URL} /> */}
                        <img className="logo-header" src={logo1} />
                        <h1>{title}</h1>
                    <button onClick={() => { setTitle("Welcome Akash") }
                    }>Press Button</button>
                    </div>

                    <div className="nav-items">
                        <ul>
                            <li> <a href="#">Home</a></li>
                            <li> <a href="#">About Us</a></li>
                            <li> <a href="#">Contact Us</a></li>
                            <li> <a href="#">Cart</a></li>
                        </ul>
                    </div>


                    {
                        //js expression and js statements
                        //expressions work but js statementrs doesnt
                        //((a=10),console.log(a))
                        // if(){

                        // }
                        // if else wouldn't work here in curly braces bcoz it is a statement 
                        //therefore we will use ternary operatorr


                    }
                    {isLoggedIn 
                    ? 
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    : 
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                    }


                </div>
            </div>
        </div>
    )

}

export default Header;