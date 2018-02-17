import React, {Component} from 'react'
import './styles/main.css'
import pinkPanterApi from '../../pinkPanterApi';
import Jumbotron from '../Jumbotron'
import ItemResume from '../ItemResume'
import ItemCast from '../ItemCast'
import ItemTrailer from '../ItemTrailer'

class DetailsItem extends Component {
    constructor() {
        super()
        this.state = {
            item: {}
        }
    }

<<<<<<< HEAD:src/components/DetailsItem/index.js
    componentDidMount() {
        window.scrollTo(0, 0)
    }
=======
    

>>>>>>> 942a5a9a116e5bebc77710baeffdb548837b3597:thepinkpanther/src/components/DetailsItem/index.js

    componentWillMount() {
        pinkPanterApi.getDetaillsIdType(this.props.match.params.type, this.props.match.params.id, this.props.lang)
            .then(item => this.setState({ item }))
    }

    componentWillReceiveProps(props){
        pinkPanterApi.getDetaillsIdType(this.props.match.params.type, this.props.match.params.id, this.props.lang)
            .then(item => this.setState({ item }))
    }

    render() {
        return (
            <div>
                <Jumbotron title={(this.state.item.title) ? this.state.item.title : this.state.item.name} lang={this.props.lang}/>

                <ItemResume item={this.state.item} lang={this.props.lang}/>

                <ItemCast idItem={this.props.match.params.id} type={this.props.match.params.type} lang={this.props.lang}/>

                <ItemTrailer idItem={this.props.match.params.id} type={this.props.match.params.type} lang={this.props.lang}/>
            </div>
        )
    }
}

export default DetailsItem