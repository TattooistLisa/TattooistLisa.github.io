import React from 'react';
import './Css/Navbar.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import nova from '../images/NovaPHC.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <img className="navbar-logo" src={nova} alt="Nova" />
                    Nova Public Health Consulting
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="team">Team</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
