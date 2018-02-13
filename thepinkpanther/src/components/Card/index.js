import React, { Component } from 'react';
import './styles/card.css';
import pinkPanterApi from './pinkPanterApi';


function Card(props) {
    <div className="flip-container">
        <div className="front">
            <img src={`http://image.tmdb.org/t/p/w1280/${props.itemActiveFilms.backdrop_path}`} alt="" />
            <div className="footer">
                <p><strong>{props.itemActiveFilms.title}</strong><br />
                    Film category
                </p>
            </div>
        </div>
        <div className="back">
            <p><strong>{props.itemActiveFilms.title}</strong>
                <br />
                <br /> {props.itemActiveFilms.overview}
                </p>
        </div>
    </div>
}


export default Card