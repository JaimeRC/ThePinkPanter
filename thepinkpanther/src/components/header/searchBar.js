import React, { Component } from 'react';
import './styles/main.css'

function SearchBar(props) {
    return <nav id="searchBar" className="navbar navbar-light bg-light">
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

        </form>
    </nav>
}

export default searchBar