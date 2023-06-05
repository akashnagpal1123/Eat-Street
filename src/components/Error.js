import { useRouteError } from "react-router-dom";

const Error =()=>{

    const err = useRouteError();

    console.log(err);
    console.log(err.status);
    console.log(err.data);
    return (
        <div>Error Page
            <h1>Oops! Something Went Wrong</h1>
            <h2>Error {err.status}</h2>
            <h2> {err.data}</h2>
        </div>
    )
}

export default Error;