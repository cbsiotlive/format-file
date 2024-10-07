import React, { useState } from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className=" justify-content-between w-100">

                        <div className="navbar-nav">
                            <a className="nav-link" href="#">Dashboard</a>
                            <a className="nav-link" href="/">View</a>
                            <a className="nav-link" href="/add">Form</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
