import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import pinkPanterApi from '../../pinkPanterApi.js';
import Home from '../Home'
import DetailsItem from '../DetailsItem'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            films: [],
            itemActiveFilms: [],
            series: [],
            itemActiveSeries: [],
            item: {},
            type: ""
        }
    }
    componentWillMount() {
        pinkPanterApi.getTypePopular('movie', 1)
            .then(films => this.setState({ itemActiveFilms: films.shift(), films }))
        pinkPanterApi.getTypePopular('tv', 1)
            .then(series => this.setState({ itemActiveSeries: series.shift(), series }))
    }



    render() {
        console.log(this.state.item + "    item")
        console.log(this.state.type + "   tipo")
        return (
            <div className="header">

                <Route exact path="/" render={() => (
                    <Home
                        films={this.state.films}
                        itemActiveFilms={this.state.itemActiveFilms}
                        series={this.state.series}
                        itemActiveSeries={this.state.itemActiveSeries}
                        onShowItem={this.showItem} />)} />
                {/* <Route exact path="/Films" component={Films} />
            <Route path="/TV" component={TV} /> */}
                <Route exact path="/details" render={() => (
                    <DetailsItem item={this.state.item} type={this.state.type} />
                )} />
            </div>)
    }
}

export default Main