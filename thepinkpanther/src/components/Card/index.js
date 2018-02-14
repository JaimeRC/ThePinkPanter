import React, { Component } from 'react';
import './main.css';
import pinkPanterApi from '../../pinkPanterApi';


function Card(props) {
    return (<div className="flip-container">
        <div className="front">
            <img src={`http://image.tmdb.org/t/p/w500/${props.itemActiveFilms.poster_path}`} alt="" />
            <div className="footer">
                <h3><strong>{(props.itemActiveFilms.title) ? props.itemActiveFilms.title : props.itemActiveFilms.name}</strong><br />
                    
                </h3>
            </div>
        </div>
        <div className="back">
            <h3><strong>{(props.itemActiveFilms.title) ? props.itemActiveFilms.title : props.itemActiveFilms.name}</strong></h3>
              
                <p> {props.itemActiveFilms.overview}</p>
        </div>
    </div>)
}


export default Card