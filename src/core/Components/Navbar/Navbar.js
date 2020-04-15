import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  border-bottom shadow-sm">
            <div className="container">
                <a className="navbar-brand p-0" href="/">
                    <img src="/images/logo.png" width="100" height="auto" alt="logo" />
                </a>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="btn btn-outline-danger" href="/">
                            <span>VOLVER AL INICIO</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;