<<<<<<< HEAD
'use strict'
// import movieApi from '../../movieApi';
import React, { Component } from 'react'
import pinkPanterApi from '../../pinkPanterApi.js'
import './styles/main.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            movies: ''
        }
    }

    keepInput = (e) => this.setState({ query: e.target.value })

    getInfo = (e) => {
        e.preventDefault();
        pinkPanterApi.getSearch(this.state.query)
            .then(info => console.log(info))
    }

    render() {
        return <div>
            <form className="form-inline" onSubmit={this.getInfo}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.keepInput} />
                <button id="Find" className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </div>
    }
=======
import React, { Component } from 'react'
import Search from './Search';
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
                            <Search />
                        </div>
                    </nav>
                </header>
            </div>
        
    )
>>>>>>> a8a7aba7d8ff02f8feb9b0765f8fc052b2e4c6be
}


export default Header

