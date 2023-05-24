import React from 'react';
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const msg = useRouteError();
    console.log(msg);

    return (
        <div>
            <h1>
                Oops!! Something went wrong!
            </h1>
            <h2>Error Type</h2>
            <h3>{msg.status + ":" + msg.statusText}</h3>
        </div>
    )
}

export default ErrorPage;