import React from 'react'
import SearchWithRouter from '../Search';
import { NavLink } from 'react-router-dom'

function Header(props) {
    return (
            <div className="App">
                <header className="App-header">
                    <nav id="header" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <NavLink className="nav-link" to="/" activeClassName="active">Movie & Serie</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/Films" activeClassName="active">Peliculas</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/TV" activeClassName="active">Series</NavLink>
                                </li>
                            </ul>
                            <SearchWithRouter />
                        </div>
                    </nav>
                </header>
            </div>
    )
}


export default Header

