import { LOGO_URL } from "../utils/constants";
import logo1 from "../assets/Frame1.png";
import { useState } from "react";
import { Link } from "react-router-dom"; //link component

const loggedInUser = () => {
    //api call to check authentication status
    //if success return true
    //else return false

    return false;
}

const Title = () => (
    <a href="/">
        <img className="logo" alt="logo" src={logo1} />
    </a>
);

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [title, setTitle] = useState("Eat Street")

    return (
        <div className="headerMain">
            <div className="wrapper">
                <div className="header">
                    <Title />
                    <div  >
                        {/* <img className="logo" src={LOGO_URL} /> */}

                        <h1>{title}</h1>
                        <button onClick={() => { setTitle("Welcome Akash") }
                        }>Press Button</button>
                    </div>

                    <div className="nav-items">
                        <ul>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    Contact Us
                                </Link>
                            </li>
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