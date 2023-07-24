import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

// import Grocery from "./components/Grocery";

//chunking
//code splitting
//Lazy Loading
//on demand loading
//suspense state component  that acts btw the loading phase of lazy component-grocery

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = () => {
  return (
    
    <div className="app">
      
      <Header />
      <Outlet/>

      {/* if path = /  
      <Body />
      if path = /about  
      <About/>
        if path = /contact  
      <Contact/> */}
    </div>
  );
};

//it takes a list of path
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h1>Loading Grocery</h1>}><Grocery/></Suspense>,
      },
      {
        path:"/contact",
        element: <Contact/>,
      },{
        path:"/restaurants/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);