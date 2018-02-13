import React, { Component } from 'react'
import './styles/main.css'

function Carousel(props) {
    let type = props.title;
    return (
        <div>
            <div id={type} className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w1280/${props.itemActiveFilms.backdrop_path}`} />
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={(e) => { e.preventDefault(); props.onShowItem(type, props.itemActiveFilms.id) }}>
                                <h6>{(props.itemActiveFilms.title) ? props.itemActiveFilms.title : props.itemActiveFilms.name}</h6>
                            </button>
                        </div>
                    </div>

                    {props.films.map(film => {
                        return (
                            <div className="carousel-item">
                                <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w1280/${film.backdrop_path}`} />
                                <div className="carousel-caption d-none d-md-block">
                                    <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={(e) => { e.preventDefault(); props.onShowItem(type, film.id) }}>
                                        <h5>{film.title ? film.title : film.name}</h5>
                                    </button>
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