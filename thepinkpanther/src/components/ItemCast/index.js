import React, { Componnent, Component } from 'react'
import './styles/main.css'
import pinkPanterApi from '../../pinkPanterApi.js';

class ItemCast extends Component {
    constructor() {
        super()
        this.state = {
            cast: []
        }
    }

    componentWillMount(){
        /*console.log(props.type)*/
        /*
        pinkPanterApi.getCredits(props.type, props.idItem)
            .then(cast => {cast})
            */
    }

    render() {
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