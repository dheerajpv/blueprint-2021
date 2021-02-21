import React from "react";
import "./Navbar.css";

//Navigation Bar for the three pages
const Navbar = ({ page }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Exoplanet Enterprise
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <a
                                href="/"
                                className={`nav-link ${
                                    page === "/" ? "active" : ""
                                }`}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/exoplanets"
                                className={`nav-link ${
                                    page === "/exoplanets" ? "active" : ""
                                }`}
                            >
                                Exoplanets
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className={`nav-link ${
                                    page === "/about" ? "active" : ""
                                }`}
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
