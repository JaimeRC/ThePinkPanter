import React, { Component } from 'react';
import './main.css';


function Card(props) {
    return (<div className="flip-container">
        <div className="front">
            <img src={`http://image.tmdb.org/t/p/w500/${props.itemActiveFilms.poster_path}`} alt="" />
            
        </div>
        <div className="back">
            <h3><strong>{(props.itemActiveFilms.title) ? props.itemActiveFilms.title : props.itemActiveFilms.name}</strong></h3>
                <p> {props.itemActiveFilms.overview.substring(0,300).concat("...")}</p>
           
        </div>
    </div>)
}


export default Card