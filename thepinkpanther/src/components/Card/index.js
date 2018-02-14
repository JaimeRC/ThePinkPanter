import React from 'react';
import './styles/main.css';
import no_image from './images/no_image.jpg'


function Card(props) {
    return (<div className="flip-container">
        <div className="front">
            <img src={(props.item.poster_path) ? `http://image.tmdb.org/t/p/w500/${props.item.poster_path}` : no_image} alt={(props.item.title) ? props.item.title : props.item.name} />
        </div>
        <div className="back">
            <h3><strong>{(props.item.title) ? props.item.title : props.item.name}</strong></h3>
            <p> {(props.item.overview) ? props.item.overview.substring(0, 300).concat("...") : undefined}</p>
        </div>
    </div>)
}

export default Card