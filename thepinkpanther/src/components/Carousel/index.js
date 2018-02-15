import React from 'react'
import './styles/main.css'
import withRouter from 'react-router-dom/withRouter';

/**
 * @param {class} Carousel - show carousel images popular tvs and movies
 * @param {object} itemActive - show active the first image on carousel 
 * @param {array} item - array populars tvs or movies
 * @param {function} idItem - create dinamic url
 * @param {string} type - type (movie o tv)
 * @param {integer} id - id movie or tv 
 */

class Carousel extends React.Component {
    constructor() {
        super()
    }

    idItem = (type, id) => {
        this.props.history.push(`/details/${type}/${id}`)
    }

    render() {
        return (
            <div>
                <div id={this.props.title} className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div key={this.props.itemActive.id} className="carousel-item active">
                            <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w1280/${this.props.itemActive.backdrop_path}`} alt={(this.props.itemActive.title) ? this.props.itemActive.title : this.props.itemActive.name} />
                            <div className="carousel-caption d-none d-md-block">
                                <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={(e) => { e.preventDefault(); this.idItem(this.props.title, this.props.itemActive.id) }}>
                                    <h6>{(this.props.itemActive.title) ? this.props.itemActive.title : this.props.itemActive.name}</h6>
                                </button>
                            </div>
                        </div>

                        {this.props.items.map(item => {
                            return (
                                <div key={item.id} className="carousel-item">
                                    <img className="d-block w-100" src={`http://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} alt={(item.title) ? item.title : item.name} />
                                    <div className="carousel-caption d-none d-md-block">
                                        <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={(e) => { e.preventDefault(); this.idItem(this.props.title, item.id) }}>
                                            <h5>{item.title ? item.title : item.name}</h5>
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <a className="carousel-control-prev" href={`#${this.props.title}`} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={`#${this.props.title}`} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}


export default withRouter(Carousel)