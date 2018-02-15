import React from 'react'
import './styles/main.css'

function ItemResume(props) {
    return (
        <div id="info" className="resume">
            <div className="colum1">
                <img className="img-thumbnail" src={`http://image.tmdb.org/t/p/w500/${props.item.poster_path}`} alt={props.item.id} />
            </div>
            <div className="colum2">
                <h1>{(props.item.tagline) ? props.item.tagline : null}</h1>
                <br />
                <br />
                <p>{props.item.overview}</p>
            </div>
        </div>
    )
}

export default ItemResume