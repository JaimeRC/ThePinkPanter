import React from 'react';
import './styles/main.css';
import no_image from './images/no_image.jpg'


function Card(props) {
    return (<div className="flip-container">
        <div className="front">
            <img src={(props.item.poster_path) ? `http://image.tmdb.org/t/p/w500/${props.item.poster_path}` : no_image} alt={(props.item.title) ? props.item.title : props.item.name} />
        </div>
        <div className="back">
<<<<<<< HEAD
            <h3><strong>{(props.item.title) ? props.item.title : props.item.name}</strong></h3>
            <p> {(props.item.overview) ? props.item.overview.substring(0, 300).concat("...") : undefined}</p>
=======
            <h3><strong>{(props.itemActiveFilms.title) ? props.itemActiveFilms.title : props.itemActiveFilms.name}</strong></h3>
                <p> {props.itemActiveFilms.overview.substring(0,200).concat("...")}</p>
            <button class="btn my-2 my-sm-0">Series</button>
>>>>>>> 0acb675796460d226bfab000a1d83151fd6003eb
        </div>
    </div>)
}

export default Card