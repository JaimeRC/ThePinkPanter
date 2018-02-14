import React, { Component } from 'react'
import Search from './Search';
import { NavLink } from 'react-router-dom'

<<<<<<< HEAD
function Header(props) {
=======
class Header extends Component {
    constructor() {
        super();
        this.state = {
            query:'',
            movies: ''
        }
    }
>>>>>>> 64ac4f341cbb8a31c807f2cc33e342c1b7f9b733

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
                            <Search />
                        </div>
                    </nav>
                </header>
            </div>
        
    )
}


export default Header

