import React from 'react'
import './styles/main.css'
import pinkPanterApi from '../../pinkPanterApi.js';
import tv_image from './images/image_tv.png'

class ItemTrailer extends React.Component {
    constructor() {
        super()
        this.state = {
            video: ""
        }
    }

    componentWillMount() {
        pinkPanterApi.getVideos(this.props.type, this.props.idItem, this.props.lang)
            .then(video => this.setState({ video }))
    }

    componentWillReceiveProps(props){
        pinkPanterApi.getVideos(this.props.type, this.props.idItem, this.props.lang)
            .then(video => this.setState({ video }))
    }

    render() {
        return (
            <div id="trailer" className="d-flex justify-content-center">
<<<<<<< HEAD:src/components/ItemTrailer/index.js
                <img className="imagetv" src={tv_image} alt={"imagen Tv"}/>
                <iframe id="ytplayer" type="text/html" width={640} height={360}  frameBorder={0} alt={"video youtube"} title={" "}
                src={(this.state.video.length > 0) ? `http://www.youtube.com/embed/${this.state.video[0].key}` : undefined}/>
=======
                <img className="imagetv" src={tv_image} alt="marco television" />
                <iframe id="ytplayer" type="text/html" width={640} height={360} frameBorder={0} title="video youtube"
                    src={(this.state.video.length > 0) ? `http://www.youtube.com/embed/${this.state.video[0].key}` : undefined} />
>>>>>>> 942a5a9a116e5bebc77710baeffdb548837b3597:thepinkpanther/src/components/ItemTrailer/index.js
            </div>
        )
    }
}

export default ItemTrailer