import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import AuthDetails from "./components/AuthDetails";



// import Grocery from "./components/Grocery";

//chunking
//code splitting
//Lazy Loading
//on demand loading
//suspense state component  that acts btw the loading phase of lazy component-grocery

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {


  const [userName, setUserName] = useState();
  //Authentication 
  useEffect(() => {
    // make an api call and send username and password t

    const data = {
      name: "App In Production"
    };
    setUserName(data.name);
  }, [])


  //passing store as a prop
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">

          <Header />
          <AuthDetails />
          <Outlet />
          <Footer />

          {/* if path = /  
      <Body />
      if path = /about  
      <About/>
        if path = /contact  
      <Contact/> */}
      
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//it takes a list of path
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading Grocery</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      }, {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }, {
        path: "/cart",
        element: <Cart />,
      }
    ],
    errorElement: <Error />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);