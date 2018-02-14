import React, { Component } from 'react'
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
        console.log(this.state.cast)
        return (
            <div id="reviews" className="container">
                <ul>
                    {this.state.cast.map(actor => {
                        return (
                            <li><img src={actor.profile_path} />{actor.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ItemCast