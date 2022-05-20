import React from 'react';
import { Link } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "./css/navbar.css";
import './js/nav-sroll.js';
function Navbar() {
    return (
        <div classNameName='Content'>
            <nav className="navbar navbar-expand-md navbar-light bg-none">
                <div className="container">
                    <Link className="navbar-brand" to="/">M D Choraria &amp; Associates</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link navigationlinks" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navigationlinks" aria-current="page" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navigationlinks" aria-current="page" to="/membership">Membership</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navigationlinks" aria-current="page" to="/faqs">FAQ's</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navigationlinks" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navigationlinks" aria-current="page" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                
            </nav>
            <center><div className="divider"></div></center>
        </div>
    )
}

export default Navbar;