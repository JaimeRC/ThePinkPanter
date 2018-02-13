import React, { Component } from 'react'
import './styles/main.css'

function Carousel(props) {
    return (
        <div>
            <div id={props.title} className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w1280/${props.itemActiveFilms.backdrop_path}`} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{(props.itemActiveFilms.title) ? props.itemActiveFilms.title : props.itemActiveFilms.name}</h5>
                            <p>{props.itemActiveFilms.overview}</p>
                        </div>
                    </div>

                    {props.films.map(film => {
                        return (
                            <div className="carousel-item">
                                <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{(film.title) ? props.title : props.name}</h5>
                                    <p>{film.overview}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <a className="carousel-control-prev" href={`#${props.title}`} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={`#${props.title}`} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}


export default Carousel