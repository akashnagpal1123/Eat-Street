import { useRouteError } from "react-router-dom";
import {Link} from "react-router-dom";
import "./Error.css";



const Error = () => {

    const err = useRouteError();

    console.log(err);
    console.log(err.status);
    console.log(err.data);
    return (
        <div className="err-mega-box">
            <h1>Oops! Something Went Wrong</h1>
            <h1>{err.status} Error </h1>
            <p className="zoom-area">{err.data}</p>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link to="/about" class="more-link">Visit the original article</Link>
            </div>
        </div>
    )
}

export default Error;