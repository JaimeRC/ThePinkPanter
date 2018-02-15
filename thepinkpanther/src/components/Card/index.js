import React, { Component } from 'react';
import './main.css';
import withRouter from 'react-router-dom/withRouter';

class Card extends Component {
    constructor() {
        super()
        this.state = {
            id: ""
        }
    }

    idItem = (id) => {
        this.props.history.push(`/details/${id}`)
    }

render() {
    return (<div className="flip-container">
        <div className="front">
            <img src={`http://image.tmdb.org/t/p/w500/${this.props.itemActiveFilms.poster_path}`} alt="" />
            
        </div>
        <div className="back">
            <h3><strong>{(this.props.itemActiveFilms.title) ? this.props.itemActiveFilms.title : this.props.itemActiveFilms.name}</strong></h3>
                <p> {this.props.itemActiveFilms.overview.substring(0,200).concat("...")}</p>
            <button class="btn my-2 my-sm-0" onClick={(e) => { e.preventDefault(); this.idItem() }}>Info</button>
        </div>
    </div>)
}
}

export default withRouter(Card)