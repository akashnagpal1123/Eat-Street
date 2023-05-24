import React from 'react';
import ReactDOM from 'react-dom/client ';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Contact from "./components/Contact";
import RestaurantMenu from './components/RestaurantMenu';

import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/* <About />
            <Body />  
            <Contact/> */}
            {/* {outlest to fill in different pages} */}
            <Outlet/>
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering a react element
// root.render(jsxHeading);

//rendering a functional component
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);




