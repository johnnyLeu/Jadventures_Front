import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);    
    
    return (
    <>
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
            <li className="nav-item mx-5 ">
                <Link className="nav-link active text-white col-5 fs-4" to="">
                  ALL QUEST
                </Link>
            </li>
            {isAuthenticated && (  
                                    <li className="nav-item mx-5 ms-auto">
                                        <Link className="nav-link active text-white col-5 fs-4" to="">
                                            MY QUEST
                                        </Link>
                                    </li>
                                )
            }
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-5">
                <Link className="nav-link active text-white col-5 fs-4" to="patronlogin">
                  LOGIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
