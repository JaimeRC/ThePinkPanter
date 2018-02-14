import React, { Componnent, Component } from 'react'
import './styles/main.css'
import pinkPanterApi from '../../pinkPanterApi.js';

class ItemTrailer extends Component {
    constructor() {
        super()
        this.state = {
            video: []
        }
    }

    componentWillMount() {
        /*console.log(props.type)*/
        /*
        pinkPanterApi.getVideos(props.type, props.idItem)
            .then(video => { video: video.results })
            */
    }

    render() {
        return (
            <div id="trailer" className="d-flex justify-content-center">
                <iframe id="ytplayer" type="text/html" width={640} height={360} src={`http://www.youtube.com/embed/${this.state.video[0].id}`} frameBorder={0} />
            </div>
        )
    }
}


export default ItemTrailer