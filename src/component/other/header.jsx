import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeaderComponent() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-light px-4">
                    <button className="btn btn-danger d-flex align-items-center">
                        <i className="fas fa-car me-2"></i>
                        AUTO WORLD
                    </button>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto ms-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#offers">
                                    <i className="fas fa-gift me-1"></i> Offers
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    <i className="fas fa-envelope me-1"></i> Contact Us
                                </a>
                            </li>
                        </ul>
                        <button className="btn btn-dark">Signup</button>
                    </div>
                </nav>
            </header>
        </>
    );
}