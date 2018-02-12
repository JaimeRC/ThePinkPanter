import React, { Component } from 'react';
import './styles/main.css'

const searchBar = (props) => {
    <nav id="header" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Movie & Serie</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Peliculas
                            <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Series</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Otros</a>
                </li>
            </ul>
            <button id="Find" className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>

        </div>
    </nav>
        <nav id="searchBar" className="navbar navbar-light bg-light">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

            </form>
        </nav>
 
}

export default searchBar