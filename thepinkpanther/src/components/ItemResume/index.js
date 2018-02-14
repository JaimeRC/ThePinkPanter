import React, { Component } from 'react'
import './styles/main.css'

function ItemResume(props) {
    return (
        <div id="info" className="container">
            <div className="row">
                <div className="col">
                    <section>
                        <img className="img-thumbnail" src={`http://image.tmdb.org/t/p/w500/${props.item.poster_path}`} />
                    </section>
                </div>
                <div className="col">
                    <aside>
                        <h1>{(props.item.tagline) ? props.item.tagline : null}</h1>
                        <br />
                        <br />
                        <p>{props.item.overview}</p>
                    </aside>
                </div>
            </div>
        </div>

    )
}

export default ItemResume