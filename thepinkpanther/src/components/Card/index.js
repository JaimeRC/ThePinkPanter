import React from 'react';
import './styles/main.css';
import no_image from './images/no_image.jpg'
import withRouter from 'react-router-dom/withRouter';

class Card extends React.Component {
    constructor() {
        super()
        this.state = {
            id: ""
        }
    }

    idItem = (type,id) => {
        this.props.history.push(`/details/${type}/${id}`)
    }

render() {
    return (<div className="flip-container">
        <div className="front">
            <img src={`http://image.tmdb.org/t/p/w500/${this.props.item.poster_path}`} alt="" />
            
            
        </div>
        <div className="back">
            <h3><strong>{(this.props.item.title) ? this.props.item.title : this.props.item.name}</strong></h3>
                <p> {this.props.item.overview.substring(0,200).concat("...")}</p>
            <button class="btn my-2 my-sm-0" onClick={(e) => { e.preventDefault(); this.idItem(this.props.type,this.props.item.id) }}>Info</button>
        </div>
    </div>)
}
}

export default withRouter(Card)
