import React, { Componnent } from 'react'
import './styles/main.css'
import Jumbotron from '../Jumbotron'
import ItemResume from '../ItemResume'
import ItemCast from '../ItemCast'
import ItemTrailer from '../ItemTrailer'

class DetailsItem extends Comment {
    constructor() {
        super()
        this.state = {
            item: []
        }
    }

    showItem = (type, id) => {
        pinkPanterApi.getDetaillsIdType(type, id)
            .then(item => this.setState({ item }))
    }

    render() {
        return (
            <div>
                <Jumbotron title={(props.item.title) ? props.item.title : props.item.name} />

                <ItemResume item={props.item} />

                <ItemCast idItem={props.item.id} type={props.type} />

                <ItemTrailer idItem={props.item.id} type={props.type} />

            </div>
        )
    }
}

export default DetailsItem