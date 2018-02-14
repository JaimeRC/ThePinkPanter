import React, { Component } from 'react'
import './styles/main.css'
import pinkPanterApi from '../../pinkPanterApi.js';


class ItemTrailer extends React.Component {
    constructor() {
        super()
        this.state = {
            video: ""
        }
    }

    componentWillMount() {
        pinkPanterApi.getVideos(this.props.type, this.props.idItem)
            .then(video => this.setState({ video }))
    }


    render() {
        return (
            <div id="trailer" className="d-flex justify-content-center">
                <iframe id="ytplayer" type="text/html" width={640} height={360} src={`http://www.youtube.com/embed/${this.state.video}`} frameBorder={0} />
            </div>
        )
    }
}


export default ItemTrailer