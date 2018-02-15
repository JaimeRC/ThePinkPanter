import React, {Component} from 'react'
import './styles/main.css'
import pinkPanterApi from '../../pinkPanterApi';
import Jumbotron from '../Jumbotron'
import ItemResume from '../ItemResume'
import ItemCast from '../ItemCast'
import ItemTrailer from '../ItemTrailer'
import Card from '../Card'

/**
 * @param {class} DetailsItem - show only one tv or movie details
 * @param {array} item - movie or tv detail 
 */

class DetailsItem extends Component {
    constructor() {
        super()
        this.state = {
            item: {}
        }
    }

    componentWillMount() {
        pinkPanterApi.getDetaillsIdType(this.props.match.params.type, this.props.match.params.id)
            .then(item => this.setState({ item }))
    }

    render() {
        return (
            <div>
                <Jumbotron title={(this.state.item.title) ? this.state.item.title : this.state.item.name} />

                <ItemResume item={this.state.item} />

                <ItemCast idItem={this.props.match.params.id} type={this.props.match.params.type} />

                <ItemTrailer idItem={this.props.match.params.id} type={this.props.match.params.type} />
            </div>
        )
    }
}

export default DetailsItem