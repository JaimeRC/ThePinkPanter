import React from 'react'
import './styles/main.css'
import pinkPanterApi from '../../pinkPanterApi.js';
import no_image from './images/no_image.png'

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
                <div className="row">
                    <div className="col">
                        <ul>
                            {this.state.cast.map(actor => {
                                return (
                                    <li key={actor.id}><img className="cast" src={(actor.profile_path) ? `http://image.tmdb.org/t/p/w500/${actor.profile_path}` : no_image} alt={actor.name} />{actor.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemCast