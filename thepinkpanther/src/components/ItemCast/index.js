import React from 'react'
import './styles/main.css'
import pinkPanterApi from '../../pinkPanterApi.js';

class ItemCast extends React.Component {
    constructor() {
        super()
        this.state = {
            cast: []
        }
    }

    componentWillMount() {
        pinkPanterApi.getCast(this.props.type, this.props.idItem)
            .then(cast => this.setState({ cast }))
    }

    render() {
        return (
            <div id="reviews" className="container">
                <ul>
                    {this.state.cast.map(actor => {
                        return (
                            <li key={actor.id}><img className="cast" src={`http://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />{actor.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ItemCast