import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h3>You seem to be lost.</h3>
            <p>
                Try going back to the <Link to="/">homepage</Link>.
            </p>
            <p className="small">
                In the darkness, evil lies alone. Unsupported.
            </p>
        </div>
    );
};

export default NotFound;
