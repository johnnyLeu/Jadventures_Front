// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, handleLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark mb-2">
            <div className="container-fluid mx-5">
                <Link className="navbar-brand bg-dark col-1" to="/">
                    <img width={150} height={50} src="logo.png" alt="Logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item mx-5">
                            <Link className="nav-link active text-white col-5 fs-4" to="Homepage">
                                ALL QUEST
                            </Link>
                        </li>
                    </ul>
                    {isAuthenticated && (
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item mx-5">
                                <Link className="nav-link active text-white col-5 fs-4" to="">
                                    MY QUEST
                                </Link>
                            </li>
                            <li className="nav-item mx-5">
                                <span className="nav-link text-white col-5 fs-4">Guild Name</span>
                            </li>
                            <li className="nav-item mx-5 ms-auto">
                                <button onClick={handleLogout} className="btn btn-outline-light">Logout</button>
                            </li>
                        </ul>
                    )}
                    {!isAuthenticated && (
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-5">
                                <Link className="nav-link active text-white col-5 fs-4" to="patronlogin">
                                    LOGIN
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
