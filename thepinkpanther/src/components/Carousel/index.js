import React from 'react'

class CarouselApp extends React.Component {
    constructor() {
        super()
        this.state = {
            films: []
        }
    }

    showFilm = (idFilm) => {
        console.log(idFilm);
    }

    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                    <CarouselItem films={this.state.films} onShowFilm={this.showFilm} />

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        )
    }
}

function CarouselItem(props) {
    var itemActive = props.films.splice(0, 1)
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={itemActive[0].backdrop_path} alt="First slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{itemActive[0].title}</h5>
                    <p>{itemActive[0].overview}</p>
                </div>
            </div>
            {props.films.map(film => {
                return (
                    <div className="carousel-item">
                        <img className="d-block w-100" src={film.backdrop_path} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{film.title}</h5>
                            <p>{film.overview}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Carousel