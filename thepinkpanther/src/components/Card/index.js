import React from 'react';
import './styles/main.css';
import no_image from './images/no_image.jpg'
import withRouter from 'react-router-dom/withRouter';

/**
 * @param {class} Card - show info card movies or tvs
 * @param {object} item - object tvs or movies
 * @param {function} idItem - create dinamic url
 * @param {string} type - type (movie o tv)
 * @param {integer} id - id movie or tv 
 */

class Card extends React.Component {
    constructor() {
        super()
    }

    idItem = (type, id) => {
        this.props.history.push(`/details/${type}/${id}`)
    }

    render() {
        return (<div className="flip-container">
            <div className="front">
                <img src={(this.props.item.poster_path) ? `http://image.tmdb.org/t/p/w500/${this.props.item.poster_path}` : no_image} alt={this.props.item.id} />


            </div>
            <div className="back">
                <h3><strong>{(this.props.item.title) ? this.props.item.title : this.props.item.name}</strong></h3>
                <p> {(this.props.item.overview) ? this.props.item.overview.substring(0, 200).concat("...") : undefined}</p>
                <button class="btn my-2 my-sm-0" onClick={(e) => { e.preventDefault(); this.idItem(this.props.type, this.props.item.id) }}>Info</button>
            </div>
        </div>)
    }
}

export default withRouter(Card)
